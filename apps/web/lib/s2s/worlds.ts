// lib/s2s/worlds.ts

export type WorldKey = "fantasy" | "galactic" | "pathseeker" | "darknight";

export interface SubworldDef {
  key: string;
  label: string;
  premium?: boolean;
}

export interface WorldDef {
  key: WorldKey;
  label: string;
  enabled: boolean;      // visible dans le créateur ?
  premium?: boolean;     // monde payant ?
  subworlds?: SubworldDef[];
}

export const WORLDS_DEFS: WorldDef[] = [
  {
    key: "fantasy",
    label: "Fantasy Realms",
    enabled: true,
    subworlds: [
      { key: "core-realms", label: "Royaumes centraux" },
      { key: "shadow-domains", label: "Domaines d’Ombres", premium: true },
      { key: "skyshard-empires", label: "Empires de Skyshard", premium: true },
    ],
  },
  {
    key: "galactic",
    label: "Galactic Saga",
    enabled: false, // à activer plus tard
  },
  {
    key: "pathseeker",
    label: "Pathseeker",
    enabled: false, // à activer plus tard
  },
  {
    key: "darknight",
    label: "The Darknight Chronicles",
    enabled: false,
    premium: true, // monde déblocable dans le store
  },
];

export function getWorldDef(key: WorldKey): WorldDef | undefined {
  return WORLDS_DEFS.find((w) => w.key === key);
}
