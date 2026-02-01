"use client";

import Button from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Input from "@/components/ui/Input";

export default function DiagnosticoPage() {
  return (
    <main>
      <Section>
        <Container className="grid gap-8 md:grid-cols-2">
          <div className="space-y-4">
            <h1 className="text-4xl font-semibold md:text-5xl">
              Diagnóstico especializado
            </h1>
            <p className="text-foreground/70">
              Para clínicas, proyectos políticos o marcas reguladas, validamos requisitos y
              riesgos antes de activar infraestructura SEO.
            </p>
          </div>
          <form className="space-y-6 border border-secondary bg-white/50 p-6">
            <div className="space-y-2">
              <label className="text-sm font-semibold uppercase tracking-wide">Nombre</label>
              <Input placeholder="Nombre completo" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-semibold uppercase tracking-wide">Sitio web</label>
              <Input placeholder="https://tusitio.com" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-semibold uppercase tracking-wide">
                Presupuesto estimado
              </label>
              <Input placeholder="Rango en MXN" />
            </div>
            <Button type="submit">Solicitar análisis</Button>
          </form>
        </Container>
      </Section>
    </main>
  );
}
