import type { InputHTMLAttributes } from "react";
import clsx from "clsx";

export type InputProps = InputHTMLAttributes<HTMLInputElement>;

export default function Input({ className, ...props }: InputProps) {
  return (
    <input
      className={clsx(
        "w-full rounded-xl border border-[#E5E1DA] bg-cream px-4 py-3 text-base text-ink placeholder:text-ash/70 transition focus:border-cherry focus:outline-none focus-visible:ring-2 focus-visible:ring-cherry focus-visible:ring-offset-2",
        className
      )}
      {...props}
    />
  );
}
