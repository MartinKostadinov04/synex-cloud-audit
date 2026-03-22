import { ArrowRight, Menu } from "lucide-react";
import { Link } from "react-router-dom";

const demos = [
  {
    id: 1,
    title: "Synex T-shirt",
    description:
      "Digital Product Passport focused on telling product's story, composition and how to take care for it.",
    href: "/demos/tshirt",
    productLabel: "T-shirt",
    uniqueId: "2316022d-21mf-4667…",
    location: "Plovdiv, Bulgaria",
  },
  {
    id: 2,
    title: "Synex Car Battery",
    description:
      "DPP focused on functionality, simplified maintenance and end-of-life handling above compliance standards.",
    href: "/demos/battery",
    productLabel: "Car Battery",
    uniqueId: "2316022d-21mf-4667…",
    location: "Plovdiv, Bulgaria",
  },
  {
    id: 3,
    title: "Synex Sofa",
    description:
      "DPP aiming at more than compliance — getting the customer closer to the product through its story.",
    href: "/demos/sofa",
    productLabel: "Sofa",
    uniqueId: "2316022d-21mf-4667…",
    location: "Plovdiv, Bulgaria",
  },
];

const PhoneMockup = ({ uniqueId, location }: { uniqueId: string; location: string }) => (
  <div className="w-48 sm:w-52">
    {/* Phone frame */}
    <div className="rounded-[2.5rem] border-[6px] border-foreground bg-foreground p-1 shadow-2xl">
      {/* Notch */}
      <div className="absolute left-1/2 top-2 z-10 h-5 w-24 -translate-x-1/2 rounded-full bg-foreground" />

      {/* Screen */}
      <div className="overflow-hidden rounded-[2rem] bg-muted">
        {/* Header */}
        <div className="flex items-center justify-between px-4 pt-8 pb-2">
          <div className="h-6 w-6 rotate-45 rounded-sm bg-primary" />
          <Menu className="h-4 w-4 text-muted-foreground" />
        </div>

        {/* Product area */}
        <div className="flex h-36 items-center justify-center">
          <div className="flex flex-col items-center gap-1">
            <div className="h-20 w-20 rounded-lg bg-muted-foreground/5 flex items-center justify-center">
              <span className="text-[10px] font-medium text-muted-foreground/40 tracking-wide">
                synex
              </span>
            </div>
          </div>
        </div>

        {/* Data rows */}
        <div className="border-t border-border/40 px-3 py-2">
          <div className="grid grid-cols-2 gap-x-2 text-[8px]">
            <div>
              <p className="text-muted-foreground/50">Unique ID:</p>
              <p className="font-medium text-foreground/70 truncate">{uniqueId}</p>
            </div>
            <div>
              <p className="text-muted-foreground/50">Manufactured in:</p>
              <p className="font-medium text-foreground/70">{location}</p>
            </div>
          </div>
        </div>
        <div className="border-t border-border/40 px-3 py-2">
          <div className="grid grid-cols-2 gap-x-2 text-[8px]">
            <p className="text-muted-foreground/50">Manufacturing Date:</p>
            <p className="text-muted-foreground/50">Product Size</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const DemosSection = () => {
  return (
    <section className="py-24 sm:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-base font-semibold text-primary">Demos</p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Want to see how it looks?
          </h2>
        </div>

        {/* Cards */}
        <div className="mx-auto mt-16 grid max-w-sm grid-cols-1 gap-10 sm:max-w-none sm:grid-cols-2 lg:grid-cols-3">
          {demos.map((demo) => (
            <div key={demo.id} className="group relative">
              {/* Layered container — phone behind, card in front */}
              <div className="relative flex flex-col items-center">
                {/* Phone — sits behind the card, peeks out at top */}
                <div className="relative z-0 flex justify-center transition-transform duration-300 ease-out group-hover:-translate-y-3">
                  <PhoneMockup
                    uniqueId={demo.uniqueId}
                    location={demo.location}
                  />
                </div>

                {/* Card — overlaps the bottom of the phone */}
                <div className="relative z-10 -mt-16 w-full rounded-2xl border border-border bg-card p-6 shadow-sm">
                  <h3 className="text-lg font-bold text-foreground">{demo.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                    {demo.description}
                  </p>
                  <Link
                    to={demo.href}
                    className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary hover:text-primary/80 transition-colors"
                  >
                    View DPP
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DemosSection;
