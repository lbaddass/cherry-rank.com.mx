import type { HTMLAttributes } from "react";
import clsx from "clsx";

export type SectionProps = HTMLAttributes<HTMLElement> & {
  dense?: boolean;
};

export default function Section({
  className,
  dense = false,
  ...props
}: SectionProps) {
  return (
    <section
      className={clsx(
        dense ? "py-16 md:py-24 lg:py-32" : "py-16 md:py-20 lg:py-28",
        className
      )}
      {...props}
    />
  );
}
