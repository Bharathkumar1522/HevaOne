import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { IconCurrency, IconDevice, IconLayers, IconSpark } from "@/components/ui/SiteIcons";

const HERO_STATS = [
  {
    value: "Workforce, POS, Operations",
    label: "One operating layer",
    icon: IconLayers,
  },
  {
    value: "Web, iOS, Android",
    label: "Runs across devices",
    icon: IconDevice,
  },
  {
    value: "GBP, USD, INR, AUD, CAD",
    label: "Global-ready setup",
    icon: IconCurrency,
  },
];

export function HeroSection() {
  return (
    <section id="home" className="relative overflow-clip bg-premium-dots">
      
      {/* ── Fold 1: Immediate Viewport (Copy & CTAs strictly centered) ── */}
      <div className="flex flex-col items-center justify-center min-h-[90svh] md:min-h-[100svh] px-4 pt-24 md:pt-20">
        <div className="hero-copy relative z-20 flex flex-col items-center max-w-[64rem] text-center">
          <span className="hero-kicker-enter section-kicker mb-6">
            <span className="feature-dot" />
            Unified Global OS
          </span>

          <h1 className="hero-title-enter text-[clamp(2.8rem,7vw,5.5rem)] font-bold leading-[1.02] tracking-[-0.05em] text-[var(--ink-strong)] text-balance">
            One Platform. Every Shift. Every Sale. <span className="text-[var(--brand)]">Everywhere.</span>
          </h1>

          <p className="hero-body-enter mt-7 max-w-[54ch] text-[clamp(1.05rem,1.5vw,1.25rem)] leading-relaxed text-[var(--ink-soft)] text-balance">
            HevaONE unifies Workforce, POS, and Operations into one beautiful dashboard — whether you&apos;re in London, Sydney, or Mumbai.
          </p>

          <div className="hero-cta-enter hero-actions mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link href="mailto:Info@hetupathways.com" aria-label="Contact us" className="btn btn-primary px-6 py-4 text-[1rem]">
              Get Started for Free
              <IconSpark size={16} />
            </Link>
          </div>
        </div>
      </div>

      {/* ── Fold 2: Scroll Content (Stats & UI Visual) ── */}
      <div className="flex flex-col items-center px-4 pb-16 md:pb-32 w-full">
        {/* Stats Row — reveal on scroll */}
        <Reveal direction="up" delay={0} className="w-full max-w-[64rem]">
          <div className="flex w-full flex-wrap justify-center gap-6 sm:gap-10 border-t border-[var(--line)] pt-8">
            {HERO_STATS.map((item) => (
              <div key={item.value} className="flex items-center gap-3 text-left">
                <span className="text-[var(--brand)]">
                  <item.icon size={20} />
                </span>
                <div>
                  <p className="text-[0.95rem] font-bold leading-snug text-[var(--ink-strong)]">{item.value}</p>
                  <p className="text-[0.8rem] font-medium text-[var(--ink-soft)]">{item.label}</p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Cinematic Bottom Visual — reveal on scroll */}
        <Reveal direction="scale" delay={80} className="w-full max-w-[1300px]">
          <div id="tour" className="hero-stage relative z-10 mt-16 w-full rounded-[2.5rem] bg-[color:color-mix(in_srgb,var(--brand)_6%,transparent)] border border-[color:color-mix(in_srgb,var(--brand)_15%,transparent)] p-6 md:p-8 shadow-[inset_0_2px_24px_rgba(67,56,202,0.08)]">
            <div className="hero-device hero-visual-primary relative aspect-[4/3] w-full rounded-[2rem] border-[1px] border-white/20 shadow-[0_45px_100px_rgba(15,23,42,0.18)] md:aspect-[21/10]">
              <Image
                src="/hero-mockup.png"
                alt="HevaONE management dashboard on a laptop interface"
                fill
                priority
                sizes="100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-transparent to-white/10 pointer-events-none mix-blend-overlay" />
            </div>

            {/* Overlapping Callouts and Secondary Elements */}
            <div className="hero-device hero-visual-secondary absolute -bottom-10 -right-4 hidden aspect-[9/16] w-[22%] rounded-[1.8rem] md:block -rotate-2 transform-gpu shadow-[0_25px_60px_rgba(15,23,42,0.6)]">
              <Image
                src="/hospitality_bg.png"
                alt="HevaONE staff app interface on a smartphone"
                fill
                sizes="20vw"
                className="object-cover rounded-[1.8rem]"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-white/0 to-white/10 pointer-events-none mix-blend-overlay rounded-[1.8rem]" />
            </div>

            <div className="hero-callout hero-callout-soft absolute top-10 -left-8 hidden items-center gap-4 rounded-2xl bg-white/95 backdrop-blur-xl px-5 py-4 text-[0.85rem] font-bold text-[var(--ink-strong)] shadow-[0_24px_50px_rgba(15,23,42,0.1)] border border-[var(--line)] md:inline-flex transform-gpu hover:scale-[1.02] transition-transform">
              <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[var(--surface-muted)] text-[var(--brand)]">
                <IconLayers size={16} />
              </span>
              <span className="max-w-[20ch] leading-snug">Unified dashboard across management, POS, and staff workflows</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
