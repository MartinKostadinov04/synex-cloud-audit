# SynexCloud Design System — AI Agent Prompt

You are building pages for **SynexCloud**, a B2B compliance consulting + SaaS company helping manufacturers navigate EU Battery Regulation and ESPR. Every UI you produce must follow this design system exactly.

There are two repositories involved. Read Section 11 (Repository Map) to understand where everything lives before writing any code.

---

## 1. Brand Identity

- **Company**: SynexCloud (short: Synex)
- **Logo**: `public/logo.svg` in the platform repo — always render at `h-7` (28px)
- **Tone of voice**: Professional, clear, confident. Not overly technical. Modern B2B — think "trusted advisor", not "enterprise bureaucracy."
- **Audience**: Manufacturers, compliance teams, sustainability officers, supply chain managers

---

## 2. Component Layer Architecture

The `synex-web-design` repository contains **two distinct layers**. Always be clear about which one you are working with.

```
src/components/          ← TSX (TypeScript) — design system VIEWER app only
src/design-system-jsx/   ← JSX (JavaScript) — portable, self-contained exports
```

- **`src/components/`** — TypeScript components used exclusively by the visual design system preview app. They use React Router DOM, hardcoded strings, and TypeScript types. **Do not adapt these directly for the platform.**
- **`src/design-system-jsx/`** — The actual portable export layer. 24 self-contained JSX + Tailwind components. These are the starting point for any platform adaptation. Each file has no `@/` aliases, no TypeScript, and uses only Tailwind semantic tokens.

When asked to find or adapt a component, always look in `src/design-system-jsx/` first.

---

## 3. Technology Stack (Production Platform)

- **Framework**: React 18 + Inertia.js (Laravel backend, branch: `martin/eng-00`)
- **Build tool**: Vite with `laravel-vite-plugin`
- **Styling**: Tailwind CSS v3
- **UI primitives**: Radix UI + shadcn-style components (NOT shadcn CLI — custom implementations in `resources/js/Components/ui/`)
- **Icons**: Lucide React (`lucide-react`) AND Heroicons (`@heroicons/react/24/outline`)
- **Animation**: Framer Motion / `motion` (scroll/entrance animations), GSAP (complex sequences)
- **Routing**: Ziggy (`route()` helper) + `<Link>` from `@inertiajs/react` — **NEVER** react-router-dom
- **i18n**: `react-intl` — ALL visible strings must use i18n keys, never hardcoded
- **Font**: Roboto (400, 500, 700) via Google Fonts

---

## 3. Color System

All colors are defined as HSL values (without the `hsl()` wrapper) in CSS custom properties. In Tailwind, they are consumed as `hsl(var(--token))`.

**CRITICAL RULE**: Never use raw hex/rgb colors in components. Always use semantic tokens.

### Semantic Tokens

| Token | HSL | Hex | Usage |
|---|---|---|---|
| `--background` | `0 0% 100%` | `#FFFFFF` | Page background |
| `--foreground` | `215 28% 17%` | `#1F2937` | Primary text, headings |
| `--primary` | `18 89% 54%` | `#F2641F` | CTAs, brand accent, links |
| `--primary-foreground` | `0 0% 100%` | `#FFFFFF` | Text on primary backgrounds |
| `--secondary` | `220 14% 96%` | `#F3F4F6` | Light backgrounds, alternating sections |
| `--secondary-foreground` | `215 28% 17%` | `#1F2937` | Text on secondary |
| `--muted` | `220 14% 96%` | `#F3F4F6` | Disabled backgrounds, code blocks |
| `--muted-foreground` | `215 14% 34%` | `#4B5563` | Secondary text, descriptions, placeholders |
| `--accent` | `18 89% 96%` | `#FFF5F0` | Light orange tint for highlights |
| `--accent-foreground` | `18 89% 34%` | `#8B3A0F` | Text on accent backgrounds |
| `--destructive` | `0 84% 60%` | `#EF4444` | Error states, destructive actions |
| `--border` | `220 13% 91%` | `#E5E7EB` | All borders |
| `--input` | `220 13% 91%` | `#E5E7EB` | Input borders |
| `--ring` | `18 89% 54%` | `#F2641F` | Focus rings |
| `--card` | `0 0% 100%` | `#FFFFFF` | Card backgrounds |
| `--card-foreground` | `215 28% 17%` | `#1F2937` | Card text |
| `--radius` | `0.5rem` | — | Base border radius |

