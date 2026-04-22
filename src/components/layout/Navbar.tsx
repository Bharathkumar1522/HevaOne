import Image from "next/image";
import Link from "next/link";

const NAV_ITEMS = [
  { href: "#home", label: "Overview" },
  { href: "#industries", label: "Industries" },
  { href: "#advantage", label: "Advantage" },
  { href: "#global", label: "Global" },
  { href: "#security", label: "Security" },
];

export function Navbar() {
  return (
    <header className="fixed top-4 md:top-6 left-1/2 -translate-x-1/2 z-50 w-[min(94vw,700px)]">
      <nav className="flex items-center justify-between rounded-[2rem] border border-slate-100/80 bg-white p-1.5 shadow-[0_8px_30px_rgba(0,0,0,0.04),0_2px_10px_rgba(0,0,0,0.02)] transition-all">
        
        {/* Left: Logo */}
        <a href="#home" aria-label="Go to Home" className="group flex shrink-0 items-center gap-2.5 pl-3.5 pr-5 border-r border-slate-100">
          <Image
            src="/logo.png"
            alt="HevaONE Logo"
            width={24}
            height={24}
            className="h-5 w-auto saturate-[1.1] transition-transform duration-300 group-hover:scale-110"
            priority
          />
          <div className="flex items-baseline gap-[3px]">
            <span className="text-[0.95rem] font-extrabold tracking-tight text-[var(--ink-strong)]">Heva</span>
            <span className="text-[0.95rem] font-extrabold tracking-tight text-[var(--brand)]">ONE</span>
          </div>
        </a>

        {/* Center: Desktop Links */}
        <ul aria-label="Desktop Navigation" className="hidden flex-1 items-center justify-center gap-0.5 md:flex px-2">
          {NAV_ITEMS.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="block rounded-full px-3.5 py-1.5 text-[0.82rem] font-bold text-slate-500 transition-colors hover:bg-slate-50 hover:text-slate-800"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Right: Actions */}
        <div className="hidden md:flex shrink-0 items-center pl-2">
          <Link href="mailto:Info@hetupathways.com" className="flex flex-1 items-center justify-center rounded-[1.5rem] bg-[var(--brand)] px-5 py-[0.5rem] text-[0.82rem] font-bold text-white shadow-[0_2px_8px_rgba(67,56,202,0.25)] transition-transform hover:scale-105 hover:bg-[var(--brand-deep)]">
            Get Started
          </Link>
        </div>

        {/* Mobile menu toggle (super minimal) */}
        <details className="group relative ml-2 md:hidden">
          <summary aria-label="Toggle Mobile Menu" aria-haspopup="menu" className="list-none flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-[var(--surface-muted)] text-[var(--ink-strong)]">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 6h16M4 12h16M4 18h16"/></svg>
          </summary>
          <div className="absolute right-0 top-[calc(100%+0.5rem)] w-48 rounded-2xl border border-[var(--line)] bg-white/95 p-2 shadow-xl backdrop-blur-xl">
            <ul aria-label="Mobile Navigation" className="flex flex-col gap-1">
              {NAV_ITEMS.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="block rounded-xl px-4 py-2.5 text-[0.85rem] font-bold text-slate-600 hover:bg-slate-50 hover:text-[var(--ink-strong)]"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </details>
      </nav>
    </header>
  );
}
