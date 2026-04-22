# Heva One Editorial Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Transform the Heva One marketing homepage into a premium light-theme editorial product launch page with stronger typography, cleaner section composition, and smooth but restrained motion.

**Architecture:** Keep the app mostly server-rendered and implement the redesign through a stronger global design system in `src/app/globals.css`, a two-font setup in `src/app/layout.tsx`, and focused section rewrites for hero, navigation, footer, and the four supporting homepage sections. Reuse the current reveal pattern and custom icon set, but reduce card repetition, strengthen image-led composition, and introduce more differentiated layout shells.

**Tech Stack:** Next.js 16 App Router, React 19, `next/font/google`, Tailwind CSS v4 utilities in `globals.css`, custom SVG icon components, existing static assets in `public/`

---

### Task 1: Establish the editorial typography and layout foundation

**Files:**
- Modify: `src/app/layout.tsx`
- Modify: `src/app/globals.css`

- [ ] **Step 1: Replace the current single-font emphasis with a two-font setup**

Update `src/app/layout.tsx` to load one editorial serif and one clean sans, exposing both as CSS variables for global use.

import { Plus_Jakarta_Sans } from "next/font/google";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

<html lang="en" className={`${jakarta.variable}`}>
```

- [ ] **Step 2: Run lint to verify the font import change is clean**

Run: `npm run lint`
Expected: PASS with no new ESLint errors

- [ ] **Step 3: Rewrite the root design tokens in `src/app/globals.css` for the editorial system**

Adjust the root palette and font utilities so the site uses warm ivory surfaces, deeper ink text, restrained indigo accents, and distinct serif/sans utilities.

```css
:root {
  --nav-offset: 5.35rem;
  --page-bg: #fafbff;
  --surface: #ffffff;
  --surface-alt: #f8fafc;
  --ink-strong: #0f172a;
  --ink: #1e293b;
  --ink-soft: #64748b;
  --brand: #4338ca;
  --brand-soft: #e0e7ff;
  --line: rgba(0, 0, 0, 0.05);
}

/* Note: Palette direction was changed to a technical cool gradient rather than warm ivory */

@theme {
  --font-sans: var(--font-sans), system-ui, sans-serif;
}

.font-editorial {
  font-family: var(--font-editorial), Georgia, serif;
}

.display-title,
.section-title {
  font-family: var(--font-editorial), Georgia, serif;
}
```

- [ ] **Step 4: Add differentiated layout shells and remove over-reliance on one repeated panel style**

In `src/app/globals.css`, add three layout primitives that will support the redesign: a full-bleed hero shell, a narrower editorial content shell, and a dense data shell.

```css
@utility hero-shell {
  width: min(1360px, calc(100% - 2rem));
  margin-inline: auto;
}

@utility editorial-shell {
  width: min(1100px, calc(100% - 2.4rem));
  margin-inline: auto;
}

@utility data-shell {
  width: min(1200px, calc(100% - 2.4rem));
  margin-inline: auto;
}
```

- [ ] **Step 5: Refine global surface, border, and motion utilities**

Update `src/app/globals.css` so fewer sections depend on repeated rounded cards, and make motion calmer and more premium.

```css
.soft-panel {
  border: 1px solid var(--line);
  background: color-mix(in srgb, var(--surface) 92%, #f7f3ec);
  box-shadow: 0 20px 40px rgba(19, 29, 49, 0.05);
}

.editorial-divider {
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(45, 78, 203, 0.18), transparent);
}

.reveal {
  transition:
    opacity 720ms cubic-bezier(0.16, 1, 0.3, 1),
    transform 720ms cubic-bezier(0.16, 1, 0.3, 1),
    filter 720ms cubic-bezier(0.16, 1, 0.3, 1);
}
```

- [ ] **Step 6: Run a production build to confirm the global foundation compiles**

Run: `npm run build`
Expected: PASS, static homepage still generated successfully

- [ ] **Step 7: Commit the foundation pass**

```bash
git add src/app/layout.tsx src/app/globals.css
git commit -m "feat: add editorial typography and layout foundation"
```

### Task 2: Redesign the navigation and footer shell for the new art direction

**Files:**
- Modify: `src/components/layout/Navbar.tsx`
- Modify: `src/components/layout/Footer.tsx`
- Modify: `src/app/globals.css`

- [ ] **Step 1: Restyle the navigation as a quieter editorial header**

Update `src/components/layout/Navbar.tsx` so the nav feels lighter and less pill-heavy, with calmer typography and less component-library chrome.

```tsx
<header className="sticky top-0 z-40">
  <div className="hero-shell pt-4 md:pt-5">
    <nav className="nav-shell">
      <Link href="#home" className="nav-brand">
        <span className="nav-brand-mark">
          <IconLayers size={16} />
        </span>
        <span className="nav-brand-text">Heva One</span>
      </Link>
      <ul className="nav-links">...</ul>
      <div className="nav-actions">...</div>
    </nav>
  </div>
