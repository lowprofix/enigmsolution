"use client";

import {
  HeroSection,
  ServicesSection,
  RegionsSection,
  TestimonialsSection,
  AppointmentSection,
  CtaSection,
  PricingSection,
} from "../components/home-sections";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />
      <ServicesSection />
      <RegionsSection />
      <TestimonialsSection />
      <PricingSection />
      <AppointmentSection />
      <CtaSection />
    </div>
  );
}
