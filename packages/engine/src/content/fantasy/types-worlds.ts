export interface EraDefinition {
  id: string;
  worldId: string;
  name: string;
  shortDescription: string;
  recommendedLevels: [number, number];
}

export interface WorldDefinition {
  id: string;
  name: string;
  tagline: string;
  eras: EraDefinition[];
}
