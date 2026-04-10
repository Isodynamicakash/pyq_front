/**
 * QuestionBrowser.jsx — ExamsCalendar.PYQ Student Question Browser
 * - 10 questions per page with Prev/Next pagination
 * - Chapter + Topic both shown in meta strip
 * - Exam date + Shift shown prominently
 * - Sticky left sidebar throughout scroll
 * - Mobile: bottom sheet filters
 */

import { useState, useEffect, useCallback } from "react";
import { MathJaxContext, MathJax } from "better-react-mathjax";

const MATHJAX_CONFIG = {
  loader: { load: ["input/tex", "output/chtml"] },
  tex: {
    inlineMath: [["$", "$"]],
    displayMath: [["$$", "$$"]],
    packages: { "[+]": ["ams", "array"] },
  },
};

const API     = import.meta.env.VITE_API_URL      || "http://localhost:8000";
const R2_BASE = import.meta.env.VITE_R2_PUBLIC_URL || "https://pub-e99a99db6bcb44eeb1b2e6db8f4cd626.r2.dev";
const PAGE_SIZE = 10;
const NAV_H = 54; // navbar height px

// ── Themes ──────────────────────────────────────────────────────────────────
const DARK = {
  bg:"#0f1117", bgCard:"#16191f", surface:"#1c2029", surfaceHigh:"#222736",
  border:"#2a2f3e", borderLight:"#353b4f",
  accent:"#5b6ef5", accentLight:"#7c8dff", accentBg:"#1a1d3a",
  green:"#22c55e", greenBg:"#0d2818", greenText:"#4ade80",
  red:"#ef4444",   redBg:"#2d0f0f",   redText:"#f87171",
  amber:"#f59e0b", amberBg:"#2d1f00", amberText:"#fbbf24",
  blue:"#3b82f6",  blueBg:"#0f1f3d",  blueText:"#60a5fa",
  purple:"#a855f7",purpleBg:"#1e0f38",purpleText:"#c084fc",
  orange:"#f97316",orangeBg:"#2d1500",orangeText:"#fb923c",
  text:"#e2e8f0", textMuted:"#8892a4", textDim:"#4a5268",
  nav:"#0a0d14", isDark:true,
  shadow:"0 4px 24px rgba(0,0,0,0.5)",
};
const LIGHT = {
  bg:"#f0f2f8", bgCard:"#ffffff", surface:"#f8f9fc", surfaceHigh:"#eef0f7",
  border:"#dde1ef", borderLight:"#c8cde0",
  accent:"#4f5fd4", accentLight:"#4f5fd4", accentBg:"#eef0ff",
  green:"#16a34a", greenBg:"#dcfce7", greenText:"#15803d",
  red:"#dc2626",   redBg:"#fee2e2",   redText:"#b91c1c",
  amber:"#d97706", amberBg:"#fef3c7", amberText:"#b45309",
  blue:"#2563eb",  blueBg:"#dbeafe",  blueText:"#1d4ed8",
  purple:"#9333ea",purpleBg:"#f3e8ff",purpleText:"#7e22ce",
  orange:"#ea580c",orangeBg:"#ffedd5",orangeText:"#c2410c",
  text:"#1e2235", textMuted:"#5a6278", textDim:"#9ba3b8",
  nav:"#ffffff", isDark:false,
  shadow:"0 2px 12px rgba(0,0,0,0.08)",
};

const SUBJ_PALETTES = [
  {d:"#1a1d3a",dt:"#7c8dff",l:"#eef0ff",lt:"#4f5fd4"},
  {d:"#0d2818",dt:"#4ade80",l:"#dcfce7",lt:"#16a34a"},
  {d:"#2d1500",dt:"#fb923c",l:"#ffedd5",lt:"#ea580c"},
  {d:"#1e0f38",dt:"#c084fc",l:"#f3e8ff",lt:"#9333ea"},
  {d:"#0f1f3d",dt:"#60a5fa",l:"#dbeafe",lt:"#2563eb"},
];
function subjColor(name, isDark) {
  const i = Math.abs([...name].reduce((a,c)=>a+c.charCodeAt(0),0)) % SUBJ_PALETTES.length;
  const p = SUBJ_PALETTES[i];
  return isDark ? {bg:p.d,text:p.dt} : {bg:p.l,text:p.lt};
}

