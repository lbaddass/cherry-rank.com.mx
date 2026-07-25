"use client";

import { Suspense, useMemo } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import { StickyHeader } from "@/components/layout/StickyHeader";

const WHATSAPP_NUMBER = "5215512345678";

function CheckoutContent() {
  const searchParams = useSearchParams();
  const serviceName =
    searchParams.get("service")?.replace(/-/g, " ") ?? "Servicio";

  const whatsappHref = useMemo(() => {
    const message = `Hola, envío comprobante para ${serviceName}`;
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  }, [serviceName]);

  return (
    <Section dense className="pt-24">
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
            Checkout de autoridad
          </h1>
          <p className="text-lg text-ash">
            Seleccionaste:{" "}
            <span className="font-semibold capitalize text-ink">
              {serviceName}
            </span>
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-4 rounded-2xl border border-[#E5E1DA] bg-pearl p-8 md:p-10">
            <h2 className="text-xl font-semibold text-ink">Detalles bancarios</h2>
            <div className="space-y-2 text-ash">
              <p>
                <span className="font-semibold text-ink">Banco:</span> BBVA
              </p>
              <p>
                <span className="font-semibold text-ink">CLABE:</span>{" "}
                012345678901234567
              </p>
              <p>
                <span className="font-semibold text-ink">Titular:</span> Cherry
                Rank
              </p>
            </div>
          </div>
          <div className="space-y-6 rounded-2xl border-2 border-cherry/20 bg-white p-8 shadow-xl shadow-black/5 md:p-10">
            <h2 className="text-xl font-semibold text-ink">Confirmación</h2>
            <p className="text-ash">
              Envía tu comprobante para activar el proceso de onboarding
              estratégico.
            </p>
            <Button href={whatsappHref} variant="primary" size="full" showLock>
              Confirmar por WhatsApp · Pago seguro
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}

export default function CheckoutPage() {
  return (
    <>
      <StickyHeader />
      <main className="min-h-screen bg-cream">
        <Suspense
          fallback={
            <Section dense className="pt-24">
              <Container>
                <p className="text-ash">Cargando checkout…</p>
              </Container>
            </Section>
          }
        >
          <CheckoutContent />
        </Suspense>
      </main>
    </>
  );
}
