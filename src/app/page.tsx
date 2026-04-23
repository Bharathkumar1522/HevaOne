import { HeroSection } from "@/components/sections/Hero";
import dynamic from "next/dynamic";

const IndustriesSection = dynamic(() => import("@/components/sections/Industries").then(mod => mod.IndustriesSection));
const ComparisonSection = dynamic(() => import("@/components/sections/Comparison").then(mod => mod.ComparisonSection));
const GlobalSection = dynamic(() => import("@/components/sections/GlobalReady").then(mod => mod.GlobalSection));
const SecuritySection = dynamic(() => import("@/components/sections/Security").then(mod => mod.SecuritySection));
const ContactSection = dynamic(() => import("@/components/sections/Contact").then(mod => mod.ContactSection));

export default function Home() {
  return (
    <>
      <HeroSection />
      <IndustriesSection />
      <ComparisonSection />
      <GlobalSection />
      <SecuritySection />
      <ContactSection />
    </>
  );
}
