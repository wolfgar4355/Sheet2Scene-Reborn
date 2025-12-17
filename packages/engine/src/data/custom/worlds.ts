// packages/engine/src/data/custom/worlds.ts

export type CustomWorldId = string;

export interface CustomWorld {
  id: CustomWorldId;
  slug: string;
  name: string;
  description?: string;
  // Plus tard : flags, thème, styles de grimoire, etc.
}

export const CUSTOM_WORLDS: CustomWorld[] = [];

// On laisse vide : ce sera alimenté par l’utilisateur / la BDD.
// export default surtout pour être simple à importer si besoin.
export default CUSTOM_WORLDS;
