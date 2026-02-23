import type { Metadata } from 'next';
import { getT } from '@/lib/i18n';
import { pos } from '@/lib/imageConfig';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = getT(locale);
  return { title: t.backstage.pageTitle, description: t.backstage.pageDesc };
}

const VIDEOS = [
  {
    title: { ru: 'BTS: Chanel Les Beiges', en: 'BTS: Chanel Les Beiges' },
    desc: { ru: 'Процесс создания «кожи мечты» на площадке в Париже. Нанесение тона, работа с бликами.', en: 'Creating "dream skin" on set in Paris. Foundation application, highlight work.' },
    duration: '0:45', src: '/images/editorial-chanel-tweed.jpg', ratio: '16/9',
  },
  {
    title: { ru: 'BTS: Dior Lip Maximizer', en: 'BTS: Dior Lip Maximizer' },
    desc: { ru: 'Макро-подготовка губ. Скраб, уход, послойное нанесение блеска.', en: 'Macro lip prep. Scrub, care, layered gloss application.' },
    duration: '0:30', src: '/images/cover-marie-claire-ss25.jpg', ratio: '9/16',
  },
  {
    title: { ru: 'BTS: Обложка Vogue', en: 'BTS: Vogue Cover Shoot' },
    desc: { ru: 'Смена 8 образов за один день. Таймлапс + реальное время. Работа с командой.', en: '8 looks in one day. Timelapse + real time. Team collaboration.' },
    duration: '1:00', src: '/images/editorial-classic.jpg', ratio: '16/9',
  },
  {
    title: { ru: 'BTS: Moscow Fashion Week', en: 'BTS: Fashion Week Backstage' },
    desc: { ru: 'Хаос и скорость за кулисами Moscow FW. 15 моделей за 2 часа.', en: 'Chaos and speed backstage at Moscow FW. 15 models in 2 hours.' },
    duration: '0:40', src: '/images/editorial-chanel-boutique.jpg', ratio: '16/9',
  },
  {
    title: { ru: 'BTS: Cartier Jewelry', en: 'BTS: Cartier Jewelry' },
    desc: { ru: 'Тишина и точность. Минималистичный макияж для ювелирной съёмки.', en: 'Silence and precision. Minimalist makeup for a jewelry campaign.' },
    duration: '0:35', src: '/images/editorial-cream-chanel.jpg', ratio: '16/9',
  },
];

const PHOTOS = [
  { title: { ru: 'На съёмке',  en: 'On Set'    }, desc: { ru: 'Чёрно-белая классика и авангард.',             en: 'Black-and-white classic meets avant-garde.'          }, src: '/images/editorial-classic.jpg',         ratio: '1/1' },
  { title: { ru: 'На съёмке',  en: 'On Set'    }, desc: { ru: 'Люкс: кремовый editorial + Chanel аксессуары.', en: 'Luxury cream editorial + Chanel accessories.'        }, src: '/images/editorial-cream-chanel.jpg',    ratio: '1/1' },
  { title: { ru: 'Редакция',   en: 'Editorial' }, desc: { ru: 'Клетчатое пальто с мехом, отражения. Врезной кадр OROS × VLADA YAK в левом углу.', en: 'Plaid fur coat with mirror reflections. OROS × VLADA YAK inset card in lower-left corner.' }, src: '/images/editorial-fur-coat.jpg', ratio: '4/5' },
  { title: { ru: 'Бэкстейдж', en: 'Backstage' }, desc: { ru: 'Классика и современность — Hermès Birkin.',      en: 'Classic meets modern — Hermès Birkin portrait.'      }, src: '/images/editorial-birkin.jpg',          ratio: '4/5' },
  { title: { ru: 'На съёмке',  en: 'On Set'    }, desc: { ru: 'Chanel твид — тёмный, мудовый, золотые цепи.',   en: 'Chanel tweed editorial — dark, moody, gold chains.'  }, src: '/images/editorial-chanel-tweed.jpg',    ratio: '4/5' },
  { title: { ru: 'Редакция',   en: 'Editorial' }, desc: { ru: 'Chanel бутик — ч/б мода + золотая фурнитура.',   en: 'Chanel boutique — B&W fashion + gold CC hardware.'   }, src: '/images/editorial-chanel-boutique.jpg', ratio: '4/5' },
];

