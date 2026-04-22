"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import ThemeToggle from "./ThemeToggle";

const navItems = [
  { label: "About",      href: "#about"      },
  { label: "Skills",     href: "#skills"     },
  { label: "Projects",   href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact",    href: "#contact"    },
];

export default function Navbar() {
  const [scrolled,  setScrolled]  = useState(false);
  const [menuOpen,  setMenuOpen]  = useState(false);
  const [isMobile,  setIsMobile]  = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menu when switching to desktop
  useEffect(() => {
    if (!isMobile) setMenuOpen(false);
  }, [isMobile]);

  return (
    <>
      <motion.nav
        initial={{ y: -70, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        style={{
          position: "fixed", top: 0, left: 0, right: 0, zIndex: 500,
          padding: isMobile ? "1rem 1.5rem" : "1.1rem 3rem",
          background: scrolled || menuOpen ? "var(--glass)" : "transparent",
          backdropFilter: scrolled || menuOpen ? "blur(20px)" : "none",
          borderBottom: scrolled || menuOpen ? "1px solid var(--border2)" : "none",
          transition: "all 0.4s ease",
          display: "flex", justifyContent: "space-between", alignItems: "center",
        }}
      >
        {/* ── Logo ─────────────────────────────────── */}
        <a href="#" style={{ textDecoration: "none" }}>
          <span style={{
            fontFamily: "var(--font-display)",
            fontSize: "1.4rem", fontWeight: 600, fontStyle: "italic",
            color: "var(--text)", letterSpacing: "-0.01em",
          }}>
            Dhaval<span style={{ color: "var(--accent)" }}>.</span>
          </span>
        </a>

        {/* ── Desktop nav (≥ 768 px) ────────────────── */}
        {!isMobile && (
          <div style={{ display: "flex", gap: "2.5rem", alignItems: "center" }}>
            {navItems.map((item, i) => (
              <motion.a
                key={item.label}
                href={item.href}
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

            <ThemeToggle />

            <a
              href="mailto:dhaval.prajapati.824@gmail.com"
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
            </a>
          </div>
        )}

        {/* ── Mobile right side: toggle + burger (< 768 px) ── */}
        {isMobile && (
          <div style={{ display: "flex", alignItems: "center", gap: "0.85rem" }}>
            <ThemeToggle />

            <button
              onClick={() => setMenuOpen(o => !o)}
              aria-label="Toggle menu"
              style={{
                background: "none", border: "none", cursor: "pointer",
                padding: "4px", display: "flex", flexDirection: "column",
                gap: 5, justifyContent: "center",
              }}
            >
              {/* Animated burger → X */}
              <motion.span
                animate={menuOpen
                  ? { rotate: 45, y: 6.5, width: 22 }
                  : { rotate: 0,  y: 0,   width: 22 }}
                style={{ display: "block", height: 1.5, background: "var(--text)", borderRadius: 2, transformOrigin: "center" }}
              />
              <motion.span
                animate={{ opacity: menuOpen ? 0 : 1, scaleX: menuOpen ? 0 : 1 }}
                style={{ display: "block", width: 22, height: 1.5, background: "var(--text)", borderRadius: 2 }}
              />
              <motion.span
                animate={menuOpen
                  ? { rotate: -45, y: -6.5, width: 22 }
                  : { rotate: 0,   y: 0,    width: 22 }}
                style={{ display: "block", height: 1.5, background: "var(--text)", borderRadius: 2, transformOrigin: "center" }}
              />
            </button>
          </div>
        )}
      </motion.nav>

      {/* ── Mobile dropdown menu ─────────────────────── */}
      <AnimatePresence>
        {isMobile && menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            style={{
              position: "fixed",
              top: 58,           /* sits just below the navbar */
              left: 0, right: 0,
              zIndex: 499,
              background: "var(--glass)",
              backdropFilter: "blur(24px)",
              borderBottom: "1px solid var(--border2)",
              padding: "1.5rem",
              display: "flex", flexDirection: "column", gap: "0.25rem",
            }}
          >
            {navItems.map((item, i) => (
              <motion.a
                key={item.label}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.06 }}
                style={{
                  color: "var(--text)", textDecoration: "none",
                  fontFamily: "var(--font-sans)", fontWeight: 600,
                  fontSize: "1.05rem", letterSpacing: "0.02em",
                  padding: "0.85rem 0.5rem",
                  borderBottom: "1px solid var(--border)",
                  display: "flex", justifyContent: "space-between", alignItems: "center",
                  transition: "color 0.2s",
                }}
                onMouseEnter={e => e.currentTarget.style.color = "var(--accent)"}
                onMouseLeave={e => e.currentTarget.style.color = "var(--text)"}
              >
                {item.label}
                <span style={{ color: "var(--accent)", fontSize: "0.75rem" }}>→</span>
              </motion.a>
            ))}

            {/* CTA inside mobile menu */}
            <a
              href="mailto:dhaval.prajapati.824@gmail.com"
              onClick={() => setMenuOpen(false)}
              style={{
                marginTop: "1rem",
                padding: "0.85rem 1.2rem",
                background: "var(--accent)", color: "var(--bg)",
                textDecoration: "none", borderRadius: "3px",
                fontFamily: "var(--font-mono)", fontWeight: 700,
                fontSize: "0.75rem", letterSpacing: "0.08em",
                textAlign: "center",
                transition: "opacity 0.2s",
              }}
              onMouseEnter={e => e.currentTarget.style.opacity = "0.85"}
              onMouseLeave={e => e.currentTarget.style.opacity = "1"}
            >
              Hire Me →
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}