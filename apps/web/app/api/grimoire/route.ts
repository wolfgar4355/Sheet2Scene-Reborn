// apps/web/app/api/grimoire/route.ts
import { NextResponse } from "next/server";
import { readAll, createEntry } from "@grimoire/index";

export async function GET() {
  try {
    const items = await readAll();
    return NextResponse.json({ ok: true, items });
  } catch (err) {
    console.error("GET /api/grimoire:", err);
    return NextResponse.json({ ok: false, error: "Erreur interne" }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();

    if (!body.title || String(body.title).trim() === "") {
      return NextResponse.json({ ok: false, error: "Titre requis" }, { status: 400 });
    }

    const newItem = await createEntry(body);
    return NextResponse.json({ ok: true, item: newItem });
  } catch (err) {
    console.error("POST /api/grimoire:", err);
    return NextResponse.json({ ok: false, error: "Erreur interne" }, { status: 500 });
  }
}
