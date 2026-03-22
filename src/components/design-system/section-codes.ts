// Full source code strings for each section component.
// Used by the design system page's SectionShowcase "Code" tabs.

export const cssTokensCode = `@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap');

@tailwind base;
@tailwind components;
@tailwind utilities;

/* SynexCloud Design System
   All colors are HSL. Brand source: Synex PDF guidelines.
   Primary Orange: #F2641F → 18 89% 54%
   Primary Grey: #474747 → 0 0% 28%
   Secondary Orange: #F8AC86 → 18 89% 75%
   Secondary Grey-70: #B2B2B2 → 0 0% 70%
   Secondary Grey-60: #999999 → 0 0% 60%
   Text-Grey-20: #333333 → 0 0% 20%
   Text-Grey-30: #4C4C4C → 0 0% 30%
   Web-Navy-1: #1F2937 → 215 28% 17%
   Web-Navy-2: #4B5563 → 215 14% 34%
*/

@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 215 28% 17%;

    --card: 0 0% 100%;
    --card-foreground: 215 28% 17%;

    --popover: 0 0% 100%;
    --popover-foreground: 215 28% 17%;

    --primary: 18 89% 54%;
    --primary-foreground: 0 0% 100%;

    --secondary: 220 14% 96%;
    --secondary-foreground: 215 28% 17%;

    --muted: 220 14% 96%;
    --muted-foreground: 215 14% 34%;

    --accent: 18 89% 96%;
    --accent-foreground: 18 89% 34%;

    --destructive: 0 84% 60%;
    --destructive-foreground: 0 0% 100%;

    --border: 220 13% 91%;
    --input: 220 13% 91%;
    --ring: 18 89% 54%;

    --radius: 0.5rem;

    /* Brand tokens */
    --synex-orange: 18 89% 54%;
    --synex-grey: 0 0% 28%;
    --synex-orange-light: 18 89% 75%;
    --synex-grey-70: 0 0% 70%;
    --synex-grey-60: 0 0% 60%;
    --synex-text-grey-20: 0 0% 20%;
    --synex-text-grey-30: 0 0% 30%;
    --synex-navy-1: 215 28% 17%;
    --synex-navy-2: 215 14% 34%;
  }
}

@layer base {
  * {
    @apply border-border;
  }
  body {
    @apply bg-background text-foreground font-sans;
  }
}`;

export const heroCode = `import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield } from "lucide-react";

const HeroSection = () => (
  <div className="relative isolate overflow-hidden bg-background">
    {/* Grid background */}
    <svg
      aria-hidden="true"
      className="absolute inset-0 -z-10 size-full stroke-border [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
    >
      <defs>
        <pattern id="hero-grid" x="50%" y={-1} width={200} height={200} patternUnits="userSpaceOnUse">
          <path d="M.5 200V.5H200" fill="none" />
        </pattern>
      </defs>
      <svg x="50%" y={-1} className="overflow-visible fill-secondary/40">
        <path d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z" />
      </svg>
      <rect fill="url(#hero-grid)" width="100%" height="100%" strokeWidth={0} />
    </svg>

    {/* Gradient blob */}
    <div
      aria-hidden="true"
      className="absolute left-[calc(50%-4rem)] top-10 -z-10 transform-gpu blur-3xl sm:left-[calc(50%-18rem)] lg:left-48 lg:top-[calc(50%-30rem)] xl:left-[calc(50%-24rem)]"
    >
      <div
        className="aspect-[1108/632] w-[69.25rem] opacity-20"
        style={{
          background: "linear-gradient(to top right, hsl(var(--synex-orange-light)), hsl(var(--synex-orange)))",
          clipPath:
            "polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)",
        }}
      />
    </div>

    <div className="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:flex lg:items-center lg:gap-x-10 lg:px-8 lg:py-40">
      {/* Left: Copy */}
      <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl lg:shrink-0 lg:pt-8">
        <div className="inline-flex items-center gap-2 rounded-full bg-accent px-4 py-1.5 text-sm font-medium text-accent-foreground">
          <Shield className="h-4 w-4" />
          EU Compliance
        </div>

        <h1 className="mt-10 text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl lg:text-[3.25rem] leading-[1.15]">
          Navigate EU Regulations with Confidence
        </h1>

        <p className="mt-8 text-lg text-muted-foreground leading-relaxed max-w-lg text-pretty">
          The EU Battery Regulation and ESPR introduce sweeping requirements for manufacturers.
          We combine expert consulting with purpose-built software to guide you from complexity
          to compliance — step by step.
        </p>

        <div className="mt-10 flex items-center gap-x-4">
          <Button size="lg" className="gap-2">
            Get Started <ArrowRight className="h-4 w-4" />
          </Button>
          <Button size="lg" variant="outline">
            Learn More
          </Button>
        </div>
      </div>

      {/* Right: Compliance dashboard visual */}
      <div className="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mr-0 lg:mt-0 lg:max-w-none lg:flex-none xl:ml-32">
        <div className="max-w-3xl flex-none sm:max-w-md lg:max-w-sm">
          <div className="relative">
            <div className="absolute -inset-4 rounded-2xl bg-primary/5 blur-2xl" />
            <div className="relative rounded-2xl border border-border bg-card p-8 shadow-lg space-y-5">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Shield className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground text-sm">Compliance Status</p>
                  <p className="text-xs text-muted-foreground">EU Battery Regulation 2023/1542</p>
                </div>
              </div>
              <div className="space-y-3">
                {[
                  { label: "Battery Passport", progress: 85 },
                  { label: "Due Diligence", progress: 72 },
                  { label: "Carbon Footprint", progress: 60 },
                  { label: "Recycled Content", progress: 45 },
                ].map((item) => (
                  <div key={item.label} className="space-y-1.5">
                    <div className="flex justify-between text-xs">
                      <span className="text-muted-foreground">{item.label}</span>
                      <span className="font-medium text-foreground">{item.progress}%</span>
                    </div>
                    <div className="h-1.5 rounded-full bg-secondary overflow-hidden">
                      <div
                        className="h-full rounded-full bg-primary transition-all duration-700"
                        style={{ width: \`\${item.progress}%\` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default HeroSection;`;

