// GET /api/auth/google — begin Google sign-in: set a CSRF state cookie and
// redirect to Google's consent screen.
import { NextResponse } from "next/server";
import { authUrl, googleConfigured, newState, stateCookie } from "@/server/google";

export function GET(req: Request) {
  if (!googleConfigured()) {
    return NextResponse.redirect(new URL("/?error=google_not_configured", req.url));
  }
  const origin = new URL(req.url).origin;
  const redirectUri = `${origin}/api/auth/google/callback`;
  const state = newState();
  const res = NextResponse.redirect(authUrl(redirectUri, state));
  res.headers.append("Set-Cookie", stateCookie(state));
  return res;
}
