'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { getT } from '@/lib/i18n';

export default function Header({ locale }: { locale: string }) {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const t = getT(locale);

  const NAV_LINKS = [
    { href: `/${locale}/work`,      label: t.nav.work },
    { href: `/${locale}/about`,     label: t.nav.about },
    { href: `/${locale}/press`,     label: t.nav.press },
    { href: `/${locale}/backstage`, label: t.nav.backstage },
    { href: `/${locale}/contact`,   label: t.nav.contact },
  ];

  // Switch /ru/ ↔ /en/ in current path
  const altLocale = locale === 'ru' ? 'en' : 'ru';
  const altPath = pathname.replace(/^\/(ru|en)/, `/${altLocale}`);

  return (
    <header style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      background: 'rgba(253, 249, 244, 0.92)',
      backdropFilter: 'blur(20px)',
      borderBottom: '1px solid rgba(0, 0, 0, 0.07)',
    }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 32px', height: 72, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>

        {/* Logo */}
        <Link href={`/${locale}`}>
          <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--text)' }}>
            Yaroslav Grekhov
          </span>
        </Link>

        {/* Desktop nav */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: 40 }} className="desktop-nav">
          {NAV_LINKS.map((link) => (
            <Link key={link.href} href={link.href} className={`nav-link${pathname === link.href ? ' active' : ''}`}>
              {link.label}
            </Link>
          ))}

          {/* Language switcher */}
          <Link href={altPath} style={{
            fontSize: 10, fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase',
            color: 'var(--accent)', borderBottom: '1px solid var(--accent)', paddingBottom: 1, textDecoration: 'none',
          }}>
            {altLocale.toUpperCase()}
          </Link>
        </nav>

        {/* Burger */}
        <button onClick={() => setMenuOpen(!menuOpen)} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 8, display: 'none', flexDirection: 'column', gap: 5 }} className="burger-btn" aria-label="Menu">
          {[0, 1, 2].map((i) => (
            <span key={i} style={{ display: 'block', width: 22, height: 1, background: 'var(--text)' }} />
          ))}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{ borderTop: '1px solid rgba(0,0,0,0.07)', padding: '20px 32px 28px', background: 'rgba(253,249,244,0.98)' }}>
          {NAV_LINKS.map((link) => (
            <Link key={link.href} href={link.href} className={`nav-link${pathname === link.href ? ' active' : ''}`} style={{ display: 'block', padding: '12px 0' }} onClick={() => setMenuOpen(false)}>
              {link.label}
            </Link>
          ))}
          <Link href={altPath} style={{ display: 'block', padding: '12px 0', fontSize: 10, fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--accent)', textDecoration: 'none' }} onClick={() => setMenuOpen(false)}>
            {altLocale === 'ru' ? 'RU — Русский' : 'EN — English'}
          </Link>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .burger-btn  { display: flex !important; }
        }
      `}</style>
    </header>
  );
}
