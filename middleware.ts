import createMiddleware from 'next-intl/middleware';
import { locales } from './src/i18n/request';

export default createMiddleware({
    locales,
    defaultLocale: 'en',
    localePrefix: 'always'
});

export const config = {
    matcher: ['/', '/(en|es|zh)/:path*']
}; 