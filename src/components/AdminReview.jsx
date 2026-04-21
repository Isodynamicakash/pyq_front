/**
 * AdminReview.jsx — ExamSIDE Admin UI
 * PERFORMANCE OVERHAUL:
 *   - QuestionCard wrapped in React.memo with deep-equal comparator → cards that didn't change DON'T re-render
 *   - fixLatex output memoized per unique string → zero re-computation for same text
 *   - Preview pane only updates on "✓ Apply Changes" click, NOT on every keystroke
 *   - Removed `dynamic` prop from every <MathJax> node → no MutationObservers
 *   - Targeted MathJax.typesetPromise(ref) per card, only when preview content changes
 *   - buildChapterOptions / buildTopicOptions / buildPaperOptions wrapped in useMemo
 *   - missingGaps wrapped in useMemo
 *   - localStorage auto-save debounced to 2 s with ref-equality guard
 *   - applyBelow uses functional update so cards outside the change set are memo-stable
 *   - react-window VariableSizeList for ReviewScreen → only ~4 cards in DOM at any time
 *   - All original features preserved; no code trimmed
 */

import { useState, useEffect, useCallback, useRef, useMemo, memo } from "react";
import { MathJaxContext, MathJax } from "better-react-mathjax";
// react-window removed — using simple pagination instead

const MATHJAX_CONFIG = {
  loader: { load: ["input/tex", "output/chtml"] },
  tex: {
    inlineMath: [["$", "$"]],
    displayMath: [["$$", "$$"]],
    packages: { "[+]": ["ams", "array"] },
  },
  // No dynamic typesetting — we call typesetPromise manually
  options: { skipHtmlTags: ["script","noscript","style","textarea","pre"] },
};

// ─── LaTeX fixers (unchanged logic, just exported so useMemo can cache) ──────

function fixTabular(text) {
  if (!text || !text.includes("\\begin{tabular}")) return text;
  function stripMulticolumn(s) {
    return s.replace(/\\multicolumn\{\d+\}\{[^}]*\}\{([^}]*)\}/g, "$1");
  }
  function isMath(s) {
    const t = s.trim();
    return !t || t.startsWith("$") || t.startsWith("\\") || /^-?[\d.]+$/.test(t);
  }
  function wrapCell(cell) {
    let s = stripMulticolumn(cell).trim();
    const m = s.match(/^\$(.+)\$$/);
    if (m) return m[1].trim();
    if (isMath(s)) return s;
    return `\\text{${s}}`;
  }
  function flattenInnerTabulars(body) {
    return body.replace(
      /\\begin\{tabular\}\{[^}]*\}([\s\S]*?)\\end\{tabular\}/g,
      (_, inner) => inner.split("\n").map(l => l.trim()).filter(l => l && l !== "\\hline" && l !== "\\\\").join(" ")
    );
  }
  function processBody(body) {
    body = flattenInnerTabulars(body);
    const parts = body.split("\\hline");
    const outRows = [];
    parts.forEach((part, idx) => {
      const segment = part.split("\n").map(l => l.trim()).filter(Boolean).join(" ").replace(/\\\\\s*$/, "").trim();
      outRows.push("\\hline");
      if (!segment) return;
      const isLast = parts.slice(idx + 1).every(s =>
        !s.split("\n").map(l => l.trim()).filter(Boolean).join(" ").replace(/\\\\$/, "").trim()
      );
      const rowStr = segment.split("&").map(wrapCell).join(" & ");
      outRows.push(isLast ? rowStr : rowStr + " \\\\");
    });
    const deduped = outRows.filter((r, i) =>
      !(r === "\\hline" && i > 0 && outRows[i - 1] === "\\hline")
    );
    return "\n" + deduped.join("\n") + "\n";
  }
  let result = "", i = 0;
  while (i < text.length) {
    const start = text.indexOf("\\begin{tabular}", i);
    if (start === -1) { result += text.slice(i); break; }
    result += text.slice(i, start);
    let depth = 0, j = start;
    while (j < text.length) {
      if (text.startsWith("\\begin{tabular}", j)) { depth++; j += 15; }
      else if (text.startsWith("\\end{tabular}", j)) { depth--; j += 13; if (depth === 0) break; }
      else j++;
    }
    const block = text.slice(start, j);
    const fmtM = block.match(/^\\begin\{tabular\}\{([^}]*)\}([\s\S]*)$/);
    if (fmtM) {
      result += `$$\\begin{array}{${fmtM[1]}}${processBody(fmtM[2])}\\end{array}$$`;
    } else {
      result += block;
    }
    i = j;
  }
  return result;
}

const MULTIROW_ENVS = ["aligned", "align", "gather", "gathered", "eqnarray", "cases", "split"];
function fixAligned(text) {
  if (!text) return text;
  const envPattern = MULTIROW_ENVS.join("|");
  const re = new RegExp(`\\\\begin\\{(${envPattern})\\}([\\s\\S]*?)\\\\end\\{\\1\\}`, "g");
  return text.replace(re, (full, env, body) => {
    const lines = body.split("\n").map(l => l.trimEnd()).filter(l => l.trim() !== "");
    const needsFix = lines.slice(0, -1).some(l => !l.trimEnd().endsWith("\\\\"));
    if (!needsFix) return full;
    const fixed = lines.map((line, idx) => {
      const isLast = idx === lines.length - 1;
      if (!isLast && !line.trimEnd().endsWith("\\\\")) return line + " \\\\";
      return line;
    });
    return `\\begin{${env}}\n${fixed.join("\n")}\n\\end{${env}}`;
  });
}

