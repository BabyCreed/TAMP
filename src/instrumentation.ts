// Next.js runs this once when the server process boots. We use it to start the
// in-process background worker (match expiry, webhook delivery, GC).
//
// The `process.env.NEXT_RUNTIME` check MUST use dot access: webpack's
// DefinePlugin inlines that exact form per target build, so the dynamic import
// of the Node-only scheduler is tree-shaken out of the edge bundle. Bracket
// access (process.env["NEXT_RUNTIME"]) is NOT inlined, which would drag
// node:crypto / node:fs into the edge compile and fail the build.
export async function register(): Promise<void> {
  // @ts-expect-error tsconfig's noPropertyAccessFromIndexSignature vs. DefinePlugin
  if (process.env.NEXT_RUNTIME === "nodejs") {
    if (process.env["TAMP_DISABLE_SCHEDULER"] === "1") return;
    const { startScheduler } = await import("./server/scheduler");
    startScheduler();
  }
}
