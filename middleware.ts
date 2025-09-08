import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

export const config = {
  matcher: ['/((?!api/visit|_next|favicon.ico|robots.txt|sitemap.xml).*)'],
};

export async function middleware(req: NextRequest) {
  const xff = req.headers.get('x-forwarded-for') || '';
  const ip_raw = xff.split(',')[0]?.trim() || null;

  const ua = req.headers.get('user-agent') || null;
  const referer = req.headers.get('referer') || null;
  const method = req.method;
  const path = req.nextUrl.pathname || '/';

  const country = req.headers.get('x-vercel-ip-country') || null;
  const region = req.headers.get('x-vercel-ip-country-region') || null;
  const city = req.headers.get('x-vercel-ip-city') || null;
  const vercel_pop = req.headers.get('x-vercel-id') || null;

  try {
    const url = new URL('/api/visit', req.nextUrl.origin);
    await fetch(url, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({
        ip_raw,
        ua,
        referer,
        method,
        path,
        country,
        region,
        city,
        vercel_pop,
      }),
      keepalive: true,
    });
  } catch {}

  return NextResponse.next();
}
