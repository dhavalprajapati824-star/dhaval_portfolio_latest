"use client";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer style={{
      padding: "2rem 3rem",
      background: "var(--bg)",
      borderTop: "1px solid var(--border2)",
      display: "flex", justifyContent: "space-between",
      alignItems: "center", flexWrap: "wrap", gap: "1rem",
    }}>
      <span style={{
        fontFamily: "var(--font-display)", fontSize: "1.2rem",
        fontStyle: "italic", color: "var(--text)",
      }}>
        Dhaval<span style={{ color: "var(--accent)" }}>.</span>
      </span>
      <span style={{
        fontFamily: "var(--font-mono)", fontSize: "0.6rem",
        color: "var(--text-muted)", letterSpacing: "0.1em",
      }}>
        © {new Date().getFullYear()} Dhaval Prajapati — Sr. Quality Analyst
      </span>
      <motion.a href="#"
        onClick={e => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
        whileHover={{ y: -2 }}
        style={{
          fontFamily: "var(--font-mono)", fontSize: "0.6rem",
          color: "var(--text-muted)", textDecoration: "none",
          letterSpacing: "0.1em", transition: "color 0.2s",
        }}
        onMouseEnter={e => e.currentTarget.style.color = "var(--accent)"}
        onMouseLeave={e => e.currentTarget.style.color = "var(--text-muted)"}
      >
        ↑ Back to top
      </motion.a>
    </footer>
  );
}
