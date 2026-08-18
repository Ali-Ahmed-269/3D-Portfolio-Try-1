"use client";

import { motion, Variants } from "framer-motion";
import { useEffect, useState } from "react";

/* ─── Type definitions ───────────────────────────────────────────────────── */
interface StatItem {
  icon: string;
  value: string;
  label: string;
}

interface TechBadge {
  name: string;
  icon: string;
  top: string;
  right: string;
}

/* ─── Mock Data ──────────────────────────────────────────────────────────── */
const STATS: StatItem[] = [
  { icon: "🚀", value: "8+", label: "Projects Completed" },
  { icon: "👥", value: "2+", label: "Years Learning" },
  { icon: "🏆", value: "1", label: "Goal: Keep Improving" },
];

const TECH_BADGES: TechBadge[] = [
  { name: "Next.js", icon: "🌐", top: "10%", right: "-40px" },
  { name: "Svelte", icon: "🔥", top: "28%", right: "-60px" },
  { name: "TypeScript", icon: "📘", top: "46%", right: "-45px" },
  { name: "Supabase", icon: "⚡", top: "64%", right: "-55px" },
  { name: "Tailwind CSS", icon: "🎨", top: "82%", right: "-35px" },
];

/* ─── Framer Motion Variants ─────────────────────────────────────────────── */
const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const leftItemVariants: Variants = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: [0.215, 0.61, 0.355, 1] as const },
  },
};

const rightVisualVariants: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1, ease: [0.16, 1, 0.3, 1] as const },
  },
};

const badgeVariants: Variants = {
  hidden: { opacity: 0, x: 50 },
  visible: (custom: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.8 + custom * 0.1,
      duration: 0.6,
      ease: [0.215, 0.61, 0.355, 1] as const,
    },
  }),
};

