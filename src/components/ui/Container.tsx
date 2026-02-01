import type { HTMLAttributes } from "react";
import clsx from "clsx";

export type ContainerProps = HTMLAttributes<HTMLDivElement>;

export function Container({ className, ...props }: ContainerProps) {
  return (
    <div className={clsx("mx-auto max-w-7xl px-6", className)} {...props} />
  );
}
