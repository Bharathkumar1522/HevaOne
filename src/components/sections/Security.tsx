import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { IconLock, IconMapPin, IconShield, IconSpark } from "@/components/ui/SiteIcons";

const SECURITY_ITEMS = [
  {
    title: "Anti-Cheat Technology",
    text: "Device Binding and AI Photo Audit help verify attendance where validation is required.",
    icon: IconShield,
  },
  {
    title: "Enterprise Privacy",
    text: "GDPR compliant and ready to expand abroad, with robust role-aware access controls.",
    icon: IconLock,
  },
];

export function SecuritySection() {
  return (
    <section id="security" className="security-section py-16 md:py-24">
      <div className="editorial-shell">
        <Reveal direction="scale">
          <div className="security-feature relative overflow-hidden rounded-[1.7rem] bg-[#020617] border border-white/10 text-white shadow-[0_24px_50px_rgba(0,0,0,0.5)]">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-30" />
          <div className="grid gap-0 lg:grid-cols-[1.05fr_1fr]">
            <div className="security-feature__copy p-5 md:p-8">
              <span className="inline-flex items-center gap-2 text-[0.72rem] font-bold uppercase tracking-[0.12em] text-blue-200/80">
                <span className="h-1.5 w-1.5 rounded-full bg-blue-300" />
                Trusted Security
              </span>
              <h2 className="mt-4 max-w-[17ch] text-[clamp(2rem,3vw,2.9rem)] font-bold leading-[1.08] tracking-[-0.03em]">
                Trusted controls for workforce integrity and privacy.
              </h2>
              <div className="mt-8 space-y-4">
                {SECURITY_ITEMS.map((item, idx) => (
                  <Reveal key={item.title} delay={180 + idx * 80} direction="right">
                    <article className="rounded-xl border border-white/14 bg-white/[0.04] p-4 backdrop-blur transition-colors hover:bg-white/[0.08]">
                      <h3 className="inline-flex items-center gap-2 text-base font-semibold text-white">
                        <item.icon size={15} className="text-blue-300" />
                        {item.title}
                      </h3>
                      <p className="mt-2 text-[0.88rem] leading-6 text-blue-100/75">{item.text}</p>
                    </article>
                  </Reveal>
                ))}
              </div>

              <div className="legend-row mt-6">
                <span className="legend-chip legend-chip-ok">Shift Integrity</span>
                <span className="legend-chip">Access Governance</span>
                <span className="legend-chip legend-chip-icon">
                  <IconSpark size={11} />
                  Audit Trail
                </span>
              </div>
            </div>

            <div className="security-feature__media relative min-h-[14rem] md:min-h-[18rem] lg:min-h-full">
              <Image
                src="/security_padlock.webp"
                alt="HevaONE security and audit controls"
                fill
                loading="lazy"
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover opacity-84"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#040d1b]/62 via-[#040d1b]/16 to-transparent" />
              <div className="image-pill absolute bottom-4 left-4 rounded-xl px-3 py-2 text-[0.72rem] font-semibold uppercase tracking-[0.1em]">
                <IconMapPin size={12} />
                Device + location checks
              </div>
            </div>
          </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
