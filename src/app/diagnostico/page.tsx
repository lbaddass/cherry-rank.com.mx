"use client";

import Button from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Input from "@/components/ui/Input";
import { StickyHeader } from "@/components/layout/StickyHeader";
import Link from "next/link";

export default function DiagnosticoPage() {
  return (
    <>
      <StickyHeader />
      <main className="min-h-screen bg-cream">
        <Section dense className="pt-24">
          <Container className="grid gap-12 md:grid-cols-2">
            <div className="space-y-4">
              <Link
                href="/"
                className="text-sm font-medium text-ash transition-colors hover:text-cherry focus-ring rounded-sm"
              >
                ← Cherry Rank
              </Link>
              <h1
                className="font-display font-bold text-ink"
                style={{
                  fontSize: "clamp(2rem, 4vw, 3.5rem)",
                  lineHeight: 1.05,
                  letterSpacing: "-0.02em",
                }}
              >
                Diagnóstico de autoridad
              </h1>
              <p className="text-lg leading-relaxed text-ash">
                Este formulario filtra proyectos de alto impacto en salud,
                política y sectores altamente regulados. Responde con claridad
                para recibir un análisis.
              </p>
            </div>
            <form className="space-y-6 rounded-2xl border border-[#E5E1DA] bg-white p-8 shadow-xl shadow-black/5 md:p-10">
              <div className="space-y-2">
                <label className="text-xs font-semibold uppercase tracking-[0.05em] text-ash">
                  Nombre
                </label>
                <Input placeholder="Nombre completo" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-semibold uppercase tracking-[0.05em] text-ash">
                  Sitio web
                </label>
                <Input placeholder="https://" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-semibold uppercase tracking-[0.05em] text-ash">
                  Presupuesto estimado
                </label>
                <Input placeholder="MXN" />
              </div>
              <Button type="submit" variant="primary" size="full">
                Solicitar análisis
              </Button>
            </form>
          </Container>
        </Section>
      </main>
    </>
  );
}