export const featuresCode = `import { ShieldAlert, Timer, CircleDollarSign, Route, ArrowRight } from "lucide-react";

const benefits = [
  {
    icon: ShieldAlert,
    title: "Reduce Compliance Risks",
    description:
      "Stay ahead of regulations and avoid penalties with expert support that ensures compliance with evolving legal and industry requirements.",
  },
  {
    icon: Timer,
    title: "Accelerate Time to Market",
    description:
      "Streamline EU market entry or continuity by navigating with expert support — reducing delays and enabling confident, compliant operations.",
  },
  {
    icon: CircleDollarSign,
    title: "Avoid Hidden Costs",
    description:
      "Prevent costly reworks and missed opportunities by addressing compliance early, turning complex requirements into operational clarity and efficiency.",
  },
  {
    icon: Route,
    title: "Tailored Compliance Roadmaps",
    description:
      "Get customized, step-by-step regulatory plans aligned with your business needs and goals — focused, actionable, and growth-oriented.",
  },
];

const services = [
  {
    title: "Battery Regulation Consulting",
    description:
      "Navigate complex EU battery rules with expert guidance on compliance strategy, data requirements, labeling, and digital battery passport implementation.",
    href: "/batteryreg",
  },
  {
    title: "ESPR Consulting",
    description:
      "Get tailored support to align your products with ESPR, covering design requirements, DPP readiness, data strategy, and supply chain coordination.",
    href: "/espr",
  },
];

const FeaturesSection = () => (
  <section className="relative py-24 sm:py-32 overflow-hidden">
    {/* Gradient background */}
    <div className="absolute inset-0 -z-10 bg-gradient-to-br from-muted via-muted/40 to-primary/10" />
    {/* Subtle dot pattern */}
    <div
      className="absolute inset-0 -z-10 opacity-[0.4]"
      style={{
        backgroundImage: "radial-gradient(hsl(var(--foreground) / 0.08) 1px, transparent 1px)",
        backgroundSize: "24px 24px",
      }}
    />
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      {/* Header */}
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-pretty">
          <span className="text-primary">Forget</span> about compliance complexity
        </h2>
        <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
          Regulation compliance is a project that needs its research, planning and implementation.
          Avoid risk and streamline these processes so you can worry less and sell more.
        </p>
      </div>

      {/* 4 Benefit Cards */}
      <div className="mx-auto mt-16 max-w-5xl grid grid-cols-1 gap-6 sm:grid-cols-2">
        {benefits.map((benefit) => (
          <div
            key={benefit.title}
            className="flex gap-4 rounded-xl border border-border bg-card p-6 shadow-sm"
          >
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary text-primary-foreground">
              <benefit.icon className="h-5 w-5" />
            </div>
            <div>
              <h3 className="font-semibold text-foreground">{benefit.title}</h3>
              <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* 2 Service CTA Cards */}
      <div className="mx-auto mt-10 max-w-5xl grid grid-cols-1 gap-6 sm:grid-cols-2">
        {services.map((service) => (
          <div
            key={service.title}
            className="rounded-xl border border-border bg-card p-6 shadow-sm border-l-4 border-l-primary flex flex-col justify-between"
          >
            <div>
              <h3 className="text-xl font-bold text-foreground">{service.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
            <a
              href={service.href}
              className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline self-end"
            >
              Learn More <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default FeaturesSection;`;

export const bentoCode = `import { Database, BarChart3, Link2, Plug, FileText } from "lucide-react";

const BentoSection = () => (
  <section className="bg-background py-24 sm:py-32">
    <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
      <p className="text-base/7 font-semibold text-primary">Platform</p>
      <p className="mt-2 max-w-lg text-pretty text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
        More than just consulting
      </p>

      <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6 lg:grid-rows-2">
        {/* Card 1 — Data Management (top-left, span 3) */}
        <div className="relative lg:col-span-3">
          <div className="absolute inset-0 rounded-lg bg-card max-lg:rounded-t-[2rem] lg:rounded-tl-[2rem]" />
          <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)] lg:rounded-tl-[calc(2rem+1px)]">
            <div className="h-80 bg-gradient-to-br from-primary/10 via-accent to-secondary flex items-center justify-center">
              <Database className="h-16 w-16 text-primary/40" />
            </div>
            <div className="p-10 pt-4">
              <h3 className="text-sm/4 font-semibold text-primary">Data Management</h3>
              <p className="mt-2 text-lg font-medium tracking-tight text-foreground">
                All your compliance data, one place
              </p>
              <p className="mt-2 max-w-lg text-sm/6 text-muted-foreground">
                Centralise material compositions, supplier declarations, and regulatory evidence —
                structured, searchable, and always audit-ready.
              </p>
            </div>
          </div>
          <div className="pointer-events-none absolute inset-0 rounded-lg shadow outline outline-1 outline-black/5 max-lg:rounded-t-[2rem] lg:rounded-tl-[2rem]" />
        </div>

        {/* Card 2 — Compliance Tracking (top-right, span 3) */}
        <div className="relative lg:col-span-3">
          <div className="absolute inset-0 rounded-lg bg-card lg:rounded-tr-[2rem]" />
          <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] lg:rounded-tr-[calc(2rem+1px)]">
            <div className="h-80 bg-gradient-to-bl from-primary/10 via-accent to-secondary flex items-center justify-center">
              <BarChart3 className="h-16 w-16 text-primary/40" />
            </div>
            <div className="p-10 pt-4">
              <h3 className="text-sm/4 font-semibold text-primary">Compliance Tracking</h3>
              <p className="mt-2 text-lg font-medium tracking-tight text-foreground">
                Real-time regulation readiness
              </p>
              <p className="mt-2 max-w-lg text-sm/6 text-muted-foreground">
                Visual dashboards show exactly where you stand across every requirement —
                Battery Passport, carbon footprint, due diligence, and more.
              </p>
            </div>
          </div>
          <div className="pointer-events-none absolute inset-0 rounded-lg shadow outline outline-1 outline-black/5 lg:rounded-tr-[2rem]" />
        </div>

        {/* Card 3 — Supply Chain (bottom-left, span 2) */}
        <div className="relative lg:col-span-2">
          <div className="absolute inset-0 rounded-lg bg-card lg:rounded-bl-[2rem]" />
          <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] lg:rounded-bl-[calc(2rem+1px)]">
            <div className="h-80 bg-gradient-to-tr from-secondary via-accent to-primary/10 flex items-center justify-center">
              <Link2 className="h-16 w-16 text-primary/40" />
            </div>
            <div className="p-10 pt-4">
              <h3 className="text-sm/4 font-semibold text-primary">Supply Chain</h3>
              <p className="mt-2 text-lg font-medium tracking-tight text-foreground">
                End-to-end visibility
              </p>
              <p className="mt-2 max-w-lg text-sm/6 text-muted-foreground">
                Map your supply chain, manage supplier questionnaires, and track due diligence
                at every tier.
              </p>
            </div>
          </div>
          <div className="pointer-events-none absolute inset-0 rounded-lg shadow outline outline-1 outline-black/5 lg:rounded-bl-[2rem]" />
        </div>

        {/* Card 4 — Integrations (bottom-center, span 2) */}
        <div className="relative lg:col-span-2">
          <div className="absolute inset-0 rounded-lg bg-card" />
          <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)]">
            <div className="h-80 bg-gradient-to-b from-secondary to-accent flex items-center justify-center">
              <Plug className="h-16 w-16 text-primary/40" />
            </div>
            <div className="p-10 pt-4">
              <h3 className="text-sm/4 font-semibold text-primary">Integrations</h3>
              <p className="mt-2 text-lg font-medium tracking-tight text-foreground">
                Fits into your workflow
              </p>
              <p className="mt-2 max-w-lg text-sm/6 text-muted-foreground">
                Connect your ERP, PLM, and quality management systems. Synex adapts to you —
                not the other way around.
              </p>
            </div>
          </div>
          <div className="pointer-events-none absolute inset-0 rounded-lg shadow outline outline-1 outline-black/5" />
        </div>

        {/* Card 5 — Reporting (bottom-right, span 2) */}
        <div className="relative lg:col-span-2">
          <div className="absolute inset-0 rounded-lg bg-card max-lg:rounded-b-[2rem] lg:rounded-br-[2rem]" />
          <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-br-[calc(2rem+1px)]">
            <div className="h-80 bg-gradient-to-tl from-primary/10 via-accent to-secondary flex items-center justify-center">
              <FileText className="h-16 w-16 text-primary/40" />
            </div>
            <div className="p-10 pt-4">
              <h3 className="text-sm/4 font-semibold text-primary">Reporting</h3>
              <p className="mt-2 text-lg font-medium tracking-tight text-foreground">
                Audit-ready in one click
              </p>
              <p className="mt-2 max-w-lg text-sm/6 text-muted-foreground">
                Generate Battery Passport documents, compliance certificates, and regulatory
                reports instantly.
              </p>
            </div>
          </div>
          <div className="pointer-events-none absolute inset-0 rounded-lg shadow outline outline-1 outline-black/5 max-lg:rounded-b-[2rem] lg:rounded-br-[2rem]" />
        </div>
      </div>
    </div>
  </section>
);

export default BentoSection;`;