const DISPLAY_ENVS = ["aligned", "align", "gathered", "gather", "array", "cases", "split"];
function fixInlineEnvs(text) {
  if (!text) return text;
  for (const env of DISPLAY_ENVS) {
    text = text.replace(
      new RegExp(`(?<!\\$)\\$\\\\begin\\{${env}\\}([\\s\\S]*?)\\\\end\\{${env}\\}\\$(?!\\$)`, "g"),
      `$$\\begin{${env}}$1\\end{${env}}$$`
    );
  }
  return text;
}
function fixLineBreaks(text) {
  if (!text) return text;
  return text.replace(
    /(\$)\s+(let|where|and|here|now|so|thus|also|again)\s+(\$)/g,
    "$1\n\nlet $3"
  );
}
function fixCrammedEquations(text) {
  if (!text) return text;
  return text.replace(/(?<!\$)\$([^$]{60,})\$(?!\$)/g, (full, content) => {
    if (/\\begin\{(aligned|array|gathered|cases|matrix)/.test(content)) return full;
    const marked = content.replace(/(d\s*x)\s+(?=[A-Z][_^{]|[A-Z]=|\\[a-zA-Z])/g, "$1\uFFFE");
    const parts = marked.split("\uFFFE").map(p => p.trim()).filter(p => p);
    if (parts.length <= 1) return full;
    return parts.map(p => `$${p}$`).join("\n\n");
  });
}
function fixLatex(text) {
  if (!text) return text;
  return fixCrammedEquations(fixLineBreaks(fixInlineEnvs(fixAligned(fixTabular(text)))));
}

// ─── Global fixLatex cache — same string → instant return ────────────────────
const fixLatexCache = new Map();
function fixLatexCached(text) {
  if (!text) return text;
  if (fixLatexCache.has(text)) return fixLatexCache.get(text);
  const result = fixLatex(text);
  // Limit cache size to 2000 entries to prevent unbounded memory growth
  if (fixLatexCache.size > 2000) {
    const firstKey = fixLatexCache.keys().next().value;
    fixLatexCache.delete(firstKey);
  }
  fixLatexCache.set(text, result);
  return result;
}

// ─── Colors ──────────────────────────────────────────────────────────────────
const C = {
  bg:          "#0f172a",
  surface:     "#1e293b",
  surfaceHigh: "#334155",
  border:      "#334155",
  blue:        "#3b82f6",
  blueLight:   "#60a5fa",
  green:       "#22c55e",
  greenBg:     "#14532d",
  amber:       "#f59e0b",
  amberBg:     "#451a03",
  red:         "#ef4444",
  redBg:       "#450a0a",
  text:        "#f1f5f9",
  textMuted:   "#94a3b8",
  textDim:     "#64748b",
  purple:      "#a855f7",
};

const EXAM_OPTIONS = [
  { value: "",             label: "— select exam —" },
  { value: "JEE Main",     label: "JEE Main" },
  { value: "JEE Advanced", label: "JEE Advanced" },
  { value: "NEET",         label: "NEET" },
  { value: "CUET",         label: "CUET" },
  { value: "SSC CGL",      label: "SSC CGL" },
  { value: "Other",        label: "Other" },
];

// SSC CGL subjects with their chapters/topics (hardcoded, mirrors llm_tagger.py)
const SSC_CGL_TAXONOMY = {
  "General Intelligence and Reasoning": {
    chapters: ["Analogy","Classification","Series","Coding and Decoding","Blood Relations",
      "Direction and Distance","Order and Ranking","Venn Diagrams","Syllogism",
      "Matrix and Figure Based","Mathematical Operations and Puzzles",
      "Non-Verbal Reasoning","Statement and Conclusion","Critical Thinking"],
    topics: {
      "Analogy":["Word Analogy","Number Analogy","Letter Analogy","Symbol Analogy","Figural Analogy"],
      "Classification":["Word Classification","Number Classification","Odd One Out","Figural Classification"],
      "Series":["Number Series","Letter Series","Alphabet Series","Mixed Series","Missing Number in Series"],
      "Coding and Decoding":["Letter Coding","Number Coding","Substitution Coding","Symbol-based Coding"],
      "Blood Relations":["Direct Blood Relations","Coded Blood Relations","Family Tree Problems"],
      "Direction and Distance":["Simple Direction Problems","Distance and Displacement","Shadow and Clock based Direction"],
      "Order and Ranking":["Rank from Top and Bottom","Position in a Row or Column"],
      "Venn Diagrams":["Two-set Venn Diagrams","Three-set Venn Diagrams","Venn Diagram and Syllogism"],
      "Syllogism":["All Some No Statements","Conclusion Drawing","Possibility Cases"],
      "Matrix and Figure Based":["Matrix Completion","Figure Pattern Completion","Embedded Figures","Paper Folding and Cutting"],
      "Mathematical Operations and Puzzles":["Calendar Problems","Clock Problems","Seating Arrangement","Linear Arrangement"],
      "Non-Verbal Reasoning":["Mirror Image","Water Image","Cube and Dice"],
      "Statement and Conclusion":["Deriving Conclusions","Course of Action","Statement and Assumption"],
      "Critical Thinking":["Logical Problems","Cause and Effect","Inference based Questions"],
    }
  },
  "General Awareness": {
    chapters: ["History","Geography","Indian Polity and Constitution","Indian Economy",
      "Science and Technology","Current Affairs","Miscellaneous"],
    topics: {
      "History":["Ancient Indian History Harappan Vedic","Maurya and Gupta Empire","Medieval India",
        "Bhakti and Sufi Movement","1857 Revolt","Indian National Congress","Gandhi Era","Partition and Independence"],
      "Geography":["Physical Features of India","Rivers and Lakes of India","Climate and Monsoon",
        "Natural Vegetation and Wildlife","Agriculture","Industries and Transport","World Geography"],
      "Indian Polity and Constitution":["Preamble Fundamental Rights","Parliament","President Vice President",
        "Supreme Court Judiciary","Elections and Election Commission","Amendment Procedure"],
      "Indian Economy":["National Income GDP GNP","Planning Commission NITI Aayog","Monetary Policy RBI",
        "Banking System","Inflation WPI CPI","Major Economic Schemes"],
      "Science and Technology":["Physics Basics","Chemistry Acids Bases","Biology Cell Human Body",
        "Computer and IT Basics","Space Technology ISRO"],
      "Current Affairs":["National Current Events","International Events","Sports Current Affairs"],
      "Miscellaneous":["Famous Books and Authors","National Symbols","Important Dates Days","Art and Culture"],
    }
  },
  "Quantitative Aptitude": {
    chapters: ["Number System","Simplification","Average","Percentage","Profit Loss and Discount",
      "Ratio and Proportion","Time and Work","Time Speed and Distance",
      "Simple and Compound Interest","Algebra","Geometry","Mensuration",
      "Trigonometry","Statistics","Mixture and Alligation"],
    topics: {
      "Number System":["LCM and HCF","Divisibility Rules","Prime Numbers","Remainders","Unit Digit"],
      "Simplification":["BODMAS Rule","Fractions and Decimals","Surds and Indices","Square Root Cube Root"],
      "Average":["Simple Average","Weighted Average","Average of Groups"],
      "Percentage":["Percentage Basics","Percentage Change","Successive Change"],
      "Profit Loss and Discount":["Profit and Loss Percentage","Successive Discounts","Marked Price and Discount"],
      "Ratio and Proportion":["Basic Ratio","Compound Ratio","Proportion and Variation","Partnership"],
      "Time and Work":["Basic Time and Work","Work and Wages","Pipes and Cisterns"],
      "Time Speed and Distance":["Average Speed","Relative Speed","Boats and Streams","Trains Problems"],
      "Simple and Compound Interest":["Simple Interest Formula","Compound Interest Formula","Growth and Depreciation"],
      "Algebra":["Linear Equations","Quadratic Equations","Algebraic Identities","Polynomials"],
      "Geometry":["Lines Angles Triangles","Circles Chord Tangent","Quadrilaterals","Coordinate Geometry"],
      "Mensuration":["Area Perimeter 2D Shapes","Surface Area Volume 3D Shapes"],
      "Trigonometry":["Trigonometric Ratios","Complementary Angles","Heights and Distances"],
      "Statistics":["Mean Median Mode","Bar Graph Pie Chart","Data Interpretation"],
      "Mixture and Alligation":["Simple Alligation","Mixtures of Two","Removing and Replacing"],
    }
  },
  "English Comprehension": {
    chapters: ["Reading Comprehension","Vocabulary","Grammar","Error Detection and Correction",
      "Sentence Rearrangement","Cloze Test and Fill in the Blanks","Spelling and Word Usage"],
    topics: {
      "Reading Comprehension":["Factual Passages","Inferential Passages","Main Idea and Title","Tone and Attitude"],
      "Vocabulary":["Synonyms","Antonyms","One Word Substitution","Idioms and Phrases"],
      "Grammar":["Tenses","Subject Verb Agreement","Articles","Prepositions","Active and Passive Voice",
        "Direct and Indirect Speech","Modals"],
      "Error Detection and Correction":["Spotting Errors in Sentences","Phrase Replacement","Sentence Correction"],
      "Sentence Rearrangement":["Para Jumbles","Sentence Ordering","Odd Sentence Out"],
      "Cloze Test and Fill in the Blanks":["Single Blank","Double Blank","Cloze Passage"],
      "Spelling and Word Usage":["Correct Spelling","Commonly Confused Words"],
    }
  },
};

const SSC_CGL_SUBJECTS = Object.keys(SSC_CGL_TAXONOMY);

// ─── Small UI primitives — defined OUTSIDE render scope so React never treats
//     them as "new component types" on re-render ────────────────────────────

function ApplyBelowBanner({ field, value, questionIndex, totalQuestions, onApply, onDismiss }) {
  if (questionIndex >= totalQuestions - 1) return null;
  const remaining = totalQuestions - questionIndex - 1;
  const fieldLabel = {
    subject: "Subject", exam_date: "Exam Date", shift: "Shift",
    chapter_name: "Chapter", topic_name: "Topic", exam_name: "Exam", q_type: "Question Type",
  }[field] || field;
  return (
    <div style={{
      display:"flex",alignItems:"center",gap:10,flexWrap:"wrap",
      background:C.amberBg,border:`1px solid ${C.amber}44`,
      borderRadius:8,padding:"10px 14px",marginTop:10,fontSize:12,
    }}>
      <span style={{color:C.amber}}>⚡</span>
      <span style={{color:C.text,flex:1}}>
        Apply <strong style={{color:C.amber}}>{fieldLabel} = "{value}"</strong> to the{" "}
        <strong>{remaining}</strong> question{remaining>1?"s":""} below?
      </span>
      <button onClick={onApply} style={{
        background:C.amber,color:"#000",border:"none",
        borderRadius:6,padding:"5px 14px",fontSize:12,fontWeight:700,cursor:"pointer",
      }}>Apply to all below ↓</button>
      <button onClick={onDismiss} style={{
        background:"transparent",color:C.textMuted,border:`1px solid ${C.border}`,
        borderRadius:6,padding:"5px 10px",fontSize:12,cursor:"pointer",
      }}>✕</button>
    </div>
  );
}

function ComboBox({ label, value, onChange, options=[], placeholder="", warn=false, allowNew=true }) {
  const [open,  setOpen]  = useState(false);
  const [query, setQuery] = useState(value||"");
  const ref = useRef();
  useEffect(() => { setQuery(value||""); }, [value]);
  useEffect(() => {
    const h = (e) => { if (ref.current && !ref.current.contains(e.target)) setOpen(false); };
    document.addEventListener("mousedown", h);
    return () => document.removeEventListener("mousedown", h);
  }, []);
  const filtered = options.filter(o => !query || o.label.toLowerCase().includes(query.toLowerCase()));
  const isNew = query.trim() && !options.find(o => o.label.toLowerCase()===query.trim().toLowerCase());
  const select = (val) => { setQuery(val); onChange(val); setOpen(false); };
  const borderColor = warn&&!value ? C.amber : open ? C.blue : C.border;
  return (
    <div ref={ref} style={{marginBottom:12,position:"relative"}}>
      {label&&(
        <div style={{fontSize:11,color:warn&&!value?C.amber:C.textMuted,marginBottom:4,fontWeight:600}}>
          {label}{warn&&!value&&<span style={{marginLeft:6}}>⚠ MISSING</span>}
        </div>
      )}
      <div style={{position:"relative"}}>
        <input value={query} placeholder={placeholder} onFocus={()=>setOpen(true)}
          onChange={e=>{setQuery(e.target.value);onChange(e.target.value);setOpen(true);}}
          style={{width:"100%",boxSizing:"border-box",background:C.bg,color:C.text,
            border:`1px solid ${borderColor}`,borderRadius:open?"6px 6px 0 0":6,
            padding:"8px 28px 8px 10px",fontSize:13,outline:"none"}}/>
        <span onClick={()=>setOpen(o=>!o)} style={{
          position:"absolute",right:10,top:"50%",
          transform:`translateY(-50%) rotate(${open?180:0}deg)`,
          cursor:"pointer",color:C.textDim,fontSize:10,transition:"transform .15s",
        }}>▼</span>
      </div>
      {open&&(
        <div style={{
          position:"absolute",top:"100%",left:0,right:0,zIndex:300,
          background:C.surface,border:`1px solid ${C.blue}`,
          borderTop:"none",borderRadius:"0 0 6px 6px",
          maxHeight:240,overflowY:"auto",boxShadow:"0 8px 24px rgba(0,0,0,.5)",
        }}>
          {allowNew&&isNew&&(
            <div onClick={()=>select(query.trim())} style={{
              padding:"9px 12px",cursor:"pointer",fontSize:12,color:C.green,
              borderBottom:`1px solid ${C.border}`,display:"flex",gap:6,
            }}>
              <span style={{fontWeight:700}}>+</span> Create: <strong>"{query.trim()}"</strong>
            </div>
          )}
          {filtered.length===0&&!isNew&&(
            <div style={{padding:"10px 12px",color:C.textDim,fontSize:12}}>No matches</div>
          )}
          {(()=>{
            const groups={};
            filtered.forEach(o=>{const g=o.group||"";if(!groups[g])groups[g]=[];groups[g].push(o);});
            return Object.entries(groups).map(([group,opts])=>(
              <div key={group}>
                {group&&<div style={{padding:"6px 12px 2px",fontSize:10,fontWeight:700,
                                    color:C.textDim,textTransform:"uppercase"}}>{group}</div>}
                {opts.map(o=>(
                  <div key={o.value} onClick={()=>select(o.value)} style={{
                    padding:"9px 12px",cursor:"pointer",fontSize:13,
                    color:o.value===value?C.blue:C.text,
                    background:o.value===value?C.blue+"18":"transparent",
                    fontWeight:o.value===value?600:400,
                  }}
                  onMouseEnter={e=>e.currentTarget.style.background=C.surfaceHigh}
                  onMouseLeave={e=>e.currentTarget.style.background=o.value===value?C.blue+"18":"transparent"}>
                    {o.label}
                  </div>
                ))}
              </div>
            ));
          })()}
        </div>
      )}
    </div>
  );
}

function Badge({label,color=C.blue}){
  return(
    <span style={{
      display:"inline-block",padding:"2px 8px",borderRadius:4,
      fontSize:11,fontWeight:700,letterSpacing:0.5,
      background:color+"33",color,border:`1px solid ${color}55`,
    }}>{label}</span>
  );
}

function Btn({children,onClick,color=C.blue,disabled=false,small=false,style={}}){
  return(
    <button onClick={onClick} disabled={disabled} style={{
      background:disabled?C.surfaceHigh:color,color:disabled?C.textDim:"#fff",
      border:"none",borderRadius:6,padding:small?"6px 14px":"9px 20px",
      fontSize:small?12:14,fontWeight:600,cursor:disabled?"not-allowed":"pointer",
      transition:"opacity .15s",...style,
    }}>{children}</button>
  );
}

function Input({label,value,onChange,multiline=false,rows=3,placeholder="",warn=false,style={}}){
  const shared={
    width:"100%",boxSizing:"border-box",background:C.bg,
    color:warn?C.amber:C.text,
    border:`1px solid ${warn?C.amber:C.border}`,borderRadius:6,
    padding:"8px 10px",fontSize:13,
    fontFamily:multiline?"'Fira Code', monospace":"inherit",
    outline:"none",resize:multiline?"vertical":"none",...style,
  };
  return(
    <div style={{marginBottom:12}}>
      {label&&<div style={{fontSize:11,color:warn?C.amber:C.textMuted,marginBottom:4,fontWeight:600}}>
        {label}{warn&&<span style={{marginLeft:6}}>⚠ MISSING</span>}
      </div>}
      {multiline
        ?<textarea value={value} onChange={e=>onChange(e.target.value)} rows={rows} placeholder={placeholder} style={shared}/>
        :<input    value={value} onChange={e=>onChange(e.target.value)} placeholder={placeholder} style={shared}/>}
    </div>
  );
}

function Select({label,value,onChange,options,warn=false}){
  return(
    <div style={{marginBottom:12}}>
      {label&&<div style={{fontSize:11,color:warn?C.amber:C.textMuted,marginBottom:4,fontWeight:600}}>
        {label}{warn&&<span style={{marginLeft:6}}>⚠ MISSING</span>}
      </div>}
      <select value={value} onChange={e=>onChange(e.target.value)} style={{
        background:C.bg,color:C.text,
        border:`1px solid ${warn?C.amber:C.border}`,borderRadius:6,
        padding:"7px 10px",fontSize:13,width:"100%",
      }}>
        {options.map(o=><option key={o.value} value={o.value}>{o.label}</option>)}
      </select>
    </div>
  );
}

// ─── Option builders — pure functions, results memoized at call site ──────────
function buildChapterOptions(chapters) {
  return [...chapters]
    .sort((a,b)=>(a.subject_name+a.name).localeCompare(b.subject_name+b.name))
    .map(c=>({value:c.name,label:c.name,group:c.subject_name||"Uncategorised"}));
}
function buildTopicOptions(topics,chapterName) {
  const filtered = chapterName
    ? topics.filter(t=>t.chapter_name?.toLowerCase()===chapterName.toLowerCase())
    : topics;
  return filtered.sort((a,b)=>a.name.localeCompare(b.name))
    .map(t=>({value:t.name,label:t.name,group:t.chapter_name||""}));
}
function buildPaperOptions(papers) {
  return [...papers]
    .sort((a,b)=>{
      if(a.exam_date&&b.exam_date) return b.exam_date.localeCompare(a.exam_date);
      return (b.year||0)-(a.year||0);
    })
    .map(p=>{
      const dateStr = p.exam_date
        ? new Date(p.exam_date+"T00:00:00").toLocaleDateString("en-IN",{day:"2-digit",month:"short",year:"numeric"})
        : String(p.year||"");
      return {
        value:    String(p.id),
        label:    dateStr+(p.shift?` — ${p.shift}`:""),
        group:    p.exam_name||"Exam",
        year:     String(p.year||""),
        shift:    p.shift||"",
        exam_date:p.exam_date||"",
      };
    });
}

// ─── DebouncedInput ───────────────────────────────────────────────────────────
// PERF: Typing stays local. onCommit fires only on blur or Enter — never on each
//       keystroke — so parent state and MathJax are not touched while the user types.
function DebouncedInput({ value: externalValue, onCommit, placeholder = "", style = {} }) {
  const [local, setLocal] = useState(externalValue);
  // Sync inward when parent changes the value from outside
  useEffect(() => { setLocal(externalValue); }, [externalValue]);
  return (
    <input
      value={local}
      placeholder={placeholder}
      onChange={e => setLocal(e.target.value)}
      onBlur={() => { if (local !== externalValue) onCommit(local); }}
      onKeyDown={e => { if (e.key === "Enter") { e.target.blur(); } }}
      style={{
        width: "100%", boxSizing: "border-box", background: C.bg, color: C.text,
        border: `1px solid ${C.border}`, borderRadius: 6,
        padding: "8px 10px", fontSize: 13, outline: "none", ...style,
      }}
    />
  );
}

// ─── QuestionEditor ───────────────────────────────────────────────────────────
// PERF: draft state is purely local; preview only updates when user clicks Apply
function QuestionEditor({ q, onChange, onApplyBelow, chapters, topics, papers, imgUrl }) {
  const [draft, setDraft] = useState({
    question: q.question||"",
    solution: q.solution||"",
    options:  q.options ||["","","",""],
  });
  const [dirty, setDirty] = useState(false);
  const prevQRef = useRef(q);

  useEffect(()=>{
    const prev = prevQRef.current;
    prevQRef.current = q;
    if(q.question!==prev.question && q.question!==draft.question)
      setDraft(d=>({...d,question:q.question||""}));
    if(q.solution!==prev.solution && q.solution!==draft.solution)
      setDraft(d=>({...d,solution:q.solution||""}));
    if(JSON.stringify(q.options)!==JSON.stringify(prev.options)&&
       JSON.stringify(q.options)!==JSON.stringify(draft.options))
      setDraft(d=>({...d,options:q.options||["","","",""]}));
  },[q]);

  const applyDraft = useCallback(()=>{
    onChange({...q,question:draft.question,solution:draft.solution,options:draft.options});
    setDirty(false);
  },[q,draft,onChange]);

  const setInstant = useCallback((field)=>(val)=>{
    onChange({...q,[field]:val,question:draft.question,solution:draft.solution,options:draft.options});
    if(["subject","exam_date","shift","chapter_name","topic_name","exam_name","q_type"].includes(field)&&val)
      onApplyBelow(field,val);
  },[q,draft,onChange,onApplyBelow]);

  const setOption = useCallback((i)=>(val)=>{
    setDraft(d=>{const opts=[...d.options];opts[i]=val;return{...d,options:opts};});
    setDirty(true);
  },[]);

  // PERF: memoize option lists so they don't recompute on every keystroke
  const chapterOpts = useMemo(()=>buildChapterOptions(chapters),[chapters]);
  const topicOpts   = useMemo(()=>buildTopicOptions(topics,q.chapter_name),[topics,q.chapter_name]);
  const paperOpts   = useMemo(()=>buildPaperOptions(papers),[papers]);

  const handlePaperSelect = useCallback((paperId)=>{
    const match = paperOpts.find(p=>p.value===paperId);
    if(match){
      onChange({...q,year:match.year,exam_date:match.exam_date,shift:match.shift,_paper_id:paperId,
               question:draft.question,solution:draft.solution,options:draft.options});
      if(match.exam_date) onApplyBelow("exam_date",match.exam_date);
      if(match.shift)     onApplyBelow("shift",    match.shift);
    }
  },[q,draft,paperOpts,onChange,onApplyBelow]);

  const handleDateChange = useCallback((dateVal)=>{
    const yr = dateVal?dateVal.slice(0,4):q.year;
    onChange({...q,exam_date:dateVal,year:yr,question:draft.question,solution:draft.solution,options:draft.options});
    if(dateVal) onApplyBelow("exam_date",dateVal);
  },[q,draft,onChange,onApplyBelow]);

  return(
    <div>
      {/* Exam type */}
      <div style={{marginBottom:14}}>
        <div style={{fontSize:11,color:C.textMuted,marginBottom:6,fontWeight:600}}>
          Exam Type <span style={{color:C.textDim,fontWeight:400}}>(applies to all below when changed)</span>
        </div>
        <div style={{display:"flex",gap:6,flexWrap:"wrap"}}>
          {EXAM_OPTIONS.filter(e=>e.value).map(e=>(
            <button key={e.value} onClick={()=>setInstant("exam_name")(e.value)} style={{
              padding:"6px 14px",borderRadius:6,fontSize:12,fontWeight:600,cursor:"pointer",
              border:`1px solid ${q.exam_name===e.value?C.purple:C.border}`,
              background:q.exam_name===e.value?C.purple+"22":C.surface,
              color:q.exam_name===e.value?C.purple:C.textMuted,
            }}>{e.label}</button>
          ))}
        </div>
        {q.exam_name&&(
          <div style={{marginTop:6,fontSize:11,color:C.purple}}>
            ✓ Exam: <strong>{q.exam_name}</strong>
          </div>
        )}
      </div>

      {/* Paper picker + Type */}
      <div style={{display:"grid",gridTemplateColumns:"2fr 1fr",gap:12,marginBottom:12}}>
        <ComboBox label="Paper (auto-fill date & shift)" placeholder="Pick existing paper…"
          value={q._paper_id||""} onChange={handlePaperSelect} options={paperOpts}/>
        <Select label="Type (applies to all below)" value={q.q_type||"MCQ"}
          onChange={(val)=>setInstant("q_type")(val)} options={[
            {value:"MCQ",label:"MCQ"},{value:"MSQ",label:"MSQ"},{value:"NUMERICAL",label:"NUMERICAL"},
          ]}/>
      </div>

      {/* Date · Shift · Year */}
      <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:12}}>
        <div>
          <div style={{fontSize:11,color:!q.exam_date?C.amber:C.textMuted,marginBottom:4,fontWeight:600}}>
            Exam Date {!q.exam_date&&"⚠ required"}
          </div>
          <input type="date" value={q.exam_date||""} onChange={e=>handleDateChange(e.target.value)}
            style={{width:"100%",background:C.bg,color:C.text,
                   border:`1px solid ${!q.exam_date?C.amber:C.border}`,
                   borderRadius:6,padding:"8px 10px",fontSize:13,boxSizing:"border-box"}}/>
        </div>
        <div style={{marginBottom:12}}>
          <div style={{fontSize:11,color:!q.shift?C.amber:C.textMuted,marginBottom:4,fontWeight:600}}>
            Shift {!q.shift&&"⚠ MISSING"}
          </div>
          <div style={{display:"flex",gap:6}}>
            {["Morning","Evening"].map(s=>(
              <button key={s} onClick={()=>setInstant("shift")(s)} style={{
                flex:1,padding:"8px 0",borderRadius:6,fontSize:13,fontWeight:600,cursor:"pointer",
                border:`1px solid ${q.shift===s?C.blue:C.border}`,
                background:q.shift===s?C.blue+"22":C.surface,
                color:q.shift===s?C.blueLight:C.textMuted,
              }}>{s==="Morning"?"☀️ Morning":"🌙 Evening"}</button>
            ))}
          </div>
        </div>
        <div style={{marginBottom:12}}>
          <div style={{fontSize:11,color:C.textMuted,marginBottom:4,fontWeight:600}}>Year</div>
          <div style={{background:C.surfaceHigh,border:`1px solid ${C.border}`,
                      borderRadius:6,padding:"8px 10px",fontSize:13,
                      color:q.year?C.text:C.textDim}}>
            {q.year||"from date"}
          </div>
        </div>
      </div>

      {/* Subject */}
      <div style={{marginBottom:12}}>
        <div style={{fontSize:11,color:C.textMuted,marginBottom:4,fontWeight:600}}>
          Subject <span style={{color:C.textDim,fontWeight:400}}>(applies to all below)</span>
        </div>
        {q.exam_name==="SSC CGL" ? (
          <div style={{display:"flex",gap:6,flexWrap:"wrap",marginBottom:6}}>
            {SSC_CGL_SUBJECTS.map(s=>(
              <button key={s} onClick={()=>setInstant("subject")(s)} style={{
                padding:"5px 12px",borderRadius:6,fontSize:11,fontWeight:600,cursor:"pointer",
                border:`1px solid ${q.subject===s?C.purple:C.border}`,
                background:q.subject===s?C.purple+"22":C.surface,
                color:q.subject===s?C.purple:C.textMuted,
              }}>{s}</button>
            ))}
          </div>
        ) : (
          <div style={{display:"flex",gap:6,marginBottom:6}}>
            {["PHYSICS","CHEMISTRY","MATHEMATICS","BIOLOGY"].map(s=>(
              <button key={s} onClick={()=>setInstant("subject")(s)} style={{
                padding:"5px 12px",borderRadius:6,fontSize:12,fontWeight:600,cursor:"pointer",
                border:`1px solid ${q.subject===s?C.blue:C.border}`,
                background:q.subject===s?C.blue+"22":C.surface,
                color:q.subject===s?C.blueLight:C.textMuted,
              }}>{s[0]+s.slice(1).toLowerCase()}</button>
            ))}
          </div>
        )}
        {/* PERF: fires setInstant only on blur, not on every keystroke */}
        <DebouncedInput
          value={q.subject||""}
          placeholder="or type custom…"
          onCommit={val=>setInstant("subject")(val)}
        />
      </div>

      {/* Chapter · Topic — SSC CGL uses its own taxonomy dropdowns */}
      {q.exam_name==="SSC CGL" ? (
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:12}}>
          <ComboBox label="Chapter" warn={!q.chapter_name} placeholder="e.g. Analogy"
            value={q.chapter_name||""}
            onChange={val=>setInstant("chapter_name")(val)}
            options={(SSC_CGL_TAXONOMY[q.subject]?.chapters||[]).map(c=>({value:c,label:c}))}/>
          <ComboBox label="Topic (optional)" placeholder="e.g. Word Analogy"
            value={q.topic_name||""}
            onChange={val=>setInstant("topic_name")(val)}
            options={((SSC_CGL_TAXONOMY[q.subject]?.topics||{})[q.chapter_name]||[]).map(t=>({value:t,label:t}))}/>
        </div>
      ) : (
      <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:12}}>
        <ComboBox label="Chapter" warn={!q.chapter_name} placeholder="e.g. Electrostatics"
          value={q.chapter_name||""}
          onChange={val=>setInstant("chapter_name")(val)}
          options={chapterOpts}/>
        <ComboBox label="Topic (optional)" placeholder="e.g. Gauss Law"
          value={q.topic_name||""}
          onChange={val=>setInstant("topic_name")(val)}
          options={topicOpts}/>
      </div>
      )}

      {/* Difficulty · Marks */}
      <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:12}}>
        <Select label="Difficulty" value={q.difficulty||"medium"} onChange={setInstant("difficulty")} options={[
          {value:"easy",label:"Easy"},{value:"medium",label:"Medium"},{value:"hard",label:"Hard"},
        ]}/>
        {/* PERF: Marks fields use DebouncedInput — fire only on blur, not every keystroke */}
        <div style={{marginBottom:12}}>
          <div style={{fontSize:11,color:C.textMuted,marginBottom:4,fontWeight:600}}>Marks (+)</div>
          <DebouncedInput value={String(q.marks_correct??4)} onCommit={v=>setInstant("marks_correct")(Number(v))}/>
        </div>
        <div style={{marginBottom:12}}>
          <div style={{fontSize:11,color:C.textMuted,marginBottom:4,fontWeight:600}}>Marks (−)</div>
          <DebouncedInput value={String(q.marks_wrong??-1)} onCommit={v=>setInstant("marks_wrong")(Number(v))}/>
        </div>
      </div>

      {/* Question text — PERF: typing only updates draft, NOT the shared q object */}
      <div style={{marginBottom:12}}>
        <div style={{fontSize:11,color:C.textMuted,marginBottom:4,fontWeight:600}}>
          Question (LaTeX)
          {dirty&&<span style={{marginLeft:8,fontSize:10,color:C.amber}}>● unsaved — preview won't update until you Apply</span>}
        </div>
        <textarea
          value={draft.question}
          onChange={e=>{setDraft(d=>({...d,question:e.target.value}));setDirty(true);}}
          rows={4}
          style={{
            width:"100%",boxSizing:"border-box",background:C.bg,color:C.text,
            border:`1px solid ${dirty?C.amber+"99":C.border}`,borderRadius:6,
            padding:"8px 10px",fontSize:13,
            fontFamily:"'Fira Code', monospace",resize:"vertical",outline:"none",
          }}
        />
      </div>

      {/* Apply Changes button — updates preview and saves draft to parent */}
      {dirty && (
        <div style={{marginBottom:12}}>
          <button onClick={applyDraft} style={{
            padding:"8px 20px", borderRadius:7, fontSize:13, fontWeight:700,
            background:C.blue, color:"#fff", border:"none", cursor:"pointer",
            boxShadow:`0 0 0 2px ${C.blue}44`,
          }}>✓ Apply Changes</button>
          <span style={{marginLeft:10,fontSize:11,color:C.textDim}}>
            Updates preview &amp; prepares for save
          </span>
        </div>
      )}

      {/* Options */}
      {q.q_type !== "NUMERICAL" && (
        <div style={{ marginBottom: 12 }}>
          <div style={{ fontSize: 11, color: C.textMuted, marginBottom: 6, fontWeight: 600 }}>
            Options
            <span style={{fontWeight:400,color:C.textDim,marginLeft:6}}>
              (upload option images via the 🖼 Images tab)
            </span>
          </div>
          {[0, 1, 2, 3].map(i => {
            const optionVal = String(i + 1);
            const optKey    = ["a","b","c","d"][i];
            const optImgId  = (q.opt_images||{})[optKey];
            const isSelected = q.answer ? q.answer.split(',').map(s => s.trim()).includes(optionVal) : false;
            return (
              <div key={i} style={{ marginBottom: 8 }}>
                <div style={{ display: "flex", gap: 8, alignItems: "flex-start" }}>
                  <button
                    onClick={() => {
                      let newAnswer;
                      if (q.q_type === "MSQ") {
                        let current = q.answer ? q.answer.split(',').map(s => s.trim()).filter(Boolean) : [];
                        if (isSelected) { current = current.filter(val => val !== optionVal); }
                        else { current.push(optionVal); }
                        newAnswer = current.sort().join(', ');
                      } else {
                        newAnswer = optionVal;
                      }
                      // SSC MCQ: auto-fill solution when solution is empty or was previously auto-filled
                      const isSSCExam = (q.exam_name || "").toLowerCase().includes("ssc");
                      const isMCQType = !q.q_type || q.q_type === "MCQ";
                      let newSolution = draft.solution;
                      if (isSSCExam && isMCQType) {
                        if (!draft.solution || isAutoFilledSolution(draft.solution)) {
                          newSolution = buildSscAutoSolution(newAnswer);
                        }
                      }
                      onChange({ ...q, answer: newAnswer, question: draft.question, solution: newSolution, options: draft.options });
                    }}
                    style={{
                      width: 28, height: 28, borderRadius: "50%", flexShrink: 0, marginTop: 4,
                      border: `2px solid ${isSelected ? C.green : C.border}`,
                      background: isSelected ? C.green : "transparent",
                      cursor: "pointer", color: isSelected ? "#fff" : C.text, fontWeight: 700, fontSize: 12,
                    }}
                  >
                    {i + 1}
                  </button>
                  <div style={{flex:1,display:"flex",flexDirection:"column",gap:4}}>
                    <input
                      value={draft.options[i] || ""}
                      onChange={e => setOption(i)(e.target.value)}
                      placeholder={optImgId ? `Option ${i+1} — image uploaded (text optional)` : `Option ${i + 1} (LaTeX)`}
                      style={{
                        width:"100%", boxSizing:"border-box", background: C.bg, color: C.text,
                        border: `1px solid ${isSelected ? C.green : optImgId ? C.blue+"88" : C.border}`,
                        borderRadius: 6, padding: "7px 10px", fontSize: 13,
                        fontFamily: "'Fira Code', monospace", outline: "none",
                      }}
                    />
                    {/* Inline image preview when an option image exists */}
                    {optImgId && (
                      <div style={{
                        display:"flex",alignItems:"flex-start",gap:8,
                        padding:"6px 8px",borderRadius:6,
                        background:C.surfaceHigh,border:`1px solid ${isSelected?C.green:C.blue+"55"}`,
                      }}>
                        <img
                          src={imgUrl ? imgUrl(optImgId) : optImgId}
                          alt={`opt ${i+1}`}
                          style={{maxHeight:80,maxWidth:"100%",borderRadius:4,display:"block"}}
                          onError={e=>{e.target.style.display="none";}}
                        />
                        <span style={{fontSize:10,color:C.blue,alignSelf:"center",whiteSpace:"nowrap"}}>
                          🖼 image
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
          {!q.answer && <div style={{ fontSize: 11, color: C.amber }}>⚠ Click a circle to mark correct answer(s)</div>}
        </div>
      )}
    </div>
  );
}

// ─── ImagesTab ────────────────────────────────────────────────────────────────
// jobId=null  → editing existing question → uses /api/admin/upload-question-image
// jobId=<id>  → new upload review        → uses /api/admin/upload-image (temp job storage)
function ImagesTab({ q, onChange, jobId, apiBase, adminKey }) {
  // Resolve image URL: permanent storage (edit mode) vs temp job storage (review mode)
  const imgUrl = (id) => {
    if (!id) return "";
    if (id.startsWith("http")) return id;
    // Permanent images uploaded in edit mode have a question_id prefix
    if (!jobId && q._dbId) return `${apiBase}/api/admin/question-image/${q._dbId}/${encodeURIComponent(id)}`;
    if (jobId) return `${apiBase}/api/admin/temp-image/${jobId}/${encodeURIComponent(id)}`;
    return id;
  };

  const uploadRef = useRef();
  const [uploading,    setUploading]    = useState(false);
  const [uploadingFor, setUploadingFor] = useState(null);
  const [dragOver,     setDragOver]     = useState(null);

  const uploadFile = async (file, section) => {
    setUploading(true); setUploadingFor(section);
    try {
      const form = new FormData();
      form.append("file", file);

      let res, image_id;

      if (!jobId && q._dbId) {
        // ── Edit existing mode: upload permanently, no job_id needed ──────────
        res = await fetch(
          `${apiBase}/api/admin/upload-question-image?question_id=${q._dbId}&section=${section}`,
          { method: "POST", headers: { "x-admin-key": adminKey }, body: form }
        );
        if (!res.ok) throw new Error(await res.text());
        ({ image_id } = await res.json());
      } else if (jobId) {
        // ── New paper review mode: upload into job temp storage ───────────────
        res = await fetch(
          `${apiBase}/api/admin/upload-image?job_id=${encodeURIComponent(jobId)}&section=${section}`,
          { method: "POST", headers: { "x-admin-key": adminKey }, body: form }
        );
        if (!res.ok) throw new Error(await res.text());
        ({ image_id } = await res.json());
      } else {
        throw new Error("Cannot upload image: no job_id or question_id available.");
      }

      let updated = { ...q };
      if (section === "question") {
        updated.q_images = [...(q.q_images || []), image_id];
        updated.question = (q.question || "").trimEnd() + ` [IMAGE:${image_id}]`;
      } else if (section === "solution") {
        updated.sol_images = [...(q.sol_images || []), image_id];
        updated.solution = (q.solution || "").trimEnd() + ` [IMAGE:${image_id}]`;
      } else {
        const opt = section.replace("opt_", "");
        updated.opt_images = { ...(q.opt_images || {}), [opt]: image_id };
      }
      onChange(updated);
    } catch(e) { alert("Upload failed: " + e.message); }
    finally { setUploading(false); setUploadingFor(null); }
  };

  const removeImage=(section,imageId)=>{
    if(section==="question") onChange({...q,
      q_images:(q.q_images||[]).filter(id=>id!==imageId),
      question:(q.question||"").replace(`[IMAGE:${imageId}]`,"").trim()});
    else if(section==="solution") onChange({...q,
      sol_images:(q.sol_images||[]).filter(id=>id!==imageId),
      solution:(q.solution||"").replace(`[IMAGE:${imageId}]`,"").trim()});
    else{
      const opt=section.replace("opt_","");
      const newOptImages={...(q.opt_images||{})};
      delete newOptImages[opt];
      onChange({...q,opt_images:newOptImages});
    }
  };

  const ImageRow=({imageId,section})=>{
    const [broken,setBroken]=useState(false);
    return(
      <div style={{display:"flex",alignItems:"flex-start",gap:12,padding:"10px",
                  borderRadius:8,background:C.bg,
                  border:`1px solid ${broken?C.red+"66":C.border}`,marginBottom:8}}>
        <div style={{width:72,height:54,flexShrink:0,borderRadius:5,
                    background:C.surfaceHigh,overflow:"hidden",
                    display:"flex",alignItems:"center",justifyContent:"center"}}>
          {broken?<span style={{fontSize:20}}>❌</span>
            :<img src={imgUrl(imageId)} alt=""
                style={{maxWidth:"100%",maxHeight:"100%",objectFit:"contain"}}
                onError={()=>setBroken(true)}/>}
        </div>
        <div style={{flex:1,minWidth:0}}>
          <div style={{fontSize:10,color:broken?C.red:C.textMuted,marginBottom:4,
                      fontFamily:"monospace",wordBreak:"break-all"}}>{imageId}</div>
          {broken&&<div style={{fontSize:10,color:C.red}}>{jobId?"File not found in ZIP":"Image not found — may have been deleted"}</div>}
          {!broken&&<div style={{fontSize:10,color:C.green}}>✓ Auto-inserted into text</div>}
          <button onClick={()=>removeImage(section,imageId)} style={{
            marginTop:4,padding:"3px 10px",fontSize:11,borderRadius:5,cursor:"pointer",
            background:C.redBg,color:C.red,border:`1px solid ${C.red}44`,fontWeight:600,
          }}>🗑 Remove</button>
        </div>
      </div>
    );
  };

  const DropZone=({section,color})=>{
    const zoneRef=useRef();
    const [pasteReady,setPasteReady]=useState(false);
    const isLoading=uploading&&uploadingFor===section;
    useEffect(()=>{
      if(!pasteReady) return;
      const onPaste=(e)=>{
        const items=e.clipboardData?.items||[];
        for(const item of items){
          if(item.type.startsWith("image/")){
            e.preventDefault();uploadFile(item.getAsFile(),section);setPasteReady(false);break;
          }
        }
      };
      const onOutsideClick=(e)=>{
        if(zoneRef.current&&!zoneRef.current.contains(e.target)) setPasteReady(false);
      };
      document.addEventListener("paste",onPaste);
      document.addEventListener("mousedown",onOutsideClick);
      return()=>{
        document.removeEventListener("paste",onPaste);
        document.removeEventListener("mousedown",onOutsideClick);
      };
    },[pasteReady,section]);

    const handlePlusClick=(e)=>{
      e.stopPropagation();
      uploadRef.current.dataset.section=section;
      uploadRef.current.click();
      setPasteReady(true);
    };
    const accentColor=color||C.blue;
    const borderColor=pasteReady?accentColor:dragOver===section?accentColor:C.border;
    const bgColor=pasteReady||dragOver===section?accentColor+"11":C.surface;
    return(
      <div ref={zoneRef}
        onDragOver={e=>{e.preventDefault();setDragOver(section);}}
        onDragLeave={()=>setDragOver(null)}
        onDrop={e=>{e.preventDefault();setDragOver(null);const f=e.dataTransfer.files[0];if(f)uploadFile(f,section);}}
        onClick={()=>setPasteReady(true)}
        style={{border:`2px dashed ${borderColor}`,borderRadius:8,padding:"14px 10px",
               textAlign:"center",cursor:isLoading?"wait":"default",
               background:bgColor,color:C.textMuted,fontSize:11,marginTop:6,transition:"all .2s",userSelect:"none"}}>
        {isLoading?<span style={{color:accentColor}}>⏳ Uploading…</span>:(
          <div style={{display:"flex",alignItems:"center",justifyContent:"center",gap:10,flexWrap:"wrap"}}>
            <button onClick={handlePlusClick} title="Click to open folder / file picker"
              style={{width:30,height:30,borderRadius:"50%",border:`2px solid ${accentColor}`,
                     background:accentColor+"22",color:accentColor,fontSize:20,fontWeight:300,
                     cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",
                     flexShrink:0,lineHeight:1,padding:0}}>+</button>
            <span style={{color:C.textDim}}>Drop here or</span>
            <kbd style={{fontSize:10,background:C.surfaceHigh,padding:"2px 6px",borderRadius:3,
                        color:pasteReady?C.green:C.textMuted,
                        border:`1px solid ${pasteReady?C.green:C.border}`,
                        fontWeight:pasteReady?700:400,transition:"all .2s"}}>Ctrl+V</kbd>
            {pasteReady&&<span style={{color:C.green,fontSize:10,fontWeight:700}}>● paste ready</span>}
          </div>
        )}
      </div>
    );
  };

  const OPTIONS=[
    {key:"a",label:"Option A",color:C.green},
    {key:"b",label:"Option B",color:C.blue},
    {key:"c",label:"Option C",color:C.amber},
    {key:"d",label:"Option D",color:C.purple},
  ];

  return(
    <div>
      <input ref={uploadRef} type="file" accept="image/*" style={{display:"none"}}
        onChange={e=>{
          const f=e.target.files[0];
          const sec=uploadRef.current.dataset.section||"question";
          if(f) uploadFile(f,sec);
          e.target.value="";
        }}/>
      <div style={{marginBottom:14,padding:"8px 12px",borderRadius:7,
                  background:C.greenBg,border:`1px solid ${C.green}44`,
                  fontSize:11,color:C.green}}>
        ✓ Images are <strong>automatically inserted</strong> into the text when uploaded.
        Click <strong>+</strong> to browse files, drag &amp; drop, or click a zone then{" "}
        <kbd style={{background:C.surface,padding:"1px 5px",borderRadius:3}}>Ctrl+V</kbd>{" "}
        to paste from clipboard.
      </div>
      <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:14}}>
        <div style={{background:C.bg,borderRadius:10,padding:"12px",border:`1px solid ${C.border}`}}>
          <div style={{fontSize:11,fontWeight:700,color:C.blueLight,marginBottom:8,textTransform:"uppercase",letterSpacing:1}}>
            📋 Question ({(q.q_images||[]).length})
          </div>
          {(q.q_images||[]).map(id=><ImageRow key={id} imageId={id} section="question"/>)}
          <DropZone section="question" color={C.blue}/>
        </div>
        <div style={{background:C.bg,borderRadius:10,padding:"12px",border:`1px solid ${C.border}`}}>
          <div style={{fontSize:11,fontWeight:700,color:C.amber,marginBottom:8,textTransform:"uppercase",letterSpacing:1}}>
            🔢 Options A–D
          </div>
          {OPTIONS.map(({key,label,color})=>{
            const existingId=(q.opt_images||{})[key];
            return(
              <div key={key} style={{marginBottom:10,padding:"8px",borderRadius:7,
                                    background:C.surface,border:`1px solid ${existingId?color+"66":C.border}`}}>
                <div style={{fontSize:10,fontWeight:700,color,marginBottom:4,textTransform:"uppercase",letterSpacing:0.8}}>{label}</div>
                {existingId
                  ?<><ImageRow imageId={existingId} section={`opt_${key}`}/>
                    <button onClick={()=>{uploadRef.current.dataset.section=`opt_${key}`;uploadRef.current.click();}}
                      style={{width:"100%",padding:"4px",borderRadius:5,fontSize:10,
                             background:"transparent",border:`1px solid ${C.border}`,color:C.textMuted,
                             cursor:"pointer",fontWeight:600}}>🔄 Replace</button></>
                  :<DropZone section={`opt_${key}`} color={color}/>}
              </div>
            );
          })}
        </div>
        <div style={{background:C.bg,borderRadius:10,padding:"12px",border:`1px solid ${C.border}`}}>
          <div style={{fontSize:11,fontWeight:700,color:C.purple,marginBottom:8,textTransform:"uppercase",letterSpacing:1}}>
            ✅ Solution ({(q.sol_images||[]).length})
          </div>
          {(q.sol_images||[]).map(id=><ImageRow key={id} imageId={id} section="solution"/>)}
          <DropZone section="solution" color={C.purple}/>
        </div>
      </div>
    </div>
  );
}

// ─── MathJax preview block — isolated component so typesetting is scoped ─────
// PERF: only re-renders when `content` string changes (React.memo)
//       calls MathJax.typesetPromise on its own ref, never the whole page
const MathPreview = memo(function MathPreview({ content, style }) {
  const ref = useRef(null);

  useEffect(()=>{
    if(!ref.current) return;
    if(window.MathJax?.typesetPromise){
      // Clear previous typeset, then re-typeset only this node
      window.MathJax.typesetClear([ref.current]);
      window.MathJax.typesetPromise([ref.current]).catch(()=>{});
    }
  },[content]);

  return (
    <div ref={ref} style={style}
      dangerouslySetInnerHTML={{__html: content}}
    />
  );
});

// ─── SolutionDraftTextarea ────────────────────────────────────────────────────
// PERF: Isolated draft so typing in Solution does NOT call parent onChange
//       (which would re-render all cards + re-typeset MathJax).
//       Only fires upward on blur or when Apply is clicked.
//
// SSC AUTO-FILL: When exam is SSC (any variant) and an MCQ answer is selected,
//   the solution box is automatically filled with "The answer is option 'X'."
//   The auto-fill only triggers when the solution is empty OR was previously
//   auto-filled (so manual edits are never overwritten).

const OPTION_LABELS = { "1": "a", "2": "b", "3": "c", "4": "d" };

function buildSscAutoSolution(answer) {
  if (!answer) return "";
  const letter = OPTION_LABELS[answer.trim()] || answer.trim().toLowerCase();
  return `The answer is option '${letter}'.`;
}

function isAutoFilledSolution(text) {
  // Matches strings like "The answer is option 'a'." (any single letter)
  return /^The answer is option '[a-d]'\.$/.test((text || "").trim());
}

// Apply SSC auto-solution to a whole array of questions at load time.
// Only fills questions that are SSC MCQ with an answer but no solution.
function applySSCSolutions(qs) {
  return qs.map(q => {
    const isSSC = (q.exam_name || "").toLowerCase().includes("ssc");
    const isMCQ = !q.q_type || q.q_type === "MCQ";
    if (isSSC && isMCQ && q.answer && !q.solution) {
      return { ...q, solution: buildSscAutoSolution(q.answer) };
    }
    return q;
  });
}

function SolutionDraftTextarea({ q, onChange }) {
  const isSSC = (q.exam_name || "").toLowerCase().includes("ssc");
  const [local, setLocal] = useState(q.solution || "");
  const [dirty, setDirty] = useState(false);
  const prevSolRef = useRef(q.solution);

  // Sync whenever parent pushes a new solution value (auto-fill from onClick, image insert, etc.)
  useEffect(() => {
    if (q.solution !== prevSolRef.current) {
      prevSolRef.current = q.solution;
      setLocal(q.solution || "");
      setDirty(false);
    }
  }, [q.solution]);

  const apply = useCallback(() => {
    prevSolRef.current = local;
    onChange({ ...q, solution: local });
    setDirty(false);
  }, [q, local, onChange]);

  const isAutoText = isSSC && isAutoFilledSolution(local);

  return (
    <div>
      {isAutoText && !dirty && (
        <div style={{
          display: "flex", alignItems: "center", gap: 6, marginBottom: 6,
          padding: "5px 10px", borderRadius: 6,
          background: C.greenBg, border: `1px solid ${C.green}44`, fontSize: 11,
        }}>
          <span style={{ color: C.green }}>✦ Auto-filled for SSC</span>
          <span style={{ color: C.textDim }}>— edit below to override</span>
        </div>
      )}
      <textarea
        value={local}
        rows={4}
        onChange={e => { setLocal(e.target.value); setDirty(true); }}
        onBlur={apply}
        style={{
          width: "100%", boxSizing: "border-box", background: C.bg, color: C.text,
          border: `1px solid ${isAutoText && !dirty ? C.green + "88" : dirty ? C.amber + "99" : C.border}`,
          borderRadius: 6,
          padding: "8px 10px", fontSize: 13,
          fontFamily: "'Fira Code', monospace", resize: "vertical", outline: "none",
        }}
      />
      {dirty && (
        <div style={{ display: "flex", gap: 8, marginTop: 4 }}>
          <button onClick={apply} style={{
            padding: "5px 16px", borderRadius: 6, fontSize: 12, fontWeight: 700,
            background: C.amber, border: "none", color: "#000", cursor: "pointer",
          }}>✓ Apply Solution</button>
          <button onClick={() => { setLocal(q.solution || ""); setDirty(false); }} style={{
            padding: "5px 12px", borderRadius: 6, fontSize: 12,
            background: "transparent", border: `1px solid ${C.border}`, color: C.textMuted, cursor: "pointer",
          }}>Discard</button>
          <span style={{ fontSize: 11, color: C.amber, alignSelf: "center" }}>
            ● preview updates on Apply or when you click away
          </span>
        </div>
      )}
    </div>
  );
}

// ─── QuestionCard ─────────────────────────────────────────────────────────────
// PERF: wrapped in React.memo with field-level equality check
//       → only the card whose `q` object actually changed re-renders

function questionCardPropsEqual(prev, next) {
  // Re-render only if the question data, save error, or counts changed
  return (
    prev.q          === next.q &&
    prev.saveError  === next.saveError &&
    prev.index      === next.index &&
    prev.total      === next.total &&
    prev.chapters   === next.chapters &&
    prev.topics     === next.topics &&
    prev.papers     === next.papers
  );
}

// renderContent is pure — same text → same output; we use the global cache
function buildHtml(text, imgUrlFn) {
  if (!text) return "";
  const fixed = fixLatexCached(text);
  // Split on [IMAGE:...] tokens, build an HTML string
  // MathJax will parse the $...$ inside this HTML when typesetPromise runs
  return fixed.split(/(\[IMAGE:[^\]]+\])/).map(part => {
    const m = part.match(/\[IMAGE:([^\]]+)\]/);
    if (m) {
      const src = imgUrlFn(m[1]);
      return `<img src="${src}" alt="diagram" style="max-width:100%;max-height:220px;display:block;margin:6px 0;border-radius:4px;" onerror="this.style.display='none'"/>`;
    }
    return part || "";
  }).join("");
}

const QuestionCard = memo(function QuestionCard({
  q, index, total, jobId, apiBase, adminKey,
  onChange, onSaveOne, onApplyBelow, onRemove,
  chapters, topics, papers, saveError,
}) {
  const [tab,          setTab]     = useState(null);
  const [pendingApply, setPending] = useState(null);
  const canSave = !!(q.answer && q.chapter_name && q.exam_date && q.shift);

  const imgUrl = useCallback((id) => {
    if (!id) return "";
    if (id.startsWith("http")) return id;
    // Edit-existing mode: no jobId → use permanent question-image endpoint
    if (!jobId && q._dbId) return `${apiBase}/api/admin/question-image/${q._dbId}/${encodeURIComponent(id)}`;
    // New upload review mode: use temp job storage
    if (jobId) return `${apiBase}/api/admin/temp-image/${jobId}/${encodeURIComponent(id)}`;
    return id;
  }, [apiBase, jobId, q._dbId]);

  const doApply = useCallback(()=>{
    if(pendingApply){ onApplyBelow(index, pendingApply.field, pendingApply.value); setPending(null); }
  },[pendingApply, onApplyBelow, index]);

  // PERF: build HTML strings only when q.question / q.solution / q.options change
  const questionHtml = useMemo(()=>buildHtml(q.question, imgUrl), [q.question, imgUrl]);
  const solutionHtml = useMemo(()=>buildHtml(q.solution, imgUrl), [q.solution, imgUrl]);
  const optionHtmls  = useMemo(()=>
    (q.options||[]).map(opt=>buildHtml(opt, imgUrl)),
  [q.options, imgUrl]);

  const totalImgs = (q.q_images||[]).length+(q.sol_images||[]).length+Object.keys(q.opt_images||{}).length;

  return(
    <div style={{
      background:C.surface,
      border:`1px solid ${saveError?C.red:C.border}`,
      borderRadius:10,overflow:"hidden",
      boxShadow:saveError?`0 0 0 2px ${C.red}44`:"none",
    }}>

      {saveError&&(
        <div style={{background:C.redBg,borderBottom:`1px solid ${C.red}44`,
                    padding:"8px 16px",display:"flex",alignItems:"center",gap:10}}>
          <span style={{fontSize:14}}>❌</span>
          <span style={{fontSize:12,color:C.red,fontWeight:700}}>
            Save failed — Q{q.number}: {saveError}
          </span>
        </div>
      )}

      {/* Header */}
      <div style={{display:"flex",alignItems:"center",gap:8,flexWrap:"wrap",
                  padding:"10px 16px",background:C.surfaceHigh,borderBottom:`1px solid ${C.border}`}}>
        <span style={{color:C.textMuted,fontSize:13,fontWeight:700}}>
          {q._isManual?"Q+": `Q${q.number}`}
        </span>
        {q._isManual&&<Badge label="MANUAL" color={C.purple}/>}
        {saveError  &&<Badge label="SAVE FAILED" color={C.red}/>}
        <Badge label={q.q_type||"MCQ"} color={q.q_type==="MCQ"?C.blue:q.q_type==="MSQ"?C.amber:C.green}/>
        {q.exam_name    &&<Badge label={q.exam_name}      color={C.purple}/>}
        {q.subject      &&<Badge label={q.subject}        color={C.blueLight}/>}
        {q.exam_date    &&<Badge label={q.exam_date}      color={C.textMuted}/>}
        {q.shift        &&<Badge label={q.shift}          color={C.textMuted}/>}
        {q.chapter_name &&<Badge label={q.chapter_name}   color={C.purple}/>}
        {!q.exam_date   &&<Badge label="DATE MISSING"     color={C.amber}/>}
        {!q.shift       &&<Badge label="SHIFT MISSING"    color={C.amber}/>}
        {!q.chapter_name&&<Badge label="CHAPTER MISSING"  color={C.amber}/>}
        {!q.answer      &&<Badge label="ANSWER MISSING"   color={C.red}/>}
        <span style={{flex:1}}/>
        <button
          onClick={()=>{
            if(window.confirm(`Drop Q${q._isManual?"+":(q.number)}? Yeh sirf is list se hatega — database mein save nahi hua toh permanently discard ho jaayega.`)){
              onRemove();
            }
          }}
          title="Drop this question"
          style={{
            background:C.redBg,border:`1px solid ${C.red}44`,color:C.red,
            borderRadius:5,padding:"3px 10px",fontSize:11,cursor:"pointer",fontWeight:600,
            display:"flex",alignItems:"center",gap:4,
          }}>
          🗑 Drop
        </button>
        <span style={{fontSize:11,color:C.textDim}}>{index+1}/{total}</span>
      </div>

      {/* Always-visible 2-column preview */}
      <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:0,
                  borderBottom:`1px solid ${C.border}`}}>
        <div style={{padding:"16px 18px",borderRight:`1px solid ${C.border}`,
                    background:C.bg,minHeight:160}}>
          <div style={{fontSize:10,fontWeight:700,color:C.blueLight,marginBottom:8,
                      textTransform:"uppercase",letterSpacing:1}}>Question & Options</div>
          {/* PERF: MathPreview only re-typesets when questionHtml string changes */}
          {questionHtml
            ? <MathPreview content={questionHtml} style={{fontSize:14,color:C.text,lineHeight:1.75,marginBottom:10}}/>
            : <span style={{color:C.textDim,fontSize:12}}>— no question text —</span>}


          {q.q_type!=="NUMERICAL"&&(
            (q.options||[]).some(o=>o)||Object.keys(q.opt_images||{}).length>0
          )&&(
            <div style={{display:"flex",flexDirection:"column",gap:6}}>
              {[0,1,2,3].map((i)=>{
                const optKey   = ["a","b","c","d"][i];
                const optText  = (q.options||[])[i];
                const optImgId = (q.opt_images||{})[optKey];
                if(!optText && !optImgId) return null;
                const isCorrect = q.answer===String(i+1);
                return(
                  <div key={i} style={{padding:"7px 12px",borderRadius:6,
                    border:`1px solid ${isCorrect?C.green:C.border}`,
                    background:isCorrect?C.greenBg:C.surface,
                    display:"flex",alignItems:"flex-start",gap:8}}>
                    <span style={{minWidth:20,height:20,borderRadius:"50%",flexShrink:0,
                      background:isCorrect?C.green:C.surfaceHigh,
                      color:isCorrect?"#fff":C.textMuted,
                      display:"flex",alignItems:"center",justifyContent:"center",
                      fontSize:11,fontWeight:700}}>{i+1}</span>
                    <span style={{color:isCorrect?C.green:C.text,fontSize:13,flex:1}}>
                      {optImgId&&(
                        <img src={imgUrl(optImgId)} alt={`opt ${i+1}`}
                            style={{maxHeight:100,maxWidth:"100%",borderRadius:3,display:"block",marginBottom:optText?4:0}}
                            onError={e=>{e.target.style.display="none";}}/>
                      )}
                      {optText&&<MathPreview content={optionHtmls[i]||""} style={{display:"inline"}}/>}
                    </span>
                  </div>
                );
              })}
            </div>
          )}
          {q.q_type==="NUMERICAL"&&q.answer&&(
            <div style={{display:"inline-block",padding:"6px 14px",borderRadius:6,
                        background:C.greenBg,border:`1px solid ${C.green}`,
                        color:C.green,fontWeight:700,fontSize:13}}>
              Answer: {q.answer}
            </div>
          )}
        </div>
        <div style={{padding:"16px 18px",background:C.bg,minHeight:160}}>
          <div style={{fontSize:10,fontWeight:700,color:C.purple,marginBottom:8,
                      textTransform:"uppercase",letterSpacing:1}}>Solution</div>
          {solutionHtml
            ?<MathPreview content={solutionHtml} style={{fontSize:13,color:C.text,lineHeight:1.85}}/>
            :<span style={{color:C.textDim,fontSize:12}}>— no solution —</span>}
        </div>
      </div>

      {/* Tab bar */}
      <div style={{display:"flex",borderBottom:tab?`1px solid ${C.border}`:"none"}}>
        {[
          {key:"edit",  label:"✏️ Edit"},
          {key:"images",label:`🖼 Images${totalImgs>0?` (${totalImgs})`:""}`},
        ].map(({key,label})=>{
          const isActive=tab===key;
          return(
            <button key={key} onClick={()=>setTab(isActive?null:key)} style={{
              padding:"9px 20px",border:"none",
              background:isActive?C.surfaceHigh:"none",
              color:isActive?C.blue:C.textMuted,
              borderBottom:isActive?`2px solid ${C.blue}`:"2px solid transparent",
              cursor:"pointer",fontSize:13,fontWeight:600,transition:"all .15s",
            }}>
              {label}
              <span style={{marginLeft:6,fontSize:9,opacity:0.5}}>{isActive?"▲":"▼"}</span>
            </button>
          );
        })}
      </div>

      {tab!==null&&(
        <div style={{padding:"18px 22px"}}>
          {tab==="edit"&&(
            <>
              <div style={{marginBottom:14}}>
                <div style={{fontSize:11,color:C.textMuted,marginBottom:4,fontWeight:600}}>
                  Solution (LaTeX) — preview appears above ↑ (apply to update preview)
                </div>
                {/* PERF: solution textarea now uses localSolution draft — does NOT fire
                    onChange on every keystroke. The QuestionEditor's applyDraft picks it up. */}
                <SolutionDraftTextarea q={q} onChange={onChange} />
              </div>
              <QuestionEditor q={q} onChange={onChange}
                onApplyBelow={(field,val)=>setPending({field,value:val})}
                chapters={chapters} topics={topics} papers={papers}
                imgUrl={imgUrl}/>
              {pendingApply&&(
                <ApplyBelowBanner field={pendingApply.field} value={pendingApply.value}
                  questionIndex={index} totalQuestions={total}
                  onApply={doApply} onDismiss={()=>setPending(null)}/>
              )}
            </>
          )}
          {tab==="images"&&(
            <ImagesTab q={q} onChange={onChange} jobId={jobId} apiBase={apiBase} adminKey={adminKey}/>
          )}
        </div>
      )}

      {/* Footer */}
      <div style={{display:"flex",gap:10,justifyContent:"flex-end",alignItems:"center",
                  padding:"10px 22px",borderTop:`1px solid ${C.border}`,background:C.surfaceHigh}}>
        {!canSave&&(
          <span style={{fontSize:12,color:C.amber}}>
            {[!q.exam_date&&"Set date",!q.shift&&"Set shift",
              !q.chapter_name&&"Set chapter",!q.answer&&"Set answer"]
              .filter(Boolean).join("  ·  ")} before saving
          </span>
        )}
        <Btn small color={C.green} disabled={!canSave} onClick={()=>onSaveOne(q)}>
          ✓ Verify & Save
        </Btn>
      </div>
    </div>
  );
}, questionCardPropsEqual);

