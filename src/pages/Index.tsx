import { useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import ComparisonSection from "@/components/ComparisonSection";
import BenefitsSection from "@/components/BenefitsSection";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";
import LeadCaptureModal from "@/components/LeadCaptureModal";

const Index = () => {
  const [leadModalOpen, setLeadModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Navbar onTrialClick={() => setLeadModalOpen(true)} />
      <HeroSection onTrialClick={() => setLeadModalOpen(true)} />
      <FeaturesSection />
      <ComparisonSection onTrialClick={() => setLeadModalOpen(true)} />
      <BenefitsSection />
      <CtaSection onTrialClick={() => setLeadModalOpen(true)} />
      <Footer />
      <LeadCaptureModal open={leadModalOpen} onOpenChange={setLeadModalOpen} />
    </div>
  );
};

export default Index;
