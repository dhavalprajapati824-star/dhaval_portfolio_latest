"use client";
import FadeUp from "./FadeUp";

interface SectionHeaderProps {
  num: string;
  title: string;
}

export default function SectionHeader({ num, title }: SectionHeaderProps) {
  return (
    <FadeUp style={{ display: "flex", alignItems: "center", gap: "1.25rem", marginBottom: "4.5rem" }}>
      <span style={{
        fontFamily: "var(--font-mono)", fontSize: "0.62rem",
        letterSpacing: "0.16em", color: "var(--accent)",
      }}>{num} /</span>
      <h2 style={{
        fontFamily: "var(--font-display)",
        fontSize: "clamp(2rem, 3.5vw, 3rem)",
        fontWeight: 600, color: "var(--text)",
      }}>{title}</h2>
      <div style={{
        flex: 1, height: 1,
        background: "linear-gradient(to right, var(--border2), transparent)",
      }} />
    </FadeUp>
  );
}
