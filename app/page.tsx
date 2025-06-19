"use client";
import { useState } from "react";
import AnimatedSection from "./components/AnimatedSection";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import About from "./components/sections/About";
import Contact from "./components/sections/Contact";
import Hero from "./components/sections/Hero";
import Pricing from "./components/sections/Pricing";
import Services from "./components/sections/Services";
import TargetAudience from "./components/sections/TargetAudience";
import TechStack from "./components/sections/TechStack";
import WhyUs from "./components/sections/WhyUs";
import { ServiceInquiryModal } from "./components/ServiceInquiryModal";
import { Toaster } from "./components/ui/toaster";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState<Package | null>(null);

  const handleOpenModal = (pkg: Package | null) => {
    setSelectedPackage(pkg);
    setIsModalOpen(true);
  };
  return (
    <>
      <Header onGetQuoteClick={() => handleOpenModal(null)} />
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
      <Footer />
      <ServiceInquiryModal
        isOpen={isModalOpen}
        onOpenChange={setIsModalOpen}
        selectedPackage={selectedPackage}
      />
      <Toaster />
    </>
  );
}
