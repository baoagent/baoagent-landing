import React from "react";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, icon }) => {
  return (
    <div className="bg-white rounded-xl shadow-xl p-8 max-w-4xl mx-auto">
      <div className="flex flex-col lg:flex-row items-center gap-8">
        {/* Left side - Icon/Diagram */}
        <div className="flex-shrink-0">
          <div className="bg-gray-50 rounded-full p-8 flex items-center justify-center">
            {icon}
          </div>
        </div>

        {/* Right side - Content */}
        <div className="flex-1 text-center lg:text-left">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            {title}
          </h3>
          <p className="text-gray-700 text-lg leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeatureCard; 