// packages/engine/src/content/worlds.ts

import type { WorldDefinition, EraDefinition } from "../types/worlds";

export const fantasyEras: EraDefinition[] = [
  {
    id: "age-of-heroes",
    worldId: "fantasy",
    name: "Age of Heroes",
    shortDescription:
      "Épopées légendaires, proto-royaumes et premiers artefacts mythiques.",
    recommendedLevels: [1, 10],
  },
  {
    id: "ancient-age",
    worldId: "fantasy",
    name: "Ancient Age",
    shortDescription:
      "Empires antiques, cités-États magiques et ruines cyclopéennes.",
    recommendedLevels: [3, 12],
  },
  {
    id: "dark-ages",
    worldId: "fantasy",
    name: "Dark Ages",
    shortDescription:
      "Pestes, guerres saintes et magie interdite dans un monde en déclin.",
    recommendedLevels: [1, 8],
  },
  {
    id: "high-kingdoms",
    worldId: "fantasy",
    name: "High Kingdoms",
    shortDescription:
      "Grandes monarchies, ordres chevaleresques et conflits épiques entre royaumes.",
    recommendedLevels: [1, 20],
  },
  {
    id: "arcane-renaissance",
    worldId: "fantasy",
    name: "Arcane Renaissance",
    shortDescription:
      "Renaissance culturelle et explosion de la magie savante et industrielle.",
    recommendedLevels: [5, 15],
  },
  {
    id: "mystic-age",
    worldId: "fantasy",
    name: "Mystic Age",
    shortDescription:
      "Ligne temporelle où le voile entre les plans est permanent et instable.",
    recommendedLevels: [10, 20],
  },
];

export const worlds: WorldDefinition[] = [
  {
    id: "fantasy",
    name: "Fantasy",
    tagline: "Monde médieval-fantastique multi-époques.",
    eras: fantasyEras,
  },
];
