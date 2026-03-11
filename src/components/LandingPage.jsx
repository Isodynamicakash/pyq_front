/**
 * LandingPage.jsx — ExamsCalendar
 * Light / Dark mode toggle, clean readable typography, standard professional palette
 */

import { useState, useEffect, useRef } from "react";

// ─── Theme tokens ────────────────────────────────────────────────────────────
const THEMES = {
  dark: {
    bg:           "#0f1117",
    bgCard:       "#181c27",
    bgCardHover:  "#1e2335",
    nav:          "rgba(15,17,23,0.96)",
    navBorder:    "#242840",
    border:       "#242840",
    borderHover:  "#3a4060",
    text:         "#f0f2ff",
    textSub:      "#8892b0",
    textMuted:    "#4a5280",
    textDisabled: "#2e3555",
    accent:       "#4f7ef8",       // primary blue
    accentHover:  "#6b93ff",
    accentBg:     "#1a2654",
    gold:         "#f5a623",
    goldBg:       "#2d1f00",
    success:      "#22c55e",
    successBg:    "#0d2818",
    badge:        "#1e2335",
    badgeText:    "#4a5280",
    soon:         "#2a3050",
    soonText:     "#4a5280",
    shadow:       "0 20px 60px rgba(0,0,0,0.5)",
    dropShadow:   "0 24px 60px rgba(0,0,0,0.7)",
  },
  light: {
    bg:           "#f8f9ff",
    bgCard:       "#ffffff",
    bgCardHover:  "#f0f3ff",
    nav:          "rgba(248,249,255,0.97)",
    navBorder:    "#e2e6f0",
    border:       "#e2e6f0",
    borderHover:  "#b8c0dc",
    text:         "#111827",
    textSub:      "#374151",
    textMuted:    "#6b7280",
    textDisabled: "#d1d5db",
    accent:       "#2563eb",
    accentHover:  "#1d4ed8",
    accentBg:     "#eff6ff",
    gold:         "#d97706",
    goldBg:       "#fffbeb",
    success:      "#16a34a",
    successBg:    "#f0fdf4",
    badge:        "#f3f4f6",
    badgeText:    "#374151",
    soon:         "#f3f4f6",
    soonText:     "#9ca3af",
    shadow:       "0 4px 24px rgba(0,0,0,0.08)",
    dropShadow:   "0 16px 48px rgba(0,0,0,0.12)",
  },
};

