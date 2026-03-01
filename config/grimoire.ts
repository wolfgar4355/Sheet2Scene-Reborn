// /var/www/prozip/s2s_full/apps/web/config/grimoire.ts
export type GrimoireEntry = {
  id: string;
  title: string;
  icon?: string;
  worldId?: string;
  tags?: string[];
  links?: string[];
  excerpt?: string;
  body?: string;
  createdAt?: number;
  updatedAt?: number;
};

export function byId(list: GrimoireEntry[], id?: string | null) {
  return list.find((e) => e.id === id);
}

export function normalizeId(s: string) {
  return s
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "");
}

export function pickExcerpt(text?: string, max = 220) {
  if (!text) return "";
  const clean = text.replace(/\s+/g, " ").trim();
  return clean.length <= max ? clean : `${clean.slice(0, max - 1)}...`;
}

export function now() {
  return Date.now();
}
