import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const downloads = [
  {
    id: 1,
    coverTitle: "Guide to DPP",
    subtitle: "Digital Product Passports in ESPR",
    date: "April 2025",
    title: "Digital Product Passports in ESPR",
    description:
      "This article provides a comprehensive overview of EU Digital Product Passports, their technical framework, compliance requirements, strategic advantages, and implementation options.",
    downloadUrl: "#",
  },
  {
    id: 2,
    coverTitle: "Guide to DPP",
    subtitle: "Implementation Strategies",
    date: "April 2025",
    title: "DPP Implementation Strategies",
    description:
      "Selecting the optimal implementation strategy for DPP compliance is essential for companies to efficiently balance regulatory obligations, operational costs, and yield benefit from strategic business objectives.",
    downloadUrl: "#",
  },
  {
    id: 3,
    coverTitle: "Guide to EU ESPR",
    subtitle: "European Ecodesign for Sustainable Products Regulation",
    date: "April 2025",
    title: "Guide to EU ESPR",
    description:
      "After reviewing this article, you will know the current state of ESPR's key goals, requirements, and compliance mechanisms. By understanding the regulation's core principles, responsible economic operators can take proactive strategies for upcoming compliance.",
    downloadUrl: "#",
  },
  {
    id: 4,
    coverTitle: "Battery Regulation",
    subtitle: "EU Battery Passport Checklist",
    date: "March 2025",
    title: "EU Battery Passport Checklist",
    description:
      "A comprehensive checklist of every data point required for EU Battery Passports — covering identification, performance, materials, and sustainability metrics for full compliance.",
    downloadUrl: "#",
  },
];

const ResourceDownloadsSection = () => {
  return (
    <section className="py-24 sm:py-32 bg-secondary/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Download our guides
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Gain a comprehensive understanding of EU regulations:
          </p>
        </div>

        {/* Cards grid */}
        <div className="mx-auto mt-16 grid max-w-sm grid-cols-1 gap-8 sm:max-w-none sm:grid-cols-2 lg:grid-cols-3">
          {downloads.map((item) => (
            <div
              key={item.id}
              className="group flex flex-col overflow-hidden rounded-xl bg-card border border-border shadow-sm hover:shadow-lg transition-shadow"
            >
              {/* Document cover preview */}
              <div className="relative mx-6 mt-6 overflow-hidden rounded-lg bg-muted/60">
                <div className="flex aspect-[3/4] max-h-72 items-end">
                  {/* Cover mock */}
                  <div className="relative ml-4 mb-4 flex w-3/5 flex-col justify-between rounded-md bg-foreground p-5 shadow-xl" style={{ aspectRatio: "3/4" }}>
                    {/* Brand mark */}
                    <p className="text-sm font-medium text-primary-foreground/80 tracking-wide">
                      synex
                    </p>
                    {/* Cover title area */}
                    <div>
                      <div className="mb-2 h-px w-10 bg-primary" />
                      <h3 className="text-lg font-bold leading-tight text-primary-foreground">
                        {item.coverTitle}
                      </h3>
                    </div>
                  </div>
                </div>
              </div>

              {/* Text content */}
              <div className="flex flex-1 flex-col p-6 pt-5">
                <p className="text-xs font-medium uppercase tracking-wider text-primary">
                  {item.date}
                </p>
                <h3 className="mt-2 text-lg font-bold text-foreground">
                  {item.title}
                </h3>
                <p className="mt-3 flex-1 text-sm text-muted-foreground leading-relaxed line-clamp-4">
                  {item.description}
                </p>

                {/* Download button */}
                <Button className="mt-6 w-full gap-2" size="lg">
                  <Download className="h-4 w-4" />
                  Download Document
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResourceDownloadsSection;