// ─── Nav config ───────────────────────────────────────────────────────────────
// tabColor: idle background in dark | tabColorLight: idle bg in light | activeColor: when clicked
const NAV_ITEMS = [
  {
    id: "pyq", label: "PYQ", icon: "📝",
    tabColor: "#1a0a3a", tabColorLight: "#ede9fe", tabText: "#a78bfa", tabTextLight: "#5b21b6",
    activeColor: "#7c3aed", activeColorLight: "#7c3aed",
    sub: [
      { group: "JEE", items: [
        { label: "JEE Mains",    id: "jee-mains", live: true,  icon: "🎯" },
        { label: "JEE Advanced", id: "jee-adv",   live: false, icon: "🏆" },
        { label: "BITSAT",       id: "bitsat",    live: false, icon: "💻" },
        { label: "WBJEE",        id: "wbjee",     live: false, icon: "📐" },
        { label: "MHT-CET",      id: "mhtcet",    live: false, icon: "🔬" },
        { label: "VITEEE",       id: "viteee",    live: false, icon: "🧪" },
      ]},
      { group: "SSC", items: [
        { label: "SSC CGL",  id: "ssc-cgl",  live: false, icon: "📋" },
        { label: "SSC CHSL", id: "ssc-chsl", live: false, icon: "📄" },
        { label: "SSC MTS",  id: "ssc-mts",  live: false, icon: "📌" },
        { label: "SSC GD",   id: "ssc-gd",   live: false, icon: "🛡️" },
      ]},
      { group: "UPSC", items: [
        { label: "UPSC CSE", id: "upsc-cse", live: false, icon: "🏛️" },
        { label: "UPSC CDS", id: "upsc-cds", live: false, icon: "⚔️" },
        { label: "UPSC NDA", id: "upsc-nda", live: false, icon: "🪖" },
      ]},
      { group: "CBSE", items: [
        { label: "Class 10", id: "cbse-10", live: false, icon: "📚" },
        { label: "Class 11", id: "cbse-11", live: false, icon: "📗" },
        { label: "Class 12", id: "cbse-12", live: false, icon: "🎓" },
      ]},
    ],
  },
  {
    id: "flashcards", label: "Flash Cards", icon: "⚡",
    tabColor: "#1a1800", tabColorLight: "#fefce8", tabText: "#facc15", tabTextLight: "#854d0e",
    activeColor: "#d97706", activeColorLight: "#d97706",
    sub: [{ group: "Flash Cards", items: [
      { label: "Physics",   id: "fl-phy",  live: false, icon: "⚡" },
      { label: "Chemistry", id: "fl-chem", live: false, icon: "🧬" },
      { label: "Maths",     id: "fl-math", live: false, icon: "∑" },
      { label: "Biology",   id: "fl-bio",  live: false, icon: "🌿" },
      { label: "History",   id: "fl-hist", live: false, icon: "🏺" },
      { label: "Polity",    id: "fl-pol",  live: false, icon: "⚖️" },
    ]}],
  },
  {
    id: "quiz", label: "Quiz", icon: "🧠",
    tabColor: "#1a0808", tabColorLight: "#fff1f2", tabText: "#f87171", tabTextLight: "#be123c",
    activeColor: "#e11d48", activeColorLight: "#e11d48",
    sub: [{ group: "Quiz", items: [
      { label: "Daily Quiz",   id: "quiz-daily",   live: false, icon: "📆" },
      { label: "Mock Tests",   id: "quiz-mock",    live: false, icon: "📊" },
      { label: "Chapter Quiz", id: "quiz-chapter", live: false, icon: "📑" },
      { label: "Speed Drill",  id: "quiz-speed",   live: false, icon: "⏱️" },
    ]}],
  },
  {
    id: "notes", label: "Notes", icon: "📒",
    tabColor: "#0d1f10", tabColorLight: "#f0fdf4", tabText: "#4ade80", tabTextLight: "#166534",
    activeColor: "#16a34a", activeColorLight: "#16a34a",
    sub: [{ group: "Notes", items: [
      { label: "Physics Notes",   id: "notes-phy",  live: false, icon: "⚡" },
      { label: "Chemistry Notes", id: "notes-chem", live: false, icon: "🧬" },
      { label: "Maths Notes",     id: "notes-math", live: false, icon: "∑" },
      { label: "Formula Sheets",  id: "notes-frm",  live: false, icon: "🔢" },
      { label: "Quick Revision",  id: "notes-rev",  live: false, icon: "🔁" },
    ]}],
  },
  {
    id: "books", label: "Books", icon: "📚",
    tabColor: "#0a1a2a", tabColorLight: "#eff6ff", tabText: "#60a5fa", tabTextLight: "#1d4ed8",
    activeColor: "#2563eb", activeColorLight: "#2563eb",
    sub: [{ group: "Books", items: [
      { label: "NCERT Solutions", id: "bk-ncert", live: false, icon: "📖" },
      { label: "HC Verma",        id: "bk-hcv",   live: false, icon: "⚡" },
      { label: "RD Sharma",       id: "bk-rds",   live: false, icon: "∑" },
      { label: "MS Chauhan",      id: "bk-msc",   live: false, icon: "🧬" },
      { label: "Arihant Guides",  id: "bk-ari",   live: false, icon: "📕" },
    ]}],
  },
  {
    id: "calendar", label: "Exam Calendar", icon: "📅",
    tabColor: "#1a0a1a", tabColorLight: "#fdf4ff", tabText: "#e879f9", tabTextLight: "#86198f",
    activeColor: "#a21caf", activeColorLight: "#a21caf",
    sub: [{ group: "Exam Calendar", items: [
      { label: "Upcoming Exams", id: "cal-up",    live: false, icon: "🗓️" },
      { label: "Admit Cards",    id: "cal-admit", live: false, icon: "🪪" },
      { label: "Results",        id: "cal-res",   live: false, icon: "📊" },
      { label: "Notifications",  id: "cal-notif", live: false, icon: "🔔" },
    ]}],
  },
];

