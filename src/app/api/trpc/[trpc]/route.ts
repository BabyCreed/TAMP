import { fetchRequestHandler } from "@trpc/server/adapters/fetch";
import { partyFromCookie } from "@/server/auth";
import { appRouter } from "@/server/root";
import type { Context } from "@/server/trpc";

const handler = (req: Request) =>
  fetchRequestHandler({
    endpoint: "/api/trpc",
    req,
    router: appRouter,
    createContext: async ({ resHeaders }): Promise<Context> => {
      const cookieHeader = req.headers.get("cookie");
      const ip =
        req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
        req.headers.get("x-real-ip") ||
        null;
      return {
        cookieHeader,
        resHeaders,
        ip,
        partyId: await partyFromCookie(cookieHeader),
      };
    },
  });

export { handler as GET, handler as POST };
