import type { Metadata } from 'next';
import { getT } from '@/lib/i18n';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export async function generateStaticParams() {
  return [{ locale: 'ru' }, { locale: 'en' }];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = getT(locale);
  return {
    title: {
      default: 'Yaroslav Grekhov — Makeup Artist | Fashion & Advertising',
      template: '%s | Yaroslav Grekhov',
    },
    description: t.home.hero.tagline,
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  return (
    <>
      <Header locale={locale} />
      <main style={{ flex: 1 }}>
        {children}
      </main>
      <Footer locale={locale} />
    </>
  );
}