export const opportunitiesCode = `import { Handshake, FlaskConical, CalendarCheck, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const opportunities = [
  {
    title: "Become a Partner",
    description:
      "Join our network of consulting firms and technology providers. Expand your service offering with Synex's compliance platform and methodology.",
    icon: Handshake,
    href: "/contact",
    cta: "Partner with us",
  },
  {
    title: "Join a Pilot Program",
    description:
      "Be among the first to test new platform features. Pilot participants get early access, dedicated support, and shape the product roadmap.",
    icon: FlaskConical,
    href: "/contact",
    cta: "Apply for a pilot",
  },
  {
    title: "Schedule a Demo",
    description:
      "See the Synex platform in action. We'll walk you through how it maps to your specific compliance requirements and battery portfolio.",
    icon: CalendarCheck,
    href: "/contact",
    cta: "Book a demo",
  },
];

const OpportunitiesSection = () => (
  <section className="py-24 sm:py-32 bg-background">
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <div className="mx-auto max-w-2xl lg:text-center">
        <p className="text-base font-semibold text-primary">Opportunities</p>
        <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-pretty">
          Work with us
        </h2>
        <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
          Whether you're looking to partner, pilot, or simply explore — there's a path for you.
        </p>
      </div>

      <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:mt-24 lg:max-w-none lg:grid-cols-3">
        {opportunities.map((item) => (
          <div
            key={item.title}
            className="flex flex-col rounded-2xl border border-border bg-card p-8 shadow-sm transition-shadow hover:shadow-md"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 mb-6">
              <item.icon className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
            <p className="mt-3 flex-1 text-sm text-muted-foreground leading-relaxed">
              {item.description}
            </p>
            <Link
              to={item.href}
              className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
            >
              {item.cta} <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default OpportunitiesSection;`;

export const blogCode = `import { Link } from "react-router-dom";

const posts = [
  {
    id: 1,
    title: "Understanding the EU Battery Regulation: What Manufacturers Need to Know",
    href: "/resources",
    description:
      "A practical overview of the key obligations under Regulation 2023/1542 — from Battery Passports to recycled content targets — and what they mean for your business.",
    date: "Mar 16, 2025",
    category: { title: "Battery Regulation", color: "bg-primary/10 text-primary" },
    author: { name: "Synex Team", role: "Compliance Advisory" },
  },
  {
    id: 2,
    title: "ESPR Compliance: Digital Product Passports and What's Coming in 2026",
    href: "/resources",
    description:
      "The Ecodesign for Sustainable Products Regulation is reshaping how products are documented and traded in the EU. Here's what to prepare for.",
    date: "Feb 28, 2025",
    category: { title: "ESPR", color: "bg-accent text-accent-foreground" },
    author: { name: "Synex Team", role: "Regulatory Insights" },
  },
  {
    id: 3,
    title: "Carbon Footprint Declarations: A Step-by-Step Guide for Battery Producers",
    href: "/resources",
    description:
      "From data collection to calculation methodology — how to prepare your carbon footprint declaration in line with the EU's approved standards.",
    date: "Jan 15, 2025",
    category: { title: "Guides", color: "bg-secondary text-secondary-foreground" },
    author: { name: "Synex Team", role: "Technical Guides" },
  },
];

const BlogSection = () => (
  <section className="py-24 sm:py-32 bg-secondary/30">
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <div className="mx-auto max-w-2xl lg:text-center">
        <p className="text-base font-semibold text-primary">From the blog</p>
        <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-pretty">
          Latest Resources
        </h2>
        <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
          Learn how to grow your compliance practice with our expert advice.
        </p>
      </div>

      <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-12 sm:mt-20 lg:mx-0 lg:mt-24 lg:max-w-none lg:grid-cols-3">
        {posts.map((post) => (
          <article key={post.id} className="flex flex-col items-start">
            <div className="flex items-center gap-x-4 text-xs">
              <time dateTime={post.date} className="text-muted-foreground">
                {post.date}
              </time>
              <span className={\`relative z-10 rounded-full px-3 py-1.5 font-medium \${post.category.color}\`}>
                {post.category.title}
              </span>
            </div>
            <div className="group relative">
              <h3 className="mt-3 text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                <Link to={post.href}>
                  <span className="absolute inset-0" />
                  {post.title}
                </Link>
              </h3>
              <p className="mt-4 line-clamp-3 text-sm text-muted-foreground leading-relaxed">
                {post.description}
              </p>
            </div>
            <div className="relative mt-6 flex items-center gap-x-3">
              <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="text-xs font-bold text-primary">S</span>
              </div>
              <div className="text-sm">
                <p className="font-semibold text-foreground">{post.author.name}</p>
                <p className="text-muted-foreground">{post.author.role}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default BlogSection;`;

