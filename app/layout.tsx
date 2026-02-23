import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin', 'cyrillic'],
  weight: ['200', '300', '400', '500', '600', '700'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Yaroslav Grekhov — Makeup Artist',
  description: 'Professional makeup artist for luxury advertising campaigns, fashion editorials and celebrity projects.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html style={{ minHeight: '100%' }}>
      <body
        className={inter.variable}
        style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}
      >
        {children}
      </body>
    </html>
  );
}
