import { Card, CardContent } from "@/components/ui/card";
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
        className={`container transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
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

export default KeyRequirements;