// ─── Theme toggle button ──────────────────────────────────────────────────────
function ThemeToggle({ isDark, toggle, T }) {
  return (
    <button
      onClick={toggle}
      title={isDark ? "Switch to light mode" : "Switch to dark mode"}
      style={{
        display: "flex", alignItems: "center", justifyContent: "center",
        width: 38, height: 38, borderRadius: 10, flexShrink: 0,
        background: T.badge, border: `1px solid ${T.border}`,
        cursor: "pointer", fontSize: 17, transition: "all .2s",
        color: T.textSub,
      }}
      onMouseEnter={e => { e.currentTarget.style.background = T.bgCardHover; e.currentTarget.style.borderColor = T.borderHover; }}
      onMouseLeave={e => { e.currentTarget.style.background = T.badge; e.currentTarget.style.borderColor = T.border; }}
    >
      {isDark ? "☀️" : "🌙"}
    </button>
  );
}

// ─── Dropdown ─────────────────────────────────────────────────────────────────
function Dropdown({ item, onJeeMains, onClose, T, isDark }) {
  const isPyq = item.id === "pyq";
  const liveColor = "#2563eb";

  return (
    <div style={{
      position: "fixed", top: 64, left: "50%", transform: "translateX(-50%)",
      background: T.bgCard,
      border: `1px solid ${T.border}`,
      borderRadius: 14, padding: isPyq ? 16 : 8,
      boxShadow: T.dropShadow,
      zIndex: 2000, animation: "dropIn .16s cubic-bezier(.4,0,.2,1)",
      minWidth: isPyq ? Math.min(680, window.innerWidth - 32) : 240,
      maxWidth: "92vw",
    }}>
      <style>{`@keyframes dropIn{from{opacity:0;transform:translateX(-50%) translateY(-6px)}to{opacity:1;transform:translateX(-50%) translateY(0)}}`}</style>

      {isPyq ? (
        <div>
          <div style={{
            fontSize: 11, fontWeight: 700, letterSpacing: 1.4, color: T.textMuted,
            textTransform: "uppercase", marginBottom: 14, paddingBottom: 10,
            borderBottom: `1px solid ${T.border}`,
          }}>Previous Year Questions</div>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(140px, 1fr))",
            gap: 8,
          }}>
            {item.sub.map(group => (
              <div key={group.group}>
                <div style={{
                  fontSize: 10, fontWeight: 700, letterSpacing: 1.2,
                  color: T.textMuted, textTransform: "uppercase",
                  marginBottom: 6, padding: "0 6px",
                }}>{group.group}</div>
                {group.items.map(s => (
                  <button key={s.id}
                    onClick={() => { if (s.live) { onJeeMains(); onClose(); } }}
                    style={{
                      display: "flex", alignItems: "center", gap: 7,
                      width: "100%", padding: "7px 8px",
                      background: "none", border: "none", borderRadius: 8,
                      cursor: s.live ? "pointer" : "default",
                      textAlign: "left", transition: "background .1s",
                    }}
                    onMouseEnter={e => { if (s.live) e.currentTarget.style.background = T.accentBg; }}
                    onMouseLeave={e => { e.currentTarget.style.background = "none"; }}
                  >
                    <span style={{ fontSize: 13 }}>{s.icon}</span>
                    <span style={{
                      fontSize: 13, fontWeight: 500, flex: 1,
                      color: s.live ? T.text : T.textDisabled,
                    }}>{s.label}</span>
                    {s.live
                      ? <span style={{ fontSize: 9, fontWeight: 700, padding: "1px 6px", borderRadius: 20, background: T.accentBg, color: liveColor, border: `1px solid ${liveColor}40`, letterSpacing: .6 }}>LIVE</span>
                      : <span style={{ fontSize: 9, fontWeight: 600, padding: "1px 6px", borderRadius: 20, background: T.soon, color: T.soonText, letterSpacing: .5 }}>SOON</span>
                    }
                  </button>
                ))}
              </div>
            ))}
          </div>
        </div>
      ) : (
        <>
          <div style={{
            padding: "4px 8px 10px", fontSize: 11, fontWeight: 700, letterSpacing: 1.2,
            color: T.textMuted, textTransform: "uppercase",
            borderBottom: `1px solid ${T.border}`, marginBottom: 6,
          }}>{item.label}</div>
          {item.sub[0].items.map(s => (
            <button key={s.id} style={{
              display: "flex", alignItems: "center", gap: 10,
              width: "100%", padding: "9px 10px",
              background: "none", border: "none", borderRadius: 8,
              cursor: "default", textAlign: "left",
            }}>
              <span style={{ fontSize: 15, minWidth: 22 }}>{s.icon}</span>
              <span style={{ fontSize: 13, fontWeight: 500, flex: 1, color: T.textDisabled }}>{s.label}</span>
              <span style={{ fontSize: 9, fontWeight: 600, padding: "2px 7px", borderRadius: 20, background: T.soon, color: T.soonText, letterSpacing: .5 }}>SOON</span>
            </button>
          ))}
        </>
      )}
    </div>
  );
}

