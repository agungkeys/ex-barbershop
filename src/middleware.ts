import { NextRequest, NextResponse } from 'next/server'
import { getToken } from 'next-auth/jwt'

export async function middleware(request: NextRequest) {
  const token = await getToken({ req: request, secret: process.env.NEXTAUTH_SECRET })
  const { pathname } = request.nextUrl

  // Public routes
  if (pathname.startsWith('/login') || pathname.startsWith('/register') || pathname.startsWith('/api/auth')) {
    return NextResponse.next()
  }

  // Redirect to login if no token
  if (!token) {
    request.nextUrl.pathname = '/login'
    return NextResponse.redirect(request.nextUrl)
  }

  // Role-based redirect
  const role = token.role as string
  if (pathname.startsWith('/admin') && role !== 'ADMIN') {
    request.nextUrl.pathname = '/'
    return NextResponse.redirect(request.nextUrl)
  }
  if (pathname.startsWith('/barber') && role !== 'BARBER') {
    request.nextUrl.pathname = '/'
    return NextResponse.redirect(request.nextUrl)
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/admin/:path*', '/barber/:path*', '/member/:path*'],
}