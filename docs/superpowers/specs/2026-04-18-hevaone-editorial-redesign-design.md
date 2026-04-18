# Heva One Editorial Redesign

Date: 2026-04-18
Project: Heva One marketing website
Status: Proposed design approved in conversation, pending written-spec review

## Goal

Redesign the current landing page so it feels premium, professional, and intentionally built by a strong product/design team rather than generated from common SaaS patterns.

The site should:

- stay light-theme first
- remain accurate and restrained in its claims
- feel Apple editorial in tone
- use product UI as the dominant visual anchor
- use an editorial serif for selected headlines and a clean sans for product/UI text
- preserve strong performance and smoothness on lower-end devices

## Success Criteria

- The first viewport reads as a polished product launch poster, not a stack of components.
- Typography feels premium and distinctive without hurting readability.
- Sections have clearer visual roles and no longer look like repeated card blocks.
- Motion is present and noticeable, but restrained, smooth, and purposeful.
- The page remains easy to scan and understand quickly for prospective clients.
- `npm run lint` and `npm run build` pass after implementation.

## Constraints

- Keep the current content direction accurate and non-exaggerated.
- Keep the site mostly server-rendered; avoid spreading client boundaries.
- Do not add heavy animation libraries unless the result clearly justifies the cost.
- Reuse existing image assets where they still support the new art direction.
- Preserve the existing section order unless a small structural adjustment materially improves clarity.

## Visual Thesis

The redesign should feel like a premium product launch page with editorial restraint: warm light surfaces, deep ink typography, quiet indigo accents, one dominant product interface composition, and generous negative space.

The page should feel calmer and more sophisticated than a typical startup landing page. The visual energy should come from hierarchy, scale, cropping, typography, and subtle motion rather than decorative gradients or repeated cards.

## Content Plan

1. Hero
2. Industry fit
3. Unified advantage
4. Global readiness
5. Security and trust

Each section should have one job and one dominant visual idea.

## Interaction Thesis

Use three motion ideas:

1. A refined hero entrance sequence with layered staggering between text and product imagery.
2. In-view section reveals that feel physical and calm rather than flashy.
3. Subtle depth and hover motion on product/media surfaces to create presence without noise.

Motion should use transform and opacity first, respect reduced-motion settings, and avoid heavy scroll-driven JavaScript.

## Typography

### Direction

- Editorial serif for hero headline and selected section headings
- Clean sans for navigation, body copy, tables, chips, buttons, and operational content

### Intended Effect

The serif should introduce sophistication and brand character. The sans should preserve clarity and product credibility. Serif usage must stay selective so the page remains modern rather than ornamental.

### Implementation Direction

- Replace the current single-font emphasis with a two-font system in `src/app/layout.tsx`
- Apply serif only to headline classes and select high-impact headings
- Keep all UI controls and data-heavy sections in the sans family

## Color and Surface System

### Palette

- warm off-white / ivory base instead of stark white
- deep navy-ink text
- restrained indigo accent
- subtle pale blue and champagne-tinted surface variation where needed

### Surface Strategy

- fewer generic panels
- softer borders
- quieter shadows
- more separation through spacing and layout than through boxes

The design should still feel crisp and digital, but less cold and less template-like.

## Section-by-Section Design

### 1. Hero

#### Objective

Make the first viewport feel like a premium product poster anchored by the Heva One interface.

#### Changes

- Rebuild the hero into a stronger full-bleed-feeling composition.
- Keep the sticky header budgeted into the viewport height.
- Make the product UI the dominant right-side visual plane.
- Reduce the feeling of stacked mini-elements under the hero copy.
- Keep one compact supporting proof strip, integrated into the composition instead of reading like detached cards.
- Keep the aurora treatment only as quiet atmosphere in light mode.

#### Layout

- Narrower text column on the left
- Larger, cleaner product composition on the right
- More disciplined vertical rhythm between kicker, headline, body, CTA, and proof

#### Typography

- Serif headline
- Sans subcopy and controls

### 2. Industry Fit

#### Objective

Show Heva One's flexibility across industries while making the section feel premium and less like a generic tabs component.

#### Changes

- Keep the switcher interaction, since it is useful and already established.
- Restyle the selector into a cleaner premium control.
- Present the active industry state inside a larger editorial composition with stronger text hierarchy and image crop.
- Reduce the "component demo" feeling of pills, chips, and repeated container borders.

