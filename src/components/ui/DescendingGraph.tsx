"use client";

import { motion, useReducedMotion } from "framer-motion";

export function DescendingGraph() {
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
      <motion.path
        d="M 0 18 L 80 32 L 160 48 L 240 68 L 320 84 L 400 96"
        fill="none"
        stroke="#6B6B6B"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: reduceMotion ? 1 : 0 }}
        whileInView={{ pathLength: 1 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        viewport={{ once: true }}
      />
    </svg>
  );
}
