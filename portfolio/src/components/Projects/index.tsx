"use client";

import { motion, Variants } from "framer-motion";
import { useState } from "react";

/* ─── Easing definitions ─────────────────────────────────────────────────── */
const EASE_OUT: [number, number, number, number] = [0.215, 0.61, 0.355, 1];
const EASE_SPRING: [number, number, number, number] = [0.16, 1, 0.3, 1];

/* ─── Animation Variants ─────────────────────────────────────────────────── */
const headerVariants: Variants = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: EASE_OUT },
  },
};

const gridVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: EASE_OUT },
  },
};

/* ─── Project Data ───────────────────────────────────────────────────────── */
interface Project {
  id: string;
  number: string;
  name: string;
  tech: string[];
  tagColor: "blue" | "green" | "orange";
  gradient: string;
  link: string;
}

const PROJECTS: Project[] = [
  {
    id: "student-portal",
    number: "01",
    name: "Student Portal",
    tech: ["Next.js", "Supabase", "Vercel"],
    tagColor: "blue",
    gradient: "from-blue-600/40 to-indigo-900/60",
    link: "#",
  },
  {
    id: "guest-rooms",
    number: "02",
    name: "Guest Rooms",
    tech: ["Next.js", "Supabase"],
    tagColor: "green",
    gradient: "from-emerald-600/40 to-teal-900/60",
    link: "#",
  },
  {
    id: "portfolio-v2",
    number: "03",
    name: "Portfolio v2",
    tech: ["Next.js", "Three.js"],
    tagColor: "orange",
    gradient: "from-orange-500/40 to-red-900/60",
    link: "#",
  },
];

/* Helper to generate tag styles based on tagColor */
function getTagStyles(color: "blue" | "green" | "orange") {
  switch (color) {
    case "blue":
      return {
        color: "#60a5fa",
        backgroundColor: "rgba(96,165,250,0.08)",
        borderColor: "rgba(96,165,250,0.15)",
      };
    case "green":
      return {
        color: "#34d399",
        backgroundColor: "rgba(52,211,153,0.08)",
        borderColor: "rgba(52,211,153,0.15)",
      };
    case "orange":
      return {
        color: "#f97316",
        backgroundColor: "rgba(249,115,22,0.08)",
        borderColor: "rgba(249,115,22,0.15)",
      };
  }
}

export default function ProjectsSection() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const [headerLinkHovered, setHeaderLinkHovered] = useState(false);

  return (
    <section
      id="projects"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-bg-primary py-24"
      style={{ fontFamily: "var(--font-inter), sans-serif" }}
    >
      {/* Background glow accent */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(ellipse 60% 40% at 70% 80%, rgba(249,115,22,0.04), transparent)",
        }}
      />

      <div className="max-w-7xl mx-auto w-full px-6 lg:px-8 flex flex-col space-y-16">
        
        {/* ── SECTION HEADER ── */}
        <motion.div
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-white/5 pb-8"
        >
          <div className="flex flex-col space-y-3">
            <div className="flex items-center space-x-2">
              <span className="text-orange font-bold font-display">/</span>
              <span className="text-text-muted text-sm font-mono tracking-widest uppercase font-semibold">
                Selected Work
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold font-display text-white tracking-tight leading-none">
              Projects that <span className="text-orange">speak for themselves</span>
            </h2>
          </div>

          <motion.a
            href="#"
            onMouseEnter={() => setHeaderLinkHovered(true)}
            onMouseLeave={() => setHeaderLinkHovered(false)}
            className="text-orange text-sm font-semibold tracking-wide font-sans flex items-center gap-1 self-start md:self-auto transition-colors duration-200"
            style={{ textDecoration: "none" }}
            whileHover={{ scale: 1.02 }}
          >
            View All Projects
            <motion.span
              animate={{ x: headerLinkHovered ? 4 : 0 }}
              transition={{ duration: 0.2 }}
            >
              &rarr;
            </motion.span>
          </motion.a>
        </motion.div>

        {/* ── PROJECTS GRID ── */}
        <motion.div
          variants={gridVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {PROJECTS.map((project) => {
            const isHovered = hoveredCard === project.id;
            const tagStyles = getTagStyles(project.tagColor);

            return (
              <motion.article
                key={project.id}
                variants={cardVariants}
                onMouseEnter={() => setHoveredCard(project.id)}
                onMouseLeave={() => setHoveredCard(null)}
                whileHover={{
                  y: -6,
                  borderColor: "rgba(249, 115, 22, 0.4)",
                  boxShadow: "0 12px 30px rgba(249, 115, 22, 0.12)",
                }}
                transition={{ duration: 0.35, ease: EASE_SPRING }}
                className="group relative flex flex-col bg-[#111111] border border-white/10 rounded-2xl overflow-hidden cursor-pointer"
              >
                
                {/* Image Placeholder Area with Gradient */}
                <div className={`relative h-48 bg-gradient-to-br ${project.gradient} overflow-hidden flex items-center justify-center select-none`}>
                  {/* Subtle Project Number Watermark */}
                  <span className="absolute right-4 top-2 text-8xl font-black text-white/5 tracking-tighter font-display select-none pointer-events-none">
                    {project.number}
                  </span>

                  {/* Icon or visual centerpiece */}
                  <div className="w-12 h-12 rounded-xl bg-black/30 border border-white/10 backdrop-blur-md flex items-center justify-center text-xl font-bold text-white shadow-inner">
                    {project.name.charAt(0)}
                  </div>

                  {/* Dark overlay on hover */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: isHovered ? 1 : 0 }}
                    transition={{ duration: 0.25 }}
                    className="absolute inset-0 bg-black/75 flex items-center justify-center"
                  >
                    <span className="px-5 py-2.5 bg-orange hover:bg-orange-dark text-white rounded-full text-xs font-semibold tracking-wider uppercase transition-colors duration-200 shadow-md shadow-orange/15">
                      View Project &rarr;
                    </span>
                  </motion.div>
                </div>

                {/* Bottom Content Area */}
                <div className="flex-1 flex flex-col justify-between p-6 space-y-6">
                  <div className="space-y-3">
                    <h3 className="text-xl font-bold text-white font-display group-hover:text-orange transition-colors duration-300">
                      {project.name}
                    </h3>
                    
                    {/* Tech Stack Tags */}
                    <div className="flex flex-wrap gap-1.5">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          style={tagStyles}
                          className="px-2.5 py-0.5 rounded-full text-[10px] font-semibold tracking-wide uppercase border font-mono"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Link Arrow on bottom-right */}
                  <div className="flex items-center justify-end">
                    <motion.span
                      animate={{
                        x: isHovered ? 4 : 0,
                      }}
                      transition={{ duration: 0.25 }}
                      className="text-orange text-lg font-bold select-none"
                    >
                      &rarr;
                    </motion.span>
                  </div>
                </div>

                {/* Outer anchor link overlay for full card clickability */}
                <a
                  href={project.link}
                  className="absolute inset-0 z-10"
                  aria-label={`Open project details for ${project.name}`}
                />

              </motion.article>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
