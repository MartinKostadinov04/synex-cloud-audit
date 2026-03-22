import { Settings, ShoppingCart, Users, Landmark } from "lucide-react";

const stakeholders = [
  {
    icon: Settings,
    title: "Manufacturers",
    description:
      "Are responsible for collecting necessary information and assembling the dbp.",
  },
  {
    icon: ShoppingCart,
    title: "Customers",
    description:
      "Use the dbp to take informed purchase decisions and learn how to handle the product.",
  },
  {
    icon: Users,
    title: "Other Stakeholders",
    description:
      "Relevant stakeholders benefits form centralized access appropriate levels of information.",
  },
  {
    icon: Landmark,
    title: "Governments",
    description:
      "Establish the dbp requirements and infrastructure and use it as an access point of compliance surveillance.",
  },
];

const BatteryPassportOverview = () => {
  return (
    <section className="py-24 sm:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-base font-semibold text-primary">General Overview</p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            The Battery Passport as a Digital Product Passport
          </h2>
          <p className="mt-6 text-base text-muted-foreground leading-relaxed sm:text-lg">
            Battery passports are a form of Digital Product Passport, outlined
            in the new 2023 Battery regulation. They are facilitators of
            compliance reporting and supply chain traceability, as well as a
            digital archive of information for end consumers and vendors.
          </p>
        </div>

        {/* Lifecycle diagram placeholder */}
        <div className="mx-auto mt-16 max-w-4xl">
          <div className="flex aspect-[16/9] items-center justify-center rounded-2xl border-2 border-dashed border-border bg-muted/30">
            <p className="text-sm font-medium text-muted-foreground">
              Lifecycle diagram placeholder
            </p>
          </div>
        </div>

        {/* Stakeholder cards */}
        <div className="mx-auto mt-20 grid max-w-sm grid-cols-1 gap-8 sm:max-w-none sm:grid-cols-2 lg:grid-cols-4">
          {stakeholders.map((s) => (
            <div key={s.title} className="flex flex-col items-center text-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                <s.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-lg font-bold text-foreground">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                {s.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BatteryPassportOverview;
