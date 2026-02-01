import type { HTMLAttributes } from "react";
import clsx from "clsx";

export type SectionProps = HTMLAttributes<HTMLElement>;

export default function Section({ className, ...props }: SectionProps) {
  return <section className={clsx("py-16 md:py-24", className)} {...props} />;
}
