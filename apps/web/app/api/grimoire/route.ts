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

// --- outils fichier ------------------------------------------------------

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

// --- POST /api/grimoire  -> crée une nouvelle entrée ----------------------

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as Partial<Entry>; // 👈 typage explicite
    const { title, icon, tags = [] } = body;

    if (!String(title || "").trim()) {
      return NextResponse.json(
        { ok: false, error: "Titre requis" },
        { status: 400 }
      );
    }

    const items = await readAll();
    const newItem: Entry = {
      id: crypto.randomUUID(),
      title: title!.trim(),
      icon,
      tags,
      updatedAt: Date.now(),
    };

    items.push(newItem);
    await writeAll(items);

    return NextResponse.json({ ok: true, item: newItem });
  } catch (err) {
    console.error("Erreur POST /grimoire:", err);
    return NextResponse.json(
      { ok: false, error: "Erreur interne du serveur" },
      { status: 500 }
    );
  }
}