### Brand Color Palette

| Name | Hex | Tailwind Token | Usage |
|---|---|---|---|
| Primary Orange | `#F2641F` | `text-primary` / `bg-primary` | CTAs, highlights, brand accents |
| Primary Grey | `#474747` | `text-synex-grey` | Secondary text, icons |
| Secondary Orange | `#F8AC86` | `text-synex-orange-light` | Hover states, light accents |
| Grey-70 | `#B2B2B2` | `text-synex-grey-70` | Borders, disabled states |
| Grey-60 | `#999999` | `text-synex-grey-60` | Placeholder text, subtle UI |
| Web-Navy-1 | `#1F2937` | `text-foreground` | Titles & headlines |
| Web-Navy-2 | `#4B5563` | `text-muted-foreground` | Descriptive text |

---

## 4. Typography

Font family: **Roboto** (400 Regular, 500 Medium, 700 Bold). All sizes in rem.

| Element | Desktop | Mobile | Weight | Color | Tailwind Classes |
|---|---|---|---|---|---|
| H1 | 2.5rem | 1.875rem | 700 | foreground | `text-3xl sm:text-4xl font-bold` |
| H2 | 2rem | 1.5rem | 700 | foreground | `text-2xl sm:text-3xl font-bold` |
| H3 | 1.5rem | 1.25rem | 700 | foreground | `text-xl sm:text-2xl font-bold` |
| H4 | 1.25rem | 1.125rem | 500 | foreground | `text-lg sm:text-xl font-medium` |
| Subtitle | 1.125rem | 1rem | 400 | muted-foreground | `text-base sm:text-lg text-muted-foreground` |
| Body | 1rem | 1rem | 400 | foreground | `text-base` |
| Body Small | 0.875rem | 0.875rem | 400 | muted-foreground | `text-sm text-muted-foreground` |
| Caption | 0.75rem | 0.75rem | 400 | muted-foreground | `text-xs text-muted-foreground` |
| Section Label | 1rem | 0.875rem | 600 | primary | `text-sm sm:text-base font-semibold text-primary` |

Key rule: Orange highlights (`<span className="text-primary font-bold">`) are used sparingly on key terms in headings.

---

## 5. Spacing System

Based on a 4px grid. Tailwind: `p-1` = 4px, `p-2` = 8px, etc.

| Context | Mobile | Desktop | Tailwind |
|---|---|---|---|
| Section padding (vertical) | 48px | 80px | `py-12 sm:py-20` |
| Container padding | 16px | 32px | `px-4 sm:px-6 lg:px-8` |
| Container max width | — | 1280px | `max-w-7xl mx-auto` |
| Card padding | 16px | 24px | `p-4 sm:p-6` |
| Heading to content gap | 32px | 32px | `mb-8` |
| Grid gap | 24px | 32px | `gap-6 sm:gap-8` |
| Navbar height | 64px | 64px | `h-16` |

---

## 6. Border Radius

Base token: `--radius: 0.5rem` (8px).

| Class | Value | Usage |
|---|---|---|
| `rounded-sm` | 4px | Subtle — tags, badges |
| `rounded-md` | 6px | Inputs, small cards |
| `rounded-lg` | 8px | Standard cards |
| `rounded-xl` | 12px | Feature cards, large panels |
| `rounded-2xl` | 16px | Hero elements, image frames |
| `rounded-full` | 9999px | Avatars, icon circles, pills |

