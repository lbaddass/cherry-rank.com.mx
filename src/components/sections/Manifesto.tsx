"use client";

import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { FadeUp } from "@/components/ui/FadeUp";
import Button from "@/components/ui/Button";

export function Manifesto() {
  return (
    <section className="bg-cream py-16 md:py-20 lg:py-28">
      <Container>
        <FadeUp className="mx-auto max-w-[56rem] text-center">
          <h2
            className="font-display font-bold text-ink"
            style={{
              fontSize: "clamp(2rem, 4vw, 3.5rem)",
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
            }}
          >
            Dejamos de ser una agencia boutique para ser tu motor de
            crecimiento.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-ash">
            Sabemos lo que cuesta levantar un negocio en México. Creamos Cherry
            Rank para democratizar el éxito, usando la mejor tecnología para que
            el pequeño comercio tenga las armas de los gigantes.
          </p>
          <div className="mt-12">
            <Button href="/diagnostico" variant="ink" size="lg">
              Hablar con un Estratega
            </Button>
          </div>
        </FadeUp>

        <footer className="mx-auto mt-20 max-w-[56rem] border-t border-gray-200 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 text-xs text-ash md:flex-row">
            <p>© {new Date().getFullYear()} Cherry Rank. Todos los derechos reservados.</p>
            <nav className="flex gap-6">
              <Link
                href="/servicios"
                className="relative transition-colors hover:text-ink focus-ring rounded-sm after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-ink after:transition-transform after:duration-300 hover:after:scale-x-100"
                data-cursor-hover
              >
                Servicios
              </Link>
              <Link
                href="/diagnostico"
                className="relative transition-colors hover:text-ink focus-ring rounded-sm after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-ink after:transition-transform after:duration-300 hover:after:scale-x-100"
                data-cursor-hover
              >
                Privacidad
              </Link>
              <Link
                href="/diagnostico"
                className="relative transition-colors hover:text-ink focus-ring rounded-sm after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-ink after:transition-transform after:duration-300 hover:after:scale-x-100"
                data-cursor-hover
              >
                Términos
              </Link>
            </nav>
          </div>
        </footer>
      </Container>
    </section>
  );
}
