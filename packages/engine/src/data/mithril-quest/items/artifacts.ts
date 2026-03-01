// @ts-nocheck
// items/artifacts.ts — Registre central des artefacts MQ

import type { MQItemArtifact } from "./types";

// Import de chaque famille thématique
import { MQ_ARTIFACTS_ANCIENT }   from "./artifacts/ancient";
import { MQ_ARTIFACTS_ARCANE }    from "./artifacts/arcane";
import { MQ_ARTIFACTS_ELEMENTAL } from "./artifacts/elemental";
import { MQ_ARTIFACTS_CELESTIAL } from "./artifacts/celestial";
import { MQ_ARTIFACTS_VOIDTECH }  from "./artifacts/voidtech";
import { MQ_ARTIFACTS_CURSED }    from "./artifacts/cursed";
import { MQ_ARTIFACTS_MYTHIC }    from "./artifacts/mythic";
import { MQ_ARTIFACTS_PRIMAL }    from "./artifacts/primal";
import { MQ_ARTIFACTS_RELICS }    from "./artifacts/relics";
import { MQ_ARTIFACTS_OCCULTS }   from "./artifacts/occults";
import { MQ_ARTIFACTS_FORBIDDEN } from "./artifacts/forbidden";

// Tableau plat utilisé partout dans le moteur
export const MQ_ITEMS_ARTIFACTS: MQItemArtifact[] = [
  ...MQ_ARTIFACTS_ANCIENT,
  ...MQ_ARTIFACTS_ARCANE,
  ...MQ_ARTIFACTS_ELEMENTAL,
  ...MQ_ARTIFACTS_CELESTIAL,
  ...MQ_ARTIFACTS_VOIDTECH,
  ...MQ_ARTIFACTS_CURSED,
  ...MQ_ARTIFACTS_MYTHIC,
  ...MQ_ARTIFACTS_PRIMAL,
  ...MQ_ARTIFACTS_RELICS,
  ...MQ_ARTIFACTS_OCCULTS,
  ...MQ_ARTIFACTS_FORBIDDEN,
];

// Facultatif mais super pratique : accès par catégorie
export const MQ_ITEMS_ARTIFACTS_BY_CATEGORY = {
  ancient:   MQ_ARTIFACTS_ANCIENT,
  arcane:    MQ_ARTIFACTS_ARCANE,
  elemental: MQ_ARTIFACTS_ELEMENTAL,
  celestial: MQ_ARTIFACTS_CELESTIAL,
  voidtech:  MQ_ARTIFACTS_VOIDTECH,
  cursed:    MQ_ARTIFACTS_CURSED,
  mythic:    MQ_ARTIFACTS_MYTHIC,
  primal:    MQ_ARTIFACTS_PRIMAL,
  relics:    MQ_ARTIFACTS_RELICS,
  occults:   MQ_ARTIFACTS_OCCULTS,
  forbidden: MQ_ARTIFACTS_FORBIDDEN,
} as const;
