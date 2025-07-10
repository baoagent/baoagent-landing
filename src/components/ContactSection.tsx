import CurrentYear from "./CurrentYear";
import { createTranslator } from "../utils/translations";
import { EMAIL_ADDRESSES } from "../constants";

interface ContactSectionProps {
  messages: Record<string, unknown>;
}

const ContactSection: React.FC<ContactSectionProps> = ({ messages }) => {
  const t = createTranslator(messages);
  
  return (
    <footer className="w-full max-w-2xl px-6 py-10 text-center border-t border-gray-200 mt-8">
      <h2 className="text-xl font-semibold mb-2 text-gray-900">{t('contact.title')}</h2>
      <div className="flex flex-col sm:flex-row justify-center gap-2 text-gray-700 text-base">
        <a href={`mailto:${EMAIL_ADDRESSES.hello}?subject=Hello%20BAO%20Agent&body=Hi%20there%2C`} className="hover:underline">{EMAIL_ADDRESSES.hello}</a>
        <span className="hidden sm:inline">|</span>
        <a href={`mailto:${EMAIL_ADDRESSES.kevin}?subject=Hello%20BAO%20Agent&body=Hi%20there%2C`} className="hover:underline">{EMAIL_ADDRESSES.kevin}</a>
      </div>
      <div className="mt-6 text-sm text-gray-400">&copy; <span><CurrentYear /></span> BAO Agent. {t('contact.copyright')}</div>
    </footer>
  );
};

export default ContactSection; 