"use client";
import React from "react";
import HeroSection from "../components/HeroSection";
import HowItWorksSection from "../components/HowItWorksSection";
import WaitlistForm from "../components/WaitlistForm";
import ContactSection from "../components/ContactSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 flex flex-col items-center font-sans">
      <HeroSection />
      <HowItWorksSection />
      <WaitlistForm />
      <ContactSection />
    </div>
  );
}
