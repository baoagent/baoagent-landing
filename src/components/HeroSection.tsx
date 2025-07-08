import PorkBunIcon from "./PorkBunIcon";

const HeroSection = () => (
  <header className="w-full max-w-3xl px-6 pt-16 pb-10 text-center flex flex-col items-center">
    <div className="mb-4">
      <PorkBunIcon className="bg-yellow-100 rounded-full p-4 mb-2 shadow-md" size={56} />
    </div>
    <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-gray-900">bao agent</h1>
    <p className="text-lg sm:text-xl text-gray-700 max-w-xl mx-auto">
      AI-Powered Small Business Ownership Platform
    </p>
    <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
      Democratizing small business ownership through intelligent automation and innovative agent-based customer service. We bridge the generational knowledge gap between aging business owners and young operators, using AI agents to transform manual, repetitive workflows into efficient, scalable operations.
    </p>
  </header>
);

export default HeroSection; 