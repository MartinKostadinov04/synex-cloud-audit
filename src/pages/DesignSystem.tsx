import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import SectionShowcase from "@/components/design-system/SectionShowcase";
import HeroSection from "@/components/landing/HeroSection";
import FeaturesSection from "@/components/landing/FeaturesSection";
import BentoSection from "@/components/landing/BentoSection";
import OpportunitiesSection from "@/components/landing/OpportunitiesSection";
import BlogSection from "@/components/landing/BlogSection";
import BatteryHeroSection from "@/components/battery-reg/HeroSection";
import KeyRequirements from "@/components/battery-reg/KeyRequirements";
import ComplianceBenefits from "@/components/battery-reg/ComplianceBenefits";
import ServicesTabsSection from "@/components/battery-reg/ServicesTabsSection";
import ConsultationCTA from "@/components/battery-reg/ConsultationCTA";
import LogoCloudSection from "@/components/landing/LogoCloudSection";
import ResourceBlogSection from "@/components/resources/ResourceBlogSection";
import ResourceDownloadsSection from "@/components/resources/ResourceDownloadsSection";
import ConsultingNavSection from "@/components/consulting/ConsultingNavSection";
import ContactSection from "@/components/contact/ContactSection";
import ContactDialog from "@/components/contact/ContactDialog";
import DemosSection from "@/components/landing/DemosSection";
import PracticalGuideSection from "@/components/landing/PracticalGuideSection";
import BatteryPassportOverview from "@/components/battery-reg/BatteryPassportOverview";
import HeroGridBackground from "@/components/ui/hero-grid-background";
import { PageHeaderWatermark, PageHeaderCloudTrail, PageHeaderHeroGrid, PageHeaderAccentBar } from "@/components/ui/page-headers";
import FAQSection from "@/components/FAQSection";
import {
  cssTokensCode,
  heroCode,
  featuresCode,
  bentoCode,
  opportunitiesCode,
  blogCode,
  batteryHeroCode,
  keyRequirementsCode,
  complianceBenefitsCode,
  servicesTabsCode,
  consultationCtaCode,
  logoCloudCode,
  resourceBlogCode,
  resourceDownloadsCode,
  consultingNavCode,
  contactSectionCode,
  contactDialogCode,
  demosSectionCode,
  practicalGuideCode,
  batteryPassportOverviewCode,
  heroGridBgCode,
  pageHeadersCode,
  footerCode,
  faqSectionCode,
  notFoundCode,
} from "@/components/design-system/section-codes";

/* ─── Helpers ─── */
const ColorSwatch = ({ name, hex, hsl, usage }: { name: string; hex: string; hsl: string; usage: string }) => (
  <div className="flex items-start gap-4">
    <div className="w-16 h-16 rounded-lg border border-border shrink-0 shadow-sm" style={{ backgroundColor: hex }} />
    <div className="space-y-0.5">
      <p className="text-sm font-medium text-foreground">{name}</p>
      <p className="text-xs font-mono text-muted-foreground">{hex}</p>
      <p className="text-xs font-mono text-muted-foreground">HSL: {hsl}</p>
      <p className="text-xs text-muted-foreground italic">{usage}</p>
    </div>
  </div>
);

const SpacingBlock = ({ size }: { size: number }) => (
  <div className="flex items-center gap-3">
    <span className="text-xs font-mono text-muted-foreground w-10 text-right">{size}px</span>
    <div className="h-6 rounded-sm bg-primary/80" style={{ width: `${size}px` }} />
  </div>
);

const RadiusBox = ({ label, className }: { label: string; className: string }) => (
  <div className="text-center space-y-2">
    <div className={`w-20 h-20 bg-primary/15 border-2 border-primary ${className}`} />
    <p className="text-xs font-mono text-muted-foreground">{label}</p>
  </div>
);

/* ─── Section wrapper ─── */
const Section = ({ id, title, description, children }: { id: string; title: string; description: string; children: React.ReactNode }) => (
  <section id={id} className="py-16">
    <div className="mb-8">
      <h2 className="text-2xl font-bold text-foreground">{title}</h2>
      <p className="text-sm text-muted-foreground mt-1 max-w-2xl">{description}</p>
    </div>
    {children}
  </section>
);

