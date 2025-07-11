import { notFound } from 'next/navigation';
import { getRequestConfig } from 'next-intl/server';

// Can be imported from a shared config
export const locales = ['en', 'es', 'zh'] as const;
export type Locale = (typeof locales)[number];

export default getRequestConfig(async ({ locale }) => {
    // Validate that the incoming `locale` parameter is valid
    if (!locales.includes(locale as Locale)) notFound();

    try {
        // During build time, try to load messages directly from the file system
        if (process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'development') {
            const messages = await import(`../../public/messages/${locale}.json`);
            return {
                locale: locale as Locale,
                messages: messages.default || messages
            };
        }
    } catch {
        console.warn(`Failed to load messages for locale ${locale} from file system, trying fetch...`);
    }

    // Fallback to fetch method
    try {
        const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
        const response = await fetch(`${baseUrl}/messages/${locale}.json`);

        if (!response.ok) {
            throw new Error(`Failed to fetch messages for locale ${locale}: ${response.status}`);
        }

        const messages = await response.json();

        return {
            locale: locale as Locale,
            messages
        };
    } catch (error) {
        console.error(`Error loading messages for locale ${locale}:`, error);
        notFound();
    }
}); 