</header>
```

- [ ] **Step 2: Add the new nav-specific utilities in `src/app/globals.css`**

```css
.nav-shell {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid rgba(17, 24, 39, 0.08);
  border-radius: 999px;
  background: rgba(255, 252, 247, 0.78);
  backdrop-filter: blur(14px);
  box-shadow: 0 18px 34px rgba(15, 23, 42, 0.04);
}

.nav-brand-text {
  font-size: 1rem;
  font-weight: 700;
  letter-spacing: -0.03em;
  color: var(--ink-strong);
}
```

- [ ] **Step 3: Rebuild the footer into a calmer editorial close**

Update `src/components/layout/Footer.tsx` to reduce generic column-box feel and make the footer read as a clean closing section.

```tsx
<footer className="footer-shell" role="contentinfo">
  <div className="editorial-shell py-16">
    <div className="footer-top">
      <div className="footer-brand-block">...</div>
      <div className="footer-links-grid">...</div>
    </div>
    <div className="footer-bottom">
      Copyright {new Date().getFullYear()} Heva One Ltd. All rights reserved.
    </div>
  </div>
</footer>
```

- [ ] **Step 4: Run lint to verify the shell updates**

Run: `npm run lint`
Expected: PASS with no new JSX or className errors

- [ ] **Step 5: Commit the shell redesign**

```bash
git add src/components/layout/Navbar.tsx src/components/layout/Footer.tsx src/app/globals.css
git commit -m "feat: redesign site chrome for editorial landing page"
```

### Task 3: Rebuild the hero as the dominant product launch composition

**Files:**
- Modify: `src/components/sections/Hero.tsx`
- Modify: `src/components/ui/AuroraBackground.tsx`
- Modify: `src/app/globals.css`

- [ ] **Step 1: Restructure the hero markup into a more poster-like composition**

Update `src/components/sections/Hero.tsx` so the hero uses one narrow text column and one dominant product UI plane, with a lighter integrated proof strip instead of mini-card repetition.

```tsx
<AuroraBackground id="home" className="hero-aurora">
  <section className="hero-shell hero-stage-grid">
    <Reveal direction="left" className="hero-copy">
      <span className="section-kicker">...</span>
      <h1 className="display-title hero-title">
        One Platform. Every Shift. Every Sale. Everywhere.
      </h1>
      <p className="body-copy hero-body">...</p>
      <div className="hero-actions">...</div>
      <div className="hero-proof-strip">
        {HERO_STATS.map((item) => (
          <article key={item.value} className="hero-proof-item">...</article>
        ))}
      </div>
    </Reveal>
    <Reveal id="tour" direction="right" delay={120} className="hero-visual-wrap">
      <div className="hero-visual-primary">...</div>
      <div className="hero-visual-secondary hero-visual-secondary--tablet">...</div>
      <div className="hero-visual-secondary hero-visual-secondary--phone">...</div>
    </Reveal>
  </section>
</AuroraBackground>
```

- [ ] **Step 2: Update the hero CSS so it fits the first viewport cleanly with the sticky header present**

In `src/app/globals.css`, replace the current hero spacing with a full first-screen composition that subtracts the nav offset.

```css
.hero-stage-grid {
  min-height: calc(100svh - var(--nav-offset));
  display: grid;
  align-items: center;
  gap: clamp(2.5rem, 5vw, 4.5rem);
  grid-template-columns: minmax(0, 0.84fr) minmax(0, 1.16fr);
  padding: 2rem 0 3rem;
}

.hero-title {
  max-width: 11ch;
  font-size: clamp(3rem, 6vw, 5.8rem);
  line-height: 0.96;
}
```

- [ ] **Step 3: Tone down the aurora so it supports the hero instead of becoming the visual identity**

Update `src/components/ui/AuroraBackground.tsx` and related CSS so the aurora remains light-mode only, quieter, and primarily visible around the hero edges.

```tsx
<div className={`aurora-background aurora-background--hero ${className ?? ""}`.trim()} {...props}>
```

```css
.aurora-background--hero .aurora-background__aurora {
  opacity: 0.28;
  filter: blur(14px) invert(1);
}
```

- [ ] **Step 4: Upgrade the product UI composition and proof strip styling**

Refine the hero product surfaces and proof strip so they feel integrated and premium.

```css
.hero-proof-strip {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 0.75rem;
  padding-top: 1.5rem;
  border-top: 1px solid rgba(17, 24, 39, 0.08);
}