---

## 7. Animation Guidelines

All platform pages use **AnimatedContent** (GSAP-based scroll animation wrapper) to wrap each section.

```jsx
import AnimatedContent from '@/Components/WebsiteUI/AnimatedContent';

<AnimatedContent>
  <YourSectionComponent />
</AnimatedContent>
```

Available Tailwind animation utilities (defined in `tailwind.config.js`):

| Class | Effect |
|---|---|
| `animate-fade-in` | Fade in from below (0.3s) |
| `animate-fade-in-up` | Fade in upward (0.5s) |
| `animate-fade-in-left` | Fade in from left (0.5s) |
| `animate-fade-in-right` | Fade in from right (0.5s) |
| `animate-scale-in` | Scale from 95% (0.2s) |
| `animate-float` | Gentle vertical float (3s loop) |
| `animate-pulse-soft` | Soft opacity pulse (2s loop) |
| `animate-shimmer` | Shimmer background sweep |

Philosophy: Animations should be **subtle and purposeful**. Use entrance animations on scroll for sections. Never animate purely decorative elements.

---

## 8. Component Do's and Don'ts

### DO
- Use semantic color tokens (`text-foreground`, `bg-primary`, `border-border`)
- Wrap every section in `<AnimatedContent>`
- Use `<FormattedMessage>` or `formatMessage()` for ALL visible text
- Use `route('outer.pagename')` for all internal links
- Use Lucide or Heroicons — never raw SVGs unless brand-specific
- Add `hover:` and `focus:` states to all interactive elements
- Mobile-first: design at 375px, enhance for md/lg breakpoints
- Use `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8` for page-width containers

### DON'T
- Hardcode colors (`#F2641F`, `rgb()`, inline `style={{ color }}`)
- Hardcode visible text strings (always i18n)
- Use `<Link>` from react-router-dom
- Import from `@/components/` (design system repo) — use `@/Components/WebsiteUI/` (platform)
- Use shadcn CLI — components are custom implementations
- Nest containers — one `max-w-7xl` per section
- Use `px-` inside a component that is already inside a padded container

---

## 9. Image Guidelines

- All images: `object-cover` + explicit `aspect-ratio` or `h-` class
- Placeholder during loading: `bg-muted animate-pulse`
- Hero images: min `h-64 sm:h-96`, full-width behind content
- Card thumbnails: `aspect-video` (16:9) or `aspect-square`
- Never set `width` and `height` without responsive fallback
- Alt text: always descriptive, never empty on meaningful images

---

## 10. SEO / Meta Checklist

When creating a new page:
- Set `ogTitle` and `ogDescription` via `View::share()` in `routes/web.php`
- Optionally set `ogImage` via `View::share()` — must be an absolute URL (`https://…`)
- The layout automatically injects these into `<head>` for link previews
- Meta description: 120–160 characters, includes a primary keyword
- Page title format: `Page Name — SynexCloud`

---

## 11. Repository Map

There are **two repositories**. Always clarify which repo a file belongs to.

### Design System Viewer (`synex-web-design` repo)
- **Purpose**: Standalone Vite + React app — a visual preview of all components. NOT the production app.
- **Use it for**: Visual reference, design tokens, and as the source for platform adaptation
- **Design tokens**: `src/index.css` (same token names used in the platform)

#### `src/components/` — TSX viewer components (do not adapt directly)
TypeScript components used only by the viewer app. They contain hardcoded strings, React Router DOM links, and TypeScript types. **Never use these as a direct copy-paste source for the platform.**

#### `src/design-system-jsx/` — JSX portable exports (adaptation source)
24 self-contained JSX + Tailwind components. No TypeScript, no `@/` aliases, no hardcoded routing. These are the correct starting point for any platform adaptation.

