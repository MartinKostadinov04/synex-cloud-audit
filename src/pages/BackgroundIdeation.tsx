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

/**
 * Wraps a section component with a background treatment.
 * Uses a CSS trick: the wrapper sets the bg, and we force any direct bg-background
 * on the child to become transparent so the wrapper shows through.
 */
const BgWrap = ({
  children,
  className = "",
  style,
}: {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}) => (
  <div
    className={`relative ${className}`}
    style={style}
  >
    {/* Force child section bg-background to be transparent */}
    <div className="[&_>section]:!bg-transparent [&_>div]:!bg-transparent [&_.bg-background]:!bg-transparent">
      {children}
    </div>
  </div>
);

const BackgroundIdeation = () => {
  const [active, setActive] = useState<Strategy>("B");

  // Background classes per section index
  const getBg = (index: number) => {
    switch (active) {
      case "A":
        return "bg-background";
      case "B":
        return index % 2 === 0 ? "bg-background" : "bg-secondary/50";
      case "C": {
        const shifts = [
          "bg-background",
          "bg-gradient-to-b from-background to-accent/30",
          "bg-gradient-to-b from-accent/30 to-secondary/60",
          "bg-gradient-to-b from-secondary/60 to-muted/40",
          "bg-gradient-to-b from-muted/40 to-background",
        ];
        return shifts[index % shifts.length];
      }
      case "D":
        return "";
      case "E":
        return "";
      case "F":
        return index % 2 === 0 ? "bg-background" : "bg-secondary/30";
    }
  };

  // Dot pattern style
  const dotStyle: React.CSSProperties = {
    backgroundImage: "radial-gradient(hsl(var(--foreground) / 0.06) 1px, transparent 1px)",
    backgroundSize: "24px 24px",
  };

  const renderSection = (component: React.ReactNode, index: number) => {
    if (active === "D") {
      const gradients = [
        "from-muted/50 via-background to-accent/20",
        "from-accent/20 to-secondary/40",
        "from-secondary/40 via-background to-primary/5",
        "from-primary/5 via-accent/15 to-secondary/50",
        "from-muted/40 via-background to-primary/5",
      ];
      return (
        <BgWrap className="bg-background">
          <div className="absolute inset-0 -z-10 opacity-[0.3]" style={dotStyle} />
          <div className={`absolute inset-0 -z-10 bg-gradient-to-br ${gradients[index % gradients.length]}`} />
          {component}
        </BgWrap>
      );
    }

    if (active === "E") {
      const opacities = ["0.07", "0.04", "0.03", "0.02", "0.01"];
      return (
        <BgWrap className="bg-background">
          <div
            className="absolute inset-0 -z-10"
            style={{
              background: `linear-gradient(180deg, hsl(var(--synex-orange) / ${opacities[index] ?? "0.01"}) 0%, transparent 100%)`,
            }}
          />
          {component}
        </BgWrap>
      );
    }

    if (active === "F" && index === 0) {
      return (
        <div className="bg-[hsl(var(--synex-navy-1))]">
          <div className="[&_section]:!bg-transparent [&_>div]:!bg-transparent [&_.bg-background]:!bg-transparent [&_h1]:!text-white [&_.text-foreground]:!text-white [&_.text-muted-foreground]:!text-white/70 [&_.bg-accent]:!bg-white/10 [&_.bg-card]:!bg-white/5 [&_.border-border]:!border-white/10 [&_.bg-secondary]:!bg-white/10 [&_.bg-primary\\/10]:!bg-primary/20 [&_.bg-primary\\/5]:!bg-primary/10">
            {component}
          </div>
        </div>
      );
    }

    return <BgWrap className={getBg(index)}>{component}</BgWrap>;
  };

  const sections = [
    <HeroSection key="hero" />,
    <LogoCloudSection key="logos" />,
    <FeaturesSection key="features" />,
    <BentoSection key="bento" />,
    <ContactSection key="contact" />,
  ];

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
        {sections.map((section, i) => (
          <div key={i}>{renderSection(section, i)}</div>
        ))}
      </main>

      {/* Footer — navy for F */}
      {active === "F" ? (
        <div className="bg-[hsl(var(--synex-navy-1))] [&_footer]:!bg-transparent [&_footer]:!border-white/10 [&_.text-foreground]:!text-white [&_.text-muted-foreground]:!text-white/60 [&_.border-border]:!border-white/10 [&_a]:!text-white/60 hover:[&_a]:!text-white [&_input]:!bg-white/5 [&_input]:!border-white/10 [&_input]:!text-white">
          <Footer />
        </div>
      ) : (
        <Footer />
      )}
    </div>
  );
};

export default BackgroundIdeation;
