import Link from 'next/link';
import type { Metadata } from 'next';
import { getT } from '@/lib/i18n';
import { pos } from '@/lib/imageConfig';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = getT(locale);
  return {
    title: 'Yaroslav Grekhov — Makeup Artist | Fashion & Advertising',
    description: t.home.hero.tagline,
  };
}

const BRANDS = [
  'CHANEL', 'DIOR', 'YSL', 'LANCÔME', 'ESTÉE LAUDER',
  'MAC', 'NARS', 'CARTIER', 'BULGARI', 'VOGUE', "HARPER'S BAZAAR", 'ELLE', 'TATLER',
];

const PRESS = [
  { name: 'MARIE CLAIRE KAZAKHSTAN', issue: { ru: 'Весна / Лето 2025 — Обложка №2', en: 'Spring / Summer 2025 — Cover №2' }, src: '/images/cover-marie-claire-ss25.jpg' },
  { name: 'MARIE CLAIRE KAZAKHSTAN', issue: { ru: 'Зима 2025–2026 — Обложка №3',    en: 'Winter 2025–2026 — Cover №3'     }, src: '/images/cover-marie-claire-w25.jpg' },
  { name: 'МОСКВИЧКА',               issue: { ru: 'Апрель 2025 — Обложка №4',         en: 'April 2025 — Cover №4'            }, src: '/images/cover-moskvichka-apr25.jpg' },
];

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = getT(locale);
  const tickerItems = [...BRANDS, ...BRANDS];

  return (
    <>
      {/* ─── Hero ─────────────────────────────────────── */}
      <section style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '120px 32px 140px',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(200,169,110,0.07) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />

        <div style={{ position: 'relative', zIndex: 1, maxWidth: 800 }}>
          <div className="gold-divider animate-in" style={{ marginBottom: 40, justifyContent: 'center' }}>✦</div>

          <h1 className="heading-serif-italic animate-in delay-1" style={{
            fontSize: 'clamp(52px, 10vw, 128px)',
            lineHeight: 1.05,
            color: 'var(--text)',
            marginBottom: 28,
          }}>
            Yaroslav Grekhov
          </h1>

          <p className="animate-in delay-2" style={{
            fontSize: 'clamp(10px, 1.4vw, 12px)',
            letterSpacing: '0.32em',
            textTransform: 'uppercase',
            color: 'var(--text-muted)',
            marginBottom: 48,
          }}>
            {t.home.hero.tagline}
          </p>

          <Link href={`/${locale}/contact`} className="btn-primary animate-in delay-3">
            {t.home.hero.cta}
          </Link>

          <div className="gold-divider animate-in delay-4" style={{ marginTop: 40, justifyContent: 'center' }}>
            {t.home.hero.geo}
          </div>
        </div>

        <div style={{
          position: 'absolute', bottom: 36, left: '50%', transform: 'translateX(-50%)',
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8,
        }}>
          <span style={{ fontSize: 9, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--text-muted)' }}>
            {t.home.hero.scroll}
          </span>
          <div style={{ width: 1, height: 36, background: 'linear-gradient(to bottom, var(--accent), transparent)' }} />
        </div>
      </section>

      {/* ─── Selected Work ────────────────────────────── */}
      <section style={{ padding: '100px 32px', maxWidth: 1280, margin: '0 auto' }}>
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: 56, flexWrap: 'wrap', gap: 16 }}>
          <div>
            <p className="section-label">{t.home.portfolio.label}</p>
            <h2 className="heading-serif" style={{ fontSize: 'clamp(32px, 5vw, 60px)', color: 'var(--text)', lineHeight: 1.1 }}>
              {t.home.portfolio.heading}
            </h2>
          </div>
          <Link href={`/${locale}/work`} className="btn-outline">{t.home.portfolio.viewAll}</Link>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 2 }} className="works-grid">
          {t.cases.slice(0, 3).map((w, i) => (
            <Link key={i} href={`/${locale}/work`} style={{ position: 'relative', overflow: 'hidden', display: 'block' }} className="work-item">
              <div style={{ aspectRatio: '4/5', overflow: 'hidden', transition: 'transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)' }}>
                <img src={w.src} alt={`${w.brand} — ${w.project}`} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: pos(w.src), display: 'block' }} />
              </div>
              <div className="work-overlay" style={{
                position: 'absolute', inset: 0, background: 'rgba(253,249,244,0.93)',
                display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                opacity: 0, transition: 'opacity 0.35s', padding: 28, textAlign: 'center',
              }}>
                <p style={{ fontSize: 9, letterSpacing: '0.24em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 10 }}>{w.type}</p>
                <p className="heading-serif" style={{ fontSize: 18, color: 'var(--text)', marginBottom: 6 }}>{w.brand}</p>
                <p style={{ fontSize: 12, color: 'var(--text-muted)' }}>{w.project}</p>
              </div>
            </Link>
          ))}
        </div>

        <style>{`
          .work-item:hover .work-overlay { opacity: 1 !important; }
          .work-item:hover > div { transform: scale(1.04); }
          @media (max-width: 900px) { .works-grid { grid-template-columns: repeat(2, 1fr) !important; } }
          @media (max-width: 540px) { .works-grid { grid-template-columns: 1fr !important; } }
        `}</style>
      </section>

      {/* ─── Brand Ticker ─────────────────────────────── */}
      <div style={{ borderTop: '1px solid rgba(0,0,0,0.07)', borderBottom: '1px solid rgba(0,0,0,0.07)', padding: '18px 0', overflow: 'hidden', background: 'var(--bg-card)' }}>
        <div className="ticker-track">
          {tickerItems.map((brand, i) => (
            <span key={i} style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.26em', textTransform: 'uppercase', color: 'var(--text-muted)', padding: '0 44px', flexShrink: 0 }}>
              {brand}
            </span>
          ))}
        </div>
      </div>

      {/* ─── About Snippet ────────────────────────────── */}
      <section style={{ padding: '100px 32px', maxWidth: 1280, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }} className="about-grid">
          <div style={{ aspectRatio: '3/4', overflow: 'hidden' }}>
            <img src="/images/editorial-cream-chanel.jpg" alt="Yaroslav Grekhov — Makeup Artist" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: pos('/images/editorial-cream-chanel.jpg'), display: 'block' }} />
          </div>
          <div>
            <p className="section-label">{t.home.about.label}</p>
            <h2 className="heading-serif-italic" style={{ fontSize: 'clamp(30px, 4vw, 52px)', color: 'var(--text)', lineHeight: 1.2, marginBottom: 28 }}>
              {t.home.about.heading}
            </h2>
            <p style={{ fontSize: 15, color: 'var(--text-muted)', lineHeight: 1.95, marginBottom: 40, maxWidth: 440 }}>
              {t.home.about.body}
            </p>
            <Link href={`/${locale}/about`} className="btn-outline">{t.home.about.cta}</Link>
          </div>
        </div>
        <style>{`@media (max-width: 768px) { .about-grid { grid-template-columns: 1fr !important; gap: 40px !important; } }`}</style>
      </section>

      {/* ─── Press ────────────────────────────────────── */}
      <section style={{ padding: '100px 32px', background: 'var(--bg-card)', borderTop: '1px solid rgba(0,0,0,0.07)', borderBottom: '1px solid rgba(0,0,0,0.07)' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: 56, flexWrap: 'wrap', gap: 16 }}>
            <div>
              <p className="section-label">{t.home.press.label}</p>
              <h2 className="heading-serif" style={{ fontSize: 'clamp(28px, 4vw, 52px)', color: 'var(--text)' }}>{t.home.press.heading}</h2>
            </div>
            <Link href={`/${locale}/press`} className="btn-outline">{t.home.press.cta}</Link>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 32 }} className="press-grid">
            {PRESS.map((p, i) => (
              <Link href={`/${locale}/press`} key={i} style={{ display: 'block' }} className="press-item">
                <div style={{ overflow: 'hidden', marginBottom: 18 }}>
                  <div style={{ aspectRatio: '3/4', overflow: 'hidden', transition: 'transform 0.55s cubic-bezier(0.25, 0.46, 0.45, 0.94)' }}>
                    <img src={p.src} alt={p.name} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: pos(p.src), display: 'block' }} />
                  </div>
                </div>
                <p style={{ fontSize: 9, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 6 }}>{p.name}</p>
                <p style={{ fontSize: 12, color: 'var(--text-muted)' }}>{p.issue[locale as 'ru' | 'en']}</p>
              </Link>
            ))}
          </div>
          <style>{`
            .press-item:hover > div > div { transform: scale(1.04); }
            @media (max-width: 768px) { .press-grid { grid-template-columns: repeat(2, 1fr) !important; } }
            @media (max-width: 480px) { .press-grid { grid-template-columns: 1fr !important; } }
          `}</style>
        </div>
      </section>

      {/* ─── Footer CTA ───────────────────────────────── */}
      <section style={{ padding: '120px 32px', textAlign: 'center' }}>
        <div className="gold-divider" style={{ justifyContent: 'center', marginBottom: 40 }}>✦</div>
        <h2 className="heading-serif-italic" style={{ fontSize: 'clamp(28px, 5vw, 68px)', color: 'var(--text)', marginBottom: 20, maxWidth: 720, marginLeft: 'auto', marginRight: 'auto', lineHeight: 1.2 }}>
          {t.home.cta.heading}
        </h2>
        <p style={{ fontSize: 12, color: 'var(--text-muted)', letterSpacing: '0.1em', marginBottom: 48 }}>
          {t.home.cta.sub}
        </p>
        <Link href={`/${locale}/contact`} className="btn-primary">{t.home.cta.btn}</Link>
      </section>
    </>
  );
}
