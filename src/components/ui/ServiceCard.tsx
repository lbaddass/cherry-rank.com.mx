"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import Link from "next/link";
import { buttonClasses } from "./Button";

export type ServiceCardProps = {
  title: string;
  price: string;
  features: string[];
  slug: string;
};

export default function ServiceCard({ title, price, features, slug }: ServiceCardProps) {
  return (
    <motion.article
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
      className="flex h-full flex-col justify-between rounded-sm border border-secondary bg-white/50 p-6 shadow-sm transition duration-fast ease-out-expo hover:border-primary/30 hover:shadow-lg"
    >
      <div className="space-y-4">
        <div>
          <h3 className="text-2xl font-semibold text-foreground">{title}</h3>
          <p className="mt-2 text-xl font-bold text-primary font-inter">{price}</p>
        </div>
        <ul className="space-y-2 text-sm text-foreground/80">
          {features.map((feature) => (
            <li key={feature} className="flex items-start gap-2">
              <Check className="mt-0.5 h-4 w-4 text-primary" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-6">
        <Link
          href={`/checkout?service=${slug}`}
          className={buttonClasses({ variant: "outline" })}
        >
          Comprar ahora
        </Link>
      </div>
    </motion.article>
  );
}