// ─── Hero ─────────────────────────────────────────────────────────────────────
function Hero({ onJeeMains, T, isDark }) {
  const [v, setV] = useState(false);
  useEffect(() => { setTimeout(() => setV(true), 80); }, []);
  const anim = (d) => ({
    opacity: v ? 1 : 0,
    transform: v ? "translateY(0)" : "translateY(18px)",
    transition: `opacity .6s ease ${d}s, transform .6s ease ${d}s`,
  });

  return (
    <div style={{
      minHeight: "100vh", display: "flex", flexDirection: "column",
      alignItems: "center", justifyContent: "center",
      textAlign: "center", padding: "120px 32px 80px",
      width: "100%", maxWidth: "100vw", overflow: "hidden",
      position: "relative", zIndex: 1,
    }}>
      {/* Subtle radial glow — only in dark */}
      {isDark && (
        <div style={{
          position: "absolute", top: "20%", left: "50%", transform: "translateX(-50%)",
          width: 600, height: 300, pointerEvents: "none",
          background: "radial-gradient(ellipse, #2563eb0a 0%, transparent 70%)",
        }} />
      )}

      {/* Live badge */}
      <div style={{
        ...anim(0),
        display: "inline-flex", alignItems: "center", gap: 7,
        padding: "7px 18px", borderRadius: 24, marginBottom: 28,
        background: isDark ? "#1a2654" : "#eff6ff",
        border: `1px solid ${isDark ? "#2d4080" : "#bfdbfe"}`,
        fontSize: 12, fontWeight: 600, color: isDark ? "#93b4fd" : "#1d4ed8",
        letterSpacing: .5,
      }}>
        <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#22c55e", animation: "pulse 2s ease infinite", flexShrink: 0 }} />
        JEE Mains PYQ — Live Now
        <style>{`@keyframes pulse{0%,100%{opacity:1;transform:scale(1)}50%{opacity:.4;transform:scale(1.5)}}`}</style>
      </div>

      {/* Headline */}
      <h1 style={{
        ...anim(.1),
        fontFamily: "'Plus Jakarta Sans', 'Inter', system-ui, sans-serif",
        fontSize: "clamp(2rem, 4vw, 3.6rem)",
        fontWeight: 800, lineHeight: 1.18,
        margin: "0 0 6px", color: T.text,
        maxWidth: 860, width: "100%",
        letterSpacing: -1,
        textAlign: "center",
      }}>
        Your one stop destination for
      </h1>
      <h1 style={{
        ...anim(.15),
        fontFamily: "'Plus Jakarta Sans', 'Inter', system-ui, sans-serif",
        fontSize: "clamp(2rem, 4vw, 3.6rem)",
        fontWeight: 800, lineHeight: 1.18,
        margin: "0 0 28px",
        color: isDark ? "#4f7ef8" : "#2563eb",
        maxWidth: 860, width: "100%",
        letterSpacing: -1,
        textAlign: "center",
      }}>
        All Exams
      </h1>

      <p style={{
        ...anim(.22),
        fontSize: "clamp(1rem, 1.8vw, 1.25rem)",
        color: T.textSub, maxWidth: 600,
        lineHeight: 1.75, margin: "0 0 40px",
        fontWeight: 400,
      }}>
        PYQs, flashcards, quizzes, notes and exam calendars —
        everything a serious student needs, in one clean place.
      </p>

      {/* CTA row */}
      <div style={{ ...anim(.3), display: "flex", gap: 12, flexWrap: "wrap", justifyContent: "center" }}>
        <button onClick={onJeeMains} style={{
          padding: "13px 36px", borderRadius: 10, fontSize: 15, fontWeight: 700,
          background: isDark ? "#2563eb" : "#2563eb",
          border: "none", color: "#ffffff", cursor: "pointer",
          boxShadow: "0 4px 20px rgba(37,99,235,.35)",
          letterSpacing: .2, transition: "background .15s, box-shadow .15s, transform .15s",
        }}
          onMouseEnter={e => { e.currentTarget.style.background = "#1d4ed8"; e.currentTarget.style.transform = "translateY(-1px)"; e.currentTarget.style.boxShadow = "0 8px 28px rgba(37,99,235,.45)"; }}
          onMouseLeave={e => { e.currentTarget.style.background = "#2563eb"; e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 4px 20px rgba(37,99,235,.35)"; }}
        >
          Start with JEE Mains →
        </button>
        <button style={{
          padding: "13px 32px", borderRadius: 10, fontSize: 15, fontWeight: 600,
          background: "transparent", border: `1px solid ${T.border}`,
          color: T.textMuted, cursor: "default", letterSpacing: .2,
        }}>
          More Exams Coming Soon
        </button>
      </div>

      {/* Stats */}
      <div style={{
        ...anim(.45),
        display: "flex", gap: 0, marginTop: 64,
        flexWrap: "wrap", justifyContent: "center",
        background: T.bgCard,
        border: `1px solid ${T.border}`,
        borderRadius: 14,
        overflow: "hidden",
        boxShadow: T.shadow,
      }}>
        {[
          { num: "3,500+", label: "PYQs" },
          { num: "10+",    label: "Years Covered" },
          { num: "100%",   label: "Free to Use" },
          { num: "6+",     label: "Exam Categories" },
        ].map((s, i) => (
          <div key={s.label} style={{
            textAlign: "center",
            padding: "20px 36px",
            borderRight: i < 3 ? `1px solid ${T.border}` : "none",
          }}>
            <div style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: "clamp(1.4rem, 2.5vw, 1.8rem)",
              fontWeight: 800, color: T.text, letterSpacing: -.5,
            }}>{s.num}</div>
            <div style={{
              fontSize: 11, color: T.textMuted, fontWeight: 500,
              letterSpacing: .8, textTransform: "uppercase", marginTop: 3,
            }}>{s.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Section Header ───────────────────────────────────────────────────────────
function SectionHeader({ eyebrow, title, sub, T }) {
  return (
    <div style={{ textAlign: "center", marginBottom: 52 }}>
      <div style={{
        display: "inline-block",
        fontSize: 11, fontWeight: 700, letterSpacing: 1.5,
        color: T.accent, textTransform: "uppercase", marginBottom: 12,
        background: T.accentBg,
        padding: "4px 12px", borderRadius: 6,
      }}>{eyebrow}</div>
      <h2 style={{
        fontFamily: "'Plus Jakarta Sans', sans-serif",
        fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)",
        fontWeight: 800, color: T.text, margin: "0 0 14px",
        letterSpacing: -.5,
      }}>{title}</h2>
      {sub && <p style={{ fontSize: 15, color: T.textSub, maxWidth: 480, margin: "0 auto", lineHeight: 1.7 }}>{sub}</p>}
    </div>
  );
}

// ─── Features ─────────────────────────────────────────────────────────────────
function Features({ onJeeMains, T, isDark }) {
  const cards = [
    { icon: "🎯", title: "JEE Mains PYQs",   desc: "10+ years of questions with complete solutions. Filter by chapter, topic, difficulty and question type.", live: true,  onClick: onJeeMains },
    { icon: "⚡", title: "Flash Cards",        desc: "High-retention revision cards for rapid recall of key concepts before exam day.",                          live: false },
    { icon: "🧠", title: "Quiz & Mock Tests",  desc: "Timed chapter quizzes and full-length mock tests that simulate the real exam environment.",               live: false },
    { icon: "📒", title: "Notes & Formulas",   desc: "Concise, exam-focused notes and complete formula sheets organised by topic and chapter.",                 live: false },
    { icon: "📚", title: "Books & Solutions",  desc: "NCERT, HC Verma, RD Sharma and Arihant — solved and explained, all in one place.",                       live: false },
    { icon: "📅", title: "Exam Calendar",      desc: "Every exam date, admit card, result and notification so you never miss a deadline again.",                live: false },
  ];

  return (
    <div style={{ position: "relative", zIndex: 1, padding: "0 24px 80px", maxWidth: 1160, margin: "0 auto" }}>
      <SectionHeader
        eyebrow="What's Inside"
        title="Everything you need to crack the exam"
        T={T}
      />
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: 14 }}>
        {cards.map((c, i) => (
          <div key={c.title}
            onClick={c.live ? c.onClick : undefined}
            style={{
              background: T.bgCard,
              border: `1px solid ${c.live ? (isDark ? "#2d4080" : "#bfdbfe") : T.border}`,
              borderRadius: 14, padding: "26px 24px 22px",
              cursor: c.live ? "pointer" : "default",
              transition: "transform .18s, box-shadow .18s, border-color .18s",
              animation: "fadeUp .45s ease both",
              animationDelay: `${i * .07}s`,
            }}
            onMouseEnter={e => {
              if (c.live) {
                e.currentTarget.style.transform = "translateY(-4px)";
                e.currentTarget.style.boxShadow = isDark ? "0 16px 40px rgba(37,99,235,.2)" : "0 12px 32px rgba(37,99,235,.12)";
                e.currentTarget.style.borderColor = isDark ? "#4f7ef8" : "#93c5fd";
              } else {
                e.currentTarget.style.borderColor = T.borderHover;
              }
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "none";
              e.currentTarget.style.borderColor = c.live ? (isDark ? "#2d4080" : "#bfdbfe") : T.border;
            }}
          >
            <div style={{ fontSize: 26, marginBottom: 14 }}>{c.icon}</div>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10 }}>
              <h3 style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: 16, fontWeight: 700, color: c.live ? T.text : T.textMuted,
                margin: 0,
              }}>{c.title}</h3>
              {c.live
                ? <span style={{ fontSize: 10, fontWeight: 700, padding: "2px 8px", borderRadius: 6, background: isDark ? "#1a2654" : "#eff6ff", color: isDark ? "#93b4fd" : "#2563eb", border: `1px solid ${isDark ? "#2d4080" : "#bfdbfe"}`, letterSpacing: .5 }}>LIVE</span>
                : <span style={{ fontSize: 10, fontWeight: 600, padding: "2px 8px", borderRadius: 6, background: T.soon, color: T.soonText, letterSpacing: .4 }}>SOON</span>
              }
            </div>
            <p style={{ fontSize: 14, color: c.live ? T.textSub : T.textMuted, lineHeight: 1.65, margin: 0 }}>{c.desc}</p>
            {c.live && (
              <div style={{ marginTop: 16, fontSize: 13, fontWeight: 600, color: isDark ? "#4f7ef8" : "#2563eb", display: "flex", alignItems: "center", gap: 4 }}>
                Explore now <span>→</span>
              </div>
            )}
          </div>
        ))}
      </div>
      <style>{`@keyframes fadeUp{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}`}</style>
    </div>
  );
}

