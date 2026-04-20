"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const experiences = [
  {
    company: "Techrupt Innovations Private Limited",
    role: "Sr. Quality Analyst",
    period: "2023 – Present",
    badge: "Current",
    current: true,
    description: "Senior software QA tester with full system development lifecycle experience, including test plans, test cases, and test processes. Hands-on technology professional accustomed to complex, project-based environments. Multifaceted experience in QA software testing and user-acceptance testing.",
    highlights: ["Full SDLC Testing", "Test Plan Authoring", "User Acceptance Testing", "Complex Project QA"],
  },
  {
    company: "Goovy Technoweb Pvt Ltd",
    role: "Sr. Quality Analyst",
    period: "2016 – 2023",
    badge: "7 Years",
    current: false,
    description: "Gained extensive experience across multiple domains, refining expertise in manual testing, bug tracking, and delivering high-quality software products. Built strong foundation in API testing, performance testing, and cross-functional collaboration.",
    highlights: ["Manual Testing", "API Testing", "Bug Lifecycle Mgmt", "Domain Expertise"],
  },
];

export default function Experience() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" style={{
      padding: "9rem 3rem",
      background: "var(--bg2)",
      borderTop: "1px solid var(--border)",
      position: "relative", overflow: "hidden",
    }}>
      {/* Background ghost text */}
      <div style={{
        position: "absolute", top: "-12%", right: "-6%",
        fontFamily: "var(--font-display)",
        fontSize: "clamp(180px, 28vw, 380px)",
        fontWeight: 700,
        color: `rgba(var(--accent-rgb),0.025)`,
        lineHeight: 1, userSelect: "none", pointerEvents: "none",
        letterSpacing: "-0.04em",
      }}>EXP</div>

      <div style={{ maxWidth: 1100, margin: "0 auto", position: "relative", zIndex: 2 }} ref={ref}>

        {/* Header */}
        <div style={{ marginBottom: "4rem" }}>
          <motion.p
            initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}
            style={{ fontFamily: "var(--font-mono)", fontSize: "0.65rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--accent)", marginBottom: "1rem" }}
          >03 — Professional Journey</motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2rem, 4vw, 3.4rem)",
              fontWeight: 700, color: "var(--text)",
              letterSpacing: "-0.02em",
            }}
          >Professional Experience</motion.h2>
        </div>

        {/* Timeline */}
        <div style={{ position: "relative" }}>
          {/* Vertical line */}
          <div style={{
            position: "absolute", left: 7, top: 24, bottom: 24,
            width: 1, background: "var(--border2)",
          }} className="hidden md:block" />

          <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: -40 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: i * 0.2 + 0.4, duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
                style={{ display: "flex", gap: "2rem" }}
              >
                {/* Dot */}
                <div style={{ position: "relative", flexShrink: 0, paddingTop: "1.6rem" }} className="hidden md:block">
                  <div style={{
                    width: 15, height: 15, borderRadius: "50%",
                    background: exp.current ? "var(--accent)" : "var(--surface2)",
                    border: "2px solid var(--border2)",
                    boxShadow: exp.current ? `0 0 12px rgba(var(--accent-rgb),0.5)` : "none",
                    flexShrink: 0,
                  }} />
                </div>

                {/* Card */}
                <div style={{
                  flex: 1,
                  background: "var(--surface)",
                  border: `1px solid ${exp.current ? "var(--border2)" : "var(--border)"}`,
                  borderRadius: "4px",
                  padding: "2rem 2.4rem",
                  transition: "border-color 0.3s",
                }}>
                  <div style={{
                    display: "flex", justifyContent: "space-between",
                    alignItems: "flex-start", flexWrap: "wrap",
                    gap: "1rem", marginBottom: "1rem",
                  }}>
                    <div>
                      <h3 style={{
                        fontFamily: "var(--font-sans)", fontSize: "1.05rem",
                        fontWeight: 700, color: "var(--text)", marginBottom: "0.35rem",
                      }}>{exp.company}</h3>
                      <div style={{ display: "flex", alignItems: "center", gap: "1rem", flexWrap: "wrap" }}>
                        <span style={{
                          fontFamily: "var(--font-sans)", fontWeight: 600,
                          fontSize: "0.85rem", color: "var(--accent)",
                        }}>{exp.role}</span>
                        <span style={{
                          fontFamily: "var(--font-mono)", fontSize: "0.62rem",
                          color: "var(--text-muted)", letterSpacing: "0.1em",
                        }}>{exp.period}</span>
                      </div>
                    </div>
                    <span style={{
                      padding: "0.28rem 0.75rem",
                      background: exp.current ? `rgba(var(--accent-rgb),0.12)` : "var(--surface2)",
                      color: exp.current ? "var(--accent)" : "var(--text-muted)",
                      border: `1px solid ${exp.current ? "var(--border2)" : "var(--border)"}`,
                      fontFamily: "var(--font-mono)", fontSize: "0.6rem",
                      letterSpacing: "0.1em", borderRadius: "3px",
                    }}>{exp.badge}</span>
                  </div>

                  <p style={{
                    color: "var(--text-muted)", lineHeight: 1.78,
                    fontSize: "0.9rem", marginBottom: "1.5rem",
                  }}>{exp.description}</p>

                  <div style={{ display: "flex", gap: "0.55rem", flexWrap: "wrap" }}>
                    {exp.highlights.map(h => (
                      <span key={h} style={{
                        fontFamily: "var(--font-mono)", fontSize: "0.62rem",
                        color: "var(--text-muted)",
                        padding: "0.28rem 0.7rem",
                        background: "var(--surface2)",
                        border: "1px solid var(--border)",
                        borderRadius: "3px", letterSpacing: "0.05em",
                      }}>{h}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
