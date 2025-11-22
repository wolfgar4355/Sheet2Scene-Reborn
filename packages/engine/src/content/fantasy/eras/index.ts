// Récupère tes Fantasy Eras depuis ton fichier actuel.
// Je les place dans une constante FANTASY_ERAS

import type { EraDefinition } from "../types-worlds";

export const FANTASY_ERAS = [
EraDefinition[] = [
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
      "Grandes monarchies, ordres chevaleresques et conflits épiques.",
    recommendedLevels: [1, 20],
  },
  {
    id: "arcane-renaissance",
    worldId: "fantasy",
    name: "Arcane Renaissance",
    shortDescription:
      "Renaissance culturelle et explosion de la magie savante.",
    recommendedLevels: [5, 15],
  },
  {
    id: "mystic-age",
    worldId: "fantasy",
    name: "Mystic Age",
    shortDescription:
      "Temps où le voile entre les plans devient instable.",
    recommendedLevels: [10, 20],
  }
] as const;

export const ERAS_BY_WORLD: Record<string, EraDefinition[]> = {
  fantasy: FANTASY_ERAS,
};

