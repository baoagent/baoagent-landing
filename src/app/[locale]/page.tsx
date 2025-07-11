import React from "react";
import { getMessages } from 'next-intl/server';
import HeroSection from "../../components/HeroSection";
import AgentWorkflowsSection from "../../components/AgentWorkflowsSection";
import WaitlistForm from "../../components/WaitlistForm";
import QuestionnaireSection from "../../components/QuestionnaireSection";
import ContactSection from "../../components/ContactSection";

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const messages = await getMessages({ locale });

  return (
    <>
      <HeroSection messages={messages} />
      <AgentWorkflowsSection messages={messages} />
      <QuestionnaireSection messages={messages} />
      <WaitlistForm messages={messages} />
      <ContactSection messages={messages} />
    </>
  );
} 