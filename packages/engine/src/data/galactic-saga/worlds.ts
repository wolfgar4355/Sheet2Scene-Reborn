// packages/engine/src/data/galactic-saga/worlds.ts

export type GSWorldId = "galactic-saga-core";

export interface GSWorld {
  id: GSWorldId;
  slug: string;
  name: string;
  theme: "scifi";
  description: string;
}

export const GALACTIC_SAGA_WORLDS: GSWorld[] = [
  {
    id: "galactic-saga-core",
    slug: "galactic-saga-core",
    name: "Galactic Saga",
    theme: "scifi",
    description:
      "Space opera multi-systèmes : empires stellaires, contrebandiers, ruines anciennes et reliques cosmiques.",
  },
];

export default GALACTIC_SAGA_WORLDS;
