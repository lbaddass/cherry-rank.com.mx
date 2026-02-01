"use client";
import { motion } from "framer-motion";

export const AscendingPulse = () => {
  return (
    <svg
      width="100%"
      height="100"
      viewBox="0 0 400 100"
      preserveAspectRatio="none"
    >
      <motion.path
        d="M 0 80 C 40 80, 60 20, 100 20 C 140 20, 160 80, 200 80 C 240 80, 260 20, 300 20 C 340 20, 360 80, 400 80"
        fill="none"
        stroke="#F44A22"
        strokeWidth="4"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        transition={{ duration: 2, ease: "easeInOut" }}
        viewport={{ once: true }}
      />
      <motion.path
        d="M 0 80 C 40 80, 60 20, 100 20 C 140 20, 160 80, 200 80 C 240 80, 260 20, 300 20 C 340 20, 360 80, 400 80"
        fill="none"
        stroke="#F44A22"
        strokeWidth="4"
        strokeOpacity="0.3"
      />
    </svg>
  );
};
