"use client";

import Image from "next/image";
import { type ComponentType, startTransition, useState } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { IconArrowRight, IconChat, IconCurrency, IconDevice, IconMapPin, IconShield } from "@/components/ui/SiteIcons";

type Industry = {
  id: string;
  title: string;
  tagline: string;
  details: string[];
  accent: string;
  icon: ComponentType<{ size?: number; className?: string }>;
  image: string;
};

const INDUSTRIES: Industry[] = [
  {
    id: "hospitality",
    title: "Hospitality",
    tagline: "POS, QR Ordering, and KDS synced with staff labor costs.",
    details: [
      "Connect table ordering, kitchen routing, and labor visibility in one flow.",
      "Track shift-level labor context alongside service performance.",
    ],
    accent: "from-[#1f53db]/24 via-[#1a4fc1]/10 to-transparent",
    icon: IconDevice,
    image: "/hospitality_bg.png",
  },
  {
    id: "retail",
    title: "Retail",
    tagline: "Inventory and sales tracking with smart scheduling for peak hours.",
    details: [
      "View trading patterns and staffing decisions side by side.",
      "Plan smarter shifts around real demand windows.",
    ],
    accent: "from-[#315adf]/22 via-[#4b82ff]/10 to-transparent",
    icon: IconCurrency,
    image: "/retail_bg.png",
  },
  {
    id: "healthcare",
    title: "Healthcare / Clinics",
    tagline: "Complex shift rotations and secure, verified attendance.",
    details: [
      "Manage multi-role rotations with clear handover accountability.",
      "Support verified attendance records for sensitive environments.",
    ],
    accent: "from-[#0e8ea0]/22 via-[#2584d7]/10 to-transparent",
    icon: IconShield,
    image: "/healthcare_bg.png",
  },
  {
    id: "logistics",
    title: "Logistics / Warehousing",
    tagline: "Geofenced clock-ins and anti-cheat photo audits for large-scale teams.",
    details: [
      "Coordinate distributed site teams with location-aware attendance.",
      "Strengthen trust with anti-cheat checks where needed.",
    ],
    accent: "from-[#2a4dd7]/22 via-[#4477ff]/10 to-transparent",
    icon: IconMapPin,
    image: "/logistics_bg.png",
  },
];

