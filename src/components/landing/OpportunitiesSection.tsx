import { Handshake, FlaskConical, CalendarCheck, ArrowRight } from "lucide-react";
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
  <section
    className="py-24 sm:py-32"
    style={{
      background: `linear-gradient(180deg, hsl(var(--background)) 0%, hsl(var(--secondary) / 0.3) 10%, hsl(var(--secondary) / 0.3) 90%, hsl(var(--background)) 100%)`,
    }}
  >
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

export default OpportunitiesSection;
