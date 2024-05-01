import { getToken } from "next-auth/jwt"
import { NextRequest, NextResponse } from "next/server"

export async function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl
    const session = await getToken({req: request})

    if (session && (pathname.startsWith('/sign-in') || pathname.startsWith('/sign-up'))) {
        return NextResponse.redirect(new URL('/profile', request.url))
    }
    if (!session && pathname.startsWith('/profile')) {
        return NextResponse.redirect(new URL('/sign-in', request.url))
    }
    return NextResponse.next()
  }