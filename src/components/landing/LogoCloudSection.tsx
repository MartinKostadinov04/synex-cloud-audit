import { cn } from "@/lib/utils";

const logos = [
  {
    alt: "Transistor",
    light: "https://tailwindcss.com/plus-assets/img/logos/158x48/transistor-logo-gray-900.svg",
    dark: "https://tailwindcss.com/plus-assets/img/logos/158x48/transistor-logo-white.svg",
  },
  {
    alt: "Reform",
    light: "https://tailwindcss.com/plus-assets/img/logos/158x48/reform-logo-gray-900.svg",
    dark: "https://tailwindcss.com/plus-assets/img/logos/158x48/reform-logo-white.svg",
  },
  {
    alt: "Tuple",
    light: "https://tailwindcss.com/plus-assets/img/logos/158x48/tuple-logo-gray-900.svg",
    dark: "https://tailwindcss.com/plus-assets/img/logos/158x48/tuple-logo-white.svg",
  },
  {
    alt: "SavvyCal",
    light: "https://tailwindcss.com/plus-assets/img/logos/158x48/savvycal-logo-gray-900.svg",
    dark: "https://tailwindcss.com/plus-assets/img/logos/158x48/savvycal-logo-white.svg",
    extraClass: "sm:col-start-2",
  },
  {
    alt: "Statamic",
    light: "https://tailwindcss.com/plus-assets/img/logos/158x48/statamic-logo-gray-900.svg",
    dark: "https://tailwindcss.com/plus-assets/img/logos/158x48/statamic-logo-white.svg",
    extraClass: "col-start-2 sm:col-start-auto",
  },
];

const LogoCloudSection = ({ className }: { className?: string }) => {
  return (
    <div className={cn("bg-background py-24 sm:py-32", className)}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-center text-lg/8 font-semibold text-foreground">
          Trusted by the world's most innovative teams
        </h2>
        <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
          {logos.map((logo) => (
            <div key={logo.alt} className={`col-span-2 lg:col-span-1 ${logo.extraClass ?? ""}`}>
              <img
                alt={logo.alt}
                src={logo.light}
                width={158}
                height={48}
                className="max-h-12 w-full object-contain dark:hidden"
              />
              <img
                alt={logo.alt}
                src={logo.dark}
                width={158}
                height={48}
                className="hidden max-h-12 w-full object-contain dark:block"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LogoCloudSection;