// ─── Upload screen ─────────────────────────────────────────────────────────────
function UploadScreen({ apiBase, adminKey, openaiKey, onOpenaiKeyChange,
                        onJobCreated, onLatexMode, onOpenImageManager, onBack }) {
  const [dragging,  setDragging]  = useState(false);
  const [uploading, setUploading] = useState(false);
  const [error,     setError]     = useState("");
  const [mode,      setMode]      = useState("zip");
  const [pdfStatus, setPdfStatus] = useState("");
  const [texFile,   setTexFile]   = useState(null);
  const [imgFiles,  setImgFiles]  = useState([]);
  const [showKey,   setShowKey]   = useState(false);
  const [uploadExam, setUploadExam] = useState(""); // exam type chosen before upload
  const inputRef    = useRef();
  const texInputRef = useRef();
  const imgInputRef = useRef();

  const MODES=[
    {key:"zip",   label:"📦 ZIP",     desc:"tex + images",      accept:".zip"},
    {key:"teximg",label:"📄 TEX + 🖼",desc:"tex file + images", accept:".tex"},
    {key:"tex",   label:"📄 TEX",     desc:"no images",         accept:".tex"},
    {key:"pdf",   label:"📋 PDF",     desc:"via MathPix API",   accept:".pdf"},
    {key:"latex", label:"✏️ LaTeX",   desc:"type directly",     accept:null  },
  ];

  const submitTexImg=async()=>{
    if(!texFile){setError("Please select a .tex file");return;}
    setUploading(true);setError("");
    const form=new FormData();
    form.append("file",texFile);
    imgFiles.forEach(f=>form.append("images",f));
    try{
      const res=await fetch(`${apiBase}/api/admin/upload-tex-images`,{
        method:"POST",headers:{"x-admin-key":adminKey,"x-openai-key":openaiKey,"x-exam-type":uploadExam},body:form,
      });
      if(!res.ok){const b=await res.json().catch(()=>({}));throw new Error(b.detail||res.statusText);}
      const {job_id}=await res.json();
      onJobCreated(job_id);
    }catch(e){setError(String(e));setUploading(false);}
  };

  const submit=async(file)=>{
    if(!file) return;
    const ext=file.name.split(".").pop().toLowerCase();
    const expected={zip:"zip",tex:"tex",pdf:"pdf"}[mode];
    if(ext!==expected){setError(`Please select a .${expected} file`);return;}
    setUploading(true);setError("");setPdfStatus("");
    const form=new FormData();form.append("file",file);
    const endpoint=mode==="pdf"?"upload-pdf":mode==="zip"?"upload-zip":"upload-tex";
    if(mode==="pdf") setPdfStatus("Sending to MathPix…");
    try{
      const res=await fetch(`${apiBase}/api/admin/${endpoint}`,{
        method:"POST",headers:{"x-admin-key":adminKey,"x-openai-key":openaiKey,"x-exam-type":uploadExam},body:form,
      });
      if(!res.ok){const b=await res.json().catch(()=>({}));throw new Error(b.detail||res.statusText);}
      const {job_id}=await res.json();
      onJobCreated(job_id);
    }catch(e){setError(String(e));setUploading(false);setPdfStatus("");}
  };

  return(
    <div style={{minHeight:"100vh",background:C.bg,display:"flex",alignItems:"center",justifyContent:"center"}}>
      <div style={{textAlign:"center",maxWidth:580,width:"100%",padding:"0 24px"}}>
        <div style={{fontSize:36,marginBottom:8}}>📄</div>
        <h2 style={{color:C.text,marginBottom:6}}>Question Paper Upload</h2>
        <p style={{color:C.textMuted,marginBottom:4,fontSize:14}}>
          Upload a question paper in any format — or type LaTeX directly.
        </p>
        {onBack&&(
          <button onClick={onBack} style={{
            marginBottom:20,background:"transparent",border:`1px solid ${C.border}`,
            borderRadius:6,padding:"5px 14px",color:C.textMuted,cursor:"pointer",fontSize:12,
          }}>← Back to Edit Existing Questions</button>
        )}

        {/* OpenAI API Key */}
        <div style={{
          background:C.surface,border:`1px solid ${openaiKey?C.green+"66":C.amber+"66"}`,
          borderRadius:10,padding:"14px 16px",marginBottom:20,textAlign:"left",
        }}>
          <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:openaiKey?0:8}}>
            <span style={{fontSize:13,fontWeight:600,color:openaiKey?C.green:C.amber}}>
              {openaiKey?"✓ OpenAI Key set":"⚠ OpenAI API Key required for auto-tagging"}
            </span>
            <span style={{flex:1}}/>
            <button onClick={()=>setShowKey(s=>!s)} style={{
              background:"transparent",border:`1px solid ${C.border}`,borderRadius:5,
              padding:"3px 10px",fontSize:11,color:C.textMuted,cursor:"pointer",
            }}>{showKey?"Hide":openaiKey?"Change":"Enter key"}</button>
            {openaiKey&&<button onClick={()=>onOpenaiKeyChange("")} style={{
              background:"transparent",border:`1px solid ${C.red}44`,borderRadius:5,
              padding:"3px 10px",fontSize:11,color:C.red,cursor:"pointer",
            }}>Clear</button>}
          </div>
          {(!openaiKey||showKey)&&(
            <div style={{marginTop:10}}>
              <input type="password" value={openaiKey} onChange={e=>onOpenaiKeyChange(e.target.value)}
                placeholder="sk-proj-..."
                style={{width:"100%",boxSizing:"border-box",background:C.bg,color:C.text,
                       border:`1px solid ${C.border}`,borderRadius:6,padding:"8px 12px",
                       fontSize:13,outline:"none",fontFamily:"monospace"}}/>
              <div style={{fontSize:11,color:C.textDim,marginTop:5}}>
                Used for chapter/topic/difficulty auto-tagging. Saved in browser localStorage.
              </div>
            </div>
          )}
        </div>

        {/* Exam Type Selector — choose BEFORE upload so LLM uses correct taxonomy */}
        <div style={{
          background:C.surface,border:`1px solid ${uploadExam==="SSC CGL"?C.purple+"66":C.border}`,
          borderRadius:10,padding:"14px 16px",marginBottom:20,textAlign:"left",
        }}>
          <div style={{fontSize:12,fontWeight:700,color:C.textMuted,marginBottom:10,letterSpacing:0.5}}>
            📋 EXAM TYPE <span style={{fontWeight:400,color:C.textDim}}>(select before uploading so AI tags with correct syllabus)</span>
          </div>
          <div style={{display:"flex",gap:6,flexWrap:"wrap"}}>
            {[
              {value:"JEE Main",  label:"JEE Main",  color:C.blue},
              {value:"JEE Advanced", label:"JEE Adv",color:C.blue},
              {value:"NEET",      label:"NEET",       color:C.green},
              {value:"SSC CGL",   label:"🏛 SSC CGL", color:C.purple},
              {value:"CUET",      label:"CUET",       color:C.amber},
              {value:"Other",     label:"Other",      color:C.textMuted},
            ].map(({value,label,color})=>(
              <button key={value}
                onClick={()=>setUploadExam(v=>v===value?"":value)}
                style={{
                  padding:"7px 16px",borderRadius:8,fontSize:12,fontWeight:600,cursor:"pointer",
                  border:`2px solid ${uploadExam===value?color:C.border}`,
                  background:uploadExam===value?color+"22":C.bg,
                  color:uploadExam===value?color:C.textMuted,
                  transition:"all .15s",
                }}>{label}</button>
            ))}
          </div>
          {uploadExam==="SSC CGL"&&(
            <div style={{marginTop:10,padding:"10px 12px",borderRadius:7,
                        background:C.purple+"11",border:`1px solid ${C.purple}33`,
                        fontSize:11,color:C.purple}}>
              ✓ <strong>SSC CGL mode:</strong> LLM will classify into{" "}
              <em>General Intelligence & Reasoning, General Awareness, Quantitative Aptitude, English Comprehension</em>{" "}
              with SSC CGL chapters &amp; topics. Subject/Chapter/Topic fields in each question card will show SSC CGL options.
            </div>
          )}
          {!uploadExam&&(
            <div style={{marginTop:8,fontSize:11,color:C.textDim}}>
              ℹ No exam selected — LLM will default to JEE taxonomy.
            </div>
          )}
        </div>

        {/* Mode selector */}
        <div style={{display:"flex",gap:8,marginBottom:24,justifyContent:"center",flexWrap:"wrap"}}>
          {MODES.map(({key,label,desc})=>(
            <button key={key} onClick={()=>{setMode(key);setError("");if(key==="latex") onLatexMode();}} style={{
              padding:"10px 16px",borderRadius:8,fontSize:13,fontWeight:600,cursor:"pointer",
              border:`2px solid ${mode===key?(key==="latex"?C.green:C.blue):C.border}`,
              background:mode===key?(key==="latex"?C.green+"22":C.blue+"22"):C.surface,
              color:mode===key?(key==="latex"?C.green:C.blueLight):C.textMuted,
              transition:"all .15s",
            }}>
              {label}
              <div style={{fontSize:10,fontWeight:400,marginTop:2,color:C.textDim}}>{desc}</div>
            </button>
          ))}
        </div>

        {mode==="zip"&&(
          <div style={{background:C.surface,borderRadius:8,padding:"12px 16px",marginBottom:20,
                      textAlign:"left",fontSize:12,color:C.textMuted,border:`1px solid ${C.border}`}}>
            <strong style={{color:C.text}}>How to create ZIP on Windows:</strong>
            <ol style={{margin:"6px 0 0",paddingLeft:18,lineHeight:1.8}}>
              <li>Select your <code>.tex</code> file + <code>images/</code> folder</li>
              <li>Right click → <em>Send to</em> → <em>Compressed (zipped) folder</em></li>
              <li>Upload here</li>
            </ol>
          </div>
        )}
        {mode==="teximg"&&(
          <div style={{background:C.surface,borderRadius:8,padding:"14px 16px",marginBottom:20,
                      textAlign:"left",fontSize:12,color:C.textMuted,border:`1px solid ${C.border}`}}>
            <strong style={{color:C.text}}>TEX file + Images</strong>
            <p style={{margin:"4px 0 10px"}}>Upload a <code>.tex</code> file and any image files separately.</p>
            <div style={{marginBottom:10}}>
              <div style={{fontSize:11,fontWeight:600,color:C.textMuted,marginBottom:4}}>
                TEX File {texFile&&<span style={{color:C.green}}>✓ {texFile.name}</span>}
              </div>
              <div onClick={()=>texInputRef.current.click()}
                style={{border:`1px dashed ${texFile?C.green:C.border}`,borderRadius:6,
                        padding:"10px 14px",cursor:"pointer",background:texFile?C.greenBg:C.bg,
                        color:texFile?C.green:C.textMuted,fontSize:12}}>
                {texFile?`✓ ${texFile.name}`:"Click to select .tex file"}
              </div>
              <input ref={texInputRef} type="file" accept=".tex" style={{display:"none"}}
                onChange={e=>{if(e.target.files[0]) setTexFile(e.target.files[0]);}}/>
            </div>
            <div>
              <div style={{fontSize:11,fontWeight:600,color:C.textMuted,marginBottom:4}}>
                Images Folder (optional) — {imgFiles.length} file{imgFiles.length!==1?"s":""} loaded
              </div>
              <div style={{display:"flex",gap:8}}>
                <div onClick={()=>{const inp=imgInputRef.current;inp.setAttribute("webkitdirectory","");inp.removeAttribute("multiple");inp.click();}}
                  style={{flex:1,border:`1px dashed ${imgFiles.length?C.blue:C.border}`,borderRadius:6,
                          padding:"10px 14px",cursor:"pointer",background:C.bg,
                          color:imgFiles.length?C.blueLight:C.textMuted,fontSize:12}}>
                  📁 {imgFiles.length?`✓ ${imgFiles.length} images from folder`:"Select images folder"}
                </div>
                <div onClick={()=>{const inp=imgInputRef.current;inp.removeAttribute("webkitdirectory");inp.setAttribute("multiple","");inp.click();}}
                  style={{border:`1px dashed ${C.border}`,borderRadius:6,padding:"10px 14px",
                          cursor:"pointer",background:C.bg,color:C.textMuted,fontSize:12,whiteSpace:"nowrap"}}>
                  🖼 Individual files
                </div>
              </div>
              <input ref={imgInputRef} type="file" accept="image/*" style={{display:"none"}}
                onChange={e=>setImgFiles(Array.from(e.target.files))}/>
              {imgFiles.length>0&&(
                <div style={{marginTop:6,display:"flex",flexWrap:"wrap",gap:4}}>
                  {imgFiles.map((f,i)=>(
                    <span key={i} style={{fontSize:10,padding:"2px 8px",borderRadius:4,
                                         background:C.surfaceHigh,color:C.textMuted,
                                         display:"flex",alignItems:"center",gap:4}}>
                      {f.name}
                      <span onClick={()=>setImgFiles(p=>p.filter((_,j)=>j!==i))}
                        style={{cursor:"pointer",color:C.red,fontWeight:700}}>×</span>
                    </span>
                  ))}
                </div>
              )}
            </div>
            {texFile&&(
              <button onClick={submitTexImg} disabled={uploading}
                style={{marginTop:14,width:"100%",padding:"10px",borderRadius:6,
                        background:uploading?C.surfaceHigh:C.green,color:"#fff",
                        border:"none",fontSize:13,fontWeight:700,cursor:uploading?"not-allowed":"pointer"}}>
                {uploading?"⏳ Uploading…":`Upload TEX${imgFiles.length?` + ${imgFiles.length} images`:""}`}
              </button>
            )}
          </div>
        )}
        {mode==="pdf"&&(
          <div style={{background:C.surface,borderRadius:8,padding:"12px 16px",marginBottom:20,
                      textAlign:"left",fontSize:12,color:C.textMuted,border:`1px solid ${C.border}`}}>
            <strong style={{color:C.text}}>PDF → MathPix → Parse</strong>
            <ul style={{margin:"6px 0 0",paddingLeft:18,lineHeight:1.8}}>
              <li>Upload any JEE/NEET PDF directly</li>
              <li>Backend sends it to MathPix API</li>
              <li>Takes ~30–120s depending on PDF size</li>
            </ul>
          </div>
        )}

        {mode!=="teximg"&&mode!=="latex"&&(
          <div onDragOver={e=>{e.preventDefault();setDragging(true);}}
               onDragLeave={()=>setDragging(false)}
               onDrop={e=>{e.preventDefault();setDragging(false);submit(e.dataTransfer.files[0]);}}
               onClick={()=>!uploading&&inputRef.current.click()}
               style={{
                 border:`2px dashed ${dragging?C.blue:C.border}`,borderRadius:12,padding:"44px 24px",
                 background:dragging?C.blue+"11":C.surface,cursor:uploading?"wait":"pointer",
                 transition:"all .2s",color:C.textMuted,fontSize:14,
               }}>
            {uploading
              ?<span style={{color:C.blueLight}}>⏳ {mode==="pdf"?(pdfStatus||"Uploading to MathPix…"):"Uploading…"}</span>
              :`Drop .${MODES.find(m=>m.key===mode)?.accept?.replace(".","")} here or click to browse`}
            <input ref={inputRef} type="file" accept={MODES.find(m=>m.key===mode)?.accept}
                   style={{display:"none"}} onChange={e=>submit(e.target.files[0])}/>
          </div>
        )}

        {error&&<div style={{marginTop:16,color:C.red,fontSize:13,background:C.redBg,
                              padding:"10px 14px",borderRadius:8}}>{error}</div>}

        <div style={{marginTop:28,borderTop:`1px solid ${C.border}`,paddingTop:20}}>
          <button onClick={onOpenImageManager} style={{
            width:"100%",padding:"13px 20px",borderRadius:10,
            background:C.surface,border:`1px solid ${C.border}`,
            color:C.textMuted,fontSize:14,fontWeight:600,
            cursor:"pointer",display:"flex",alignItems:"center",
            justifyContent:"center",gap:8,
          }}>
            🖼️ Open Image Upload Manager
            <span style={{fontSize:11,color:C.textDim}}>— upload images to existing questions</span>
          </button>
        </div>
      </div>
    </div>
  );
}

