import { ReactNode } from "react";

interface PageHeaderProps {
  tag: string;
  title: string;
  description?: string;
}

// C1 — Faded watermark text
export const PageHeaderWatermark = ({ tag, title, description }: PageHeaderProps) => (
  <div className="relative overflow-hidden border-b border-border bg-secondary/50 py-16 sm:py-20">
    <span className="hidden sm:block absolute -right-8 top-1/2 -translate-y-1/2 text-[12rem] font-bold leading-none text-primary/[0.04] select-none sm:text-[16rem]">
      EU
    </span>
    <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
      <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold text-primary">
        <span className="h-1.5 w-1.5 rounded-full bg-primary" />
        {tag}
      </div>
      <h1 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
        {title}
      </h1>
      {description && (
        <p className="mt-4 max-w-2xl text-base text-muted-foreground leading-relaxed sm:text-lg">
          {description}
        </p>
      )}
    </div>
  </div>
);

// C2 — Cloud trail blob
export const PageHeaderCloudTrail = ({ tag, title, description }: PageHeaderProps) => (
  <div className="relative isolate overflow-hidden border-b border-border bg-secondary/50 py-16 sm:py-20">
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
    <span className="hidden sm:block absolute -right-8 top-1/2 -translate-y-1/2 text-[12rem] font-bold leading-none text-primary/[0.04] select-none sm:text-[16rem]">
      EU
    </span>
    <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
      <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold text-primary">
        <span className="h-1.5 w-1.5 rounded-full bg-primary" />
        {tag}
      </div>
      <h1 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
        {title}
      </h1>
      {description && (
        <p className="mt-4 max-w-2xl text-base text-muted-foreground leading-relaxed sm:text-lg">
          {description}
        </p>
      )}
    </div>
  </div>
);

// C3 — Hero grid background
export const PageHeaderHeroGrid = ({ tag, title, description }: PageHeaderProps) => (
  <div className="relative isolate overflow-hidden border-b border-border bg-background py-16 sm:py-20">
    <svg
      aria-hidden="true"
      className="absolute inset-0 -z-10 size-full stroke-border [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
    >
      <defs>
        <pattern id="page-header-grid" x="50%" y={-1} width={200} height={200} patternUnits="userSpaceOnUse">
          <path d="M.5 200V.5H200" fill="none" />
        </pattern>
      </defs>
      <svg x="50%" y={-1} className="overflow-visible fill-secondary/40">
        <path d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z" />
      </svg>
      <rect fill="url(#page-header-grid)" width="100%" height="100%" strokeWidth={0} />
    </svg>
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
    <span className="hidden sm:block absolute -right-8 top-1/2 -translate-y-1/2 text-[12rem] font-bold leading-none text-primary/[0.04] select-none sm:text-[16rem]">
      EU
    </span>
    <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
      <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold text-primary">
        <span className="h-1.5 w-1.5 rounded-full bg-primary" />
        {tag}
      </div>
      <h1 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
        {title}
      </h1>
      {description && (
        <p className="mt-4 max-w-2xl text-base text-muted-foreground leading-relaxed sm:text-lg">
          {description}
        </p>
      )}
    </div>
  </div>
);

// C4 — Orange left border accent
export const PageHeaderAccentBar = ({ tag, title, description }: PageHeaderProps) => (
  <div className="relative overflow-hidden border-b border-border bg-secondary/50 py-16 sm:py-20">
    <div className="absolute left-0 top-0 h-full w-1 bg-primary" />
    <span className="absolute -right-8 top-1/2 -translate-y-1/2 text-[12rem] font-bold leading-none text-primary/[0.04] select-none sm:text-[16rem]">
      EU
    </span>
    <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
      <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold text-primary">
        <span className="h-1.5 w-1.5 rounded-full bg-primary" />
        {tag}
      </div>
      <h1 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
        {title}
      </h1>
      {description && (
        <p className="mt-4 max-w-2xl text-base text-muted-foreground leading-relaxed sm:text-lg">
          {description}
        </p>
      )}
    </div>
  </div>
);