function PlayButton({ duration }: { duration: string }) {
  return (
    <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 12 }}>
      <div style={{ width: 56, height: 56, borderRadius: '50%', border: '1px solid rgba(200,169,110,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(253,249,244,0.15)', backdropFilter: 'blur(4px)' }}>
        <div style={{ width: 0, height: 0, borderTop: '9px solid transparent', borderBottom: '9px solid transparent', borderLeft: '14px solid var(--accent)', marginLeft: 3 }} />
      </div>
      <span style={{ fontSize: 11, letterSpacing: '0.1em', color: 'rgba(26,22,18,0.6)' }}>{duration}</span>
    </div>
  );
}

export default async function BackstagePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = getT(locale);
  const loc = locale as 'ru' | 'en';

  return (
    <div style={{ paddingTop: 72 }}>
      <div style={{ padding: '80px 32px 64px', maxWidth: 1280, margin: '0 auto' }}>
        <p className="section-label">{t.backstage.label}</p>
        <h1 style={{ fontSize: 'clamp(32px, 6vw, 72px)', fontWeight: 300, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--text)' }}>
          {t.backstage.heading}
        </h1>
      </div>

      {/* Video section */}
      <section style={{ maxWidth: 1280, margin: '0 auto', padding: '0 32px 100px' }}>
        <p className="section-label">{t.backstage.videoLabel}</p>

        {/* Featured */}
        <div style={{ marginBottom: 2, position: 'relative', overflow: 'hidden', cursor: 'pointer' }} className="video-featured">
          <div style={{ aspectRatio: VIDEOS[0].ratio, overflow: 'hidden' }}>
            <img src={VIDEOS[0].src} alt={VIDEOS[0].title[loc]} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: pos(VIDEOS[0].src), display: 'block' }} />
          </div>
          <PlayButton duration={VIDEOS[0].duration} />
          <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '40px 32px 28px', background: 'linear-gradient(to top, rgba(253,249,244,0.85), transparent)' }}>
            <p style={{ fontSize: 10, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 8 }}>{t.backstage.featured}</p>
            <p style={{ fontSize: 18, fontWeight: 500, color: 'var(--text)', marginBottom: 6 }}>{VIDEOS[0].title[loc]}</p>
            <p style={{ fontSize: 13, color: 'var(--text-muted)' }}>{VIDEOS[0].desc[loc]}</p>
          </div>
        </div>

        {/* Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 2 }} className="video-grid">
          {VIDEOS.slice(1).map((v, i) => (
            <div key={i} style={{ position: 'relative', overflow: 'hidden', cursor: 'pointer' }} className="video-item">
              <div style={{ aspectRatio: '16/9', overflow: 'hidden' }}>
                <img src={v.src} alt={v.title[loc]} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: pos(v.src), display: 'block' }} />
              </div>
              <PlayButton duration={v.duration} />
              <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '28px 20px 18px', background: 'linear-gradient(to top, rgba(253,249,244,0.82), transparent)' }}>
                <p style={{ fontSize: 12, fontWeight: 600, color: 'var(--text)', marginBottom: 4 }}>{v.title[loc]}</p>
                <p style={{ fontSize: 11, color: 'var(--text-muted)' }}>{v.desc[loc]}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Photos section */}
      <section style={{ borderTop: '1px solid rgba(0,0,0,0.07)', maxWidth: 1280, margin: '0 auto', padding: '80px 32px 120px' }}>
        <p className="section-label">{t.backstage.photoLabel}</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 2, marginTop: 40 }} className="photo-grid">
          {PHOTOS.map((p, i) => (
            <div key={i} style={{ overflow: 'hidden', cursor: 'pointer' }} className="photo-item">
              <div style={{ marginBottom: 12, overflow: 'hidden' }}>
                <div style={{ aspectRatio: p.ratio, overflow: 'hidden' }}>
                  <img src={p.src} alt={p.title[loc]} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: pos(p.src), display: 'block', transition: 'transform 0.5s' }} className="photo-img" />
                </div>
              </div>
              <p style={{ fontSize: 9, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 4 }}>{p.title[loc]}</p>
              <p style={{ fontSize: 11, color: 'var(--text-muted)', lineHeight: 1.5 }}>{p.desc[loc]}</p>
            </div>
          ))}
        </div>
      </section>

      <style>{`
        .video-featured:hover img { transform: scale(1.02); transition: transform 0.5s; }
        .video-item:hover img { transform: scale(1.02); transition: transform 0.5s; }
        .photo-item:hover .photo-img { transform: scale(1.04) !important; }
        @media (max-width: 768px) { .video-grid { grid-template-columns: 1fr !important; } .photo-grid { grid-template-columns: repeat(2, 1fr) !important; } }
        @media (max-width: 480px) { .photo-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </div>
  );
}
