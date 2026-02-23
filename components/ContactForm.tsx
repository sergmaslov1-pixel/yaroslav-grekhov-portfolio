'use client';

import { useState, FormEvent } from 'react';
import { getT } from '@/lib/i18n';

export default function ContactForm({ locale }: { locale: string }) {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const f = getT(locale).form;

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => { setLoading(false); setSent(true); }, 1000);
  }

  if (sent) {
    return (
      <div style={{ padding: '80px 32px', textAlign: 'center', border: '1px solid rgba(200,169,110,0.2)' }}>
        <p style={{ fontSize: 10, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 16 }}>{f.successLabel}</p>
        <p style={{ fontSize: 20, fontWeight: 300, color: 'var(--text)', marginBottom: 12 }}>{f.successHeading}</p>
        <p style={{ fontSize: 14, color: 'var(--text-muted)' }}>{f.successBody}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }} className="form-row">
        <div>
          <label style={{ fontSize: 10, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--text-muted)', display: 'block', marginBottom: 8 }}>{f.name}</label>
          <input type="text" required className="form-input" placeholder={f.namePh} />
        </div>
        <div>
          <label style={{ fontSize: 10, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--text-muted)', display: 'block', marginBottom: 8 }}>{f.brand}</label>
          <input type="text" required className="form-input" placeholder={f.brandPh} />
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }} className="form-row">
        <div>
          <label style={{ fontSize: 10, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--text-muted)', display: 'block', marginBottom: 8 }}>{f.email}</label>
          <input type="email" required className="form-input" placeholder={f.emailPh} />
        </div>
        <div>
          <label style={{ fontSize: 10, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--text-muted)', display: 'block', marginBottom: 8 }}>{f.phone}</label>
          <input type="tel" className="form-input" placeholder={f.phonePh} />
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }} className="form-row">
        <div>
          <label style={{ fontSize: 10, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--text-muted)', display: 'block', marginBottom: 8 }}>{f.type}</label>
          <select required className="form-input">
            <option value="">{f.typePh}</option>
            {(f.typeOpts as readonly string[]).map(o => <option key={o}>{o}</option>)}
          </select>
        </div>
        <div>
          <label style={{ fontSize: 10, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--text-muted)', display: 'block', marginBottom: 8 }}>{f.location}</label>
          <input type="text" className="form-input" placeholder={f.locationPh} />
        </div>
      </div>

      <div>
        <label style={{ fontSize: 10, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--text-muted)', display: 'block', marginBottom: 8 }}>{f.dates}</label>
        <input type="text" className="form-input" placeholder={f.datesPh} />
      </div>

      <div>
        <label style={{ fontSize: 10, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--text-muted)', display: 'block', marginBottom: 8 }}>{f.brief}</label>
        <textarea className="form-input" rows={5} maxLength={500} placeholder={f.briefPh} />
      </div>

      <div>
        <label style={{ fontSize: 10, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--text-muted)', display: 'block', marginBottom: 8 }}>{f.source}</label>
        <select className="form-input">
          <option value="">{f.sourcePh}</option>
          {(f.sourceOpts as readonly string[]).map(o => <option key={o}>{o}</option>)}
        </select>
      </div>

      <p style={{ fontSize: 11, color: 'var(--text-muted)', lineHeight: 1.7 }}>{f.consent}</p>

      <button type="submit" className="btn-primary" disabled={loading} style={{ alignSelf: 'flex-start', opacity: loading ? 0.7 : 1 }}>
        {loading ? f.sending : f.submit}
      </button>

      <style>{`@media (max-width: 640px) { .form-row { grid-template-columns: 1fr !important; } }`}</style>
    </form>
  );
}
