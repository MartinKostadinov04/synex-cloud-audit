## Rebuild Landing Page with Tailwind UI Components

Replace the placeholder `Index.tsx` with a full landing page composed of 5 sections, each adapted from the Tailwind UI components you provided, branded for Synex's consulting + software audience (manufacturers, compliance teams, partners).

### Page Structure

```text
┌─────────────────────────────────┐
│  Navbar (existing)              │
├─────────────────────────────────┤
│  1. Hero (split layout)         │
│     Copy left + app screenshot  │
├─────────────────────────────────┤
│  2. Features (4 icons + text)   │
│     "Forget about complexity"   │
├─────────────────────────────────┤
│  3. Bento Grid (5 cards)        │
│     "More than just consulting" │
├─────────────────────────────────┤
│  4. Opportunities (3 cards)     │
│     CTA cards for partners      │
├─────────────────────────────────┤
│  5. Blog / Resources (3 cols)   │
│     Latest articles             │
├─────────────────────────────────┤
│  Footer (existing)              │
└─────────────────────────────────┘
```

### Section Details

**1. Hero** -- Tailwind UI "Split with screenshot" pattern (lines 1-107 of your file). Adapted:

- Remove dark mode image toggle (we're light-only for now)
- Replace gradient blob colors with `from-[#F8AC86] to-[#F2641F]` (Synex orange tones)
- SVG grid stroke uses `stroke-gray-200` (keeps subtle)
- Badge: "EU Compliance" pill with Synex orange styling
- Headline: "Navigate EU Regulations with Confidence" (from your current hero)
- Sub-copy: consulting + software positioning for manufacturers
- CTA buttons: "Get Started" (primary orange) + "Learn More" (outline)
- Right side: compliance dashboard card (reuse existing HeroSection visual, or a placeholder screenshot)

**2. Features** -- Tailwind UI "With icon on left" 2x2 grid (lines 109-173). Adapted:

- Section label: "Why Synex"
- Headline: "Forget about compliance complexity"
- 4 features with Lucide icons (no heroicons dependency): compliance roadmaps, data collection, supply chain due diligence, carbon footprint
- Icons in orange rounded boxes instead of indigo
- Content from existing `ComplianceBenefits.tsx` benefits array

**3. Bento Grid** -- Tailwind UI 6-column bento (lines 179-319). Adapted:

- Section label: "Platform"
- Headline: "More than just consulting"
- 5 cards: Data Management, Compliance Tracking, Supply Chain, Integrations, Reporting
- Replace screenshot images with colored placeholder divs (gradient backgrounds) since we don't have product screenshots yet
- Orange accent colors instead of indigo

**4. Opportunities** -- Tailwind UI "Three-column cards" pattern (I'll use the blog card structure adapted as CTA cards):

- 3 cards: "Become a Partner", "Join a Pilot Program", "Schedule a Demo"
- Each with icon, title, short description, and link
- Clean card layout with border + shadow

**5. Blog / Resources** -- Tailwind UI "Three-column with image" blog (lines 327-454). Adapted:

- Headline: "Latest Resources"
- 3 placeholder posts about EU Battery Regulation, ESPR, compliance guides
- Category pills, dates, author avatars (placeholder)
- Synex-branded category colors

### Files to Create/Modify


| File                                              | Action                                           |
| ------------------------------------------------- | ------------------------------------------------ |
| `src/pages/Index.tsx`                             | Full rewrite -- compose all 5 section components |
| `src/components/landing/HeroSection.tsx`          | New -- Tailwind UI hero adapted for Synex        |
| `src/components/landing/FeaturesSection.tsx`      | New -- 2x2 icon grid                             |
| `src/components/landing/BentoSection.tsx`         | New -- 5-card bento grid                         |
| `src/components/landing/OpportunitiesSection.tsx` | New -- 3 CTA cards                               |
| `src/components/landing/BlogSection.tsx`          | New -- 3-column blog preview                     |


### Technical Notes

- All components use Lucide icons (already installed) instead of Heroicons to avoid adding a dependency
- Colors map to existing CSS variables: `text-primary` for orange, `text-foreground` for navy, `text-muted-foreground` for grey
- Tailwind UI class patterns (e.g., `text-pretty`, `text-base/7`, `max-w-7xl`) are kept as-is -- they work with Tailwind v3+
- No dark mode variants for now (light-only)
- Placeholder images use Unsplash URLs from the Tailwind UI templates (can be swapped later)
- All content written for a B2B compliance consulting audience -- professional, clear, not too techy but still on the modern side