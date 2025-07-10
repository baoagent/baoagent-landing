import PorkBunIcon from "./PorkBunIcon";
import { createTranslator } from "../utils/translations";

interface HeroSectionProps {
  messages: Record<string, unknown>;
}

const HeroSection: React.FC<HeroSectionProps> = ({ messages }) => {
  const t = createTranslator(messages);
  
  return (
    <header className="w-full max-w-3xl px-6 pt-16 pb-10 text-center flex flex-col items-center">
      <div className="mb-4">
        <PorkBunIcon className="bg-yellow-100 rounded-full p-4 mb-2 shadow-md" size={56} />
      </div>
      <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-gray-900">{t('hero.title')}</h1>
      <p className="text-lg sm:text-xl text-gray-700 max-w-xl mx-auto">
        {t('hero.subtitle')}
      </p>
      <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
        {t('hero.description')}
      </p>
    </header>
  );
};

export default HeroSection; 