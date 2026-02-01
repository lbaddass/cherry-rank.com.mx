import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  weight: ["400", "700"],
});

// Clash Display is imported in globals.css
const clash = {
  variable: "--font-clash",
};

export const metadata: Metadata = {
  title: "Cherry Rank | Architects of Authority",
  description: "Cherry Rank builds SEO authority infrastructure for premium brands.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className={`${inter.variable} ${jetbrains.variable} ${clash.variable}`}>
      <body className="bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
