import React from "react";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { HowItWorksSection } from "@/components/HowItWorksSection";
import { PricingSection } from "@/components/PricingSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { FaqSection } from "@/components/FaqSection";
import { CtaSection } from "@/components/CtaSection";
import { Footer } from "@/components/Footer";
import { IntegrationsSection } from "@/components/IntegrationsSection";
import { BlogSection } from "@/components/BlogSection";
import { WhyChooseUsSection } from "@/components/WhyChooseUsSection";
import { ContactSection } from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <FeaturesSection />
        <HowItWorksSection />
        <PricingSection />
        <IntegrationsSection />
        <WhyChooseUsSection />
        <BlogSection />
        <TestimonialsSection />
        <FaqSection />
        <ContactSection />
        <CtaSection />
        
      </main>
      <Footer />
    </div>
  );
};

export default Index;
