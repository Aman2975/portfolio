"use client";
import { portfolio } from "../data/portfolio";
import { useState } from "react";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const navLinks = ["About", "Skills", "Projects", "Experience", "Education", "Contact"];

  const scrollTo = (id: string) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <main style={{ fontFamily: "'DM Sans', 'Segoe UI', sans-serif", background: "#f8f7f4", minHeight: "100vh", color: "#111" }}>

      {/* Google Font */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600&family=DM+Mono:wght@400;500&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        body { background: #f8f7f4; }

        .nav-link { font-size: 13px; color: #555; cursor: pointer; text-decoration: none; transition: color 0.2s; }
        .nav-link:hover { color: #0f2d6b; }

        .btn-primary { background: #0f2d6b; color: #fff; border: none; padding: 11px 24px; border-radius: 8px; font-size: 14px; font-family: inherit; cursor: pointer; transition: background 0.2s, transform 0.1s; }
        .btn-primary:hover { background: #1a3f8f; transform: translateY(-1px); }

        .btn-outline { background: transparent; color: #0f2d6b; border: 1.5px solid #0f2d6b; padding: 10px 22px; border-radius: 8px; font-size: 14px; font-family: inherit; cursor: pointer; transition: all 0.2s; }
        .btn-outline:hover { background: #0f2d6b; color: #fff; transform: translateY(-1px); }

        .skill-tag { display: inline-block; background: #fff; border: 1px solid #e2e8f0; border-radius: 20px; padding: 4px 12px; font-size: 13px; color: #334155; margin: 3px; }

        .proj-card { background: #fff; border: 1px solid #e8e8e0; border-radius: 14px; padding: 24px; transition: box-shadow 0.2s, transform 0.2s; }
        .proj-card:hover { box-shadow: 0 8px 32px rgba(15,45,107,0.10); transform: translateY(-3px); }

        .proj-tag { display: inline-block; background: #eef2ff; color: #3730a3; border-radius: 20px; padding: 3px 10px; font-size: 12px; margin: 2px; }

        .tl-line { position: absolute; left: 7px; top: 20px; width: 1px; height: calc(100% - 8px); background: #ddd; }

        .edu-card { background: #fff; border: 1px solid #e8e8e0; border-radius: 12px; padding: 20px 22px; }

        .contact-input { width: 100%; padding: 11px 14px; border: 1.5px solid #e2e8f0; border-radius: 8px; font-size: 14px; font-family: inherit; background: #fff; color: #111; outline: none; transition: border-color 0.2s; }
        .contact-input:focus { border-color: #0f2d6b; }

        .social-btn { display: flex; align-items: center; gap: 10px; padding: 12px 16px; border-radius: 10px; border: 1.5px solid #e2e8f0; background: #fff; color: #111; font-size: 14px; font-family: inherit; cursor: pointer; text-decoration: none; transition: all 0.2s; }
        .social-btn:hover { border-color: #0f2d6b; color: #0f2d6b; transform: translateY(-1px); }

        .gold-dot { width: 14px; height: 14px; border-radius: 50%; background: #c9a84c; border: 2px solid #fff; box-shadow: 0 0 0 2px #c9a84c; flex-shrink: 0; margin-top: 4px; }
        .gray-dot { width: 14px; height: 14px; border-radius: 50%; background: #fff; border: 2px solid #ccc; flex-shrink: 0; margin-top: 4px; }

        .section-label { font-size: 11px; letter-spacing: 2px; text-transform: uppercase; color: #c9a84c; font-weight: 500; margin-bottom: 6px; font-family: 'DM Mono', monospace; }

        @keyframes fadeUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        .fade-up { animation: fadeUp 0.6s ease forwards; }
        .fade-up-2 { animation: fadeUp 0.6s 0.15s ease forwards; opacity: 0; }
        .fade-up-3 { animation: fadeUp 0.6s 0.3s ease forwards; opacity: 0; }
        .fade-up-4 { animation: fadeUp 0.6s 0.45s ease forwards; opacity: 0; }

        @media (max-width: 640px) {
          .hero-btns { flex-direction: column; }
          .contact-grid { grid-template-columns: 1fr !important; }
          .proj-grid { grid-template-columns: 1fr !important; }
          .edu-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>

      {/* ── NAVBAR ── */}
      <nav style={{ position: "sticky", top: 0, zIndex: 100, background: "rgba(248,247,244,0.92)", backdropFilter: "blur(12px)", borderBottom: "1px solid #e8e8e0", padding: "14px 32px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "15px", fontWeight: 500, color: "#0f2d6b", letterSpacing: "-0.3px" }}>
        AMANi<span style={{ color: "#c9a84c" }}>.</span>
        </span>
        <div style={{ display: "flex", gap: "24px" }} className="nav-links-desktop">
          {navLinks.map((l) => (
            <span key={l} className="nav-link" onClick={() => scrollTo(l)}>{l}</span>
          ))}
        </div>
        <button className="btn-primary" style={{ padding: "8px 18px", fontSize: "13px" }} onClick={() => window.open(portfolio.resumeUrl)}>
          Resume ↓
        </button>
      </nav>

      {/* ── HERO ── */}
      <section id="about" style={{ padding: "80px 32px 64px", maxWidth: "860px", margin: "0 auto" }}>
        <div className="fade-up" style={{ display: "inline-flex", alignItems: "center", gap: "7px", background: "#fff", border: "1px solid #e8e8e0", borderRadius: "20px", padding: "5px 14px", marginBottom: "24px" }}>
          <span style={{ width: "7px", height: "7px", borderRadius: "50%", background: "#22c55e", display: "inline-block" }}></span>
          <span style={{ fontSize: "12px", color: "#555" }}>Open to internships & jobs · Mohali / Chandigarh</span>
        </div>

        <h1 className="fade-up-2" style={{ fontSize: "clamp(36px, 6vw, 58px)", fontWeight: 600, lineHeight: 1.1, letterSpacing: "-1.5px", color: "#0a0a0a", marginBottom: "12px" }}>
          Hi, I'm<br />
          <span style={{ color: "#0f2d6b" }}>Amandeep Singh</span>
          <span style={{ color: "#c9a84c" }}>.</span>
        </h1>

        <p className="fade-up-3" style={{ fontSize: "18px", color: "#555", marginBottom: "12px", fontWeight: 300 }}>
          Backend Developer · MCA Student
        </p>

        <p className="fade-up-3" style={{ fontSize: "15px", color: "#666", maxWidth: "520px", lineHeight: 1.8, marginBottom: "32px" }}>
          {portfolio.about}
        </p>

        <div className="fade-up-4 hero-btns" style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
          <button className="btn-primary" onClick={() => scrollTo("Projects")}>View Projects →</button>
          <button className="btn-outline" onClick={() => window.open(portfolio.resumeUrl)}>Download Resume</button>
          <button className="btn-outline" style={{ borderColor: "#e2e8f0", color: "#555" }} onClick={() => scrollTo("Contact")}>Contact Me</button>
        </div>
      </section>

      {/* ── SKILLS ── */}
      <section id="skills" style={{ padding: "64px 32px", background: "#fff", borderTop: "1px solid #e8e8e0", borderBottom: "1px solid #e8e8e0" }}>
        <div style={{ maxWidth: "860px", margin: "0 auto" }}>
          <p className="section-label">What I work with</p>
          <h2 style={{ fontSize: "28px", fontWeight: 600, letterSpacing: "-0.5px", marginBottom: "32px" }}>Skills & Stack</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "16px" }}>
            {portfolio.skills.map((s) => (
              <div key={s.category} style={{ border: "1px solid #e8e8e0", borderRadius: "12px", padding: "18px", background: "#f8f7f4" }}>
                <p style={{ fontSize: "11px", fontFamily: "'DM Mono', monospace", color: "#c9a84c", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "10px" }}>{s.category}</p>
                <div>{s.items.map((item) => <span key={item} className="skill-tag">{item}</span>)}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROJECTS ── */}
      <section id="projects" style={{ padding: "64px 32px", maxWidth: "860px", margin: "0 auto" }}>
        <p className="section-label">What I've built</p>
        <h2 style={{ fontSize: "28px", fontWeight: 600, letterSpacing: "-0.5px", marginBottom: "32px" }}>Projects</h2>
        <div className="proj-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "18px" }}>
          {portfolio.projects.map((p) => (
            <div key={p.title} className="proj-card">
              <div style={{ width: "40px", height: "40px", background: "#eef2ff", borderRadius: "10px", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "14px" }}>
                <span style={{ fontSize: "20px" }}>⚙️</span>
              </div>
              <h3 style={{ fontSize: "16px", fontWeight: 600, marginBottom: "8px", letterSpacing: "-0.3px" }}>{p.title}</h3>
              <p style={{ fontSize: "13px", color: "#666", lineHeight: 1.7, marginBottom: "14px" }}>{p.description}</p>
              <div style={{ marginBottom: "16px" }}>{p.tech.map((t) => <span key={t} className="proj-tag">{t}</span>)}</div>
              <div style={{ display: "flex", gap: "10px" }}>
                {p.github && <a href={p.github} target="_blank" rel="noreferrer" style={{ fontSize: "13px", color: "#0f2d6b", textDecoration: "none", display: "flex", alignItems: "center", gap: "4px" }}>⌥ GitHub</a>}
                {p.live && <a href={p.live} target="_blank" rel="noreferrer" style={{ fontSize: "13px", color: "#555", textDecoration: "none" }}>↗ Live</a>}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── EXPERIENCE ── */}
      <section id="experience" style={{ padding: "64px 32px", background: "#fff", borderTop: "1px solid #e8e8e0", borderBottom: "1px solid #e8e8e0" }}>
        <div style={{ maxWidth: "860px", margin: "0 auto" }}>
          <p className="section-label">My journey</p>
          <h2 style={{ fontSize: "28px", fontWeight: 600, letterSpacing: "-0.5px", marginBottom: "36px" }}>Experience</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
            {portfolio.experience.map((exp, i) => (
              <div key={i} style={{ display: "flex", gap: "20px", paddingBottom: "32px", position: "relative" }}>
                {i < portfolio.experience.length - 1 && <div className="tl-line"></div>}
                <div className={exp.current ? "gold-dot" : "gray-dot"}></div>
                <div>
                  <h3 style={{ fontSize: "15px", fontWeight: 600, marginBottom: "2px" }}>{exp.role}</h3>
                  <p style={{ fontSize: "13px", color: "#888", marginBottom: "4px" }}>{exp.company}</p>
                  <p style={{ fontSize: "12px", fontFamily: "'DM Mono', monospace", color: "#c9a84c", marginBottom: "10px" }}>{exp.duration}</p>
                  <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "4px" }}>
                    {exp.points.map((pt, j) => (
                      <li key={j} style={{ fontSize: "13px", color: "#555", paddingLeft: "14px", position: "relative" }}>
                        <span style={{ position: "absolute", left: 0, color: "#c9a84c" }}>›</span> {pt}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── EDUCATION ── */}
      <section id="education" style={{ padding: "64px 32px", maxWidth: "860px", margin: "0 auto" }}>
        <p className="section-label">Academic background</p>
        <h2 style={{ fontSize: "28px", fontWeight: 600, letterSpacing: "-0.5px", marginBottom: "32px" }}>Education</h2>
        <div className="edu-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "14px" }}>
          {portfolio.education.map((e) => (
            <div key={e.degree} className="edu-card">
              <p style={{ fontSize: "12px", fontFamily: "'DM Mono', monospace", color: "#c9a84c", marginBottom: "8px" }}>{e.year}</p>
              <h3 style={{ fontSize: "14px", fontWeight: 600, marginBottom: "4px", lineHeight: 1.4 }}>{e.degree}</h3>
              <p style={{ fontSize: "13px", color: "#888" }}>{e.institute}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact" style={{ padding: "64px 32px", background: "#0f2d6b", borderTop: "1px solid #e8e8e0" }}>
        <div style={{ maxWidth: "860px", margin: "0 auto" }}>
          <p style={{ fontSize: "11px", letterSpacing: "2px", textTransform: "uppercase", color: "#c9a84c", fontWeight: 500, marginBottom: "6px", fontFamily: "'DM Mono', monospace" }}>Get in touch</p>
          <h2 style={{ fontSize: "28px", fontWeight: 600, letterSpacing: "-0.5px", marginBottom: "8px", color: "#fff" }}>Let's Connect</h2>
          <p style={{ fontSize: "14px", color: "#94a3b8", marginBottom: "36px" }}>Open to backend internships and full-time roles in Mohali & Chandigarh .</p>
          <div className="contact-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "28px" }}>
            <div>
              {sent ? (
                <div style={{ background: "rgba(255,255,255,0.08)", borderRadius: "12px", padding: "28px", textAlign: "center", color: "#fff" }}>
                  <p style={{ fontSize: "22px", marginBottom: "8px" }}>✅</p>
                  <p style={{ fontWeight: 600, marginBottom: "4px" }}>Message sent!</p>
                  <p style={{ fontSize: "13px", color: "#94a3b8" }}>I'll get back to you soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSend} style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                  <input className="contact-input" placeholder="Your name" value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })} required />
                  <input className="contact-input" type="email" placeholder="Your email" value={formData.email} onChange={e => setFormData({ ...formData, email: e.target.value })} required />
                  <textarea className="contact-input" placeholder="Your message..." rows={4} value={formData.message} onChange={e => setFormData({ ...formData, message: e.target.value })} required style={{ resize: "none" }} />
                  <button type="submit" className="btn-primary" style={{ background: "#c9a84c", color: "#0f2d6b", fontWeight: 600 }}>Send Message →</button>
                </form>
              )}
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              <a href={portfolio.github} target="_blank" rel="noreferrer" className="social-btn">
                <span style={{ fontSize: "18px" }}>⌥</span> {portfolio.github.replace("https://", "")}
              </a>
              <a href={portfolio.linkedin} target="_blank" rel="noreferrer" className="social-btn">
                <span style={{ fontSize: "18px" }}>in</span> {portfolio.linkedin.replace("https://", "")}
              </a>
              <a href={`mailto:${portfolio.email}`} className="social-btn">
                <span style={{ fontSize: "18px" }}>✉</span> {portfolio.email}
              </a>
              <button className="btn-outline" style={{ borderColor: "#c9a84c", color: "#c9a84c", marginTop: "8px", justifyContent: "center" }} onClick={() => window.open(portfolio.resumeUrl)}>
                ↓ Download Resume
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{ padding: "20px 32px", background: "#091d47", textAlign: "center" }}>
        <p style={{ fontSize: "12px", color: "#475569", fontFamily: "'DM Mono', monospace" }}>
          © 2026 Amandeep Singh
        </p>
      </footer>
    </main>
  );
}
