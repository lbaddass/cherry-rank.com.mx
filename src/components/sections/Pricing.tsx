"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Check, Shield } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { FadeUp } from "@/components/ui/FadeUp";
import Button from "@/components/ui/Button";
import { VIEWPORT, staggerContainer, scaleIn } from "@/lib/motion";

type Plan = {
  name: string;
  price: string;
  unit: string;
  features: string[];
  cta: string;
  href: string;
  featured?: boolean;
  scarcity?: string;
};

const plans: Plan[] = [
  {
    name: "Escudo de Reseñas",
    price: "$750",
    unit: "/mes",
    features: [
      "Solicitud automática de reseñas",
      "Monitoreo de reputación",
      "Respuestas sugeridas con IA",
      "Alertas de reseñas negativas",
    ],
    cta: "Empezar Escudo",
    href: "/checkout?service=escudo-de-resenas",
  },
  {
    name: "Micro-Retainer",
    price: "$1,899",
    unit: "/mes",
    featured: true,
    scarcity: "Solo 5 cupos disponibles este mes",
    features: [
      "4 artículos SEO mensuales",
      "Optimización técnica básica",
      "Reporte de conversiones (no de vanidad)",
      "Soporte directo vía WhatsApp",
    ],
    cta: "Asegurar mi cupo",
    href: "/checkout?service=micro-retainer",
  },
  {
    name: "Pack Imagen Perfecta",
    price: "$950",
    unit: "/único",
    features: [
      "10 fotos optimizadas para Maps",
      "ADN visual de marca",
      "Metadatos SEO en cada imagen",
      "Entrega en 72 horas",
    ],
    cta: "Pedir Pack",
    href: "/checkout?service=pack-imagen-perfecta",
  },
];

function PricingCard({ plan }: { plan: Plan }) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.article
      variants={reduceMotion ? undefined : scaleIn}
      className={`relative flex flex-col rounded-2xl p-8 transition duration-300 hover:-translate-y-1 md:p-10 ${
        plan.featured
          ? "z-10 order-first border-2 border-cherry bg-white shadow-2xl shadow-red-500/10 md:col-span-2 md:scale-100 lg:order-none lg:col-span-1 lg:scale-105"
          : "border border-[#E5E1DA] bg-pearl"
      }`}
    >
      {plan.featured && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-cherry px-3 py-1 text-xs font-bold uppercase tracking-wide text-white">
          Más Popular
        </span>
      )}

      <h3 className="text-lg font-semibold text-ink">{plan.name}</h3>

      <div className="mt-6">
        <p
          className="font-display font-bold text-ink"
          style={{
            fontSize: "clamp(2.5rem, 5vw, 3.5rem)",
            lineHeight: 1,
          }}
        >
          {plan.price}
        </p>
        <p className="mt-1 text-sm text-ash">{plan.unit}</p>
      </div>

      {plan.scarcity && (
        <p className="mt-4 flex items-center gap-2 text-sm font-medium text-cherry">
          <span className="inline-block h-2 w-2 animate-pulse-dot rounded-full bg-cherry" />
          {plan.scarcity}
        </p>
      )}

      <ul className="mt-8 flex flex-1 flex-col gap-3">
        {plan.features.map((feature) => (
          <li key={feature} className="flex items-start gap-3 text-sm text-ink">
            <Check
              className="mt-0.5 h-4 w-4 shrink-0 text-cherry"
              strokeWidth={2.5}
            />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <div className="mt-8">
        <Button
          href={plan.href}
          variant={plan.featured ? "primary-solid" : "outline"}
          size="full"
          showLock
          className={
            plan.featured
              ? "hover:scale-[1.02]"
              : "hover:scale-[1.02] !rounded-xl"
          }
        >
          {plan.cta} · Pago seguro
        </Button>
      </div>
    </motion.article>
  );
}

export function Pricing() {
  const reduceMotion = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], reduceMotion ? [0, 0] : [24, -24]);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-cream py-16 md:py-20 lg:py-28"
    >
      <motion.div
        aria-hidden
        style={{ y }}
        className="pointer-events-none absolute inset-x-0 top-1/4 -z-0 mx-auto h-96 max-w-4xl rounded-[3rem] bg-pearl/60"
      />

      <Container className="relative z-10">
        <FadeUp className="mx-auto max-w-xl text-center">
          <h2
            className="font-display font-bold text-ink"
            style={{
              fontSize: "clamp(2rem, 4vw, 3.5rem)",
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
            }}
          >
            Precios Transparentes.
          </h2>
          <p className="mx-auto mt-4 max-w-[36rem] text-base leading-relaxed text-ash">
            En México estamos acostumbrados al &quot;presupuesto por DM&quot;.
            Aquí no. Tú eliges, tú mandas.
          </p>
        </FadeUp>

        <motion.div
          className="mt-12 grid grid-cols-1 gap-6 md:mt-16 md:grid-cols-2 lg:grid-cols-3"
          initial={reduceMotion ? undefined : "hidden"}
          whileInView={reduceMotion ? undefined : "visible"}
          viewport={VIEWPORT}
          variants={staggerContainer}
        >
          {plans.map((plan) => (
            <PricingCard key={plan.name} plan={plan} />
          ))}
        </motion.div>

        <FadeUp className="mt-12" delay={0.15}>
          <div className="flex flex-col items-center justify-center gap-4 text-center text-sm text-ash md:flex-row md:gap-8">
            <span className="inline-flex items-center gap-2">
              <Shield className="h-4 w-4 text-ash" />
              Pagos seguros vía Stripe
            </span>
            <span className="hidden h-1 w-1 rounded-full bg-ash/40 md:inline-block" />
            <span>Cancela cuando quieras</span>
            <span className="hidden h-1 w-1 rounded-full bg-ash/40 md:inline-block" />
            <span>Resultados en 30 días o te regresamos tu dinero</span>
          </div>
        </FadeUp>
      </Container>
    </section>
  );
}
