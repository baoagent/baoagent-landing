import React from "react";
import { getMessages } from 'next-intl/server';

interface TranslationProviderProps {
  children: React.ReactNode;
  locale: string;
}

const TranslationProvider: React.FC<TranslationProviderProps> = async ({ children, locale }) => {
  await getMessages({ locale }); // Pre-load messages

  return (
    <div data-locale={locale}>
      {children}
    </div>
  );
};

export default TranslationProvider; 