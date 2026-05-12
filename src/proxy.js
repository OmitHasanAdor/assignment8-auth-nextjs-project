import { NextResponse } from "next/server";
import { headers } from "next/headers";
import { auth } from "./lib/auth";

export async function proxy(request) {
     const session = await auth.api.getSession({
        headers: await headers()
    })
    // const isLoggedIn = true;
    // console.log(isLoggedIn)
  if (session) {
        return NextResponse.next()
    }

    // login url
    const loginUrl = new URL('/login', request.url)

    // current path
    loginUrl.searchParams.set(
        "redirect",
        request.nextUrl.pathname
    )
  return NextResponse.redirect(loginUrl)
}

export const config = {
  matcher: ['/myprofile','/product/:path*'], 
//   matcher: '/career',
}


/*
export async function middleware(request) {

    const session = await auth.api.getSession({
        headers: await headers()
    })

   

   
} */