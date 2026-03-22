import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

/* ─── Header Variants ─── */

const HeaderVariantA = () => (
  <div className="relative overflow-hidden bg-foreground py-16 sm:py-20">
    {/* Diagonal accent */}
    <div className="absolute inset-0 opacity-10">
      <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-primary" />
      <div className="absolute -left-10 bottom-0 h-60 w-60 rounded-full bg-primary/50" />
    </div>
    <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
      <p className="text-sm font-semibold uppercase tracking-widest text-primary">
        Battery Regulation
      </p>
      <h1 className="mt-3 text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl lg:text-5xl">
        Compliance Services
      </h1>
      <p className="mt-4 max-w-2xl text-base text-primary-foreground/70 leading-relaxed sm:text-lg">
        Navigate the EU Battery Regulation with expert guidance on digital
        passports, labelling, and supply chain compliance.
      </p>
    </div>
  </div>
);

const HeaderVariantB = () => (
  <div className="relative bg-gradient-to-br from-foreground via-foreground to-synex-navy-2 py-16 sm:py-20">
    {/* Geometric pattern */}
    <div className="absolute inset-0 opacity-[0.04]">
      <div className="h-full w-full" style={{
        backgroundImage: "repeating-linear-gradient(45deg, transparent, transparent 40px, white 40px, white 41px)",
      }} />
    </div>
    <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
      <div className="flex items-center gap-3">
        <div className="h-10 w-1 rounded-full bg-primary" />
        <p className="text-sm font-semibold uppercase tracking-widest text-primary">
          Battery Regulation
        </p>
      </div>
      <h1 className="mt-4 text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl lg:text-5xl">
        Compliance Services
      </h1>
      <p className="mt-4 max-w-2xl text-base text-primary-foreground/70 leading-relaxed sm:text-lg">
        Navigate the EU Battery Regulation with expert guidance on digital
        passports, labelling, and supply chain compliance.
      </p>
    </div>
  </div>
);

const HeaderVariantC = () => (
  <div className="relative overflow-hidden border-b border-border bg-secondary/50 py-16 sm:py-20">
    {/* Large faded number */}
    <span className="absolute -right-8 top-1/2 -translate-y-1/2 text-[12rem] font-bold leading-none text-primary/[0.04] select-none sm:text-[16rem]">
      EU
    </span>
    <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
      <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold text-primary">
        <span className="h-1.5 w-1.5 rounded-full bg-primary" />
        Battery Regulation
      </div>
      <h1 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
        Compliance Services
      </h1>
      <p className="mt-4 max-w-2xl text-base text-muted-foreground leading-relaxed sm:text-lg">
        Navigate the EU Battery Regulation with expert guidance on digital
        passports, labelling, and supply chain compliance.
      </p>
    </div>
  </div>
);

const HeaderVariantD = () => (
  <div className="relative overflow-hidden bg-foreground py-16 sm:py-20">
    {/* Orange accent strip */}
    <div className="absolute bottom-0 left-0 right-0 h-1 bg-primary" />
    {/* Dots pattern */}
    <div className="absolute right-0 top-0 h-full w-1/3 opacity-[0.03]">
      <div className="h-full w-full" style={{
        backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
        backgroundSize: "20px 20px",
      }} />
    </div>
    <div className="relative mx-auto max-w-7xl px-6 lg:px-8 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
      <div>
        <p className="text-sm font-semibold uppercase tracking-widest text-primary">
          Battery Regulation
        </p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl lg:text-5xl">
          Compliance Services
        </h1>
      </div>
      <p className="max-w-md text-base text-primary-foreground/60 leading-relaxed sm:text-right">
        Navigate the EU Battery Regulation with expert guidance on digital
        passports, labelling, and supply chain compliance.
      </p>
    </div>
  </div>
);

const HeaderVariantE = () => (
  <div className="relative overflow-hidden bg-gradient-to-r from-foreground to-foreground/95 py-16 sm:py-20">
    {/* Angled shape */}
    <div className="absolute right-0 top-0 h-full w-2/5 bg-primary/10 [clip-path:polygon(30%_0,100%_0,100%_100%,0%_100%)]" />
    <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
      <p className="text-sm font-semibold uppercase tracking-widest text-primary">
        Battery Regulation
      </p>
      <h1 className="mt-3 text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl lg:text-5xl">
        Compliance Services
      </h1>
      <p className="mt-4 max-w-2xl text-base text-primary-foreground/70 leading-relaxed sm:text-lg">
        Navigate the EU Battery Regulation with expert guidance on digital
        passports, labelling, and supply chain compliance.
      </p>
    </div>
  </div>
);

/* ─── Variant Registry ─── */

const variants = [
  { name: "A — Floating circles", component: HeaderVariantA },
  { name: "B — Geometric lines + bar accent", component: HeaderVariantB },
  { name: "C — Light with faded text", component: HeaderVariantC },
  { name: "D — Split layout with bottom accent", component: HeaderVariantD },
  { name: "E — Angled clip shape", component: HeaderVariantE },
];

/* ─── Sample page content ─── */

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

/* ─── Page ─── */

const ExampleHeaders = () => {
  const [index, setIndex] = useState(0);
  const current = variants[index];
  const CurrentHeader = current.component;

  const prev = () => setIndex((i) => (i === 0 ? variants.length - 1 : i - 1));
  const next = () => setIndex((i) => (i === variants.length - 1 ? 0 : i + 1));

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />

      <main className="flex-1">
        {/* Navigation bar */}
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

        {/* Active header */}
        <CurrentHeader />

        {/* Sample content below */}
        <SampleContent />
      </main>

      <Footer />
    </div>
  );
};

export default ExampleHeaders;
