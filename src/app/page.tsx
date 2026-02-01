import Link from "next/link";
import { buttonClasses } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import Section from "@/components/ui/Section";

const valuePoints = [
  {
    title: "El Dolor de la Invisibilidad",
    description:
      "Los costos de depender de anuncios suben cada mes. Sin autoridad orgánica, tu marca pierde margen y control.",
  },
  {
    title: "El Laberinto Normativo",
    description:
      "Salud y política exigen precisión. Diseñamos arquitectura SEO que cumple políticas sin perder ranking.",
  },
  {
    title: "El Sistema Cherry Rank",
    description:
      "Automatizamos la infraestructura para crecer con IA controlada, no con promesas mensuales.",
  },
];

export default function HomePage() {
  return (
    <main>
      <Section>
        <Container className="space-y-8">
          <div className="space-y-4 max-w-3xl">
            <p className="text-sm uppercase tracking-widest text-primary/70">
              Cherry Rank · Search Engine Experts
            </p>
            <h1 className="text-4xl font-semibold md:text-6xl">
              ¿Por qué tu competencia aparece y tú no?
            </h1>
            <p className="text-lg text-foreground/70">
              Cherry Rank construye infraestructura de autoridad SEO + IA para negocios
              en México que necesitan visibilidad real, no campañas efímeras.
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

      <Section className="bg-white/70">
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
            <h2 className="text-3xl font-semibold">Catálogo de activación inmediata</h2>
            <p className="text-foreground/70">
              Servicios listos para arrancar tu infraestructura sin fricción técnica. Cada
              paquete es un módulo de autoridad diseñado para acelerar el posicionamiento.
            </p>
            <Link href="/servicios" className={buttonClasses({ variant: "outline" })}>
              Explorar catálogo
            </Link>
          </div>
          <div className="space-y-6 border border-secondary bg-white/60 p-6">
            <h3 className="text-2xl font-semibold">Filtro de autoridad</h3>
            <p className="text-foreground/70">
              Para clínicas, proyectos políticos o negocios regulados, necesitamos validar
              complejidad antes de activar infraestructura.
            </p>
            <Link href="/especializado" className={buttonClasses({ variant: "primary" })}>
              Diagnóstico especializado
            </Link>
          </div>
        </Container>
      </Section>
    </main>
  );
}
