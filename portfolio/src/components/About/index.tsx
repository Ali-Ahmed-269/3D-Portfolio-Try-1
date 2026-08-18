"use client";

import { motion, Variants } from "framer-motion";
import { useState } from "react";

/* ─── Easing constants ───────────────────────────────────────────────────── */
const EASE_OUT: [number, number, number, number] = [0.215, 0.61, 0.355, 1];
const EASE_SPRING: [number, number, number, number] = [0.16, 1, 0.3, 1];

/* ─── Animation Variants ─────────────────────────────────────────────────── */
const leftContainerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const leftItemVariants: Variants = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: EASE_OUT } },
};

const rightVariants: Variants = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: EASE_SPRING } },
};

const techContainerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07, delayChildren: 0.1 } },
};

const techCardVariants: Variants = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.45, ease: EASE_OUT } },
};

/* ─── Tech Stack Data ────────────────────────────────────────────────────── */
interface TechItem {
  name: string;
  icon: string;
  color: string;
}

const TECH_STACK: TechItem[] = [
  { name: "Next.js",       icon: "🌐", color: "#ffffff" },
  { name: "Svelte",        icon: "🔥", color: "#ff6600" },
  { name: "React",         icon: "⚛️",  color: "#61dafb" },
  { name: "TypeScript",    icon: "📘", color: "#3178c6" },
  { name: "Supabase",      icon: "⚡", color: "#3ecf8e" },
  { name: "Tailwind",      icon: "🎨", color: "#38bdf8" },
  { name: "Framer Motion", icon: "🎬", color: "#cc66ff" },
  { name: "Git",           icon: "🔀", color: "#f14e32" },
];

/* ─── Fake Code Editor Lines ─────────────────────────────────────────────── */
const CODE_LINES = [
  { indent: 0, parts: [{ text: "import", color: "#c678dd" }, { text: " { motion }", color: "#abb2bf" }, { text: " from", color: "#c678dd" }, { text: " 'framer-motion'", color: "#98c379" }] },
  { indent: 0, parts: [{ text: "import", color: "#c678dd" }, { text: " React", color: "#e06c75" }, { text: " from", color: "#c678dd" }, { text: " 'react'", color: "#98c379" }] },
  { indent: 0, parts: [{ text: "", color: "" }] },
  { indent: 0, parts: [{ text: "const", color: "#c678dd" }, { text: " Portfolio", color: "#e5c07b" }, { text: " = () => {", color: "#abb2bf" }] },
  { indent: 1, parts: [{ text: "return", color: "#c678dd" }, { text: " (", color: "#abb2bf" }] },
  { indent: 2, parts: [{ text: "<", color: "#e06c75" }, { text: "motion.div", color: "#e06c75" }] },
  { indent: 3, parts: [{ text: "initial", color: "#d19a66" }, { text: "={{ opacity: ", color: "#abb2bf" }, { text: "0", color: "#d19a66" }, { text: " }}", color: "#abb2bf" }] },
  { indent: 3, parts: [{ text: "animate", color: "#d19a66" }, { text: "={{ opacity: ", color: "#abb2bf" }, { text: "1", color: "#d19a66" }, { text: " }}", color: "#abb2bf" }] },
  { indent: 2, parts: [{ text: ">", color: "#e06c75" }] },
  { indent: 3, parts: [{ text: "<", color: "#e06c75" }, { text: "Hero", color: "#61aeee" }, { text: " />", color: "#e06c75" }] },
  { indent: 3, parts: [{ text: "<", color: "#e06c75" }, { text: "About", color: "#61aeee" }, { text: " />", color: "#e06c75" }] },
  { indent: 3, parts: [{ text: "<", color: "#e06c75" }, { text: "Projects", color: "#61aeee" }, { text: " />", color: "#e06c75" }] },
  { indent: 2, parts: [{ text: "</", color: "#e06c75" }, { text: "motion.div", color: "#e06c75" }, { text: ">", color: "#e06c75" }] },
  { indent: 1, parts: [{ text: ")", color: "#abb2bf" }] },
  { indent: 0, parts: [{ text: "}", color: "#abb2bf" }] },
];

