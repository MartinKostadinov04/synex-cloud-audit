import { useState, ReactNode } from "react";

interface SectionShowcaseProps {
  name: string;
  code: string;
  children: ReactNode;
}

const SectionShowcase = ({ name, code, children }: SectionShowcaseProps) => {
  const [view, setView] = useState<"preview" | "code">("preview");

  return (
    <div className="rounded-xl border border-border overflow-hidden">
      {/* Header bar */}
      <div className="flex items-center justify-between bg-foreground px-5 py-3">
        <p className="text-sm font-medium text-primary-foreground">{name}</p>
        <div className="inline-flex rounded-full bg-foreground/80 border border-primary-foreground/10 p-0.5">
          <button
            onClick={() => setView("preview")}
            className={`rounded-full px-4 py-1 text-xs font-medium transition-colors ${
              view === "preview"
                ? "bg-muted-foreground/30 text-primary-foreground"
                : "text-primary-foreground/60 hover:text-primary-foreground"
            }`}
          >
            Preview
          </button>
          <button
            onClick={() => setView("code")}
            className={`rounded-full px-4 py-1 text-xs font-medium transition-colors ${
              view === "code"
                ? "bg-muted-foreground/30 text-primary-foreground"
                : "text-primary-foreground/60 hover:text-primary-foreground"
            }`}
          >
            Code
          </button>
        </div>
      </div>

      {/* Content */}
      {view === "preview" ? (
        <div className="overflow-x-auto">{children}</div>
      ) : (
        <div className="bg-[#1a1f2e] p-6 overflow-x-auto max-h-[600px] overflow-y-auto">
          <pre className="text-sm text-gray-300 font-mono whitespace-pre">{code}</pre>
        </div>
      )}
    </div>
  );
};

export default SectionShowcase;
