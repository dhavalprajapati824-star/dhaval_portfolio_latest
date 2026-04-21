"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y       = useTransform(scrollYProgress, [0, 1],    [0, 140]);
  const opacity = useTransform(scrollYProgress, [0, 0.65], [1, 0]);

  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return (
    <section ref={ref} style={{
      minHeight: "100vh",
      background: "var(--bg)",
      position: "relative", overflow: "hidden",
      display: "flex", alignItems: "center",
    }}>
      {/* Radial glow top-right */}
      <div style={{
        position: "absolute", top: "15%", left: "55%",
        width: 700, height: 700,
        background: "radial-gradient(circle, rgba(var(--accent-rgb),0.08) 0%, transparent 65%)",
        borderRadius: "50%", filter: "blur(30px)", pointerEvents: "none",
      }} />

      {/* Radial glow bottom-left */}
      <motion.div
        animate={{ scale: [1, 1.12, 1], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        style={{
          position: "absolute", bottom: "10%", left: "10%",
          width: 400, height: 400,
          background: "radial-gradient(circle, rgba(123,159,204,0.07) 0%, transparent 70%)",
          borderRadius: "50%", filter: "blur(24px)", pointerEvents: "none",
        }}
      />

      {/* Decorative grid */}
      <div style={{
        position: "absolute", inset: 0,
        backgroundImage: "linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)",
        backgroundSize: "72px 72px",
        maskImage: "radial-gradient(ellipse 75% 75% at 50% 50%, black 30%, transparent 100%)",
        pointerEvents: "none",
      }} />

      {/* Ghost letters — hidden on mobile to avoid overflow */}
      {!isMobile && (
        <div style={{
          position: "absolute", right: "-4%", top: "-8%",
          fontFamily: "var(--font-display)",
          fontSize: "clamp(240px, 38vw, 480px)",
          fontWeight: 700, color: "rgba(var(--accent-rgb),0.03)",
          lineHeight: 1, userSelect: "none", pointerEvents: "none",
          letterSpacing: "-0.06em",
        }}>QA</div>
      )}

      {/* Content */}
      <motion.div style={{
        y, opacity,
        padding: isMobile ? "0 1.5rem" : "0 3rem",
        paddingTop: isMobile ? "6rem" : "7rem",
        paddingBottom: isMobile ? "4rem" : "0",
        maxWidth: 1100, width: "100%", margin: "0 auto",
        position: "relative", zIndex: 2,
      }}>

        {/* Status badge */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          style={{
            display: "inline-flex", alignItems: "center", gap: "0.6rem",
            padding: "0.35rem 0.9rem",
            border: "1px solid var(--border2)",
            borderRadius: "3px", background: "var(--surface)",
            marginBottom: "2rem",
            maxWidth: "100%", overflow: "hidden",
          }}
        >
          <span style={{
            width: 7, height: 7, borderRadius: "50%", flexShrink: 0,
            background: "var(--green)", display: "inline-block",
            boxShadow: "0 0 8px var(--green)",
          }} />
          <span style={{
            fontFamily: "var(--font-mono)",
            fontSize: isMobile ? "0.58rem" : "0.65rem",
            letterSpacing: "0.12em", textTransform: "uppercase",
            color: "var(--text-muted)",
            whiteSpace: isMobile ? "normal" : "nowrap",
          }}>
            Sr. Quality Analyst · Open to Opportunities
          </span>
        </motion.div>

        {/* Main heading */}
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
          style={{ marginBottom: "1.2rem" }}
        >
          <span style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(2.6rem, 8.5vw, 7.2rem)",
            fontWeight: 300, lineHeight: 0.93, display: "block",
            color: "var(--text)", letterSpacing: "-0.03em",
          }}>Hi, I'm</span>
          <span style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(2.6rem, 8.5vw, 7.2rem)",
            fontWeight: 700, lineHeight: 0.93, display: "block",
            color: "var(--accent)", letterSpacing: "-0.03em", fontStyle: "italic",
          }}>Dhaval Prajapati</span>
        </motion.h1>

        {/* Divider rule */}
        <motion.div
          initial={{ scaleX: 0 }} animate={{ scaleX: 1 }}
          transition={{ delay: 0.85, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          style={{
            height: 1, background: "var(--border2)",
            transformOrigin: "left", maxWidth: 560, marginBottom: "1.8rem",
          }}
        />

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.95 }}
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: "clamp(0.9rem, 2.2vw, 1.15rem)",
            color: "var(--text-muted)",
            maxWidth: 500, lineHeight: 1.75,
            marginBottom: "2.5rem", fontStyle: "italic",
          }}
        >
          and I'm a{" "}
          <strong style={{ color: "var(--text)", fontStyle: "normal" }}>Quality Analyst</strong>
          {" "}with 8+ years ensuring product excellence across software, mobile apps, and web technologies.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1 }}
          style={{
            display: "flex", gap: "0.85rem", flexWrap: "wrap",
            flexDirection: isMobile ? "column" : "row",
            maxWidth: isMobile ? 320 : "none",
          }}
        >
          <a href="#contact" style={{
            padding: "0.85rem 2rem",
            background: "var(--accent)", color: "var(--bg)",
            textDecoration: "none", borderRadius: "3px",
            fontFamily: "var(--font-sans)",
            fontWeight: 700, fontSize: "0.85rem", letterSpacing: "0.04em",
            transition: "all 0.25s", display: "inline-block",
            textAlign: "center",
          }}
            onMouseEnter={e => { e.currentTarget.style.opacity = "0.85"; e.currentTarget.style.transform = "translateY(-2px)"; }}
            onMouseLeave={e => { e.currentTarget.style.opacity = "1";    e.currentTarget.style.transform = "translateY(0)"; }}
          >
            Email Me →
          </a>
          <a href="#skills" style={{
            padding: "0.85rem 2rem",
            border: "1px solid var(--border2)",
            color: "var(--text)", textDecoration: "none", borderRadius: "3px",
            fontFamily: "var(--font-sans)",
            fontWeight: 600, fontSize: "0.85rem", letterSpacing: "0.04em",
            transition: "all 0.25s", display: "inline-block",
            textAlign: "center",
          }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = "var(--accent)"; e.currentTarget.style.color = "var(--accent)"; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--border2)"; e.currentTarget.style.color = "var(--text)"; }}
          >
            View Skills
          </a>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.35 }}
          style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "repeat(2, 1fr)" : "repeat(4, auto)",
            gap: isMobile ? "1.5rem 2rem" : "0 3rem",
            marginTop: isMobile ? "3rem" : "5rem",
            paddingTop: "2.2rem",
            borderTop: "1px solid var(--border)",
            width: "fit-content",
            maxWidth: "100%",
          }}
        >
          {[["8+", "Years Exp."], ["2", "Companies"], ["13+", "Skills"], ["100%", "Commitment"]].map(([v, l]) => (
            <div key={l}>
              <div style={{
                fontFamily: "var(--font-display)",
                fontSize: isMobile ? "2.2rem" : "2.8rem",
                fontWeight: 700, color: "var(--accent)", lineHeight: 1,
              }}>{v}</div>
              <div style={{
                fontFamily: "var(--font-mono)", fontSize: "0.56rem",
                color: "var(--text-muted)", letterSpacing: "0.12em",
                textTransform: "uppercase", marginTop: "0.3rem",
              }}>{l}</div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Bottom fade */}
      <div style={{
        position: "absolute", bottom: 0, left: 0, right: 0, height: 120,
        background: "linear-gradient(to bottom, transparent, var(--bg))",
        pointerEvents: "none",
      }} />
    </section>
  );
}