/* ─── AI Prompt Window ─── */
const AI_PROMPT = `# SynexCloud Design System — AI Agent Prompt

You are building pages for **SynexCloud**, a B2B compliance consulting + SaaS company helping manufacturers navigate EU Battery Regulation and ESPR. Every UI you produce must follow this design system exactly.

---

## 1. Brand Identity

- **Company**: SynexCloud (short: Synex)
- **Logo**: \`src/assets/logo.svg\` — always render at \`h-7\` (28px)
- **Tone of voice**: Professional, clear, confident. Not overly technical. Modern B2B — think "trusted advisor", not "enterprise bureaucracy."
- **Audience**: Manufacturers, compliance teams, sustainability officers, supply chain managers

---

## 2. Technology Stack

- **Framework**: React 18 + TypeScript + Vite
- **Styling**: Tailwind CSS v3 with \`tailwindcss-animate\`
- **UI library**: shadcn/ui (Radix primitives)
- **Icons**: Lucide React (\`lucide-react\`) — never use Heroicons
- **Font**: Roboto (400, 500, 700) via Google Fonts
- **Routing**: react-router-dom v6

---

## 3. Color System

All colors are defined as HSL values (without the \`hsl()\` wrapper) in CSS custom properties in \`index.css\`. In Tailwind, they are consumed as \`hsl(var(--token))\`.

**CRITICAL RULE**: Never use raw hex/rgb colors in components. Always use semantic tokens.

### Semantic Tokens

| Token | HSL | Hex | Usage |
|---|---|---|---|
| \`--background\` | \`0 0% 100%\` | \`#FFFFFF\` | Page background |
| \`--foreground\` | \`215 28% 17%\` | \`#1F2937\` | Primary text, headings |
| \`--primary\` | \`18 89% 54%\` | \`#F2641F\` | CTAs, brand accent, links |
| \`--primary-foreground\` | \`0 0% 100%\` | \`#FFFFFF\` | Text on primary backgrounds |
| \`--secondary\` | \`220 14% 96%\` | \`#F3F4F6\` | Light backgrounds, alternating sections |
| \`--secondary-foreground\` | \`215 28% 17%\` | \`#1F2937\` | Text on secondary |
| \`--muted\` | \`220 14% 96%\` | \`#F3F4F6\` | Disabled backgrounds, code blocks |
| \`--muted-foreground\` | \`215 14% 34%\` | \`#4B5563\` | Secondary text, descriptions, placeholders |
| \`--accent\` | \`18 89% 96%\` | \`#FFF5F0\` | Light orange tint for highlights |
| \`--accent-foreground\` | \`18 89% 34%\` | \`#8B3A0F\` | Text on accent backgrounds |
| \`--destructive\` | \`0 84% 60%\` | \`#EF4444\` | Error states, destructive actions |
| \`--border\` | \`220 13% 91%\` | \`#E5E7EB\` | All borders |
| \`--input\` | \`220 13% 91%\` | \`#E5E7EB\` | Input borders |
| \`--ring\` | \`18 89% 54%\` | \`#F2641F\` | Focus rings |
| \`--card\` | \`0 0% 100%\` | \`#FFFFFF\` | Card backgrounds |
| \`--card-foreground\` | \`215 28% 17%\` | \`#1F2937\` | Card text |
| \`--radius\` | \`0.5rem\` | — | Base border radius |

### Brand Tokens (for gradients & decorative use)

| Token | HSL | Hex |
|---|---|---|
| \`--synex-orange\` | \`18 89% 54%\` | \`#F2641F\` |
| \`--synex-orange-light\` | \`18 89% 75%\` | \`#F8AC86\` |
| \`--synex-grey\` | \`0 0% 28%\` | \`#474747\` |
| \`--synex-grey-70\` | \`0 0% 70%\` | \`#B2B2B2\` |
| \`--synex-grey-60\` | \`0 0% 60%\` | \`#999999\` |
| \`--synex-navy-1\` | \`215 28% 17%\` | \`#1F2937\` |
| \`--synex-navy-2\` | \`215 14% 34%\` | \`#4B5563\` |

### Tailwind Usage

\`\`\`tsx
// ✅ Correct
<h1 className="text-foreground">Title</h1>
<p className="text-muted-foreground">Description</p>
<button className="bg-primary text-primary-foreground">CTA</button>

// ❌ Wrong
<h1 className="text-gray-900">Title</h1>
<p className="text-[#4B5563]">Description</p>
<button className="bg-orange-500 text-white">CTA</button>
\`\`\`

---

## 4. Typography

**Font family**: \`font-sans\` → Roboto, ui-sans-serif, system-ui, sans-serif

### Type Scale (Responsive)

All headings scale down on mobile. Use the responsive pattern shown.

| Element | Desktop | Mobile (base) | Weight | Color | Tailwind Classes |
|---|---|---|---|---|---|
| H1 | 40px | 30px | 700 | \`foreground\` | \`text-3xl sm:text-4xl font-bold\` |
| H2 | 32px | 24px | 700 | \`foreground\` | \`text-2xl sm:text-3xl font-bold\` |
| H3 | 24px | 20px | 700 | \`foreground\` | \`text-xl sm:text-2xl font-bold\` |
| H4 | 20px | 18px | 500 | \`foreground\` | \`text-lg sm:text-xl font-medium\` |
| H5 | 18px | 16px | 500 | \`foreground\` | \`text-base sm:text-lg font-medium\` |
| H6 | 16px | 16px | 500 | \`foreground\` | \`text-base font-medium\` |
| Subtitle | 18px | 16px | 400 | \`muted-foreground\` | \`text-base sm:text-lg text-muted-foreground\` |
| Body | 16px | 16px | 400 | \`foreground\` | \`text-base\` |
| Body Small | 14px | 14px | 400 | \`muted-foreground\` | \`text-sm text-muted-foreground\` |
| Caption | 12px | 12px | 400 | \`muted-foreground\` | \`text-xs text-muted-foreground\` |
| Section Label | 16px | 14px | 600 | \`primary\` | \`text-sm sm:text-base font-semibold text-primary\` |
| Orange Highlight | — | — | 700 | \`primary\` | \`text-primary font-bold\` (use sparingly) |

### Typography Rules

- Use \`text-pretty\` on headlines to prevent orphans
- Use \`leading-relaxed\` on body/subtitle text for readability
- Use \`tracking-tight\` on H1 and H2 for visual density
- Keep body line lengths between 50–75 characters (\`max-w-2xl\` or \`max-w-lg\`)
- Section labels always appear above section headings: \`text-sm sm:text-base font-semibold text-primary\`

---

## 5. Spacing System

Based on a **4px grid**. Use Tailwind spacing utilities.

### Key Spacing Values

| Use Case | Mobile (base) | Desktop (sm+) | Tailwind Pattern |
|---|---|---|---|
| Section vertical padding | 48px (py-12) | 80px (py-20) | \`py-12 sm:py-20\` |
| Container horizontal padding | 16px (px-4) | 24px → 32px | \`px-4 sm:px-6 lg:px-8\` |
| Card internal padding | 16px (p-4) | 24px (p-6) | \`p-4 sm:p-6\` |
| Bento card padding | 24px (p-6) | 40px (p-10) | \`p-6 sm:p-10\` |
| Heading to content gap | 32px | 32px | \`mb-8\` |
| Grid gap (cards) | 24px | 24px | \`gap-6\` |
| Grid gap (major layouts) | 24px | 32px | \`gap-6 sm:gap-8\` |
| Navbar height | 64px | 64px | \`h-16\` |
| Section heading margin-top | 8px | 8px | \`mt-2\` (after section label) |

---

## 6. Border Radius

| Size | Value | Use Case |
|---|---|---|
| \`rounded-sm\` | 4px | Small chips, tags |
| \`rounded-md\` | 6px | Inputs, small buttons |
| \`rounded-lg\` | 8px (--radius) | Default cards, dropdowns |
| \`rounded-xl\` | 12px | Cards on mobile |
| \`rounded-2xl\` | 16px | Cards on desktop, hero visuals |
| \`rounded-full\` | 50% | Avatars, badges, pills |

### Responsive Radius Rule

Cards and prominent containers: \`rounded-xl sm:rounded-2xl\`
Form containers: \`rounded-xl sm:rounded-2xl\`

---

## 7. Breakpoints

| Breakpoint | Width | Device | Key Layout Changes |
|---|---|---|---|
| \`base\` | 0–639px | Mobile portrait | Single column, sheet drawer nav, stacked footer nav, smallest padding |
| \`sm\` (640px) | 640–767px | Mobile landscape | 2-col grids begin, headings scale up, card padding increases |
| \`md\` (768px) | 768–1023px | Tablet portrait | Footer nav 2-col, 2-col forms, blog grid 2-col |
| \`lg\` (1024px) | 1024–1279px | Tablet landscape | Navbar shows full links (no drawer), 3-col grids, bento 6-col, hero split layout, footer nav 3-col |
| \`xl\` (1280px) | 1280–1399px | Desktop | Full layout, content at max width |
| \`2xl\` (1400px) | 1400px+ | Large desktop | Container caps at 1400px |

### Container Pattern

\`\`\`tsx
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
  {/* Content */}
</div>
\`\`\`

Or use the Tailwind \`container\` class (auto-centered, 2rem padding, max 1400px).

---

## 8. Layout Patterns

### Section Structure

Every page section follows this pattern:

\`\`\`tsx
<section className="py-12 sm:py-20 bg-background">
  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    {/* Optional section label */}
    <p className="text-sm sm:text-base font-semibold text-primary">Label</p>
    {/* Heading */}
    <h2 className="mt-2 text-2xl sm:text-3xl font-bold tracking-tight text-foreground text-pretty">
      Section Title
    </h2>
    {/* Optional description */}
    <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl">
      Description text.
    </p>
    {/* Content grid */}
    <div className="mt-10 sm:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {/* Cards/items */}
    </div>
  </div>
</section>
\`\`\`

### Grid Patterns

| Pattern | Mobile | Tablet | Desktop | Tailwind |
|---|---|---|---|---|
| Card grid | 1 col | 2 col | 3 col | \`grid-cols-1 sm:grid-cols-2 lg:grid-cols-3\` |
| Blog grid | 1 col | 2 col | 3 col | \`grid-cols-1 sm:grid-cols-2 lg:grid-cols-3\` |
| Bento grid | 1 col | 1 col | 6-col | \`grid-cols-1 lg:grid-cols-6\` |
| Two-column | 1 col | 2 col | 2 col | \`grid-cols-1 sm:grid-cols-2\` |
| Hero split | Stacked | Stacked | Side-by-side | \`lg:flex lg:items-center\` |
| Footer nav | 2-col | 2-col | 3-col | \`grid grid-cols-2 lg:grid-cols-3\` |
| Tabs (with image) | Stacked | Stacked | 2-col | \`grid-cols-1 lg:grid-cols-2\` |

### Alternating Section Backgrounds

Alternate between these for visual rhythm:
- \`bg-background\` (white)
- \`bg-secondary/30\` or \`bg-secondary/40\` (light grey)
- \`bg-gradient-to-br from-muted via-muted/40 to-primary/10\` (gradient sections)

---

## 9. Component Library

### Navbar
- Sticky: \`sticky top-0 z-50\`
- Backdrop: \`bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60\`
- Mobile: Sheet drawer with accordion menus (triggers at \`< lg\`)
- Desktop: Full horizontal links with mega-menu dropdowns on hover
- Auth buttons: "Log in" (ghost) + "Sign up" (primary) at right

### Footer
- Background: \`bg-secondary/30\` with \`border-t border-border\`
- Logo + tagline in left column
- Navigation columns: 3 columns (Services, Company, Legal) — **visible on all devices**, stacks to 2-col grid on mobile, 3-col on lg+
- Newsletter: subscribe form with \`Input\` + \`Button\`
- Bottom: social icons + copyright
- Social icons: \`size-5\` with \`text-muted-foreground hover:text-foreground transition-colors\`

### Page Headers (4 variants)
All share \`PageHeaderProps\`: \`{ tag: string; title: string; description?: string }\`

1. **Watermark** (\`PageHeaderWatermark\`): Faded "EU" watermark text (hidden on mobile via \`hidden sm:block\`)
2. **CloudTrail** (\`PageHeaderCloudTrail\`): Orange gradient blob behind content
3. **HeroGrid** (\`PageHeaderHeroGrid\`): SVG grid pattern + gradient blob
4. **AccentBar** (\`PageHeaderAccentBar\`): Orange \`w-1\` left border accent

### Cards

\`\`\`tsx
// Standard card
<div className="rounded-xl sm:rounded-2xl border border-border bg-card p-4 sm:p-6 shadow-sm">

// Accent card (highlighted)
<div className="rounded-xl sm:rounded-2xl border border-primary/30 bg-accent p-4 sm:p-6">

// Feature card with icon
<div className="flex gap-4 rounded-xl border border-border bg-card p-4 sm:p-6 shadow-sm">
  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary text-primary-foreground">
    <Icon className="h-5 w-5" />
  </div>
  <div>
    <h3 className="font-semibold text-foreground">Title</h3>
    <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">Description</p>
  </div>
</div>
\`\`\`

### Buttons (shadcn/ui)

6 variants: \`default\` (primary orange), \`outline\`, \`secondary\`, \`ghost\`, \`link\`, \`destructive\`
3 sizes: \`sm\`, \`default\`, \`lg\`

\`\`\`tsx
<Button>Primary CTA</Button>
<Button variant="outline">Secondary</Button>
<Button size="lg" className="gap-2">
  Get Started <ArrowRight className="h-4 w-4" />
</Button>
\`\`\`

### Forms

\`\`\`tsx
<div className="space-y-2">
  <Label htmlFor="field">Label</Label>
  <Input id="field" placeholder="Placeholder" />
</div>
\`\`\`

- Stack fields with \`space-y-5\` or \`space-y-6\`
- Use \`sm:grid-cols-2\` for side-by-side fields on tablet+
- Submit buttons: \`mt-8 flex justify-end\`

### FAQ Section (Accordion)

\`\`\`tsx
import FAQSection from "@/components/FAQSection";

<FAQSection
  title="Frequently asked questions"
  subtitle="Optional subtitle text"
  faqs={[
    { question: "What is the EU Battery Regulation?", answer: "The EU Battery Regulation..." },
    { question: "When does it take effect?", answer: "Key deadlines start in..." },
  ]}
/>
\`\`\`

- Uses Radix Accordion under the hood
- Each item: rounded-lg border, px-6, bg-card, opens with chevron rotation
- Scroll-fade entrance animation built in

### Services Tabs Section

\`\`\`tsx
import ServicesTabsSection from "@/components/battery-reg/ServicesTabsSection";
import type { TabData } from "@/components/battery-reg/ServicesTabsSection";

// Basic (text only)
<ServicesTabsSection />

// With image on right
<ServicesTabsSection withImage data={customTabs} />
\`\`\`

- \`TabData\` interface: \`{ value, label, icon, title, description, features: string[], image?: string }\`
- When \`withImage\` is true and a tab has an \`image\`, renders 2-col layout on lg+
- Tab triggers: 2-col on mobile, 4-col on md+

### Hero Grid Background (reusable)

\`\`\`tsx
import HeroGridBackground from "@/components/ui/hero-grid-background";

<div className="relative isolate overflow-hidden">
  <HeroGridBackground id="unique-id" />
  {/* Content */}
</div>
\`\`\`

### Gradient Blobs (decorative)

\`\`\`tsx
<div
  aria-hidden="true"
  className="absolute left-[calc(50%-4rem)] top-10 -z-10 transform-gpu blur-3xl"
>
  <div
    className="aspect-[1108/632] w-[69.25rem] opacity-20"
    style={{
      background: "linear-gradient(to top right, hsl(var(--synex-orange-light)), hsl(var(--synex-orange)))",
      clipPath: "polygon(73.6% 51.7%, 91.7% 11.8%, ...)",
    }}
  />
</div>
\`\`\`

---

## 10. Animation System

### Philosophy
Add life without breaking flow. Every animation uses \`ease-out\` timing and respects professional B2B tone.

### Keyframe Animations (Tailwind classes)

| Animation | Class | Duration | Use Case |
|---|---|---|---|
| Fade in | \`animate-fade-in\` | 300ms | General reveals |
| Fade in up | \`animate-fade-in-up\` | 500ms | Section content reveals |
| Fade in down | \`animate-fade-in-down\` | 500ms | Dropdown/header reveals |
| Fade in left | \`animate-fade-in-left\` | 500ms | Layout-aware left reveals |
| Fade in right | \`animate-fade-in-right\` | 500ms | Layout-aware right reveals |
| Fade out | \`animate-fade-out\` | 300ms | Exit transitions |
| Scale in | \`animate-scale-in\` | 200ms | Modals, tooltips, popovers |
| Scale out | \`animate-scale-out\` | 200ms | Modal/tooltip exits |
| Enter (combo) | \`animate-enter\` | 300ms | Fade + scale combined entrance |
| Exit (combo) | \`animate-exit\` | 300ms | Fade + scale combined exit |
| Slide in right | \`animate-slide-in-right\` | 300ms | Sheet/drawer from right |
| Slide in left | \`animate-slide-in-left\` | 300ms | Panel from left |
| Float | \`animate-float\` | 3s loop | Decorative floating elements |
| Pulse soft | \`animate-pulse-soft\` | 2s loop | Subtle attention indicators |
| Shimmer | \`animate-shimmer\` | 2s loop | Loading skeletons (pair with \`bg-shimmer\`) |
| Accordion down | \`animate-accordion-down\` | 200ms | Accordion/collapsible open |
| Accordion up | \`animate-accordion-up\` | 200ms | Accordion/collapsible close |

### Utility Classes (CSS)

| Class | Effect | Use Case |
|---|---|---|
| \`.stagger-1\` to \`.stagger-6\` | \`animation-delay\` 50ms–300ms | Sequential card reveals |
| \`.hover-scale\` | \`scale(1.05)\` on hover | Interactive cards |
| \`.hover-lift\` | \`translateY(-4px) + shadow-md\` on hover | Elevated interactive cards |
| \`.story-link\` | Underline slides in from left on hover | Navigation and inline links |
| \`.bg-shimmer\` | Gradient sweep background | Loading skeleton states |

### Stagger Pattern

Apply \`opacity-0\` initially, then \`animate-fade-in-up\` with \`stagger-N\`:

\`\`\`tsx
{items.map((item, i) => (
  <Card key={i} className={\`opacity-0 animate-fade-in-up stagger-\${i + 1}\`}>
    {/* content */}
  </Card>
))}
\`\`\`

### Scroll-Triggered Reveals (Primary Pattern)

Use the \`useScrollFade\` hook for one-shot scroll reveals:

\`\`\`tsx
import { useScrollFade } from "@/hooks/use-scroll-fade";

const MySection = () => {
  const { ref, isVisible } = useScrollFade();

  return (
    <section ref={ref}>
      <div className={\`transition-all duration-700 \${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }\`}>
        {/* Content */}
      </div>
    </section>
  );
};
\`\`\`

- Fires once (observer disconnects after first intersection)
- Default threshold: 0.15 (15% visible)
- Always use \`transition-all duration-700\` with translate-y-4

### Animation Rules

1. **Duration limits**: UI interactions ≤ 300ms. Scroll reveals ≤ 700ms. Continuous loops ≥ 2s.
2. **Easing**: Always \`ease-out\` for entrances. \`ease-in-out\` for loops. Never \`linear\` except shimmer.
3. **Max per viewport**: ≤ 2 continuous (looping) animations visible at once. Stagger groups count as 1.
4. **Scroll reveals fire once**: Use IntersectionObserver with one-shot pattern — don't re-animate on scroll back.
5. **No parallax** — ever. No bounce. These conflict with the professional B2B tone.
6. **Hover transitions**: Use \`transition-colors\` on links, \`transition-all\` on cards.
7. **Respect prefers-reduced-motion**: Tailwind's \`motion-safe:\` prefix handles this.

---

## 11. Shadow System

| Level | Tailwind | Use Case |
|---|---|---|
| \`shadow-sm\` | — | Default cards, form containers |
| \`shadow-md\` | — | Hover-lift cards (via .hover-lift utility) |
| \`shadow-lg\` | — | Hero cards, elevated content |
| \`shadow\` | — | Dropdown panels |
| None | — | Flat cards in bento grids (use outline instead) |

Bento grid cards use \`outline outline-1 outline-black/5\` instead of shadows.

---

## 12. Do / Don't Rules

### DO ✅
- Use semantic tokens (\`text-foreground\`, \`bg-primary\`) not raw colors
- Stack grids to 1-column on mobile
- Use \`text-pretty\` on all headlines
- Use \`leading-relaxed\` on body text
- Add \`max-w-2xl\` or \`max-w-lg\` to paragraph text to control line length
- Use \`overflow-hidden\` on card containers to clip child content
- Use \`aria-hidden="true"\` on decorative SVGs and blobs
- Use \`<Link>\` from react-router-dom for internal navigation
- Alternate section backgrounds for visual rhythm
- Hide decorative watermark text on mobile (\`hidden sm:block\`)
- Use \`useScrollFade\` hook for scroll-triggered reveals
- Use stagger utilities (\`stagger-1\` to \`stagger-6\`) for sequential card reveals
- Use \`.hover-lift\` or \`.hover-scale\` on interactive cards
- Keep footer nav visible on all screen sizes (2-col on mobile, 3-col on lg+)

### DON'T ❌
- Don't use dark overlay stock photos for heroes — use split layouts with copy left
- Don't add parallax or bounce animations
- Don't use Heroicons — use Lucide React exclusively
- Don't use raw hex values in components
- Don't use \`text-white\`, \`bg-black\`, \`text-gray-*\` — use semantic tokens
- Don't use more than one \`<h1>\` per page
- Don't use \`fixed\` positioning for the navbar — use \`sticky\`
- Don't add dark mode variants (light-only for now)
- Don't hide footer nav on mobile — it must always be visible
- Don't use more than 2 continuous (looping) animations per viewport
- Don't use HeadlessUI — use Radix primitives (shadcn/ui) exclusively

---

## 13. Image Guidelines

- **Placeholder icons**: Use Lucide icons at \`h-16 w-16 text-primary/40\` in gradient placeholder areas
- **Gradient placeholders**: \`bg-gradient-to-br from-primary/10 via-accent to-secondary\`
- **Bento card visual areas**: \`h-48 sm:h-80\` with centered icon
- **Logo height**: \`h-7\` (28px) in navbar and footer
- **Avatar placeholders**: \`rounded-full bg-muted\` with initials

---

## 14. Section Inventory

These sections are available as ready-made components. Compose pages by importing and arranging them:

| Component | Import Path | Description |
|---|---|---|
| \`HeroSection\` | \`@/components/landing/HeroSection\` | Split hero with copy + compliance dashboard |
| \`FeaturesSection\` | \`@/components/landing/FeaturesSection\` | 2×2 benefit cards + 2 service CTAs |
| \`BentoSection\` | \`@/components/landing/BentoSection\` | 5-card bento grid (platform features) |
| \`OpportunitiesSection\` | \`@/components/landing/OpportunitiesSection\` | 3 CTA cards for partners |
| \`BlogSection\` | \`@/components/landing/BlogSection\` | 3-column blog preview |
| \`LogoCloudSection\` | \`@/components/landing/LogoCloudSection\` | Trusted-by logo strip |
| \`DemosSection\` | \`@/components/landing/DemosSection\` | Phone mockup demo cards |
| \`PracticalGuideSection\` | \`@/components/landing/PracticalGuideSection\` | Numbered steps guide |
| \`BatteryHeroSection\` | \`@/components/battery-reg/HeroSection\` | Battery regulation hero |
| \`KeyRequirements\` | \`@/components/battery-reg/KeyRequirements\` | Regulation requirements grid |
| \`ComplianceBenefits\` | \`@/components/battery-reg/ComplianceBenefits\` | 2-column compliance benefits |
| \`ServicesTabsSection\` | \`@/components/battery-reg/ServicesTabsSection\` | Tabbed services (supports \`withImage\` prop) |
| \`ConsultationCTA\` | \`@/components/battery-reg/ConsultationCTA\` | Consultation call-to-action |
| \`BatteryPassportOverview\` | \`@/components/battery-reg/BatteryPassportOverview\` | Battery passport with stakeholders |
| \`FAQSection\` | \`@/components/FAQSection\` | Accordion FAQ (accepts \`faqs\`, \`title\`, \`subtitle\`) |
| \`ContactSection\` | \`@/components/contact/ContactSection\` | Inline contact form |
| \`ContactDialog\` | \`@/components/contact/ContactDialog\` | Popup contact dialog |
| \`ResourceBlogSection\` | \`@/components/resources/ResourceBlogSection\` | Blog with search/filter |
| \`ResourceDownloadsSection\` | \`@/components/resources/ResourceDownloadsSection\` | Downloadable resources |
| \`ConsultingNavSection\` | \`@/components/consulting/ConsultingNavSection\` | Service navigation |
| \`Navbar\` | \`@/components/Navbar\` | Sticky navbar with mega-menu |
| \`Footer\` | \`@/components/Footer\` | Full footer with newsletter |
| \`PageHeader*\` | \`@/components/ui/page-headers\` | 4 header variants |
| \`HeroGridBackground\` | \`@/components/ui/hero-grid-background\` | Reusable SVG grid pattern |

### Hooks

| Hook | Import | Returns | Usage |
|---|---|---|---|
| \`useScrollFade\` | \`@/hooks/use-scroll-fade\` | \`{ ref, isVisible }\` | Scroll-triggered one-shot reveal |
| \`useMobile\` | \`@/hooks/use-mobile\` | \`boolean\` | Detect mobile viewport |

---

## 15. Page Composition Template

\`\`\`tsx
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { PageHeaderHeroGrid } from "@/components/ui/page-headers";

const NewPage = () => (
  <div className="min-h-screen flex flex-col bg-background">
    <Navbar />
    <PageHeaderHeroGrid
      tag="Section Tag"
      title="Page Title"
      description="Brief page description."
    />
    <main className="flex-1">
      {/* Import and compose sections here */}
    </main>
    <Footer />
  </div>
);

export default NewPage;
\`\`\`

### 404 Page

The project includes a styled \`NotFound\` page at \`src/pages/NotFound.tsx\`:
- Large ghosted "404" text in background
- Glowing primary dot accent
- Shows attempted path in \`<code>\`
- "Back to Home" (primary button) + "Go Back" (outline) actions
- Route: catch-all \`<Route path="*">\` in App.tsx

---

## 16. SEO Checklist

- \`<title>\` under 60 characters with target keyword
- \`<meta name="description">\` under 160 characters
- Single \`<h1>\` per page
- Semantic HTML: \`<section>\`, \`<main>\`, \`<nav>\`, \`<footer>\`
- \`alt\` text on all \`<img>\` tags
- Lazy loading on below-fold images
- Responsive viewport meta tag (already in index.html)`;

