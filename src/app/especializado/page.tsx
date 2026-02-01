import Link from "next/link";
import { Container } from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import { buttonClasses } from "@/components/ui/Button";

export default function EspecializadoPage() {
  return (
    <main>
      <Section>
        <Container className="grid gap-8 md:grid-cols-2">
          <div className="space-y-4">
            <p className="text-sm uppercase tracking-widest text-primary/70">
              Nichos delicados
            </p>
            <h1 className="text-4xl font-semibold md:text-5xl">
              Salud y política requieren una arquitectura distinta.
            </h1>
            <p className="text-foreground/70">
              En sectores regulados no hay margen para improvisar. Cherry Rank diseña
              infraestructura SEO alineada a políticas editoriales y compliance, con
              validación previa para proteger tu marca.
            </p>
          </div>
          <div className="space-y-6 border border-secondary bg-white/60 p-6">
            <h2 className="text-2xl font-semibold">Diagnóstico especializado</h2>
            <p className="text-foreground/70">
              Evaluamos riesgos, narrativa y oportunidad antes de ejecutar cualquier
              despliegue. Recibirás un plan estratégico personalizado.
            </p>
            <Link href="/diagnostico" className={buttonClasses({ variant: "primary" })}>
              Solicitar diagnóstico
            </Link>
          </div>
        </Container>
      </Section>
    </main>
  );
}
