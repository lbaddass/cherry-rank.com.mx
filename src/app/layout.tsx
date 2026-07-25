import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  weight: ["500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Cherry Rank | SEO con IA para México",
  description:
    "O sales en Google, o no existes. Auditoría gratis de autoridad, SEO local e IA de imagen para negocios en México.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es-MX" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="bg-cream font-sans text-ink antialiased">{children}</body>
    </html>
  );
}
