import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { PageHeaderWatermark, PageHeaderCloudTrail, PageHeaderHeroGrid, PageHeaderAccentBar } from "@/components/ui/page-headers";
import HeroSection from "@/components/landing/HeroSection";
import FeaturesSection from "@/components/landing/FeaturesSection";
import BentoSection from "@/components/landing/BentoSection";
import OpportunitiesSection from "@/components/landing/OpportunitiesSection";
import LogoCloudSection from "@/components/landing/LogoCloudSection";
import BlogSection from "@/components/landing/BlogSection";
import DemosSection from "@/components/landing/DemosSection";
import PracticalGuideSection from "@/components/landing/PracticalGuideSection";
import BatteryHeroSection from "@/components/battery-reg/HeroSection";
import KeyRequirements from "@/components/battery-reg/KeyRequirements";
import ComplianceBenefits from "@/components/battery-reg/ComplianceBenefits";
import BatteryPassportOverview from "@/components/battery-reg/BatteryPassportOverview";
import ServicesTabsSection from "@/components/battery-reg/ServicesTabsSection";
import ConsultationCTA from "@/components/battery-reg/ConsultationCTA";
import ConsultingNavSection from "@/components/consulting/ConsultingNavSection";
import ResourceBlogSection from "@/components/resources/ResourceBlogSection";
import ResourceDownloadsSection from "@/components/resources/ResourceDownloadsSection";
import ContactSection from "@/components/contact/ContactSection";
import ContactDialog from "@/components/contact/ContactDialog";
import FAQSection from "@/components/FAQSection";

const Label = ({ name }: { name: string }) => (
  <div className="bg-foreground text-primary-foreground font-mono text-xs px-6 py-2 sticky top-16 z-10">
    {name}
  </div>
);

const PAGE_HEADER_PROPS = {
  tag: "Battery Regulation",
  title: "EU Battery Regulation 2023/1542",
  description: "Everything manufacturers need to know about compliance requirements and timelines.",
};

const FAQ_ITEMS = [
  { question: "What is a Digital Battery Passport?", answer: "A standardised digital record of a battery's lifecycle data, required under EU Battery Regulation 2023/1542." },
  { question: "When does Battery Regulation apply?", answer: "Phased rollout from 2024 through 2027 depending on battery category and requirement type." },
  { question: "Does Synex support ESPR compliance?", answer: "Yes — our platform covers Digital Product Passports for all product categories under ESPR." },
];

const ComponentPreview = () => {

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-1">

        <Label name="PageHeaderWatermark" />
        <PageHeaderWatermark {...PAGE_HEADER_PROPS} />

        <Label name="PageHeaderCloudTrail" />
        <PageHeaderCloudTrail {...PAGE_HEADER_PROPS} />

        <Label name="PageHeaderHeroGrid" />
        <PageHeaderHeroGrid {...PAGE_HEADER_PROPS} />

        <Label name="PageHeaderAccentBar" />
        <PageHeaderAccentBar {...PAGE_HEADER_PROPS} />

        <Label name="HeroSection" />
        <HeroSection />

        <Label name="FeaturesSection" />
        <FeaturesSection />

        <Label name="BentoSection" />
        <BentoSection />

        <Label name="OpportunitiesSection" />
        <OpportunitiesSection />

        <Label name="LogoCloudSection" />
        <LogoCloudSection />

        <Label name="BlogSection" />
        <BlogSection />

        <Label name="DemosSection" />
        <DemosSection />

        <Label name="PracticalGuideSection" />
        <PracticalGuideSection />

        <Label name="BatteryHeroSection" />
        <BatteryHeroSection />

        <Label name="KeyRequirements" />
        <KeyRequirements />

        <Label name="ComplianceBenefits" />
        <ComplianceBenefits />

        <Label name="BatteryPassportOverview" />
        <BatteryPassportOverview />

        <Label name="ServicesTabsSection" />
        <ServicesTabsSection />

        <Label name="ConsultationCTA" />
        <ConsultationCTA />

        <Label name="ConsultingNavSection" />
        <ConsultingNavSection />

        <Label name="ResourceBlogSection" />
        <ResourceBlogSection />

        <Label name="ResourceDownloadsSection" />
        <ResourceDownloadsSection />

        <Label name="ContactSection" />
        <ContactSection />

        <Label name="ContactDialog" />
        <div className="flex items-center justify-center py-16 bg-secondary/30">
          <ContactDialog />
        </div>

        <Label name="FAQSection" />
        <FAQSection
          title="Frequently Asked Questions"
          subtitle="Answers to common questions about SynexCloud."
          faqs={FAQ_ITEMS}
        />

      </main>
      <Footer />
    </div>
  );
};

export default ComponentPreview;
