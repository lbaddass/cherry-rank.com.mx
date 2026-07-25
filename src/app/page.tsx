import { StickyHeader } from "@/components/layout/StickyHeader";
import { CustomCursor } from "@/components/layout/CustomCursor";
import { Hero } from "@/components/sections/Hero";
import { ValueProp } from "@/components/sections/ValueProp";
import { Features } from "@/components/sections/Features";
import { Pricing } from "@/components/sections/Pricing";
import { HighRisk } from "@/components/sections/HighRisk";
import { Manifesto } from "@/components/sections/Manifesto";

export default function HomePage() {
  return (
    <>
      <CustomCursor />
      <StickyHeader />
      <main>
        <Hero />
        <ValueProp />
        <Features />
        <Pricing />
        <HighRisk />
        <Manifesto />
      </main>
    </>
  );
}
