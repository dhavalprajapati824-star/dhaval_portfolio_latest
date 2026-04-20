"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skillGroups = [
  {
    title: "Testing Types",
    icon: "⬡",
    items: [
      "System & Regression Testing",
      "Positive & Negative Testing",
      "Performance, Load & Stress Testing",
      "Usability & Smoke Testing",
      "UI & Compatibility Testing",
      "Data Interface & Migration Testing",
      "Defect & Bug Testing",
    ],
  },
  {
    title: "Tools & Processes",
    icon: "⬢",
    items: [
      "API Testing: Postman, Swagger",
      "Bug Mgmt: Jira, Trello, Excel",
      "Test Plans, Cases & Processes",
      "Test Strategies & Coverage",
      "Issue Identification",
      "Technical Specification Analysis",
      "Scripting & Documentation",
    ],
  },
  {
    title: "QA Expertise",
    icon: "◆",
    items: [
      "User Experience Testing",
      "Functionality Testing",
      "Security Testing",
      "Performance & Load Testing",
      "Compatibility Testing",
      "Test Management",
      "Financial Accounting Domain",
    ],
  },
];

const softSkills = ["Analytical Thinking", "Attention to Detail", "Cross-team Collaboration", "Decision Making", "Continuous Learning"];

export default function Skills() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" style={{
      padding: "9rem 3rem",
      background: "var(--bg)",
      borderTop: "1px solid var(--border)",
    }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }} ref={ref}>

        {/* Header */}
        <div style={{ marginBottom: "4rem" }}>
          <motion.p
            initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}
            style={{ fontFamily: "var(--font-mono)", fontSize: "0.65rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--accent)", marginBottom: "1rem" }}
          >02 — Expertise</motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2rem, 4vw, 3.4rem)",
              fontWeight: 700, color: "var(--text)",
              letterSpacing: "-0.02em",
            }}
          >Skills & Capabilities</motion.h2>
        </div>

        {/* Cards */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1.25rem" }}>
          {skillGroups.map((group, ci) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: ci * 0.14 + 0.3, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -5, boxShadow: "0 24px 60px var(--shadow)" }}
              style={{
                border: "1px solid var(--border2)",
                borderRadius: "4px",
                overflow: "hidden",
                background: "var(--surface)",
                transition: "box-shadow 0.3s ease",
              }}
            >
              {/* Card header */}
              <div style={{
                padding: "1.3rem 1.7rem",
                background: "var(--surface2)",
                borderBottom: "1px solid var(--border2)",
                display: "flex", alignItems: "center", gap: "0.75rem",
              }}>
                <span style={{ fontSize: "1rem", color: "var(--accent)" }}>{group.icon}</span>
                <h3 style={{
                  fontFamily: "var(--font-sans)",
                  fontWeight: 700, fontSize: "0.85rem",
                  color: "var(--text)", letterSpacing: "0.03em",
                }}>{group.title}</h3>
              </div>

              {/* Items */}
              <div style={{ padding: "1.3rem 1.7rem" }}>
                {group.items.map((item, si) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: -10 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: ci * 0.08 + si * 0.065 + 0.5 }}
                    style={{
                      display: "flex", alignItems: "flex-start", gap: "0.65rem",
                      padding: "0.5rem 0",
                      borderBottom: si < group.items.length - 1 ? "1px solid var(--border)" : "none",
                    }}
                  >
                    <span style={{ color: "var(--accent)", fontSize: "0.55rem", marginTop: "0.38rem", flexShrink: 0 }}>▸</span>
                    <span style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: "0.85rem", color: "var(--text-muted)", lineHeight: 1.45,
                    }}>{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Soft skills banner */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.85 }}
          style={{
            marginTop: "2.5rem", padding: "1.8rem 2.2rem",
            background: "var(--surface)",
            border: "1px solid var(--border2)",
            borderRadius: "4px",
          }}
        >
          <p style={{
            fontFamily: "var(--font-mono)", fontSize: "0.6rem",
            color: "var(--accent)", letterSpacing: "0.16em",
            textTransform: "uppercase", marginBottom: "1rem",
          }}>Soft Skills</p>
          <div style={{ display: "flex", gap: "1.2rem", flexWrap: "wrap" }}>
            {softSkills.map(s => (
              <span key={s} style={{
                fontFamily: "var(--font-sans)", fontSize: "0.85rem",
                color: "var(--text-muted)", fontWeight: 500,
              }}>
                <span style={{ color: "var(--accent)", marginRight: "0.4rem" }}>✦</span>{s}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
