import { api } from "@/lib/api";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const code = searchParams.get('code');

  const redirectTo = request.cookies.get('redirectTo')?.value

  const registerResponse = await api.post('/register', {
    code,
  });

  const { token, avatarUrl, name } = registerResponse.data;

  const redirectUrl = redirectTo ?? new URL('/', request.url);

  const cookieExpires = 60 * 60 * 24 * 30;

  const setCookieHeader = [
    `token=${token}; Path=/; Max-Age=${cookieExpires};`,
    `name=${name}; Path=/; Max-Age=${cookieExpires};`,
    `avatarUrl=${avatarUrl}; Path=/; Max-Age=${cookieExpires};`,
  ];

  return NextResponse.redirect(redirectUrl, {
    headers: {
      'Set-Cookie': setCookieHeader
    } as unknown as HeadersInit
  });
}