export default function HeroSection() {
  const [cursorVisible, setCursorVisible] = useState(true);

  // Blinking cursor logic
  useEffect(() => {
    const interval = setInterval(() => {
      setCursorVisible((prev) => !prev);
    }, 700);
    return () => clearInterval(interval);
  }, []);

  const handleScrollClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const target = document.querySelector("#about");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-[calc(100vh-60px)] flex flex-col justify-between overflow-hidden bg-bg-primary py-12 md:py-20"
      style={{ fontFamily: "var(--font-inter), sans-serif" }}
    >
      <div className="max-w-7xl mx-auto w-full px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center flex-1">
        
        {/* ── LEFT COLUMN: Text Content & Stats ── */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="lg:col-span-7 flex flex-col justify-center space-y-6 md:space-y-8"
        >
          {/* Tagline / Monospace Label */}
          <motion.div variants={leftItemVariants} className="flex items-center space-x-1">
            <span
              className="text-orange text-xs md:text-sm font-mono tracking-[0.2em] uppercase font-semibold"
            >
              Frontend Developer
            </span>
            <span
              className="text-orange text-xs md:text-sm font-mono transition-opacity duration-100"
              style={{ opacity: cursorVisible ? 1 : 0 }}
            >
              |
            </span>
          </motion.div>

          {/* Main Cinematic Heading */}
          <motion.h1
            variants={leftItemVariants}
            className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white font-display leading-[1.1]"
          >
            I build interfaces <br className="hidden sm:inline" />
            that feel{" "}
            <span className="text-orange italic font-serif font-light">alive.</span>
          </motion.h1>

          {/* Subtext description */}
          <motion.p
            variants={leftItemVariants}
            className="text-text-muted text-base md:text-lg max-w-xl leading-relaxed"
          >
            Crafting modern, fast and beautiful web experiences with Next.js,
            Svelte and modern web technologies.
          </motion.p>

          {/* Action CTAs */}
          <motion.div variants={leftItemVariants} className="flex flex-wrap gap-4 pt-2">
            <motion.a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="px-8 py-3.5 bg-orange hover:bg-orange-dark text-white rounded-full font-medium text-sm transition-colors duration-200 shadow-lg shadow-orange/20"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              View My Work &rarr;
            </motion.a>
            <motion.a
              href="#"
              className="px-8 py-3.5 bg-transparent border border-white/20 hover:border-white hover:bg-white hover:text-bg-primary text-white rounded-full font-medium text-sm transition-all duration-300"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Download CV &darr;
            </motion.a>
          </motion.div>

          {/* Stats Bar */}
          <motion.div
            variants={leftItemVariants}
            className="pt-6 md:pt-10 border-t border-white/5 grid grid-cols-3 gap-4"
          >
            {STATS.map((stat, idx) => (
              <div
                key={stat.label}
                className={`flex flex-col space-y-1.5 ${
                  idx > 0 ? "border-l border-white/5 pl-4 sm:pl-6" : ""
                }`}
              >
                <div className="flex items-center space-x-2">
                  <span className="text-lg md:text-xl">{stat.icon}</span>
                  <span className="text-xl md:text-3xl font-bold text-white font-display">
                    {stat.value}
                  </span>
                </div>
                <span className="text-text-muted text-xs md:text-sm font-light">
                  {stat.label}
                </span>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* ── RIGHT COLUMN: Glowing Circle & Floating Badges ── */}
        <div className="lg:col-span-5 flex items-center justify-center relative">
          <motion.div
            variants={rightVisualVariants}
            initial="hidden"
            animate="visible"
            className="relative w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] flex items-center justify-center"
          >
            {/* Glowing Orange Circle with Pulse */}
            <motion.div
              animate={{
                scale: [1, 1.03, 1],
                boxShadow: [
                  "0 0 60px rgba(249, 115, 22, 0.45), 0 0 120px rgba(249, 115, 22, 0.2), 0 0 200px rgba(249, 115, 22, 0.1)",
                  "0 0 70px rgba(249, 115, 22, 0.55), 0 0 140px rgba(249, 115, 22, 0.3), 0 0 220px rgba(249, 115, 22, 0.15)",
                  "0 0 60px rgba(249, 115, 22, 0.45), 0 0 120px rgba(249, 115, 22, 0.2), 0 0 200px rgba(249, 115, 22, 0.1)",
                ],
              }}
              transition={{
                duration: 6,
                ease: "easeInOut",
                repeat: Infinity,
              }}
              className="absolute inset-0 rounded-full border-2 border-orange/40 flex items-center justify-center overflow-hidden bg-[#0c0c0c]"
            />

            {/* Silhouette Placeholder */}
            <div className="absolute w-[180px] h-[230px] sm:w-[220px] sm:h-[280px] bottom-0 rounded-t-[100px] overflow-hidden bg-gradient-to-b from-zinc-700 to-zinc-900 border-t border-white/10 flex items-end justify-center">
              {/* Internal styling to simulate shadows */}
              <div className="w-full h-full bg-gradient-to-t from-bg-primary via-transparent to-transparent opacity-90 absolute bottom-0" />
            </div>

            {/* Tech Badges Stack */}
            {TECH_BADGES.map((badge, idx) => (
              <motion.div
                key={badge.name}
                custom={idx}
                variants={badgeVariants}
                className="absolute flex items-center space-x-2 px-3 py-1.5 rounded-lg bg-[#111111]/85 backdrop-blur-md border border-white/10 shadow-lg select-none"
                style={{
                  top: badge.top,
                  right: badge.right,
                }}
                whileHover={{
                  scale: 1.05,
                  borderColor: "rgba(249, 115, 22, 0.4)",
                  boxShadow: "0 4px 20px rgba(249, 115, 22, 0.15)",
                }}
              >
                <span className="text-sm">{badge.icon}</span>
                <span className="text-xs font-semibold text-white font-sans tracking-wide">
                  {badge.name}
                </span>
              </motion.div>
            ))}

            {/* Floating Quote Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="absolute -bottom-8 -left-6 sm:-left-12 max-w-[210px] sm:max-w-[240px] px-4 py-3.5 rounded-xl bg-[#111111]/90 backdrop-blur-md border border-white/10 shadow-xl"
              whileHover={{ y: -3 }}
            >
              <span className="absolute -top-3 left-3 text-3xl text-orange font-serif select-none">
                “
              </span>
              <p className="text-[11px] sm:text-xs text-text-muted leading-relaxed italic pt-1">
                Code is not just logic, it&apos;s creativity turned into real experiences.
              </p>
              <div className="text-[9px] sm:text-[10px] font-semibold text-orange tracking-widest uppercase mt-2">
                — Ali Ahmed Khan
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* ── SCROLL TO EXPLORE ── */}
      <div className="w-full flex justify-center pt-8">
        <a
          href="#about"
          onClick={handleScrollClick}
          className="flex flex-col items-center space-y-1.5 group select-none text-text-muted hover:text-white transition-colors duration-200"
        >
          <span className="text-xs font-mono tracking-widest uppercase">
            Scroll to explore
          </span>
          <motion.span
            animate={{ y: [0, 4, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="text-xs font-bold"
          >
            &darr;
          </motion.span>
        </a>
      </div>
    </section>
  );
}
