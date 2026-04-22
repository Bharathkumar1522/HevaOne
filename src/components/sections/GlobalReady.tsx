import { Reveal } from "@/components/ui/Reveal";
import { IconClock, IconCurrency, IconMapPin, IconShield, IconArrowRight } from "@/components/ui/SiteIcons";

const CURRENCIES = ["GBP", "USD", "INR", "AUD", "CAD"];



export function GlobalSection() {
  return (
    <section id="global" className="global-section relative py-16 md:py-24 bg-premium-dots">
      <span className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[color:color-mix(in_srgb,var(--brand)_20%,transparent)] to-transparent" />
      <div className="editorial-shell">
        <Reveal className="global-intro mb-8 max-w-2xl">
          <span className="section-kicker">
            <span className="feature-dot" />
            Global Readiness
          </span>
          <h2 className="section-title mt-4">Operate across markets with one consistent operating model.</h2>
          <div className="legend-row mt-5">
            <span className="legend-chip">Multi-Currency Aware</span>
            <span className="legend-chip legend-chip-ok">Compliance Ready</span>
            <span className="legend-chip legend-chip-icon">
              <IconMapPin size={11} />
              Multi-Region
            </span>
          </div>
        </Reveal>

        <Reveal delay={90} direction="scale">
          <div className="global-capability-band rounded-[1.2rem] p-5 md:p-8">


          <div className="global-capability-grid grid gap-5 md:grid-cols-2">
            {/* ── BENTO 1: Massive Feature Row ── */}
            <Reveal delay={0}>
              <article className="group col-span-1 md:col-span-2 relative overflow-hidden flex flex-col md:flex-row items-center gap-10 rounded-[1.8rem] border border-transparent bg-[var(--surface)] p-6 md:p-8 shadow-[inset_0_1px_0_rgba(255,255,255,1),0_0_0_1px_rgba(0,0,0,0.03),0_4px_12px_rgba(15,23,42,0.02)] transition-all duration-300 hover:shadow-[inset_0_1px_0_rgba(255,255,255,1),0_0_0_1px_rgba(0,0,0,0.05),0_12px_32px_rgba(15,23,42,0.04)] hover:-translate-y-px">
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--brand-soft)] to-transparent opacity-80" />
                <div className="md:w-1/2 z-10">
                  <span className={`mb-6 inline-flex h-14 w-14 items-center justify-center rounded-[1rem] bg-[color:color-mix(in_srgb,var(--brand)_8%,transparent)] text-[var(--brand)] transition-transform duration-300 group-hover:scale-110`}>
                    <IconCurrency size={26} />
                  </span>
                  <h3 className="text-2xl font-bold text-[var(--ink-strong)] tracking-tight">
                    Multi-Currency Native
                  </h3>
                  <p className="mt-3 text-[1rem] leading-relaxed text-[var(--ink-soft)]">
                    Automatic detection and rapid reconciliation for global commerce without painful FX math.
                  </p>
                </div>
                
                {/* Visual Widget inside Bento Box */}
                <div className="md:w-1/2 w-full min-h-[12rem] md:min-h-[14rem] rounded-2xl bg-[color:color-mix(in_srgb,var(--surface-muted)_50%,white)] border border-[color:color-mix(in_srgb,var(--line)_60%,transparent)] shadow-[inset_0_2px_12px_rgba(0,0,0,0.02)] relative flex items-center justify-center overflow-hidden p-5 z-10 group-hover:bg-slate-50 transition-colors">
                  <div className="grid grid-cols-2 lg:grid-cols-3 gap-3">
                    {CURRENCIES.map((currency, i) => (
                      <span key={currency} className={`flex items-center justify-center rounded-xl border border-white bg-white/60 shadow-sm px-4 py-3 text-sm font-bold tracking-[0.08em] text-[var(--brand-deep)] backdrop-blur transition-all duration-500 group-hover:scale-105 group-hover:bg-white`} style={{ transitionDelay: `${i * 30}ms` }}>
                        {currency}
                      </span>
                    ))}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent pointer-events-none -translate-x-[150%] group-hover:translate-x-[150%] transition-transform duration-1000 ease-in-out" />
                </div>
              </article>
            </Reveal>

            {/* ── BENTO 2: Global Compliance ── */}
            <Reveal delay={80}>
              <article className="group relative overflow-hidden flex flex-col h-full rounded-[1.8rem] border border-transparent bg-[var(--surface)] p-6 md:p-8 shadow-[inset_0_1px_0_rgba(255,255,255,1),0_0_0_1px_rgba(0,0,0,0.03),0_4px_12px_rgba(15,23,42,0.02)] transition-all duration-300 hover:shadow-[inset_0_1px_0_rgba(255,255,255,1),0_0_0_1px_rgba(0,0,0,0.05),0_12px_32px_rgba(15,23,42,0.04)] hover:-translate-y-px hover:scale-[0.995]">
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white to-transparent opacity-80" />
                <span className={`mb-5 inline-flex h-12 w-12 items-center justify-center rounded-[0.8rem] bg-[color:color-mix(in_srgb,var(--ink)_4%,transparent)] transition-transform duration-300 group-hover:scale-110`}>
                  <IconShield size={22} className="text-[var(--ink-strong)]" />
                </span>
                <h3 className="text-xl font-bold text-[var(--ink-strong)] tracking-tight">
                  Global Compliance
                </h3>
                <p className="mt-2.5 text-[0.95rem] leading-relaxed text-[var(--ink-soft)]">
                  Built-in logic for regional labor laws and break requirements.
                </p>

                {/* Widget */}
                <div className="mt-8 flex-1 w-full rounded-[1.1rem] bg-[color:color-mix(in_srgb,var(--surface-muted)_50%,white)] border border-[color:color-mix(in_srgb,var(--line)_60%,transparent)] p-5 relative overflow-hidden group-hover:bg-slate-50 transition-colors flex flex-col justify-center">
                  <div className="space-y-3 w-full">
                    {['UK GDPR', 'AUS Fair Work', 'EU Working Time'].map((law) => (
                      <div key={law} className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200/60 pb-3 last:border-0 last:pb-0">
                        <span className="text-[0.75rem] font-bold uppercase tracking-[0.05em] text-[var(--ink-soft)]">{law}</span>
                        <div className="flex items-center gap-2 rounded-full bg-emerald-50 px-2.5 py-1.5 border border-emerald-100/50 shadow-sm">
                           <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 shadow-[0_0_6px_rgba(16,185,129,0.5)]" />
                           <span className="text-[0.62rem] font-bold text-emerald-700 tracking-wide uppercase">Active</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            </Reveal>

            {/* ── BENTO 3: Timezone Intelligence ── */}
            <Reveal delay={160}>
              <article className="group relative overflow-hidden flex flex-col h-full rounded-[1.8rem] border border-transparent bg-[var(--surface)] p-6 md:p-8 shadow-[inset_0_1px_0_rgba(255,255,255,1),0_0_0_1px_rgba(0,0,0,0.03),0_4px_12px_rgba(15,23,42,0.02)] transition-all duration-300 hover:shadow-[inset_0_1px_0_rgba(255,255,255,1),0_0_0_1px_rgba(0,0,0,0.05),0_12px_32px_rgba(15,23,42,0.04)] hover:-translate-y-px hover:scale-[0.995]">
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white to-transparent opacity-80" />
                <span className={`mb-5 inline-flex h-12 w-12 items-center justify-center rounded-[0.8rem] bg-[color:color-mix(in_srgb,var(--ink)_4%,transparent)] transition-transform duration-300 group-hover:scale-110`}>
                  <IconClock size={22} className="text-[var(--ink-strong)]" />
                </span>
                <h3 className="text-xl font-bold text-[var(--ink-strong)] tracking-tight">
                  Timezone Intelligence
                </h3>
                <p className="mt-2.5 text-[0.95rem] leading-relaxed text-[var(--ink-soft)]">
                  Manage a global workforce without the &quot;time-math&quot; headache.
                </p>

                {/* Widget */}
                <div className="mt-8 flex-1 w-full rounded-[1.1rem] bg-[color:color-mix(in_srgb,var(--surface-muted)_50%,white)] border border-[color:color-mix(in_srgb,var(--line)_60%,transparent)] p-6 relative overflow-hidden group-hover:bg-slate-50 transition-colors flex flex-col justify-center">
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center justify-between border-b border-slate-200/60 pb-4">
                       <div>
                         <span className="text-[0.65rem] font-bold uppercase tracking-widest text-slate-400 block mb-1">London (HQ)</span>
                         <span className="text-[1.35rem] font-bold tracking-tight text-[var(--ink-strong)]">09:00 <span className="text-xs font-semibold text-slate-400">AM</span></span>
                       </div>
                       <IconArrowRight size={16} className="text-slate-300 mx-2" />
                       <div className="text-right">
                         <span className="text-[0.65rem] font-bold uppercase tracking-widest text-[var(--brand)] block mb-1">Sydney</span>
                         <span className="text-[1.35rem] font-bold tracking-tight text-[var(--ink-strong)]">06:00 <span className="text-xs font-semibold text-slate-400">PM</span></span>
                       </div>
                    </div>
                    <div className="mt-1">
                      <div className="w-full bg-[color:color-mix(in_srgb,var(--brand)_8%,transparent)] h-2.5 rounded-full overflow-hidden">
                         <div className="bg-[var(--brand)] w-[60%] h-full rounded-full shadow-[0_0_12px_rgba(67,56,202,0.3)] transition-all duration-1000 group-hover:w-[75%]" />
                      </div>
                      <span className="text-[0.7rem] font-bold text-[var(--brand)] mt-3 block tracking-wide uppercase text-center">Shift Overlap: 3 Hours</span>
                    </div>
                  </div>
                </div>
              </article>
            </Reveal>
          </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
