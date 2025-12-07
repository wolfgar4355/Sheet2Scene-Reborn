// -----------------------------------------------------------------------------
// eras.ts — Canon des Ères Mithril-Quest
// -----------------------------------------------------------------------------

import type { MQEra } from "./types-worlds";

// LISTE CANON DES ÈRES MQ
export const MQ_ERAS: MQEra[] = [
  {
    id: "age-of-heroes",
    worldId: "mithril-quest",
    name: "Age of Heroes",
    shortDescription:
      "Épopées héroïques, premiers artefacts mythiques et naissance des proto-royaumes.",
    recommendedLevels: [1, 10],
    tags: []
  },
  {
    id: "ancient-age",
    worldId: "mithril-quest",
    name: "Ancient Age",
    shortDescription:
      "Empires antiques, cités-États mystiques, ruines colossales et secrets enfouis.",
    recommendedLevels: [3, 12],
    tags: []
  },
  {
    id: "dark-age",
    worldId: "mithril-quest",
    name: "Dark Age",
    shortDescription:
      "Peste, guerres sacrées, nécromancie interdite et royaumes en chute.",
    recommendedLevels: [1, 8],
    tags: []
  },
  {
    id: "high-kingdoms",
    worldId: "mithril-quest",
    name: "High Kingdoms",
    shortDescription:
      "Royaumes d'Or, ordres chevaleresques, renaissance commerciale et magie organisée.",
    recommendedLevels: [1, 20],
    tags: []
  },
  {
    id: "arcane-renaissance",
    worldId: "mithril-quest",
    name: "Arcane Renaissance",
    shortDescription:
      "Explosion de la magie savante, inventions arcanes et essor des grandes académies.",
    recommendedLevels: [5, 15],
    tags: []
  },
  {
    id: "mystic-age",
    worldId: "mithril-quest",
    name: "Mystic Age",
    shortDescription:
      "Ère des dieux, titans, dragons primordiaux et phénomènes planaires extrêmes.",
    recommendedLevels: [10, 20],
    tags: []
  }
];

// -----------------------------------------------------------------------------
// Exports
// -----------------------------------------------------------------------------

export const ALL_MQ_ERAS = MQ_ERAS;

export default MQ_ERAS;

// 🚨 Indispensable : export du type
export type { MQEra };
