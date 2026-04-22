import { Reveal } from "@/components/ui/Reveal";
import { IconChat, IconClock, IconDevice, IconDocument, IconLayers, IconShield, IconCheck, IconX } from "@/components/ui/SiteIcons";

const COMPARISON_ROWS = [
  {
    feature: "Scheduling",
    oldWay: "Separate App ($$$)",
    hevaOne: "Integrated",
    glyph: "SC",
    icon: IconClock,
  },
  {
    feature: "Attendance",
    oldWay: "Manual / Honor System",
    hevaOne: "Photo & GPS Verified",
    glyph: "AT",
    icon: IconShield,
  },
  {
    feature: "Sales / POS",
    oldWay: "Separate Hardware ($$$)",
    hevaOne: "Any Device (iOS/Android/Web)",
    glyph: "POS",
    icon: IconDevice,
  },
  {
    feature: "Team Comms",
    oldWay: "Messy Group Chats",
    hevaOne: "Built-in Staff App",
    glyph: "CM",
    icon: IconChat,
  },
  {
    feature: "Payroll",
    oldWay: "5+ Hours of Data Entry",
    hevaOne: "One-Click CSV Export",
    glyph: "PR",
    icon: IconDocument,
  },
];

export function ComparisonSection() {
  return (
    <section id="advantage" className="comparison-section relative py-16 md:py-24">
      <span className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--line)] to-transparent" />
      <div className="editorial-shell">
        <Reveal className="comparison-intro mb-8 w-full flex flex-col items-center">
          <span className="section-kicker">
            <span className="feature-dot" />
            The All-in-One Advantage
          </span>
          <h2 className="section-title mt-4 text-center">Go from invisible to unmissable</h2>
          <p className="mt-3 text-center text-slate-500 font-medium">You are an exceptional operator, your platform should reflect that.</p>
        </Reveal>

        <div className="mt-16 flex flex-col md:flex-row justify-center items-stretch max-w-4xl mx-auto relative px-4 md:px-0">
          {/* The Heva One Card (Elevated, Left) */}
          <Reveal delay={60} direction="left" className="z-20 w-full md:w-[50%]">
            <div className="h-full rounded-[2rem] bg-white p-6 md:p-12 shadow-[0_24px_80px_rgba(0,0,0,0.06),0_12px_32px_rgba(0,0,0,0.04)] border border-[var(--line)]">
              <h3 className="text-center text-[1.6rem] font-bold tracking-tight text-[var(--ink-strong)] mb-8">Heva One</h3>
              <ul className="space-y-0">
                {COMPARISON_ROWS.map((row, i) => (
                  <li key={row.feature} className={`flex items-center gap-4 py-4 ${i !== COMPARISON_ROWS.length - 1 ? 'border-b border-slate-100' : ''}`}>
                     <IconCheck className="text-emerald-500 shrink-0" size={20} strokeWidth={3}/>
                     <span className="font-bold text-[var(--ink-strong)] text-[0.95rem] tracking-tight">{row.feature} &mdash; {row.hevaOne}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          {/* The Legacy Card (Recessed, Right) */}
          <Reveal delay={160} direction="right" className="z-10 w-full md:w-[50%]">
            <div className="h-full rounded-[2rem] md:rounded-l-none bg-[#fafbfc] border border-[var(--line)] md:border-l-0 p-6 md:p-12 md:-ml-8 mt-6 md:mt-0 flex flex-col justify-center">
              <h3 className="text-center text-[1.4rem] font-medium tracking-tight text-slate-600 mb-8 mt-2 md:mt-0">Legacy Stack</h3>
              <ul className="space-y-0 text-slate-400">
                {COMPARISON_ROWS.map((row, i) => (
                  <li key={row.feature} className={`flex items-center gap-4 py-4 ${i !== COMPARISON_ROWS.length - 1 ? 'border-b border-slate-150/60 opacity-80' : 'opacity-80'}`}>
                     <IconX className="text-red-400 shrink-0" size={18} strokeWidth={2.5} />
                     <span className="font-medium text-[0.95rem] tracking-tight">{row.oldWay}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        <div className="comparison-notes mt-6 grid gap-3 md:grid-cols-3">
          <Reveal delay={120}>
            <article className="premium-panel focus-ring group rounded-xl p-5 transition-all hover:bg-white hover:-translate-y-0.5 hover:shadow-md">
            <div className="inline-flex items-center gap-2 text-[0.92rem] font-semibold text-[var(--ink-strong)]">
              <span className="text-[var(--brand)] transition-transform group-hover:scale-110"><IconLayers size={16} /></span>
              One source of truth
            </div>
            <p className="mt-2 text-[0.82rem] leading-6 text-[var(--ink-soft)]">Scheduling, attendance, POS, and exports stay linked in one model.</p>
            </article>
          </Reveal>
          <Reveal delay={200}>
            <article className="premium-panel focus-ring group rounded-xl p-5 transition-all hover:bg-white hover:-translate-y-0.5 hover:shadow-md">
            <div className="inline-flex items-center gap-2 text-[0.92rem] font-semibold text-[var(--ink-strong)]">
              <span className="text-[#0284c7] transition-transform group-hover:scale-110"><IconShield size={16} /></span>
              Verified attendance
            </div>
            <p className="mt-2 text-[0.82rem] leading-6 text-[var(--ink-soft)]">Photo and location checks support better shift record integrity.</p>
            </article>
          </Reveal>
          <Reveal delay={280}>
            <article className="premium-panel focus-ring group rounded-xl p-5 transition-all hover:bg-white hover:-translate-y-0.5 hover:shadow-md">
            <div className="inline-flex items-center gap-2 text-[0.92rem] font-semibold text-[var(--ink-strong)]">
              <span className="text-[#10b981] transition-transform group-hover:scale-110"><IconDocument size={16} /></span>
              Faster handoff to payroll
            </div>
            <p className="mt-2 text-[0.82rem] leading-6 text-[var(--ink-soft)]">One-click CSV output reduces repetitive reconciliation effort.</p>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
