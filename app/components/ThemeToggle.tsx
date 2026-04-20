"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  useEffect(() => {
    const saved = localStorage.getItem("theme") as "dark" | "light" | null;
    const initial = saved ?? "dark";
    setTheme(initial);
    document.documentElement.setAttribute("data-theme", initial === "light" ? "light" : "");
  }, []);

  const toggle = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.setAttribute("data-theme", next === "light" ? "light" : "");
    localStorage.setItem("theme", next);
  };

  return (
    <button
      onClick={toggle}
      aria-label="Toggle theme"
      style={{
        width: 44, height: 24,
        borderRadius: 12,
        border: "1px solid var(--border2)",
        background: "var(--surface2)",
        cursor: "pointer",
        position: "relative",
        display: "flex",
        alignItems: "center",
        padding: "0 3px",
        transition: "background 0.3s",
        flexShrink: 0,
      }}
    >
      <motion.div
        animate={{ x: theme === "light" ? 20 : 0 }}
        transition={{ type: "spring", stiffness: 400, damping: 28 }}
        style={{
          width: 16, height: 16, borderRadius: "50%",
          background: "var(--accent)",
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: "0.55rem",
        }}
      >
        {theme === "dark" ? "🌙" : "☀️"}
      </motion.div>
    </button>
  );
}
