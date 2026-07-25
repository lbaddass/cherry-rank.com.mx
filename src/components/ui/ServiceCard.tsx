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

export default function ServiceCard({
  title,
  price,
  features,
  slug,
}: ServiceCardProps) {
  return (
    <motion.article
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
      className="flex h-full flex-col justify-between rounded-2xl border border-[#E5E1DA] bg-pearl p-8 transition duration-300 hover:border-cherry md:p-10"
    >
      <div className="space-y-4">
        <div>
          <h3 className="font-display text-xl font-semibold text-ink">{title}</h3>
          <p className="mt-2 font-display text-3xl font-bold text-cherry">
            {price}
          </p>
        </div>
        <ul className="space-y-2 text-sm text-ash">
          {features.map((feature) => (
            <li key={feature} className="flex items-start gap-2">
              <Check className="mt-0.5 h-4 w-4 shrink-0 text-cherry" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-6">
        <Link
          href={`/checkout?service=${slug}`}
          className={buttonClasses({ variant: "outline", size: "full" })}
          data-cursor-hover
        >
          Contratar
        </Link>
      </div>
    </motion.article>
  );
}
