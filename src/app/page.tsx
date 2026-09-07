"use client";

import Navbar from "@/components/navbar";
import HeroSection from "@/components/hero-section";
import WorksSection from "@/components/works-section";
import ServicesSection from "@/components/services-section";
import AboutSection from "@/components/about-section";
import VisualSection from "@/components/visual-section";
import FooterSection from "@/components/footer-section";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F4F6F4]">
      <div className="max-w-7xl mx-auto w-full px-6 flex-1">
        <Navbar />
        <HeroSection />
        <WorksSection />
        <ServicesSection />
        <AboutSection />
        <VisualSection />
      </div>
      {/* Footer with full-width background */}
      <div className="max-w-7xl mx-auto w-full px-6 mt-auto">
        <FooterSection />
      </div>
    </div>
  );
}
