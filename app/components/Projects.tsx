"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const projects = [
  {
    id: "01",
    title: "Orbit Analytics",
    category: "SaaS Platform",
    description: "Real-time analytics dashboard for e-commerce teams. Processes 50M+ events/day with sub-second query performance.",
    tech: ["Next.js", "ClickHouse", "Rust", "WebSockets"],
    color: "#c8f55a",
    year: "2024",
    link: "#",
  },
  {
    id: "02",
    title: "Forma Design System",
    category: "Open Source",
    description: "A headless, accessible component library used by 2,000+ developers. Ships with Figma tokens and full ARIA compliance.",
    tech: ["TypeScript", "Radix UI", "Storybook", "Turborepo"],
    color: "#4fa3e8",
    year: "2024",
    link: "#",
  },
  {
    id: "03",
    title: "Pulse",
    category: "Mobile App",
    description: "AI-powered health journaling app. Used daily by 15,000+ users with a 4.8★ App Store rating.",
    tech: ["React Native", "LangChain", "Supabase", "Expo"],
    color: "#f5a623",
    year: "2023",
    link: "#",
  },
  {
    id: "04",
    title: "Carta Maps",
    category: "Data Visualization",
    description: "Interactive geospatial visualization platform for urban planning departments. Renders 10M+ data points fluidly.",
    tech: ["Mapbox GL", "D3.js", "PostGIS", "FastAPI"],
    color: "#e864a8",
    year: "2023",
    link: "#",
  },
];

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const [hovered, setHovered] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        padding: "2rem",
        border: `1px solid ${hovered ? project.color + "40" : "#2a2a26"}`,
        borderRadius: "4px",
        background: hovered ? `${project.color}06` : "transparent",
        cursor: "pointer",
        transition: "all 0.35s ease",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Hover accent line */}
      <motion.div
        animate={{ scaleX: hovered ? 1 : 0 }}
        style={{
          position: "absolute", top: 0, left: 0, right: 0, height: 2,
          background: project.color, transformOrigin: "left",
          transition: "transform 0.3s ease",
        }}
      />

      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "1.2rem" }}>
        <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
          <span style={{
            fontFamily: "'DM Mono', monospace", fontSize: "0.65rem",
            color: project.color, letterSpacing: "0.15em",
          }}>
            {project.id}
          </span>
          <span style={{
            fontFamily: "'DM Mono', monospace", fontSize: "0.65rem",
            color: "#4a4a42", letterSpacing: "0.1em",
            padding: "0.2rem 0.6rem", border: "1px solid #2a2a26", borderRadius: "2px",
          }}>
            {project.category}
          </span>
        </div>
        <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.65rem", color: "#4a4a42" }}>
          {project.year}
        </span>
      </div>

      <h3 style={{
        fontFamily: "'Playfair Display', serif",
        fontSize: "1.6rem", fontWeight: 700, color: "#f0ede6",
        marginBottom: "0.8rem", letterSpacing: "-0.02em",
        transition: "color 0.2s ease",
      }}>
        {project.title}
      </h3>

      <p style={{ color: "#8a8878", lineHeight: 1.7, fontSize: "0.9rem", marginBottom: "1.5rem" }}>
        {project.description}
      </p>

      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
        {project.tech.map(t => (
          <span key={t} style={{
            fontFamily: "'DM Mono', monospace", fontSize: "0.65rem",
            color: "#8a8878", padding: "0.25rem 0.6rem",
            background: "#1a1a17", borderRadius: "2px",
            letterSpacing: "0.05em",
          }}>
            {t}
          </span>
        ))}
      </div>

      <motion.div
        animate={{ x: hovered ? 0 : 10, opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.2 }}
        style={{
          position: "absolute", bottom: "2rem", right: "2rem",
          fontFamily: "'DM Mono', monospace", fontSize: "0.75rem",
          color: project.color, letterSpacing: "0.05em",
        }}
      >
        View →
      </motion.div>
    </motion.div>
  );
}

export default function Projects() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" style={{
      padding: "8rem 2.5rem", background: "#0d0d0b",
      borderTop: "1px solid #2a2a26", borderBottom: "1px solid #2a2a26",
    }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div ref={ref} style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "4rem", flexWrap: "wrap", gap: "1rem" }}>
          <div>
            <motion.p
              initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}
              className="section-label" style={{ marginBottom: "1rem" }}
            >
              02 — Selected Work
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(2rem, 4vw, 3.2rem)",
                fontWeight: 700, color: "#f0ede6", letterSpacing: "-0.02em",
              }}
            >
              Things I've built
            </motion.h2>
          </div>
          <motion.a
            initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.4 }}
            href="#" style={{
              fontFamily: "'DM Mono', monospace", fontSize: "0.75rem",
              color: "#8a8878", textDecoration: "none", letterSpacing: "0.05em",
              paddingBottom: "2px", borderBottom: "1px solid #4a4a42",
              transition: "all 0.2s ease",
            }}
            onMouseEnter={e => { e.currentTarget.style.color = "#c8f55a"; e.currentTarget.style.borderBottomColor = "#c8f55a"; }}
            onMouseLeave={e => { e.currentTarget.style.color = "#8a8878"; e.currentTarget.style.borderBottomColor = "#4a4a42"; }}
          >
            All projects →
          </motion.a>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(480px, 1fr))", gap: "1.5rem" }} className="projects-grid">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 600px) {
          .projects-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
