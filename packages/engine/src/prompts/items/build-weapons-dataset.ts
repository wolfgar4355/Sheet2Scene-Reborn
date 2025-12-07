// generate-all-weapons-prompts.ts
// Agrégateur de tous les prompts d'armes Mithril-Quest (MQWeaponPrompt)

import { BLADES_PROMPTS } from "./weapons/blades_prompts";
import { BOWS_PROMPTS } from "./weapons/bows_prompts";
import { CROSSBOWS_PROMPTS } from "./weapons/crossbows_prompts";
import { DAGGERS_PROMPTS } from "./weapons/daggers_prompts";
import { FIREARMS_PROMPTS } from "./weapons/firearms_prompts";
import { POLEARMS_PROMPTS } from "./weapons/polearms_prompts";
import { EXOTIC_PROMPTS } from "./weapons/exotic_prompts";
import { COSMIC_PROMPTS } from "./weapons/cosmic_prompts";
import { ENERGETIC_PROMPTS } from "./weapons/energetic_prompts";
import { VOIDTECH_PROMPTS } from "./weapons/voidtech_prompts";

// Si tu as un type commun pour les prompts, tu peux l'importer ici
// import type { MQWeaponPrompt } from "../_types";

export const MQ_WEAPON_PROMPT_DATASET = [
  ...BLADES_PROMPTS,
  ...BOWS_PROMPTS,
  ...CROSSBOWS_PROMPTS,
  ...DAGGERS_PROMPTS,
  ...FIREARMS_PROMPTS,
  ...POLEARMS_PROMPTS,
  ...EXOTIC_PROMPTS,
  ...COSMIC_PROMPTS,
  ...ENERGETIC_PROMPTS,
  ...VOIDTECH_PROMPTS
] as const;

// Petit log quand tu exécutes le fichier à la main
console.log(
  "[MQ] Weapons prompt dataset chargé.",
  "Total:",
  MQ_WEAPON_PROMPT_DATASET.length
);
