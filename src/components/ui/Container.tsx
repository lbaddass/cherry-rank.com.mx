import type { HTMLAttributes } from "react";
import clsx from "clsx";

export type ContainerProps = HTMLAttributes<HTMLDivElement>;

export function Container({ className, ...props }: ContainerProps) {
  return (
    <div
      className={clsx(
        "mx-auto w-full max-w-container px-6 md:px-8 lg:px-12",
        className
      )}
      {...props}
    />
  );
}