// ─── Why Us ───────────────────────────────────────────────────────────────────
function WhyUs({ T, isDark }) {
  const reasons = [
    { icon: "🎯", title: "Exam-Focused Content",         desc: "Every question and card is curated for Indian competitive exams — not generic content. We know exactly what each exam tests." },
    { icon: "🔍", title: "Powerful Filtering",           desc: "Filter PYQs by subject, chapter, topic, year, shift, difficulty and question type simultaneously. Find exactly what you need fast." },
    { icon: "📐", title: "Full Step-by-Step Solutions",  desc: "Every question comes with a complete exam-style solution — not just the answer. Understand the method to tackle any variation." },
    { icon: "⚡", title: "Rapid Revision System",        desc: "Flash cards and formula sheets designed for the final 30 days before your exam. Retain more in less time." },
    { icon: "🧠", title: "Active Testing",               desc: "Timed chapter quizzes and mock tests simulate real exam pressure. Practise performing under conditions, not just studying." },
    { icon: "📅", title: "Never Miss a Deadline",        desc: "Track every form date, admit card, exam date and result across JEE, SSC, UPSC and CBSE in one calendar." },
    { icon: "📱", title: "Works on Every Device",        desc: "Fully functional on mobile, tablet and desktop. Revise on the bus, practise during lunch — no app download required." },
    { icon: "🆓", title: "Completely Free",              desc: "No paywalls, no subscriptions, no hidden fees. Every PYQ, solution, formula and note is free for every student, forever." },
    { icon: "📚", title: "One Platform, Zero Friction",  desc: "PYQs, notes, quizzes, books, flashcards and calendars — stop juggling multiple apps. Everything in one clean interface." },
    { icon: "🏆", title: "Built by Students",            desc: "Every feature exists because a real student needed it during real exam preparation. We understand the grind." },
    { icon: "🔄", title: "Always Up to Date",            desc: "New papers added as soon as exams happen. You always have the most recent questions available, automatically." },
    { icon: "🌐", title: "All Exams, One Account",       desc: "JEE, SSC, UPSC, CBSE — one platform, one login. All your preparation material in a single place." },
  ];

  return (
    <div style={{ position: "relative", zIndex: 1, padding: "20px 24px 100px", maxWidth: 1160, margin: "0 auto" }}>
      <SectionHeader
        eyebrow="Why ExamsCalendar"
        title="Built differently. For students who are serious."
        sub="We've rethought what a study platform should feel like — fast, focused, and built around how toppers actually prepare."
        T={T}
      />
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 14 }}>
        {reasons.map((r, i) => (
          <div key={r.title}
            style={{
              background: T.bgCard, border: `1px solid ${T.border}`,
              borderRadius: 14, padding: "22px 22px 20px",
              transition: "border-color .18s, transform .18s",
              animation: "fadeUp .45s ease both",
              animationDelay: `${i * .05}s`,
            }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = T.borderHover; e.currentTarget.style.transform = "translateY(-2px)"; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = T.border; e.currentTarget.style.transform = "translateY(0)"; }}
          >
            <div style={{
              width: 40, height: 40, borderRadius: 10,
              background: T.accentBg, border: `1px solid ${isDark ? "#2d4080" : "#bfdbfe"}`,
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: 18, marginBottom: 14,
            }}>{r.icon}</div>
            <h3 style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: 15, fontWeight: 700, color: T.text, margin: "0 0 8px",
            }}>{r.title}</h3>
            <p style={{ fontSize: 13, color: T.textSub, lineHeight: 1.7, margin: 0 }}>{r.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────
function Footer({ T }) {
  return (
    <footer style={{
      borderTop: `1px solid ${T.border}`,
      padding: "36px 24px", textAlign: "center",
      position: "relative", zIndex: 1,
      background: T.bg,
    }}>
      <div style={{
        fontFamily: "'Plus Jakarta Sans', sans-serif",
        fontSize: 18, fontWeight: 800, marginBottom: 10,
        color: T.accent, letterSpacing: -.3,
      }}>ExamsCalendar.PYQ</div>
      <div style={{ fontSize: 13, color: T.textMuted, marginBottom: 4 }}>
        Built for serious students. Free forever.
      </div>
      <div style={{ fontSize: 12, color: T.textDisabled, marginTop: 2 }}>
        JEE · SSC · UPSC · CBSE · and many more coming soon
      </div>
    </footer>
  );
}

// ─── Main ─────────────────────────────────────────────────────────────────────
export default function LandingPage({ onJeeMains, isDark, onToggleTheme }) {
  const [activeMenu, setActiveMenu] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef(null);
  const T = isDark ? THEMES.dark : THEMES.light;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    const onClick  = (e) => { if (menuRef.current && !menuRef.current.contains(e.target)) setActiveMenu(null); };
    window.addEventListener("scroll", onScroll, { passive: true });
    document.addEventListener("mousedown", onClick);
    return () => { window.removeEventListener("scroll", onScroll); document.removeEventListener("mousedown", onClick); };
  }, []);

  return (
    <div style={{
      fontFamily: "'Plus Jakarta Sans', 'Inter', system-ui, sans-serif",
      background: T.bg, minHeight: "100vh", color: T.text,
      transition: "background .3s, color .3s",
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');
        * { box-sizing: border-box; }
        body { margin: 0; }
        ::-webkit-scrollbar { width: 5px; height: 5px; }
        ::-webkit-scrollbar-track { background: transparent; }
        ::-webkit-scrollbar-thumb { background: ${T.border}; border-radius: 3px; }
        button { font-family: inherit; }
      `}</style>

      {/* ── Navbar ── */}
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 900,
        background: isDark ? "#0f1117" : "#ffffff",
        borderBottom: `2px solid ${T.navBorder}`,
        padding: "0", height: 60,
        display: "flex", alignItems: "stretch",
      }}>
        <div style={{ width: "100%", display: "flex", alignItems: "stretch", height: "100%" }}>

          {/* Brand */}
          <div style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontSize: 17, fontWeight: 800,
            padding: "0 24px",
            color: T.accent, letterSpacing: -.4, cursor: "default",
            display: "flex", alignItems: "center", flexShrink: 0,
            borderRight: `1px solid ${T.navBorder}`,
          }}>ExamsCalendar</div>

          {/* Nav tabs — each with its own distinct colour, fills full width */}
          <div ref={menuRef} style={{ display: "flex", alignItems: "stretch", flex: 1, position: "relative" }}>
            {NAV_ITEMS.map((item, idx) => {
              const isActive = activeMenu === item.id;
              const idleBg   = isDark ? item.tabColor       : item.tabColorLight;
              const idleText = isDark ? item.tabText        : item.tabTextLight;
              const activeBg = isDark ? item.activeColor    : item.activeColorLight;
              return (
                <div key={item.id} style={{ position: "relative", display: "flex", flex: 1 }}>
                  <button
                    onClick={() => setActiveMenu(isActive ? null : item.id)}
                    style={{
                      display: "flex", alignItems: "center", justifyContent: "center", gap: 6,
                      width: "100%", height: "100%",
                      background: isActive ? activeBg : idleBg,
                      borderBottom: `3px solid ${isActive ? activeBg : idleText + "55"}`,
                      borderTop: "none",
                      borderLeft: `1px solid ${isDark ? "#0f1117" : "#e2e8f0"}`,
                      borderRight: idx === NAV_ITEMS.length - 1
                        ? `1px solid ${isDark ? "#0f1117" : "#e2e8f0"}` : "none",
                      color: isActive ? "#ffffff" : idleText,
                      fontSize: 13, fontWeight: 700,
                      cursor: "pointer",
                      transition: "background .15s, color .15s",
                      whiteSpace: "nowrap",
                    }}
                    onMouseEnter={e => {
                      if (!isActive) {
                        e.currentTarget.style.background = activeBg + "cc";
                        e.currentTarget.style.color = "#ffffff";
                      }
                    }}
                    onMouseLeave={e => {
                      if (!isActive) {
                        e.currentTarget.style.background = idleBg;
                        e.currentTarget.style.color = idleText;
                      }
                    }}
                  >
                    <span style={{ fontSize: 15 }}>{item.icon}</span>
                    {item.label}
                    <span style={{
                      fontSize: 9, opacity: .8, display: "inline-block",
                      transform: isActive ? "rotate(180deg)" : "none",
                      transition: "transform .15s",
                    }}>▾</span>
                  </button>
                  {isActive && (
                    <Dropdown item={item} onJeeMains={onJeeMains} onClose={() => setActiveMenu(null)} T={T} isDark={isDark} />
                  )}
                </div>
              );
            })}
          </div>

          {/* Theme toggle */}
          <div style={{ display: "flex", alignItems: "center", flexShrink: 0, padding: "0 16px", borderLeft: `1px solid ${T.navBorder}` }}>
            <ThemeToggle isDark={isDark} toggle={onToggleTheme} T={T} />
          </div>
        </div>
      </nav>

      <Hero onJeeMains={onJeeMains} T={T} isDark={isDark} />
      <Features onJeeMains={onJeeMains} T={T} isDark={isDark} />
      <WhyUs T={T} isDark={isDark} />
      <Footer T={T} />
    </div>
  );
}