export const batteryHeroCode = `import { Button } from "@/components/ui/button";
import { ArrowRight, Shield } from "lucide-react";

const HeroSection = () => (
  <section className="py-20 lg:py-28">
    <div className="container">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left: Copy */}
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full bg-accent px-4 py-1.5 text-sm font-medium text-accent-foreground">
            <Shield className="h-4 w-4" />
            EU Battery Regulation
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-[3.25rem] font-extrabold leading-[1.15] tracking-tight text-foreground">
            Navigate Battery Regulation with Confidence
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
            The EU Battery Regulation (2023/1542) introduces comprehensive requirements for all batteries placed on the EU market. We help you understand, plan, and achieve full compliance — without the complexity.
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <Button size="lg" className="gap-2">
              Get Started <ArrowRight className="h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline">
              Learn More
            </Button>
          </div>
        </div>

        {/* Right: Visual */}
        <div className="relative flex justify-center lg:justify-end">
          <div className="relative w-full max-w-md">
            <div className="absolute -inset-4 rounded-2xl bg-primary/5 blur-2xl" />
            <div className="relative rounded-2xl border border-border bg-card p-8 shadow-lg space-y-5">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Shield className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground text-sm">Compliance Status</p>
                  <p className="text-xs text-muted-foreground">EU Battery Regulation 2023/1542</p>
                </div>
              </div>
              <div className="space-y-3">
                {[
                  { label: "Battery Passport", progress: 85 },
                  { label: "Due Diligence", progress: 72 },
                  { label: "Carbon Footprint", progress: 60 },
                  { label: "Recycled Content", progress: 45 },
                ].map((item) => (
                  <div key={item.label} className="space-y-1.5">
                    <div className="flex justify-between text-xs">
                      <span className="text-muted-foreground">{item.label}</span>
                      <span className="font-medium text-foreground">{item.progress}%</span>
                    </div>
                    <div className="h-1.5 rounded-full bg-secondary overflow-hidden">
                      <div
                        className="h-full rounded-full bg-primary transition-all duration-700"
                        style={{ width: \`\${item.progress}%\` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;`;

export const keyRequirementsCode = `import { Card, CardContent } from "@/components/ui/card";
import { FileText, Recycle, Leaf, Search } from "lucide-react";
import { useScrollFade } from "@/hooks/use-scroll-fade";

const requirements = [
  {
    icon: FileText,
    title: "Battery Passport",
    description:
      "Every industrial and EV battery must carry a digital product passport containing information about its composition, origin, carbon footprint, and recycled content.",
  },
  {
    icon: Search,
    title: "Due Diligence",
    description:
      "Economic operators must implement due diligence policies covering sourcing of raw materials, particularly cobalt, lithium, nickel, and natural graphite.",
  },
  {
    icon: Leaf,
    title: "Carbon Footprint Declaration",
    description:
      "Manufacturers must declare the carbon footprint of batteries throughout their lifecycle — from raw material extraction to end-of-life processing.",
  },
  {
    icon: Recycle,
    title: "Recycled Content",
    description:
      "Minimum levels of recycled cobalt, lithium, nickel, and lead must be present in new batteries, with targets increasing over time.",
  },
];

const KeyRequirements = () => {
  const { ref, isVisible } = useScrollFade();

  return (
    <section ref={ref} className="py-20 bg-secondary/40">
      <div
        className={\`container transition-all duration-700 \${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }\`}
      >
        <div className="max-w-2xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            The Battery Regulation
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Regulation (EU) 2023/1542 sets out comprehensive sustainability and safety requirements for all batteries placed on the EU market. Here are the key pillars you need to address.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {requirements.map((req) => (
            <Card key={req.title} className="border-border hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex gap-4">
                  <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <req.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1.5">{req.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {req.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyRequirements;`;

export const complianceBenefitsCode = `import { CheckCircle, ArrowRight } from "lucide-react";
import { useScrollFade } from "@/hooks/use-scroll-fade";

const benefits = [
  "End-to-end compliance roadmap tailored to your battery type and market",
  "Automated data collection for Battery Passport requirements",
  "Supply chain due diligence management and audit preparation",
  "Carbon footprint calculation aligned with EU methodology",
];

const ComplianceBenefits = () => {
  const { ref, isVisible } = useScrollFade();

  return (
    <section ref={ref} className="py-20">
      <div
        className={\`container transition-all duration-700 \${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }\`}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
          {/* Left: Message */}
          <div className="space-y-5">
            <h2 className="text-3xl font-bold text-foreground leading-tight">
              Forget about compliance complexity
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Battery regulation compliance doesn't have to be overwhelming. Our structured approach breaks down every requirement into clear, manageable steps — so you can focus on your product, not paperwork.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
            >
              Talk to an expert <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          {/* Right: Benefit list */}
          <div className="space-y-4">
            {benefits.map((benefit, i) => (
              <div
                key={i}
                className="flex gap-3 items-start p-4 rounded-lg bg-secondary/60 border border-border"
              >
                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <p className="text-sm text-foreground leading-relaxed">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComplianceBenefits;`;

