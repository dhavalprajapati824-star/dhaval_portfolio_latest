"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const projects = [
  {
    num: "01",
    domain: "E-Commerce",
    title: "Multi-Platform Shopping App QA",
    desc: "Led end-to-end QA for a large-scale e-commerce platform across iOS, Android, and web.",
    tags: ["Manual Testing", "Mobile QA", "Regression", "UAT", "Jira"],
  },
  {
    num: "02",
    domain: "FinTech",
    title: "Banking Mobile App Security QA",
    desc: "QA for banking app ensuring security and compliance.",
    tags: ["Security Testing", "API Testing", "Postman"],
  },
  {
    num: "03",
    domain: "Healthcare",
    title: "Patient Management System QA",
    desc: "Tested healthcare platform with focus on data integrity.",
    tags: ["Web Testing", "HIPAA", "Test Planning"],
  },
  {
    num: "04",
    domain: "EdTech",
    title: "Learning Platform QA",
    desc: "Cross-browser testing for education SaaS platform.",
    tags: ["Cross-Browser", "Performance", "TestRail"],
  },
];

export default function Projects() {
  return (
    <section id="projects" style={{
    padding: "6rem 2rem",
    background: "var(--bg)",
    borderTop: "1px solid var(--border)",
    borderBottom: "1px solid var(--border)",
    scrollMarginTop: "100px", // ✅ agar header fixed hai
    }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        
        <h2 style={{
          color: "var(--text)",
          marginBottom: "3rem",
          fontSize: "clamp(2rem,4vw,3rem)",
          fontFamily: "var(--font-display)",
          letterSpacing: "-0.02em"
        }}>
          Projects
        </h2>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
          gap: "1.5rem",
        }}>
          {projects.map((project, i) => (
            <ProjectCard key={project.num} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index }: any) {
  const [hovered, setHovered] = useState(false);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.1 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        padding: "2rem",
        border: `1px solid ${hovered ? "var(--accent)" : "var(--border)"}`,
        borderRadius: "4px",
        background: hovered ? "rgba(var(--accent-rgb),0.06)" : "transparent",
        transition: "all 0.3s ease",
        cursor: "pointer",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Top Accent Line */}
      <div style={{
        position: "absolute",
        top: 0,
        left: 0,
        height: "2px",
        width: hovered ? "100%" : "0%",
        background: "var(--accent)",
        transition: "0.3s",
      }} />

      {/* Top Row */}
      <div style={{
        display: "flex",
        justifyContent: "space-between",
        marginBottom: "1rem"
      }}>
        <span style={{
          color: "var(--accent)",
          fontFamily: "var(--font-mono)",
          fontSize: "0.7rem",
          letterSpacing: "0.1em"
        }}>
          {project.num}
        </span>

        <span style={{
          color: "var(--text-muted)",
          fontSize: "0.7rem",
          fontFamily: "var(--font-mono)"
        }}>
          {project.domain}
        </span>
      </div>

      {/* Title */}
      <h3 style={{
        color: "var(--text)",
        fontSize: "1.4rem",
        marginBottom: "0.6rem",
        fontFamily: "var(--font-display)",
      }}>
        {project.title}
      </h3>

      {/* Description */}
      <p style={{
        color: "var(--text-muted)",
        fontSize: "0.9rem",
        marginBottom: "1.2rem",
        lineHeight: 1.7
      }}>
        {project.desc}
      </p>

      {/* Tags */}
      <div style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "0.4rem"
      }}>
        {project.tags.map((tag: string) => (
          <span key={tag} style={{
            fontSize: "0.65rem",
            padding: "4px 8px",
            background: "var(--surface)",
            color: "var(--text-muted)",
            border: "1px solid var(--border)",
            borderRadius: "2px",
            fontFamily: "var(--font-mono)",
            letterSpacing: "0.05em"
          }}>
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  );
};