const AiPromptWindow = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(AI_PROMPT);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="rounded-xl border border-border overflow-hidden">
      <div className="flex items-center justify-between bg-foreground px-5 py-3">
        <p className="text-sm font-medium text-primary-foreground">AI Agent Prompt — Full Design System</p>
        <button
          onClick={handleCopy}
          className="rounded-full px-4 py-1 text-xs font-medium bg-muted-foreground/30 text-primary-foreground hover:bg-muted-foreground/50 transition-colors"
        >
          {copied ? "✓ Copied!" : "Copy Prompt"}
        </button>
      </div>
      <div className="bg-[#1a1f2e] p-6 overflow-x-auto max-h-[600px] overflow-y-auto">
        <pre className="text-sm text-gray-300 font-mono whitespace-pre-wrap">{AI_PROMPT}</pre>
      </div>
    </div>
  );
};

/* ─── Page ─── */
const DesignSystem = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />

      <main className="flex-1 container py-12">
        {/* Page header */}
        <div className="mb-4">
          <Badge variant="outline" className="text-primary border-primary mb-4">Design System v1.0</Badge>
          <h1 className="text-4xl font-bold text-foreground">SynexCloud Design System</h1>
          <p className="text-lg text-muted-foreground mt-2 max-w-3xl">
            The single source of truth for the Synex brand. All colors, typography, spacing, radii, and component patterns — demonstrated live.
          </p>
        </div>

        <Separator className="my-8" />

        {/* ─── 1. COLORS ─── */}
        <Section id="colors" title="Color Palette" description="All brand colors from the Synex guidelines. Use semantic tokens (e.g. text-primary, bg-foreground) instead of raw hex values.">
          <div className="space-y-10">
            {/* Primary */}
            <div>
              <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">Primary Colors</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <ColorSwatch name="Primary Orange" hex="#F2641F" hsl="18 89% 54%" usage="CTAs, highlights, brand accents" />
                <ColorSwatch name="Primary Grey" hex="#474747" hsl="0 0% 28%" usage="Secondary text, icons" />
                <ColorSwatch name="Primary White" hex="#FFFFFF" hsl="0 0% 100%" usage="Backgrounds, cards" />
              </div>
            </div>

            {/* Secondary */}
            <div>
              <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">Secondary Colors</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <ColorSwatch name="Secondary Orange" hex="#F8AC86" hsl="18 89% 75%" usage="Hover states, light accents" />
                <ColorSwatch name="Grey-70" hex="#B2B2B2" hsl="0 0% 70%" usage="Borders, disabled states" />
                <ColorSwatch name="Grey-60" hex="#999999" hsl="0 0% 60%" usage="Placeholder text, subtle UI" />
              </div>
            </div>

            {/* Typography colors */}
            <div>
              <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">Typography Colors</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <ColorSwatch name="Text-Grey-20" hex="#333333" hsl="0 0% 20%" usage="Titles, headlines (print)" />
                <ColorSwatch name="Text-Grey-30" hex="#4C4C4C" hsl="0 0% 30%" usage="Body text, descriptions (print)" />
                <ColorSwatch name="Web-Navy-1" hex="#1F2937" hsl="215 28% 17%" usage="Titles & headlines on web (--foreground)" />
                <ColorSwatch name="Web-Navy-2" hex="#4B5563" hsl="215 14% 34%" usage="Descriptive text on web (--muted-foreground)" />
                <ColorSwatch name="Orange Highlight" hex="#F2641F" hsl="18 89% 54%" usage="Highlighted text, main title accents" />
              </div>
            </div>
          </div>
        </Section>

        <Separator />

        {/* ─── 2. TYPOGRAPHY ─── */}
        <Section id="typography" title="Typography" description="Roboto is the brand typeface. Weights: 400 (Regular), 500 (Medium), 700 (Bold). All sizes use rem units. Responsive rules scale headings down on mobile.">
          <div className="space-y-8">
            {/* Scale table */}
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 pr-6 font-medium text-muted-foreground">Element</th>
                    <th className="text-left py-3 pr-6 font-medium text-muted-foreground">Desktop</th>
                    <th className="text-left py-3 pr-6 font-medium text-muted-foreground">Mobile</th>
                    <th className="text-left py-3 pr-6 font-medium text-muted-foreground">Weight</th>
                    <th className="text-left py-3 pr-6 font-medium text-muted-foreground">Color</th>
                    <th className="text-left py-3 font-medium text-muted-foreground">Tailwind Classes</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr><td className="py-3 pr-6">H1</td><td className="py-3 pr-6 font-mono text-xs">2.5rem (40px)</td><td className="py-3 pr-6 font-mono text-xs">1.875rem (30px)</td><td className="py-3 pr-6">700</td><td className="py-3 pr-6">foreground</td><td className="py-3 font-mono text-xs">text-3xl sm:text-4xl font-bold</td></tr>
                  <tr><td className="py-3 pr-6">H2</td><td className="py-3 pr-6 font-mono text-xs">2rem (32px)</td><td className="py-3 pr-6 font-mono text-xs">1.5rem (24px)</td><td className="py-3 pr-6">700</td><td className="py-3 pr-6">foreground</td><td className="py-3 font-mono text-xs">text-2xl sm:text-3xl font-bold</td></tr>
                  <tr><td className="py-3 pr-6">H3</td><td className="py-3 pr-6 font-mono text-xs">1.5rem (24px)</td><td className="py-3 pr-6 font-mono text-xs">1.25rem (20px)</td><td className="py-3 pr-6">700</td><td className="py-3 pr-6">foreground</td><td className="py-3 font-mono text-xs">text-xl sm:text-2xl font-bold</td></tr>
                  <tr><td className="py-3 pr-6">H4</td><td className="py-3 pr-6 font-mono text-xs">1.25rem (20px)</td><td className="py-3 pr-6 font-mono text-xs">1.125rem (18px)</td><td className="py-3 pr-6">500</td><td className="py-3 pr-6">foreground</td><td className="py-3 font-mono text-xs">text-lg sm:text-xl font-medium</td></tr>
                  <tr><td className="py-3 pr-6">H5</td><td className="py-3 pr-6 font-mono text-xs">1.125rem (18px)</td><td className="py-3 pr-6 font-mono text-xs">1rem (16px)</td><td className="py-3 pr-6">500</td><td className="py-3 pr-6">foreground</td><td className="py-3 font-mono text-xs">text-base sm:text-lg font-medium</td></tr>
                  <tr><td className="py-3 pr-6">H6</td><td className="py-3 pr-6 font-mono text-xs">1rem (16px)</td><td className="py-3 pr-6 font-mono text-xs">1rem (16px)</td><td className="py-3 pr-6">500</td><td className="py-3 pr-6">foreground</td><td className="py-3 font-mono text-xs">text-base font-medium</td></tr>
                  <tr><td className="py-3 pr-6">Subtitle</td><td className="py-3 pr-6 font-mono text-xs">1.125rem (18px)</td><td className="py-3 pr-6 font-mono text-xs">1rem (16px)</td><td className="py-3 pr-6">400</td><td className="py-3 pr-6">muted-foreground</td><td className="py-3 font-mono text-xs">text-base sm:text-lg text-muted-foreground</td></tr>
                  <tr><td className="py-3 pr-6">Body</td><td className="py-3 pr-6 font-mono text-xs">1rem (16px)</td><td className="py-3 pr-6 font-mono text-xs">1rem (16px)</td><td className="py-3 pr-6">400</td><td className="py-3 pr-6">foreground</td><td className="py-3 font-mono text-xs">text-base</td></tr>
                  <tr><td className="py-3 pr-6">Body Small</td><td className="py-3 pr-6 font-mono text-xs">0.875rem (14px)</td><td className="py-3 pr-6 font-mono text-xs">0.875rem (14px)</td><td className="py-3 pr-6">400</td><td className="py-3 pr-6">muted-foreground</td><td className="py-3 font-mono text-xs">text-sm text-muted-foreground</td></tr>
                  <tr><td className="py-3 pr-6">Caption</td><td className="py-3 pr-6 font-mono text-xs">0.75rem (12px)</td><td className="py-3 pr-6 font-mono text-xs">0.75rem (12px)</td><td className="py-3 pr-6">400</td><td className="py-3 pr-6">muted-foreground</td><td className="py-3 font-mono text-xs">text-xs text-muted-foreground</td></tr>
                  <tr><td className="py-3 pr-6">Section Label</td><td className="py-3 pr-6 font-mono text-xs">1rem (16px)</td><td className="py-3 pr-6 font-mono text-xs">0.875rem (14px)</td><td className="py-3 pr-6">600</td><td className="py-3 pr-6">primary</td><td className="py-3 font-mono text-xs">text-sm sm:text-base font-semibold text-primary</td></tr>
                </tbody>
              </table>
            </div>

            {/* Live preview */}
            <div className="space-y-6 p-4 sm:p-8 rounded-lg border border-border bg-card">
              <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">Live Preview</h3>
              <h1 className="text-3xl sm:text-4xl font-bold leading-tight text-foreground">Heading 1 — The quick brown fox</h1>
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground">Heading 2 — Jumps over the lazy dog</h2>
              <h3 className="text-xl sm:text-2xl font-bold text-foreground">Heading 3 — Pack my box with five dozen</h3>
              <h4 className="text-lg sm:text-xl font-medium text-foreground">Heading 4 — Liquor jugs</h4>
              <h5 className="text-base sm:text-lg font-medium text-foreground">Heading 5 — How vexingly quick</h5>
              <h6 className="text-base font-medium text-foreground">Heading 6 — Daft zebras jump</h6>
              <p className="text-base sm:text-lg text-muted-foreground">Subtitle — A supporting line of text used below a headline to provide additional context.</p>
              <p className="text-base text-foreground">Body — Regular paragraph text at 16px. Roboto Regular (400) weight. This is the default body copy for all pages. Keep line lengths between 50–75 characters for optimal readability.</p>
              <p className="text-sm text-muted-foreground">Body Small — Secondary information, metadata, timestamps, and supporting copy at 14px.</p>
              <p className="text-xs text-muted-foreground">Caption — Fine print, labels, and auxiliary information at 12px.</p>
              <p className="text-sm sm:text-base font-semibold text-primary">Section Label — Used above section headings for context.</p>
              <p className="text-base text-foreground">Text with <span className="text-primary font-bold">orange highlight</span> for emphasis — use sparingly on key terms.</p>
            </div>
          </div>
        </Section>

        <Separator />

        {/* ─── 3. SPACING ─── */}
        <Section id="spacing" title="Spacing System" description="Based on a 4px grid. Use Tailwind spacing utilities (p-1 = 4px, p-2 = 8px, etc.).">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">Spacing Scale</h3>
              <div className="space-y-3">
                {[4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96].map((s) => (
                  <SpacingBlock key={s} size={s} />
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">Section Spacing Guidelines</h3>
              <div className="space-y-4 text-sm">
                <div className="p-4 rounded-lg border border-border">
                  <p className="font-medium text-foreground">Section Padding (vertical)</p>
                  <p className="text-muted-foreground mt-1">Mobile: <code className="bg-muted px-1.5 py-0.5 rounded text-xs font-mono">py-12</code> (48px) → Desktop: <code className="bg-muted px-1.5 py-0.5 rounded text-xs font-mono">py-20</code> (80px)</p>
                  <p className="text-muted-foreground mt-0.5 font-mono text-xs">py-12 sm:py-20</p>
                </div>
                <div className="p-4 rounded-lg border border-border">
                  <p className="font-medium text-foreground">Container Padding</p>
                  <p className="text-muted-foreground mt-1">Mobile: <code className="bg-muted px-1.5 py-0.5 rounded text-xs font-mono">px-4</code> → Tablet: <code className="bg-muted px-1.5 py-0.5 rounded text-xs font-mono">px-6</code> → Desktop: <code className="bg-muted px-1.5 py-0.5 rounded text-xs font-mono">px-8</code></p>
                  <p className="text-muted-foreground mt-0.5 font-mono text-xs">px-4 sm:px-6 lg:px-8</p>
                </div>
                <div className="p-4 rounded-lg border border-border">
                  <p className="font-medium text-foreground">Container Max Width</p>
                  <p className="text-muted-foreground mt-1"><code className="bg-muted px-1.5 py-0.5 rounded text-xs font-mono">max-w-7xl</code> (1280px) or <code className="bg-muted px-1.5 py-0.5 rounded text-xs font-mono">max-w-[1400px]</code></p>
                </div>
                <div className="p-4 rounded-lg border border-border">
                  <p className="font-medium text-foreground">Card Internal Padding</p>
                  <p className="text-muted-foreground mt-1">Mobile: <code className="bg-muted px-1.5 py-0.5 rounded text-xs font-mono">p-4</code> → Desktop: <code className="bg-muted px-1.5 py-0.5 rounded text-xs font-mono">p-6</code></p>
                  <p className="text-muted-foreground mt-0.5 font-mono text-xs">p-4 sm:p-6</p>
                </div>
                <div className="p-4 rounded-lg border border-border">
                  <p className="font-medium text-foreground">Heading to Content Gap</p>
                  <p className="text-muted-foreground mt-1"><code className="bg-muted px-1.5 py-0.5 rounded text-xs font-mono">mb-8</code> (32px) below section headings</p>
                </div>
                <div className="p-4 rounded-lg border border-border">
                  <p className="font-medium text-foreground">Grid Gap</p>
                  <p className="text-muted-foreground mt-1">Mobile: <code className="bg-muted px-1.5 py-0.5 rounded text-xs font-mono">gap-6</code> (24px) → Desktop: <code className="bg-muted px-1.5 py-0.5 rounded text-xs font-mono">gap-8</code> (32px)</p>
                  <p className="text-muted-foreground mt-0.5 font-mono text-xs">gap-6 sm:gap-8</p>
                </div>
                <div className="p-4 rounded-lg border border-border">
                  <p className="font-medium text-foreground">Navbar Height</p>
                  <p className="text-muted-foreground mt-1"><code className="bg-muted px-1.5 py-0.5 rounded text-xs font-mono">h-16</code> (64px)</p>
                </div>
              </div>
            </div>
          </div>
        </Section>

        <Separator />

        {/* ─── 4. BORDER RADIUS ─── */}
        <Section id="radii" title="Border Radius" description="Consistent corner rounding using the --radius token (0.5rem = 8px).">
          <div className="flex flex-wrap gap-8">
            <RadiusBox label="rounded-sm (4px)" className="rounded-sm" />
            <RadiusBox label="rounded-md (6px)" className="rounded-md" />
            <RadiusBox label="rounded-lg (8px)" className="rounded-lg" />
            <RadiusBox label="rounded-xl (12px)" className="rounded-xl" />
            <RadiusBox label="rounded-2xl (16px)" className="rounded-2xl" />
            <RadiusBox label="rounded-full" className="rounded-full" />
          </div>
        </Section>

        <Separator />

        {/* ─── 5. BUTTONS ─── */}
        <Section id="buttons" title="Buttons" description="All button variants at three sizes. Primary uses Synex Orange.">
          <div className="space-y-8">
            {(["default", "sm", "lg"] as const).map((size) => (
              <div key={size}>
                <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">
                  Size: {size}
                </h3>
                <div className="flex flex-wrap items-center gap-4">
                  <Button size={size} variant="default">Primary</Button>
                  <Button size={size} variant="outline">Outline</Button>
                  <Button size={size} variant="secondary">Secondary</Button>
                  <Button size={size} variant="ghost">Ghost</Button>
                  <Button size={size} variant="link">Link</Button>
                  <Button size={size} variant="destructive">Destructive</Button>
                  <Button size={size} disabled>Disabled</Button>
                </div>
              </div>
            ))}
          </div>
        </Section>

        <Separator />

        {/* ─── 6. CARDS ─── */}
        <Section id="cards" title="Cards" description="Card component with header, description, content, and footer.">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Default Card</CardTitle>
                <CardDescription>Standard card with all regions visible.</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Card body content goes here. Use for any grouped information.</p>
              </CardContent>
              <CardFooter>
                <Button size="sm">Action</Button>
              </CardFooter>
            </Card>

            <Card className="border-primary/30 bg-accent">
              <CardHeader>
                <CardTitle>Accent Card</CardTitle>
                <CardDescription>Uses accent background with primary border.</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-accent-foreground">Highlighted content for important callouts or features.</p>
              </CardContent>
              <CardFooter>
                <Button size="sm" variant="outline">Learn More</Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Minimal Card</CardTitle>
                <CardDescription>Just header and content, no footer.</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Sometimes less is more. Omit the footer when no action is needed.</p>
              </CardContent>
            </Card>
          </div>
        </Section>

        <Separator />

        {/* ─── 7. FORM ELEMENTS ─── */}
        <Section id="forms" title="Form Elements" description="Input, textarea, checkbox, and label styling.">
          <div className="max-w-md space-y-6">
            <div className="space-y-2">
              <Label htmlFor="demo-name">Full Name</Label>
              <Input id="demo-name" placeholder="Enter your name" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="demo-email">Email Address</Label>
              <Input id="demo-email" type="email" placeholder="you@example.com" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="demo-message">Message</Label>
              <Textarea id="demo-message" placeholder="Write your message here..." rows={4} />
            </div>
            <div className="flex items-center gap-2">
              <Checkbox id="demo-check" />
              <Label htmlFor="demo-check" className="text-sm font-normal">I agree to the terms and conditions</Label>
            </div>
            <div className="flex items-center gap-2">
              <Checkbox id="demo-check-disabled" disabled />
              <Label htmlFor="demo-check-disabled" className="text-sm font-normal text-muted-foreground">Disabled checkbox</Label>
            </div>
            <div className="flex gap-3">
              <Button>Submit</Button>
              <Button variant="outline">Cancel</Button>
            </div>
          </div>
        </Section>

        <Separator />

        {/* ─── 8. SECTION SPACING DEMO ─── */}
        <Section id="section-spacing" title="Section Spacing Demo" description="Visual demonstration of standard section padding and container behavior.">
          <div className="space-y-4">
            <div className="rounded-lg border-2 border-dashed border-primary/30 bg-accent/50 py-12 sm:py-20 text-center">
              <p className="text-sm font-mono text-muted-foreground">py-12 sm:py-20 — Responsive section padding</p>
            </div>
            <div className="rounded-lg border-2 border-dashed border-synex-grey-70 bg-muted/50 py-8 sm:py-12 text-center">
              <p className="text-sm font-mono text-muted-foreground">py-8 sm:py-12 — Compact section padding</p>
            </div>
          </div>
        </Section>

        <Separator />

        {/* ─── 9. BREAKPOINTS ─── */}
        <Section id="breakpoints" title="Breakpoints & Responsive Adaptations" description="Tailwind breakpoints used throughout the design system. Every component adapts at these thresholds.">
          <div className="space-y-8">
            {/* Breakpoint reference */}
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 pr-6 font-medium text-muted-foreground">Breakpoint</th>
                    <th className="text-left py-3 pr-6 font-medium text-muted-foreground">Width</th>
                    <th className="text-left py-3 pr-6 font-medium text-muted-foreground">Device</th>
                    <th className="text-left py-3 font-medium text-muted-foreground">Key Layout Changes</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr><td className="py-3 pr-6 font-mono text-xs">base</td><td className="py-3 pr-6 font-mono text-xs">0–639px</td><td className="py-3 pr-6">Mobile portrait</td><td className="py-3 text-xs text-muted-foreground">Single column, sheet drawer nav, footer nav hidden, reduced padding</td></tr>
                  <tr><td className="py-3 pr-6 font-mono text-xs">sm (640px)</td><td className="py-3 pr-6 font-mono text-xs">640–767px</td><td className="py-3 pr-6">Mobile landscape</td><td className="py-3 text-xs text-muted-foreground">2-col grids begin, heading sizes scale up, card padding increases</td></tr>
                  <tr><td className="py-3 pr-6 font-mono text-xs">md (768px)</td><td className="py-3 pr-6 font-mono text-xs">768–1023px</td><td className="py-3 pr-6">Tablet portrait</td><td className="py-3 text-xs text-muted-foreground">Footer nav columns visible, 2-col card grids, form side-by-side fields</td></tr>
                  <tr><td className="py-3 pr-6 font-mono text-xs">lg (1024px)</td><td className="py-3 pr-6 font-mono text-xs">1024–1279px</td><td className="py-3 pr-6">Tablet landscape</td><td className="py-3 text-xs text-muted-foreground">Navbar full links (no sheet), 3-col grids, bento 6-col grid, hero split layout</td></tr>
                  <tr><td className="py-3 pr-6 font-mono text-xs">xl (1280px)</td><td className="py-3 pr-6 font-mono text-xs">1280–1399px</td><td className="py-3 pr-6">Desktop</td><td className="py-3 text-xs text-muted-foreground">Full layout, max content width</td></tr>
                  <tr><td className="py-3 pr-6 font-mono text-xs">2xl (1400px)</td><td className="py-3 pr-6 font-mono text-xs">1400px+</td><td className="py-3 pr-6">Large desktop</td><td className="py-3 text-xs text-muted-foreground">Container max-width caps at 1400px</td></tr>
                </tbody>
              </table>
            </div>

            {/* Visual bars */}
            <div className="space-y-3">
              <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider">Visual Scale</h3>
              {[
                { label: "sm", width: "45%", px: "640px" },
                { label: "md", width: "55%", px: "768px" },
                { label: "lg", width: "73%", px: "1024px" },
                { label: "xl", width: "91%", px: "1280px" },
                { label: "2xl", width: "100%", px: "1400px" },
              ].map((bp) => (
                <div key={bp.label} className="flex items-center gap-3">
                  <span className="text-xs font-mono text-muted-foreground w-8 text-right">{bp.label}</span>
                  <div className="h-6 rounded-sm bg-primary/20 relative" style={{ width: bp.width }}>
                    <span className="absolute right-2 top-1/2 -translate-y-1/2 text-xs font-mono text-primary">{bp.px}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Responsive adaptations table */}
            <div>
              <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">Responsive Adaptation Rules</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left py-3 pr-6 font-medium text-muted-foreground">Token</th>
                      <th className="text-left py-3 pr-6 font-medium text-muted-foreground">Mobile (base)</th>
                      <th className="text-left py-3 pr-6 font-medium text-muted-foreground">Desktop (sm+)</th>
                      <th className="text-left py-3 font-medium text-muted-foreground">Tailwind Pattern</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    <tr><td className="py-3 pr-6">Section padding</td><td className="py-3 pr-6 font-mono text-xs">py-12 (48px)</td><td className="py-3 pr-6 font-mono text-xs">py-20 (80px)</td><td className="py-3 font-mono text-xs">py-12 sm:py-20</td></tr>
                    <tr><td className="py-3 pr-6">Container padding</td><td className="py-3 pr-6 font-mono text-xs">px-4 (16px)</td><td className="py-3 pr-6 font-mono text-xs">px-6 → px-8</td><td className="py-3 font-mono text-xs">px-4 sm:px-6 lg:px-8</td></tr>
                    <tr><td className="py-3 pr-6">Card padding</td><td className="py-3 pr-6 font-mono text-xs">p-4 (16px)</td><td className="py-3 pr-6 font-mono text-xs">p-6 (24px)</td><td className="py-3 font-mono text-xs">p-4 sm:p-6</td></tr>
                    <tr><td className="py-3 pr-6">Card radius</td><td className="py-3 pr-6 font-mono text-xs">rounded-xl</td><td className="py-3 pr-6 font-mono text-xs">rounded-2xl</td><td className="py-3 font-mono text-xs">rounded-xl sm:rounded-2xl</td></tr>
                    <tr><td className="py-3 pr-6">Grid gap</td><td className="py-3 pr-6 font-mono text-xs">gap-6 (24px)</td><td className="py-3 pr-6 font-mono text-xs">gap-8 (32px)</td><td className="py-3 font-mono text-xs">gap-6 sm:gap-8</td></tr>
                    <tr><td className="py-3 pr-6">Navbar</td><td className="py-3 pr-6 font-mono text-xs">Sheet drawer</td><td className="py-3 pr-6 font-mono text-xs">Full links</td><td className="py-3 font-mono text-xs">hidden lg:flex / lg:hidden</td></tr>
                    <tr><td className="py-3 pr-6">Footer nav</td><td className="py-3 pr-6 font-mono text-xs">Hidden</td><td className="py-3 pr-6 font-mono text-xs">3-col grid</td><td className="py-3 font-mono text-xs">hidden md:grid</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </Section>

        <Separator />

        {/* ─── 9. CSS DESIGN TOKENS ─── */}
        <Section id="tokens" title="CSS Design Tokens" description="The full index.css token set. Any project using this design system must include these CSS variables. All values are HSL (without the hsl() wrapper) for Tailwind compatibility.">
          <SectionShowcase name="index.css" code={cssTokensCode}>
            <div className="p-8 bg-card text-sm text-muted-foreground">
              <p>Toggle to <strong>Code</strong> to view and copy the full <code className="bg-muted px-1.5 py-0.5 rounded text-xs font-mono">index.css</code> with all design tokens.</p>
            </div>
          </SectionShowcase>
        </Section>

        <Separator />

        {/* ─── 10. SECTION COMPONENTS ─── */}
        <Section id="sections" title="Section Components" description="Ready-to-use landing page sections. Each follows the design system tokens and can be composed into any page. Toggle to Code to get the full copy-pasteable source.">
          <div className="space-y-12">
            <SectionShowcase name="Hero" code={heroCode}>
              <HeroSection />
            </SectionShowcase>

            <SectionShowcase name="Features" code={featuresCode}>
              <FeaturesSection />
            </SectionShowcase>

            <SectionShowcase name="Bento grid" code={bentoCode}>
              <BentoSection />
            </SectionShowcase>

            <SectionShowcase name="Opportunities" code={opportunitiesCode}>
              <OpportunitiesSection />
            </SectionShowcase>

            <SectionShowcase name="Three-column blog" code={blogCode}>
              <BlogSection />
            </SectionShowcase>

            <SectionShowcase name="Battery Reg — Hero" code={batteryHeroCode}>
              <BatteryHeroSection />
            </SectionShowcase>

            <SectionShowcase name="Battery Reg — Key Requirements" code={keyRequirementsCode}>
              <KeyRequirements />
            </SectionShowcase>

            <SectionShowcase name="Battery Reg — Compliance Benefits" code={complianceBenefitsCode}>
              <ComplianceBenefits />
            </SectionShowcase>

            <SectionShowcase name="Battery Reg — Services Tabs" code={servicesTabsCode}>
              <ServicesTabsSection />
            </SectionShowcase>

            <SectionShowcase name="Battery Reg — Consultation CTA" code={consultationCtaCode}>
              <ConsultationCTA />
            </SectionShowcase>
            <SectionShowcase name="Logo Cloud" code={logoCloudCode}>
              <LogoCloudSection />
            </SectionShowcase>
            <SectionShowcase name="Resources — Blog with Search/Filter/Load More" code={resourceBlogCode}>
              <ResourceBlogSection />
            </SectionShowcase>
            <SectionShowcase name="Resources — Downloads with Preview" code={resourceDownloadsCode}>
              <ResourceDownloadsSection />
            </SectionShowcase>
            <SectionShowcase name="Consulting — Service Navigation" code={consultingNavCode}>
              <ConsultingNavSection />
            </SectionShowcase>
            <SectionShowcase name="Contact — Inline Section" code={contactSectionCode}>
              <ContactSection />
            </SectionShowcase>
            <SectionShowcase name="Contact — Popup Dialog" code={contactDialogCode}>
              <div className="flex items-center justify-center py-16 bg-background">
                <ContactDialog />
              </div>
            </SectionShowcase>
            <SectionShowcase name="Demos — Phone Mockup Cards" code={demosSectionCode}>
              <DemosSection />
            </SectionShowcase>
            <SectionShowcase name="Practical Guide — Numbered Steps" code={practicalGuideCode}>
              <PracticalGuideSection />
            </SectionShowcase>
            <SectionShowcase name="Battery Passport — Overview with Stakeholders" code={batteryPassportOverviewCode}>
              <BatteryPassportOverview />
            </SectionShowcase>
            <SectionShowcase name="Hero Grid Background (reusable)" code={heroGridBgCode}>
              <div className="relative isolate overflow-hidden bg-background py-24">
                <HeroGridBackground id="ds-grid-demo" />
              </div>
            </SectionShowcase>
            <SectionShowcase name="Page Headers (4 variants)" code={pageHeadersCode}>
              <div className="space-y-1">
                <PageHeaderWatermark tag="Battery Regulation" title="Compliance Services" description="Navigate the EU Battery Regulation with expert guidance." />
                <PageHeaderCloudTrail tag="ESPR" title="Digital Product Passports" description="Prepare your products for the upcoming DPP requirements." />
                <PageHeaderHeroGrid tag="Resources" title="Guides & Articles" description="Expert insights on EU regulatory compliance." />
                <PageHeaderAccentBar tag="About" title="Our Team" description="Meet the compliance experts behind SynexCloud." />
              </div>
            </SectionShowcase>
            <SectionShowcase name="Footer" code={footerCode}>
              <Footer />
            </SectionShowcase>
          </div>
        </Section>

        <Separator />

        {/* ─── AI DESIGN SYSTEM PROMPT ─── */}
        <Section id="ai-prompt" title="AI Design System Prompt" description="Copy this prompt into any AI agent's context window to build pages that follow this design system exactly.">
          <AiPromptWindow />
        </Section>
      </main>

      <Footer />
    </div>
  );
};

export default DesignSystem;
