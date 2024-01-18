import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const redirectUrl = new URL('/', request.url);

  const setCookieHeader = [
    `token=; Path=/; Max-Age=0;`,
    `name=; Path=/; Max-Age=0;`,
    `avatarUrl=; Path=/; Max-Age=0;`,
  ];

  console.log("deslogado")

  return NextResponse.redirect(redirectUrl, {
    headers: {
      'Set-Cookie': setCookieHeader,
    } as unknown as HeadersInit,
  });
}