// ── Math ─────────────────────────────────────────────────────────────────────
function resolveImg(f) {
  if (!f) return "";
  if (f.startsWith("http")) return f;
  return `${R2_BASE}/${f}`;
}
function renderMath(text) {
  if (!text) return null;
  let t = text;
  if (t.includes("\\begin{tabular}")) {
    t = t.replace(/\\begin\{tabular\}\{([^}]*)\}([\s\S]*?)\\end\{tabular\}/g, (_, fmt, body) => {
      const parts = body.split("\\hline"), rows = [];
      parts.forEach(part => {
        const seg = part.split("\n").map(l=>l.trim()).filter(Boolean).join(" ").replace(/\\\\$/,"").trim();
        rows.push("\\hline");
        if (seg) rows.push(seg.split("&").map(c => {
          const s = c.replace(/\\multicolumn\{\d+\}\{[^}]*\}\{([^}]*)\}/g,"$1").trim();
          const m = s.match(/^\$([\s\S]+)\$$/);
          if (m) return m[1];
          if (!s||s.startsWith("\\")||/^-?[\d.]+$/.test(s)) return s;
          return `\\text{${s}}`;
        }).join(" & ")+" \\\\");
      });
      return `$$\\begin{array}{${fmt}}\n${rows.join("\n")}\n\\end{array}$$`;
    });
  }
  if (t.includes("\\begin{gathered}")) {
    t = t.replace(/\\begin\{gathered\}/g,"\\begin{aligned}");
    t = t.replace(/\\end\{gathered\}/g,"\\end{aligned}");
    t = t.replace(/\\begin\{aligned\}([\s\S]*?)\\end\{aligned\}/g,(_,inner)=>{
      const lines = inner.split("\n").map(l=>l.trim()).filter(Boolean);
      return "\\begin{aligned}"+lines.join(" \\\\ ")+"\\end{aligned}";
    });
  }
  return t;
}
function splitSolutionLines(text) {
  if (!text) return [text];
  if (text.includes("\\begin{aligned}")) {
    const result=[], re=/\$\$[^$]*?\\begin\{aligned\}([\s\S]*?)\\end\{aligned\}[^$]*?\$\$/g;
    let lastIdx=0, m;
    while ((m=re.exec(text))!==null) {
      const before=text.slice(lastIdx,m.index).trim();
      if (before) before.split("\n").map(l=>l.trim()).filter(Boolean).forEach(l=>result.push(l));
      m[1].split("&").map(s=>s.replace(/\\\\/g,"").trim()).filter(s=>s.length>1).forEach(s=>result.push("$"+s+"$"));
      lastIdx=m.index+m[0].length;
    }
    const after=text.slice(lastIdx).trim();
    if (after) after.split("\n").map(l=>l.trim()).filter(Boolean).forEach(l=>result.push(l));
    return result.filter(Boolean);
  }
  return text.split("\n").map(l=>l.trim()).filter(Boolean);
}
function MathContent({ text, block=false, style={} }) {
  if (!text) return null;
  const processed = renderMath(text);
  const renderPart = (part,i) => {
    const m = part.match(/\[IMAGE:([^\]]+)\]/);
    if (m) return <img key={i} src={resolveImg(m[1])} alt="diagram"
      style={{
        width:"auto", height:"auto",
        maxWidth:"min(100%, 360px)",
        maxHeight:200,
        display:"block", margin:"10px auto",
        borderRadius:8, objectFit:"contain",
      }}
      onError={e=>{e.target.style.display="none";}}/>; 
    return part ? <MathJax key={i} inline dynamic>{part}</MathJax> : null;
  };
  if (block) {
    const lines = splitSolutionLines(processed);
    if (lines.length>1) return (
      <div style={{lineHeight:1.9,...style}}>
        {lines.map((line,li)=><div key={li} style={{marginBottom:6}}>
          {line.split(/(\[IMAGE:[^\]]+\])/).map(renderPart)}
        </div>)}
      </div>
    );
  }
  return <span style={{lineHeight:1.85,...style}}>
    {processed.split(/(\[IMAGE:[^\]]+\])/).map(renderPart)}
  </span>;
}

// ── Sidebar components ────────────────────────────────────────────────────────
function FilterSection({ title, children, C, defaultOpen=true }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div style={{borderBottom:`1px solid ${C.border}`}}>
      <button onClick={()=>setOpen(o=>!o)} style={{
        width:"100%", display:"flex", alignItems:"center", justifyContent:"space-between",
        padding:"10px 14px", background:"none", border:"none",
        color:C.text, cursor:"pointer", fontSize:12, fontWeight:700,
        letterSpacing:.8, textTransform:"uppercase",
      }}>
        {title}
        <span style={{fontSize:9,display:"inline-block",transform:open?"rotate(180deg)":"none",transition:"transform .18s",color:C.textDim}}>▾</span>
      </button>
      {open && <div style={{padding:"0 12px 10px"}}>{children}</div>}
    </div>
  );
}

function SItem({ label, active, onClick, accent, C }) {
  return (
    <button onClick={onClick} style={{
      width:"100%", textAlign:"left",
      padding:"7px 10px", marginBottom:3,
      background: active ? (accent||C.accent)+"18" : "transparent",
      border:`1px solid ${active ? (accent||C.accent)+"55" : "transparent"}`,
      borderLeft: active ? `3px solid ${accent||C.accent}` : "3px solid transparent",
      borderRadius:8,
      color: active ? (accent||C.accent) : C.textMuted,
      fontSize:13, fontWeight: active ? 700 : 400,
      cursor:"pointer", lineHeight:1.4,
    }}>{label}</button>
  );
}

function ChipGroup({ items, active, onToggle, colorFn, C }) {
  const activeArr = Array.isArray(active) ? active.map(x=>String(x)) : (active ? [String(active)] : []);
  return (
    <div style={{display:"flex",flexWrap:"wrap",gap:6}}>
      {items.map(item => {
        const val   = typeof item==="object" ? item.value : item;
        const label = typeof item==="object" ? item.label : item;
        const on    = activeArr.includes(String(val));
        const col   = colorFn ? colorFn(val) : C.accent;
        return (
          <button key={val} onClick={()=>onToggle(val)} style={{
            padding:"6px 14px", borderRadius:20, fontSize:12, fontWeight:700,
            border:`1.5px solid ${on ? col : C.border}`,
            background: on ? col+"22" : C.surface,
            color: on ? col : C.textMuted,
            cursor:"pointer", minHeight:34,
            WebkitTapHighlightColor:"transparent",
            transition:"all .12s",
            boxShadow: on ? `0 0 0 1px ${col}44` : "none",
          }}>{label}</button>
        );
      })}
    </div>
  );
}

