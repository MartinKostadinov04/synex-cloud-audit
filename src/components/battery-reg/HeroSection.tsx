import { Button } from "@/components/ui/button";
import { ArrowRight, Shield } from "lucide-react";

const HeroSection = () => (
  <section className="py-20 lg:py-28">
    <div className="container">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left: Copy */}
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full bg-accent px-4 py-1.5 text-sm font-medium text-accent-foreground">
            <Shield className="h-4 w-4" />
            EU Battery Regulation
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-[3.25rem] font-extrabold leading-[1.15] tracking-tight text-foreground">
            Navigate Battery Regulation with Confidence
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
            The EU Battery Regulation (2023/1542) introduces comprehensive requirements for all batteries placed on the EU market. We help you understand, plan, and achieve full compliance — without the complexity.
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <Button size="lg" className="gap-2">
              Get Started <ArrowRight className="h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline">
              Learn More
            </Button>
          </div>
        </div>

        {/* Right: Visual */}
        <div className="relative flex justify-center lg:justify-end">
          <div className="relative w-full max-w-md">
            <div className="absolute -inset-4 rounded-2xl bg-primary/5 blur-2xl" />
            <div className="relative rounded-2xl border border-border bg-card p-8 shadow-lg space-y-5">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Shield className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground text-sm">Compliance Status</p>
                  <p className="text-xs text-muted-foreground">EU Battery Regulation 2023/1542</p>
                </div>
              </div>
              <div className="space-y-3">
                {[
                  { label: "Battery Passport", progress: 85 },
                  { label: "Due Diligence", progress: 72 },
                  { label: "Carbon Footprint", progress: 60 },
                  { label: "Recycled Content", progress: 45 },
                ].map((item) => (
                  <div key={item.label} className="space-y-1.5">
                    <div className="flex justify-between text-xs">
                      <span className="text-muted-foreground">{item.label}</span>
                      <span className="font-medium text-foreground">{item.progress}%</span>
                    </div>
                    <div className="h-1.5 rounded-full bg-secondary overflow-hidden">
                      <div
                        className="h-full rounded-full bg-primary transition-all duration-700"
                        style={{ width: `${item.progress}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
