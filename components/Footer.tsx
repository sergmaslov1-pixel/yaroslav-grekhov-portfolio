import Link from 'next/link';
import { getT } from '@/lib/i18n';

export default function Footer({ locale }: { locale: string }) {
  const t = getT(locale);

  return (
    <footer style={{ borderTop: '1px solid rgba(0,0,0,0.07)', padding: '48px 32px' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 24 }}>
        <div>
          <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--text)', marginBottom: 8 }}>
            Yaroslav Grekhov
          </p>
          <p style={{ fontSize: 12, color: 'var(--text-muted)' }}>
            © 2026 Yaroslav Grekhov. {t.footer.rights}.
          </p>
        </div>

        <div style={{ display: 'flex', gap: 32, alignItems: 'center', flexWrap: 'wrap' }}>
          <a href="https://instagram.com/yaroslav.grekhov.mua" target="_blank" rel="noopener noreferrer" style={{ fontSize: 10, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--text-muted)' }} className="hover-accent">
            Instagram
          </a>
          <a href="https://t.me/yaroslav_grekhov" target="_blank" rel="noopener noreferrer" style={{ fontSize: 10, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--text-muted)' }} className="hover-accent">
            Telegram
          </a>
          <Link href={`/${locale}/privacy`} style={{ fontSize: 10, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--text-muted)' }} className="hover-accent">
            {t.footer.privacy}
          </Link>
        </div>
      </div>
    </footer>
  );
}