/* ─── Component ──────────────────────────────────────────────────────────── */
export default function AboutSection() {
  const [hoveredTech, setHoveredTech] = useState<string | null>(null);
  const [arrowHovered, setArrowHovered] = useState(false);

  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ backgroundColor: "#0a0a0a" }}
    >
      {/* Subtle background texture */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(249,115,22,0.06), transparent)",
        }}
      />

      <div className="max-w-7xl mx-auto w-full px-6 lg:px-8 py-24 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">

        {/* ── LEFT COLUMN ── */}
        <motion.div
          variants={leftContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          className="flex flex-col space-y-8"
        >
          {/* Section label */}
          <motion.div variants={leftItemVariants} className="flex items-center space-x-2">
            <span style={{ color: "#f97316", fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700 }}>
              /
            </span>
            <span
              style={{
                color: "#a1a1aa",
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "0.875rem",
                fontWeight: 500,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
              }}
            >
              About Me
            </span>
          </motion.div>

          {/* Main heading */}
          <motion.div variants={leftItemVariants}>
            <h2
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 700,
                fontSize: "clamp(2rem, 4vw, 3rem)",
                lineHeight: 1.15,
                color: "#ffffff",
                margin: 0,
              }}
            >
              Frontend Developer
              <br />
              <span style={{ color: "#f97316" }}>&amp; CS Student</span>
            </h2>
          </motion.div>

          {/* Bio paragraphs */}
          <motion.div variants={leftItemVariants} className="space-y-4">
            <p
              style={{
                color: "#a1a1aa",
                fontFamily: "'Inter', sans-serif",
                fontSize: "1rem",
                lineHeight: 1.8,
                margin: 0,
              }}
            >
              I&apos;m <span style={{ color: "#ffffff", fontWeight: 500 }}>Ali Ahmed Khan</span>, a passionate
              frontend developer and computer science student who loves building modern web
              applications with clean code and beautiful UI/UX.
            </p>
            <p
              style={{
                color: "#a1a1aa",
                fontFamily: "'Inter', sans-serif",
                fontSize: "1rem",
                lineHeight: 1.8,
                margin: 0,
              }}
            >
              I specialize in{" "}
              <span style={{ color: "#f97316", fontWeight: 500 }}>React, Next.js</span> and modern
              frontend technologies. Currently exploring{" "}
              <span style={{ color: "#f97316", fontWeight: 500 }}>3D web experiences</span> with
              Three.js and building full-stack applications with Supabase.
            </p>
          </motion.div>

          {/* CTA Button */}
          <motion.div variants={leftItemVariants}>
            <motion.a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
              }}
              onMouseEnter={() => setArrowHovered(true)}
              onMouseLeave={() => setArrowHovered(false)}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                padding: "0.75rem 1.75rem",
                borderRadius: "9999px",
                border: `1.5px solid ${arrowHovered ? "#f97316" : "rgba(255,255,255,0.2)"}`,
                color: arrowHovered ? "#f97316" : "#ffffff",
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.875rem",
                fontWeight: 500,
                textDecoration: "none",
                transition: "border-color 0.25s, color 0.25s",
                cursor: "pointer",
              }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
            >
              More About Me
              <motion.span
                animate={{ x: arrowHovered ? 5 : 0 }}
                transition={{ duration: 0.2 }}
              >
                →
              </motion.span>
            </motion.a>
          </motion.div>
        </motion.div>

        {/* ── RIGHT COLUMN ── */}
        <motion.div
          variants={rightVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="flex flex-col space-y-6"
        >
          {/* Code Editor Card */}
          <div
            style={{
              position: "relative",
              borderRadius: "1rem",
            }}
          >
            {/* Glow behind */}
            <div
              style={{
                position: "absolute",
                inset: "-1px",
                borderRadius: "1rem",
                background:
                  "radial-gradient(ellipse 60% 40% at 50% 50%, rgba(249,115,22,0.12), transparent)",
                pointerEvents: "none",
                zIndex: 0,
              }}
            />

            {/* Editor shell */}
            <div
              style={{
                position: "relative",
                zIndex: 1,
                backgroundColor: "#111111",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: "1rem",
                overflow: "hidden",
              }}
            >
              {/* Traffic lights bar */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  padding: "0.75rem 1rem",
                  borderBottom: "1px solid rgba(255,255,255,0.06)",
                  backgroundColor: "rgba(255,255,255,0.02)",
                }}
              >
                <span style={{ width: 12, height: 12, borderRadius: "50%", backgroundColor: "#ff5f57", display: "block" }} />
                <span style={{ width: 12, height: 12, borderRadius: "50%", backgroundColor: "#febc2e", display: "block" }} />
                <span style={{ width: 12, height: 12, borderRadius: "50%", backgroundColor: "#28c840", display: "block" }} />
                <span
                  style={{
                    marginLeft: "auto",
                    color: "#52525b",
                    fontFamily: "monospace",
                    fontSize: "0.7rem",
                  }}
                >
                  portfolio.tsx
                </span>
              </div>

              {/* Code lines */}
              <div
                style={{
                  padding: "1.25rem 1.5rem",
                  fontFamily: "'JetBrains Mono', 'Fira Code', 'Courier New', monospace",
                  fontSize: "0.8rem",
                  lineHeight: 1.9,
                }}
              >
                {CODE_LINES.map((line, lineIdx) => (
                  <div
                    key={lineIdx}
                    style={{
                      display: "flex",
                      alignItems: "baseline",
                    }}
                  >
                    {/* Line number */}
                    <span
                      style={{
                        color: "#3f3f46",
                        minWidth: "2rem",
                        userSelect: "none",
                        fontSize: "0.7rem",
                      }}
                    >
                      {lineIdx + 1}
                    </span>

                    {/* Indent */}
                    <span style={{ minWidth: `${line.indent * 1.2}rem`, display: "inline-block" }} />

                    {/* Parts */}
                    {line.parts.map((part, partIdx) => (
                      <span key={partIdx} style={{ color: part.color || "#abb2bf" }}>
                        {part.text}
                      </span>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Tech Stack Grid */}
          <div>
            {/* Label */}
            <div className="flex items-center space-x-2 mb-4">
              <span style={{ color: "#f97316", fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700 }}>
                /
              </span>
              <span
                style={{
                  color: "#a1a1aa",
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: "0.875rem",
                  fontWeight: 500,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                }}
              >
                Tech Stack
              </span>
            </div>

            <motion.div
              variants={techContainerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(4, 1fr)",
                gap: "0.625rem",
              }}
            >
              {TECH_STACK.map((tech) => {
                const isHovered = hoveredTech === tech.name;
                return (
                  <motion.div
                    key={tech.name}
                    variants={techCardVariants}
                    onMouseEnter={() => setHoveredTech(tech.name)}
                    onMouseLeave={() => setHoveredTech(null)}
                    whileHover={{ scale: 1.05, y: -2 }}
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "0.375rem",
                      padding: "0.75rem 0.5rem",
                      borderRadius: "0.75rem",
                      backgroundColor: "#111111",
                      border: `1px solid ${isHovered ? "rgba(249,115,22,0.4)" : "rgba(255,255,255,0.07)"}`,
                      boxShadow: isHovered
                        ? "0 4px 20px rgba(249,115,22,0.12)"
                        : "none",
                      transition: "border-color 0.2s, box-shadow 0.2s",
                      cursor: "default",
                    }}
                  >
                    <span style={{ fontSize: "1.25rem" }}>{tech.icon}</span>
                    <span
                      style={{
                        color: isHovered ? tech.color : "#71717a",
                        fontFamily: "'Inter', sans-serif",
                        fontSize: "0.65rem",
                        fontWeight: 600,
                        textAlign: "center",
                        letterSpacing: "0.03em",
                        transition: "color 0.2s",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {tech.name}
                    </span>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
