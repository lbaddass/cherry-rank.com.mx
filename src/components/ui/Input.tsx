import type { InputHTMLAttributes } from "react";
import clsx from "clsx";

export type InputProps = InputHTMLAttributes<HTMLInputElement>;

export default function Input({ className, ...props }: InputProps) {
  return (
    <input
      className={clsx(
        "w-full border-b border-secondary bg-transparent py-2 text-base text-foreground placeholder:text-foreground/50 focus:border-primary focus:outline-none",
        className
      )}
      {...props}
    />
  );
}
