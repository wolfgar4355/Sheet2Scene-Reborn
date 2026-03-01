// apps/web/lib/grimoire/index.ts
import path from "path";
import { promises as fs } from "fs";

export type GrimoireEntry = {
  id: string;
  title: string;
  icon?: string;
  tags?: string[];
  excerpt?: string;
  body?: string;
  links?: string[];
  createdAt?: number;
  updatedAt?: number;
};

// 📌 Emplacement du fichier JSON (centralisé)
const DATA = path.join(process.cwd(), "@grimoire/grimoire.json");

// ---------------------------------------------------------
// 🔧 Assure que le fichier existe
// ---------------------------------------------------------
async function ensureDataFile() {
  await fs.mkdir(path.dirname(DATA), { recursive: true });
  try {
    await fs.access(DATA);
  } catch {
    await fs.writeFile(DATA, "[]", "utf8");
  }
}

// ---------------------------------------------------------
// 📖 Lire toutes les entrées
// ---------------------------------------------------------
export async function readAll(): Promise<GrimoireEntry[]> {
  await ensureDataFile();
  try {
    const raw = await fs.readFile(DATA, "utf8");
    return JSON.parse(raw) as GrimoireEntry[];
  } catch {
    return [];
  }
}

// ---------------------------------------------------------
// 💾 Écrire la totalité des entrées
// ---------------------------------------------------------
async function writeAll(items: GrimoireEntry[]) {
  await ensureDataFile();
  await fs.writeFile(DATA, JSON.stringify(items, null, 2), "utf8");
}

// ---------------------------------------------------------
// ➕ Créer une nouvelle entrée
// ---------------------------------------------------------
export async function createEntry(patch: Partial<GrimoireEntry>) {
  const items = await readAll();

  const newItem: GrimoireEntry = {
    id: crypto.randomUUID(),
    title: patch.title?.trim() ?? "Sans titre",
    icon: patch.icon,
    tags: patch.tags ?? [],
    excerpt: patch.excerpt,
    body: patch.body,
    links: patch.links ?? [],
    createdAt: Date.now(),
    updatedAt: Date.now(),
  };

  items.push(newItem);
  await writeAll(items);

  return newItem;
}

// ---------------------------------------------------------
// 🔎 Lire une entrée par ID
// ---------------------------------------------------------
export async function readOne(id: string): Promise<GrimoireEntry | null> {
  const items = await readAll();
  return items.find((e) => e.id === id) ?? null;
}

// ---------------------------------------------------------
// ✏️ Mettre à jour une entrée partiellement
// ---------------------------------------------------------
export async function updateEntry(id: string, patch: Partial<GrimoireEntry>) {
  const items = await readAll();
  const index = items.findIndex((e) => e.id === id);

  if (index === -1) return null;

  const updated: GrimoireEntry = {
    ...items[index],
    ...patch,
    updatedAt: Date.now(),
  };

  items[index] = updated;
  await writeAll(items);

  return updated;
}
