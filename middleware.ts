// import { NextRequest, NextResponse } from 'next/server';

// export function middleware(request: NextRequest) {
//   const country = (request as any).geo?.country || 'AU';
//   const host = request.headers.get('host') || '';

//   const isFromChina = country === 'CN';
//   const isCom = host.includes('chrisiogwaan.com') && !host.includes('.cn');
//   const isComCn = host.includes('chrisiogwaan.com.cn');

//   if (isFromChina && isCom) {
//     return NextResponse.redirect('https://www.chrisiogwaan.com.cn');
//   }

//   if (!isFromChina && isComCn) {
//     return NextResponse.redirect('https://www.chrisiogwaan.com');
//   }

//   return NextResponse.next();
// }
