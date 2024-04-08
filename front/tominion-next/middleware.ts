import NextAuth from 'next-auth';
import { authConfig } from './src/lib/auth.config'; //auth.configを元に認証を実施

// 認証作業を行うミドルウェア in Next.js
export const config = {
  // https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
};