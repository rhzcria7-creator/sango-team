import { motion, useInView, useMotionValue, useTransform, animate, type Variants } from "framer-motion";
import { useEffect, useRef, useState } from "react";

/* ========================================================================
   SCROLL REVEAL — Animação on-scroll reutilizável
   ======================================================================== */

export function ScrollReveal({
  children,
  direction = "up",
  delay = 0,
  duration = 0.7,
  className = "",
}: {
  children: React.ReactNode;
  direction?: "up" | "down" | "left" | "right" | "fade" | "scale";
  delay?: number;
  duration?: number;
  className?: string;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const variants: Variants = {
    hidden: {
      opacity: 0,
      y: direction === "up" ? 40 : direction === "down" ? -40 : 0,
      x: direction === "left" ? 40 : direction === "right" ? -40 : 0,
      scale: direction === "scale" ? 0.9 : 1,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      scale: 1,
      transition: { duration, delay, ease: [0.22, 1, 0.36, 1] as any },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ========================================================================
   COUNT UP — Contador animado
   ======================================================================== */

export function CountUp({
  to,
  duration = 2,
  prefix = "",
  suffix = "",
}: {
  to: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const motionVal = useMotionValue(0);
  const rounded = useTransform(motionVal, (v) => Math.round(v));
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (inView) {
      const controls = animate(motionVal, to, { duration, ease: "easeOut" });
      const unsub = rounded.on("change", (v) => setDisplay(v));
      return () => {
        controls.stop();
        unsub();
      };
    }
  }, [inView, to, duration, motionVal, rounded]);

  return (
    <span ref={ref}>
      {prefix}
      {display.toLocaleString("pt-BR")}
      {suffix}
    </span>
  );
}

/* ========================================================================
   SECTION TITLE
   ======================================================================== */

export function SectionTitle({
  eyebrow,
  title,
  subtitle,
  align = "center",
  dark = true,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
  dark?: boolean;
}) {
  return (
    <ScrollReveal>
      <div className={`mb-12 md:mb-16 ${align === "center" ? "text-center" : ""}`}>
        {eyebrow && (
          <div className="inline-flex items-center gap-3 mb-4">
            <span className="h-px w-8 bg-sangao-red" />
            <span className="text-xs md:text-sm font-mono-tech tracking-[0.3em] text-sangao-red uppercase">
              {eyebrow}
            </span>
            <span className="h-px w-8 bg-sangao-red" />
          </div>
        )}
        <h2
          className={`font-display text-4xl md:text-5xl lg:text-6xl uppercase tracking-tight ${
            dark ? "text-white" : "text-deep-black"
          }`}
        >
          {title}
        </h2>
        {subtitle && (
          <p
            className={`mt-4 text-base md:text-lg max-w-2xl ${
              align === "center" ? "mx-auto" : ""
            } ${dark ? "text-gray-400" : "text-steel-gray"}`}
          >
            {subtitle}
          </p>
        )}
      </div>
    </ScrollReveal>
  );
}

/* ========================================================================
   BADGE
   ======================================================================== */

export function Badge({
  children,
  variant = "red",
  className = "",
}: {
  children: React.ReactNode;
  variant?: "red" | "gold" | "outline";
  className?: string;
}) {
  const variants = {
    red: "bg-sangao-red text-white",
    gold: "bg-champion-gold text-deep-black",
    outline: "border border-sangao-red/40 text-sangao-red-light",
  };
  return (
    <span
      className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${variants[variant]} ${className}`}
    >
      {children}
    </span>
  );
}

/* ========================================================================
   HERO TEXT REVEAL — Letra por letra
   ======================================================================== */

export function TextReveal({ text, className = "" }: { text: string; className?: string }) {
  const letters = text.split("");
  return (
    <span className={className}>
      {letters.map((char, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 40, rotateX: -90 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ duration: 0.5, delay: 0.3 + i * 0.03, ease: [0.22, 1, 0.36, 1] }}
          className="inline-block"
          style={{ display: char === " " ? "inline" : "inline-block" }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </span>
  );
}

/* ========================================================================
   MARQUEE — Faixa rolante infinita
   ======================================================================== */

export function Marquee({ items }: { items: string[] }) {
  const content = items.join(" • ") + " • ";
  return (
    <div className="relative overflow-hidden bg-sangao-red py-4 border-y-2 border-sangao-red-dark">
      <div className="flex animate-marquee whitespace-nowrap">
        {Array.from({ length: 4 }).map((_, i) => (
          <span
            key={i}
            className="font-display text-2xl md:text-4xl uppercase tracking-wider text-white mx-8 flex items-center"
          >
            {content}
          </span>
        ))}
      </div>
    </div>
  );
}

/* ========================================================================
   MEDAL SVG — Troféu dourado animado
   ======================================================================== */

export function TrophyIcon({ size = 40 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className="glow-pulse"
    >
      <defs>
        <linearGradient id="gold-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F4D03F" />
          <stop offset="50%" stopColor="#D4AF37" />
          <stop offset="100%" stopColor="#F4D03F" />
        </linearGradient>
      </defs>
      <path
        d="M6 3h12v4c0 2-2 4-4 4h-4c-2 0-4-2-4-4V3z M4 3h2v3c-1 0-2-1-2-2V3zm14 0h2v1c0 1-1 2-2 2V3zM9 13h6v2H9zM8 17h8v3H8z"
        fill="url(#gold-grad)"
        stroke="#8B6914"
        strokeWidth="0.5"
      />
    </svg>
  );
}

/* ========================================================================
   BELT VISUAL — Faixa colorida visual
   ======================================================================== */

export function BeltVisual({ color, name }: { color: string; name: string }) {
  return (
    <div className="flex flex-col items-center gap-2">
      <div
        className="w-20 h-3 rounded-sm shadow-lg relative"
        style={{ backgroundColor: color, boxShadow: "0 2px 8px rgba(0,0,0,0.5)" }}
      >
        <div
          className="absolute right-1 top-1/2 -translate-y-1/2 w-2 h-4 rounded-sm"
          style={{
            backgroundColor: color === "#000000" ? "#C8102E" : "#000000",
          }}
        />
      </div>
      <span className="text-xs font-mono-tech text-gray-400">{name}</span>
    </div>
  );
}
