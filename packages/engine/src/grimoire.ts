import data from "./content/grimoire/grimoire.json";

export type GrimoireEntry = {
  id: string;
  title: string;
  icon: string;
  tags: string[];
  excerpt?: string;
  body?: string;
  links?: string[];
  createdAt?: number;
  updatedAt?: number;
};

const GRIMOIRE: GrimoireEntry[] = data as GrimoireEntry[];

export function readAll(): GrimoireEntry[] {
  return GRIMOIRE;
}

export function readOne(id: string): GrimoireEntry | undefined {
  return GRIMOIRE.find((entry) => entry.id === id);
}
