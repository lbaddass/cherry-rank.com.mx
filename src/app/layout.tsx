import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const grotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-grotesk",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Cherry Rank — Search Engine Experts",
  description:
    "Sistema de adquisición orgánica e infraestructura SEO + IA para mercados regulados en México.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className={`${inter.variable} ${grotesk.variable}`}>
      <body className="bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
