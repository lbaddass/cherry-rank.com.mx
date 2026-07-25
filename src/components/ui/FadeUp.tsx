"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import { EASE_IN_DECEL, VIEWPORT, fadeUp } from "@/lib/motion";

type FadeUpProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "section" | "header" | "footer";
};

export function FadeUp({
  children,
  className,
  delay = 0,
  as = "div",
}: FadeUpProps) {
  const reduceMotion = useReducedMotion();
  const Component = motion[as];

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <Component
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT}
      variants={{
        ...fadeUp,
        visible: {
          ...fadeUp.visible,
          transition: { duration: 0.7, ease: EASE_IN_DECEL, delay },
        },
      }}
    >
      {children}
    </Component>
  );
}
