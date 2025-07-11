"use client";
import React, { useState } from "react";
import FeatureCard from "./FeatureCard";
import { createTranslator } from "../utils/translations";

interface AgentWorkflowsSectionProps {
  messages: Record<string, unknown>;
}

const AgentWorkflowsSection: React.FC<AgentWorkflowsSectionProps> = ({ messages }) => {
  const [activeCard, setActiveCard] = useState(0);
  const t = createTranslator(messages);

  const cards = [
    {
      title: t('agentWorkflows.scheduling.title'),
      description: t('agentWorkflows.scheduling.description'),
      icon: (
        <svg className="w-16 h-16 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: t('agentWorkflows.staffing.title'),
      description: t('agentWorkflows.staffing.description'),
      icon: (
        <svg className="w-16 h-16 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      title: t('agentWorkflows.billing.title'),
      description: t('agentWorkflows.billing.description'),
      icon: (
        <svg className="w-16 h-16 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: t('agentWorkflows.analytics.title'),
      description: t('agentWorkflows.analytics.description'),
      icon: (
        <svg className="w-16 h-16 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    }
  ];

  return (
    <section className="w-full max-w-6xl px-6 py-16">
      {/* Toggle Buttons */}
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {cards.map((card, index) => (
          <button
            key={index}
            onClick={() => setActiveCard(index)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
              activeCard === index
                ? "bg-blue-600 text-white shadow-lg"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            {index === 0 ? t('navigation.scheduling') : 
             index === 1 ? t('navigation.staffing') : 
             index === 2 ? t('navigation.billing') : 
             t('navigation.analytics')}
          </button>
        ))}
      </div>

      {/* Active Card */}
      <FeatureCard
        title={cards[activeCard].title}
        description={cards[activeCard].description}
        icon={cards[activeCard].icon}
      />
    </section>
  );
};

export default AgentWorkflowsSection; 