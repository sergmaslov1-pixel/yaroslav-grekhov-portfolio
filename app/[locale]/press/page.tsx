import type { Metadata } from 'next';
import { getT } from '@/lib/i18n';
import { pos } from '@/lib/imageConfig';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = getT(locale);
  return { title: t.press.pageTitle, description: t.press.pageDesc };
}

const PUBLICATIONS = [
  {
    name: 'Marie Claire Kazakhstan',
    date: { ru: 'Весна / Лето 2025', en: 'Spring / Summer 2025' },
    topic: { ru: 'Выпуск №2 — Обложка', en: 'Issue №2 — Cover Story' },
    sub: { ru: 'Макро-бьюти редакция — тёмные глаза, бордовые губы', en: 'Macro beauty editorial — smoky eyes, burgundy lip' },
    src: '/images/cover-marie-claire-ss25.jpg',
    ratio: '3/4',
    type: { ru: 'Обложка', en: 'Cover' },
  },
  {
    name: 'Marie Claire Kazakhstan',
    date: { ru: 'Зима 2025–2026', en: 'Winter 2025–2026' },
    topic: { ru: 'Выпуск №3 — Обложка', en: 'Issue №3 — Cover Story' },
    sub: { ru: 'Авангардная перевёрнутая композиция, смелые оранжевые тени', en: 'Avant-garde upside-down composition, bold orange eyeshadow' },
    src: '/images/cover-marie-claire-w25.jpg',
    ratio: '3/4',
    type: { ru: 'Обложка', en: 'Cover' },
  },
  {
    name: 'Москвичка',
    date: { ru: 'Апрель 2025', en: 'April 2025' },
    topic: { ru: 'Выпуск №4 — Обложка', en: 'Issue №4 — Cover' },
    sub: { ru: 'Авангардная блондинка, архитектурный образ', en: 'Avant-garde blonde, architectural beauty' },
    src: '/images/cover-moskvichka-apr25.jpg',
    ratio: '3/4',
    type: { ru: 'Обложка', en: 'Cover' },
  },
  {
    name: "Harper's Bazaar Russia",
    date: { ru: 'Март 2026', en: 'March 2026' },
    topic: { ru: '«Power Красота»', en: '«Power Beauty»' },
    sub: { ru: '12-страничная фэшн-история', en: '12-page fashion story' },
    src: '/images/editorial-chanel-boutique.jpg',
    ratio: '3/4',
    type: { ru: 'Публикация', en: 'Feature' },
  },
  {
    name: "L'Officiel Russia",
    date: { ru: 'Июнь 2025', en: 'June 2025' },
    topic: { ru: 'Летняя бьюти — «Skin First»', en: 'Summer Beauty — «Skin First»' },
    sub: { ru: 'Тренд: натуральный макияж', en: 'Trend: natural makeup' },
    src: '/images/editorial-cream-chanel.jpg',
    ratio: '3/4',
    type: { ru: 'Публикация', en: 'Feature' },
  },
  {
    name: 'Numero Russia',
    date: { ru: 'Октябрь 2025', en: 'October 2025' },
    topic: { ru: '«Искусство лица»', en: '«Art of Face»' },
    sub: { ru: 'Экспериментальная бьюти-серия', en: 'Experimental beauty series' },
    src: '/images/editorial-fur-coat.jpg',
    ratio: '3/4',
    type: { ru: 'Редакция', en: 'Editorial' },
  },
  {
    name: 'Vogue Italia (online)',
    date: { ru: 'Февраль 2026', en: 'February 2026' },
    topic: { ru: 'PhotoVogue — «Luminance»', en: 'PhotoVogue feature — «Luminance»' },
    sub: { ru: 'Серия портретов', en: 'Portrait series' },
    src: '/images/editorial-classic.jpg',
    ratio: '3/4',
    type: { ru: 'Публикация', en: 'Feature' },
  },
];

export default async function PressPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = getT(locale);
  const loc = locale as 'ru' | 'en';

  return (
    <div style={{ paddingTop: 72 }}>
      <div style={{ padding: '80px 32px 64px', maxWidth: 1280, margin: '0 auto' }}>
        <p className="section-label">{t.press.label}</p>
        <h1 style={{ fontSize: 'clamp(32px, 6vw, 72px)', fontWeight: 300, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--text)' }}>
          {t.press.heading}
        </h1>
      </div>

      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 32px 120px', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 32 }} className="press-grid">
        {PUBLICATIONS.map((p, i) => (
          <div key={i} className="press-card" style={{ cursor: 'pointer' }}>
            <div style={{ overflow: 'hidden', marginBottom: 20, position: 'relative' }}>
              <div style={{ aspectRatio: p.ratio, overflow: 'hidden' }} className="press-img-wrap">
                <img src={p.src} alt={`${p.name} — ${p.topic[loc]}`} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: pos(p.src), display: 'block' }} />
              </div>
              <div style={{ position: 'absolute', top: 12, right: 12, background: 'rgba(253,249,244,0.90)', padding: '4px 10px', backdropFilter: 'blur(8px)' }}>
                <span style={{ fontSize: 9, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--accent)' }}>{p.type[loc]}</span>
              </div>
            </div>
            <p style={{ fontSize: 9, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 6 }}>{p.name}</p>
            <p style={{ fontSize: 13, color: 'var(--text)', marginBottom: 6, lineHeight: 1.5 }}>{p.topic[loc]}</p>
            <p style={{ fontSize: 11, color: 'var(--text-muted)' }}>{p.sub[loc]}</p>
            <p style={{ fontSize: 11, color: 'var(--text-muted)', marginTop: 4 }}>{p.date[loc]}</p>
          </div>
        ))}
      </div>

      <style>{`
        .press-card:hover .press-img-wrap img { transform: scale(1.04); transition: transform 0.5s; }
        @media (max-width: 1100px) { .press-grid { grid-template-columns: repeat(3, 1fr) !important; } }
        @media (max-width: 768px)  { .press-grid { grid-template-columns: repeat(2, 1fr) !important; } }
        @media (max-width: 480px)  { .press-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </div>
  );
}
