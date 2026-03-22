import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/landing/HeroSection";
import FeaturesSection from "@/components/landing/FeaturesSection";
import BentoSection from "@/components/landing/BentoSection";
import OpportunitiesSection from "@/components/landing/OpportunitiesSection";
import BlogSection from "@/components/landing/BlogSection";

const Index = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <main>
      <HeroSection />
      <FeaturesSection />
      <BentoSection />
      <OpportunitiesSection />
      <BlogSection />
    </main>
    <Footer />
  </div>
);

export default Index;
