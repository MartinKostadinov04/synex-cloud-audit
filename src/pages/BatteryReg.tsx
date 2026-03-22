import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/battery-reg/HeroSection";
import KeyRequirements from "@/components/battery-reg/KeyRequirements";
import ComplianceBenefits from "@/components/battery-reg/ComplianceBenefits";
import ServicesTabsSection from "@/components/battery-reg/ServicesTabsSection";
import ConsultationCTA from "@/components/battery-reg/ConsultationCTA";

const BatteryReg = () => (
  <div className="min-h-screen flex flex-col">
    <Navbar />
    <main className="flex-1">
      <HeroSection />
      <KeyRequirements />
      <ComplianceBenefits />
      <ServicesTabsSection />
      <ConsultationCTA />
    </main>
    <Footer />
  </div>
);

export default BatteryReg;