// ─── Image Upload Manager (unchanged) ────────────────────────────────────────
function ImageUploadScreen({ apiBase, adminKey, onBack }) {
  const [questionId, setQuestionId] = useState("");
  const [section,    setSection]    = useState("question");
  const [file,       setFile]       = useState(null);
  const [preview,    setPreview]    = useState(null);
  const [uploading,  setUploading]  = useState(false);
  const [result,     setResult]     = useState(null);
  const [error,      setError]      = useState("");
  const [dragOver,   setDragOver]   = useState(false);
  const [history,    setHistory]    = useState([]);
  const fileRef = useRef();

  const selectFile=(f)=>{
    if(!f||!f.type.startsWith("image/")){setError("Please select an image file");return;}
    setFile(f);setError("");setResult(null);
    const reader=new FileReader();
    reader.onload=e=>setPreview(e.target.result);
    reader.readAsDataURL(f);
  };
  const upload=async()=>{
    if(!file){setError("Select an image first");return;}
    if(!questionId.trim()){setError("Enter a Question ID");return;}
    setUploading(true);setError("");setResult(null);
    try{
      const form=new FormData();
      form.append("file",file);form.append("question_id",questionId.trim());form.append("section",section);
      const res=await fetch(`${apiBase}/api/admin/upload-question-image`,{
        method:"POST",headers:{"x-admin-key":adminKey},body:form,
      });
      const data=await res.json();
      if(!res.ok) throw new Error(data.detail||res.statusText);
      setResult(data);
      setHistory(h=>[{questionId:questionId.trim(),section,imageId:data.image_id,url:data.url,ts:new Date().toLocaleTimeString()},...h.slice(0,19)]);
      setFile(null);setPreview(null);
    }catch(e){setError(String(e));}
    finally{setUploading(false);}
  };

  return(
    <div style={{minHeight:"100vh",background:C.bg,fontFamily:"'Inter', system-ui, sans-serif"}}>
      <div style={{background:C.surface,borderBottom:`1px solid ${C.border}`,padding:"14px 24px",display:"flex",alignItems:"center",gap:12}}>
        <button onClick={onBack} style={{background:"none",border:`1px solid ${C.border}`,borderRadius:8,padding:"6px 14px",color:C.textMuted,cursor:"pointer",fontSize:13,fontWeight:600}}>← Back</button>
        <span style={{fontSize:16,fontWeight:700,color:C.text}}>🖼️ Image Upload Manager</span>
      </div>
      <div style={{maxWidth:800,margin:"0 auto",padding:"32px 24px",display:"flex",flexDirection:"column",gap:24}}>
        <div style={{background:C.surface,border:`1px solid ${C.border}`,borderRadius:14,padding:"24px 28px"}}>
          <div style={{fontSize:14,fontWeight:700,color:C.text,marginBottom:20}}>Upload Image to Question</div>
          <div style={{marginBottom:16}}>
            <label style={{fontSize:12,fontWeight:600,color:C.textMuted,display:"block",marginBottom:6}}>Question ID (from database)</label>
            <input value={questionId} onChange={e=>{setQuestionId(e.target.value);setError("");setResult(null);}}
              placeholder="e.g. 1042"
              style={{width:"100%",padding:"10px 14px",borderRadius:8,background:C.surface,border:`1px solid ${C.border}`,color:C.text,fontSize:14,outline:"none",boxSizing:"border-box"}}/>
          </div>
          <div style={{marginBottom:20}}>
            <label style={{fontSize:12,fontWeight:600,color:C.textMuted,display:"block",marginBottom:8}}>Attach to</label>
            <div style={{display:"flex",gap:10}}>
              {["question","solution"].map(s=>(
                <button key={s} onClick={()=>setSection(s)} style={{
                  flex:1,padding:"9px 0",borderRadius:8,fontSize:13,fontWeight:600,
                  background:section===s?C.blue+"22":C.surface,
                  border:`1.5px solid ${section===s?C.blue:C.border}`,
                  color:section===s?C.blueLight:C.textMuted,cursor:"pointer",textTransform:"capitalize",
                }}>{s==="question"?"📋 Question":"✅ Solution"}</button>
              ))}
            </div>
          </div>
          <div onDragOver={e=>{e.preventDefault();setDragOver(true);}}
               onDragLeave={()=>setDragOver(false)}
               onDrop={e=>{e.preventDefault();setDragOver(false);selectFile(e.dataTransfer.files[0]);}}
               onClick={()=>fileRef.current.click()}
               style={{border:`2px dashed ${dragOver?C.blue:preview?C.green:C.border}`,
                 borderRadius:12,padding:preview?"16px":"36px 24px",
                 background:dragOver?C.blue+"0e":C.surface,
                 cursor:"pointer",transition:"all .2s",textAlign:"center",marginBottom:16}}>
            {preview?(
              <div style={{display:"flex",alignItems:"center",gap:16,justifyContent:"center"}}>
                <img src={preview} alt="preview" style={{maxHeight:120,maxWidth:200,borderRadius:8,objectFit:"contain",border:`1px solid ${C.border}`}}/>
                <div style={{textAlign:"left"}}>
                  <div style={{fontSize:13,fontWeight:600,color:C.text}}>{file?.name}</div>
                  <div style={{fontSize:11,color:C.textDim,marginTop:4}}>{(file?.size/1024).toFixed(1)} KB</div>
                  <div style={{fontSize:11,color:C.blue,marginTop:6}}>Click to change</div>
                </div>
              </div>
            ):(
              <div style={{color:C.textMuted,fontSize:14}}>
                📁 Drop image here or <span style={{color:C.blue,fontWeight:600}}>click to browse</span>
                <div style={{fontSize:11,color:C.textDim,marginTop:6}}>PNG, JPG, GIF, WebP</div>
              </div>
            )}
            <input ref={fileRef} type="file" accept="image/*" style={{display:"none"}}
              onChange={e=>{selectFile(e.target.files[0]);e.target.value="";}}/>
          </div>
          {error  &&<div style={{marginBottom:14,color:C.red,fontSize:13,background:C.redBg,padding:"10px 14px",borderRadius:8}}>{error}</div>}
          {result &&(
            <div style={{marginBottom:14,background:C.greenBg,border:`1px solid ${C.green}44`,borderRadius:8,padding:"12px 16px"}}>
              <div style={{fontSize:13,fontWeight:700,color:C.green,marginBottom:6}}>✅ Uploaded successfully!</div>
              <div style={{fontSize:12,color:C.textMuted}}>Image ID: <code style={{background:C.surface,padding:"1px 6px",borderRadius:4,color:C.text}}>{result.image_id}</code></div>
            </div>
          )}
          <button onClick={upload} disabled={uploading||!file||!questionId.trim()} style={{
            width:"100%",padding:"12px",borderRadius:10,fontSize:15,fontWeight:700,
            background:uploading||!file||!questionId.trim()?C.surface:C.blue,
            border:"none",color:uploading||!file||!questionId.trim()?C.textDim:"#fff",
            cursor:uploading||!file||!questionId.trim()?"not-allowed":"pointer",
          }}>
            {uploading?"⏳ Uploading…":"⬆️ Upload Image"}
          </button>
        </div>
        {history.length>0&&(
          <div style={{background:C.surface,border:`1px solid ${C.border}`,borderRadius:14,padding:"20px 24px"}}>
            <div style={{fontSize:13,fontWeight:700,color:C.text,marginBottom:14}}>Recent Uploads (this session)</div>
            <div style={{display:"flex",flexDirection:"column",gap:8}}>
              {history.map((h,i)=>(
                <div key={i} style={{display:"flex",alignItems:"center",gap:12,padding:"8px 12px",background:C.bg,borderRadius:8,border:`1px solid ${C.border}`}}>
                  {h.url&&<img src={h.url} alt="" style={{width:36,height:36,objectFit:"cover",borderRadius:5,border:`1px solid ${C.border}`,flexShrink:0}}/>}
                  <div style={{flex:1,minWidth:0}}>
                    <div style={{fontSize:12,fontWeight:600,color:C.text}}>Q#{h.questionId} · {h.section}</div>
                    <div style={{fontSize:11,color:C.textDim,fontFamily:"monospace"}}>[IMAGE:{h.imageId}]</div>
                  </div>
                  <div style={{fontSize:10,color:C.textDim,flexShrink:0}}>{h.ts}</div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// ─── Processing screen (unchanged) ───────────────────────────────────────────
function ProcessingScreen({ jobId, apiBase, adminKey, onReady }) {
  const [status,  setStatus]  = useState({step:"Waiting…",pct:0});
  const [error,   setError]   = useState("");
  const [elapsed, setElapsed] = useState(0);
  const retriesRef   = useRef(0);
  const netErrRef    = useRef(0);
  const startTimeRef = useRef(Date.now());

  useEffect(()=>{
    const iv=setInterval(()=>setElapsed(Math.floor((Date.now()-startTimeRef.current)/1000)),1000);
    return()=>clearInterval(iv);
  },[]);

  useEffect(()=>{
    retriesRef.current=0;netErrRef.current=0;startTimeRef.current=Date.now();
    const MAX_RETRIES=120;const POLL_INTERVAL=5000;
    const poll=async()=>{
      retriesRef.current++;
      if(retriesRef.current>MAX_RETRIES){
        setError("Processing is taking longer than 10 minutes.\nThis can happen with large PDFs on Railway's free tier.\nPlease refresh the page and try again, or check Railway logs.");
        return;
      }
      try{
        const res=await fetch(`${apiBase}/api/admin/jobs/${jobId}`,{headers:{"x-admin-key":adminKey}});
        if(!res.ok){
          netErrRef.current++;
          if(netErrRef.current<4){setTimeout(poll,POLL_INTERVAL*netErrRef.current);return;}
          throw new Error(`HTTP ${res.status}`);
        }
        netErrRef.current=0;
        const data=await res.json();
        setStatus({step:data.status,pct:data.progress||0});
        if(data.status==="ready"){onReady();return;}
        if(data.status==="failed"){setError(data.error||"Pipeline failed — check Railway logs");return;}
        setTimeout(poll,POLL_INTERVAL);
      }catch(e){
        netErrRef.current++;
        const backoff=Math.min(POLL_INTERVAL*netErrRef.current,30000);
        if(netErrRef.current>6){setError(`Network error after ${netErrRef.current} retries: ${e.message}`);return;}
        setTimeout(poll,backoff);
      }
    };
    const timer=setTimeout(poll,POLL_INTERVAL);
    return()=>clearTimeout(timer);
  },[jobId]);

  const stepLabel={
    processing:"📦 Extracting ZIP…",
    mathpix:"🔄 MathPix converting PDF… (can take 1–3 min)",
    parsing:"📄 Parsing .tex…",
    tagging:"🤖 Auto-tagging with GPT-4o…",
    ready:"✅ Done!",
  }[status.step]||status.step;

  const mins=Math.floor(elapsed/60);
  const secs=elapsed%60;
  const elapsedStr=mins>0?`${mins}m ${secs}s`:`${secs}s`;

  return(
    <div style={{minHeight:"100vh",background:C.bg,display:"flex",alignItems:"center",justifyContent:"center"}}>
      <div style={{textAlign:"center",maxWidth:440,padding:"0 24px"}}>
        <div style={{fontSize:40,marginBottom:16}}>⚙️</div>
        <h2 style={{color:C.text,marginBottom:8}}>Processing…</h2>
        <p style={{color:C.textMuted,marginBottom:8,fontSize:14}}>{stepLabel}</p>
        <p style={{color:C.textDim,marginBottom:24,fontSize:12}}>Elapsed: {elapsedStr}</p>
        <div style={{background:C.surface,borderRadius:8,height:8,overflow:"hidden",marginBottom:24}}>
          <div style={{width:`${status.pct}%`,height:"100%",background:C.blue,transition:"width .5s"}}/>
        </div>
        {error&&(
          <div style={{background:C.redBg,border:`1px solid ${C.red}`,borderRadius:8,padding:"14px 16px",
                      color:C.red,fontSize:13,textAlign:"left"}}>
            <strong>Error:</strong>
            <pre style={{margin:"8px 0 0",whiteSpace:"pre-wrap",fontSize:11}}>{error}</pre>
          </div>
        )}
      </div>
    </div>
  );
}

// ─── Blank question factory ───────────────────────────────────────────────────
let _manualQCounter=0;
function createBlankQuestion(afterNumber,existingQuestions){
  _manualQCounter++;
  const ref=existingQuestions.find(q=>q.number>afterNumber)||
            existingQuestions.find(q=>q.number===afterNumber)||
            existingQuestions[0]||{};
  return{
    number:afterNumber+0.5,_manualId:`manual_${_manualQCounter}`,_isManual:true,
    q_type:"MCQ",subject:ref.subject||"",exam_name:ref.exam_name||"",
    exam_date:ref.exam_date||"",shift:ref.shift||"",year:ref.year||"",
    chapter_name:ref.chapter_name||"",topic_name:ref.topic_name||"",
    difficulty:"medium",marks_correct:4,marks_wrong:-1,
    question:"",options:["","","",""],answer:"",solution:"",
    q_images:[],sol_images:[],opt_images:{},verified:false,
  };
}

function AddQuestionButton({onClick}){
  const [hovered,setHovered]=useState(false);
  return(
    <div onMouseEnter={()=>setHovered(true)} onMouseLeave={()=>setHovered(false)}
         onClick={onClick}
         style={{display:"flex",alignItems:"center",gap:10,cursor:"pointer",
           padding:"4px 0",margin:"2px 0",
           opacity:hovered?1:0.35,transition:"opacity .2s"}}>
      <div style={{flex:1,height:1,background:hovered?C.blue:C.border,transition:"background .2s"}}/>
      <div style={{display:"flex",alignItems:"center",justifyContent:"center",
        width:28,height:28,borderRadius:"50%",
        border:`2px solid ${hovered?C.blue:C.border}`,
        background:hovered?C.blue+"22":"transparent",
        color:hovered?C.blue:C.textMuted,
        fontSize:18,fontWeight:300,lineHeight:1,
        transition:"all .2s",flexShrink:0,userSelect:"none"}}>+</div>
      <div style={{flex:1,height:1,background:hovered?C.blue:C.border,transition:"background .2s"}}/>
    </div>
  );
}

// ─── Crash Recovery ───────────────────────────────────────────────────────────
const RECOVERY_KEY=(jobId)=>`examside_recovery_${jobId}`;
function saveRecovery(jobId,questions){
  try{ localStorage.setItem(RECOVERY_KEY(jobId),JSON.stringify({questions,savedAt:Date.now()})); }
  catch(e){}
}
function loadRecovery(jobId){
  try{
    const raw=localStorage.getItem(RECOVERY_KEY(jobId));
    if(!raw) return null;
    const data=JSON.parse(raw);
    if(Date.now()-data.savedAt>86400000){localStorage.removeItem(RECOVERY_KEY(jobId));return null;}
    return data.questions;
  }catch(e){return null;}
}
function clearRecovery(jobId){
  try{localStorage.removeItem(RECOVERY_KEY(jobId));}catch(e){}
}

// ─── ReviewScreen ─────────────────────────────────────────────────────────────
// Simple paginated ReviewScreen — 10 questions per page, no virtualization
const REVIEW_PAGE_SIZE = 10;
function ReviewScreen({ jobId, apiBase, adminKey, onBack, initialQuestions }) {
  const [questions,      setQuestions]      = useState(initialQuestions||[]);
  const [loading,        setLoading]        = useState(!initialQuestions);
  const [chapters,       setChapters]       = useState([]);
  const [topics,         setTopics]         = useState([]);
  const [papers,         setPapers]         = useState([]);
  const [saving,         setSaving]         = useState(false);
  const [saveResult,     setSaveResult]     = useState(null);
  const [saveErrors,     setSaveErrors]     = useState({});
  const [recoveryBanner, setRecoveryBanner] = useState(false);
  const [page,           setPage]           = useState(1);
  const autoSaveRef = useRef(null);
  const topRef = useRef(null);

  // PERF: auto-save debounced to 2s with ref-equality guard
  const prevQsRef = useRef(questions);
  useEffect(()=>{
    if(questions===prevQsRef.current) return; // referential equality — nothing changed
    prevQsRef.current=questions;
    if(questions.length===0) return;
    if(autoSaveRef.current) clearTimeout(autoSaveRef.current);
    autoSaveRef.current=setTimeout(()=>saveRecovery(jobId,questions),2000);
    return()=>clearTimeout(autoSaveRef.current);
  },[questions,jobId]);

  useEffect(()=>{
    const h={"x-admin-key":adminKey};
    const fetches=[
      fetch(`${apiBase}/api/admin/chapters`,{headers:h}).then(r=>r.json()).catch(()=>[]),
      fetch(`${apiBase}/api/admin/topics`,  {headers:h}).then(r=>r.json()).catch(()=>[]),
      fetch(`${apiBase}/api/admin/papers`,  {headers:h}).then(r=>r.json()).catch(()=>[]),
    ];
    if(!initialQuestions){
      fetches.unshift(
        fetch(`${apiBase}/api/admin/jobs/${jobId}/questions`,{headers:h}).then(r=>r.json())
      );
    }
    Promise.all(fetches).then((results)=>{
      let idx=0;
      if(!initialQuestions){
        const qData=results[idx++];
        const serverQs=qData.questions||[];
        const recovered=loadRecovery(jobId);
        if(recovered&&recovered.length>0){setQuestions(applySSCSolutions(recovered));setRecoveryBanner(true);}
        else setQuestions(applySSCSolutions(serverQs));
      }
      setChapters(Array.isArray(results[idx])?results[idx]:[]); idx++;
      setTopics(Array.isArray(results[idx])?results[idx]:[]); idx++;
      setPapers(Array.isArray(results[idx])?results[idx]:[]); idx++;
    }).finally(()=>setLoading(false));
  },[jobId]);

  const updateQ = useCallback((globalIdx, u) => {
    setQuestions(p => { const n=[...p]; n[globalIdx]=u; return n; });
  }, []);

  const insertQuestion = useCallback((afterGlobalIdx) => {
    setQuestions(prev => {
      const afterQ = afterGlobalIdx >= 0 ? prev[afterGlobalIdx] : null;
      const refNum = afterQ ? afterQ.number - 0.5 : (prev[0] ? prev[0].number - 0.5 : 0);
      const blank  = createBlankQuestion(refNum, prev);
      const next   = [...prev];
      next.splice(afterGlobalIdx + 1, 0, blank);
      return next;
    });
  }, []);

  const removeQuestion = useCallback((index) => {
    setQuestions(prev => prev.filter((_, i) => i !== index));
  }, []);

  const applyBelow = useCallback((fromIndex, field, value) => {
    setQuestions(prev => prev.map((q, i) => {
      if(i <= fromIndex) return q;
      if(field === "exam_date") return {...q, exam_date:value, year:value.slice(0,4)};
      if(field === "q_type")    return {...q, q_type:value};
      return {...q, [field]:value};
    }));
  }, []);

  const isReady = (q) => !!(q.answer && q.chapter_name && q.exam_date && q.shift);
  const readyCount = useMemo(() => questions.filter(isReady).length, [questions]);

  const missingGaps = useMemo(() => {
    const nums = questions
      .map(q => q.number).filter(n => typeof n==="number" && !isNaN(n) && Number.isInteger(n))
      .sort((a,b) => a-b);
    const gaps = [];
    for(let i=1; i<nums.length; i++){
      const diff = nums[i]-nums[i-1];
      if(diff > 1){ for(let m=nums[i-1]+1; m<nums[i]; m++) gaps.push(m); }
    }
    return gaps;
  }, [questions]);

  const scrollToGap = useCallback((gapNum) => {
    const nextIdx = questions.findIndex(q => q.number > gapNum);
    const targetIdx = nextIdx >= 0 ? nextIdx : questions.length - 1;
    if(targetIdx >= 0){
      const targetPage = Math.floor(targetIdx / REVIEW_PAGE_SIZE) + 1;
      setPage(targetPage);
      setTimeout(() => topRef.current?.scrollIntoView({behavior:"smooth", block:"start"}), 50);
    }
  }, [questions]);

  // ── Batched save ─────────────────────────────────────────────────────────────
  const saveQuestions=async(subset)=>{
    setSaving(true);setSaveResult(null);
    const newErrors={};
    const savedKeys=new Set();
    const BATCH_SIZE=8;
    for(let batchStart=0;batchStart<subset.length;batchStart+=BATCH_SIZE){
      const batch=subset.slice(batchStart,batchStart+BATCH_SIZE);
      await Promise.all(batch.map(async(q)=>{
        const qKey=q._manualId||String(q.number);
        try{
          const res=await fetch(`${apiBase}/api/admin/save-questions`,{
            method:"POST",
            headers:{"Content-Type":"application/json","x-admin-key":adminKey},
            body:JSON.stringify({
              job_id:jobId,
              questions:[{...q,verified:true,
                exam_date:q.exam_date||null,
                year:q.exam_date?parseInt(q.exam_date.slice(0,4)):(q.year?parseInt(q.year):null),
              }],
            }),
          });
          const data=await res.json();
          if(!res.ok) newErrors[qKey]=data.detail||`HTTP ${res.status}`;
          else savedKeys.add(qKey);
        }catch(e){newErrors[qKey]=String(e);}
      }));
      setSaveResult({saved_count:savedKeys.size,failed_count:Object.keys(newErrors).length,in_progress:true});
    }
    setSaveErrors(prev=>({...prev,...newErrors}));
    setQuestions(prev=>{
      const remaining=prev.filter(q=>!savedKeys.has(q._manualId||String(q.number)));
      const failed=remaining.filter(q=>newErrors[q._manualId||String(q.number)]);
      const others=remaining.filter(q=>!newErrors[q._manualId||String(q.number)]);
      return[...failed,...others];
    });
    if(Object.keys(newErrors).length===0) clearRecovery(jobId);
    setSaveResult({saved_count:savedKeys.size,failed_count:Object.keys(newErrors).length});
    setSaving(false);
    setPage(1); // reset to page 1 after save reorders the list
  };

  // ── Pagination ───────────────────────────────────────────────────────────────
  const totalPages = useMemo(() => Math.max(1, Math.ceil(questions.length / REVIEW_PAGE_SIZE)), [questions]);
  const paginated  = useMemo(() => questions.slice((page-1)*REVIEW_PAGE_SIZE, page*REVIEW_PAGE_SIZE), [questions, page]);
  // Global index of first item on current page (for applyBelow + insertQuestion)
  const pageOffset = (page-1) * REVIEW_PAGE_SIZE;

  if(loading) return(
    <div style={{minHeight:"100vh",background:C.bg,display:"flex",alignItems:"center",justifyContent:"center"}}>
      <p style={{color:C.textMuted}}>Loading questions…</p>
    </div>
  );

  return(
    <div style={{background:C.bg,minHeight:"100vh",display:"flex",flexDirection:"column"}}>

      {/* Crash Recovery Banner */}
      {recoveryBanner&&(
        <div style={{
          background:"#1e3a5f",border:`1px solid ${C.blue}`,
          padding:"12px 24px",display:"flex",alignItems:"center",gap:14,flexWrap:"wrap",
        }}>
          <span style={{fontSize:20}}>🔄</span>
          <span style={{color:C.text,fontSize:13,flex:1}}>
            <strong style={{color:C.blueLight}}>Unsaved session found!</strong>{" "}
            Browser crash ya page reload se data bach gaya hai. Restore karein?
          </span>
          <button onClick={()=>{const saved=loadRecovery(jobId);if(saved) setQuestions(saved);setRecoveryBanner(false);}}
            style={{background:C.blue,color:"#fff",border:"none",borderRadius:6,padding:"7px 18px",fontSize:13,fontWeight:700,cursor:"pointer"}}>
            ✓ Restore Data
          </button>
          <button onClick={()=>{clearRecovery(jobId);setRecoveryBanner(false);}}
            style={{background:"transparent",color:C.textMuted,border:`1px solid ${C.border}`,borderRadius:6,padding:"7px 14px",fontSize:12,cursor:"pointer"}}>
            ✕ Discard
          </button>
        </div>
      )}

      {/* Sticky top bar */}
      <div style={{position:"sticky",top:0,zIndex:100,background:C.surface,borderBottom:`1px solid ${C.border}`,flexShrink:0}}>
        {missingGaps.length>0&&(
          <div style={{background:"#7c2d12",borderBottom:`2px solid ${C.amber}`,
                      padding:"10px 24px",display:"flex",alignItems:"center",gap:12,flexWrap:"wrap"}}>
            <span style={{fontSize:13,fontWeight:800,color:C.amber,whiteSpace:"nowrap"}}>
              ⚠ {missingGaps.length} QUESTION{missingGaps.length>1?"S":""} NOT PARSED:
            </span>
            <div style={{display:"flex",gap:6,flexWrap:"wrap",flex:1}}>
              {missingGaps.map(n=>(
                <span key={n} onClick={()=>scrollToGap(n)}
                  title={`Jump to where Q${n} should be`}
                  style={{padding:"2px 10px",borderRadius:5,fontSize:12,fontWeight:700,
                         background:C.amber,color:"#000",cursor:"pointer",userSelect:"none"}}
                  onMouseEnter={e=>e.currentTarget.style.opacity="0.75"}
                  onMouseLeave={e=>e.currentTarget.style.opacity="1"}>
                  Q{n}
                </span>
              ))}
            </div>
            <span style={{fontSize:11,color:"#fbbf24",whiteSpace:"nowrap"}}>
              Click a number to jump · Use ＋ to insert manually
            </span>
          </div>
        )}
        <div style={{padding:"12px 24px",display:"flex",alignItems:"center",gap:14}}>
          {onBack&&(
            <button onClick={onBack} style={{background:"none",border:`1px solid ${C.border}`,borderRadius:6,
              padding:"5px 12px",color:C.textMuted,cursor:"pointer",fontSize:12,fontWeight:600}}>← Edit Existing</button>
          )}
          <span style={{color:C.text,fontWeight:700,fontSize:16}}>
            {initialQuestions?"✏️ LaTeX Entry":"Question Paper Upload"}
          </span>
          <span style={{color:C.textMuted,fontSize:13}}>{questions.length} question{questions.length!==1?"s":""}</span>
          <span style={{color:C.green,fontSize:13}}>{readyCount} ready</span>
          {totalPages>1&&<span style={{fontSize:12,color:C.textDim}}>pg {page}/{totalPages}</span>}
          <span style={{fontSize:11,color:C.textDim}}>📚 {chapters.length} ch · 📄 {papers.length} papers</span>
          <span style={{flex:1}}/>
          {saveResult&&(
            <span style={{fontSize:12,padding:"4px 12px",borderRadius:6,
                         color:saveResult.in_progress?C.blue:saveResult.failed_count>0?C.amber:C.green,
                         background:saveResult.in_progress?C.blue+"22":saveResult.failed_count>0?C.amberBg:C.greenBg}}>
              {saveResult.in_progress&&`⏳ Saving… ${saveResult.saved_count} done`}
              {!saveResult.in_progress&&saveResult.saved_count>0&&`✓ Saved ${saveResult.saved_count}`}
              {!saveResult.in_progress&&saveResult.failed_count>0&&` · ❌ ${saveResult.failed_count} failed (shown at top)`}
            </span>
          )}
          <Btn color={C.green} disabled={saving||readyCount===0}
               onClick={()=>saveQuestions(questions.filter(isReady))}>
            {saving?"Saving…":`Bulk Save (${readyCount})`}
          </Btn>
        </div>
      </div>

      {/* Paginated cards — 10 per page, no virtualization, no ResizeObserver */}
      <div ref={topRef} style={{maxWidth:900, margin:"0 auto", padding:"24px 16px"}}>
        <div style={{display:"flex", flexDirection:"column"}}>
          <AddQuestionButton onClick={()=>insertQuestion(pageOffset - 1)}/>
          {paginated.map((q, i) => {
            const globalIdx = pageOffset + i;
            const qKey      = q._manualId || String(q.number);
            const errMsg    = saveErrors[qKey];
            return (
              <div key={q._manualId || q.number}>
                <QuestionCard
                  q={q} index={globalIdx} total={questions.length}
                  jobId={jobId} apiBase={apiBase} adminKey={adminKey}
                  saveError={errMsg}
                  onChange={(u) => updateQ(globalIdx, u)}
                  onSaveOne={(q) => saveQuestions([q])}
                  onApplyBelow={applyBelow}
                  onRemove={() => {
                    removeQuestion(globalIdx);
                    setSaveErrors(prev => { const n={...prev}; delete n[qKey]; return n; });
                  }}
                  chapters={chapters} topics={topics} papers={papers}
                />
                <AddQuestionButton onClick={() => insertQuestion(globalIdx)}/>
              </div>
            );
          })}
        </div>

        {/* Pagination controls */}
        {totalPages > 1 && (
          <div style={{display:"flex", justifyContent:"center", alignItems:"center", gap:8, marginTop:28, flexWrap:"wrap"}}>
            <button onClick={() => { setPage(1); topRef.current?.scrollIntoView({behavior:"smooth"}); }}
              disabled={page===1}
              style={{padding:"7px 12px", borderRadius:6, background:C.surface,
                     border:`1px solid ${C.border}`, color:page===1?C.textDim:C.text,
                     cursor:page===1?"not-allowed":"pointer", fontSize:12}}>⟨⟨ First</button>
            <button onClick={() => { setPage(p=>Math.max(1,p-1)); topRef.current?.scrollIntoView({behavior:"smooth"}); }}
              disabled={page===1}
              style={{padding:"7px 16px", borderRadius:6, background:C.surface,
                     border:`1px solid ${C.border}`, color:page===1?C.textDim:C.text,
                     cursor:page===1?"not-allowed":"pointer", fontSize:13}}>← Prev</button>

            {/* Page number pills */}
            {Array.from({length:totalPages}, (_,i)=>i+1)
              .filter(p => p===1 || p===totalPages || Math.abs(p-page)<=2)
              .reduce((acc, p, idx, arr) => {
                if(idx>0 && p-arr[idx-1]>1) acc.push('...');
                acc.push(p);
                return acc;
              }, [])
              .map((p, idx) => p==='...'
                ? <span key={`ellipsis-${idx}`} style={{color:C.textDim, padding:"0 4px"}}>…</span>
                : <button key={p} onClick={() => { setPage(p); topRef.current?.scrollIntoView({behavior:"smooth"}); }}
                    style={{
                      padding:"7px 13px", borderRadius:6, fontSize:13, fontWeight:p===page?700:400,
                      background:p===page?C.blue:C.surface,
                      border:`1px solid ${p===page?C.blue:C.border}`,
                      color:p===page?"#fff":C.text, cursor:"pointer",
                    }}>{p}</button>
              )}

            <button onClick={() => { setPage(p=>Math.min(totalPages,p+1)); topRef.current?.scrollIntoView({behavior:"smooth"}); }}
              disabled={page===totalPages}
              style={{padding:"7px 16px", borderRadius:6, background:C.surface,
                     border:`1px solid ${C.border}`, color:page===totalPages?C.textDim:C.text,
                     cursor:page===totalPages?"not-allowed":"pointer", fontSize:13}}>Next →</button>
            <button onClick={() => { setPage(totalPages); topRef.current?.scrollIntoView({behavior:"smooth"}); }}
              disabled={page===totalPages}
              style={{padding:"7px 12px", borderRadius:6, background:C.surface,
                     border:`1px solid ${C.border}`, color:page===totalPages?C.textDim:C.text,
                     cursor:page===totalPages?"not-allowed":"pointer", fontSize:12}}>Last ⟩⟩</button>

            <span style={{fontSize:12, color:C.textMuted, marginLeft:8}}>
              Page {page}/{totalPages} · Q{pageOffset+1}–{Math.min(pageOffset+REVIEW_PAGE_SIZE, questions.length)} of {questions.length}
            </span>
          </div>
        )}

        {/* Bottom bulk save */}
        {questions.length > 3 && (
          <div style={{textAlign:"center", marginTop:24}}>
            <Btn color={C.green} disabled={saving||readyCount===0}
                 onClick={()=>saveQuestions(questions.filter(isReady))}>
              {saving?"Saving…":`Bulk Save All Ready (${readyCount})`}
            </Btn>
          </div>
        )}
      </div>
    </div>
  );
}

// ─── Edit Existing Screen ─────────────────────────────────────────────────────
function FilterPill({label,active,onClick,color}){
  const ac=color||C.blue;
  return(
    <button onClick={onClick} style={{
      padding:"4px 11px",borderRadius:20,fontSize:11,fontWeight:600,
      cursor:"pointer",whiteSpace:"nowrap",
      border:`1px solid ${active?ac:C.border}`,
      background:active?ac+"22":C.surface,
      color:active?ac:C.textMuted,
      transition:"all .15s",
    }}>{label}</button>
  );
}

function ActiveChip({label,onClear}){
  return(
    <span style={{
      display:"inline-flex",alignItems:"center",gap:5,
      padding:"3px 10px",borderRadius:20,fontSize:11,fontWeight:600,
      background:C.blue+"22",color:C.blueLight,
      border:`1px solid ${C.blue}44`,
    }}>
      {label}
      <span onClick={onClear} style={{cursor:"pointer",color:C.textMuted,fontWeight:700,fontSize:12,lineHeight:1}}>×</span>
    </span>
  );
}

function EditExistingScreen({ apiBase, adminKey, onUploadNew }) {
  const PAGE_SIZE = 10;

  // ── Server-side filter state ────────────────────────────────────────────────
  const [filterSubj,  setFilterSubj]  = useState("");
  const [filterDate,  setFilterDate]  = useState("");
  const [filterShift, setFilterShift] = useState("");
  const [filterExam,  setFilterExam]  = useState("");
  const [filterChap,  setFilterChap]  = useState("");
  const [filterDiff,  setFilterDiff]  = useState("");
  const [filterType,  setFilterType]  = useState("");
  const [search,      setSearch]      = useState("");
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [page,        setPage]        = useState(1);

  // ── Data from server ────────────────────────────────────────────────────────
  const [questions,   setQuestions]   = useState([]);
  const [total,       setTotal]       = useState(0);
  const [loading,     setLoading]     = useState(false);
  const [chapters,    setChapters]    = useState([]);
  const [topics,      setTopics]      = useState([]);
  const [papers,      setPapers]      = useState([]);
  const [saving,      setSaving]      = useState(false);
  const [saveMsg,     setSaveMsg]     = useState(null);

  // Filter options derived from papers/chapters (not from loaded questions)
  const uniqueExams  = useMemo(()=>[...new Set(papers.map(p=>p.exam_name).filter(Boolean))].sort(),[papers]);
  const uniqueDates  = useMemo(()=>[...new Set(papers.map(p=>p.exam_date_str||p.exam_date).filter(Boolean))].sort((a,b)=>b.localeCompare(a)),[papers]);
  const uniqueShifts = useMemo(()=>[...new Set(papers.map(p=>p.shift).filter(Boolean))].sort(),[papers]);
  const uniqueChaps  = useMemo(()=>[...new Set(chapters.map(c=>c.name).filter(Boolean))].sort(),[chapters]);

  const fmtDate=(d)=>d?new Date(d+"T00:00:00").toLocaleDateString("en-IN",{day:"2-digit",month:"short",year:"numeric"}):d;
  const activeFilterCount=[filterDate,filterShift,filterExam,filterChap,filterDiff,filterType,filterSubj].filter(Boolean).length;
  const totalPages = Math.max(1, Math.ceil(total / PAGE_SIZE));
  const resetPage  = () => setPage(1);

  // ── Build query string from current filters ─────────────────────────────────
  const buildQS = useCallback((p) => {
    const qs = new URLSearchParams();
    qs.set("limit",  PAGE_SIZE);
    qs.set("offset", (p - 1) * PAGE_SIZE);
    if (filterSubj)  qs.set("subject",       filterSubj);
    if (filterDate)  qs.set("exam_date",      filterDate);
    if (filterShift) qs.set("shift",          filterShift);
    if (filterExam)  qs.set("exam_name",      filterExam);
    if (filterChap)  qs.set("chapter",        filterChap);
    if (filterDiff)  qs.set("difficulty",     filterDiff);
    if (filterType)  qs.set("question_type",  filterType);
    if (search)      qs.set("search",         search);
    return qs.toString();
  }, [filterSubj, filterDate, filterShift, filterExam, filterChap, filterDiff, filterType, search]);

  // ── Fetch questions from backend (server-side filter + pagination) ──────────
  const fetchQuestions = useCallback(async (p) => {
    setLoading(true);
    const h = {"x-admin-key": adminKey};
    try {
      const res = await fetch(`${apiBase}/api/admin/questions?${buildQS(p)}`, {headers: h});
      const data = await res.json();
      const qs = Array.isArray(data) ? data : (data.questions || data.items || []);
      setTotal(data.total || qs.length);
      setQuestions(applySSCSolutions(qs.map(q => ({
        ...q, _dbId: q.id, number: q.question_number ?? q.number ?? 0,
        q_images: q.q_images || [], sol_images: q.sol_images || [], opt_images: q.opt_images || {},
        options: q.options || [q.option_1 ?? "", q.option_2 ?? "", q.option_3 ?? "", q.option_4 ?? ""],
      }))));
    } catch(e) { console.error("Load error", e); }
    finally { setLoading(false); }
  }, [apiBase, adminKey, buildQS]);

  // ── Load filter option lists once on mount ──────────────────────────────────
  const loadMeta = useCallback(async () => {
    const h = {"x-admin-key": adminKey};
    const [cRes, tRes, pRes] = await Promise.all([
      fetch(`${apiBase}/api/admin/chapters`, {headers: h}).then(r=>r.json()).catch(()=>[]),
      fetch(`${apiBase}/api/admin/topics`,   {headers: h}).then(r=>r.json()).catch(()=>[]),
      fetch(`${apiBase}/api/admin/papers`,   {headers: h}).then(r=>r.json()).catch(()=>[]),
    ]);
    setChapters(Array.isArray(cRes) ? cRes : []);
    setTopics(Array.isArray(tRes) ? tRes : []);
    setPapers(Array.isArray(pRes) ? pRes : []);
  }, [apiBase, adminKey]);

  useEffect(() => { loadMeta(); }, [loadMeta]);

  // Re-fetch when filters change (reset to page 1)
  useEffect(() => { setPage(1); fetchQuestions(1); },
    [filterSubj, filterDate, filterShift, filterExam, filterChap, filterDiff, filterType, search]);

  // Re-fetch when page changes
  useEffect(() => { fetchQuestions(page); }, [page]);

  const updateQ = useCallback((i, u) => setQuestions(p => { const n=[...p]; n[i]=u; return n; }), []);

  // ── Manually added questions (no server fetch needed, lives in local state) ──
  const [manualQuestions, setManualQuestions] = useState([]);

  const insertManualQuestion = useCallback(() => {
    const blank = createBlankQuestion(0, manualQuestions);
    setManualQuestions(prev => [blank, ...prev]);
  }, [manualQuestions]);

  const removeManualQuestion = useCallback((manualId) => {
    setManualQuestions(prev => prev.filter(q => q._manualId !== manualId));
  }, []);

  const updateManualQ = useCallback((manualId, u) => {
    setManualQuestions(prev => prev.map(q => q._manualId === manualId ? u : q));
  }, []);

  const saveOne = async (q) => {
    setSaving(true); setSaveMsg(null);
    try {
      const payload = {
        question_number: q.number, q_type: q.q_type,
        subject: q.subject, subject_name: q.subject,
        exam_name: q.exam_name,
        exam_date: q.exam_date || null,
        year: q.exam_date ? parseInt(q.exam_date.slice(0,4)) : (q.year ? parseInt(q.year) : null),
        shift: q.shift, chapter_name: q.chapter_name, topic_name: q.topic_name,
        difficulty: q.difficulty, marks_correct: q.marks_correct, marks_wrong: q.marks_wrong,
        question: q.question, options: q.options, answer: q.answer, solution: q.solution,
      };

      let res;
      if (q._dbId) {
        // ── Existing question: update in place ─────────────────────────────
        res = await fetch(`${apiBase}/api/admin/update-question/${q._dbId}`, {
          method: "PUT",
          headers: {"Content-Type":"application/json","x-admin-key":adminKey},
          body: JSON.stringify(payload),
        });
      } else {
        // ── New manually added question: create in DB (no job_id needed) ───
        res = await fetch(`${apiBase}/api/admin/create-question`, {
          method: "POST",
          headers: {"Content-Type":"application/json","x-admin-key":adminKey},
          body: JSON.stringify(payload),
        });
        if (res.ok) {
          const data = await res.json();
          // Stamp the new DB id so subsequent saves use update-question
          setQuestions(prev => prev.map(pq =>
            (pq._isManual && pq.number === q.number && !pq._dbId)
              ? { ...pq, _dbId: data.id }
              : pq
          ));
        }
      }

      if (!res.ok) { const b = await res.json().catch(()=>({})); throw new Error(b.detail||res.statusText); }
      setSaveMsg({ok:true, msg:`Q${q.number||"+"} saved ✓`});
    } catch(e) { setSaveMsg({ok:false, msg:String(e)}); }
    finally { setSaving(false); setTimeout(()=>setSaveMsg(null), 3000); }
  };

  const applyBelow = useCallback((fromIndex, field, value) => {
    setQuestions(prev => prev.map((q, i) => {
      if (i <= fromIndex) return q;
      if (field === "exam_date") return {...q, exam_date:value, year:value.slice(0,4)};
      return {...q, [field]:value};
    }));
  }, []);

  const clearAll = () => {
    setFilterSubj(""); setFilterDate(""); setFilterShift("");
    setFilterExam(""); setFilterChap(""); setFilterDiff("");
    setFilterType(""); setSearch(""); resetPage();
  };

  return (
    <div style={{background:C.bg, minHeight:"100vh"}}>
      {/* Sticky top bar */}
      <div style={{position:"sticky",top:0,zIndex:100,background:C.surface,borderBottom:`1px solid ${C.border}`}}>
        <div style={{padding:"10px 24px",display:"flex",alignItems:"center",gap:12,flexWrap:"wrap"}}>
          <span style={{color:C.text,fontWeight:700,fontSize:15}}>📚 Edit Existing Questions</span>
          <span style={{color:C.textMuted,fontSize:12}}>
            <strong style={{color:C.blueLight}}>{total.toLocaleString()}</strong> total
            {activeFilterCount > 0 && <span style={{color:C.textDim}}> (filtered)</span>}
          </span>
          {activeFilterCount > 0 && (
            <span style={{fontSize:11,padding:"2px 8px",borderRadius:10,
                         background:C.blue+"33",color:C.blueLight,fontWeight:700}}>
              {activeFilterCount} filter{activeFilterCount>1?"s":""} active
            </span>
          )}
          <input value={search} onChange={e=>{setSearch(e.target.value);resetPage();}}
            placeholder="🔍 Search question text or number…"
            style={{flex:1,minWidth:200,maxWidth:340,background:C.bg,color:C.text,
                   border:`1px solid ${C.border}`,borderRadius:6,padding:"6px 10px",
                   fontSize:13,outline:"none"}}/>
          <span style={{flex:1}}/>
          {saveMsg && (
            <span style={{fontSize:12,padding:"4px 12px",borderRadius:6,
                         color:saveMsg.ok?C.green:C.red,
                         background:saveMsg.ok?C.greenBg:C.redBg}}>
              {saveMsg.msg}
            </span>
          )}
          <button onClick={()=>setFiltersOpen(o=>!o)} style={{
            padding:"6px 14px",borderRadius:6,fontSize:12,fontWeight:600,cursor:"pointer",
            border:`1px solid ${filtersOpen||activeFilterCount>0?C.blue:C.border}`,
            background:filtersOpen||activeFilterCount>0?C.blue+"22":C.surface,
            color:filtersOpen||activeFilterCount>0?C.blueLight:C.textMuted,
          }}>
            ⚙ Filters {activeFilterCount>0?`(${activeFilterCount})`:""} {filtersOpen?"▲":"▼"}
          </button>
          {activeFilterCount > 0 && (
            <button onClick={clearAll} style={{
              padding:"6px 12px",borderRadius:6,fontSize:12,fontWeight:600,cursor:"pointer",
              border:`1px solid ${C.red}44`,background:C.redBg,color:C.red,
            }}>✕ Clear all</button>
          )}
          <Btn color={C.blue} small onClick={()=>fetchQuestions(page)}>↺ Refresh</Btn>
          <Btn color={C.green} onClick={onUploadNew}>＋ Upload New Paper</Btn>
        </div>

        {filtersOpen && (
          <div style={{padding:"10px 24px 14px",borderTop:`1px solid ${C.border}`,
                      background:C.bg,display:"flex",flexDirection:"column",gap:10}}>
            <div style={{display:"flex",alignItems:"center",gap:8,flexWrap:"wrap"}}>
              <span style={{fontSize:11,color:C.textDim,fontWeight:700,width:64,flexShrink:0}}>SUBJECT</span>
              {["PHYSICS","CHEMISTRY","MATHEMATICS","BIOLOGY"].map(s=>(
                <FilterPill key={s} label={s[0]+s.slice(1).toLowerCase()} active={filterSubj===s} color={C.blue}
                  onClick={()=>{setFilterSubj(v=>v===s?"":s);resetPage();}}/>
              ))}
            </div>
            {uniqueExams.length > 0 && (
              <div style={{display:"flex",alignItems:"center",gap:8,flexWrap:"wrap"}}>
                <span style={{fontSize:11,color:C.textDim,fontWeight:700,width:64,flexShrink:0}}>EXAM</span>
                {uniqueExams.map(e=>(
                  <FilterPill key={e} label={e} active={filterExam===e} color={C.purple}
                    onClick={()=>{setFilterExam(v=>v===e?"":e);resetPage();}}/>
                ))}
              </div>
            )}
            {uniqueDates.length > 0 && (
              <div style={{display:"flex",alignItems:"center",gap:8,flexWrap:"wrap"}}>
                <span style={{fontSize:11,color:C.textDim,fontWeight:700,width:64,flexShrink:0}}>DATE</span>
                <div style={{display:"flex",gap:6,flexWrap:"wrap",flex:1}}>
                  {uniqueDates.map(d=>(
                    <FilterPill key={d} label={fmtDate(d)} active={filterDate===d} color={C.blueLight}
                      onClick={()=>{setFilterDate(v=>v===d?"":d);resetPage();}}/>
                  ))}
                </div>
                <input type="date" value={filterDate}
                  onChange={e=>{setFilterDate(e.target.value);resetPage();}}
                  style={{background:C.surface,color:C.text,border:`1px solid ${filterDate?C.blueLight:C.border}`,
                         borderRadius:6,padding:"4px 8px",fontSize:12,outline:"none"}}/>
              </div>
            )}
            {uniqueShifts.length > 0 && (
              <div style={{display:"flex",alignItems:"center",gap:8,flexWrap:"wrap"}}>
                <span style={{fontSize:11,color:C.textDim,fontWeight:700,width:64,flexShrink:0}}>SHIFT</span>
                {uniqueShifts.map(s=>(
                  <FilterPill key={s} label={s} active={filterShift===s} color={C.amber}
                    onClick={()=>{setFilterShift(v=>v===s?"":s);resetPage();}}/>
                ))}
              </div>
            )}
            {uniqueChaps.length > 0 && (
              <div style={{display:"flex",alignItems:"center",gap:8,flexWrap:"wrap"}}>
                <span style={{fontSize:11,color:C.textDim,fontWeight:700,width:64,flexShrink:0}}>CHAPTER</span>
                <div style={{display:"flex",gap:6,flexWrap:"wrap",flex:1}}>
                  {uniqueChaps.map(c=>(
                    <FilterPill key={c} label={c} active={filterChap===c} color={C.purple}
                      onClick={()=>{setFilterChap(v=>v===c?"":c);resetPage();}}/>
                  ))}
                </div>
              </div>
            )}
            <div style={{display:"flex",gap:24,flexWrap:"wrap"}}>
              <div style={{display:"flex",alignItems:"center",gap:8}}>
                <span style={{fontSize:11,color:C.textDim,fontWeight:700,width:64,flexShrink:0}}>DIFF</span>
                {["easy","medium","hard"].map(d=>(
                  <FilterPill key={d} label={d[0].toUpperCase()+d.slice(1)} active={filterDiff===d}
                    color={d==="easy"?C.green:d==="hard"?C.red:C.amber}
                    onClick={()=>{setFilterDiff(v=>v===d?"":d);resetPage();}}/>
                ))}
              </div>
              <div style={{display:"flex",alignItems:"center",gap:8}}>
                <span style={{fontSize:11,color:C.textDim,fontWeight:700,width:64,flexShrink:0}}>TYPE</span>
                {["MCQ","MSQ","NUMERICAL"].map(t=>(
                  <FilterPill key={t} label={t} active={filterType===t} color={C.blueLight}
                    onClick={()=>{setFilterType(v=>v===t?"":t);resetPage();}}/>
                ))}
              </div>
            </div>
          </div>
        )}

        {!filtersOpen && activeFilterCount > 0 && (
          <div style={{padding:"6px 24px 8px",display:"flex",gap:6,flexWrap:"wrap",borderTop:`1px solid ${C.border}`}}>
            {filterSubj  && <ActiveChip label={`Subject: ${filterSubj[0]+filterSubj.slice(1).toLowerCase()}`} onClear={()=>{setFilterSubj("");resetPage();}}/>}
            {filterExam  && <ActiveChip label={`Exam: ${filterExam}`}          onClear={()=>{setFilterExam("");resetPage();}}/>}
            {filterDate  && <ActiveChip label={`Date: ${fmtDate(filterDate)}`} onClear={()=>{setFilterDate("");resetPage();}}/>}
            {filterShift && <ActiveChip label={`Shift: ${filterShift}`}        onClear={()=>{setFilterShift("");resetPage();}}/>}
            {filterChap  && <ActiveChip label={`Chapter: ${filterChap}`}       onClear={()=>{setFilterChap("");resetPage();}}/>}
            {filterDiff  && <ActiveChip label={`Diff: ${filterDiff}`}          onClear={()=>{setFilterDiff("");resetPage();}}/>}
            {filterType  && <ActiveChip label={`Type: ${filterType}`}          onClear={()=>{setFilterType("");resetPage();}}/>}
          </div>
        )}
      </div>

      <div style={{maxWidth:1100,margin:"0 auto",padding:"24px 16px"}}>
        {loading ? (
          <div style={{textAlign:"center",color:C.textMuted,padding:60}}>Loading questions…</div>
        ) : (
          <>
            {/* ── Manually added questions (always shown at top, no pagination) ── */}
            {manualQuestions.length > 0 && (
              <div style={{marginBottom:24}}>
                <div style={{fontSize:11,fontWeight:700,color:C.purple,letterSpacing:1,
                            textTransform:"uppercase",marginBottom:10,padding:"6px 12px",
                            background:C.purpleBg,borderRadius:6,display:"inline-block"}}>
                  ＋ New Questions (unsaved)
                </div>
                <div style={{display:"flex",flexDirection:"column",gap:16}}>
                  {manualQuestions.map((q, i) => (
                    <QuestionCard key={q._manualId}
                      q={q} index={i} total={manualQuestions.length}
                      jobId={null} apiBase={apiBase} adminKey={adminKey}
                      onChange={(u) => updateManualQ(q._manualId, u)}
                      onSaveOne={saveOne}
                      onApplyBelow={(field, value) => {
                        // Apply to all manual questions below this one
                        setManualQuestions(prev => prev.map((pq, pi) => {
                          if (pi <= i) return pq;
                          if (field === "exam_date") return {...pq, exam_date:value, year:value.slice(0,4)};
                          return {...pq, [field]:value};
                        }));
                      }}
                      onRemove={() => removeManualQuestion(q._manualId)}
                      chapters={chapters} topics={topics} papers={papers}/>
                  ))}
                </div>
              </div>
            )}

            {/* ── Add Question button ── */}
            <div style={{marginBottom:20}}>
              <AddQuestionButton onClick={insertManualQuestion}/>
            </div>

            {/* ── Server-fetched questions ── */}
            {questions.length === 0 ? (
              <div style={{textAlign:"center",color:C.textMuted,padding:60}}>
                {activeFilterCount > 0 || search
                  ? <><span>No questions match the current filters. </span><button onClick={clearAll} style={{color:C.blue,background:"none",border:"none",cursor:"pointer",fontSize:14,fontWeight:600}}>Clear filters →</button></>
                  : <><span>No questions found. </span><button onClick={onUploadNew} style={{color:C.blue,background:"none",border:"none",cursor:"pointer",fontSize:14,fontWeight:600}}>Upload a paper →</button></>}
              </div>
            ) : (
            <>
              <div style={{display:"flex",flexDirection:"column",gap:16}}>
                {questions.map((q, i) => {
                  const globalIdx = (page - 1) * PAGE_SIZE + i;
                  return (
                    <QuestionCard key={q._dbId || q.number}
                      q={q} index={i} total={questions.length}
                      jobId={null} apiBase={apiBase} adminKey={adminKey}
                      onChange={(u) => updateQ(i, u)}
                      onSaveOne={saveOne}
                      onApplyBelow={(field, value) => applyBelow(i, field, value)}
                      onRemove={()=>{}}
                      chapters={chapters} topics={topics} papers={papers}/>
                  );
                })}
              </div>
              {totalPages > 1 && (
                <div style={{display:"flex",justifyContent:"center",alignItems:"center",gap:8,marginTop:28}}>
                  <button onClick={()=>setPage(p=>Math.max(1,p-1))} disabled={page===1}
                    style={{padding:"7px 16px",borderRadius:6,background:C.surface,
                           border:`1px solid ${C.border}`,color:page===1?C.textDim:C.text,
                           cursor:page===1?"not-allowed":"pointer",fontSize:13}}>← Prev</button>
                  <span style={{padding:"7px 14px",color:C.textMuted,fontSize:13}}>
                    Page <strong style={{color:C.text}}>{page}</strong> / <strong style={{color:C.text}}>{totalPages}</strong>
                  </span>
                  <button onClick={()=>setPage(p=>Math.min(totalPages,p+1))} disabled={page===totalPages}
                    style={{padding:"7px 16px",borderRadius:6,background:C.surface,
                           border:`1px solid ${C.border}`,color:page===totalPages?C.textDim:C.text,
                           cursor:page===totalPages?"not-allowed":"pointer",fontSize:13}}>Next →</button>
                </div>
              )}
            </>
            )}
          </>
        )}
      </div>
    </div>
  );
}

// ─── Root ─────────────────────────────────────────────────────────────────────
export default function AdminReview({ apiBase="http://localhost:8000", adminKey="" }) {
  const [screen,    setScreen]    = useState(()=>{
    const saved=localStorage.getItem("examside_screen");
    return saved==="review"?"review":"edit";
  });
  const [jobId,     setJobId]     = useState(()=>localStorage.getItem("examside_jobid")||null);
  const [openaiKey, setOpenaiKey] = useState(()=>localStorage.getItem("examside_openai_key")||"");
  const [latexJobId]              = useState(()=>`latex_${Date.now()}`);

  const goScreen=(s,jid)=>{
    setScreen(s);
    if(jid!==undefined){
      setJobId(jid);
      if(jid) localStorage.setItem("examside_jobid",jid);
      else    localStorage.removeItem("examside_jobid");
    }
    if(s==="review") localStorage.setItem("examside_screen","review");
    else             localStorage.removeItem("examside_screen");
  };

  const saveOpenaiKey=(k)=>{
    setOpenaiKey(k);
    if(k) localStorage.setItem("examside_openai_key",k);
    else  localStorage.removeItem("examside_openai_key");
  };

  const handleLatexMode=()=>{
    setJobId(latexJobId);
    setScreen("latex");
    localStorage.removeItem("examside_screen");
  };

  return(
    <MathJaxContext config={MATHJAX_CONFIG}>
      <div style={{fontFamily:"'Inter', system-ui, sans-serif"}}>
        {screen==="edit"      &&<EditExistingScreen apiBase={apiBase} adminKey={adminKey} onUploadNew={()=>goScreen("upload")}/>}
        {screen==="upload"    &&<UploadScreen       apiBase={apiBase} adminKey={adminKey}
                                  openaiKey={openaiKey} onOpenaiKeyChange={saveOpenaiKey}
                                  onJobCreated={(id)=>goScreen("processing",id)}
                                  onLatexMode={handleLatexMode}
                                  onOpenImageManager={()=>goScreen("images")}
                                  onBack={()=>goScreen("edit")}/>}
        {screen==="processing"&&<ProcessingScreen   jobId={jobId} apiBase={apiBase} adminKey={adminKey}
                                  onReady={()=>goScreen("review")}/>}
        {screen==="review"    &&<ReviewScreen       jobId={jobId} apiBase={apiBase} adminKey={adminKey}
                                  onBack={()=>goScreen("edit")}/>}
        {screen==="latex"     &&<ReviewScreen       jobId={latexJobId} apiBase={apiBase} adminKey={adminKey}
                                  onBack={()=>goScreen("upload")}
                                  initialQuestions={[createBlankQuestion(0,[])]}/>}
        {screen==="images"    &&<ImageUploadScreen  apiBase={apiBase} adminKey={adminKey}
                                  onBack={()=>goScreen("upload")}/>}
      </div>
    </MathJaxContext>
  );
}
