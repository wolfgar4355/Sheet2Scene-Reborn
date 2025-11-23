// apps/web/app/api/grimoire/[id]/route.ts
import { NextResponse } from "next/server";
import { readOne, updateEntry } from "@lib/grimoire/index";

// ------------------------------------------------------------
// GET /api/grimoire/[id]
// ------------------------------------------------------------
export async function GET(
  req: Request,
  ctx: { params: { id: string } }
) {
  const { id } = ctx.params;

  try {
    const item = await readOne(id);

    if (!item) {
      return NextResponse.json(
        { ok: false, error: "Introuvable" },
        { status: 404 }
      );
    }

    return NextResponse.json({ ok: true, item });
  } catch (err) {
    console.error("GET /api/grimoire/[id] ERROR:", err);
    return NextResponse.json(
      { ok: false, error: "Erreur interne" },
      { status: 500 }
    );
  }
}

// ------------------------------------------------------------
// PUT /api/grimoire/[id]
// ------------------------------------------------------------
export async function PUT(
  req: Request,
  ctx: { params: { id: string } }
) {
  const { id } = ctx.params;

  try {
    const patch = await req.json();
    const updated = await updateEntry(id, patch);

    if (!updated) {
      return NextResponse.json(
        { ok: false, error: "Introuvable" },
        { status: 404 }
      );
    }

    return NextResponse.json({ ok: true, item: updated });
  } catch (err) {
    console.error("PUT /api/grimoire/[id] ERROR:", err);
    return NextResponse.json(
      { ok: false, error: "Erreur interne" },
      { status: 500 }
    );
  }
}
