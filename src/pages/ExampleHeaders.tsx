import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

/* ─── Variant C1 — Original: faded watermark text ─── */

const HeaderC1 = () => (
  <div className="relative overflow-hidden border-b border-border bg-secondary/50 py-16 sm:py-20">
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

/* ─── Variant C2 — Gradient blob from hero (cloud trail) ─── */

const HeaderC2 = () => (
  <div className="relative isolate overflow-hidden border-b border-border bg-secondary/50 py-16 sm:py-20">
    {/* Cloud trail blob — same as landing hero */}
    <div
      aria-hidden="true"
      className="absolute left-[calc(50%-4rem)] top-10 -z-10 transform-gpu blur-3xl sm:left-[calc(50%-18rem)] lg:left-48 lg:top-[calc(50%-15rem)] xl:left-[calc(50%-24rem)]"
    >
      <div
        className="aspect-[1108/632] w-[69.25rem] opacity-20"
        style={{
          background: "linear-gradient(to top right, hsl(var(--synex-orange-light)), hsl(var(--synex-orange)))",
          clipPath:
            "polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)",
        }}
      />
    </div>
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

/* ─── Variant C3 — Subtle grid pattern behind ─── */

const HeaderC3 = () => (
  <div className="relative overflow-hidden border-b border-border bg-secondary/50 py-16 sm:py-20">
    {/* Grid pattern via CSS */}
    <div
      aria-hidden="true"
      className="absolute inset-0 -z-10 opacity-[0.4]"
      style={{
        backgroundImage:
          "linear-gradient(hsl(var(--border)) 1px, transparent 1px), linear-gradient(to right, hsl(var(--border)) 1px, transparent 1px)",
        backgroundSize: "80px 80px",
      }}
    />
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

/* ─── Variant C4 — Orange left border accent ─── */

const HeaderC4 = () => (
  <div className="relative overflow-hidden border-b border-border bg-secondary/50 py-16 sm:py-20">
    {/* Left accent bar */}
    <div className="absolute left-0 top-0 h-full w-1 bg-primary" />
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

/* ─── Variant C5 — Dot pattern + cloud trail combined ─── */

const HeaderC5 = () => (
  <div className="relative isolate overflow-hidden border-b border-border bg-secondary/50 py-16 sm:py-20">
    {/* Dot pattern */}
    <div className="absolute inset-0 -z-10 opacity-[0.35]" style={{
      backgroundImage: "radial-gradient(hsl(var(--border)) 1px, transparent 1px)",
      backgroundSize: "24px 24px",
    }} />
    {/* Cloud trail blob */}
    <div
      aria-hidden="true"
      className="absolute right-0 top-0 -z-10 transform-gpu blur-3xl"
    >
      <div
        className="aspect-[1108/632] w-[50rem] opacity-15"
        style={{
          background: "linear-gradient(to top right, hsl(var(--synex-orange-light)), hsl(var(--synex-orange)))",
          clipPath:
            "polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)",
        }}
      />
    </div>
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

/* ─── Registry ─── */

const variants = [
  { name: "C1 — Faded watermark (original)", component: HeaderC1 },
  { name: "C2 — Cloud trail blob from hero", component: HeaderC2 },
  { name: "C3 — Grid pattern background", component: HeaderC3 },
  { name: "C4 — Orange left border accent", component: HeaderC4 },
  { name: "C5 — Dot pattern + cloud trail", component: HeaderC5 },
];

/* ─── Sample content ─── */

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

        {/* Sample content */}
        <SampleContent />
      </main>

      <Footer />
    </div>
  );
};

export default ExampleHeaders;
