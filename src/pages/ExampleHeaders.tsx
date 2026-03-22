import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  PageHeaderWatermark,
  PageHeaderCloudTrail,
  PageHeaderHeroGrid,
  PageHeaderAccentBar,
} from "@/components/ui/page-headers";

const sampleProps = {
  tag: "Battery Regulation",
  title: "Compliance Services",
  description:
    "Navigate the EU Battery Regulation with expert guidance on digital passports, labelling, and supply chain compliance.",
};

const variants = [
  { name: "C1 — Faded watermark", render: () => <PageHeaderWatermark {...sampleProps} /> },
  { name: "C2 — Cloud trail blob", render: () => <PageHeaderCloudTrail {...sampleProps} /> },
  { name: "C3 — Hero grid background", render: () => <PageHeaderHeroGrid {...sampleProps} /> },
  { name: "C4 — Orange left border accent", render: () => <PageHeaderAccentBar {...sampleProps} /> },
];

const SampleContent = () => (
  <section className="py-16 sm:py-20">
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <div className="grid gap-8 lg:grid-cols-3">
        {[1, 2, 3].map((i) => (
          <div key={i} className="rounded-xl border border-border bg-card p-6 shadow-sm">
            <div className="h-3 w-20 rounded bg-primary/20" />
            <div className="mt-4 space-y-2">
              <div className="h-3 w-full rounded bg-muted" />
              <div className="h-3 w-4/5 rounded bg-muted" />
              <div className="h-3 w-3/5 rounded bg-muted" />
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const ExampleHeaders = () => {
  const [index, setIndex] = useState(0);
  const current = variants[index];

  const prev = () => setIndex((i) => (i === 0 ? variants.length - 1 : i - 1));
  const next = () => setIndex((i) => (i === variants.length - 1 ? 0 : i + 1));

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-1">
        <div className="sticky top-16 z-40 flex items-center justify-between border-b border-border bg-card/95 backdrop-blur px-6 py-3">
          <Button variant="ghost" size="icon" onClick={prev}>
            <ChevronLeft className="h-5 w-5" />
          </Button>
          <div className="text-center">
            <p className="text-xs text-muted-foreground">
              Variant {index + 1} / {variants.length}
            </p>
            <p className="text-sm font-semibold text-foreground">{current.name}</p>
          </div>
          <Button variant="ghost" size="icon" onClick={next}>
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>
        {current.render()}
        <SampleContent />
      </main>
      <Footer />
    </div>
  );
};

export default ExampleHeaders;