export const servicesTabsCode = `import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FileText, BarChart3, ShieldCheck, Recycle } from "lucide-react";
import { useScrollFade } from "@/hooks/use-scroll-fade";

const tabs = [
  {
    value: "passport",
    label: "Battery Passport",
    icon: FileText,
    title: "Digital Battery Passport Setup",
    description:
      "We help you design and implement a fully compliant digital battery passport — covering unique identifiers, material composition, carbon footprint data, and supply chain traceability. Our platform automates data collection across your value chain.",
    features: [
      "Unique battery identifier management",
      "Material composition tracking",
      "QR code and data carrier integration",
      "Interoperability with EU systems",
    ],
  },
  {
    value: "carbon",
    label: "Carbon Footprint",
    icon: BarChart3,
    title: "Carbon Footprint Declaration",
    description:
      "Calculate and declare the carbon footprint of your batteries across the entire lifecycle. We align your methodology with the EU's delegated acts and help you move toward the required performance classes.",
    features: [
      "Lifecycle assessment (LCA) support",
      "Scope 1, 2 & 3 emissions mapping",
      "Performance class benchmarking",
      "Third-party verification preparation",
    ],
  },
  {
    value: "diligence",
    label: "Due Diligence",
    icon: ShieldCheck,
    title: "Supply Chain Due Diligence",
    description:
      "Establish robust due diligence policies for raw material sourcing. We guide you through risk identification, mitigation strategies, and reporting obligations aligned with OECD frameworks and EU requirements.",
    features: [
      "Raw material risk assessment",
      "Supplier audit framework",
      "Grievance mechanism setup",
      "Annual reporting templates",
    ],
  },
  {
    value: "recycling",
    label: "Recycled Content",
    icon: Recycle,
    title: "Recycled Content Compliance",
    description:
      "Meet the EU's recycled content targets for cobalt, lithium, nickel, and lead. We help you track recycled material flows, establish documentation, and prepare for the mandatory thresholds taking effect in 2028 and 2031.",
    features: [
      "Recycled content calculation methodology",
      "Material flow documentation",
      "Supplier certification tracking",
      "Target roadmap planning",
    ],
  },
];

const ServicesTabsSection = () => {
  const { ref, isVisible } = useScrollFade();

  return (
    <section ref={ref} className="py-20 bg-secondary/40">
      <div
        className={\`container transition-all duration-700 \${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }\`}
      >
        <div className="max-w-2xl mx-auto text-center mb-10">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            What can we do for you?
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Our services cover every pillar of the EU Battery Regulation. Choose an area to learn more.
          </p>
        </div>

        <Tabs defaultValue="passport" className="max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 h-auto gap-1 bg-secondary p-1">
            {tabs.map((tab) => (
              <TabsTrigger
                key={tab.value}
                value={tab.value}
                className="gap-1.5 text-xs md:text-sm py-2.5 data-[state=active]:bg-background"
              >
                <tab.icon className="h-4 w-4" />
                <span className="hidden sm:inline">{tab.label}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          {tabs.map((tab) => (
            <TabsContent key={tab.value} value={tab.value} className="mt-6">
              <div className="rounded-lg border border-border bg-card p-6 md:p-8">
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {tab.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-5">
                  {tab.description}
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {tab.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-2 text-sm text-foreground"
                    >
                      <div className="h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default ServicesTabsSection;`;

export const consultationCtaCode = `import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useScrollFade } from "@/hooks/use-scroll-fade";

const ConsultationCTA = () => {
  const { ref, isVisible } = useScrollFade();

  return (
    <section ref={ref} className="py-20">
      <div
        className={\`container transition-all duration-700 \${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }\`}
      >
        <div className="max-w-2xl mx-auto text-center space-y-5">
          <h2 className="text-3xl font-bold text-foreground">
            Get a free consultation
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Not sure where you stand with the EU Battery Regulation? Let's assess your compliance gaps together — no commitment required.
          </p>
          <Button size="lg" className="gap-2">
            Schedule a Call <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ConsultationCTA;`;

export const logoCloudCode = `const logos = [
  {
    alt: "Transistor",
    light: "https://tailwindcss.com/plus-assets/img/logos/158x48/transistor-logo-gray-900.svg",
    dark: "https://tailwindcss.com/plus-assets/img/logos/158x48/transistor-logo-white.svg",
  },
  {
    alt: "Reform",
    light: "https://tailwindcss.com/plus-assets/img/logos/158x48/reform-logo-gray-900.svg",
    dark: "https://tailwindcss.com/plus-assets/img/logos/158x48/reform-logo-white.svg",
  },
  {
    alt: "Tuple",
    light: "https://tailwindcss.com/plus-assets/img/logos/158x48/tuple-logo-gray-900.svg",
    dark: "https://tailwindcss.com/plus-assets/img/logos/158x48/tuple-logo-white.svg",
  },
  {
    alt: "SavvyCal",
    light: "https://tailwindcss.com/plus-assets/img/logos/158x48/savvycal-logo-gray-900.svg",
    dark: "https://tailwindcss.com/plus-assets/img/logos/158x48/savvycal-logo-white.svg",
    extraClass: "sm:col-start-2",
  },
  {
    alt: "Statamic",
    light: "https://tailwindcss.com/plus-assets/img/logos/158x48/statamic-logo-gray-900.svg",
    dark: "https://tailwindcss.com/plus-assets/img/logos/158x48/statamic-logo-white.svg",
    extraClass: "col-start-2 sm:col-start-auto",
  },
];

const LogoCloudSection = () => {
  return (
    <div className="bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-center text-lg/8 font-semibold text-foreground">
          Trusted by the world's most innovative teams
        </h2>
        <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
          {logos.map((logo) => (
            <div key={logo.alt} className={"col-span-2 lg:col-span-1 " + (logo.extraClass ?? "")}>
              <img
                alt={logo.alt}
                src={logo.light}
                width={158}
                height={48}
                className="max-h-12 w-full object-contain dark:hidden"
              />
              <img
                alt={logo.alt}
                src={logo.dark}
                width={158}
                height={48}
                className="hidden max-h-12 w-full object-contain dark:block"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LogoCloudSection;`;


