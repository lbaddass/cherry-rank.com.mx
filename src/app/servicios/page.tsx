import Link from "next/link";
import { Container } from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import ServiceCard from "@/components/ui/ServiceCard";

export type Service = {
  title: string;
  price: string;
  features: string[];
  slug: string;
};

const services: Service[] = [
  {
    title: "Audit de Autoridad",
    price: "$24,000 MXN",
    slug: "audit-autoridad",
    features: [
      "Mapa de riesgos y oportunidades",
      "Diagnóstico técnico y semántico",
      "Plan estratégico de 90 días",
    ],
  },
  {
    title: "Clusters Estratégicos",
    price: "$48,000 MXN",
    slug: "clusters-estrategicos",
    features: [
      "Arquitectura de contenidos",
      "Roadmap editorial de alta conversión",
      "Optimización on-page avanzada",
    ],
  },
  {
    title: "Authority Plan",
    price: "$96,000 MXN",
    slug: "authority-plan",
    features: [
      "Infraestructura editorial completa",
      "Sistemas de reputación digital",
      "Acompañamiento ejecutivo mensual",
    ],
  },
];

export default function ServiciosPage() {
  return (
    <main>
      <Section>
        <Container className="space-y-8">
          <div className="max-w-2xl space-y-3">
            <h1 className="text-4xl font-semibold md:text-5xl">
              Catálogo de activación inmediata
            </h1>
            <p className="text-foreground/70">
              Selección de micro-servicios para desplegar autoridad SEO con velocidad. Para
              nichos delicados, inicia un diagnóstico especializado.
            </p>
            <Link
              href="/especializado"
              className="text-sm font-semibold uppercase tracking-widest text-primary/70"
            >
              Ver sector salud y político
            </Link>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {services.map((service) => (
              <ServiceCard key={service.slug} {...service} />
            ))}
          </div>
        </Container>
      </Section>
    </main>
  );
}
