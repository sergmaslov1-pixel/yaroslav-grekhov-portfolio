import Link from 'next/link';
import type { Metadata } from 'next';
import { getT } from '@/lib/i18n';
import { pos } from '@/lib/imageConfig';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = getT(locale);
  return { title: t.about.pageTitle, description: t.about.pageDesc };
}

const CLIENTS = ['CHANEL', 'DIOR', 'YSL', 'LANCÔME', 'ESTÉE LAUDER', 'MAC', 'NARS', 'CARTIER', 'BULGARI', 'VOGUE', "HARPER'S BAZAAR", 'ELLE'];

const ACHIEVEMENTS = [
  { label: { ru: 'Обложек журналов',   en: 'Magazine covers'   }, value: '14',                                  sub: { ru: 'Ведущие российские и международные издания', en: 'Leading Russian & international editions' } },
  { label: { ru: 'Рекламных кампаний', en: 'Ad campaigns'       }, value: '25+',                                sub: { ru: 'Глобальные люкс-бренды',                     en: 'Global luxury brand campaigns'             } },
  { label: { ru: 'Недели моды',        en: 'Fashion Weeks'      }, value: 'Moscow FW × 8, Paris FW × 2',        sub: { ru: 'Приглашённый визажист на Paris FW',          en: 'Guest artist at Paris Fashion Week'         } },
  { label: { ru: 'Образование',        en: 'Education'          }, value: 'MUFE Academy, Paris',                sub: { ru: 'Мастер-классы: Pat McGrath, Diane Kendal',   en: 'Masterclasses: Pat McGrath, Diane Kendal'   } },
  { label: { ru: 'География',          en: 'Geography'          }, value: 'Moscow · Paris · Milan',             sub: { ru: 'Дубай · Стамбул · Лондон',                  en: 'Dubai · Istanbul · London'                  } },
];

export default async function AboutPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = getT(locale);
  const loc = locale as 'ru' | 'en';

  return (
    <div style={{ paddingTop: 72 }}>

      {/* ─── Hero ──────────────────────────────────────── */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', minHeight: '85vh', alignItems: 'stretch' }} className="about-hero">
        <div style={{ padding: 'clamp(48px, 8vw, 120px) clamp(32px, 5vw, 80px)', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <p className="section-label">{t.about.heroLabel}</p>
          <h1 style={{ fontSize: 'clamp(36px, 5vw, 64px)', fontWeight: 300, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--text)', lineHeight: 1.1, marginBottom: 32 }}>
            Yaroslav<br />Grekhov
          </h1>
          <p style={{ fontSize: 14, color: 'var(--accent)', letterSpacing: '0.08em', marginBottom: 8 }}>{t.about.sub1}</p>
          <p style={{ fontSize: 13, color: 'var(--text-muted)', letterSpacing: '0.04em' }}>{t.about.sub2}</p>
        </div>
        <div style={{ overflow: 'hidden', height: '100%' }}>
          <img src="/images/editorial-cream-chanel.jpg" alt="Yaroslav Grekhov — Makeup Artist portrait" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: pos('/images/editorial-cream-chanel.jpg'), display: 'block' }} />
        </div>
      </div>

      {/* ─── Biography ─────────────────────────────────── */}
      <section style={{ padding: '100px 32px', maxWidth: 1280, margin: '0 auto' }}>
        <p className="section-label">{t.about.bioLabel}</p>
        <div style={{ maxWidth: 720, marginTop: 40 }}>
          <p style={{ fontSize: 15, color: 'var(--text-muted)', lineHeight: 1.9, marginBottom: 24 }}>{t.about.bio1}</p>
          <p style={{ fontSize: 15, color: 'var(--text-muted)', lineHeight: 1.9, marginBottom: 24 }}>{t.about.bio2}</p>
          <p style={{ fontSize: 15, color: 'var(--text-muted)', lineHeight: 1.9 }}>{t.about.bio3}</p>
        </div>

        {/* Portrait row */}
        <div style={{ marginTop: 80, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 2 }} className="portrait-row">
          <div style={{ aspectRatio: '16/9', overflow: 'hidden' }}>
            <img src="/images/editorial-classic.jpg" alt="Fashion editorial — classic beauty" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: pos('/images/editorial-classic.jpg'), display: 'block' }} />
          </div>
          <div style={{ aspectRatio: '1/1', overflow: 'hidden' }}>
            <img src="/images/editorial-fur-coat.jpg" alt="Fashion editorial — fur coat" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: pos('/images/editorial-fur-coat.jpg'), display: 'block' }} />
          </div>
        </div>
        <style>{`@media (max-width: 768px) { .portrait-row { grid-template-columns: 1fr !important; } }`}</style>
      </section>

      {/* ─── Achievements ──────────────────────────────── */}
      <section style={{ borderTop: '1px solid rgba(0,0,0,0.07)', padding: '100px 32px', maxWidth: 1280, margin: '0 auto' }}>
        <p className="section-label">{t.about.numbersLabel}</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 2, marginTop: 48 }} className="ach-grid">
          {ACHIEVEMENTS.map((a, i) => (
            <div key={i} style={{ padding: '40px 24px', borderLeft: '1px solid rgba(0,0,0,0.07)' }}>
              <p style={{ fontSize: 10, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 16 }}>{a.label[loc]}</p>
              <p style={{ fontSize: 20, fontWeight: 300, color: 'var(--text)', marginBottom: 10, lineHeight: 1.3 }}>{a.value}</p>
              <p style={{ fontSize: 11, color: 'var(--text-muted)', lineHeight: 1.6 }}>{a.sub[loc]}</p>
            </div>
          ))}
        </div>
        <style>{`
          @media (max-width: 1100px) { .ach-grid { grid-template-columns: repeat(3, 1fr) !important; } }
          @media (max-width: 640px)  { .ach-grid { grid-template-columns: 1fr !important; } }
        `}</style>
      </section>

      {/* ─── Clients ───────────────────────────────────── */}
      <section style={{ borderTop: '1px solid rgba(0,0,0,0.07)', padding: '100px 32px', maxWidth: 1280, margin: '0 auto' }}>
        <p className="section-label">{t.about.clientsLabel}</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 2, marginTop: 48 }} className="clients-grid">
          {CLIENTS.map((c, i) => (
            <div key={i} style={{ padding: '36px 24px', border: '1px solid rgba(0,0,0,0.07)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--text-muted)' }}>{c}</span>
            </div>
          ))}
        </div>
        <style>{`@media (max-width: 768px) { .clients-grid { grid-template-columns: repeat(2, 1fr) !important; } }`}</style>
      </section>

      {/* ─── CTA ───────────────────────────────────────── */}
      <section style={{ padding: '100px 32px', textAlign: 'center', borderTop: '1px solid rgba(0,0,0,0.07)' }}>
        <p style={{ fontSize: 13, color: 'var(--text-muted)', marginBottom: 32 }}>{t.about.ctaSub}</p>
        <Link href={`/${locale}/contact`} className="btn-primary">{t.about.ctaBtn}</Link>
      </section>

      <style>{`@media (max-width: 768px) { .about-hero { grid-template-columns: 1fr !important; } }`}</style>
    </div>
  );
}
