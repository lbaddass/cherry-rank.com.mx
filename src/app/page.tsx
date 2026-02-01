"use client";

import { AscendingPulse } from "@/components/ui/AscendingPulse";
import { BentoCard } from "@/components/ui/BentoCard";
import Button from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { DescendingGraph } from "@/components/ui/DescendingGraph";
import { KineticCard } from "@/components/ui/KineticCard";
import Marquee from "@/components/ui/Marquee";
import Section from "@/components/ui/Section";
import { motion } from "framer-motion";

const TickerText = () => (
  <span className="font-jetbrains text-lg uppercase">
    Resultados Reales // Sin Paja // SEO IA // México 2026 //
  </span>
);

export default function HomePage() {
  return (
    <main>
      <Section className="relative flex flex-col justify-between pt-24">
        <div />
        <Container>
          <div className="space-y-4 text-center">
            <motion.h1
              className="font-clash text-5xl font-semibold uppercase md:text-8xl"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, staggerChildren: 0.1 }}
            >
              <motion.span
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="block"
              >
                Que no te den
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="block"
              >
                "gato por liebre"
              </motion.span>
            </motion.h1>
            <motion.h2
              className="text-2xl uppercase text-foreground/70 md:text-3xl"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              O sales en Google, o no existes.
            </motion.h2>
          </div>
        </Container>

        <Marquee speed="fast">
          <TickerText />
          <TickerText />
          <TickerText />
          <TickerText />
        </Marquee>
      </Section>

      <Section className="flex items-center justify-center bg-surface text-background">
        <Container>
          <div className="text-center">
            <h2 className="mx-auto max-w-4xl font-clash text-4xl font-medium md:text-6xl">
              Tú necesitas <span className="text-accent">ventas</span>, no
              reportes de 40 páginas que nadie lee.
            </h2>
          </div>
import { DescendingGraph } from "@/components/ui/DescendingGraph";
import { AscendingPulse } from "@/components/ui/AscendingPulse";

// ... (previous code)

          <div className="mt-12 grid items-center gap-12 md:grid-cols-2">
            <div className="space-y-4 rounded-lg bg-background/5 p-8">
              <DescendingGraph />
              <h3 className="font-clash text-3xl">Agencias Tradicionales</h3>
              <p className="text-lg text-background/70">
                Gráficas de vanidad, PDFs confusos y resultados que no se traducen en
                clientes.
              </p>
            </div>
            <div className="space-y-4 rounded-lg bg-background/10 p-8">
              <AscendingPulse />
              <h3 className="font-clash text-3xl text-accent">
                Cherry Rank
              </h3>
              <p className="text-lg text-background/70">
                Una línea directa a la visibilidad. Un pulso constante de crecimiento
                medible.
              </p>
            </div>
          </div>
// ... (rest of the code)
        </Container>
      </Section>
      <Section className="flex items-center justify-center">
        <Container className="text-center">
          <h2 className="mx-auto max-w-4xl font-clash text-4xl font-medium md:text-6xl">
            Tu negocio con{" "}
            <span className="text-accent">esteroides digitales</span> en 72
            horas.
          </h2>

import { KineticCard } from "@/components/ui/KineticCard";
//...
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            <KineticCard
              icon="map"
              title="Ubicación Estratégica"
              description="Te ponemos en el mapa (literalmente), donde tus clientes te están buscando."
            />
            <KineticCard
              icon="camera"
              title="IA de Imagen"
              description="Optimizamos tus fotos para que Google se enamore de tu negocio y lo muestre más."
            />
            <KineticCard
              icon="type"
              title="Copy que Vende"
              description="No solo te encuentran, te eligen. Creamos los mensajes que convierten clics en clientes."
            />
          </div>
//...
        </Container>
      </Section>
      <Section className="flex items-center justify-center bg-surface text-background">
        <Container className="text-center">
          <h2 className="mx-auto max-w-4xl font-clash text-4xl font-medium md:text-6xl">
            Precios Transparentes.
            <br />
            <span className="text-foreground/70">Sin Letras Chiquitas.</span>
          </h2>
          <p className="mt-4 text-lg">
            En México estamos acostumbrados al "presupuesto por DM". Aquí no. Tú
            eliges, tú mandas.
          </p>

import { BentoCard } from "@/components/ui/BentoCard";
// ...
          <div className="mt-12 grid grid-cols-1 gap-4 text-background md:grid-cols-2 lg:grid-cols-4">
            <BentoCard
              className="lg:col-span-2"
              title="Micro-Retainer"
              description="Mantenimiento mensual de tu Google Business."
              price="1,899"
              priceUnit="mes"
            />
            <BentoCard
              title="Escudo de Reseñas"
              description="Automatizamos tus opiniones positivas."
              price="750"
              priceUnit="mes"
            />
            <BentoCard
              title="Pack 'Imagen Perfecta'"
              description="10 fotos con ADN digital para Google Maps."
              price="950"
              priceUnit="único"
            />
          </div>
// ...
        </Container>
      </Section>
      <Section className="flex items-center justify-center">
        <Container className="max-w-4xl text-center">
          <h2 className="font-clash text-4xl font-medium md:text-6xl">
            Especialistas en Sectores de{" "}
            <span className="text-highlight">Alto Riesgo.</span>
          </h2>
          <p className="mt-4 text-lg text-foreground/70">
            Si manejas una Clínica de Rehabilitación o una Campaña Política, sabes que
            Google no juega. Una mala gestión y te borran del mapa.
          </p>
          <div className="mt-8">
            <Button size="lg" variant="primary" className="font-clash text-xl">
              Agendar Diagnóstico de Autoridad
            </Button>
          </div>
        </Container>
      </Section>
      <Section className="flex items-center justify-center bg-surface text-background">
        <Container className="max-w-4xl text-center">
          <h2 className="font-clash text-4xl font-medium md:text-6xl">
            Dejamos de ser una agencia boutique para ser tu motor de
            crecimiento.
          </h2>
          <p className="mt-4 text-lg text-background/80">
            Sabemos lo que cuesta levantar un negocio en México. Creamos Cherry
            Rank para democratizar el éxito, usando la mejor tecnología para que
            el pequeño comercio tenga las armas de los gigantes.
          </p>
          <div className="mt-8">
            <Button
              size="lg"
              variant="outline"
              className="border-background/30 font-clash text-xl text-background hover:bg-background/10"
            >
              Hablar con un Estratega
            </Button>
          </div>
        </Container>
      </Section>
    </main>
  );
}