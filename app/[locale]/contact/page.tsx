import type { Metadata } from 'next';
import { getT } from '@/lib/i18n';
import ContactForm from '@/components/ContactForm';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = getT(locale);
  return { title: t.contact.pageTitle, description: t.contact.pageDesc };
}

export default async function ContactPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = getT(locale);

  const CONTACTS = [
    { label: t.contact.agentLabel,    value: 'Мария Светлова',           detail: 'maria@yaroslavgrekhov.com · +7 (985) 000-00-00' },
    { label: t.contact.directLabel,   value: 'yaroslav@yaroslavgrekhov.com', detail: null },
    { label: t.contact.instLabel,     value: '@yaroslav.grekhov.mua',    detail: null },
    { label: t.contact.tgLabel,       value: '@yaroslav_grekhov',        detail: null },
    { label: t.contact.locationLabel, value: 'Moscow',                   detail: t.contact.locationDetail },
  ];

  return (
    <div style={{ paddingTop: 72 }}>
      {/* Header */}
      <div style={{ padding: '80px 32px 72px', maxWidth: 1280, margin: '0 auto' }}>
        <p className="section-label">{t.contact.label}</p>
        <h1 style={{ fontSize: 'clamp(32px, 6vw, 72px)', fontWeight: 300, letterSpacing: '0.05em', color: 'var(--text)', lineHeight: 1.1, marginBottom: 20 }}>
          {t.contact.heading}
        </h1>
        <p style={{ fontSize: 15, color: 'var(--text-muted)', maxWidth: 540, lineHeight: 1.8 }}>
          {t.contact.sub}
        </p>
      </div>

      {/* Main content */}
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 32px 120px', display: 'grid', gridTemplateColumns: '1fr 400px', gap: 80, alignItems: 'start' }} className="contact-grid">

        {/* Form */}
        <div>
          <p className="section-label">{t.contact.formLabel}</p>
          <ContactForm locale={locale} />
        </div>

        {/* Contacts sidebar */}
        <div>
          <p className="section-label">{t.contact.contactLabel}</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
            {CONTACTS.map((c, i) => (
              <div key={i} style={{ padding: '24px 0', borderBottom: '1px solid rgba(0,0,0,0.07)' }}>
                <p style={{ fontSize: 9, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 8 }}>{c.label}</p>
                <p style={{ fontSize: 14, color: 'var(--text)', marginBottom: c.detail ? 4 : 0 }}>{c.value}</p>
                {c.detail && <p style={{ fontSize: 12, color: 'var(--text-muted)' }}>{c.detail}</p>}
              </div>
            ))}
          </div>

          <div style={{ marginTop: 40, padding: '28px 24px', border: '1px solid rgba(200,169,110,0.15)', background: 'rgba(200,169,110,0.03)' }}>
            <p style={{ fontSize: 9, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 12 }}>{t.contact.availLabel}</p>
            <p style={{ fontSize: 13, color: 'var(--text-muted)', lineHeight: 1.7 }}>{t.contact.availText}</p>
          </div>
        </div>
      </div>

      <style>{`@media (max-width: 1024px) { .contact-grid { grid-template-columns: 1fr !important; gap: 60px !important; } }`}</style>
    </div>
  );
}