| File | Category |
|---|---|
| `HeroSection.jsx` | Landing |
| `FeaturesSection.jsx` | Landing |
| `BentoSection.jsx` | Landing |
| `OpportunitiesSection.jsx` | Landing |
| `BlogSection.jsx` | Landing |
| `LogoCloudSection.jsx` | Landing |
| `DemosSection.jsx` | Landing |
| `PracticalGuideSection.jsx` | Landing |
| `BatteryHeroSection.jsx` | Battery Reg |
| `KeyRequirements.jsx` | Battery Reg |
| `ComplianceBenefits.jsx` | Battery Reg |
| `ServicesTabsSection.jsx` | Battery Reg |
| `ConsultationCTA.jsx` | Battery Reg |
| `BatteryPassportOverview.jsx` | Battery Reg |
| `ResourceBlogSection.jsx` | Resources |
| `ResourceDownloadsSection.jsx` | Resources |
| `ConsultingNavSection.jsx` | Consulting |
| `ContactSection.jsx` | Contact |
| `ContactDialog.jsx` | Contact |
| `FAQSection.jsx` | Shared |
| `Footer.jsx` | Shared |
| `HeroGridBackground.jsx` | Shared / Utility |
| `NotFound.jsx` | Shared |
| `PageHeaders.jsx` | Shared / UI (4 variants) |

### Production Platform (`SynexCloud/Platform`, branch `martin/eng-00`)
```
resources/js/Pages/Landing/{Section}/Show.jsx    ← page entry points
resources/js/Components/WebsiteUI/{Name}.jsx     ← reusable section components
resources/js/Components/ui/                      ← primitives (Button, Card, etc.)
resources/js/locales/en.json                     ← English strings
resources/js/locales/es.json                     ← Spanish strings
resources/js/locales/bg.json                     ← Bulgarian strings
routes/web.php                                   ← route + OG meta definitions
public/logo.svg                                  ← brand logo
```

---

## 12. Existing Platform Inventory

### WebsiteUI Components (33 components — import, don't recreate)
```
AnimatedContent       BatteryRegTabs        BentoGridNew
Cards                 Clients               ConsultingBigCard
ConsultingCard        ConsultingNav         DualCTA
FeatureSection        Footer                Grid2x2
Header                HeroScroll            InfoTabs
LogoCloud             MobileMenu            NewsletterSection
Partners              PictureCTA            PictureHero
Quote                 RegulatoryTimeline    ResourceBlogSection
ResourceCard          ResourceDownloadsSection  ServicesSection
SolutionHero          StepColumns           TestimonialsSection
WelcomeCTA            WelcomeHero
```

Import pattern: `import ComponentName from '@/Components/WebsiteUI/ComponentName';`

### Existing Pages & Routes (do not conflict)
```
URL             Route name           Inertia page
/               outer.welcome        Landing/Welcome/Show
/resources      outer.resources      Landing/Resources/Show
/contact        outer.contact        Landing/Contact/Show
/partnerships   outer.partnerships   Landing/Partnerships/Show
/consulting     outer.consultingnav  Landing/Consulting/Show
/consulting/*   outer.consulting     Landing/Consulting subpages
/battery-reg    outer.batteryreg     Landing/Batteryreg/Show
/dpp            outer.dpp            Landing/DPP/Show
/dbp            outer.dbp            Landing/DBP/Show
/dpp-nav        outer.dppnav         Landing/DPP/NavShow
/solution       outer.solution       Landing/Solution/Show
/newsletter     outer.newsletter     Landing/Newsletter/Show
/redirect       outer.redirect       Landing/Redirect/Show
```

---

## 13. Route Registration Pattern

When creating a **new page**, add to `routes/web.php`:

```php
Route::get('/your-url', function () {
    View::share('ogTitle', 'Page Title — SynexCloud');
    View::share('ogDescription', 'Short description for link previews (120-160 chars).');
    // Optional — must be an absolute URL (https://...):
    // View::share('ogImage', 'https://synexcloud.com/images/your-preview.jpg');
    return Inertia::render('Landing/YourSection/Show');
})->name('outer.yourpage');
```

Rules:
- `outer.` prefix is **required** on all route names
- `Inertia::render()` path is relative to `resources/js/Pages/`
- URL and route name must not conflict with any existing route in Section 12

---

## 14. i18n with react-intl

### Key Naming Convention
```
outer.{type}.{page}.{section}.{element}[.{index}][.{property}]

type: pages | components
```

Examples:
```
outer.pages.batteryreg.hero.title
outer.components.header.menu.1.title
outer.pages.welcome.grid2x2.features.1.body.1
outer.pages.yourpage.cta.button.label
```

### Usage in JSX

```jsx
import { FormattedMessage, useIntl } from 'react-intl';

// Static text:
<FormattedMessage id="outer.pages.yourpage.section.title" />

// Programmatic (arrays, props, alt text):
const { formatMessage } = useIntl();
const title = formatMessage({ id: 'outer.pages.yourpage.section.title' });
```

### Rich Text / Variables

```jsx
<FormattedMessage
  id="outer.pages.yourpage.hero.title"
  values={{
    highlight: (chunks) => <span className="text-primary font-bold">{chunks}</span>,
    year: new Date().getFullYear(),
  }}
/>
```

In locale files, wrap the highlighted word: `"<highlight>Battery</highlight> Regulation"`

### Rules
- **NEVER** hardcode visible strings — always use i18n keys
- Add every new key to **all three** locale files: `en.json`, `es.json`, `bg.json`
- Same key in all three, translated value per language

---

## 15. i18n Preservation Rules (when adapting components)

When remaking a design system component for the platform:

1. **Search first** — run `grep -r "outer.pages.{page}" resources/js/locales/` to find all keys already defined for that page
2. **Never rename existing keys** — if `outer.pages.batteryreg.hero.title` exists, use it exactly as-is
3. **Add only new keys** — for new content not yet in locale files, add using the same naming pattern
4. **Dynamic key construction** — valid and preferred for reusable components:
   ```js
   formatMessage({ id: `outer.pages.${pageName}.feature_section.feature.1.title` })
   ```
5. **Translate everything** — add new keys to en.json, es.json, AND bg.json before marking the task done

---

## 16. Page Composition Template

```jsx
// resources/js/Pages/Landing/YourSection/Show.jsx
import { useIntl } from 'react-intl';
import Header from '@/Components/WebsiteUI/Header';
import Footer from '@/Components/WebsiteUI/Footer';
import AnimatedContent from '@/Components/WebsiteUI/AnimatedContent';
// Import other WebsiteUI components as needed

export default function Show({ canLogin, canRegister }) {
  const { formatMessage } = useIntl();

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header canLogin={canLogin} canRegister={canRegister} />
      <main className="flex-1 landing-page">
        <AnimatedContent>
          {/* Compose WebsiteUI components here */}
        </AnimatedContent>
      </main>
      <Footer />
    </div>
  );
}
```

Every section in `<main>` should be wrapped in `<AnimatedContent>` for scroll-triggered entrance animations.

---

## 17. Component Adaptation Workflow

When asked to "add [Component] to the platform":

1. **Check if it already exists** — look in `resources/js/Components/WebsiteUI/` (see Section 12 inventory). If it exists, just import it.
2. **Find the reference** — locate `src/design-system-jsx/{ComponentName}.jsx` in the design system repo. This is the portable JSX export and the correct adaptation source. The `src/components/` TSX files are for the viewer app only — do not adapt them directly.
3. **Create the platform version** at `resources/js/Components/WebsiteUI/{ComponentName}.jsx`:
   - Replace all hardcoded strings with `formatMessage({ id: '...' })` or `<FormattedMessage id="..." />`
   - Replace `<Link to="/path">` (react-router-dom) with `<Link href={route('outer.pagename')}>` (`@inertiajs/react`)
   - Replace raw `<a href="/path">` with `<Link href={route('outer.pagename')}>`
   - Keep all Tailwind classes, color tokens, and layout structure identical
   - Add `<AnimatedContent>` wrapper around the component's root if it's a full section