// ── Sidebar (always visible on desktop, bottom-sheet on mobile) ───────────────
function Sidebar({ filters, active, onChange, C, isMobile, open, onClose }) {
  const { subjects=[], chapters=[], topics=[], years=[], shifts=[], question_types=[], dates=[] } = filters;
  const toggle = (k, v) => {
    const arr = active[k] || [];
    const strArr = arr.map(x=>String(x));
    const next = strArr.includes(String(v)) ? arr.filter(x=>String(x)!==String(v)) : [...arr, v];
    if (k==="subject") return onChange({...active, subject:next, chapter:[], topic:[], exam_date:[]});
    if (k==="chapter") return onChange({...active, chapter:next, topic:[]});
    onChange({...active, [k]: next});
  };

  const visibleChapters = (active.subject||[]).length>0
    ? chapters.filter(c=>(active.subject||[]).map(s=>s.toLowerCase()).includes(c.subject_name?.toLowerCase()||''))
    : chapters;
  const visibleTopics = (active.chapter||[]).length>0
    ? topics.filter(t=>(active.chapter||[]).map(c=>c.toLowerCase()).includes(t.chapter_name?.toLowerCase()||''))
    : [];

  const diffColor = v=>({easy:C.green,medium:C.amber,hard:C.red}[v]||C.accent);
  const typeColor = v=>({MCQ:C.blue,MSQ:C.purple,NUMERICAL:C.orange}[v]||C.accent);
  const activeCount = Object.values(active).reduce((n,a)=>n+(Array.isArray(a)?a.length:(a?1:0)),0);

  const content = (
    <div style={{display:"flex",flexDirection:"column",flex:1,minHeight:0}}>
      {/* Header */}
      <div style={{
        display:"flex", alignItems:"center", justifyContent:"space-between",
        padding:"12px 14px 10px",
        borderBottom:`1px solid ${C.border}`,
        flexShrink:0,
      }}>
        <span style={{fontSize:14,fontWeight:800,color:C.text,display:"flex",alignItems:"center",gap:6}}>
          <svg width="13" height="13" viewBox="0 0 16 16" fill="currentColor"><path d="M1.5 3h13l-5 6v4.5l-3-1.5V9L1.5 3z"/></svg>
          Filters
          {activeCount>0 && (
            <span style={{background:C.accent,color:"#fff",borderRadius:20,padding:"0px 7px",fontSize:10,fontWeight:800}}>{activeCount}</span>
          )}
        </span>
        <div style={{display:"flex",gap:6}}>
          {activeCount>0 && (
            <button onClick={()=>onChange({subject:[],chapter:[],topic:[],year:[],shift:[],difficulty:[],question_type:[],exam_date:[]})} style={{
              fontSize:11,color:C.red,background:C.redBg,
              border:`1px solid ${C.red}33`,borderRadius:20,
              padding:"3px 10px",cursor:"pointer",fontWeight:700,
            }}>Clear</button>
          )}
          {isMobile && (
            <button onClick={onClose} style={{
              fontSize:11,color:C.accent,background:C.accentBg,
              border:`1px solid ${C.accent}33`,borderRadius:20,
              padding:"3px 12px",cursor:"pointer",fontWeight:700,
            }}>Done</button>
          )}
        </div>
      </div>

      {/* Scrollable filter sections */}
      <div style={{overflowY:"auto",flex:1,minHeight:0,scrollbarWidth:"thin"}}>
        <FilterSection title="Subject" C={C}>
          {subjects.map(s=>{
            const sc=subjColor(s.name,C.isDark);
            return <SItem key={s.slug} label={s.name}
              active={(active.subject||[]).includes(s.name)} accent={sc.text}
              onClick={()=>toggle('subject',s.name)}
              C={C}/>;
          })}
        </FilterSection>

        <FilterSection title="Chapter" C={C} defaultOpen={!!active.subject}>
          {visibleChapters.length===0
            ? <p style={{fontSize:12,color:C.textDim,margin:0}}>Select a subject first</p>
            : <div style={{maxHeight:160,overflowY:"auto",scrollbarWidth:"thin",scrollbarColor:`${C.border} transparent`}}>
                {visibleChapters.map(c=>(
                  <SItem key={c.slug} label={c.name}
                    active={(active.chapter||[]).includes(c.name)}
                    onClick={()=>toggle('chapter',c.name)}
                    C={C}/>
                ))}
              </div>
          }
        </FilterSection>

        {(active.chapter||[]).length>0 && visibleTopics.length>0 && (
          <FilterSection title="Topic" C={C} defaultOpen>
            <div style={{maxHeight:140,overflowY:"auto",scrollbarWidth:"thin",scrollbarColor:`${C.border} transparent`}}>
              {visibleTopics.map(t=>(
                <SItem key={t.slug} label={t.name}
                  active={(active.topic||[]).includes(t.name)}
                  onClick={()=>toggle('topic',t.name)}
                  C={C}/>
              ))}
            </div>
          </FilterSection>
        )}

        <FilterSection title="Year" C={C}>
          <ChipGroup items={years.map(y=>({value:y,label:String(y)}))}
            active={active.year||[]} onToggle={v=>toggle('year',v)} C={C}/>
        </FilterSection>

        {dates.length>0 && (
          <FilterSection title="Exam Date" C={C} defaultOpen={false}>
            <div style={{maxHeight:180,overflowY:"auto",scrollbarWidth:"thin"}}>
              <ChipGroup
                items={dates.map(d=>{
                  const label = d.exam_date
                    ? new Date(d.exam_date+"T00:00:00").toLocaleDateString("en-IN",
                        {day:"2-digit",month:"short",year:"numeric"})
                        + (d.shift ? " · "+d.shift : "")
                    : String(d.year) + (d.shift ? " · "+d.shift : "");
                  // value = exam_date if available, else "YEAR|SHIFT" or "YEAR"
                  const value = d.exam_date
                    ? d.exam_date
                    : d.shift ? `${d.year}|${d.shift}` : String(d.year);
                  return { value, label };
                })}
                active={active.exam_date||[]}
                onToggle={v=>toggle('exam_date',v)}
                colorFn={()=>C.purple} C={C}/>
            </div>
          </FilterSection>
        )}

        <FilterSection title="Shift" C={C}>
          <ChipGroup items={shifts.map(s=>({value:s,label:s}))}
            active={active.shift||[]} onToggle={v=>toggle('shift',v)}
            colorFn={()=>C.blue} C={C}/>
        </FilterSection>

        <FilterSection title="Difficulty" C={C}>
          <ChipGroup
            items={["easy","medium","hard"].map(d=>({value:d,label:d[0].toUpperCase()+d.slice(1)}))}
            active={active.difficulty||[]} onToggle={v=>toggle('difficulty',v)}
            colorFn={diffColor} C={C}/>
        </FilterSection>

        <FilterSection title="Question Type" C={C}>
          <ChipGroup items={question_types.map(qt=>({value:qt,label:qt}))}
            active={active.question_type||[]} onToggle={v=>toggle('question_type',v)}
            colorFn={typeColor} C={C}/>
        </FilterSection>

        <div style={{height:20}}/>
      </div>
    </div>
  );

  if (isMobile) {
    return (
      <>
        {open && (
          <div onClick={onClose} style={{
            position:"fixed",inset:0,zIndex:499,
            background:"rgba(0,0,0,0.55)",backdropFilter:"blur(2px)",
          }}/>
        )}
        <div style={{
          position:"fixed",bottom:0,left:0,right:0,zIndex:500,
          background:C.bgCard,
          borderRadius:"20px 20px 0 0",
          maxHeight:"82vh",
          display:"flex",flexDirection:"column",
          boxShadow:"0 -8px 40px rgba(0,0,0,0.4)",
          transform:open?"translateY(0)":"translateY(100%)",
          transition:"transform .3s cubic-bezier(.4,0,.2,1)",
          paddingBottom:24,
        }}>
          <div style={{display:"flex",justifyContent:"center",padding:"10px 0 4px",flexShrink:0}}>
            <div style={{width:40,height:4,borderRadius:2,background:C.border}}/>
          </div>
          {content}
        </div>
      </>
    );
  }

  // Desktop — sticky sidebar
  return (
    <div style={{
      width:252, flexShrink:0,
      background:C.bgCard,
      borderRight:`1px solid ${C.border}`,
      position:"sticky", top:NAV_H,
      height:`calc(100vh - ${NAV_H}px)`,
      display:"flex", flexDirection:"column",
      overflow:"hidden",
    }}>
      {content}
    </div>
  );
}

