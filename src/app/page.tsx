import Link from "next/link";
import Button, { buttonClasses } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import Section from "@/components/ui/Section";

const valuePoints = [
  {
    title: "Problema",
    description:
      "Las agencias venden actividad. La autoridad necesita infraestructura sostenible y métricas reales.",
  },
  {
    title: "Solución",
    description:
      "Construimos sistemas de clusters, señales y activos editoriales que elevan la reputación digital.",
  },
  {
    title: "Resultado",
    description:
      "Mayor confianza, visibilidad y demanda calificada para mercados de alta competencia.",
  },
];

export default function HomePage() {
  return (
    <main>
      <Section>
        <Container className="space-y-8">
          <div className="space-y-4 max-w-3xl">
            <p className="text-sm uppercase tracking-widest text-foreground/60">
              Cherry Rank · Authority Architects
            </p>
            <h1 className="text-4xl font-semibold md:text-6xl">
              Arquitectos de autoridad para marcas que lideran su industria.
            </h1>
            <p className="text-lg text-foreground/70">
              Somos una consultora SEO boutique que diseña infraestructuras digitales con
              precisión quirúrgica. No vendemos servicios: diseñamos dominio.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Link href="/diagnostico" className={buttonClasses({ variant: "primary" })}>
                Solicitar diagnóstico
              </Link>
              <Link href="/servicios" className={buttonClasses({ variant: "outline" })}>
                Ver servicios
              </Link>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="bg-white/60">
        <Container>
          <div className="grid gap-8 md:grid-cols-3">
            {valuePoints.map((point) => (
              <div key={point.title} className="space-y-3">
                <h2 className="text-2xl font-semibold">{point.title}</h2>
                <p className="text-foreground/70">{point.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container className="grid gap-8 md:grid-cols-2">
          <div className="space-y-4">
            <h2 className="text-3xl font-semibold">
              Infraestructura por encima de agencias.
            </h2>
            <p className="text-foreground/70">
              Las agencias prometen crecimiento rápido. Nosotros diseñamos sistemas de
              autoridad que perduran y resisten cambios algorítmicos. Nuestro enfoque
              integra arquitectura de contenidos, reputación editorial y análisis de
              intención para dominar territorios de búsqueda complejos.
            </p>
            <p className="text-foreground/70">
              Trabajamos con equipos internos y líderes que entienden el valor estratégico
              de la confianza digital. Cada implementación es un mapa de poder para su
              negocio.
            </p>
          </div>
          <div className="space-y-6 border border-secondary bg-white/50 p-6">
            <h3 className="text-2xl font-semibold">Diagnóstico inicial</h3>
            <p className="text-foreground/70">
              Evaluamos señales técnicas, narrativa de marca y oportunidades de autoridad
              para proyectar el plan maestro.
            </p>
            <Button>Iniciar conversación</Button>
          </div>
        </Container>
      </Section>
    </main>
  );
}