#### Layout

- Selector row on top
- One dominant content area below
- Stronger image presence and cleaner captioning

### 3. Unified Advantage

#### Objective

Make the comparison feel clearer, more premium, and easier to scan than a standard boxed table.

#### Changes

- Keep the factual old-way vs. unified comparison structure.
- Refine row spacing, typography, and icon rhythm.
- Make the section feel like product proof rather than a spreadsheet.
- Fold supporting benefits into the same visual system so they do not feel like generic card tiles beneath the table.

#### Layout

- Editorial introduction at top
- Refined comparison table with stronger row grouping
- Integrated supporting proof items below or alongside, depending on final visual balance

### 4. Global Readiness

#### Objective

Present global capability as polished product infrastructure, not as a dashboard tile cluster.

#### Changes

- Keep currencies, compliance, and timezone intelligence.
- Rework the layout into a cleaner capability band or structured feature spread.
- Use more horizontal rhythm and fewer repeated box patterns.

#### Layout

- Intro
- Currency markers as supporting signal
- Three key capabilities presented with cleaner hierarchy and less card repetition

### 5. Security and Trust

#### Objective

Use contrast to make the trust section feel premium and memorable without becoming heavy or visually noisy.

#### Changes

- Retain the darker section treatment for contrast.
- Strengthen the image-led composition so the photo and headline do more of the work.
- Reduce the number of visible nested boxes.
- Keep the trust copy direct and credible.

#### Layout

- Strong headline and trust statements on one side
- Large supporting image on the other
- Fewer surface treatments, more emphasis on composition and type

## System Changes

### Layout Utilities

The implementation should introduce a clearer distinction between:

- full-bleed hero layout
- editorial-width content layout
- dense data layout

The current system relies too heavily on one shared shell and repeated rounded panels. The redesign should introduce more visual variety while preserving maintainability.

### Component Direction

Expected files likely affected:

- `src/app/layout.tsx`
- `src/app/globals.css`
- `src/components/sections/Hero.tsx`
- `src/components/sections/Industries.tsx`
- `src/components/sections/Comparison.tsx`
- `src/components/sections/GlobalReady.tsx`
- `src/components/sections/Security.tsx`
- `src/components/layout/Navbar.tsx`
- `src/components/layout/Footer.tsx`

New helper components are acceptable if they:

- reduce repetition
- keep styling coherent
- do not introduce unnecessary client boundaries

## Images and Icons

### Images

- Product UI remains the primary visual story in the hero.
- Existing imagery may be reused where it still supports the section narrative.
- Cropping, framing, and treatment should be improved so the images feel more editorial and less like stock blocks.

### Icons

- Continue using the custom inline SVG icon set.
- Icons should help scanning, not decorate every surface.
- Fewer but better-placed icons are preferred over constant icon repetition.

## Motion and Performance

### Motion Rules

- noticeable in a quick recording
- subtle in normal browsing
- smooth on mobile
- transform/opacity-first
- reduced-motion safe

### Performance Rules

- Preserve the current lightweight reveal system unless there is a strong reason to replace it.
- Avoid large client-side state outside the industry switcher and any minimal interaction helpers.
- Avoid motion techniques that introduce scroll jank or layout thrashing.

## Risks

### Risk 1: Over-styling

The redesign could become visually expensive without improving clarity.

Mitigation:

- prioritize hierarchy and composition over decorative effects
- keep copy short and structured
- remove any flourish that competes with the product UI

### Risk 2: Serif misuse

The editorial font could make the site feel ornamental or less product-focused.

Mitigation:

- constrain serif usage to hero and selected section headlines only
- keep UI and data-heavy content in sans

### Risk 3: Section sameness remains

If the redesign only changes colors/fonts, the site could still feel generic.

Mitigation:

- vary section composition deliberately
- reduce repeated card patterns
- give each section one dominant visual idea

## Verification Plan

Implementation will be considered complete when:

1. The hero fits the initial viewport cleanly with the sticky header present.
2. Typography clearly reflects the serif/sans editorial system.
3. At least the hero and two downstream sections feel materially different in composition from the current version.
4. Motion is visible and smooth without introducing heavy runtime cost.
5. `npm run lint` passes.
6. `npm run build` passes.

## Out of Scope

- rewriting the entire content strategy
- adding complex new product interactions
- introducing a CMS or backend content system
- building dark theme parity as a primary goal for this pass