// ── Question Card ─────────────────────────────────────────────────────────────
// FIX: accepts `apiBase` prop so it uses the correct production API URL
// instead of the module-level `API` constant (which defaulted to localhost).
function QuestionCard({ q, index, C, isMobile, apiBase }) {
  const [revealed, setRevealed] = useState(false);
  const [answer,   setAnswer]   = useState(null);
  const [loading,  setLoading]  = useState(false);
  const [selected, setSelected] = useState(null);

  const reveal = async () => {
    if (revealed) { setRevealed(false); setSelected(null); return; }
    setLoading(true);
    try {
      // FIX: use apiBase prop (passed from parent which has the correct API_URL)
      // fall back to module-level API constant for safety
      const base = apiBase || API;
      const res = await fetch(`${base}/api/questions/${q.slug}/answer`);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      setAnswer(await res.json());
      setRevealed(true);
    } catch(e) { console.error(e); }
    finally { setLoading(false); }
  };

  const opts = [q.option_1,q.option_2,q.option_3,q.option_4].filter(Boolean);
  const isCorrect = i => answer?.correct_option
    ? answer.correct_option.split(",").map(s=>s.trim()).includes(String(i+1)) : false;
  const optState = i => {
    if (!revealed) return selected===i?"sel":"def";
    if (isCorrect(i)) return "ok";
    if (selected===i) return "bad";
    return "dim";
  };
  const OPT = {
    def:{bg:C.bgCard, border:C.border,  color:C.text,      letter:C.textMuted},
    sel:{bg:C.blueBg, border:C.blue,    color:C.blueText,  letter:C.blue},
    ok: {bg:C.greenBg,border:C.green,   color:C.greenText, letter:C.green},
    bad:{bg:C.redBg,  border:C.red,     color:C.redText,   letter:C.red},
    dim:{bg:C.bgCard, border:C.border,  color:C.textDim,   letter:C.textDim},
  };

  const TYPE_C = {MCQ:C.blue,MSQ:C.purple,NUMERICAL:C.orange};
  const DIFF_C = {easy:C.green,medium:C.amber,hard:C.red};
  const sc = subjColor(q.subject_name||"X", C.isDark);

  // Format exam date nicely
  const examDate = q.exam_date
    ? new Date(q.exam_date+"T00:00:00").toLocaleDateString("en-IN",
        {day:"2-digit",month:"short",year:"numeric"})
    : null;

  const pad = isMobile ? "12px 12px" : "16px 20px";

  return (
    <div style={{
      background:C.bgCard, border:`1px solid ${C.border}`,
      borderRadius:14, overflow:"hidden",
      transition:"border-color .15s",
    }}
    onMouseEnter={e=>e.currentTarget.style.borderColor=C.borderLight}
    onMouseLeave={e=>e.currentTarget.style.borderColor=C.border}>

      {/* ── Top meta bar ── */}
      <div style={{
        background:C.surface, borderBottom:`1px solid ${C.border}`,
        padding:"8px 14px", display:"flex", flexDirection:"column", gap:5,
      }}>
        {/* Row 1: Q number + subject + type + difficulty + marks */}
        <div style={{display:"flex",alignItems:"center",gap:6,flexWrap:"wrap"}}>
          <span style={{
            fontSize:11,fontWeight:800,color:C.textMuted,
            background:C.surfaceHigh,border:`1px solid ${C.border}`,
            borderRadius:6,padding:"1px 8px",flexShrink:0,
          }}>Q{index+1}</span>

          {q.subject_name && (
            <span style={{
              fontSize:10,fontWeight:700,padding:"2px 9px",borderRadius:20,
              background:sc.bg,color:sc.text,border:`1px solid ${sc.text}44`,
              whiteSpace:"nowrap",
            }}>{q.subject_name}</span>
          )}

          {q.question_type && (
            <span style={{
              fontSize:10,fontWeight:700,padding:"2px 9px",borderRadius:20,
              background:(TYPE_C[q.question_type]||C.blue)+"18",
              color:TYPE_C[q.question_type]||C.blue,
              border:`1px solid ${(TYPE_C[q.question_type]||C.blue)}44`,
              whiteSpace:"nowrap",
            }}>{q.question_type}</span>
          )}

          {q.difficulty && (
            <span style={{
              fontSize:10,fontWeight:700,padding:"2px 9px",borderRadius:20,
              background:(DIFF_C[q.difficulty]||C.amber)+"18",
              color:DIFF_C[q.difficulty]||C.amber,
              border:`1px solid ${(DIFF_C[q.difficulty]||C.amber)}44`,
              textTransform:"capitalize",whiteSpace:"nowrap",
            }}>{q.difficulty}</span>
          )}

          {(q.marks_positive||q.marks_negative) && (
            <span style={{fontSize:11,fontWeight:700,marginLeft:"auto",flexShrink:0}}>
              {q.marks_positive && <span style={{color:C.green}}>+{q.marks_positive}</span>}
              {q.marks_positive&&q.marks_negative && <span style={{color:C.textDim}}> / </span>}
              {q.marks_negative && <span style={{color:C.red}}>{q.marks_negative}</span>}
            </span>
          )}
        </div>

        {/* Row 2: Exam date + Shift + Chapter + Topic */}
        <div style={{display:"flex",alignItems:"center",gap:6,flexWrap:"wrap"}}>
          {examDate && (
            <span style={{
              display:"inline-flex",alignItems:"center",gap:4,
              fontSize:11,fontWeight:700,
              color: C.isDark ? "#a78bfa" : "#7c3aed",
              background: C.isDark ? "#1e0f38" : "#f3e8ff",
              border:`1px solid ${C.isDark ? "#a78bfa33" : "#a78bfa55"}`,
              borderRadius:6,padding:"3px 9px",whiteSpace:"nowrap",
            }}>
              📅 {examDate}
            </span>
          )}
          {!examDate && q.year && (
            <span style={{
              fontSize:11,fontWeight:700,
              color: C.isDark ? "#a78bfa" : "#7c3aed",
              background: C.isDark ? "#1e0f38" : "#f3e8ff",
              border:`1px solid ${C.isDark ? "#a78bfa33" : "#a78bfa55"}`,
              borderRadius:6,padding:"3px 9px",whiteSpace:"nowrap",
            }}>
              {q.year}
            </span>
          )}
          {q.shift && (
            <span style={{
              fontSize:11,fontWeight:700,
              color: C.isDark ? "#60a5fa" : "#1d4ed8",
              background: C.isDark ? "#0f1f3d" : "#dbeafe",
              border:`1px solid ${C.isDark ? "#60a5fa33" : "#3b82f644"}`,
              borderRadius:6,padding:"3px 9px",whiteSpace:"nowrap",
            }}>{q.shift}</span>
          )}
          {q.chapter_name && (
            <span style={{
              display:"inline-flex",alignItems:"center",gap:4,
              fontSize:11,fontWeight:700,
              color: C.isDark ? "#fbbf24" : "#92400e",
              background: C.isDark ? "#2d1f00" : "#fef3c7",
              border:`1px solid ${C.isDark ? "#fbbf2433" : "#f59e0b44"}`,
              borderRadius:6,padding:"3px 9px",
              wordBreak:"break-word",
            }}>
              📂 {q.chapter_name}
            </span>
          )}
          {q.topic_name && (
            <span style={{
              display:"inline-flex",alignItems:"center",gap:4,
              fontSize:11,fontWeight:700,
              color: C.isDark ? "#34d399" : "#065f46",
              background: C.isDark ? "#0d2818" : "#d1fae5",
              border:`1px solid ${C.isDark ? "#34d39933" : "#10b98144"}`,
              borderRadius:6,padding:"3px 9px",
              wordBreak:"break-word",
            }}>
              › {q.topic_name}
            </span>
          )}
        </div>
      </div>

      {/* ── Question body ── */}
      <div style={{padding:pad}}>
        <div style={{fontSize:isMobile?14:15,color:C.text,marginBottom:16,lineHeight:1.9}}>
          <MathContent text={q.question_text}/>
        </div>

        {/* Options */}
        {q.question_type!=="NUMERICAL" && opts.length>0 && (
          <div style={{display:"flex",flexDirection:"column",gap:8,marginBottom:16}}>
            {opts.map((opt,i)=>{
              const s=OPT[optState(i)];
              return (
                <button key={i} onClick={()=>!revealed&&setSelected(i)} style={{
                  display:"flex",alignItems:"flex-start",gap:10,
                  padding:"10px 12px",borderRadius:10,textAlign:"left",
                  border:`1px solid ${s.border}`,background:s.bg,color:s.color,
                  cursor:revealed?"default":"pointer",
                  WebkitTapHighlightColor:"transparent",minHeight:44,
                }}>
                  <span style={{
                    minWidth:26,height:26,borderRadius:"50%",flexShrink:0,
                    display:"flex",alignItems:"center",justifyContent:"center",
                    fontSize:11,fontWeight:800,
                    border:`1.5px solid ${s.letter}`,color:s.letter,
                  }}>{String.fromCharCode(65+i)}</span>
                  <span style={{fontSize:isMobile?13:14,lineHeight:1.75,paddingTop:2}}>
                    <MathContent text={opt}/>
                  </span>
                </button>
              );
            })}
          </div>
        )}

        {/* Answer button */}
        <div style={{display:"flex",alignItems:"center",gap:10,flexWrap:"wrap"}}>
          <button onClick={reveal} disabled={loading} style={{
            padding:"9px 22px",borderRadius:9,fontSize:13,fontWeight:700,
            cursor:loading?"wait":"pointer",
            border:`1.5px solid ${revealed?C.green:C.accent}`,
            background:revealed?C.greenBg:C.accentBg,
            color:revealed?C.greenText:C.accentLight,
            minHeight:40,WebkitTapHighlightColor:"transparent",
          }}>
            {loading?"Loading…":revealed?"✓ Hide Answer":"Show Answer"}
          </button>
          {revealed&&answer?.correct_option&&q.question_type!=="NUMERICAL"&&(
            <span style={{fontSize:13,color:C.greenText,fontWeight:700}}>
              ✓ {answer.correct_option.split(",").map(n=>String.fromCharCode(64+parseInt(n.trim()))).join(", ")}
            </span>
          )}
          {revealed&&q.question_type==="NUMERICAL"&&answer?.correct_option&&(
            <span style={{
              padding:"7px 18px",borderRadius:9,fontSize:15,fontWeight:800,
              background:C.greenBg,border:`1.5px solid ${C.green}`,color:C.greenText,
            }}>= {answer.correct_option}</span>
          )}
        </div>

        {/* Solution */}
        {revealed&&answer?.solution_text&&(
          <div style={{
            marginTop:14,padding:"14px 16px",borderRadius:10,
            background:C.surface,border:`1px solid ${C.borderLight}`,
          }}>
            <div style={{
              fontSize:10,fontWeight:800,color:C.textDim,
              letterSpacing:1.2,textTransform:"uppercase",marginBottom:10,
              display:"flex",alignItems:"center",gap:6,
            }}>
              <svg width="12" height="12" viewBox="0 0 16 16" fill="currentColor">
                <path d="M8 1a7 7 0 100 14A7 7 0 008 1zm.75 10.5h-1.5v-5h1.5v5zm0-6.5h-1.5V3.5h1.5V5z"/>
              </svg>
              Solution
            </div>
            <div style={{fontSize:isMobile?13:14,color:C.textMuted,lineHeight:1.9}}>
              <MathContent text={answer.solution_text} block={true}/>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// ── Pagination bar ─────────────────────────────────────────────────────────
function Pagination({ page, totalPages, total, onPage, C }) {
  if (totalPages <= 1) return null;

  const from = (page-1)*PAGE_SIZE+1;
  const to   = Math.min(page*PAGE_SIZE, total);

  // Page number buttons — show window around current
  const pages = [];
  for (let p=1; p<=totalPages; p++) {
    if (p===1||p===totalPages||Math.abs(p-page)<=1) pages.push(p);
    else if (Math.abs(p-page)===2) pages.push("…"+p);
  }
  // Deduplicate
  const deduped = [];
  let lastWasEllipsis = false;
  for (const p of pages) {
    if (String(p).startsWith("…")) {
      if (!lastWasEllipsis) deduped.push(p);
      lastWasEllipsis = true;
    } else {
      deduped.push(p); lastWasEllipsis = false;
    }
  }

  const BtnStyle = (active, disabled=false) => ({
    padding:"8px 14px", borderRadius:9, fontSize:13, fontWeight:700,
    border:`1.5px solid ${active?C.accent:C.border}`,
    background: active?C.accentBg:"transparent",
    color: disabled ? C.textDim : active ? C.accentLight : C.textMuted,
    cursor: disabled?"default":"pointer",
    minWidth:38, minHeight:38,
    WebkitTapHighlightColor:"transparent",
    opacity: disabled ? .45 : 1,
  });

  return (
    <div style={{
      marginTop:24, padding:"16px 0",
      borderTop:`1px solid ${C.border}`,
      display:"flex", flexDirection:"column", gap:12, alignItems:"center",
    }}>
      <span style={{fontSize:13,color:C.textMuted}}>
        Showing <strong style={{color:C.text}}>{from}–{to}</strong> of <strong style={{color:C.text}}>{total.toLocaleString()}</strong> questions
      </span>

      <div style={{display:"flex",gap:6,flexWrap:"wrap",justifyContent:"center"}}>
        <button onClick={()=>onPage(1)}      disabled={page===1}          style={BtnStyle(false,page===1)}>«</button>
        <button onClick={()=>onPage(page-1)} disabled={page===1}          style={BtnStyle(false,page===1)}>‹ Prev</button>

        {deduped.map((p,i) => {
          if (String(p).startsWith("…")) {
            const num = parseInt(p.slice(1));
            return <button key={i} onClick={()=>onPage(num)} style={BtnStyle(false)}>…</button>;
          }
          return (
            <button key={p} onClick={()=>onPage(p)} style={BtnStyle(p===page)}>
              {p}
            </button>
          );
        })}

        <button onClick={()=>onPage(page+1)} disabled={page===totalPages} style={BtnStyle(false,page===totalPages)}>Next ›</button>
        <button onClick={()=>onPage(totalPages)} disabled={page===totalPages} style={BtnStyle(false,page===totalPages)}>»</button>
      </div>
    </div>
  );
}

// ── Empty state ────────────────────────────────────────────────────────────
function EmptyState({ hasFilters, C }) {
  return (
    <div style={{textAlign:"center",padding:"64px 24px"}}>
      <div style={{fontSize:48,marginBottom:14}}>{hasFilters?"🔍":"📖"}</div>
      <div style={{fontSize:16,fontWeight:700,color:C.textMuted,marginBottom:8}}>
        {hasFilters?"No questions match":"Start browsing"}
      </div>
      <div style={{fontSize:13,color:C.textDim}}>
        {hasFilters?"Try clearing some filters":"Use the filters to select subject, year, and more"}
      </div>
    </div>
  );
}

const EXAM_ID_MAP = { "jee-mains": 1, "neet": 3 };

// ── Main ──────────────────────────────────────────────────────────────────────
export default function QuestionBrowser({ apiBase, onBack, isDark: isDarkProp, onToggleTheme, examId }) {
  const API_URL = apiBase || API;

  const [isDark, setIsDark] = useState(isDarkProp !== undefined ? isDarkProp : true);

  // Keep local state in sync when parent changes theme
  useEffect(() => {
    if (isDarkProp !== undefined) setIsDark(isDarkProp);
  }, [isDarkProp]);
  const [isMobile,   setIsMobile]   = useState(window.innerWidth < 768);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [filters,    setFilters]    = useState({});
  const [active,     setActive]     = useState({
    subject:[],chapter:[],topic:[],
    year:[],shift:[],difficulty:[],question_type:[],exam_date:[],
  });
  const [questions,  setQuestions]  = useState([]);
  const [total,      setTotal]      = useState(0);
  const [page,       setPage]       = useState(1);
  const [loading,    setLoading]    = useState(false);
  const C = isDark ? DARK : LIGHT;
  const totalPages = Math.ceil(total / PAGE_SIZE);

  useEffect(()=>{
    const fn=()=>setIsMobile(window.innerWidth<768);
    window.addEventListener("resize",fn);
    return ()=>window.removeEventListener("resize",fn);
  },[]);

  useEffect(()=>{
    const examParam = examId && EXAM_ID_MAP[examId] ? `?exam_id=${EXAM_ID_MAP[examId]}` : "";
    fetch(`${API_URL}/api/questions/filters${examParam}`)
      .then(r=>r.json()).then(setFilters).catch(console.error);
  },[examId]);

  const buildQuery = useCallback((p)=>{
    const qs = new URLSearchParams();
    if (examId && EXAM_ID_MAP[examId]) qs.set("exam_id", EXAM_ID_MAP[examId]);
    (active.subject||[]).forEach(v=>qs.append("subject",v));
    (active.chapter||[]).forEach(v=>qs.append("chapter",v));
    (active.topic||[]).forEach(v=>qs.append("topic",v));
    (active.year||[]).forEach(v=>qs.append("year",v));
    (active.shift||[]).forEach(v=>qs.append("shift",v));
    (active.difficulty||[]).forEach(v=>qs.append("difficulty",v));
    (active.question_type||[]).forEach(v=>qs.append("question_type",v));
    (active.exam_date||[]).forEach(v=>qs.append("exam_date",v));
    qs.set("limit",  PAGE_SIZE);
    qs.set("offset", (p-1)*PAGE_SIZE);
    return qs.toString();
  },[active, examId]);

  // Fetch when active filters change → reset to page 1
  useEffect(()=>{
    const hasAny = Object.values(active).some(a=>Array.isArray(a)?a.length>0:Boolean(a));
    if (!hasAny) { setQuestions([]); setTotal(0); setPage(1); return; }
    setLoading(true);
    setPage(1);
    setQuestions([]);   // clear immediately so old results never show
    fetch(`${API_URL}/api/questions?${buildQuery(1)}`)
      .then(r=>r.json())
      .then(data=>{
        const qs = data.questions||[];
        setQuestions(qs); setTotal(data.total||0);
      })
      .catch(console.error)
      .finally(()=>setLoading(false));
  },[active]);

  // Fetch when page changes (but filters haven't changed)
  const goToPage = useCallback((p)=>{
    if (p<1||p>totalPages) return;
    setLoading(true);
    setPage(p);
    window.scrollTo({top:0,behavior:"smooth"});
    fetch(`${API_URL}/api/questions?${buildQuery(p)}`)
      .then(r=>r.json())
      .then(data=>{ setQuestions(data.questions||[]); setTotal(data.total||0); })
      .catch(console.error)
      .finally(()=>setLoading(false));
  },[buildQuery, totalPages]);

  const hasAny = Object.values(active).some(a=>Array.isArray(a)?a.length>0:Boolean(a));
  const activeCount = Object.values(active).reduce((n,a)=>n+(Array.isArray(a)?a.length:(a?1:0)),0);

  const handleFilterChange = (newActive) => {
    setActive(newActive);
  };

  return (
    <MathJaxContext config={MATHJAX_CONFIG}>
      <style>{`
        *{box-sizing:border-box}
        body{margin:0;overscroll-behavior-y:none}
        ::-webkit-scrollbar{width:4px;height:4px}
        ::-webkit-scrollbar-track{background:transparent}
        ::-webkit-scrollbar-thumb{background:#444;border-radius:2px}
        @keyframes shimmer{0%{background-position:200% 0}100%{background-position:-200% 0}}
      `}</style>

      <div style={{
        fontFamily:"'DM Sans','Segoe UI',system-ui,sans-serif",
        background:C.bg,minHeight:"100vh",color:C.text,
      }}>

        {/* ── Sticky Navbar ── */}
        <div style={{
          position:"sticky",top:0,zIndex:400,
          background:C.nav,borderBottom:`1px solid ${C.border}`,
          height:NAV_H,display:"flex",alignItems:"center",
          padding:"0 14px",gap:10,
        }}>
          {/* Back to landing */}
          {onBack && (
            <button onClick={onBack} style={{
              display:"flex",alignItems:"center",gap:5,
              background:"none",border:`1px solid ${C.border}`,
              borderRadius:8,padding:"5px 10px",
              color:C.textMuted,cursor:"pointer",fontSize:12,fontWeight:700,
              flexShrink:0,marginRight:4,
              WebkitTapHighlightColor:"transparent",
            }}>← Home</button>
          )}
          {/* Brand */}
          <div style={{display:"flex",alignItems:"center",gap:8,flexShrink:0}}>
            <div style={{
              width:30,height:30,borderRadius:8,flexShrink:0,
              background:`linear-gradient(135deg,${C.accent},${C.purple})`,
              display:"flex",alignItems:"center",justifyContent:"center",
              fontSize:11,fontWeight:900,color:"#fff",letterSpacing:-.5,
            }}>EC</div>
            <span style={{fontSize:isMobile?13:15,fontWeight:800,color:C.text,letterSpacing:-.3}}>
              ExamsCalendar.PYQ
              {examId && <span style={{fontWeight:600,color:C.textMuted}}> · {examId === "neet" ? "NEET" : "JEE Mains"}</span>}
            </span>
            
          </div>

          {/* Active filter pills (desktop) */}
          {!isMobile && hasAny && (
            <div style={{flex:1,display:"flex",gap:5,alignItems:"center",overflow:"hidden"}}>
              {Object.entries(active).flatMap(([k,arr])=>
                (arr||[]).map(v=>(
                  <span key={k+v} onClick={()=>setActive(a=>({...a,[k]:(a[k]||[]).filter(x=>x!==v)}))} style={{
                    display:"inline-flex",alignItems:"center",gap:3,
                    padding:"3px 10px",borderRadius:20,fontSize:11,fontWeight:600,
                    background:C.accentBg,color:C.accentLight,
                    border:`1px solid ${C.accent}44`,cursor:"pointer",
                    whiteSpace:"nowrap",flexShrink:0,
                  }}>
                    {String(v)} <span style={{fontSize:10,opacity:.6}}>×</span>
                  </span>
                ))
              )}
              <span style={{fontSize:11,color:C.textDim,whiteSpace:"nowrap"}}>
                {total.toLocaleString()} Q
              </span>
            </div>
          )}

          <div style={{flex:1}}/>

          {/* Mobile filter button */}
          {isMobile && (
            <button onClick={()=>setDrawerOpen(true)} style={{
              display:"flex",alignItems:"center",gap:5,
              padding:"7px 14px",borderRadius:10,cursor:"pointer",
              border:`1.5px solid ${activeCount>0?C.accent:C.border}`,
              background:activeCount>0?C.accentBg:"transparent",
              color:activeCount>0?C.accentLight:C.textMuted,
              fontSize:13,fontWeight:700,minHeight:36,
              WebkitTapHighlightColor:"transparent",
            }}>
              <svg width="13" height="13" viewBox="0 0 16 16" fill="currentColor"><path d="M1.5 3h13l-5 6v4.5l-3-1.5V9L1.5 3z"/></svg>
              Filters {activeCount>0&&<span style={{
                background:C.accent,color:"#fff",borderRadius:"50%",
                width:17,height:17,fontSize:10,fontWeight:800,
                display:"flex",alignItems:"center",justifyContent:"center",
              }}>{activeCount}</span>}
            </button>
          )}

          {/* Theme toggle */}
          <button onClick={()=>{ if(onToggleTheme) onToggleTheme(); else setIsDark(d=>!d); }} style={{
            background:C.surfaceHigh,border:`1px solid ${C.border}`,
            borderRadius:20,padding:"6px 12px",fontSize:14,
            cursor:"pointer",color:C.textMuted,minHeight:36,
            WebkitTapHighlightColor:"transparent",
          }}>{isDark?"☀️":"🌙"}</button>
        </div>

        {/* ── Body: sidebar + content ── */}
        <div style={{display:"flex",alignItems:"flex-start"}}>

          {/* Desktop sticky sidebar */}
          {!isMobile && (
            <Sidebar
              filters={filters} active={active}
              onChange={handleFilterChange} C={C}
              isMobile={false} open={true} onClose={()=>{}}
            />
          )}

          {/* Main content area */}
          <div style={{
            flex:1,minWidth:0,
            padding:isMobile?"12px 12px 80px":"20px 24px 48px",
          }}>

            {/* Results header */}
            {hasAny && !loading && questions.length>0 && (
              <div style={{
                display:"flex",alignItems:"center",justifyContent:"space-between",
                marginBottom:14,
              }}>
                <span style={{fontSize:13,color:C.textMuted}}>
                  Page <strong style={{color:C.text}}>{page}</strong> of <strong style={{color:C.text}}>{totalPages}</strong>
                  {" "}· <strong style={{color:C.text}}>{total.toLocaleString()}</strong> total questions
                </span>
              </div>
            )}

            {/* Mobile active filter pills */}
            {isMobile && hasAny && (
              <div style={{
                display:"flex",gap:5,flexWrap:"nowrap",overflowX:"auto",
                marginBottom:12,paddingBottom:4,scrollbarWidth:"none",
              }}>
                {Object.entries(active).flatMap(([k,arr])=>
                  (arr||[]).map(v=>(
                    <button key={k+v} onClick={()=>setActive(a=>({...a,[k]:(a[k]||[]).filter(x=>x!==v)}))} style={{
                      display:"inline-flex",alignItems:"center",gap:3,
                      padding:"5px 12px",borderRadius:20,fontSize:12,fontWeight:600,
                      background:C.accentBg,color:C.accentLight,
                      border:`1px solid ${C.accent}44`,cursor:"pointer",
                      whiteSpace:"nowrap",flexShrink:0,minHeight:30,
                      WebkitTapHighlightColor:"transparent",
                    }}>
                      {String(v)} <span style={{fontSize:10,opacity:.6}}>×</span>
                    </button>
                  ))
                )}
              </div>
            )}

            {/* Skeleton */}
            {loading && (
              <div style={{display:"flex",flexDirection:"column",gap:10}}>
                {[1,2,3].map(i=>(
                  <div key={i} style={{
                    height:150,borderRadius:12,overflow:"hidden",
                    background:C.bgCard,border:`1px solid ${C.border}`,
                  }}>
                    <div style={{
                      height:"100%",
                      background:`linear-gradient(90deg,${C.surface} 0%,${C.surfaceHigh} 50%,${C.surface} 100%)`,
                      backgroundSize:"200% 100%",animation:"shimmer 1.4s ease infinite",
                    }}/>
                  </div>
                ))}
              </div>
            )}

            {!loading&&!hasAny&&<EmptyState hasFilters={false} C={C}/>}
            {!loading&&hasAny&&questions.length===0&&<EmptyState hasFilters={true} C={C}/>}

            {!loading&&questions.length>0&&(
              <>
                <div style={{display:"flex",flexDirection:"column",gap:isMobile?10:12}}>
                  {questions.map((q,i)=>(
                    <QuestionCard key={q.slug||q.id} q={q}
                      index={(page-1)*PAGE_SIZE+i} C={C} isMobile={isMobile}
                      apiBase={API_URL}
                    />
                  ))}
                </div>

                {/* Pagination */}
                <Pagination page={page} totalPages={totalPages} total={total} onPage={goToPage} C={C}/>
              </>
            )}
          </div>
        </div>

        {/* Mobile filter drawer */}
        {isMobile && (
          <Sidebar
            filters={filters} active={active}
            onChange={handleFilterChange} C={C}
            isMobile={true} open={drawerOpen} onClose={()=>setDrawerOpen(false)}
          />
        )}

      </div>
    </MathJaxContext>
  );
}
