"use client";

import { Container } from "@/components/ui/Container";
import { FadeUp } from "@/components/ui/FadeUp";
import Button from "@/components/ui/Button";

export function HighRisk() {
  return (
    <section className="bg-void py-16 md:py-24 lg:py-32">
      <Container>
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-5 lg:gap-16">
          <FadeUp className="lg:col-span-3">
            <p className="text-xs font-semibold uppercase tracking-[0.1em] text-burnt">
              Especialización
            </p>
            <h2
              className="mt-4 font-display font-bold text-white"
              style={{
                fontSize: "clamp(2rem, 4vw, 3.5rem)",
                lineHeight: 1.05,
                letterSpacing: "-0.02em",
              }}
            >
              Especialistas en Sectores de{" "}
              <span className="text-cherry">Alto Riesgo</span>.
            </h2>
            <p className="mt-6 max-w-[480px] text-lg leading-relaxed text-white/70">
              Si manejas una Clínica de Rehabilitación o una Campaña Política,
              sabes que Google no juega. Una mala gestión y te borran del mapa.
              Nosotros construimos autoridad que resiste.
            </p>
            <div className="mt-10">
              <Button href="/diagnostico" variant="outline-white" size="md">
                Agendar Diagnóstico de Autoridad
              </Button>
            </div>
          </FadeUp>

          <FadeUp className="lg:col-span-2" delay={0.15}>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
              <p className="text-2xl font-semibold leading-snug text-white">
                97% de nuestros clientes en nichos sensibles mantienen posición
                #1 por +6 meses.
              </p>
            </div>
          </FadeUp>
        </div>
      </Container>
    </section>
  );
}
