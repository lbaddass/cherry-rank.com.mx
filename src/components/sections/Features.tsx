"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Camera, MapPin, Type } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { FadeUp } from "@/components/ui/FadeUp";
import { VIEWPORT, staggerContainer, fadeUp } from "@/lib/motion";

const features: {
  icon: LucideIcon;
  title: string;
  description: string;
}[] = [
  {
    icon: MapPin,
    title: "Ubicación Estratégica",
    description:
      "Dominamos el SEO local. Tu negocio aparece donde debe: en la cima de Google Maps.",
  },
  {
    icon: Camera,
    title: "IA de Imagen",
    description:
      "Generación y optimización visual con IA. Imágenes que rankean y convierten.",
  },
  {
    icon: Type,
    title: "Copy que Vende",
    description:
      "No escribimos para robots. Escribimos para que el cliente abra la cartera.",
  },
];

export function Features() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="bg-void py-16 md:py-24 lg:py-32">
      <Container>
        <FadeUp className="mx-auto max-w-2xl text-center">
          <h2
            className="font-display font-bold text-white"
            style={{
              fontSize: "clamp(2rem, 4vw, 3.5rem)",
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
            }}
          >
            Tu negocio con{" "}
            <span className="text-gradient-cherry">esteroides digitales</span>
          </h2>
        </FadeUp>

        <motion.div
          className="mt-12 grid grid-cols-1 gap-8 md:mt-16 md:grid-cols-3 md:gap-12"
          initial={reduceMotion ? undefined : "hidden"}
          whileInView={reduceMotion ? undefined : "visible"}
          viewport={VIEWPORT}
          variants={staggerContainer}
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                variants={reduceMotion ? undefined : fadeUp}
                className={`group flex flex-col items-center text-center transition duration-300 hover:scale-[1.02] ${
                  index < features.length - 1
                    ? "md:border-r md:border-white/10 md:pr-8 lg:pr-12"
                    : ""
                }`}
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-full border border-white/10 bg-white/5 transition duration-300 group-hover:bg-white/10">
                  <Icon className="h-7 w-7 text-burnt" strokeWidth={1.75} />
                </div>
                <h3 className="mt-6 text-lg font-semibold text-white">
                  {feature.title}
                </h3>
                <p className="mt-3 max-w-[280px] text-sm leading-relaxed text-white/60">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
}
