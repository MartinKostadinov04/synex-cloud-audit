import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
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
        className={`container transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
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

export default ServicesTabsSection;
