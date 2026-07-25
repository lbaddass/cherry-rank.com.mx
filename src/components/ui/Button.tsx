"use client";

import type { ButtonHTMLAttributes, ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
import clsx from "clsx";
import { Lock } from "lucide-react";
import { EASE_SPRING } from "@/lib/motion";

const baseClasses =
  "inline-flex items-center justify-center gap-2 font-semibold tracking-tight transition-all duration-300 focus-ring disabled:cursor-not-allowed disabled:opacity-60";

const variants = {
  primary:
    "bg-cherry text-white shadow-lg shadow-red-500/25 hover:shadow-xl hover:shadow-red-500/40 rounded-full",
  "primary-solid":
    "bg-cherry text-white rounded-xl hover:bg-red-700 shadow-lg shadow-red-500/10",
  ink: "bg-ink text-white rounded-full hover:bg-black shadow-xl",
  outline:
    "border-2 border-ink text-ink bg-transparent rounded-xl hover:bg-ink hover:text-white",
  "outline-white":
    "border border-white text-white bg-transparent rounded-full hover:bg-white hover:text-black",
  ghost: "text-ink hover:text-cherry rounded-full",
};

const sizes = {
  sm: "px-4 py-2 text-sm",
  md: "px-8 py-4 text-base",
  lg: "px-10 py-5 text-lg",
  full: "w-full px-8 py-4 text-base",
};

export type ButtonVariant = keyof typeof variants;
export type ButtonSize = keyof typeof sizes;

export type ButtonProps = Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  "children"
> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
  isLoading?: boolean;
  showLock?: boolean;
  href?: string;
  children?: ReactNode;
};

export function buttonClasses({
  variant = "primary",
  size = "md",
  isLoading,
  className,
}: {
  variant?: ButtonVariant;
  size?: ButtonSize;
  isLoading?: boolean;
  className?: string;
}) {
  return clsx(baseClasses, variants[variant], sizes[size], className, {
    "pointer-events-none": isLoading,
  });
}

export default function Button({
  variant = "primary",
  size = "md",
  isLoading = false,
  showLock = false,
  className,
  disabled,
  children,
  href,
  type = "button",
  onClick,
}: ButtonProps) {
  const reduceMotion = useReducedMotion();
  const classes = buttonClasses({ variant, size, isLoading, className });

  const content = (
    <>
      {showLock && <Lock className="h-4 w-4" aria-hidden />}
      {isLoading ? "Procesando..." : children}
    </>
  );

  const motionProps = reduceMotion
    ? {}
    : {
        whileHover: { scale: 1.05 },
        whileTap: { scale: 0.98 },
        transition: { duration: 0.3, ease: EASE_SPRING },
      };

  if (href) {
    return (
      <motion.a
        href={href}
        className={classes}
        data-cursor-hover
        {...motionProps}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      className={classes}
      disabled={disabled || isLoading}
      onClick={onClick}
      data-cursor-hover
      {...motionProps}
    >
      {content}
    </motion.button>
  );
}
