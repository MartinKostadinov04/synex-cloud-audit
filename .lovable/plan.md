## Plan: Verify & Complete Design System Components + Generate JSX+Tailwind Export

### Summary

Two tasks:

1. Ensure every component showcased on the Design System page has a corresponding, complete source file in `src/` — and that missing components (FAQSection, NotFound) are registered in the section-codes showcase.
2. Generate a standalone `src/design-system-jsx/` folder with all components written as pure JSX+Tailwind.

---

### Task 1: Audit & Fix Missing Showcase Entries

**Current state**: The Design System page (`DesignSystem.tsx`) showcases ~20 components via `SectionShowcase`. All components exist as files in `src/`. However:

- **FAQSection** and **NotFound (404)** — both exist as components but are **not** shown in the Design System showcase page and have **no code string** in `section-codes.ts`.

**Changes needed**:

- `**src/components/design-system/section-codes.ts**` — Add two new exports:
  - `faqSectionCode` — full source of `FAQSection.tsx`
  - `notFoundCode` — full source of `NotFound.tsx`
- `**src/pages/DesignSystem.tsx**` — Add two new `SectionShowcase` entries in the Section Components area (before the Footer showcase):
  - `<SectionShowcase name="FAQ — Accordion" code={faqSectionCode}>` with sample FAQ data
  - `<SectionShowcase name="404 — Not Found" code={notFoundCode}>` rendering the NotFound page
- **Fix the breakpoints table inconsistency** — Line 1023 says "footer nav hidden" for mobile `base` breakpoint, but the footer was already fixed to be visible on mobile. Update that cell text.
- Ensure that each component from the showcase has a corresponding file in the same centralized folder tsx-components:  
**Hero** — landing/HeroSection
- **Features** — landing/FeaturesSection
- **Bento grid** — landing/BentoSection
- **Opportunities** — landing/OpportunitiesSection
- **Three-column blog** — landing/BlogSection
- **Battery Reg — Hero** — battery-reg/HeroSection
- **Battery Reg — Key Requirements** — battery-reg/KeyRequirements
- **Battery Reg — Compliance Benefits** — battery-reg/ComplianceBenefits
- **Battery Reg — Services Tabs** — battery-reg/ServicesTabsSection
- **Battery Reg — Consultation CTA** — battery-reg/ConsultationCTA
- **Logo Cloud** — landing/LogoCloudSection
- **Resources — Blog with Search/Filter/Load More** — resources/ResourceBlogSection
- **Resources — Downloads with Preview** — resources/ResourceDownloadsSection
- **Consulting — Service Navigation** — consulting/ConsultingNavSection
- **Contact — Inline Section** — contact/ContactSection
- **Contact — Popup Dialog** — contact/ContactDialog
- **Demos — Phone Mockup Cards** — landing/DemosSection
- **Practical Guide — Numbered Steps** — landing/PracticalGuideSection
- **Battery Passport — Overview with Stakeholders** — battery-reg/BatteryPassportOverview
- **Hero Grid Background (reusable)** — ui/hero-grid-background
- **Page Headers (4 variants)** — ui/page-headers
- **Footer** — Footer
- FAQ
- 404

---

### Task 2: Generate JSX+Tailwind Export Folder

Create `src/design-system-jsx/` containing standalone versions of every component. Each file:

- JSX + Tailwind 

**Files to generate** (one per component):


| File                          | Source Component                          |
| ----------------------------- | ----------------------------------------- |
| `HeroSection.jsx`             | `landing/HeroSection.tsx`                 |
| `FeaturesSection.jsx`         | `landing/FeaturesSection.tsx`             |
| `BentoSection.jsx`            | `landing/BentoSection.tsx`                |
| `OpportunitiesSection.jsx`    | `landing/OpportunitiesSection.tsx`        |
| `BlogSection.jsx`             | `landing/BlogSection.tsx`                 |
| `LogoCloudSection.jsx`        | `landing/LogoCloudSection.tsx`            |
| `DemosSection.jsx`            | `landing/DemosSection.tsx`                |
| `PracticalGuideSection.jsx`   | `landing/PracticalGuideSection.tsx`       |
| `BatteryHeroSection.jsx`      | `battery-reg/HeroSection.tsx`             |
| `KeyRequirements.jsx`         | `battery-reg/KeyRequirements.tsx`         |
| `ComplianceBenefits.jsx`      | `battery-reg/ComplianceBenefits.tsx`      |
| `ServicesTabsSection.jsx`     | `battery-reg/ServicesTabsSection.tsx`     |
| `ConsultationCTA.jsx`         | `battery-reg/ConsultationCTA.tsx`         |
| `BatteryPassportOverview.jsx` | `battery-reg/BatteryPassportOverview.tsx` |
| `FAQSection.jsx`              | `FAQSection.tsx`                          |
| `NotFound.jsx`                | `pages/NotFound.tsx`                      |
| `ContactSection.jsx`          | `contact/ContactSection.tsx`              |
| `Footer.jsx`                  | `Footer.tsx`                              |
| `Navbar.jsx`                  | `Navbar.tsx`                              |
| `README.md`                   | Index of all files                        |


---

### Verification Steps

After implementation:

1. Check that `DesignSystem.tsx` imports and renders all showcases without missing imports
2. Check that `section-codes.ts` exports match what `DesignSystem.tsx` imports
3. Check that all files in `design-system-export/` exist and have no `@/` aliases or TypeScript syntax