export const resourceBlogCode = `import { useState, useMemo } from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const allPosts = [
  {
    id: 1,
    title: "Understanding the EU Battery Regulation: What Manufacturers Need to Know",
    href: "/resources/eu-battery-regulation",
    description:
      "A practical overview of the key obligations under Regulation 2023/1542 — from Battery Passports to recycled content targets — and what they mean for your business.",
    date: "Mar 16, 2025",
    category: "Battery Regulation",
    author: { name: "Synex Team", role: "Compliance Advisory" },
  },
  {
    id: 2,
    title: "ESPR Compliance: Digital Product Passports and What's Coming in 2026",
    href: "/resources/espr-compliance",
    description:
      "The Ecodesign for Sustainable Products Regulation is reshaping how products are documented and traded in the EU. Here's what to prepare for.",
    date: "Feb 28, 2025",
    category: "ESPR",
    author: { name: "Synex Team", role: "Regulatory Insights" },
  },
  {
    id: 3,
    title: "Carbon Footprint Declarations: A Step-by-Step Guide for Battery Producers",
    href: "/resources/carbon-footprint-guide",
    description:
      "From data collection to calculation methodology — how to prepare your carbon footprint declaration in line with the EU's approved standards.",
    date: "Jan 15, 2025",
    category: "Guides",
    author: { name: "Synex Team", role: "Technical Guides" },
  },
  {
    id: 4,
    title: "Supply Chain Due Diligence Under the Battery Regulation",
    href: "/resources/supply-chain-due-diligence",
    description:
      "An overview of due diligence obligations for raw materials sourcing, and how to build a compliant audit trail across your supply chain.",
    date: "Dec 10, 2024",
    category: "Battery Regulation",
    author: { name: "Synex Team", role: "Compliance Advisory" },
  },
  {
    id: 5,
    title: "How Digital Product Passports Will Transform the Textile Industry",
    href: "/resources/dpp-textiles",
    description:
      "Textiles are among the first product categories targeted by ESPR. Learn how DPPs will change labelling, traceability, and consumer transparency.",
    date: "Nov 22, 2024",
    category: "ESPR",
    author: { name: "Synex Team", role: "Regulatory Insights" },
  },
  {
    id: 6,
    title: "Battery Passport Data Requirements: Complete Checklist",
    href: "/resources/battery-passport-checklist",
    description:
      "A comprehensive checklist of every data point required for EU Battery Passports — covering identification, performance, materials, and sustainability metrics.",
    date: "Oct 05, 2024",
    category: "Guides",
    author: { name: "Synex Team", role: "Technical Guides" },
  },
];

const categories = ["All", ...Array.from(new Set(allPosts.map((p) => p.category)))];

const POSTS_PER_PAGE = 3;

const categoryColors: Record<string, string> = {
  "Battery Regulation": "bg-primary/10 text-primary",
  ESPR: "bg-accent text-accent-foreground",
  Guides: "bg-secondary text-secondary-foreground",
};

const ResourceBlogSection = () => {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [visibleCount, setVisibleCount] = useState(POSTS_PER_PAGE);

  const filtered = useMemo(() => {
    return allPosts.filter((post) => {
      const matchesSearch =
        search === "" ||
        post.title.toLowerCase().includes(search.toLowerCase()) ||
        post.description.toLowerCase().includes(search.toLowerCase());
      const matchesCategory =
        activeCategory === "All" || post.category === activeCategory;
      return matchesSearch && matchesCategory;
    });
  }, [search, activeCategory]);

  const visible = filtered.slice(0, visibleCount);
  const hasMore = visibleCount < filtered.length;

  const handleCategoryChange = (cat: string) => {
    setActiveCategory(cat);
    setVisibleCount(POSTS_PER_PAGE);
  };

  return (
    <section className="py-24 sm:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl lg:text-center">
          <p className="text-base font-semibold text-primary">From the blog</p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Latest Resources
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            Learn how to grow your compliance practice with our expert advice.
          </p>
        </div>

        {/* Search + Filters */}
        <div className="mx-auto mt-12 max-w-2xl lg:max-w-none">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            {/* Search */}
            <div className="relative w-full sm:max-w-xs">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Search articles…"
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value);
                  setVisibleCount(POSTS_PER_PAGE);
                }}
                className="pl-9"
              />
            </div>

            {/* Category filters */}
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => handleCategoryChange(cat)}
                  className={\`rounded-full px-4 py-1.5 text-xs font-medium transition-colors \${
                    activeCategory === cat
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                  }\`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Post grid */}
        <div className="mx-auto mt-12 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-12 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {visible.map((post) => (
            <article key={post.id} className="flex flex-col items-start">
              <div className="flex items-center gap-x-4 text-xs">
                <time className="text-muted-foreground">{post.date}</time>
                <span
                  className={\`relative z-10 rounded-full px-3 py-1.5 font-medium \${
                    categoryColors[post.category] ?? "bg-secondary text-secondary-foreground"
                  }\`}
                >
                  {post.category}
                </span>
              </div>
              <div className="group relative">
                <h3 className="mt-3 text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                  <Link to={post.href}>
                    <span className="absolute inset-0" />
                    {post.title}
                  </Link>
                </h3>
                <p className="mt-4 line-clamp-3 text-sm text-muted-foreground leading-relaxed">
                  {post.description}
                </p>
              </div>
              <div className="relative mt-6 flex items-center gap-x-3">
                <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-xs font-bold text-primary">S</span>
                </div>
                <div className="text-sm">
                  <p className="font-semibold text-foreground">{post.author.name}</p>
                  <p className="text-muted-foreground">{post.author.role}</p>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Empty state */}
        {visible.length === 0 && (
          <p className="mt-12 text-center text-muted-foreground">
            No articles match your search.
          </p>
        )}

        {/* Load more */}
        {hasMore && (
          <div className="mt-16 flex justify-center">
            <Button
              variant="outline"
              onClick={() => setVisibleCount((c) => c + POSTS_PER_PAGE)}
            >
              Load more articles
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ResourceBlogSection;
`;

