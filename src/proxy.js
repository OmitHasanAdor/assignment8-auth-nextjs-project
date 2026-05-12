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
  return NextResponse.redirect(new URL('/login', request.url))
}

export const config = {
  matcher: ['/myprofile','/product/:path*'], 
//   matcher: '/career',
}