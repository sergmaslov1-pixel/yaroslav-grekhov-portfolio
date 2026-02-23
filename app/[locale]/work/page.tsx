import type { Metadata } from 'next';
import { getT } from '@/lib/i18n';
import WorkGrid from '@/components/WorkGrid';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = getT(locale);
  return { title: t.work.pageTitle, description: t.work.pageDesc };
}

export default async function WorkPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = getT(locale);

  return (
    <div style={{ paddingTop: 72 }}>
      <div style={{ padding: '80px 32px 64px', maxWidth: 1280, margin: '0 auto' }}>
        <p className="section-label">{t.work.label}</p>
        <h1 style={{ fontSize: 'clamp(32px, 6vw, 72px)', fontWeight: 300, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--text)' }}>
          {t.work.heading}
        </h1>
      </div>
      <WorkGrid locale={locale} />
    </div>
  );
}
