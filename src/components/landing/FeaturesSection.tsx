import { ShieldAlert, Timer, CircleDollarSign, Route, ArrowRight } from "lucide-react";

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
    {/* Soft gradient background */}
    <div className="absolute inset-0 -z-10 bg-gradient-to-br from-muted/60 via-background to-primary/5" />
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      {/* Header */}
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-pretty">
          <span className="text-primary">Forget</span> about compliance complexity
        </h2>
        <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
          Regulation compliance is a project that needs its research, planning and implementation. Avoid risk and streamline these processes so you can worry less and sell more.
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

export default FeaturesSection;