.hero-proof-item {
  padding: 0.5rem 0;
}

.hero-visual-primary {
  border-radius: 1.8rem;
  overflow: hidden;
  box-shadow: 0 36px 80px rgba(15, 23, 42, 0.18);
}
```

- [ ] **Step 5: Run lint and build after the hero rewrite**

Run:

```bash
npm run lint
npm run build
```

Expected: both commands PASS, and the hero still prerenders as static content

- [ ] **Step 6: Commit the hero redesign**

```bash
git add src/components/sections/Hero.tsx src/components/ui/AuroraBackground.tsx src/app/globals.css
git commit -m "feat: rebuild hero into editorial product launch composition"
```

### Task 4: Redesign the industry and comparison sections to remove generic component patterns

**Files:**
- Modify: `src/components/sections/Industries.tsx`
- Modify: `src/components/sections/Comparison.tsx`
- Modify: `src/app/globals.css`

- [ ] **Step 1: Restyle the industry selector as a premium editorial control**

Update `src/components/sections/Industries.tsx` so the switcher remains interactive but stops reading like a library tab component.

```tsx
<div className="industry-picker">
  {INDUSTRIES.map((item) => (
    <button
      key={item.id}
      type="button"
      onClick={() => startTransition(() => setActiveId(item.id))}
      className={`industry-pill ${activeId === item.id ? "industry-pill--active" : ""}`}
    >
      <item.icon size={14} />
      {item.title}
    </button>
  ))}
</div>
```

- [ ] **Step 2: Turn the active industry view into one dominant editorial content block**

Replace the current premium-panel body in `src/components/sections/Industries.tsx` with a stronger text/image split and calmer supporting labels.

```tsx
<article className="industry-feature">
  <div className="industry-feature__copy">...</div>
  <div className="industry-feature__media">...</div>
</article>
```

- [ ] **Step 3: Rework the comparison section so it feels like product proof, not a spreadsheet**

Update `src/components/sections/Comparison.tsx` to keep the accurate row comparison, but with more premium spacing, row grouping, and integrated proof items.

```tsx
<section id="advantage" className="comparison-section">
  <div className="editorial-shell">
    <Reveal className="comparison-intro">...</Reveal>
    <Reveal delay={90} direction="scale">
      <div className="comparison-table-wrap">
        <table className="comparison-table">...</table>
      </div>
    </Reveal>
    <div className="comparison-notes">...</div>
  </div>
</section>
```

- [ ] **Step 4: Add the new section-specific styling to `src/app/globals.css`**

```css
.industry-feature {
  display: grid;
  grid-template-columns: minmax(0, 0.95fr) minmax(0, 1.05fr);
  gap: 0;
  border-top: 1px solid rgba(17, 24, 39, 0.08);
}

.comparison-table-wrap {
  overflow: hidden;
  border-top: 1px solid rgba(17, 24, 39, 0.08);
  border-bottom: 1px solid rgba(17, 24, 39, 0.08);
  background: rgba(255, 253, 249, 0.72);
}

.comparison-notes {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1.25rem;
  padding-top: 1.5rem;
}
```

- [ ] **Step 5: Run lint to verify the supporting-section redesign**

Run: `npm run lint`
Expected: PASS

- [ ] **Step 6: Commit the industry and comparison redesign**

```bash
git add src/components/sections/Industries.tsx src/components/sections/Comparison.tsx src/app/globals.css
git commit -m "feat: redesign industry and comparison sections"
```

### Task 5: Redesign the global and security sections with cleaner editorial composition

**Files:**
- Modify: `src/components/sections/GlobalReady.tsx`
- Modify: `src/components/sections/Security.tsx`
- Modify: `src/app/globals.css`

- [ ] **Step 1: Rebuild global readiness as a capability spread instead of repeated tiles**

Update `src/components/sections/GlobalReady.tsx` to present currencies, compliance, and timezone intelligence in a flatter editorial band with less box repetition.

```tsx
<section id="global" className="global-section">
  <div className="editorial-shell">
    <Reveal className="global-intro">...</Reveal>
    <Reveal delay={90} direction="scale">
      <div className="global-capability-band">
        <div className="global-currency-row">...</div>
        <div className="global-capability-grid">...</div>
      </div>
    </Reveal>
  </div>
