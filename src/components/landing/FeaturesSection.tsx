import { Map, Database, Link2, Leaf } from "lucide-react";

const features = [
  {
    name: "Compliance Roadmaps",
    description:
      "End-to-end compliance roadmap tailored to your battery type and target market. Know exactly what's required, when it's due, and how to get there.",
    icon: Map,
  },
  {
    name: "Automated Data Collection",
    description:
      "Streamline data gathering for Battery Passport requirements. Our platform pulls, validates, and organises the information you need — automatically.",
    icon: Database,
  },
  {
    name: "Supply Chain Due Diligence",
    description:
      "Manage upstream due diligence obligations with structured workflows, supplier questionnaires, and audit-ready documentation.",
    icon: Link2,
  },
  {
    name: "Carbon Footprint Calculation",
    description:
      "Calculate your battery's carbon footprint aligned with the EU's approved methodology. Transparent, auditable, and regulation-ready.",
    icon: Leaf,
  },
];

const FeaturesSection = () => (
  <section className="py-24 sm:py-32 bg-background">
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <div className="mx-auto max-w-2xl lg:text-center">
        <p className="text-base font-semibold text-primary">Why Synex</p>
        <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-pretty">
          Forget about compliance complexity
        </h2>
        <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
          Battery regulation compliance doesn't have to be overwhelming. Our structured approach breaks down every requirement into clear, manageable steps.
        </p>
      </div>

      <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
        <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
          {features.map((feature) => (
            <div key={feature.name} className="relative pl-16">
              <dt className="text-base font-semibold text-foreground">
                <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                  <feature.icon aria-hidden="true" className="h-6 w-6 text-primary-foreground" />
                </div>
                {feature.name}
              </dt>
              <dd className="mt-2 text-base text-muted-foreground leading-relaxed">
                {feature.description}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  </section>
);

export default FeaturesSection;
