import { HeroSection } from "@/components/sections/Hero";
import { IndustriesSection } from "@/components/sections/Industries";
import { ComparisonSection } from "@/components/sections/Comparison";
import { GlobalSection } from "@/components/sections/GlobalReady";
import { SecuritySection } from "@/components/sections/Security";

export default function Home() {
  return (
    <>
      <HeroSection />
      <IndustriesSection />
      <ComparisonSection />
      <GlobalSection />
      <SecuritySection />
    </>
  );
}