export function IndustriesSection() {
  const [activeId, setActiveId] = useState("hospitality");
  const active = INDUSTRIES.find((item) => item.id === activeId) ?? INDUSTRIES[0];

  return (
    <section id="industries" className="relative py-12 md:py-20">
      <span className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--line)] to-transparent" />
      <div className="editorial-shell">
        <div className="flex flex-col gap-5 mb-8 mt-4">
          <Reveal className="max-w-xl">
            <span className="section-kicker">
              <span className="feature-dot" />
              Multi-Industry Switcher
            </span>
            <h2 className="mt-3 text-[clamp(1.8rem,3vw,2.4rem)] font-bold tracking-[-0.03em] leading-tight text-[var(--ink-strong)]">
              Choose your operating model.
            </h2>
          </Reveal>

          <div className="-mx-4 flex overflow-x-auto overflow-y-hidden px-4 py-4 -my-4 sm:mx-0 sm:px-0 sm:py-0 sm:my-0 sm:overflow-visible [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            <div className="flex w-max gap-3 sm:w-auto sm:flex-wrap items-center">
              {INDUSTRIES.map((item, idx) => (
                <Reveal key={item.id} delay={idx * 30} direction="up" className="inline-block shrink-0 cursor-pointer">
                  <button
                    type="button"
                    onClick={() => startTransition(() => setActiveId(item.id))}
                    className={`relative flex items-center gap-2.5 rounded-xl px-5 py-3 text-[0.9rem] font-bold border transition-all duration-300 ${
                      activeId === item.id
                        ? "border-[color:color-mix(in_srgb,var(--brand)_40%,transparent)] bg-[color:color-mix(in_srgb,var(--brand)_8%,transparent)] text-[var(--brand)] shadow-[0_4px_12px_rgba(42,77,215,0.08),inset_0_1px_0_rgba(255,255,255,1)]"
                        : "border-[color:color-mix(in_srgb,var(--line)_80%,transparent)] bg-white/70 text-[var(--ink-soft)] hover:border-[var(--line)] hover:bg-white hover:text-[var(--ink)] shadow-[0_2px_4px_rgba(15,23,42,0.02)]"
                    } active:scale-[0.96] hover:-translate-y-0.5`}
                  >
                    <item.icon size={18} className={activeId === item.id ? "text-[var(--brand)]" : ""} />
                    {item.title}
                  </button>
                </Reveal>
              ))}
            </div>
          </div>
        </div>

        <div className="mb-6 h-px w-full bg-gradient-to-r from-[var(--line)] to-transparent opacity-60 hidden lg:block" />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 max-w-[1200px] mx-auto">
            
            {/* Massive App Preview Bento */}
            <Reveal delay={0} direction="scale" className="lg:col-span-2 lg:row-span-2">
              <article className="group relative overflow-hidden rounded-[2rem] h-full min-h-[14rem] md:min-h-[16rem] lg:min-h-[24rem] shadow-[inset_0_1px_0_rgba(255,255,255,1),0_0_0_1px_rgba(0,0,0,0.03),0_24px_48px_rgba(15,23,42,0.08)] bg-[var(--surface-muted)]">
                {INDUSTRIES.map((item) => (
                  <Image
                    key={item.id}
                    src={item.image}
                    alt={`${item.title} workflow`}
                    fill
                    loading="lazy"
                    sizes="(max-width: 1024px) 100vw, 66vw"
                    className={`object-cover transition-all duration-700 ease-in-out ${
                      activeId === item.id ? "opacity-100 scale-100 group-hover:scale-[1.03]" : "opacity-0 scale-[1.05]"
                    }`}
                  />
                ))}
                <div className={`absolute inset-0 bg-gradient-to-tr ${active.accent} mix-blend-overlay transition-colors duration-700`} />
                <div className="absolute inset-0 bg-gradient-to-t from-[#061122]/32 via-transparent to-transparent pointer-events-none" />
              </article>
            </Reveal>

            {/* Top Right Copy Bento */}
            <Reveal delay={100} direction="right" className="lg:col-span-1 lg:row-span-1">
              <article className="relative rounded-[2rem] h-full bg-[var(--surface)] p-5 md:p-6 lg:p-8 border border-transparent shadow-[inset_0_1px_0_rgba(255,255,255,1),0_0_0_1px_rgba(0,0,0,0.03),0_8px_24px_rgba(15,23,42,0.04)] flex flex-col justify-center">
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--line)] to-transparent opacity-60" />
                <p className="inline-flex items-center gap-2 mb-3 text-[0.65rem] font-bold uppercase tracking-[0.12em] text-[var(--brand)]">
                  <active.icon size={14} />
                  {active.title}
                </p>
                <h3 className="text-[1.2rem] font-bold tracking-tight text-[var(--ink-strong)] leading-[1.2]">{active.tagline}</h3>
                <ul className="mt-4 space-y-3">
                  {active.details.map((point) => (
                    <li key={point} className="flex items-start gap-2 text-[0.85rem] font-medium leading-relaxed text-[var(--ink-soft)]">
                      <IconArrowRight size={16} className="mt-[0.2rem] shrink-0 text-[var(--brand-vivid)]" />
                      {point}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>

            {/* Bottom Right Legend Bento */}
            <Reveal delay={200} direction="right" className="lg:col-span-1 lg:row-span-1">
              <article className="relative overflow-hidden rounded-[2rem] h-full bg-gradient-to-b from-[var(--surface-muted)] to-white p-5 md:p-6 lg:p-8 border border-transparent shadow-[inset_0_1px_0_rgba(255,255,255,1),0_0_0_1px_rgba(0,0,0,0.03),0_8px_24px_rgba(15,23,42,0.04)] flex flex-col justify-center">
                 <h4 className="text-[0.65rem] font-bold uppercase tracking-[0.1em] text-[var(--ink)] mb-4">Unified Sync Engine</h4>
                 <div className="flex flex-col gap-2.5">
                   <span className="flex items-center gap-3 rounded-xl bg-white px-3 py-2.5 shadow-sm border border-[var(--line)] text-[0.8rem] font-bold text-[var(--ink-strong)]">
                     <span className="h-2 w-2 rounded-full bg-emerald-500" /> Live Operations
                   </span>
                   <span className="flex items-center gap-3 rounded-xl bg-white px-3 py-2.5 shadow-sm border border-[var(--line)] text-[0.8rem] font-bold text-[var(--ink-strong)]">
                     <span className="h-2 w-2 rounded-full bg-indigo-500" /> Unified Data Flow
                   </span>
                   <span className="flex items-center gap-3 rounded-xl bg-white px-3 py-2.5 shadow-sm border border-[var(--line)] text-[0.8rem] font-bold text-[var(--ink-strong)]">
                     <IconChat size={14} className="text-blue-500" /> Team Clarity
                   </span>
                 </div>
              </article>
            </Reveal>

        </div>
      </div>
    </section>
  );
}
