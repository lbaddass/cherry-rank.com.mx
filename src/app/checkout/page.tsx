import Link from "next/link";
import { Container } from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import { buttonClasses } from "@/components/ui/Button";

const WHATSAPP_NUMBER = "5215512345678";

type CheckoutPageProps = {
  searchParams?: {
    service?: string;
  };
};

export default function CheckoutPage({ searchParams }: CheckoutPageProps) {
  const serviceName = searchParams?.service?.replace(/-/g, " ") ?? "Servicio";
  const message = `Hola, envío comprobante para ${serviceName}`;
  const whatsappHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <main>
      <Section>
        <Container className="space-y-8">
          <div className="max-w-2xl space-y-3">
            <h1 className="text-4xl font-semibold md:text-5xl">Checkout de autoridad</h1>
            <p className="text-foreground/70">
              Seleccionaste: <span className="font-semibold">{serviceName}</span>
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="space-y-4 border border-secondary bg-white/50 p-6">
              <h2 className="text-2xl font-semibold">Detalles bancarios</h2>
              <div className="space-y-2 text-foreground/70">
                <p>
                  <span className="font-semibold text-foreground">Banco:</span> BBVA
                </p>
                <p>
                  <span className="font-semibold text-foreground">CLABE:</span> 012345678901234567
                </p>
                <p>
                  <span className="font-semibold text-foreground">Titular:</span> Cherry Rank
                </p>
              </div>
            </div>
            <div className="space-y-6 border border-secondary bg-white/50 p-6">
              <h2 className="text-2xl font-semibold">Confirmación</h2>
              <p className="text-foreground/70">
                Envía tu comprobante para activar el proceso de onboarding estratégico.
              </p>
              <Link href={whatsappHref} className={buttonClasses({ variant: "primary" })}>
                Confirmar por WhatsApp
              </Link>
            </div>
          </div>
        </Container>
      </Section>
    </main>
  );
}
