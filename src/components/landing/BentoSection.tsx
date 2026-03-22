import { Database, BarChart3, Link2, Plug, FileText } from "lucide-react";

const cards = [
  {
    title: "Data Management",
    description: "Centralise all compliance data in one place. From material compositions to supplier declarations — structured, searchable, and always up to date.",
    icon: Database,
    colSpan: "lg:col-span-2",
    rowSpan: "lg:row-span-2",
    gradient: "from-primary/10 to-primary/5",
  },
  {
    title: "Compliance Tracking",
    description: "Monitor your regulation readiness in real time. Visual dashboards show exactly where you stand across every requirement.",
    icon: BarChart3,
    colSpan: "lg:col-span-1",
    rowSpan: "",
    gradient: "from-accent to-secondary",
  },
  {
    title: "Supply Chain",
    description: "Map your entire supply chain, manage supplier questionnaires, and track due diligence status at every tier.",
    icon: Link2,
    colSpan: "lg:col-span-1",
    rowSpan: "",
    gradient: "from-secondary to-accent",
  },
  {
    title: "Integrations",
    description: "Connect your existing ERP, PLM, and quality management systems. Synex fits into your workflow — not the other way around.",
    icon: Plug,
    colSpan: "lg:col-span-1",
    rowSpan: "",
    gradient: "from-primary/5 to-secondary",
  },
  {
    title: "Reporting",
    description: "Generate audit-ready reports, Battery Passport documents, and compliance certificates with one click.",
    icon: FileText,
    colSpan: "lg:col-span-1",
    rowSpan: "",
    gradient: "from-secondary to-primary/5",
  },
];

const BentoSection = () => (
  <section className="py-24 sm:py-32 bg-secondary/30">
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <div className="mx-auto max-w-2xl lg:text-center">
        <p className="text-base font-semibold text-primary">Platform</p>
        <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-pretty">
          More than just consulting
        </h2>
        <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
          Our platform gives your compliance team the tools to manage, track, and report — all in one place.
        </p>
      </div>

      <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-7xl">
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 lg:grid-rows-2">
          {cards.map((card) => (
            <div
              key={card.title}
              className={`group relative overflow-hidden rounded-2xl border border-border bg-card p-8 shadow-sm transition-shadow hover:shadow-md ${card.colSpan} ${card.rowSpan}`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${card.gradient} opacity-50`} />
              <div className="relative">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 mb-4">
                  <card.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">{card.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default BentoSection;
