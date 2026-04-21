"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [focused, setFocused] = useState<string | null>(null);
  const [sent, setSent] = useState(false);

  const EMAILJS_SERVICE_ID  = "service_d84pm1a";   // ← paste here
  const EMAILJS_TEMPLATE_ID = "template_dhsyctk";  // ← paste here
  const EMAILJS_PUBLIC_KEY  = "NJX6PSFiQQog5MdZF";   // ← paste here

  const sendEmail = async (e: React.FormEvent) => {
  e.preventDefault();

  try {
    await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      {
        name: form.name,
        email: form.email,
        subject: form.subject,
        message: form.message,
      },
      EMAILJS_PUBLIC_KEY
    );

    // ✅ Step 1: show success
    setSent(true);

    // ✅ Step 2: clear form
    setForm({ name: "", email: "", subject: "", message: "" });

    // ✅ Step 3: optional auto reset after 4 sec
    setTimeout(() => {
      setSent(false);
    }, 4000);

  } catch (error) {
    console.error("Email send error:", error);
    alert("Failed to send message");
  }
};

  const inputStyle = (field: string): React.CSSProperties => ({
    width: "100%", padding: "0.8rem 1rem",
    background: focused === field ? "var(--surface2)" : "var(--surface)",
    border: `1px solid ${focused === field ? "var(--accent)" : "var(--border2)"}`,
    borderRadius: "3px", color: "var(--text)",
    fontFamily: "var(--font-sans)", fontSize: "0.88rem",
    outline: "none", transition: "all 0.2s",
    resize: "none",
  });

  const labelStyle: React.CSSProperties = {
    display: "block",
    fontFamily: "var(--font-mono)", fontSize: "0.58rem",
    color: "var(--text-muted)", letterSpacing: "0.16em",
    textTransform: "uppercase", marginBottom: "0.4rem",
  };

  return (
    <section id="contact" style={{
      padding: "9rem 3rem",
      background: "var(--bg3)",
      borderTop: "1px solid var(--border)",
      position: "relative", overflow: "hidden",
    }}>
      {/* Background ghost */}
      <div style={{
        position: "absolute", bottom: "-12%", right: "-5%",
        fontFamily: "var(--font-display)",
        fontSize: "clamp(130px, 20vw, 300px)",
        fontWeight: 700,
        color: `rgba(var(--accent-rgb),0.025)`,
        lineHeight: 1, userSelect: "none", pointerEvents: "none",
        letterSpacing: "-0.04em",
      }}>HELLO</div>

      <div style={{ maxWidth: 1100, margin: "0 auto", position: "relative", zIndex: 2 }} ref={ref}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "6rem" }} className="contact-grid">

          {/* Left */}
          <div>
            <motion.p
              initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}
              style={{ fontFamily: "var(--font-mono)", fontSize: "0.65rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--accent)", marginBottom: "1rem" }}
            >04 — Get in Touch</motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2.2rem, 5vw, 3.8rem)",
                fontWeight: 700, color: "var(--text)",
                lineHeight: 1.05, letterSpacing: "-0.02em",
                marginBottom: "1.4rem",
              }}
            >
              Let's work<br />
              <em style={{ color: "var(--accent)" }}>together</em>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.4 }}
              style={{ color: "var(--text-muted)", lineHeight: 1.8, fontSize: "0.93rem", marginBottom: "3rem" }}
            >
              Call, text, or email me and let's set up a discussion. I'm always open to new opportunities and meaningful collaborations.
            </motion.p>

            {/* Contact rows */}
            <motion.div initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.5 }}>
              {[
                { label: "Email", value: "dhaval.prajapati.824@gmail.com", href: "mailto:dhaval.prajapati.824@gmail.com" },
                { label: "Phone", value: "+91 99091 55425", href: "tel:+919909155425" },
                { label: "Location", value: "Boriavi - 397310, Anand, Gujarat, India", href: "#" },
              ].map(item => (
                <a key={item.label} href={item.href} style={{
                  display: "flex", justifyContent: "space-between", alignItems: "center",
                  padding: "1rem 0", borderBottom: "1px solid var(--border)",
                  textDecoration: "none", transition: "padding-left 0.25s",
                }}
                  onMouseEnter={e => e.currentTarget.style.paddingLeft = "0.5rem"}
                  onMouseLeave={e => e.currentTarget.style.paddingLeft = "0"}
                >
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.6rem", color: "var(--accent)", letterSpacing: "0.13em" }}>
                    {item.label}
                  </span>
                  <span style={{ fontFamily: "var(--font-sans)", fontSize: "0.85rem", color: "var(--text-muted)", fontWeight: 500 }}>
                    {item.value}
                  </span>
                </a>
              ))}
            </motion.div>
          </div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }} animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            {sent ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
                style={{
                  height: "100%", minHeight: 420, display: "flex",
                  alignItems: "center", justifyContent: "center",
                  flexDirection: "column", gap: "1.2rem", textAlign: "center",
                  border: "1px solid var(--border2)", borderRadius: "4px",
                  background: `rgba(var(--accent-rgb),0.04)`,
                }}
              >
                <div style={{ fontSize: "3rem", color: "var(--accent)" }}>✦</div>
                <h3 style={{ fontFamily: "var(--font-display)", fontSize: "2rem", color: "var(--text)", fontWeight: 700 }}>
                  Message Sent!
                </h3>
                <p style={{ color: "var(--text-muted)", fontSize: "0.9rem" }}>
                  Thank you for reaching out. I'll get back to you soon!
                </p>
              </motion.div>
            ) : (
              <form onSubmit={sendEmail}
                style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                  {[["name", "Name", "Your name"], ["email", "Email", "your@email.com"]].map(([f, l, p]) => (
                    <div key={f}>
                      <label style={labelStyle}>{l}</label>
                      <input
                        type={f === "email" ? "email" : "text"} required placeholder={p}
                        value={form[f as keyof typeof form]}
                        onChange={e => setForm({ ...form, [f]: e.target.value })}
                        onFocus={() => setFocused(f)} onBlur={() => setFocused(null)}
                        style={inputStyle(f)}
                      />
                    </div>
                  ))}
                </div>

                <div>
                  <label style={labelStyle}>Subject</label>
                  <input type="text" required placeholder="What's this about?"
                    value={form.subject}
                    onChange={e => setForm({ ...form, subject: e.target.value })}
                    onFocus={() => setFocused("subject")} onBlur={() => setFocused(null)}
                    style={inputStyle("subject")}
                  />
                </div>

                <div>
                  <label style={labelStyle}>Message</label>
                  <textarea required rows={6} placeholder="Tell me about the opportunity..."
                    value={form.message}
                    onChange={e => setForm({ ...form, message: e.target.value })}
                    onFocus={() => setFocused("message")} onBlur={() => setFocused(null)}
                    style={inputStyle("message")}
                  />
                </div>

                <button type="submit" style={{
                  padding: "0.85rem 2rem",
                  background: "var(--accent)", color: "var(--bg)",
                  border: "none", borderRadius: "3px", cursor: "pointer",
                  fontFamily: "var(--font-sans)", fontWeight: 700,
                  fontSize: "0.85rem", letterSpacing: "0.04em",
                  transition: "all 0.25s",
                }}
                  onMouseEnter={e => { e.currentTarget.style.opacity = "0.82"; e.currentTarget.style.transform = "translateY(-2px)"; }}
                  onMouseLeave={e => { e.currentTarget.style.opacity = "1"; e.currentTarget.style.transform = "translateY(0)"; }}
                >
                  Send Message →
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>

      <style>{`@media(max-width:768px){ .contact-grid{ grid-template-columns:1fr !important; gap:3rem !important; } }`}</style>
    </section>
  );
}
