import { useEffect, useRef, ReactNode, ElementType } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface SlideFeature {
  icon?: ElementType;
  text: string;
}

interface Slide {
  heading: string;
  body?: string;
  features?: SlideFeature[];
  imageUrl: string;
  imageAlt?: string;
}

interface FeatureScreenshotSectionProps {
  slides: Slide[];
  heading?: ReactNode;
  className?: string;
}

export default function FeatureScreenshotSection({
  slides = [],
  heading,
  className = "",
}: FeatureScreenshotSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const imageAreaRef = useRef<HTMLDivElement>(null);
  const imageWrapRef = useRef<HTMLDivElement>(null);
  const textColRef = useRef<HTMLDivElement>(null);
  const textRefs = useRef<(HTMLDivElement | null)[]>([]);
  const imageRefs = useRef<(HTMLImageElement | null)[]>([]);

  useEffect(() => {
    if (!slides.length) return;

    let mm: gsap.MatchMedia;

    const raf = requestAnimationFrame(() => {
      mm = gsap.matchMedia();

      const initSlides = () => {
        textRefs.current.forEach((el, i) => {
          if (i > 0 && el) gsap.set(el, { opacity: 0, y: 48, force3D: true });
        });
        imageRefs.current.forEach((el, i) => {
          if (i > 0 && el) gsap.set(el, { opacity: 0 });
        });
      };

      const addTransitions = (tl: gsap.core.Timeline) => {
        slides.forEach((_, i) => {
          if (i >= slides.length - 1) return;
          const curr = textRefs.current[i];
          const next = textRefs.current[i + 1];
          const imgOut = imageRefs.current[i];
          const imgIn = imageRefs.current[i + 1];

          tl.to(curr, { opacity: 0, y: -60, duration: 6, ease: "power1.in", force3D: true });
          tl.to(next, { opacity: 1, y: 0, duration: 6, ease: "power1.out", force3D: true }, "<+=2.5");
          tl.to(imgIn, { opacity: 1, duration: 5, ease: "none" }, "<-=1.5");
          tl.to(imgOut, { opacity: 0, duration: 4, ease: "none" }, "<+=0.5");
          tl.to({}, { duration: 6 });
        });
        tl.to({}, { duration: 2 });
      };

      // ── Desktop ──
      mm.add("(min-width: 1024px)", () => {
        const areaEl = imageAreaRef.current!;
        const imageEl = imageWrapRef.current!;
        const textEl = textColRef.current!;

        const areaRect = areaEl.getBoundingClientRect();
        const imageRect = imageEl.getBoundingClientRect();
        const vw = window.innerWidth;

        const scale = (vw * 0.7) / imageRect.width;
        const tx = vw / 2 - (imageRect.left + imageRect.width / 2);

        const originX =
          ((imageRect.left - areaRect.left + imageRect.width / 2) /
            areaRect.width) *
          100;
        const originY =
          ((imageRect.top - areaRect.top + imageRect.height / 2) /
            areaRect.height) *
          100;

        gsap.set(areaEl, {
          scale,
          x: tx,
          zIndex: 10,
          transformOrigin: `${originX}% ${originY}%`,
          force3D: true,
        });
        gsap.set(textEl, { opacity: 0, x: -40, force3D: true });
        initSlides();

        // Phase 1: scale-down on scroll-in (no pin)
        const tl1 = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current!,
            start: "top bottom",
            end: "top top",
            scrub: 0.6,
            invalidateOnRefresh: true,
          },
        });
        tl1.to({}, { duration: 5 });
        tl1.to(areaEl, { scale: 1, x: 0, zIndex: 1, ease: "none", force3D: true, duration: 5 });
        tl1.to(textEl, { opacity: 1, x: 0, ease: "none", force3D: true, duration: 2 }, "-=1.5");

        // Phase 2: pinned slide transitions
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current!,
            start: "top top",
            end: `+=${slides.length * 400}vh`,
            pin: true,
            scrub: 1.2,
            invalidateOnRefresh: true,
          },
        });

        tl.to({}, { duration: 8 });
        addTransitions(tl);

        return () => gsap.set([areaEl, textEl], { clearProps: "all" });
      });

      // ── Mobile ──
      mm.add("(max-width: 1023px)", () => {
        initSlides();
        gsap.set(textColRef.current!, { opacity: 1, x: 0 });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current!,
            start: "bottom bottom",
            end: `+=${(1 + slides.length) * 180}vh`,
            pin: true,
            scrub: 0.8,
            invalidateOnRefresh: true,
          },
        });

        tl.to({}, { duration: 1 });
        addTransitions(tl);

        return () => gsap.set(textColRef.current!, { clearProps: "all" });
      });
    });

    return () => {
      cancelAnimationFrame(raf);
      mm?.revert();
    };
  }, [slides.length]);

  return (
    <section ref={sectionRef} className={`bg-background overflow-hidden ${className}`}>
      <div className="h-screen flex items-center">
        <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col gap-8 lg:grid lg:grid-cols-12 lg:items-center lg:gap-x-10">
            {/* Image area */}
            <div className="order-1 lg:order-2 lg:col-span-7">
              <div ref={imageAreaRef} className="relative" style={{ willChange: "transform" }}>
                {heading && (
                  <div className="mb-4 text-center lg:text-left">
                    <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl text-pretty">
                      {heading}
                    </h2>
                  </div>
                )}
                <div
                  ref={imageWrapRef}
                  className="relative aspect-[16/10] rounded-2xl overflow-hidden shadow-2xl ring-1 ring-border/10"
                >
                  {slides.map((slide, i) => (
                    <img
                      key={i}
                      ref={(el) => {
                        imageRefs.current[i] = el;
                      }}
                      src={slide.imageUrl}
                      alt={slide.imageAlt ?? ""}
                      className="absolute inset-0 w-full h-full object-cover"
                      style={{ opacity: i === 0 ? 1 : 0 }}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Text column */}
            <div
              ref={textColRef}
              className="order-2 lg:order-1 lg:col-span-5 lg:opacity-0"
              style={{ willChange: "transform, opacity" }}
            >
              <div className="relative overflow-hidden min-h-[340px]">
                {slides.map((slide, i) => (
                  <div
                    key={i}
                    ref={(el) => {
                      textRefs.current[i] = el;
                    }}
                    className="absolute top-0 left-0 right-0"
                    style={{
                      opacity: i === 0 ? 1 : 0,
                      transform: i === 0 ? "none" : "translateY(48px)",
                      willChange: "transform, opacity",
                    }}
                  >
                    <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl lg:text-4xl text-pretty">
                      {slide.heading}
                    </h2>

                    {slide.body && (
                      <p className="mt-5 text-base leading-7 text-muted-foreground lg:text-lg lg:leading-8">
                        {slide.body}
                      </p>
                    )}

                    {slide.features && slide.features.length > 0 && (
                      <ul className="mt-6 space-y-3">
                        {slide.features.map((feat, fi) => {
                          const Icon = feat.icon;
                          return (
                            <li key={fi} className="flex items-start gap-3">
                              {Icon && (
                                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary">
                                  <Icon className="h-4 w-4" />
                                </span>
                              )}
                              <span className="text-sm leading-6 text-muted-foreground lg:text-base">
                                {feat.text}
                              </span>
                            </li>
                          );
                        })}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
