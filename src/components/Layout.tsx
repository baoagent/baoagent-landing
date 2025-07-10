import React from "react";
import LanguageSwitcher from "./LanguageSwitcher";

interface LayoutProps {
  children: React.ReactNode;
  locale: string;
}

const Layout: React.FC<LayoutProps> = ({ children, locale }) => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 flex flex-col items-center font-sans">
      <div className="w-full max-w-6xl px-6 py-4 flex justify-end">
        <LanguageSwitcher locale={locale} />
      </div>
      {children}
    </div>
  );
};

export default Layout; 