"use client";

import clsx from "clsx";
import { motion } from "framer-motion";
import type { HTMLAttributes } from "react";

export type MarqueeProps = HTMLAttributes<HTMLDivElement> & {
  speed?: "normal" | "slow" | "fast";
  direction?: "left" | "right";
  pauseOnHover?: boolean;
  gradient?: boolean;
};

export default function Marquee({
  children,
  className,
  speed = "normal",
  direction = "left",
  pauseOnHover = false,
  gradient = false,
  ...props
}: MarqueeProps) {
  const duration =
    speed === "slow" ? 120 : speed === "fast" ? 20 : 60;

  return (
    <div
      className={clsx(
        "relative flex w-full overflow-hidden [--gap:2rem]",
        className
      )}
      {...props}
    >
      <motion.div
        className="flex min-w-full shrink-0 items-center gap-[var(--gap)]"
        initial={{ x: direction === "left" ? "0%" : "-100%" }}
        animate={{ x: direction === "left" ? "-100%" : "0%" }}
        transition={{ duration, repeat: Infinity, ease: "linear" }}
      >
        {children}
        {children}
      </motion.div>
      {gradient && (
        <>
          <div className="pointer-events-none absolute left-0 top-0 h-full w-1/4 bg-gradient-to-r from-background to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 h-full w-1/4 bg-gradient-to-l from-background to-transparent" />
        </>
      )}
    </div>
  );
}
