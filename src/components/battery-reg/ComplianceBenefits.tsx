import { CheckCircle, ArrowRight } from "lucide-react";
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
        className={`container transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
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

export default ComplianceBenefits;
