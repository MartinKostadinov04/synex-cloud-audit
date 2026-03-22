import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  RotateCcw,
  ArrowUp,
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  Maximize2,
  MousePointer,
  Layers,
  Sparkles,
  Clock,
  Zap,
} from "lucide-react";

/* ─── Replay helper ─── */
const useReplay = () => {
  const [key, setKey] = useState(0);
  return { key, replay: () => setKey((k) => k + 1) };
};

/* ─── Scroll-triggered observer ─── */
const useInView = (threshold = 0.3) => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);

  return { ref, visible };
};

/* ─── Demo card wrapper ─── */
const DemoCard = ({
  title,
  className,
  children,
  onReplay,
}: {
  title: string;
  className?: string;
  children: React.ReactNode;
  onReplay?: () => void;
}) => (
  <div className={`rounded-lg border border-border bg-card p-6 ${className ?? ""}`}>
    <div className="flex items-center justify-between mb-4">
      <h3 className="text-sm font-semibold text-foreground">{title}</h3>
      {onReplay && (
        <Button variant="ghost" size="icon" className="h-7 w-7" onClick={onReplay}>
          <RotateCcw className="h-3.5 w-3.5" />
        </Button>
      )}
    </div>
    <div className="min-h-[120px] flex items-center justify-center">{children}</div>
  </div>
);

/* ─── Section header ─── */
const SectionHeader = ({
  icon: Icon,
  title,
  description,
}: {
  icon: React.ElementType;
  title: string;
  description: string;
}) => (
  <div className="mb-8">
    <div className="flex items-center gap-2 mb-2">
      <Icon className="h-5 w-5 text-primary" />
      <h2 className="text-2xl font-bold text-foreground">{title}</h2>
    </div>
    <p className="text-muted-foreground">{description}</p>
  </div>
);

/* ─── Animated box ─── */
const Box = ({ className }: { className?: string }) => (
  <div
    className={`h-16 w-16 rounded-lg bg-primary/90 text-primary-foreground flex items-center justify-center text-xs font-medium ${className ?? ""}`}
  />
);

/* ─── Code label ─── */
const Code = ({ children }: { children: string }) => (
  <code className="mt-3 block text-xs text-muted-foreground bg-muted px-3 py-1.5 rounded-md font-mono">
    {children}
  </code>
);

/* ═══════════════════════════════════════════════════ */

