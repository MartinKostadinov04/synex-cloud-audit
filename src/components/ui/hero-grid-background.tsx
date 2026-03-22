// HeroGridBackground
// Reusable SVG grid backdrop. Drop inside any `relative isolate overflow-hidden` container.
// Pass a unique `id` if rendering multiple instances on the same page.

const HeroGridBackground = ({ id = "hero-grid-bg" }: { id?: string }) => (
  <svg
    aria-hidden="true"
    className="absolute inset-0 -z-10 size-full stroke-border"
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
);

export default HeroGridBackground;
