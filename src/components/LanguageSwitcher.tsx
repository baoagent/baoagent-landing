"use client";
import { useRouter, usePathname } from 'next/navigation';
import { locales } from '../i18n/request';
import { LANGUAGE_NAMES } from '../constants';

interface LanguageSwitcherProps {
  locale: string;
}

const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({ locale }) => {
  const router = useRouter();
  const pathname = usePathname();

  const handleLanguageChange = (newLocale: string) => {
    // Remove the current locale from the pathname
    const pathWithoutLocale = pathname.replace(`/${locale}`, '') || '/';
    // Navigate to the new locale
    router.push(`/${newLocale}${pathWithoutLocale}`);
  };

  return (
    <div className="flex items-center gap-2">
      <span className="text-sm text-gray-600">Language:</span>
      <div className="flex gap-1">
        {locales.map((loc) => (
          <button
            key={loc}
            onClick={() => handleLanguageChange(loc)}
            className={`px-3 py-1 text-sm rounded-md transition-colors ${
              locale === loc
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {LANGUAGE_NAMES[loc as keyof typeof LANGUAGE_NAMES]}
          </button>
        ))}
      </div>
    </div>
  );
};

export default LanguageSwitcher; 