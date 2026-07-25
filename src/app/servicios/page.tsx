import { Container } from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import ServiceCard from "@/components/ui/ServiceCard";
import Link from "next/link";

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
    <main className="min-h-screen bg-cream">
      <Section dense className="pt-16">
        <Container className="space-y-8">
          <div className="max-w-2xl space-y-3">
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
              Servicios de autoridad
            </h1>
            <p className="text-lg text-ash">
              Paquetes diseñados para líderes que buscan influencia sostenible
              en mercados de alta exigencia.
            </p>
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
