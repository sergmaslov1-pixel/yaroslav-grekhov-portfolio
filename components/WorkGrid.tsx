'use client';

import { useState } from 'react';
import { getT } from '@/lib/i18n';
import { pos } from '@/lib/imageConfig';

export default function WorkGrid({ locale }: { locale: string }) {
  const t = getT(locale);
  const CASES = t.cases;
  const FILTERS = t.workFilters;

  const [active, setActive] = useState<string>(FILTERS[0]);

  const filtered = active === FILTERS[0]
    ? CASES
    : CASES.filter(c => c.type === active);

  return (
    <>
      {/* Filters */}
      <div style={{ borderTop: '1px solid rgba(0,0,0,0.07)', borderBottom: '1px solid rgba(0,0,0,0.07)', padding: '0 32px', maxWidth: 1280, margin: '0 auto', display: 'flex', gap: 40, overflowX: 'auto' }}>
        {FILTERS.map(f => (
          <button key={f} onClick={() => setActive(f)} className={`filter-tab${active === f ? ' active' : ''}`}>
            {f}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '64px 32px 120px', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 2, alignItems: 'start' }} className="cases-grid">
        {filtered.map((c, i) => (
          <div key={i} style={{ position: 'relative', overflow: 'hidden' }} className="case-card">
            <div style={{ aspectRatio: c.ratio, overflow: 'hidden' }}>
              <img src={c.src} alt={`${c.brand} — ${c.project}`} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: pos(c.src), display: 'block' }} />
            </div>
            <div className="case-overlay" style={{ position: 'absolute', inset: 0, background: 'rgba(253,249,244,0.93)', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: '28px 24px', opacity: 0, transition: 'opacity 0.35s' }}>
              <p style={{ fontSize: 9, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 8 }}>{c.type}</p>
              <p style={{ fontSize: 14, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--text)', marginBottom: 4 }}>{c.brand}</p>
              <p style={{ fontSize: 12, color: 'var(--text)', marginBottom: 12, lineHeight: 1.5 }}>{c.project}</p>
              <p style={{ fontSize: 11, color: 'var(--text-muted)', lineHeight: 1.7 }}>{c.desc}</p>
              <p style={{ fontSize: 10, color: 'var(--text-muted)', marginTop: 12, lineHeight: 1.6 }}>{c.credits}</p>
            </div>
          </div>
        ))}

        {filtered.length === 0 && (
          <div style={{ gridColumn: '1 / -1', padding: '80px 0', textAlign: 'center', color: 'var(--text-muted)', fontSize: 14, letterSpacing: '0.06em' }}>
            {locale === 'ru' ? 'В этой категории пока нет проектов.' : 'No projects in this category yet.'}
          </div>
        )}
      </div>

      <style>{`
        .case-card:hover .case-overlay { opacity: 1 !important; }
        @media (max-width: 900px) { .cases-grid { grid-template-columns: repeat(2, 1fr) !important; } }
        @media (max-width: 540px) { .cases-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </>
  );
}
