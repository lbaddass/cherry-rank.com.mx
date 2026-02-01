"use client";

import { motion } from "framer-motion";
import { ArrowRight, MapPin, Camera, Type } from "lucide-react";

const cardVariants = {
  hover: {
    rotateY: 180,
    transition: { duration: 0.5 },
  },
};

const iconMap = {
  map: MapPin,
  camera: Camera,
  type: Type,
};

export type KineticCardProps = {
  title: string;
  description: string;
  icon: keyof typeof iconMap;
};

export function KineticCard({ title, description, icon }: KineticCardProps) {
  const Icon = iconMap[icon];

  return (
    <motion.div
      className="relative h-64 w-full cursor-pointer rounded-lg border border-foreground/10 p-6 [transform-style:preserve-3d]"
      variants={cardVariants}
      whileHover="hover"
    >
      {/* Front */}
      <div className="flex h-full flex-col items-center justify-center space-y-4 text-center [backface-visibility:hidden]">
        <Icon className="h-12 w-12 text-accent" />
        <h3 className="font-clash text-2xl">{title}</h3>
      </div>

      {/* Back */}
      <div className="absolute inset-0 h-full w-full rounded-lg bg-accent p-6 text-background [backface-visibility:hidden] [transform:rotateY(180deg)]">
        <div className="flex h-full flex-col items-center justify-center text-center">
          <p className="text-lg">{description}</p>
          <ArrowRight className="mt-4 h-8 w-8" />
        </div>
      </div>
    </motion.div>
  );
}
