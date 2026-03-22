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
  { key: "B", label: "Alternating Bands", description: "Classic white ↔ secondary/muted zebra striping. Separates sections visually." },
  { key: "C", label: "Gradient Shifts", description: "Each section subtly shifts hue — white → warm cream → cool grey → white. Organic flow." },
  { key: "D", label: "Pattern + Gradient", description: "Dot pattern overlay with diagonal gradient. Adds texture and depth without imagery." },
  { key: "E", label: "Brand Warm Wash", description: "Subtle orange glow radiates from hero downward, fading to white. Branded but soft." },
  { key: "F", label: "Navy Bookends", description: "Dark navy hero + footer with light middle sections. Creates strong visual anchoring." },
];

const dotStyle: React.CSSProperties = {
  backgroundImage: "radial-gradient(hsl(var(--foreground) / 0.06) 1px, transparent 1px)",
  backgroundSize: "24px 24px",
};

const BackgroundIdeation = () => {
  const [active, setActive] = useState<Strategy>("B");

  // Section background inline styles by strategy
  const sectionStyle = (index: number): React.CSSProperties => {
    switch (active) {
      case "A":
        return { backgroundColor: "hsl(var(--background))" };
      case "B":
        return index % 2 === 0
          ? { backgroundColor: "hsl(var(--background))" }
          : { backgroundColor: "hsl(var(--secondary) / 0.5)" };
      case "C": {
        const from = [
          "hsl(var(--background))",
          "hsl(var(--accent) / 0.25)",
          "hsl(var(--secondary) / 0.5)",
          "hsl(var(--muted) / 0.3)",
          "hsl(var(--background))",
        ];
        const to = [
          "hsl(var(--accent) / 0.25)",
          "hsl(var(--secondary) / 0.5)",
          "hsl(var(--muted) / 0.3)",
          "hsl(var(--background))",
          "hsl(var(--accent) / 0.2)",
        ];
        return {
          background: `linear-gradient(180deg, ${from[index % 5]}, ${to[index % 5]})`,
        };
      }
      case "D":
        return { backgroundColor: "hsl(var(--background))" };
      case "E": {
        const opacities = [0.07, 0.04, 0.03, 0.02, 0.01];
        return {
          background: `linear-gradient(180deg, hsl(var(--synex-orange) / ${opacities[index] ?? 0.01}), hsl(var(--background)))`,
        };
      }
      case "F":
        if (index === 0) return { backgroundColor: "hsl(var(--synex-navy-1))" };
        return index % 2 === 0
          ? { backgroundColor: "hsl(var(--background))" }
          : { backgroundColor: "hsl(var(--secondary) / 0.3)" };
    }
  };

  // Extra overlay for strategy D
  const renderDotOverlay = () =>
    active === "D" ? (
      <div className="absolute inset-0 pointer-events-none opacity-[0.3]" style={dotStyle} />
    ) : null;

  // Navy text overrides for F hero
  const navyTextClass =
    "[&_h1]:!text-white [&_p]:!text-white/70 [&_span]:!text-white/80 [&_.text-foreground]:!text-white [&_.text-muted-foreground]:!text-white/60 [&_.bg-accent]:!bg-white/10 [&_.bg-card]:!bg-white/5 [&_.border-border]:!border-white/10 [&_.bg-secondary]:!bg-white/10 [&_.bg-primary\\/10]:!bg-primary/20 [&_.bg-primary\\/5]:!bg-primary/10";

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Sticky switcher bar */}
      <div className="sticky top-16 z-40 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
        <div className="container py-3">
          <div className="flex items-center gap-3 overflow-x-auto pb-1">
            <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider shrink-0">
              BG:
            </span>
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
        {/* 0: Hero */}
        <div
          className={`relative overflow-hidden ${active === "F" ? navyTextClass : ""}`}
          style={sectionStyle(0)}
        >
          {renderDotOverlay()}
          <HeroSection />
        </div>

        {/* 1: Logo Cloud */}
        <div className="relative overflow-hidden" style={sectionStyle(1)}>
          {renderDotOverlay()}
          <LogoCloudSection />
        </div>

        {/* 2: Features — already has its own gradient bg, override it for non-D modes */}
        <div className="relative overflow-hidden" style={sectionStyle(2)}>
          {renderDotOverlay()}
          <FeaturesSection />
        </div>

        {/* 3: Bento */}
        <div className="relative overflow-hidden" style={sectionStyle(3)}>
          {renderDotOverlay()}
          <BentoSection />
        </div>

        {/* 4: Contact */}
        <div className="relative overflow-hidden" style={sectionStyle(4)}>
          {renderDotOverlay()}
          <ContactSection />
        </div>
      </main>

      {/* Footer */}
      {active === "F" ? (
        <div
          className={navyTextClass}
          style={{ backgroundColor: "hsl(var(--synex-navy-1))" }}
        >
          <Footer />
        </div>
      ) : (
        <Footer />
      )}
    </div>
  );
};

export default BackgroundIdeation;
