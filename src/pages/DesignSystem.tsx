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
import {
  cssTokensCode,
  heroCode,
  featuresCode,
  bentoCode,
  opportunitiesCode,
  blogCode,
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
        <Section id="typography" title="Typography" description="Roboto is the brand typeface. Weights: 400 (Regular), 500 (Medium), 700 (Bold). All sizes use rem units.">
          <div className="space-y-8">
            {/* Scale table */}
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 pr-6 font-medium text-muted-foreground">Element</th>
                    <th className="text-left py-3 pr-6 font-medium text-muted-foreground">Size</th>
                    <th className="text-left py-3 pr-6 font-medium text-muted-foreground">Weight</th>
                    <th className="text-left py-3 pr-6 font-medium text-muted-foreground">Line Height</th>
                    <th className="text-left py-3 pr-6 font-medium text-muted-foreground">Color</th>
                    <th className="text-left py-3 font-medium text-muted-foreground">Tailwind Classes</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr><td className="py-3 pr-6">H1</td><td className="py-3 pr-6 font-mono text-xs">2.5rem (40px)</td><td className="py-3 pr-6">700</td><td className="py-3 pr-6">1.2</td><td className="py-3 pr-6">foreground</td><td className="py-3 font-mono text-xs">text-4xl font-bold leading-tight</td></tr>
                  <tr><td className="py-3 pr-6">H2</td><td className="py-3 pr-6 font-mono text-xs">2rem (32px)</td><td className="py-3 pr-6">700</td><td className="py-3 pr-6">1.25</td><td className="py-3 pr-6">foreground</td><td className="py-3 font-mono text-xs">text-3xl font-bold</td></tr>
                  <tr><td className="py-3 pr-6">H3</td><td className="py-3 pr-6 font-mono text-xs">1.5rem (24px)</td><td className="py-3 pr-6">700</td><td className="py-3 pr-6">1.3</td><td className="py-3 pr-6">foreground</td><td className="py-3 font-mono text-xs">text-2xl font-bold</td></tr>
                  <tr><td className="py-3 pr-6">H4</td><td className="py-3 pr-6 font-mono text-xs">1.25rem (20px)</td><td className="py-3 pr-6">500</td><td className="py-3 pr-6">1.4</td><td className="py-3 pr-6">foreground</td><td className="py-3 font-mono text-xs">text-xl font-medium</td></tr>
                  <tr><td className="py-3 pr-6">H5</td><td className="py-3 pr-6 font-mono text-xs">1.125rem (18px)</td><td className="py-3 pr-6">500</td><td className="py-3 pr-6">1.4</td><td className="py-3 pr-6">foreground</td><td className="py-3 font-mono text-xs">text-lg font-medium</td></tr>
                  <tr><td className="py-3 pr-6">H6</td><td className="py-3 pr-6 font-mono text-xs">1rem (16px)</td><td className="py-3 pr-6">500</td><td className="py-3 pr-6">1.5</td><td className="py-3 pr-6">foreground</td><td className="py-3 font-mono text-xs">text-base font-medium</td></tr>
                  <tr><td className="py-3 pr-6">Subtitle</td><td className="py-3 pr-6 font-mono text-xs">1.125rem (18px)</td><td className="py-3 pr-6">400</td><td className="py-3 pr-6">1.6</td><td className="py-3 pr-6">muted-foreground</td><td className="py-3 font-mono text-xs">text-lg text-muted-foreground</td></tr>
                  <tr><td className="py-3 pr-6">Body</td><td className="py-3 pr-6 font-mono text-xs">1rem (16px)</td><td className="py-3 pr-6">400</td><td className="py-3 pr-6">1.6</td><td className="py-3 pr-6">foreground</td><td className="py-3 font-mono text-xs">text-base</td></tr>
                  <tr><td className="py-3 pr-6">Body Small</td><td className="py-3 pr-6 font-mono text-xs">0.875rem (14px)</td><td className="py-3 pr-6">400</td><td className="py-3 pr-6">1.5</td><td className="py-3 pr-6">muted-foreground</td><td className="py-3 font-mono text-xs">text-sm text-muted-foreground</td></tr>
                  <tr><td className="py-3 pr-6">Caption</td><td className="py-3 pr-6 font-mono text-xs">0.75rem (12px)</td><td className="py-3 pr-6">400</td><td className="py-3 pr-6">1.5</td><td className="py-3 pr-6">muted-foreground</td><td className="py-3 font-mono text-xs">text-xs text-muted-foreground</td></tr>
                </tbody>
              </table>
            </div>

            {/* Live preview */}
            <div className="space-y-6 p-8 rounded-lg border border-border bg-card">
              <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">Live Preview</h3>
              <h1 className="text-4xl font-bold leading-tight text-foreground">Heading 1 — The quick brown fox</h1>
              <h2 className="text-3xl font-bold text-foreground">Heading 2 — Jumps over the lazy dog</h2>
              <h3 className="text-2xl font-bold text-foreground">Heading 3 — Pack my box with five dozen</h3>
              <h4 className="text-xl font-medium text-foreground">Heading 4 — Liquor jugs</h4>
              <h5 className="text-lg font-medium text-foreground">Heading 5 — How vexingly quick</h5>
              <h6 className="text-base font-medium text-foreground">Heading 6 — Daft zebras jump</h6>
              <p className="text-lg text-muted-foreground">Subtitle — A supporting line of text used below a headline to provide additional context.</p>
              <p className="text-base text-foreground">Body — Regular paragraph text at 16px. Roboto Regular (400) weight. This is the default body copy for all pages. Keep line lengths between 50–75 characters for optimal readability.</p>
              <p className="text-sm text-muted-foreground">Body Small — Secondary information, metadata, timestamps, and supporting copy at 14px.</p>
              <p className="text-xs text-muted-foreground">Caption — Fine print, labels, and auxiliary information at 12px.</p>
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
                  <p className="text-muted-foreground mt-1">Desktop: <code className="bg-muted px-1.5 py-0.5 rounded text-xs font-mono">py-20</code> (80px) — Mobile: <code className="bg-muted px-1.5 py-0.5 rounded text-xs font-mono">py-12</code> (48px)</p>
                </div>
                <div className="p-4 rounded-lg border border-border">
                  <p className="font-medium text-foreground">Container Max Width</p>
                  <p className="text-muted-foreground mt-1"><code className="bg-muted px-1.5 py-0.5 rounded text-xs font-mono">max-w-[1400px]</code> with <code className="bg-muted px-1.5 py-0.5 rounded text-xs font-mono">px-8</code> padding</p>
                </div>
                <div className="p-4 rounded-lg border border-border">
                  <p className="font-medium text-foreground">Card Internal Padding</p>
                  <p className="text-muted-foreground mt-1"><code className="bg-muted px-1.5 py-0.5 rounded text-xs font-mono">p-6</code> (24px) consistent on all sides</p>
                </div>
                <div className="p-4 rounded-lg border border-border">
                  <p className="font-medium text-foreground">Heading to Content Gap</p>
                  <p className="text-muted-foreground mt-1"><code className="bg-muted px-1.5 py-0.5 rounded text-xs font-mono">mb-8</code> (32px) below section headings</p>
                </div>
                <div className="p-4 rounded-lg border border-border">
                  <p className="font-medium text-foreground">Grid Gap</p>
                  <p className="text-muted-foreground mt-1"><code className="bg-muted px-1.5 py-0.5 rounded text-xs font-mono">gap-6</code> (24px) for card grids, <code className="bg-muted px-1.5 py-0.5 rounded text-xs font-mono">gap-8</code> (32px) for major layouts</p>
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
            <div className="rounded-lg border-2 border-dashed border-primary/30 bg-accent/50 py-20 text-center">
              <p className="text-sm font-mono text-muted-foreground">py-20 (80px) — Desktop section padding</p>
            </div>
            <div className="rounded-lg border-2 border-dashed border-synex-grey-70 bg-muted/50 py-12 text-center">
              <p className="text-sm font-mono text-muted-foreground">py-12 (48px) — Mobile section padding</p>
            </div>
            <div className="rounded-lg border-2 border-dashed border-synex-grey-60 bg-muted/30 py-8 text-center">
              <p className="text-sm font-mono text-muted-foreground">py-8 (32px) — Compact/inner section padding</p>
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
          </div>
        </Section>
      </main>

      <Footer />
    </div>
  );
};

export default DesignSystem;