export const resourceDownloadsCode = `import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const downloads = [
  {
    id: 1,
    coverTitle: "Guide to DPP",
    subtitle: "Digital Product Passports in ESPR",
    date: "April 2025",
    title: "Digital Product Passports in ESPR",
    description:
      "This article provides a comprehensive overview of EU Digital Product Passports, their technical framework, compliance requirements, strategic advantages, and implementation options.",
    downloadUrl: "#",
  },
  {
    id: 2,
    coverTitle: "Guide to DPP",
    subtitle: "Implementation Strategies",
    date: "April 2025",
    title: "DPP Implementation Strategies",
    description:
      "Selecting the optimal implementation strategy for DPP compliance is essential for companies to efficiently balance regulatory obligations, operational costs, and yield benefit from strategic business objectives.",
    downloadUrl: "#",
  },
  {
    id: 3,
    coverTitle: "Guide to EU ESPR",
    subtitle: "European Ecodesign for Sustainable Products Regulation",
    date: "April 2025",
    title: "Guide to EU ESPR",
    description:
      "After reviewing this article, you will know the current state of ESPR's key goals, requirements, and compliance mechanisms. By understanding the regulation's core principles, responsible economic operators can take proactive strategies for upcoming compliance.",
    downloadUrl: "#",
  },
  {
    id: 4,
    coverTitle: "Battery Regulation",
    subtitle: "EU Battery Passport Checklist",
    date: "March 2025",
    title: "EU Battery Passport Checklist",
    description:
      "A comprehensive checklist of every data point required for EU Battery Passports — covering identification, performance, materials, and sustainability metrics for full compliance.",
    downloadUrl: "#",
  },
];

const ResourceDownloadsSection = () => {
  return (
    <section className="py-24 sm:py-32 bg-secondary/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Download our guides
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Gain a comprehensive understanding of EU regulations:
          </p>
        </div>

        {/* Cards grid */}
        <div className="mx-auto mt-16 grid max-w-sm grid-cols-1 gap-8 sm:max-w-none sm:grid-cols-2 lg:grid-cols-3">
          {downloads.map((item) => (
            <div
              key={item.id}
              className="group flex flex-col overflow-hidden rounded-xl bg-card border border-border shadow-sm hover:shadow-lg transition-shadow"
            >
              {/* Document cover preview */}
              <div className="relative mx-6 mt-6 overflow-hidden rounded-lg bg-muted/60">
                <div className="flex aspect-[3/4] max-h-72 items-end">
                  {/* Cover mock */}
                  <div className="relative ml-4 mb-4 flex w-3/5 flex-col justify-between rounded-md bg-foreground p-5 shadow-xl" style={{ aspectRatio: "3/4" }}>
                    {/* Brand mark */}
                    <p className="text-sm font-medium text-primary-foreground/80 tracking-wide">
                      synex
                    </p>
                    {/* Cover title area */}
                    <div>
                      <div className="mb-2 h-px w-10 bg-primary" />
                      <h3 className="text-lg font-bold leading-tight text-primary-foreground">
                        {item.coverTitle}
                      </h3>
                    </div>
                  </div>
                </div>
              </div>

              {/* Text content */}
              <div className="flex flex-1 flex-col p-6 pt-5">
                <p className="text-xs font-medium uppercase tracking-wider text-primary">
                  {item.date}
                </p>
                <h3 className="mt-2 text-lg font-bold text-foreground">
                  {item.title}
                </h3>
                <p className="mt-3 flex-1 text-sm text-muted-foreground leading-relaxed line-clamp-4">
                  {item.description}
                </p>

                {/* Download button */}
                <Button className="mt-6 w-full gap-2" size="lg">
                  <Download className="h-4 w-4" />
                  Download Document
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResourceDownloadsSection;
`;

export const consultingNavCode = `import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    id: 1,
    title: "Battery Regulation Consulting",
    description:
      "Navigate complex EU battery rules with expert guidance on compliance strategy, data requirements, labeling, and digital battery passport implementation.",
    cta: "Explore Battery Regulation",
    href: "/batteryreg",
    imagePlaceholder: "Battery & Compliance",
  },
  {
    id: 2,
    title: "ESPR Consulting",
    description:
      "Get tailored support to align your products with ESPR, covering design requirements, DPP readiness, data strategy, and supply chain coordination.",
    cta: "More on ESPR",
    href: "/espr",
    imagePlaceholder: "DPP & Traceability",
  },
];

const ConsultingNavSection = () => {
  return (
    <section className="py-24 sm:py-32 bg-background">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        {/* Cards grid */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
          {services.map((service) => (
            <div
              key={service.id}
              className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm hover:shadow-lg transition-shadow"
            >
              {/* Image area */}
              <div className="mx-4 mt-4 overflow-hidden rounded-xl bg-muted">
                <div className="flex aspect-[4/3] items-center justify-center">
                  <span className="text-sm font-medium text-muted-foreground">
                    {service.imagePlaceholder}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-xl font-bold text-foreground sm:text-2xl">
                  {service.title}
                </h3>
                <p className="mt-3 flex-1 text-sm text-muted-foreground leading-relaxed sm:text-base">
                  {service.description}
                </p>
                <div className="mt-6 flex justify-end">
                  <Button asChild>
                    <Link to={service.href}>{service.cta}</Link>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Back button */}
        <div className="mt-16 flex justify-center">
          <Button variant="outline" asChild className="gap-2">
            <Link to="/">
              <ArrowLeft className="h-4 w-4" />
              Back
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ConsultingNavSection;
`;

export const contactSectionCode = `import { Building2, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const ContactSection = () => {
  return (
    <section className="relative isolate bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-x-16 gap-y-16 lg:grid-cols-2">
          {/* Left — Info */}
          <div className="max-w-xl">
            <p className="text-base font-semibold text-primary">Get in touch</p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Let's discuss your compliance needs
            </h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Whether you need guidance on battery regulation, ESPR readiness,
              or digital product passports — our team is here to help.
            </p>

            <dl className="mt-10 space-y-6 text-sm text-muted-foreground">
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Address</span>
                  <Building2 className="h-6 w-6 text-primary" aria-hidden="true" />
                </dt>
                <dd>
                  Musterstraße 42
                  <br />
                  80331 Munich, Germany
                </dd>
              </div>
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Telephone</span>
                  <Phone className="h-6 w-6 text-primary" aria-hidden="true" />
                </dt>
                <dd>
                  <a href="tel:+49 123 456 7890" className="hover:text-foreground transition-colors">
                    +49 123 456 7890
                  </a>
                </dd>
              </div>
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Email</span>
                  <Mail className="h-6 w-6 text-primary" aria-hidden="true" />
                </dt>
                <dd>
                  <a href="mailto:hello@synexcloud.com" className="hover:text-foreground transition-colors">
                    hello@synexcloud.com
                  </a>
                </dd>
              </div>
            </dl>
          </div>

          {/* Right — Form */}
          <form
            onSubmit={(e) => e.preventDefault()}
            className="rounded-2xl border border-border bg-card p-8 shadow-sm lg:p-10"
          >
            <div className="grid grid-cols-1 gap-x-6 gap-y-5 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="first-name">First name</Label>
                <Input id="first-name" name="first-name" autoComplete="given-name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="last-name">Last name</Label>
                <Input id="last-name" name="last-name" autoComplete="family-name" />
              </div>
              <div className="space-y-2 sm:col-span-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" name="email" type="email" autoComplete="email" />
              </div>
              <div className="space-y-2 sm:col-span-2">
                <Label htmlFor="phone">Phone number</Label>
                <Input id="phone" name="phone" type="tel" autoComplete="tel" />
              </div>
              <div className="space-y-2 sm:col-span-2">
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" name="message" rows={4} />
              </div>
            </div>
            <div className="mt-8 flex justify-end">
              <Button type="submit">Send message</Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
`;

