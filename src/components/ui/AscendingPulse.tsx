"use client";

import { motion, useReducedMotion } from "framer-motion";

export function AscendingPulse() {
  const reduceMotion = useReducedMotion();

  return (
    <svg
      width="100%"
      height="96"
      viewBox="0 0 400 100"
      preserveAspectRatio="none"
      aria-hidden
      className="mb-6"
    >
      <defs>
        <linearGradient id="cherryGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#E94F37" />
          <stop offset="100%" stopColor="#FF6B35" />
        </linearGradient>
      </defs>
      <motion.path
        d="M 0 82 C 50 82, 70 55, 110 48 C 160 38, 180 72, 230 55 C 280 38, 300 22, 350 18 C 375 16, 390 14, 400 12"
        fill="none"
        stroke="url(#cherryGradient)"
        strokeWidth="3.5"
        strokeLinecap="round"
        initial={{ pathLength: reduceMotion ? 1 : 0 }}
        whileInView={{ pathLength: 1 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        viewport={{ once: true }}
      />
      <motion.circle
        cx="400"
        cy="12"
        r="6"
        fill="#10B981"
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: [0, 1.4, 1], opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.4, ease: "easeOut" }}
        viewport={{ once: true }}
      />
    </svg>
  );
}
