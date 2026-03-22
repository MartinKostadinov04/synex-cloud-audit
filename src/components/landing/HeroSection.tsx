import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield } from "lucide-react";
import { cn } from "@/lib/utils";

const HeroSection = ({ className }: { className?: string }) => (
  <div className={cn("relative isolate overflow-hidden bg-background", className)}>
    {/* Grid background */}
    <svg
      aria-hidden="true"
      className="absolute inset-0 -z-10 size-full stroke-border [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
    >
      <defs>
        <pattern id="hero-grid" x="50%" y={-1} width={200} height={200} patternUnits="userSpaceOnUse">
          <path d="M.5 200V.5H200" fill="none" />
        </pattern>
      </defs>
      <svg x="50%" y={-1} className="overflow-visible fill-secondary/40">
        <path d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z" />
      </svg>
      <rect fill="url(#hero-grid)" width="100%" height="100%" strokeWidth={0} />
    </svg>

    {/* Gradient blob */}
    <div
      aria-hidden="true"
      className="absolute left-[calc(50%-4rem)] top-10 -z-10 transform-gpu blur-3xl sm:left-[calc(50%-18rem)] lg:left-48 lg:top-[calc(50%-30rem)] xl:left-[calc(50%-24rem)]"
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

    <div className="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:flex lg:items-center lg:gap-x-10 lg:px-8 lg:py-40">
      {/* Left: Copy */}
      <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl lg:shrink-0 lg:pt-8">
        <div className="inline-flex items-center gap-2 rounded-full bg-accent px-4 py-1.5 text-sm font-medium text-accent-foreground">
          <Shield className="h-4 w-4" />
          EU Compliance
        </div>

        <h1 className="mt-10 text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl lg:text-[3.25rem] leading-[1.15]">
          Navigate EU Regulations with Confidence
        </h1>

        <p className="mt-8 text-lg text-muted-foreground leading-relaxed max-w-lg text-pretty">
          The EU Battery Regulation and ESPR introduce sweeping requirements for manufacturers. We combine expert consulting with purpose-built software to guide you from complexity to compliance — step by step.
        </p>

        <div className="mt-10 flex items-center gap-x-4">
          <Button size="lg" className="gap-2">
            Get Started <ArrowRight className="h-4 w-4" />
          </Button>
          <Button size="lg" variant="outline">
            Learn More
          </Button>
        </div>
      </div>

      {/* Right: Compliance dashboard visual */}
      <div className="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mr-0 lg:mt-0 lg:max-w-none lg:flex-none xl:ml-32">
        <div className="max-w-3xl flex-none sm:max-w-md lg:max-w-sm">
          <div className="relative">
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
  </div>
);

export default HeroSection;
