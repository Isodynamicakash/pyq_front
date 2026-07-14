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
const NAV_ITEMS = [];

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
  const liveColor = isDark ? "#93b4fd" : "#2563eb";
  const liveBg    = isDark ? "#1a2654" : "#eff6ff";
  const liveBorder = isDark ? "#2d4080" : "#bfdbfe";

  return (
    <div style={{
      position: "fixed", top: 64, left: "50%", transform: "translateX(-50%)",
      background: T.bgCard,
      border: `1px solid ${T.border}`,
      borderRadius: 14, padding: 16,
      boxShadow: T.dropShadow,
      zIndex: 2000, animation: "dropIn .16s cubic-bezier(.4,0,.2,1)",
      minWidth: Math.min(520, window.innerWidth - 32),
      maxWidth: "92vw",
    }}>
      <style>{`@keyframes dropIn{from{opacity:0;transform:translateX(-50%) translateY(-6px)}to{opacity:1;transform:translateX(-50%) translateY(0)}}`}</style>
      <div style={{
        fontSize: 11, fontWeight: 700, letterSpacing: 1.4, color: T.textMuted,
        textTransform: "uppercase", marginBottom: 14, paddingBottom: 10,
        borderBottom: `1px solid ${T.border}`,
      }}>Previous Year Questions</div>
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))",
        gap: 6,
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
                onClick={() => { onJeeMains(s.id); onClose(); }}
                style={{
                  display: "flex", alignItems: "center", gap: 8,
                  width: "100%", padding: "9px 10px",
                  background: "none", border: `1px solid transparent`, borderRadius: 10,
                  cursor: "pointer", textAlign: "left",
                  transition: "background .1s, border-color .1s",
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = liveBg;
                  e.currentTarget.style.borderColor = liveBorder;
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = "none";
                  e.currentTarget.style.borderColor = "transparent";
                }}
              >
                <span style={{ fontSize: 16 }}>{s.icon}</span>
                <span style={{ fontSize: 13, fontWeight: 600, flex: 1, color: T.text }}>{s.label}</span>
                <span style={{
                  fontSize: 9, fontWeight: 700, padding: "1px 7px", borderRadius: 20,
                  background: liveBg, color: liveColor,
                  border: `1px solid ${liveBorder}`, letterSpacing: .6,
                }}>LIVE</span>
              </button>
            ))}
          </div>
        ))}
      </div>
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
        JEE Mains · JEE Advanced · NEET · SSC CGL · CUET — Live Now
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
        Free previous year questions for JEE, NEET, SSC and CUET —
        fully searchable with complete solutions.
      </p>

      {/* CTA row */}
      <div style={{ ...anim(.3), display: "flex", gap: 10, flexWrap: "wrap", justifyContent: "center" }}>
        {[
          { label: "JEE Mains",    id: "jee-mains", bg: "#2563eb", shadow: "rgba(37,99,235,.35)",  hover: "#1d4ed8" },
          { label: "JEE Advanced", id: "jee-adv",   bg: "#7c3aed", shadow: "rgba(124,58,237,.35)", hover: "#6d28d9" },
          { label: "NEET",         id: "neet",       bg: "#16a34a", shadow: "rgba(22,163,74,.35)",  hover: "#15803d" },
          { label: "SSC CGL",      id: "ssc-cgl",   bg: "#d97706", shadow: "rgba(217,119,6,.35)",   hover: "#b45309" },
          { label: "CUET",         id: "cuet",      bg: "#db2777", shadow: "rgba(219,39,119,.35)",  hover: "#be185d" },
        ].map(btn => (
          <button key={btn.id} onClick={() => onJeeMains(btn.id)} style={{
            padding: "12px 28px", borderRadius: 10, fontSize: 14, fontWeight: 700,
            background: btn.bg, border: "none", color: "#ffffff", cursor: "pointer",
            boxShadow: `0 4px 20px ${btn.shadow}`,
            letterSpacing: .2, transition: "background .15s, box-shadow .15s, transform .15s",
          }}
            onMouseEnter={e => { e.currentTarget.style.background = btn.hover; e.currentTarget.style.transform = "translateY(-1px)"; e.currentTarget.style.boxShadow = `0 8px 28px ${btn.shadow}`; }}
            onMouseLeave={e => { e.currentTarget.style.background = btn.bg; e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = `0 4px 20px ${btn.shadow}`; }}
          >
            {btn.label} →
          </button>
        ))}
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
          { num: "50,000+", label: "PYQs" },
          { num: "10+",    label: "Years Covered" },
          { num: "100%",   label: "Free to Use" },
          { num: "5",      label: "Exam Categories" },
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
    { icon: "🎯", title: "JEE Mains PYQs",   desc: "10+ years of questions with complete solutions. Filter by chapter, topic, difficulty and question type.", onClick: () => onJeeMains("jee-mains") },
    { icon: "🏆", title: "JEE Advanced PYQs", desc: "Complete JEE Advanced previous year papers. Filter by subject, chapter, topic and year.",                onClick: () => onJeeMains("jee-adv") },
    { icon: "🩺", title: "NEET PYQs",         desc: "Complete NEET previous year papers with detailed solutions. Filter by subject, chapter, topic and year.", onClick: () => onJeeMains("neet") },
    { icon: "📋", title: "SSC CGL PYQs",      desc: "SSC CGL Tier I previous year papers across all 4 subjects. Filter by shift, chapter and more.",          onClick: () => onJeeMains("ssc-cgl") },
    { icon: "🎓", title: "CUET PYQs",         desc: "CUET UG previous year papers across all 15 domain subjects, NCERT Class XII syllabus. Filter by subject, chapter and topic.", onClick: () => onJeeMains("cuet") },
  ];

  return (
    <div style={{ position: "relative", zIndex: 1, padding: "0 24px 80px", maxWidth: 1160, margin: "0 auto" }}>
      <SectionHeader
        eyebrow="Live Now"
        title="Browse previous year questions"
        sub="Fully searchable and filterable PYQ banks — free for every student."
        T={T}
      />
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 16 }}>
        {cards.map((c, i) => (
          <div key={c.title}
            onClick={c.onClick}
            style={{
              background: T.bgCard,
              border: `1px solid ${isDark ? "#2d4080" : "#bfdbfe"}`,
              borderRadius: 16, padding: "28px 24px 24px",
              cursor: "pointer",
              transition: "transform .18s, box-shadow .18s, border-color .18s",
              animation: "fadeUp .45s ease both",
              animationDelay: `${i * .08}s`,
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = "translateY(-4px)";
              e.currentTarget.style.boxShadow = isDark ? "0 16px 40px rgba(37,99,235,.2)" : "0 12px 32px rgba(37,99,235,.12)";
              e.currentTarget.style.borderColor = isDark ? "#4f7ef8" : "#93c5fd";
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "none";
              e.currentTarget.style.borderColor = isDark ? "#2d4080" : "#bfdbfe";
            }}
          >
            <div style={{ fontSize: 30, marginBottom: 16 }}>{c.icon}</div>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
              <h3 style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: 17, fontWeight: 700, color: T.text, margin: 0,
              }}>{c.title}</h3>
              <span style={{
                fontSize: 10, fontWeight: 700, padding: "2px 8px", borderRadius: 6,
                background: isDark ? "#1a2654" : "#eff6ff",
                color: isDark ? "#93b4fd" : "#2563eb",
                border: `1px solid ${isDark ? "#2d4080" : "#bfdbfe"}`,
                letterSpacing: .5, flexShrink: 0,
              }}>LIVE</span>
            </div>
            <p style={{ fontSize: 14, color: T.textSub, lineHeight: 1.65, margin: "0 0 18px" }}>{c.desc}</p>
            <div style={{ fontSize: 13, fontWeight: 600, color: isDark ? "#4f7ef8" : "#2563eb", display: "flex", alignItems: "center", gap: 4 }}>
              Browse questions <span>→</span>
            </div>
          </div>
        ))}
      </div>
      <style>{`@keyframes fadeUp{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}`}</style>
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
      <div style={{ fontSize: 13, color: T.textMuted }}>
        Free PYQs for JEE · JEE Advanced · NEET · SSC CGL · CUET
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
      <Footer T={T} />
    </div>
  );
      }
