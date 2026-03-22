import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useScrollFade } from "@/hooks/use-scroll-fade";

export interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  title?: string;
  subtitle?: string;
  faqs: FAQItem[];
  className?: string;
}

const FAQSection = ({
  title = "Frequently asked questions",
  subtitle,
  faqs,
  className,
}: FAQSectionProps) => {
  const { ref, isVisible } = useScrollFade();

  return (
    <section ref={ref} className={`py-20 bg-background ${className ?? ""}`}>
      <div
        className={`container max-w-3xl transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            {title}
          </h2>
          {subtitle && (
            <p className="text-muted-foreground leading-relaxed max-w-xl mx-auto">
              {subtitle}
            </p>
          )}
        </div>

        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`faq-${index}`}
              className="border border-border rounded-lg px-6 bg-card data-[state=open]:shadow-sm transition-shadow"
            >
              <AccordionTrigger className="text-left text-foreground font-medium hover:no-underline py-5">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
