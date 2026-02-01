"use client";
import { motion } from "framer-motion";

export const DescendingGraph = () => {
  return (
    <svg
      width="100%"
      height="100"
      viewBox="0 0 400 100"
      preserveAspectRatio="none"
    >
      <motion.path
        d="M 0 20 L 100 40 L 200 60 L 300 80 L 400 100"
        fill="none"
        stroke="#D81E28"
        strokeWidth="4"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        transition={{ duration: 2, ease: "easeInOut" }}
        viewport={{ once: true }}
      />
    </svg>
  );
};
