import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/landing/HeroSection";
import FeaturesSection from "@/components/landing/FeaturesSection";
import BentoSection from "@/components/landing/BentoSection";
import LogoCloudSection from "@/components/landing/LogoCloudSection";
import ContactSection from "@/components/contact/ContactSection";

type Strategy = "A" | "B" | "C" | "D" | "E" | "F";

const strategies: { key: Strategy; label: string; description: string }[] = [
  { key: "A", label: "Flat White", description: "No background treatment — pure white everywhere. Clean but can feel sterile." },
  { key: "B", label: "Alternating Bands", description: "Classic white ↔ muted zebra striping. Separates sections visually." },
  { key: "C", label: "Gradient Shifts", description: "Each section subtly shifts hue — white → warm cream → cool grey → white. Organic flow." },
  { key: "D", label: "Pattern + Gradient", description: "Dot pattern overlay with diagonal gradient. Adds texture and depth without imagery." },
  { key: "E", label: "Brand Warm Wash", description: "Subtle orange glow radiates from hero downward, fading to white. Branded but soft." },
  { key: "F", label: "Navy Bookends", description: "Dark navy hero + footer with light middle sections. Creates strong visual anchoring." },
];

const BackgroundIdeation = () => {
  const [active, setActive] = useState<Strategy>("B");

  // Returns a Tailwind bg class for each section based on strategy
  const bgClass = (index: number): string => {
    switch (active) {
      case "A":
        return "bg-background";
      case "B":
        return index % 2 === 0 ? "bg-background" : "bg-muted";
      case "C": {
        const classes = [
          "bg-background",
          "bg-gradient-to-b from-background to-accent/40",
          "bg-gradient-to-b from-accent/40 to-muted",
          "bg-gradient-to-b from-muted to-secondary",
          "bg-gradient-to-b from-secondary to-background",
        ];
        return classes[index % classes.length];
      }
      case "D":
        return "bg-background";
      case "E":
        return "bg-background";
      case "F":
        return index === 0 ? "bg-background" : index % 2 === 0 ? "bg-background" : "bg-muted";
    }
  };

  // Dot pattern inline style for strategy D
  const dotOverlay = (
    <div
      className="absolute inset-0 pointer-events-none opacity-[0.3]"
      style={{
        backgroundImage: "radial-gradient(hsl(var(--foreground) / 0.06) 1px, transparent 1px)",
        backgroundSize: "24px 24px",
      }}
    />
  );

  // Warm glow overlay for strategy E
  const warmOverlay = (index: number) => {
    const opacities = [0.08, 0.05, 0.03, 0.02, 0.01];
    return (
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `linear-gradient(180deg, hsl(var(--synex-orange) / ${opacities[index] ?? 0.01}), transparent)`,
        }}
      />
    );
  };

  // Wrapper that adds strategy-specific overlays
  const Wrap = ({ children, index }: { children: React.ReactNode; index: number }) => {
    if (active === "D") {
      return <div className="relative overflow-hidden">{dotOverlay}{children}</div>;
    }
    if (active === "E") {
      return <div className="relative overflow-hidden">{warmOverlay(index)}{children}</div>;
    }
    return <>{children}</>;
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Sticky switcher */}
      <div className="sticky top-16 z-40 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
        <div className="container py-3">
          <div className="flex items-center gap-3 overflow-x-auto pb-1">
            <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider shrink-0">BG:</span>
            {strategies.map((s) => (
              <button
                key={s.key}
                onClick={() => setActive(s.key)}
                className={`shrink-0 rounded-full px-4 py-1.5 text-xs font-medium transition-colors ${
                  active === s.key
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-foreground hover:bg-secondary/80"
                }`}
              >
                {s.key}. {s.label}
              </button>
            ))}
          </div>
          <p className="mt-1 text-xs text-muted-foreground">
            {strategies.find((s) => s.key === active)?.description}
          </p>
        </div>
      </div>

      <main className="flex-1">
        <Wrap index={0}>
          <HeroSection className={bgClass(0)} />
        </Wrap>

        <Wrap index={1}>
          <LogoCloudSection className={bgClass(1)} />
        </Wrap>

        <Wrap index={2}>
          <FeaturesSection className={bgClass(2)} />
        </Wrap>

        <Wrap index={3}>
          <BentoSection className={bgClass(3)} />
        </Wrap>

        <Wrap index={4}>
          <ContactSection className={bgClass(4)} />
        </Wrap>
      </main>

      <Footer />
    </div>
  );
};

export default BackgroundIdeation;
