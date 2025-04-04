import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const country = request.geo?.country || 'US';
  const host = request.headers.get('host');

  const isMainlandChina = country === 'CN';
  const isCom = host?.endsWith("chrisiogwaan.com");

  if (isMainlandChina && isCom) {
    return NextResponse.redirect("https://www.chrisiogwaan.com.cn");
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
