import { locales } from '../../i18n/request';
import Layout from '../../components/Layout';

export function generateStaticParams() {
  return locales.map((locale: string) => ({ locale }));
}

export default async function LocaleLayout({ children, params }: { children: React.ReactNode; params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  
  return <Layout locale={locale}>{children}</Layout>;
} 