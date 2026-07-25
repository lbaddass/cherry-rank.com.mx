"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { FadeUp } from "@/components/ui/FadeUp";
import { DescendingGraph } from "@/components/ui/DescendingGraph";
import { AscendingPulse } from "@/components/ui/AscendingPulse";
import { VIEWPORT, staggerContainer, scaleIn } from "@/lib/motion";

export function ValueProp() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="bg-cream py-16 md:py-20 lg:py-28">
      <Container>
        <FadeUp className="mx-auto max-w-[42rem] text-center">
          <h2
            className="font-display font-bold text-ink"
            style={{
              fontSize: "clamp(2rem, 4vw, 3.5rem)",
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
            }}
          >
            Tú necesitas{" "}
            <span className="text-gradient-cherry font-bold">ventas</span>, no
            reportes de 40 páginas que nadie lee.
          </h2>
        </FadeUp>

        <motion.div
          className="mt-12 grid grid-cols-1 gap-6 md:mt-16 md:grid-cols-2"
          initial={reduceMotion ? undefined : "hidden"}
          whileInView={reduceMotion ? undefined : "visible"}
          viewport={VIEWPORT}
          variants={staggerContainer}
        >
          <motion.article
            variants={reduceMotion ? undefined : scaleIn}
            className="rounded-2xl border border-[#E5E1DA] bg-pearl p-8 opacity-80 transition duration-300 hover:-translate-y-1 md:p-10"
          >
            <DescendingGraph />
            <h3 className="text-xl font-semibold text-ink">
              Agencias Tradicionales
            </h3>
            <p className="mt-3 text-base leading-relaxed text-ash">
              Gráficas de vanidad, PDFs confusos y resultados que no se traducen
              en clientes.
            </p>
          </motion.article>

          <motion.article
            variants={reduceMotion ? undefined : scaleIn}
            className="relative rounded-2xl border-2 border-cherry/20 bg-white p-8 shadow-xl shadow-black/5 transition duration-300 hover:-translate-y-1 hover:border-cherry md:p-10"
          >
            <span className="absolute right-6 top-6 rounded-full bg-cherry/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-cherry">
              Recomendado
            </span>
            <AscendingPulse />
            <h3 className="text-xl font-bold text-cherry">Cherry Rank</h3>
            <p className="mt-3 text-base font-medium leading-relaxed text-ink">
              Una línea directa a la visibilidad. Un pulso constante de
              crecimiento medible.
            </p>
          </motion.article>
        </motion.div>
      </Container>
    </section>
  );
}
