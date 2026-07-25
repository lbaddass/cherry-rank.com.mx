import { Container } from "@/components/ui/Container";
import Button from "@/components/ui/Button";

const MARQUEE = "BAJA // SEO IA // MÉXICO 2026 // ";

export function Hero() {
  return (
    <section className="relative flex min-h-[90vh] flex-col bg-void text-white">
      <div className="overflow-hidden border-b border-smoke py-3">
        <div
          className="flex w-max animate-marquee whitespace-nowrap text-xs font-medium uppercase tracking-[0.05em] text-ash"
          aria-hidden
        >
          <span className="pr-8">{MARQUEE.repeat(8)}</span>
          <span className="pr-8">{MARQUEE.repeat(8)}</span>
        </div>
        <span className="sr-only">BAJA // SEO IA // MÉXICO 2026</span>
      </div>

      <div className="flex flex-1 flex-col items-center justify-center px-6 py-24 md:px-8 md:py-32 lg:px-12">
        <Container className="flex flex-col items-center text-center">
          <h1
            className="max-w-[900px] font-display font-bold uppercase text-balance"
            style={{
              fontSize: "clamp(2.5rem, 6vw, 5.5rem)",
              lineHeight: 0.95,
              letterSpacing: "-0.03em",
            }}
          >
            <span className="hero-line block text-white" style={{ animationDelay: "0ms" }}>
              QUE NO TE DEN
            </span>
            <span
              className="hero-line mt-2 block text-cherry"
              style={{ animationDelay: "150ms" }}
            >
              &quot;GATO POR LIEBRE&quot;
            </span>
          </h1>

          <p
            className="hero-fade mt-6 text-[1.125rem] font-medium uppercase tracking-[0.1em] text-ash"
            style={{ animationDelay: "600ms" }}
          >
            O SALES EN GOOGLE, O NO EXISTES.
          </p>

          <div
            className="hero-cta mt-12"
            style={{ animationDelay: "900ms" }}
          >
            <Button href="/diagnostico" variant="primary" size="md">
              Auditoría Gratis de Autoridad
            </Button>
          </div>
        </Container>
      </div>
    </section>
  );
}
