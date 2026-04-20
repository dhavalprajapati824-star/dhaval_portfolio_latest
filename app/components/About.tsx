"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" style={{ padding: "9rem 3rem", background: "var(--bg2)" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }} ref={ref}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "center" }} className="about-grid">

          {/* Left: decorative photo frame */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            style={{ position: "relative" }}
          >
            {/* Offset border */}
            <div style={{
              position: "absolute", top: "1.4rem", left: "1.4rem",
              width: "100%", height: "100%",
              border: "1px solid var(--accent)",
              borderRadius: "4px", zIndex: 0, opacity: 0.3,
            }} />

            <div style={{
              position: "relative", zIndex: 1,
              background: "var(--surface)",
              border: "1px solid var(--border2)",
              borderRadius: "4px",
              aspectRatio: "4/5",
              display: "flex", alignItems: "center", justifyContent: "center",
              overflow: "hidden",
            }}>
              {/* Radial glow inside card */}
              <div style={{
                position: "absolute", inset: 0,
                background: `radial-gradient(circle at 50% 40%, rgba(var(--accent-rgb),0.07) 0%, transparent 65%)`,
              }} />

              <div style={{ textAlign: "center", position: "relative" }}>
                <div style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "7rem", fontWeight: 700,
                  color: "var(--accent)", lineHeight: 1, opacity: 0.18,
                }}>DP</div>
                <p style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.6rem", color: "var(--text-muted)",
                  letterSpacing: "0.18em", marginTop: "0.8rem",
                }}>DHAVAL PRAJAPATI</p>
              </div>

              {/* Badge */}
              <div style={{
                position: "absolute", bottom: "1.5rem", left: "1.5rem",
                padding: "0.45rem 0.9rem",
                background: "var(--accent)", color: "var(--bg)",
                fontFamily: "var(--font-mono)",
                fontWeight: 600, fontSize: "0.65rem",
                letterSpacing: "0.08em",
                borderRadius: "3px",
              }}>
                Senior Quality Analyst
              </div>
            </div>
          </motion.div>

          {/* Right */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
              style={{
                fontFamily: "var(--font-mono)", fontSize: "0.65rem",
                letterSpacing: "0.18em", textTransform: "uppercase",
                color: "var(--accent)", marginBottom: "1.2rem",
              }}
            >01 — About Me</motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2rem, 4vw, 3.4rem)",
                fontWeight: 700, color: "var(--text)",
                lineHeight: 1.06, letterSpacing: "-0.02em",
                marginBottom: "1.5rem",
              }}
            >
              Ensuring Quality,<br />
              <em style={{ color: "var(--accent)" }}>Every Release</em>
            </motion.h2>

            {[
              `With over 8+ years of experience in quality assurance, I excel at ensuring product excellence and customer satisfaction. Skilled in manual testing across software, mobile apps, and web technologies.`,
              `Known for analytical prowess, attention to detail, and ability to collaborate with cross-functional teams — passionate about continuous improvement and staying current with industry trends.`,
            ].map((para, i) => (
              <motion.p key={i}
                initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 + i * 0.1 }}
                style={{
                  color: i === 0 ? "var(--text-muted)" : "var(--text-muted)",
                  lineHeight: 1.8, fontSize: "0.95rem",
                  marginBottom: "1rem", opacity: i === 1 ? 0.8 : 1,
                }}
              >{para}</motion.p>
            ))}

            {/* Tags */}
            <motion.div
              initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.65 }}
              style={{ display: "flex", gap: "0.6rem", flexWrap: "wrap", marginTop: "0.5rem" }}
            >
              {["Manual Testing", "API Testing", "Bug Tracking", "QA Strategy", "Cross-team Collaboration"].map(tag => (
                <span key={tag} style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.62rem", color: "var(--accent)",
                  padding: "0.3rem 0.75rem",
                  border: "1px solid var(--border2)",
                  background: "var(--surface)",
                  borderRadius: "3px", letterSpacing: "0.04em",
                }}>
                  {tag}
                </span>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
      <style>{`@media(max-width:768px){ .about-grid{ grid-template-columns:1fr !important; gap:3rem !important; } }`}</style>
    </section>
  );
}
