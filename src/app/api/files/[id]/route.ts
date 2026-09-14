// Serves a stored file by id. Public kinds (avatars, POD/truck photos) are open;
// private kinds (KYC documents) require the owner or an admin. Bytes are read
// from the local object store confined to UPLOAD_DIR.
import { partyFromCookie } from "@/server/auth";
import { prisma } from "@/server/prisma";
import { isPublicKind, loadFile } from "@/server/storage";

export const runtime = "nodejs";

export async function GET(
  req: Request,
  { params }: { params: Promise<{ id: string }> },
): Promise<Response> {
  const { id } = await params;
  const file = await loadFile(id);
  if (!file) return new Response("Not found", { status: 404 });

  if (!isPublicKind(file.kind)) {
    const partyId = await partyFromCookie(req.headers.get("cookie"));
    if (!partyId) return new Response("Unauthorized", { status: 401 });
    if (partyId !== file.ownerId) {
      const me = await prisma.party.findUnique({ where: { id: partyId }, select: { role: true } });
      if (me?.role !== "ADMIN") return new Response("Forbidden", { status: 403 });
    }
  }

  // Not-modified short-circuit for repeat loads.
  if (req.headers.get("if-none-match") === file.etag) {
    return new Response(null, { status: 304, headers: { ETag: file.etag } });
  }

  const cache = isPublicKind(file.kind)
    ? "public, max-age=3600"
    : "private, no-store";
  return new Response(new Uint8Array(file.bytes), {
    status: 200,
    headers: {
      "content-type": file.contentType,
      "content-length": String(file.bytes.length),
      "cache-control": cache,
      ETag: file.etag,
      "content-disposition": `inline; filename="${encodeURIComponent(file.filename)}"`,
    },
  });
}
