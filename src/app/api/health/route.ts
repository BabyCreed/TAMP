// GET /api/health — liveness + DB readiness probe for load balancers / uptime
// monitors. Returns 200 when the database answers, 503 otherwise.
import { NextResponse } from "next/server";
import { logger } from "@/server/logger";
import { prisma } from "@/server/prisma";

export const dynamic = "force-dynamic"; // never cache a health probe

export async function GET() {
  const started = Date.now();
  try {
    await prisma.$queryRaw`SELECT 1`;
    return NextResponse.json({
      status: "ok",
      db: "up",
      dbLatencyMs: Date.now() - started,
      uptimeSec: Math.round(process.uptime()),
      ts: new Date().toISOString(),
    });
  } catch (err) {
    logger.error("health_db_down", { message: err instanceof Error ? err.message : String(err) });
    return NextResponse.json(
      { status: "error", db: "down", ts: new Date().toISOString() },
      { status: 503 },
    );
  }
}
