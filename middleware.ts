import { NextRequest, NextResponse } from 'next/server';

const locales = ['ru', 'en'];
const defaultLocale = 'ru';

function detectLocale(request: NextRequest): string {
  // 1. Cookie preference
  const cookie = request.cookies.get('locale')?.value;
  if (cookie && locales.includes(cookie)) return cookie;

  // 2. Accept-Language header
  const accept = request.headers.get('accept-language');
  if (accept) {
    const lang = accept.split(',')[0].split('-')[0].toLowerCase();
    if (locales.includes(lang)) return lang;
  }

  return defaultLocale;
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Skip for Next.js internals and static files
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/images') ||
    pathname.includes('.')
  ) {
    return NextResponse.next();
  }

  // Already has a valid locale prefix — pass through
  const hasLocale = locales.some(
    (l) => pathname === `/${l}` || pathname.startsWith(`/${l}/`)
  );
  if (hasLocale) return NextResponse.next();

  // Redirect to detected locale
  const locale = detectLocale(request);
  const newPath = `/${locale}${pathname === '/' ? '' : pathname}`;
  return NextResponse.redirect(new URL(newPath, request.url));
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico|images).*)'],
};