const AnimationsDemo = () => {
  const fadeIn = useReplay();
  const fadeInUp = useReplay();
  const fadeInDown = useReplay();
  const fadeInLeft = useReplay();
  const fadeInRight = useReplay();
  const scaleIn = useReplay();
  const enterCombo = useReplay();

  // For stagger demo
  const stagger = useReplay();

  // Scroll-triggered demo
  const scrollDemo = useInView(0.2);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-1">
        {/* Hero */}
        <section className="py-16 bg-secondary/40 border-b border-border">
          <div className="container max-w-4xl">
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
              Animation System
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
              A structured, restrained animation library designed to add life without breaking flow.
              Every animation uses <code className="text-sm bg-muted px-1.5 py-0.5 rounded">ease-out</code> timing
              and stays under 500ms for UI, 700ms for scroll reveals.
            </p>
          </div>
        </section>

        {/* ─── 1. Fade Animations ─── */}
        <section className="py-16 container max-w-5xl">
          <SectionHeader
            icon={Sparkles}
            title="Fade Animations"
            description="Directional fades for entrances. Use fade-in for general reveals, directional variants for layout-aware reveals."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <DemoCard title="fade-in" onReplay={fadeIn.replay}>
              <div key={fadeIn.key}>
                <Box className="animate-fade-in" />
              </div>
              <Code>animate-fade-in</Code>
            </DemoCard>

            <DemoCard title="fade-in-up" onReplay={fadeInUp.replay}>
              <div key={fadeInUp.key}>
                <Box className="animate-fade-in-up" />
              </div>
              <Code>animate-fade-in-up</Code>
            </DemoCard>

            <DemoCard title="fade-in-down" onReplay={fadeInDown.replay}>
              <div key={fadeInDown.key}>
                <Box className="animate-fade-in-down" />
              </div>
              <Code>animate-fade-in-down</Code>
            </DemoCard>

            <DemoCard title="fade-in-left" onReplay={fadeInLeft.replay}>
              <div key={fadeInLeft.key}>
                <Box className="animate-fade-in-left" />
              </div>
              <Code>animate-fade-in-left</Code>
            </DemoCard>

            <DemoCard title="fade-in-right" onReplay={fadeInRight.replay}>
              <div key={fadeInRight.key}>
                <Box className="animate-fade-in-right" />
              </div>
              <Code>animate-fade-in-right</Code>
            </DemoCard>

            <DemoCard title="fade-out" onReplay={() => {}}>
              <div className="text-sm text-muted-foreground text-center">
                Mirror of fade-in — use for exit transitions
              </div>
              <Code>animate-fade-out</Code>
            </DemoCard>
          </div>
        </section>

        {/* ─── 2. Scale ─── */}
        <section className="py-16 bg-secondary/40 container max-w-5xl">
          <SectionHeader
            icon={Maximize2}
            title="Scale Animations"
            description="Subtle scale transitions for modals, tooltips, and combined entrances."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <DemoCard title="scale-in" onReplay={scaleIn.replay}>
              <div key={scaleIn.key}>
                <Box className="animate-scale-in" />
              </div>
              <Code>animate-scale-in</Code>
            </DemoCard>

            <DemoCard title="enter (fade + scale)" onReplay={enterCombo.replay}>
              <div key={enterCombo.key}>
                <Box className="animate-enter" />
              </div>
              <Code>animate-enter</Code>
            </DemoCard>

            <DemoCard title="exit (fade + scale)" onReplay={() => {}}>
              <div className="text-sm text-muted-foreground text-center">
                Combined exit — fade-out + scale-out
              </div>
              <Code>animate-exit</Code>
            </DemoCard>
          </div>
        </section>

        {/* ─── 3. Slide ─── */}
        <section className="py-16 container max-w-5xl">
          <SectionHeader
            icon={ArrowRight}
            title="Slide Animations"
            description="Full-distance slides for drawers, sheets, and off-canvas panels."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <DemoCard title="slide-in-right" onReplay={() => {}}>
              <div className="text-sm text-muted-foreground text-center">
                Used by Sheet/Drawer — slides from right edge
              </div>
              <Code>animate-slide-in-right</Code>
            </DemoCard>

            <DemoCard title="slide-in-left" onReplay={() => {}}>
              <div className="text-sm text-muted-foreground text-center">
                Reverse slide — from left edge
              </div>
              <Code>animate-slide-in-left</Code>
            </DemoCard>
          </div>
        </section>

        {/* ─── 4. Continuous / Ambient ─── */}
        <section className="py-16 bg-secondary/40 container max-w-5xl">
          <SectionHeader
            icon={Clock}
            title="Continuous Animations"
            description="Looping ambient animations for decorative elements. Use sparingly — max 1-2 per viewport."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <DemoCard title="float">
              <Box className="animate-float" />
              <Code>animate-float</Code>
            </DemoCard>

            <DemoCard title="pulse-soft">
              <Box className="animate-pulse-soft" />
              <Code>animate-pulse-soft</Code>
            </DemoCard>

            <DemoCard title="shimmer (loading)">
              <div className="h-16 w-full rounded-lg bg-shimmer animate-shimmer" />
              <Code>bg-shimmer animate-shimmer</Code>
            </DemoCard>
          </div>
        </section>

        {/* ─── 5. Interactive / Hover ─── */}
        <section className="py-16 container max-w-5xl">
          <SectionHeader
            icon={MousePointer}
            title="Interactive Effects"
            description="Hover and interaction animations. These are CSS utility classes, not keyframe animations."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <DemoCard title="hover-scale">
              <Card className="hover-scale cursor-pointer w-full max-w-[200px]">
                <CardContent className="p-4 text-center">
                  <p className="text-sm font-medium text-foreground">Hover me</p>
                  <p className="text-xs text-muted-foreground mt-1">scale to 1.05</p>
                </CardContent>
              </Card>
              <Code>.hover-scale</Code>
            </DemoCard>

            <DemoCard title="hover-lift">
              <Card className="hover-lift cursor-pointer w-full max-w-[200px]">
                <CardContent className="p-4 text-center">
                  <p className="text-sm font-medium text-foreground">Hover me</p>
                  <p className="text-xs text-muted-foreground mt-1">lift + shadow</p>
                </CardContent>
              </Card>
              <Code>.hover-lift</Code>
            </DemoCard>

            <DemoCard title="story-link">
              <div className="story-link">
                <a href="#" className="text-primary font-medium" onClick={(e) => e.preventDefault()}>
                  Hover for underline slide
                </a>
              </div>
              <Code>.story-link &gt; *</Code>
            </DemoCard>
          </div>
        </section>

        {/* ─── 6. Stagger Pattern ─── */}
        <section className="py-16 bg-secondary/40 container max-w-5xl">
          <SectionHeader
            icon={Layers}
            title="Stagger Pattern"
            description="Sequential reveals using animation-delay utilities. Apply opacity-0 initially and animate-fade-in-up with stagger-N classes."
          />

          <DemoCard title="Staggered cards" onReplay={stagger.replay} className="max-w-3xl">
            <div key={stagger.key} className="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full">
              {[1, 2, 3, 4].map((n) => (
                <Card
                  key={n}
                  className={`opacity-0 animate-fade-in-up stagger-${n}`}
                >
                  <CardContent className="p-4 text-center">
                    <div className="text-2xl font-bold text-primary mb-1">{n}</div>
                    <p className="text-xs text-muted-foreground">stagger-{n}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <Code>{`opacity-0 animate-fade-in-up stagger-{1-6}`}</Code>
          </DemoCard>
        </section>

        {/* ─── 7. Scroll-triggered ─── */}
        <section className="py-16 container max-w-5xl">
          <SectionHeader
            icon={Zap}
            title="Scroll-Triggered Reveals"
            description="Use the useScrollFade() hook or IntersectionObserver to trigger animations on scroll. This is the primary pattern for section entrances."
          />

          <div className="rounded-lg border border-border bg-muted/30 p-8">
            <p className="text-sm text-muted-foreground mb-6 text-center">
              Scroll down to trigger the reveal ↓
            </p>
            <div className="h-32" />
            <div
              ref={scrollDemo.ref}
              className={`transition-all duration-700 ${
                scrollDemo.visible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              }`}
            >
              <Card className="max-w-md mx-auto">
                <CardContent className="p-6 text-center">
                  <div className="h-3 w-3 rounded-full bg-primary mx-auto mb-4 animate-pulse-soft" />
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    I appeared on scroll
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Uses <code className="bg-muted px-1 rounded text-xs">useScrollFade()</code> hook
                    with transition-all duration-700
                  </p>
                </CardContent>
              </Card>
            </div>
            <div className="h-16" />
          </div>
        </section>

        {/* ─── Rules Reference ─── */}
        <section className="py-16 bg-secondary/40">
          <div className="container max-w-3xl">
            <SectionHeader
              icon={Zap}
              title="Animation Rules"
              description="Guidelines for consistent, non-disruptive motion."
            />

            <div className="space-y-4">
              {[
                {
                  rule: "Duration limits",
                  detail: "UI interactions ≤ 300ms. Scroll reveals ≤ 700ms. Continuous loops ≥ 2s.",
                },
                {
                  rule: "Easing",
                  detail: "Always ease-out for entrances. ease-in-out for loops. Never linear except shimmer.",
                },
                {
                  rule: "Max per viewport",
                  detail: "≤ 2 continuous animations visible at once. Stagger groups count as 1.",
                },
                {
                  rule: "Respect prefers-reduced-motion",
                  detail: "All animations should gracefully degrade. Tailwind's motion-safe: prefix handles this.",
                },
                {
                  rule: "No parallax or bounce",
                  detail: "These conflict with the professional B2B tone. Stick to translate + opacity + scale.",
                },
                {
                  rule: "Scroll reveals fire once",
                  detail: "Use IntersectionObserver with a one-shot pattern — don't re-animate on scroll back up.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex gap-4 p-4 rounded-lg border border-border bg-card"
                >
                  <div className="h-2 w-2 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-foreground">{item.rule}</p>
                    <p className="text-sm text-muted-foreground mt-0.5">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AnimationsDemo;
