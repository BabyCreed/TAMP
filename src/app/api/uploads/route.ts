// Multipart upload endpoint. Requires a session; stores the bytes via the local
// object store and returns the file id + served URL. Replaces the filename-only
// mocks — callers persist the returned URL on the avatar / KYC / POD / truck row.
import { NextResponse } from "next/server";
import { partyFromCookie } from "@/server/auth";
import { logger } from "@/server/logger";
import { FILE_KINDS, type FileKind, MAX_UPLOAD_BYTES, saveUpload } from "@/server/storage";

export const runtime = "nodejs";

export async function POST(req: Request): Promise<NextResponse> {
  const partyId = await partyFromCookie(req.headers.get("cookie"));
  if (!partyId) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const form = await req.formData().catch(() => null);
  const file = form?.get("file");
  const kind = String(form?.get("kind") ?? "");
  if (!(file instanceof File)) {
    return NextResponse.json({ error: "Missing 'file' field." }, { status: 400 });
  }
  if (!FILE_KINDS.includes(kind as FileKind)) {
    return NextResponse.json(
      { error: `Invalid 'kind'. Expected one of ${FILE_KINDS.join(", ")}.` },
      { status: 400 },
    );
  }
  if (file.size > MAX_UPLOAD_BYTES) {
    return NextResponse.json({ error: "File too large (max 8 MB)." }, { status: 413 });
  }

  try {
    const bytes = Buffer.from(await file.arrayBuffer());
    const saved = await saveUpload({
      ownerId: partyId,
      kind: kind as FileKind,
      filename: file.name || "upload",
      contentType: file.type || "application/octet-stream",
      bytes,
    });
    logger.info("file_uploaded", { id: saved.id, kind: saved.kind, size: saved.size, partyId });
    return NextResponse.json(saved, { status: 201 });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Upload failed.";
    return NextResponse.json({ error: message }, { status: 400 });
  }
}