export const contactDialogCode = `import { useState } from "react";
import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const ContactDialog = () => {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="gap-2">
          <Mail className="h-4 w-4" />
          Contact Us
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold text-foreground">
            Get in touch
          </DialogTitle>
          <DialogDescription className="text-muted-foreground">
            Fill out the form below and our team will get back to you within
            24 hours.
          </DialogDescription>
        </DialogHeader>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            setOpen(false);
          }}
          className="mt-4 space-y-5"
        >
          <div className="grid grid-cols-1 gap-x-4 gap-y-5 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="dialog-first-name">First name</Label>
              <Input id="dialog-first-name" name="first-name" autoComplete="given-name" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="dialog-last-name">Last name</Label>
              <Input id="dialog-last-name" name="last-name" autoComplete="family-name" />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="dialog-email">Email</Label>
            <Input id="dialog-email" name="email" type="email" autoComplete="email" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="dialog-message">Message</Label>
            <Textarea id="dialog-message" name="message" rows={4} />
          </div>
          <div className="flex justify-end gap-3 pt-2">
            <Button type="button" variant="outline" onClick={() => setOpen(false)}>
              Cancel
            </Button>
            <Button type="submit">Send message</Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ContactDialog;
`;

export const demosSectionCode = `import { ArrowRight, Menu } from "lucide-react";
import { Link } from "react-router-dom";

const demos = [
  {
    id: 1,
    title: "Synex T-shirt",
    description:
      "Digital Product Passport focused on telling product's story, composition and how to take care for it.",
    href: "/demos/tshirt",
    productLabel: "T-shirt",
    uniqueId: "2316022d-21mf-4667…",
    location: "Plovdiv, Bulgaria",
  },
  {
    id: 2,
    title: "Synex Car Battery",
    description:
      "DPP focused on functionality, simplified maintenance and end-of-life handling above compliance standards.",
    href: "/demos/battery",
    productLabel: "Car Battery",
    uniqueId: "2316022d-21mf-4667…",
    location: "Plovdiv, Bulgaria",
  },
  {
    id: 3,
    title: "Synex Sofa",
    description:
      "DPP aiming at more than compliance — getting the customer closer to the product through its story.",
    href: "/demos/sofa",
    productLabel: "Sofa",
    uniqueId: "2316022d-21mf-4667…",
    location: "Plovdiv, Bulgaria",
  },
];

const PhoneMockup = ({ uniqueId, location }: { uniqueId: string; location: string }) => (
  <div className="w-48 sm:w-52">
    {/* Phone frame */}
    <div className="rounded-[2.5rem] border-[6px] border-foreground bg-foreground p-1 shadow-2xl">
      {/* Notch */}
      <div className="absolute left-1/2 top-2 z-10 h-5 w-24 -translate-x-1/2 rounded-full bg-foreground" />

      {/* Screen */}
      <div className="overflow-hidden rounded-[2rem] bg-muted">
        {/* Header */}
        <div className="flex items-center justify-between px-4 pt-8 pb-2">
          <div className="h-6 w-6 rotate-45 rounded-sm bg-primary" />
          <Menu className="h-4 w-4 text-muted-foreground" />
        </div>

        {/* Product area */}
        <div className="flex h-36 items-center justify-center">
          <div className="flex flex-col items-center gap-1">
            <div className="h-20 w-20 rounded-lg bg-muted-foreground/5 flex items-center justify-center">
              <span className="text-[10px] font-medium text-muted-foreground/40 tracking-wide">
                synex
              </span>
            </div>
          </div>
        </div>

        {/* Data rows */}
        <div className="border-t border-border/40 px-3 py-2">
          <div className="grid grid-cols-2 gap-x-2 text-[8px]">
            <div>
              <p className="text-muted-foreground/50">Unique ID:</p>
              <p className="font-medium text-foreground/70 truncate">{uniqueId}</p>
            </div>
            <div>
              <p className="text-muted-foreground/50">Manufactured in:</p>
              <p className="font-medium text-foreground/70">{location}</p>
            </div>
          </div>
        </div>
        <div className="border-t border-border/40 px-3 py-2">
          <div className="grid grid-cols-2 gap-x-2 text-[8px]">
            <p className="text-muted-foreground/50">Manufacturing Date:</p>
            <p className="text-muted-foreground/50">Product Size</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const DemosSection = () => {
  return (
    <section className="py-24 sm:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-base font-semibold text-primary">Demos</p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Want to see how it looks?
          </h2>
        </div>

        {/* Cards */}
        <div className="mx-auto mt-16 grid max-w-sm grid-cols-1 gap-10 sm:max-w-none sm:grid-cols-2 lg:grid-cols-3">
          {demos.map((demo) => (
            <div key={demo.id} className="group relative">
              {/* Layered container — phone behind, card in front */}
              <div className="relative flex flex-col items-center">
                {/* Phone — sits behind the card, peeks out at top */}
                <div className="relative z-0 flex justify-center transition-transform duration-300 ease-out group-hover:-translate-y-3">
                  <PhoneMockup
                    uniqueId={demo.uniqueId}
                    location={demo.location}
                  />
                </div>

                {/* Card — overlaps the bottom of the phone */}
                <div className="relative z-10 -mt-16 w-full rounded-2xl border border-border bg-card p-6 shadow-sm">
                  <h3 className="text-lg font-bold text-foreground">{demo.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                    {demo.description}
                  </p>
                  <Link
                    to={demo.href}
                    className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary hover:text-primary/80 transition-colors"
                  >
                    View DPP
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DemosSection;
`;