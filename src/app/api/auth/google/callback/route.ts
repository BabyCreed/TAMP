// GET /api/auth/google/callback — Google redirects here with a code. Verify the
// CSRF state, exchange the code, resolve/create the Party, set the app session
// cookie, and send the user on (to onboarding if they're new).
import { NextResponse } from "next/server";
import { createSession, readCookie, sessionCookie } from "@/server/auth";
import {
  clearedStateCookie,
  exchangeCode,
  findOrCreatePartyFromGoogle,
  googleConfigured,
  OAUTH_STATE_COOKIE,
} from "@/server/google";

export async function GET(req: Request) {
  const url = new URL(req.url);
  const origin = url.origin;
  const fail = (reason: string) => {
    const res = NextResponse.redirect(new URL(`/?error=${reason}`, origin));
    res.headers.append("Set-Cookie", clearedStateCookie());
    return res;
  };

  if (!googleConfigured()) return fail("google_not_configured");
  if (url.searchParams.get("error")) return fail("google_denied");

  const code = url.searchParams.get("code");
  const state = url.searchParams.get("state");
  const expectedState = readCookie(req.headers.get("cookie"), OAUTH_STATE_COOKIE);
  if (!code || !state || !expectedState || state !== expectedState) {
    return fail("google_state");
  }

  try {
    const identity = await exchangeCode(code, `${origin}/api/auth/google/callback`);
    if (!identity.email) return fail("google_no_email");

    const { partyId, needsOnboarding } = await findOrCreatePartyFromGoogle(identity);
    const token = await createSession(partyId);

    const dest = needsOnboarding ? "/welcome" : "/";
    const res = NextResponse.redirect(new URL(dest, origin));
    res.headers.append("Set-Cookie", sessionCookie(token));
    res.headers.append("Set-Cookie", clearedStateCookie());
    return res;
  } catch {
    return fail("google_failed");
  }
}
