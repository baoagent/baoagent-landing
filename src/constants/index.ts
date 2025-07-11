// Language and localization constants
export const LANGUAGE_NAMES = {
    en: 'English',
    es: 'Español',
    zh: '中文'
} as const;

export const SUPPORTED_LOCALES = Object.keys(LANGUAGE_NAMES) as Array<keyof typeof LANGUAGE_NAMES>;

// API and form endpoints
export const FORMSPREE_ENDPOINT =
    process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT ||
    (process.env.NODE_ENV === "production"
        ? "https://formspree.io/f/xvgrjwew" // Production endpoint
        : "https://formspree.io/f/mzzgngkk"); // Development endpoint
// Production: https://formspree.io/f/xvgrjwew
// Development: https://formspree.io/f/mzzgngkk

// Contact information
export const EMAIL_ADDRESSES = {
    hello: "hello@baoagent.com",
    kevin: "kevin@baoagent.com"
} as const;

// App configuration
export const APP_CONFIG = {
    name: 'BAO Agent',
    description: 'AI-powered administrative assistant for small businesses',
    version: '1.0.0',
    maxFormLength: {
        name: 100,
        description: 200,
        adminProblem: 500
    }
} as const;

// Social media links
export const SOCIAL_LINKS = {
    twitter: 'https://twitter.com/baoagent',
    linkedin: 'https://linkedin.com/company/baoagent',
    github: 'https://github.com/baoagent'
} as const;

// Form validation limits
export const VALIDATION_LIMITS = {
    minNameLength: 2,
    maxNameLength: 100,
    minDescriptionLength: 3,
    maxDescriptionLength: 200,
    minAdminProblemLength: 10,
    maxAdminProblemLength: 500
} as const; 