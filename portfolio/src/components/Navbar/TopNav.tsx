"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

/* ─── Data ───────────────────────────────────────────────────────────────── */
const NAV_LINKS = [
  { label: "Home",     href: "#home"     },
  { label: "About",    href: "#about"    },
  { label: "Projects", href: "#projects" },
  { label: "Skills",   href: "#skills"   },
  { label: "Journey",  href: "#journey"  },
  { label: "Contact",  href: "#contact"  },
];

/* ─── Component ──────────────────────────────────────────────────────────── */
export default function TopNav() {
  const [activeSection, setActiveSection] = useState<string>("home");
  const [hovered, setHovered] = useState<string | null>(null);

  const { scrollY } = useScroll();

  /* Scroll-driven transforms */
  const navHeight    = useTransform(scrollY, [0, 100], [60, 50]);
  const bgOpacity    = useTransform(scrollY, [0, 80],  [0.8, 0.97]);
  const borderOpacity = useTransform(scrollY, [0, 100], [0.05, 0.12]);

  /* Track active section via IntersectionObserver */
  useEffect(() => {
    const ids = NAV_LINKS.map((l) => l.href.replace("#", ""));
    const observers: IntersectionObserver[] = [];

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id); },
        { threshold: 0.4 }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) target.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.header
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
      style={{
        position: "fixed",
        top: 0,
        left: 60,      /* sidebar width */
        right: 0,
        height: navHeight,
        zIndex: 50,
        overflow: "hidden",
      }}
    >
      {/* Blurred dark background */}
      <motion.div
        style={{
          position: "absolute",
          inset: 0,
          backgroundColor: "#0a0a0a",
          opacity: bgOpacity,
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
        }}
      />

      {/* Bottom border */}
      <motion.div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "1px",
          backgroundColor: "#ffffff",
          opacity: borderOpacity,
        }}
      />

      {/* Content row */}
      <div
        style={{
          position: "relative",
          height: "100%",
          display: "flex",
          alignItems: "center",
          paddingLeft: "1.5rem",
          paddingRight: "1.5rem",
          gap: "2rem",
        }}
      >
        {/* ── Logo ── */}
        <motion.a
          href="#home"
          onClick={(e) => handleNavClick(e, "#home")}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
            flexShrink: 0,
            textDecoration: "none",
          }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <div
            style={{
              width: "2rem",
              height: "2rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              border: "1.5px solid #f97316",
              color: "#f97316",
              borderRadius: "6px",
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 700,
              fontSize: "0.875rem",
              flexShrink: 0,
            }}
          >
            A
          </div>
          <span
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 700,
              fontSize: "1rem",
              color: "#ffffff",
              lineHeight: 1,
            }}
          >
            Ali{" "}
            <span style={{ color: "#f97316" }}>Khan</span>
          </span>
        </motion.a>

        {/* ── Center nav pill ── */}
        <nav style={{ flex: 1, display: "flex", justifyContent: "center" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.125rem",
              padding: "0.375rem 0.5rem",
              borderRadius: "9999px",
              backgroundColor: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.07)",
            }}
          >
            {NAV_LINKS.map((link) => {
              const id = link.href.replace("#", "");
              const isActive = activeSection === id;
              const isHov    = hovered === id;

              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  onMouseEnter={() => setHovered(id)}
                  onMouseLeave={() => setHovered(null)}
                  style={{
                    position: "relative",
                    padding: "0.25rem 0.75rem",
                    fontSize: "0.8125rem",
                    borderRadius: "9999px",
                    color: isActive || isHov ? "#ffffff" : "#a1a1aa",
                    fontWeight: isActive ? 500 : 400,
                    fontFamily: "'Inter', sans-serif",
                    textDecoration: "none",
                    transition: "color 0.2s",
                    whiteSpace: "nowrap",
                  }}
                >
                  {link.label}

                  {/* Animated orange underline */}
                  {isActive && (
                    <motion.span
                      layoutId="active-underline"
                      style={{
                        position: "absolute",
                        bottom: "2px",
                        left: "0.75rem",
                        right: "0.75rem",
                        height: "2px",
                        borderRadius: "9999px",
                        backgroundColor: "#f97316",
                      }}
                      transition={{ type: "spring", bounce: 0.25, duration: 0.4 }}
                    />
                  )}
                </a>
              );
            })}
          </div>
        </nav>

        {/* ── CTA button ── */}
        <motion.a
          href="#contact"
          onClick={(e) => handleNavClick(e, "#contact")}
          style={{
            flexShrink: 0,
            padding: "0.4rem 1.25rem",
            borderRadius: "9999px",
            border: "1.5px solid #f97316",
            color: "#f97316",
            fontFamily: "'Inter', sans-serif",
            fontSize: "0.875rem",
            fontWeight: 500,
            textDecoration: "none",
            whiteSpace: "nowrap",
          }}
          whileHover={{
            backgroundColor: "#f97316",
            color: "#ffffff",
            scale: 1.03,
          }}
          whileTap={{ scale: 0.97 }}
          transition={{ duration: 0.18 }}
        >
          Let&apos;s Build →
        </motion.a>
      </div>
    </motion.header>
  );
}
