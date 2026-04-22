import Image from "next/image";

import { Reveal } from "@/components/ui/Reveal";

const FOOTER_LINKS = {
  Product: [
    { label: "Industries", href: "#industries" },
    { label: "All-in-One Advantage", href: "#advantage" },
    { label: "Global Readiness", href: "#global" },
    { label: "Trusted Security", href: "#security" },
  ],
  Company: [
    { label: "About", href: "/" },
    { label: "Info@hetupathways.com", href: "mailto:Info@hetupathways.com" },
    { label: "+44 7435 786586", href: "tel:+447435786586" },
    { label: "Privacy", href: "/" },
    { label: "Terms", href: "/" },
  ],
};


export function Footer() {
  return (
    <footer className="footer-shell mt-24 border-t border-[var(--line)]" role="contentinfo">
      <Reveal className="editorial-shell py-16" direction="up">
        <div className="footer-top grid gap-12 lg:grid-cols-[1.25fr_1fr]">
          <div className="footer-brand-block">
            <a href="#home" className="group inline-flex items-center gap-2.5">
              <Image
                src="/logo.png"
                alt="HevaONE Icon"
                width={40}
                height={40}
                className="h-[1.65rem] w-auto opacity-90 saturate-[1.1] transition-all duration-300 group-hover:scale-110 group-hover:opacity-100"
              />
              <div className="flex items-baseline gap-[2px]">
                <span className="text-[1.15rem] font-bold tracking-tight text-[var(--ink-strong)]">Heva</span>
                <span className="text-[1.15rem] font-bold tracking-tight text-[var(--brand)]">ONE</span>
              </div>
            </a>
            <p className="mt-4 max-w-xl text-[0.92rem] leading-[1.8] text-[var(--ink-soft)]">
              HevaONE is built to bring Workforce, POS, and Operations into one clear system so teams can run daily operations with less switching and fewer handoffs.
            </p>
          </div>

          <div className="footer-links-grid grid gap-8 sm:grid-cols-2">
            {Object.entries(FOOTER_LINKS).map(([title, links]) => (
              <div key={title}>
                <h3 className="mb-3 text-[0.7rem] font-bold uppercase tracking-[0.15em] text-[var(--ink-soft)]">{title}</h3>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="group relative text-[0.9rem] font-medium text-[var(--ink)] transition-colors hover:text-[var(--brand-deep)]"
                      >
                        {link.label}
                        <span className="absolute -bottom-0.5 left-0 h-[1.5px] w-0 bg-[var(--brand-vivid)] opacity-0 transition-all duration-300 group-hover:w-full group-hover:opacity-100" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="footer-bottom mt-16 flex flex-col items-center md:flex-row justify-between gap-4 border-t border-[var(--line)] pt-6 text-[0.85rem] text-[var(--ink-soft)] text-center md:text-left">
          <p>Copyright {new Date().getFullYear()} HevaONE Ltd. All rights reserved.</p>
          <div className="flex gap-4">
            <span className="flex items-center justify-center md:justify-start gap-1.5"><span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--ok)]" /> All systems operational</span>
          </div>
        </div>
      </Reveal>
    </footer>
  );
}
