/**
 * HeroGridBackground
 * Reusable SVG grid + gradient blob backdrop used in the landing hero
 * and secondary page headers. Wrap any section with this as a sibling.
 *
 * Usage:
 *   <div className="relative isolate overflow-hidden">
 *     <HeroGridBackground />
 *     {/* your content */}
 *   </div>
 */

const HeroGridBackground = ({ id = "hero-grid-bg" }: { id?: string }) => (
  <>
    {/* SVG grid */}
    <svg
      aria-hidden="true"
      className="absolute inset-0 -z-10 size-full stroke-border [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
    >
      <defs>
        <pattern id={id} x="50%" y={-1} width={200} height={200} patternUnits="userSpaceOnUse">
          <path d="M.5 200V.5H200" fill="none" />
        </pattern>
      </defs>
      <svg x="50%" y={-1} className="overflow-visible fill-secondary/40">
        <path d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z" />
      </svg>
      <rect fill={`url(#${id})`} width="100%" height="100%" strokeWidth={0} />
    </svg>

    {/* Gradient blob */}
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
  </>
);

export default HeroGridBackground;
