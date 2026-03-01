// types-worlds.ts — Types officiels du moteur Mithril Engine
// (Ces types NE DOIVENT PAS être dans src/data)

export type WorldId = string;
export type EraId = string;

export interface EraDefinition {
  id: EraId;
  worldId: WorldId;

  name: string;
  shortDescription: string;

  // Exemple : [1, 20]
  recommendedLevels: [number, number];
}

export interface WorldDefinition {
  id: WorldId;
  name: string;
  tagline: string;

  // Une liste d’époques
  eras: EraDefinition[];
}
