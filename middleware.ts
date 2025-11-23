import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const supportedLanguages = ['en', 'ru', 'uz'];
const defaultLanguage = 'en';

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // Skip middleware for files with extensions (static assets)
  if (pathname.match(/\.(jpg|jpeg|png|gif|svg|webp|ico|css|js|woff|woff2|ttf|eot)$/)) {
    return;
  }

  // Check if pathname already has a language
  const pathnameHasLocale = supportedLanguages.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) return;

  // Redirect to default language if no language in path
  if (pathname === '/') {
    return NextResponse.redirect(new URL(`/${defaultLanguage}`, request.url));
  }

  // For other paths without language, add default language
  return NextResponse.redirect(new URL(`/${defaultLanguage}${pathname}`, request.url));
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|sitemap|robots).*)'],
};
