import { Database, BarChart3, Link2, Plug, FileText } from "lucide-react";

const BentoSection = ({ className }: { className?: string }) => (
  <section className={cn("bg-background py-24 sm:py-32", className)}>
    <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
      <p className="text-base/7 font-semibold text-primary">Platform</p>
      <p className="mt-2 max-w-lg text-pretty text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
        More than just consulting
      </p>

      <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6 lg:grid-rows-2">
        {/* Card 1 — Data Management (top-left, span 3) */}
        <div className="relative lg:col-span-3">
          <div className="absolute inset-0 rounded-lg bg-card max-lg:rounded-t-[2rem] lg:rounded-tl-[2rem]" />
          <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)] lg:rounded-tl-[calc(2rem+1px)]">
            <div className="h-48 sm:h-80 bg-gradient-to-br from-primary/10 via-accent to-secondary flex items-center justify-center">
              <Database className="h-16 w-16 text-primary/40" />
            </div>
            <div className="p-6 sm:p-10 pt-4">
              <h3 className="text-sm/4 font-semibold text-primary">Data Management</h3>
              <p className="mt-2 text-lg font-medium tracking-tight text-foreground">
                All your compliance data, one place
              </p>
              <p className="mt-2 max-w-lg text-sm/6 text-muted-foreground">
                Centralise material compositions, supplier declarations, and regulatory evidence — structured, searchable, and always audit-ready.
              </p>
            </div>
          </div>
          <div className="pointer-events-none absolute inset-0 rounded-lg shadow outline outline-1 outline-black/5 max-lg:rounded-t-[2rem] lg:rounded-tl-[2rem]" />
        </div>

        {/* Card 2 — Compliance Tracking (top-right, span 3) */}
        <div className="relative lg:col-span-3">
          <div className="absolute inset-0 rounded-lg bg-card lg:rounded-tr-[2rem]" />
          <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] lg:rounded-tr-[calc(2rem+1px)]">
            <div className="h-48 sm:h-80 bg-gradient-to-bl from-primary/10 via-accent to-secondary flex items-center justify-center">
              <BarChart3 className="h-16 w-16 text-primary/40" />
            </div>
            <div className="p-6 sm:p-10 pt-4">
              <h3 className="text-sm/4 font-semibold text-primary">Compliance Tracking</h3>
              <p className="mt-2 text-lg font-medium tracking-tight text-foreground">
                Real-time regulation readiness
              </p>
              <p className="mt-2 max-w-lg text-sm/6 text-muted-foreground">
                Visual dashboards show exactly where you stand across every requirement — Battery Passport, carbon footprint, due diligence, and more.
              </p>
            </div>
          </div>
          <div className="pointer-events-none absolute inset-0 rounded-lg shadow outline outline-1 outline-black/5 lg:rounded-tr-[2rem]" />
        </div>

        {/* Card 3 — Supply Chain (bottom-left, span 2) */}
        <div className="relative lg:col-span-2">
          <div className="absolute inset-0 rounded-lg bg-card lg:rounded-bl-[2rem]" />
          <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] lg:rounded-bl-[calc(2rem+1px)]">
            <div className="h-48 sm:h-80 bg-gradient-to-tr from-secondary via-accent to-primary/10 flex items-center justify-center">
              <Link2 className="h-16 w-16 text-primary/40" />
            </div>
            <div className="p-6 sm:p-10 pt-4">
              <h3 className="text-sm/4 font-semibold text-primary">Supply Chain</h3>
              <p className="mt-2 text-lg font-medium tracking-tight text-foreground">
                End-to-end visibility
              </p>
              <p className="mt-2 max-w-lg text-sm/6 text-muted-foreground">
                Map your supply chain, manage supplier questionnaires, and track due diligence at every tier.
              </p>
            </div>
          </div>
          <div className="pointer-events-none absolute inset-0 rounded-lg shadow outline outline-1 outline-black/5 lg:rounded-bl-[2rem]" />
        </div>

        {/* Card 4 — Integrations (bottom-center, span 2) */}
        <div className="relative lg:col-span-2">
          <div className="absolute inset-0 rounded-lg bg-card" />
          <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)]">
            <div className="h-48 sm:h-80 bg-gradient-to-b from-secondary to-accent flex items-center justify-center">
              <Plug className="h-16 w-16 text-primary/40" />
            </div>
            <div className="p-6 sm:p-10 pt-4">
              <h3 className="text-sm/4 font-semibold text-primary">Integrations</h3>
              <p className="mt-2 text-lg font-medium tracking-tight text-foreground">
                Fits into your workflow
              </p>
              <p className="mt-2 max-w-lg text-sm/6 text-muted-foreground">
                Connect your ERP, PLM, and quality management systems. Synex adapts to you — not the other way around.
              </p>
            </div>
          </div>
          <div className="pointer-events-none absolute inset-0 rounded-lg shadow outline outline-1 outline-black/5" />
        </div>

        {/* Card 5 — Reporting (bottom-right, span 2) */}
        <div className="relative lg:col-span-2">
          <div className="absolute inset-0 rounded-lg bg-card max-lg:rounded-b-[2rem] lg:rounded-br-[2rem]" />
          <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-br-[calc(2rem+1px)]">
            <div className="h-48 sm:h-80 bg-gradient-to-tl from-primary/10 via-accent to-secondary flex items-center justify-center">
              <FileText className="h-16 w-16 text-primary/40" />
            </div>
            <div className="p-6 sm:p-10 pt-4">
              <h3 className="text-sm/4 font-semibold text-primary">Reporting</h3>
              <p className="mt-2 text-lg font-medium tracking-tight text-foreground">
                Audit-ready in one click
              </p>
              <p className="mt-2 max-w-lg text-sm/6 text-muted-foreground">
                Generate Battery Passport documents, compliance certificates, and regulatory reports instantly.
              </p>
            </div>
          </div>
          <div className="pointer-events-none absolute inset-0 rounded-lg shadow outline outline-1 outline-black/5 max-lg:rounded-b-[2rem] lg:rounded-br-[2rem]" />
        </div>
      </div>
    </div>
  </section>
);

export default BentoSection;
