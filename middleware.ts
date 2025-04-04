import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const country = request.geo?.country || 'AU';
  const host = request.headers.get('host') || '';

  const isFromChina = country === 'CN';
  const isCom = host.endsWith('chrisiogwaan.com');
  const isComCn = host.endsWith('chrisiogwaan.com.cn');

  if (isFromChina && isCom) {
    return NextResponse.redirect('https://www.chrisiogwaan.com.cn');
  }

  if (!isFromChina && isComCn) {
    return NextResponse.redirect('https://www.chrisiogwaan.com');
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
