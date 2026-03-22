

## Battery Regulation Page Rebuild

### Page Structure (5 sections)

**1. Hero Section (redesigned)**
The current hero is a full-bleed stock photo with centered text floating over a dark overlay -- generic and uninspiring. Replace with a split-layout hero: left side has heading, subtext, and a CTA button; right side uses a clean illustration or a styled image with rounded corners and subtle shadow. White/light background, no dark overlay. This feels more professional and intentional.

**2. "The Battery Regulation" -- Key Requirements (kept, polished)**
You're fine with this. I'll rebuild it faithfully: intro paragraph, then a 2x2 grid of requirement items (icon + title + description). Clean spacing, no unnecessary animation. Static fade-in on scroll at most.

**3. "Forget about compliance complexity" (reworked)**
The current version uses 4 cards that feel disconnected and repetitive. Proposal: replace with a **2-column layout** -- left side has a bold heading + short paragraph + CTA link, right side has a compact list of 4 benefits as icon-text rows (not cards). This reduces visual weight and avoids the "wall of samey cards" problem. Alternatively, a single horizontal banner with inline benefit chips.

**4. "What can we do for you?" tabs section (rebuilt cleanly)**
Keep the tabbed interface but use shadcn Tabs component properly. Clean tab headers, smooth content transitions (simple opacity, no bouncy animations).

**5. CTA Section**
Simple centered block: heading, one-line description, button. Possibly with a subtle background color change.

### Animation Strategy
- Remove all current animations. Use only: `animate-fade-in` on scroll-triggered sections via Intersection Observer.
- No parallax, no bouncing, no staggered card entrances.

### Components Used
- Custom `HeroSection` component (split layout)
- shadcn `Card` for requirement items in section 2
- Custom `BenefitsList` for section 3 (no cards)
- shadcn `Tabs` for section 4
- Custom `CTABanner` for section 5
- Shared `Navbar` and `Footer` components

### Files to Create/Modify
- `src/pages/BatteryReg.tsx` -- main page composing all sections
- `src/components/battery-reg/HeroSection.tsx`
- `src/components/battery-reg/KeyRequirements.tsx`
- `src/components/battery-reg/ComplianceBenefits.tsx`
- `src/components/battery-reg/ServicesTabsSection.tsx`
- `src/components/battery-reg/ConsultationCTA.tsx`
- `src/components/Navbar.tsx` and `src/components/Footer.tsx`
- `src/App.tsx` -- add `/batteryreg` route
- `tailwind.config.ts` -- add fade-in keyframe if not present
- `src/index.css` -- add brand colors (SynexCloud orange `#E8611A`, dark grays)

