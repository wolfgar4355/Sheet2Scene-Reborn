// app/api/grimoire/[id]/route.ts
import { NextResponse } from "next/server";
import path from "path";
import { promises as fs } from "fs";

const DATA = path.join(process.cwd(), "data/grimoire.json");

type Entry = {
  id: string;
  title: string;
  icon?: string;
  tags?: string[];
  updatedAt: number;
};

// --- utils fichier ----------------------------------------------------------

async function ensureDataFile() {
  await fs.mkdir(path.dirname(DATA), { recursive: true });
  try {
    await fs.access(DATA);
  } catch {
    await fs.writeFile(DATA, "[]", "utf8");
  }
}

async function readAll(): Promise<Entry[]> {
  await ensureDataFile();
  try {
    const raw = await fs.readFile(DATA, "utf8");
    const json = JSON.parse(raw);
    return Array.isArray(json) ? (json as Entry[]) : [];
  } catch {
    return [];
  }
}

async function writeAll(items: Entry[]) {
  await ensureDataFile();
  await fs.writeFile(DATA, JSON.stringify(items, null, 2), "utf8");
}

// --- GET /api/grimoire/[id] -------------------------------------------------

export async function GET(
  _req: Request,
  ctx: { params: Promise<{ id: string }> } // Next 15: params est un Promise
) {
  const { id } = await ctx.params;

  const items = await readAll();
  const item = items.find((e) => e.id === id) ?? null;

  return NextResponse.json({ ok: !!item, item });
}

// --- PUT /api/grimoire/[id] -------------------------------------------------

export async function PUT(
  req: Request,
  ctx: { params: Promise<{ id: string }> }
) {
  const { id } = await ctx.params;

  // on tolère JSON invalide et on force un objet partiel
  let bodyUnknown: unknown;
  try {
    bodyUnknown = await req.json();
  } catch {
    bodyUnknown = null;
  }

  // ne merge QUE si c’est un objet simple (sinon patch vide)
  const patch: Partial<Entry> =
    bodyUnknown && typeof bodyUnknown === "object" && !Array.isArray(bodyUnknown)
      ? (bodyUnknown as Partial<Entry>)
      : {};

  // on ne garde que les champs autorisés
  const safePatch: Partial<Entry> = {};
  if ("title" in patch && typeof patch.title === "string") safePatch.title = patch.title.trim();
  if ("icon" in patch && (patch.icon === undefined || typeof patch.icon === "string"))
    safePatch.icon = patch.icon;
  if ("tags" in patch && Array.isArray(patch.tags)) safePatch.tags = patch.tags.filter(Boolean);

  const items = await readAll();
  const i = items.findIndex((e) => e.id === id);

  if (i < 0) {
    return NextResponse.json({ ok: false, error: "Introuvable" });
  }

  const updated: Entry = {
    ...items[i],
    ...safePatch,
    updatedAt: Date.now(),
  };

  items[i] = updated;
  await writeAll(items);

  return NextResponse.json({ ok: true, item: updated });
}
