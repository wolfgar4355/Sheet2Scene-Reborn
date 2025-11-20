// apps/web/app/api/grimoire/[id]/route.ts
import { NextResponse } from "next/server";
import { readOne, updateEntry } from "@lib/grimoire/index";

export async function GET(
  req: Request,
  ctx: { params: Promise<{ id: string }> }
) {
  const { id } = await ctx.params;

  try {
    const item = await readOne(id);
    if (!item) {
      return NextResponse.json({ ok: false, error: "Introuvable" }, { status: 404 });
    }

    return NextResponse.json({ ok: true, item });
  } catch (err) {
    console.error("GET /api/grimoire/[id]:", err);
    return NextResponse.json({ ok: false, error: "Erreur interne" }, { status: 500 });
  }
}

export async function PUT(
  req: Request,
  ctx: { params: Promise<{ id: string }> }
) {
  const { id } = await ctx.params;

  try {
    const patch = await req.json();
    const updated = await updateEntry(id, patch);

    if (!updated) {
      return NextResponse.json({ ok: false, error: "Introuvable" }, { status: 404 });
    }

    return NextResponse.json({ ok: true, item: updated });
  } catch (err) {
    console.error("PUT /api/grimoire/[id]:", err);
    return NextResponse.json({ ok: false, error: "Erreur interne" }, { status: 500 });
  }
}
