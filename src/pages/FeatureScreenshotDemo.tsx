import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FeatureScreenshotSection from "@/components/landing/FeatureScreenshotSection";
import { ShieldCheck, BarChart3, Globe, Leaf, FileText, RefreshCw, Eye, Link } from "lucide-react";

const demoSlides = [
  {
    heading: "Digital Battery Passport",
    body: "Track the full lifecycle of every battery — from raw material sourcing to end-of-life recycling — with a tamper-proof digital passport.",
    features: [
      { icon: ShieldCheck, text: "EU Battery Regulation 2023/1542 compliant" },
      { icon: FileText, text: "Automated documentation & audit trail" },
      { icon: RefreshCw, text: "End-of-life recycling data included" },
    ],
    imageUrl: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=1200&q=80",
    imageAlt: "Battery passport dashboard",
  },
  {
    heading: "Real-Time Compliance Monitoring",
    body: "Stay ahead of regulatory changes with automated compliance checks and real-time alerts across your entire product portfolio.",
    features: [
      { icon: Eye, text: "Continuous monitoring against latest EU standards" },
      { icon: BarChart3, text: "Compliance score tracking per product line" },
    ],
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80",
    imageAlt: "Compliance monitoring interface",
  },
  {
    heading: "Supply Chain Transparency",
    body: "Map your entire supply chain with granular visibility into every tier.",
    features: [
      { icon: Globe, text: "Multi-tier supplier mapping & risk scoring" },
      { icon: Link, text: "Certification verification at every node" },
      { icon: ShieldCheck, text: "Due diligence reporting for regulators" },
    ],
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80",
    imageAlt: "Supply chain visualization",
  },
  {
    heading: "Carbon Footprint Analytics",
    body: "Calculate, report, and reduce the carbon footprint of your battery products with integrated lifecycle assessment tools.",
    features: [
      { icon: Leaf, text: "Scope 1–3 emissions breakdown" },
      { icon: BarChart3, text: "Actionable reduction recommendations" },
    ],
    imageUrl: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=1200&q=80",
    imageAlt: "Carbon analytics dashboard",
  },
];

const FeatureScreenshotDemo = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <main>
      {/* Spacer so you can scroll into the section */}
      <section className="h-screen flex items-center justify-center">
        <div className="text-center max-w-2xl px-6">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Feature Screenshot Section
          </h1>
          <p className="text-lg text-muted-foreground">
            Scroll down to see the pinned scroll animation with image cross-fade
            and text slide transitions.
          </p>
          <div className="mt-8 animate-float text-muted-foreground">↓ Scroll</div>
        </div>
      </section>

      <FeatureScreenshotSection
        heading="SynexCloud Platform"
        slides={demoSlides}
      />

      {/* Content after to prove unpin works */}
      <section className="py-32 bg-secondary">
        <div className="container text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Section After Pin
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            This content appears after the pinned section unpins, proving the scroll
            flow resumes naturally.
          </p>
        </div>
      </section>
    </main>
    <Footer />
  </div>
);

export default FeatureScreenshotDemo;
