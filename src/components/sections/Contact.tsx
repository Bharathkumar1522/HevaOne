"use client";

import { Reveal } from "@/components/ui/Reveal";
import Image from "next/image";
import { IconChat, IconSpark, IconShield, IconArrowRight } from "@/components/ui/SiteIcons";

export function ContactSection() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get("Name");
    const email = formData.get("Email");
    const message = formData.get("Message");

    const body = `Name: ${name}%0D%0AEmail: ${email}%0D%0A%0D%0AMessage:%0D%0A${message}`;
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=Info@hetupathways.com&su=Request+Access+for+HevaONE&body=${body}`;
    
    window.open(gmailUrl, '_blank');
  };

  return (
    <section id="contact" className="contact-section relative py-16 md:py-24 bg-[#fafbfc] border-t border-[var(--line)]">
      <div className="editorial-shell">
        <Reveal className="contact-intro mb-12 w-full flex flex-col items-center">
          <span className="section-kicker">
            <span className="feature-dot" />
            Get in Touch
          </span>
          <h2 className="section-title mt-4 text-center">Ready to upgrade your operations?</h2>
          <p className="mt-3 text-center text-slate-500 font-medium max-w-lg">
            Request access to HevaONE, or reach out directly to our team via Email or WhatsApp.
          </p>
        </Reveal>

        <div className="max-w-5xl mx-auto grid gap-6 md:gap-10 lg:grid-cols-[1.1fr_1.3fr] items-stretch">
          {/* Left Panel: Premium Visuals & Direct Contact */}
          <Reveal delay={60} direction="left" className="h-full">
            <div className="relative flex flex-col h-full overflow-hidden rounded-[2rem] bg-[#0a1128] border border-[var(--line)] shadow-[0_24px_50px_rgba(0,0,0,0.12)] p-6 md:p-10 justify-between">
              {/* Premium Background Visuals */}
              <div className="absolute inset-0">
                <Image src="/hospitality_bg.webp" alt="Premium Hospitality" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover opacity-30 mix-blend-luminosity" priority />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a1128]/95 via-[#0a1128]/60 to-transparent" />
                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/20 blur-[80px] rounded-full" />
              </div>

              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-[0.75rem] font-bold text-white backdrop-blur-md border border-white/10 mb-6">
                  <IconShield size={14} className="text-emerald-400" />
                  Premium 24/7 Support
                </div>
                <h3 className="text-[clamp(1.5rem,2vw,2rem)] font-bold text-white leading-[1.15] tracking-tight">
                  Expert guidance when you need it most.
                </h3>
                <p className="mt-3 text-[0.95rem] text-blue-100/80 max-w-sm">
                  Connect instantly with our dedicated onboarding and operations team to scale your workflow.
                </p>
                
                {/* Social Proof Star Rating */}
                <div className="flex items-center gap-4 mt-8">
                  <div className="flex gap-1 text-[#FBBF24]">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg key={star} width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="drop-shadow-[0_0_8px_rgba(251,191,36,0.4)]">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                      </svg>
                    ))}
                  </div>
                  <div className="text-[0.85rem] font-medium text-blue-50/90 tracking-wide">
                    Join our <span className="font-bold text-white">exclusive early access</span>
                  </div>
                </div>
              </div>

              <div className="relative z-10 flex flex-col gap-3 mt-10">
                <a
                  href="https://wa.me/447435786586"
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center gap-4 rounded-2xl bg-white/5 p-4 border border-white/10 backdrop-blur-md hover:bg-white/10 transition-colors"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#25D366]/20 text-[#25D366]">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.489-1.761-1.663-2.06-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-[1rem] font-bold text-white">Chat on WhatsApp</h3>
                    <p className="text-[0.85rem] text-blue-100/70">+44 7435 786586</p>
                  </div>
                </a>
                
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=Info@hetupathways.com&su=Inquiry+for+HevaONE"
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center gap-4 rounded-2xl bg-white/5 p-4 border border-white/10 backdrop-blur-md hover:bg-white/10 transition-colors"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-500/20 text-blue-400">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect width="20" height="16" x="2" y="4" rx="2" />
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-[1rem] font-bold text-white">Email Us Directly</h3>
                    <p className="text-[0.85rem] text-blue-100/70">Info@hetupathways.com</p>
                  </div>
                </a>
              </div>
            </div>
          </Reveal>

          {/* Request Form */}
          <Reveal delay={180} direction="right" className="h-full">
            <div className="relative rounded-[2rem] bg-white p-6 md:p-10 shadow-[0_24px_80px_rgba(0,0,0,0.06),0_12px_32px_rgba(0,0,0,0.04)] border border-[var(--line)] h-full overflow-hidden">
              {/* Premium Glow Top Right */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--brand)]/5 blur-[50px] rounded-full pointer-events-none" />

              <h3 className="text-[1.4rem] font-bold text-[var(--ink-strong)] mb-6 flex items-center gap-2">
                Request Access <IconSpark size={20} className="text-[var(--brand)]" />
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-5 relative z-10">
                <div className="space-y-1.5 relative">
                  <label htmlFor="name" className="text-[0.85rem] font-bold text-slate-600 block">Full Name</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                    </div>
                    <input type="text" id="name" name="Name" required className="w-full rounded-xl border border-slate-200 bg-slate-50 pl-11 pr-4 py-3.5 text-[0.95rem] outline-none transition-all focus:border-[var(--brand)] focus:bg-white focus:ring-4 focus:ring-[var(--brand)]/10" placeholder="John Doe" />
                  </div>
                </div>
                
                <div className="space-y-1.5 relative">
                  <label htmlFor="email" className="text-[0.85rem] font-bold text-slate-600 block">Work Email</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                    </div>
                    <input type="email" id="email" name="Email" required className="w-full rounded-xl border border-slate-200 bg-slate-50 pl-11 pr-4 py-3.5 text-[0.95rem] outline-none transition-all focus:border-[var(--brand)] focus:bg-white focus:ring-4 focus:ring-[var(--brand)]/10" placeholder="john@company.com" />
                  </div>
                </div>

                <div className="space-y-1.5 relative">
                  <label htmlFor="message" className="text-[0.85rem] font-bold text-slate-600 block">How can we help?</label>
                  <div className="relative">
                    <div className="absolute top-3.5 left-0 pl-3.5 flex items-start pointer-events-none text-slate-400">
                      <IconChat size={18} />
                    </div>
                    <textarea id="message" name="Message" rows={3} required className="w-full rounded-xl border border-slate-200 bg-slate-50 pl-11 pr-4 py-3.5 text-[0.95rem] outline-none transition-all focus:border-[var(--brand)] focus:bg-white focus:ring-4 focus:ring-[var(--brand)]/10 resize-none" placeholder="Tell us about your operational needs..." />
                  </div>
                </div>

                <button type="submit" className="mt-2 w-full flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[var(--brand)] to-[var(--brand-deep)] px-6 py-4 text-[1rem] font-bold text-white shadow-[0_4px_20px_0_rgba(67,56,202,0.4)] transition-all hover:scale-[1.02] hover:shadow-[0_6px_25px_0_rgba(67,56,202,0.5)] active:scale-95">
                  Get Priority Access
                  <IconArrowRight size={18} />
                </button>
                
                {/* Security Badge underneath */}
                <div className="pt-3 flex items-center justify-center gap-2 text-[0.75rem] font-bold uppercase tracking-widest text-slate-400">
                  <IconShield size={14} className="text-emerald-500" />
                  Secured by 256-bit encryption
                </div>
              </form>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
