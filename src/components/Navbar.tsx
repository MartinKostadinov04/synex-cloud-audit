import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, ChevronDown, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";
import logo from "@/assets/logo.svg";

interface SubItem {
  label: string;
  description?: string;
  href: string;
  isExternal?: boolean;
}

interface NavCategory {
  category: string;
  items: SubItem[];
}

interface NavItem {
  label: string;
  href?: string;
  dropdown?: NavCategory[];
}

const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "Consulting",
    dropdown: [
      {
        category: "Consulting Services",
        items: [
          {
            label: "ESPR",
            description:
              "Get tailored support to align your products with ESPR",
            href: "/consulting/espr",
          },
          {
            label: "Battery Regulation",
            description:
              "Expert guidance to navigate EU battery rules—covering data, labeling, and digital passports.",
            href: "/batteryreg",
          },
        ],
      },
    ],
  },
  {
    label: "Platform",
    dropdown: [
      {
        category: "Product passports",
        items: [
          {
            label: "Digital Product Passports",
            description: "Learn About DPP →\nOur Solution →",
            href: "/platform/dpp",
          },
          {
            label: "Battery Pass",
            description: "Learn About Battery Pass →\nOur Solution →",
            href: "/platform/battery-pass",
          },
        ],
      },
    ],
  },
  { label: "Partnerships", href: "/partnerships" },
  {
    label: "Resources",
    dropdown: [
      {
        category: "About regulation",
        items: [
          {
            label: "Digital product passports",
            description:
              "Understand how DPPs work and how to implement them.",
            href: "/resources/dpp",
          },
          {
            label: "Knowledge center",
            description: "Explore articles & guides on DPPs.",
            href: "/resources/knowledge",
          },
        ],
      },
    ],
  },
  { label: "Contact", href: "/contact" },
];

/* ─── Desktop dropdown panel ─── */
const DropdownPanel = ({
  dropdown,
  onClose,
}: {
  dropdown: NavCategory[];
  onClose: () => void;
}) => (
  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 z-50">
    <div className="bg-background rounded-xl border border-border shadow-lg p-6 min-w-[560px]">
      {dropdown.map((cat) => (
        <div key={cat.category} className="flex gap-8">
          {/* Category label */}
          <div className="min-w-[160px] pr-6 border-r border-border flex items-start">
            <span className="text-sm font-medium text-foreground leading-snug">
              {cat.category}
            </span>
          </div>
          {/* Items */}
          <div className="flex gap-8 flex-1">
            {cat.items.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                onClick={onClose}
                className="group flex-1 min-w-[160px]"
              >
                <span className="text-sm font-semibold text-primary group-hover:underline">
                  {item.label}
                </span>
                {item.description && (
                  <p className="text-sm text-muted-foreground mt-1 leading-relaxed">
                    {item.description}
                  </p>
                )}
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  </div>
);

/* ─── Mobile accordion section ─── */
const MobileAccordion = ({
  item,
  onNavigate,
}: {
  item: NavItem;
  onNavigate: () => void;
}) => {
  const [expanded, setExpanded] = useState(false);

  if (!item.dropdown) {
    return (
      <Link
        to={item.href!}
        onClick={onNavigate}
        className="px-4 py-3 text-base font-medium text-foreground hover:bg-secondary rounded-lg transition-colors"
      >
        {item.label}
      </Link>
    );
  }

  return (
    <div>
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full flex items-center justify-between px-4 py-3 text-base font-medium text-foreground hover:bg-secondary rounded-lg transition-colors"
      >
        {item.label}
        <ChevronDown
          className={`h-4 w-4 text-muted-foreground transition-transform ${expanded ? "rotate-180" : ""}`}
        />
      </button>
      {expanded && (
        <div className="ml-4 border-l border-border pl-4 mt-1 mb-2 space-y-1">
          {item.dropdown.map((cat) => (
            <div key={cat.category}>
              <span className="block px-3 py-1.5 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                {cat.category}
              </span>
              {cat.items.map((sub) => (
                <Link
                  key={sub.href}
                  to={sub.href}
                  onClick={onNavigate}
                  className="block px-3 py-2 text-sm text-foreground hover:text-primary hover:bg-secondary rounded-md transition-colors"
                >
                  {sub.label}
                </Link>
              ))}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

/* ─── Navbar ─── */
const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const location = useLocation();

  // Close dropdown on route change
  useEffect(() => {
    setActiveDropdown(null);
  }, [location.pathname]);

  const openDropdown = (label: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveDropdown(label);
  };

  const closeDropdown = () => {
    timeoutRef.current = setTimeout(() => setActiveDropdown(null), 150);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex-shrink-0">
          <img src={logo} alt="Synex" className="h-7" />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-0.5">
          {navItems.map((item) => {
            const isActive =
              item.href === "/"
                ? location.pathname === "/"
                : item.href
                  ? location.pathname.startsWith(item.href)
                  : item.dropdown?.some((cat) =>
                      cat.items.some((sub) =>
                        location.pathname.startsWith(sub.href)
                      )
                    );

            if (item.dropdown) {
              return (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => openDropdown(item.label)}
                  onMouseLeave={closeDropdown}
                >
                  <button
                    className={`inline-flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                      isActive || activeDropdown === item.label
                        ? "text-foreground border border-border bg-secondary"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {item.label}
                    <ChevronDown className="h-3.5 w-3.5" />
                  </button>
                  {activeDropdown === item.label && (
                    <DropdownPanel
                      dropdown={item.dropdown}
                      onClose={() => setActiveDropdown(null)}
                    />
                  )}
                </div>
              );
            }

            return (
              <Link
                key={item.label}
                to={item.href!}
                className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                  isActive
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Desktop auth buttons */}
        <div className="hidden lg:flex items-center gap-3">
          <Button variant="ghost" size="sm" className="text-sm font-medium">
            Log in
          </Button>
          <Button size="sm">Sign up</Button>
        </div>

        {/* Mobile trigger */}
        <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
          <SheetTrigger asChild className="lg:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-80 p-0">
            <SheetTitle className="sr-only">Navigation</SheetTitle>
            <div className="flex flex-col h-full">
              {/* Mobile logo */}
              <div className="p-4 border-b border-border">
                <img src={logo} alt="Synex" className="h-6" />
              </div>

              {/* Mobile nav items */}
              <nav className="flex-1 overflow-y-auto p-3 space-y-0.5">
                {navItems.map((item) => (
                  <MobileAccordion
                    key={item.label}
                    item={item}
                    onNavigate={() => setMobileOpen(false)}
                  />
                ))}
              </nav>

              {/* Mobile auth buttons */}
              <div className="p-4 border-t border-border space-y-2">
                <Button variant="outline" className="w-full">
                  Log in
                </Button>
                <Button className="w-full">Sign up</Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Navbar;