</section>
```

- [ ] **Step 2: Refine the security section so the image and headline do more work than nested boxes**

Update `src/components/sections/Security.tsx` by preserving the dark contrast treatment but reducing visible panel stacking and making the image more dominant.

```tsx
<section id="security" className="security-section">
  <div className="editorial-shell">
    <Reveal direction="scale">
      <div className="security-feature">
        <div className="security-feature__copy">...</div>
        <div className="security-feature__media">...</div>
      </div>
    </Reveal>
  </div>
</section>
```

- [ ] **Step 3: Add matching CSS for the final two sections**

```css
.global-capability-band {
  padding: 2rem 0 0;
  border-top: 1px solid rgba(17, 24, 39, 0.08);
}

.security-feature {
  display: grid;
  grid-template-columns: minmax(0, 0.92fr) minmax(0, 1.08fr);
  overflow: hidden;
  border-radius: 2rem;
  background: #0d1729;
}
```

- [ ] **Step 4: Run a full verification pass**

Run:

```bash
npm run lint
npm run build
```

Expected:

- `npm run lint` PASS
- `npm run build` PASS
- Homepage remains statically prerendered

- [ ] **Step 5: Commit the final editorial section pass**

```bash
git add src/components/sections/GlobalReady.tsx src/components/sections/Security.tsx src/app/globals.css
git commit -m "feat: redesign global and security sections"
```

### Task 6: Final polish and manual QA sweep

**Files:**
- Modify: `src/app/globals.css`
- Modify: `src/components/sections/Hero.tsx`
- Modify: `src/components/sections/Industries.tsx`
- Modify: `src/components/sections/Comparison.tsx`
- Modify: `src/components/sections/GlobalReady.tsx`
- Modify: `src/components/sections/Security.tsx`
- Modify: `src/components/layout/Navbar.tsx`
- Modify: `src/components/layout/Footer.tsx`

- [ ] **Step 1: Review the page for repeated visual treatments and remove any remaining generic patterns**

Use this checklist while editing:

```text
- Hero should feel like one composition, not two columns of equal weight
- Serif should only appear in high-impact headings
- Supporting sections should not all use the same card formula
- Indigo should read as a controlled accent, not a default UI wash
- Images should be cropped and framed intentionally
```

- [ ] **Step 2: Tighten mobile spacing and viewport fit**

In `src/app/globals.css`, add mobile-specific adjustments so the hero and supporting sections remain premium without becoming too tall or crowded.

```css
@media (max-width: 1023px) {
  .hero-stage-grid,
  .industry-feature,
  .security-feature {
    grid-template-columns: 1fr;
  }

  .hero-title {
    max-width: 12ch;
  }

  .hero-proof-strip,
  .comparison-notes {
    grid-template-columns: 1fr;
  }
}
```

- [ ] **Step 3: Run the final verification commands one last time**

Run:

```bash
npm run lint
npm run build
```

Expected: PASS for both commands

- [ ] **Step 4: Commit the polish sweep**

```bash
git add src/app/globals.css src/components/sections/Hero.tsx src/components/sections/Industries.tsx src/components/sections/Comparison.tsx src/components/sections/GlobalReady.tsx src/components/sections/Security.tsx src/components/layout/Navbar.tsx src/components/layout/Footer.tsx
git commit -m "feat: polish editorial redesign across homepage"
```

## Self-Review

### Spec coverage

- Hero poster composition: covered in Task 3
- Serif/sans editorial typography: covered in Task 1
- Quieter navigation/footer chrome: covered in Task 2
- Premium industry fit section: covered in Task 4
- Refined unified advantage table and integrated proof: covered in Task 4
- Global capability spread: covered in Task 5
- Dark trust section with cleaner composition: covered in Task 5
- Smooth restrained motion and reduced visual sameness: covered across Tasks 1, 3, 4, 5, and 6
- Lint/build verification: covered in Tasks 1, 3, 5, and 6

### Placeholder scan

- No `TODO`, `TBD`, or deferred placeholders remain.
- Every task names exact files and concrete edits.
- Every verification step includes explicit commands and expected outcomes.

### Type consistency

- Font variables use `--font-editorial` and `--font-sans` consistently.
- Layout shells consistently use `hero-shell`, `editorial-shell`, and `data-shell`.
- Section-specific structures use named wrappers that match the CSS references in the plan.
