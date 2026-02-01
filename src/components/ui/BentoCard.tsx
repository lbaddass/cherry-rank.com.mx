"use client";

import clsx from "clsx";
import Button from "./Button";

export type BentoCardProps = {
  title: string;
  description: string;
  price: string;
  priceUnit: string;
  className?: string;
};

export function BentoCard({
  title,
  description,
  price,
  priceUnit,
  className,
}: BentoCardProps) {
  return (
    <div
      className={clsx(
        "group relative flex flex-col justify-between rounded-lg border border-background/20 bg-background/5 p-6 transition-colors duration-300 hover:bg-accent hover:text-background",
        className
      )}
    >
      <div className="space-y-2 text-left">
        <h3 className="font-clash text-2xl">{title}</h3>
        <p className="text-foreground/70 group-hover:text-background/80">
          {description}
        </p>
      </div>
      <div className="text-left">
        <p className="font-jetbrains text-5xl font-bold">
          ${price}
          <span className="text-2xl font-normal text-foreground/50 group-hover:text-background/70">
            /{priceUnit}
          </span>
        </p>
        <Button
          variant="outline"
          className="mt-4 border-foreground/30 bg-transparent text-foreground group-hover:border-background/50 group-hover:bg-background/10 group-hover:text-background"
        >
          Asegurar Crecimiento
        </Button>
      </div>
    </div>
  );
}
