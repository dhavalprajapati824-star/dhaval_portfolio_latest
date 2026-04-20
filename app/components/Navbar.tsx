"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import ThemeToggle from "./ThemeToggle";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50); 
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <motion.nav
      initial={{ y: -70, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 500,
        padding: "1.1rem 3rem",
        background: scrolled ? "var(--glass)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? "1px solid var(--border2)" : "none",
        transition: "all 0.4s ease",
        display: "flex", justifyContent: "space-between", alignItems: "center",
      }}
    >
      {/* Logo */}
      <motion.a href="#" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: "0.5rem" }}>
        <span style={{
          fontFamily: "var(--font-display)",
          fontSize: "1.4rem", fontWeight: 600, fontStyle: "italic",
          color: "var(--text)",
          letterSpacing: "-0.01em",
        }}>
          Dhaval<span style={{ color: "var(--accent)" }}>.</span>
        </span>
      </motion.a>

      {/* Desktop nav */}
      <div style={{ display: "flex", gap: "2.5rem", alignItems: "center" }} className="hidden md:flex">
        {navItems.map((item, i) => (
          <motion.a key={item.label} href={item.href}
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * i + 0.3 }}
            style={{
              color: "var(--text-muted)", textDecoration: "none",
              fontFamily: "var(--font-mono)", fontSize: "0.7rem",
              letterSpacing: "0.08em", transition: "color 0.2s",
            }}
            onMouseEnter={e => (e.currentTarget.style.color = "var(--accent)")}
            onMouseLeave={e => (e.currentTarget.style.color = "var(--text-muted)")}
          >
            {item.label}
          </motion.a>
        ))}

        {/* <ThemeToggle /> */}

        <motion.a
          href="mailto:dhaval.prajapati.824@gmail.com"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }}
          style={{
            padding: "0.48rem 1.25rem",
            border: "1px solid var(--accent)",
            color: "var(--accent)",
            textDecoration: "none", borderRadius: "3px",
            fontFamily: "var(--font-mono)",
            fontSize: "0.7rem", letterSpacing: "0.08em",
            transition: "all 0.25s",
          }}
          onMouseEnter={e => {
            e.currentTarget.style.background = "var(--accent)";
            e.currentTarget.style.color = "var(--bg)";
          }}
          onMouseLeave={e => {
            e.currentTarget.style.background = "transparent";
            e.currentTarget.style.color = "var(--accent)";
          }}
        >
          Hire Me
        </motion.a>
      </div>

      {/* Mobile burger */}
      <div style={{ display: "flex", alignItems: "center", gap: "1rem" }} className="flex md:hidden">
        <ThemeToggle />
        <button onClick={() => setMenuOpen(!menuOpen)}
          style={{ background: "none", border: "none", cursor: "pointer", padding: 4, display: "flex", flexDirection: "column", gap: 5 }}>
          {[0,1,2].map(i => (
            <span key={i} style={{ display: "block", width: 22, height: 1.5, background: "var(--text)", borderRadius: 2, transition: "all 0.3s" }} />
          ))}
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
            style={{
              position: "fixed", top: 60, left: 0, right: 0,
              background: "var(--glass)", backdropFilter: "blur(20px)",
              padding: "2rem 3rem", display: "flex", flexDirection: "column", gap: "1.5rem",
              borderBottom: "1px solid var(--border2)",
            }} className="md:hidden"
          >
            {navItems.map(item => (
              <a key={item.label} href={item.href} onClick={() => setMenuOpen(false)}
                style={{
                  color: "var(--text)", textDecoration: "none",
                  fontSize: "1.1rem", fontFamily: "var(--font-sans)", fontWeight: 600,
                  transition: "color 0.2s",
                }}
                onMouseEnter={e => e.currentTarget.style.color = "var(--accent)"}
                onMouseLeave={e => e.currentTarget.style.color = "var(--text)"}
              >
                {item.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

function AnimatePresence({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
