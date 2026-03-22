import { Link } from "react-router-dom";
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
