import React, { useState, useEffect } from "react";
import { createRoot } from "react-dom/client";
import { Analytics } from "@vercel/analytics/react";
import AdminReview from "./components/AdminReview";
import QuestionBrowser from "./components/QuestionBrowser";
import LandingPage from "./components/LandingPage";

const API_BASE       = import.meta.env.VITE_API_BASE       || "http://localhost:8000";
const ADMIN_KEY      = import.meta.env.VITE_ADMIN_KEY      || "";
const ADMIN_PASSWORD = import.meta.env.VITE_ADMIN_PASSWORD || "admin123";

// ─── Helpers ──────────────────────────────────────────────────────────────────
function parsePath(pathname) {
  if (pathname === "/admin")          return { page: "admin",   examId: null };
  if (pathname.startsWith("/pyq/"))   return { page: "pyq",     examId: pathname.replace("/pyq/", "") || "jee-mains" };
  if (pathname === "/pyq")            return { page: "pyq",     examId: "jee-mains" };
  return { page: "landing", examId: null };
}

function navigate(path) {
  window.history.pushState({}, "", path);
  window.dispatchEvent(new PopStateEvent("popstate"));
}

// ─── AdminGate ────────────────────────────────────────────────────────────────
function AdminGate() {
  const [input,  setInput]  = useState("");
  const [error,  setError]  = useState(false);
  const [authed, setAuthed] = useState(
    sessionStorage.getItem("admin_authed") === "yes"
  );
  const submit = (e) => {
    e.preventDefault();
    if (input === ADMIN_PASSWORD) {
      sessionStorage.setItem("admin_authed", "yes");
      setAuthed(true); setError(false);
    } else { setError(true); setInput(""); }
  };
  if (authed) return <AdminReview apiBase={API_BASE} adminKey={ADMIN_KEY} />;
  return (
    <div style={{ minHeight:"100vh", background:"#0a0f1e", display:"flex", alignItems:"center", justifyContent:"center", fontFamily:"system-ui,sans-serif" }}>
      <div style={{ background:"#0f1729", border:"1px solid #1e2d4a", borderRadius:12, padding:"40px 48px", width:340, display:"flex", flexDirection:"column", gap:16 }}>
        <div style={{ color:"#e8edf8", fontWeight:700, fontSize:18, marginBottom:4 }}>Admin Access</div>
        <form onSubmit={submit} style={{ display:"flex", flexDirection:"column", gap:12 }}>
          <input type="password" value={input} onChange={e=>{ setInput(e.target.value); setError(false); }} placeholder="Enter admin password" autoFocus
            style={{ padding:"10px 14px", borderRadius:8, fontSize:14, background:"#141d35", border:`1px solid ${error?"#ff4757":"#1e2d4a"}`, color:"#e8edf8", outline:"none" }} />
          {error && <span style={{ color:"#ff4757", fontSize:12 }}>Incorrect password</span>}
          <button type="submit" style={{ padding:"10px", borderRadius:8, fontSize:14, fontWeight:600, background:"#3b7eff", border:"none", color:"#fff", cursor:"pointer" }}>Enter</button>
        </form>
      </div>
    </div>
  );
}

// ─── App ──────────────────────────────────────────────────────────────────────
function App() {
  const [route, setRoute] = useState(() => parsePath(window.location.pathname));

  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem("ec_theme");
    return saved !== null ? saved === "dark" : true;
  });

  const toggleTheme = () => {
    setIsDark(prev => {
      const next = !prev;
      localStorage.setItem("ec_theme", next ? "dark" : "light");
      return next;
    });
  };

  const trackPageView = (path) => {
    if (typeof window.gtag !== "function") return;
    window.gtag("config", "G-TBZZSLN2TK", { page_path: path });
  };

  useEffect(() => {
    trackPageView(window.location.pathname);
    const fn = () => {
      setRoute(parsePath(window.location.pathname));
      trackPageView(window.location.pathname);
    };
    window.addEventListener("popstate", fn);
    return () => window.removeEventListener("popstate", fn);
  }, []);

  const goTo = (pathname) => navigate(pathname);

  const goToPyq = (id) => {
    const slug = id || "jee-mains";
    navigate(`/pyq/${slug}`);
  };

  const { page, examId } = route;

  if (page === "admin") return <><AdminGate /><Analytics /></>;
  if (page === "pyq")   return (
    <>
      <QuestionBrowser
        apiBase={API_BASE}
        onBack={() => navigate("/")}
        isDark={isDark}
        onToggleTheme={toggleTheme}
        examId={examId}
      />
      <Analytics />
    </>
  );
  return (
    <>
      <LandingPage onJeeMains={goToPyq} isDark={isDark} onToggleTheme={toggleTheme} />
      <Analytics />
    </>
  );
}

createRoot(document.getElementById("root")).render(<App />);
