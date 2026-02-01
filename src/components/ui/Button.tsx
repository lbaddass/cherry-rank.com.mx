import type { ButtonHTMLAttributes } from "react";
import clsx from "clsx";

const baseClasses =
  "inline-flex items-center justify-center rounded-sm font-medium tracking-wide transition duration-fast ease-out-expo focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-60";

const variants = {
  primary: "bg-primary text-white hover:opacity-90",
  outline: "border border-primary text-primary hover:bg-primary/5",
  ghost: "text-primary hover:bg-primary/5",
};

const sizes = {
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-6 text-base",
  lg: "h-12 px-8 text-lg",
};

export type ButtonVariant = keyof typeof variants;
export type ButtonSize = keyof typeof sizes;

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
  isLoading?: boolean;
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
  className,
  disabled,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={buttonClasses({ variant, size, isLoading, className })}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading ? "Procesando..." : children}
    </button>
  );
}
