
import { useState } from "react";
import About from "@/components/sections/About";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import Hero from "@/components/sections/Hero";
import Pricing, { pricingPackages } from "@/components/sections/Pricing";
import Services from "@/components/sections/Services";
import TargetAudience from "@/components/sections/TargetAudience";
import TechStack from "@/components/sections/TechStack";
import WhyUs from "@/components/sections/WhyUs";
import Contact from "@/components/sections/Contact";
import { ServiceInquiryModal } from "@/components/ServiceInquiryModal";
import { Toaster } from "@/components/ui/toaster";
import AnimatedSection from "@/components/AnimatedSection";

type Package = (typeof pricingPackages)[0];

const Index = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState<Package | null>(null);

  const handleOpenModal = (pkg: Package | null) => {
    setSelectedPackage(pkg);
    setIsModalOpen(true);
  };

  return (
    <>
      <Header onGetQuoteClick={() => handleOpenModal(null)} />
      <main>
        <AnimatedSection direction="down">
          <Hero />
        </AnimatedSection>
        <AnimatedSection direction="left">
          <Pricing onChoosePackage={handleOpenModal} />
        </AnimatedSection>
        <AnimatedSection direction="right">
          <Services />
        </AnimatedSection>
        <AnimatedSection direction="up">
          <About />
        </AnimatedSection>
        <AnimatedSection direction="random">
          <TargetAudience />
        </AnimatedSection>
        <AnimatedSection direction="random">
          <TechStack />
        </AnimatedSection>
        <AnimatedSection direction="left">
          <WhyUs />
        </AnimatedSection>
        <AnimatedSection direction="right">
          <Contact />
        </AnimatedSection>
      </main>
      <Footer />
      <ServiceInquiryModal
        isOpen={isModalOpen}
        onOpenChange={setIsModalOpen}
        selectedPackage={selectedPackage}
      />
      <Toaster />
    </>
  );
};

export default Index;
