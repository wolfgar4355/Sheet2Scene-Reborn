import { NextResponse } from "next/server";
import { getServerUser } from "@/lib/supabase/server";
import { readAll, saveEntry, GrimoireEntry } from "engine/dist/grimoire";

export async function GET(req: Request) {
  try {
    const items = await readAll();
    return NextResponse.json({ ok: true, data: items });
  } catch (err: any) {
    console.error("Erreur GET /grimoire:", err);
    return NextResponse.json(
      { ok: false, error: "Erreur interne du serveur" },
      { status: 500 }
    );
  }
}

export async function POST(req: Request) {
  try {
    // Basic auth check, maybe the grimoire writing is restricted, 
    // but for now we follow the old system logic or just require any logged in user.
    const user = await getServerUser();
    if (!user) {
      return NextResponse.json({ ok: false, error: "Unauthorized" }, { status: 401 });
    }

    const body = (await req.json()) as Partial<GrimoireEntry>;
    const { title, icon, tags = [] } = body;

    if (!String(title || "").trim()) {
      return NextResponse.json(
        { ok: false, error: "Titre requis" },
        { status: 400 }
      );
    }

    const newItem: GrimoireEntry = {
      id: body.id || crypto.randomUUID(),
      title: title!.trim(),
      icon,
      tags,
      body: body.body,
      excerpt: body.excerpt,
    };

    await saveEntry(newItem);

    return NextResponse.json({ ok: true, item: newItem });
  } catch (err) {
    console.error("Erreur POST /grimoire:", err);
    return NextResponse.json(
      { ok: false, error: "Erreur interne du serveur" },
      { status: 500 }
    );
  }
}