4. **Add i18n keys** — add all new keys to `en.json`, `es.json`, `bg.json`
5. **Register the page** — if also creating a new page, add route to `routes/web.php` (see Section 13)
6. **Import into Show.jsx** — add to the relevant `Landing/{Section}/Show.jsx`

---

## 18. Design System → Platform Component Map

The JSX export column reflects what currently exists in `src/design-system-jsx/`. The platform status column is provisional — verify against the platform repo before assuming.

| Design System TSX (`src/components/`) | JSX Export (`src/design-system-jsx/`) | Platform (`WebsiteUI/`) |
|---|---|---|
| `landing/HeroSection` | `HeroSection.jsx` ✓ | `WelcomeHero` ✓ exists |
| `landing/FeaturesSection` | `FeaturesSection.jsx` ✓ | `FeatureSection` ✓ exists |
| `landing/BentoSection` | `BentoSection.jsx` ✓ | `BentoGridNew` ✓ exists |
| `landing/BlogSection` | `BlogSection.jsx` ✓ | `ResourceBlogSection` ✓ exists |
| `landing/LogoCloudSection` | `LogoCloudSection.jsx` ✓ | `LogoCloud` ✓ exists |
| `landing/OpportunitiesSection` | `OpportunitiesSection.jsx` ✓ | `Cards` ✓ exists |
| `landing/PracticalGuideSection` | `PracticalGuideSection.jsx` ✓ | `StepColumns` ✓ exists |
| `landing/DemosSection` | `DemosSection.jsx` ✓ | — (verify platform repo) |
| `battery-reg/HeroSection` | `BatteryHeroSection.jsx` ✓ | `PictureHero` ✓ exists |
| `battery-reg/KeyRequirements` | `KeyRequirements.jsx` ✓ | `Grid2x2` ✓ exists |
| `battery-reg/ComplianceBenefits` | `ComplianceBenefits.jsx` ✓ | `FeatureSection` ✓ exists |
| `battery-reg/ServicesTabsSection` | `ServicesTabsSection.jsx` ✓ | `BatteryRegTabs` ✓ exists |
| `battery-reg/ConsultationCTA` | `ConsultationCTA.jsx` ✓ | `DualCTA` ✓ exists |
| `battery-reg/BatteryPassportOverview` | `BatteryPassportOverview.jsx` ✓ | `InfoTabs` ✓ exists |
| `resources/ResourceBlogSection` | `ResourceBlogSection.jsx` ✓ | `ResourceBlogSection` ✓ exists |
| `resources/ResourceDownloadsSection` | `ResourceDownloadsSection.jsx` ✓ | `ResourceDownloadsSection` ✓ exists |
| `consulting/ConsultingNavSection` | `ConsultingNavSection.jsx` ✓ | `ConsultingNav` ✓ exists |
| `contact/ContactSection` | `ContactSection.jsx` ✓ | — (verify platform repo) |
| `contact/ContactDialog` | `ContactDialog.jsx` ✓ | — (verify platform repo) |
| `FAQSection` | `FAQSection.jsx` ✓ | — (verify platform repo) |
| `ui/page-headers` (4 variants) | `PageHeaders.jsx` ✓ | — (verify platform repo) |
| `Footer` | `Footer.jsx` ✓ | `Footer` ✓ exists |
| `ui/hero-grid-background` | `HeroGridBackground.jsx` ✓ | — utility, adapt as needed |
| *(no TSX equivalent)* | `NotFound.jsx` ✓ | — (verify platform repo) |

