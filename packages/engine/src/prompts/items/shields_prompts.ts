// src/agents/prompts/items/shields_prompts.ts
// Prompts spécialisés MQ pour les boucliers (communs + magiques + mythiques)

import {
  MQImageStyle,
  MQImageVariant,
  MQPromptDictionary,
  MQBasePromptConfig,
  MQGeneratedPrompt,
  MQRarity
} from "../_types";

import { buildMQPrompt } from "../_utils";

// ─────────────────────────────────────────────────────────────
// CONFIGS DE BASE — un par bouclier (key = même key que items)
// ─────────────────────────────────────────────────────────────

export const MQ_SHIELD_PROMPT_CONFIGS: MQPromptDictionary<MQBasePromptConfig> = {
  // ───────────────────
  // Boucliers communs
  // ───────────────────

  buckler: {
    basePrompt:
      "small round metal buckler, simple construction, wooden grip, handmade medieval forging",
    materialHints: ["iron", "wood-core"],
    colorPalette: ["dark steel", "brown leather"],
    cameraHints: ["clear silhouette", "neutral front render"],
    loreTags: ["shield", "light-shield"],
  },

  light_shield: {
    basePrompt:
      "light wooden shield reinforced with thin metal bands, practical and common among early soldiers",
    materialHints: ["oak wood", "iron"],
    colorPalette: ["brown", "iron grey"],
    cameraHints: ["front centered"],
    loreTags: ["shield"],
  },

  steel_shield: {
    basePrompt:
      "solid round steel shield, polished surface, reinforced boss in the center",
    materialHints: ["steel"],
    colorPalette: ["silver", "dark leather"],
    cameraHints: ["centered front view"],
    loreTags: ["shield", "metal"],
  },

  heavy_shield: {
    basePrompt:
      "large rectangular heavy shield, reinforced metal borders, battlefield wear and dents",
    materialHints: ["iron", "steel", "leather"],
    colorPalette: ["dark metal", "brown"],
    cameraHints: ["neutral light"],
    loreTags: ["shield", "heavy"],
  },

  tower_shield: {
    basePrompt:
      "massive tower shield, nearly full-body sized, thick wood core, iron front plating",
    materialHints: ["oak", "steel plate"],
    colorPalette: ["matte steel", "aged wood"],
    cameraHints: ["orthographic"],
    loreTags: ["shield", "tower"],
  },

  tribal_hide_shield: {
    basePrompt:
      "primitive hide shield stretched over wooden frame, decorated with tribal war paints and symbols",
    materialHints: ["animal hide", "paint pigments", "wood"],
    colorPalette: ["brown", "red", "white paint"],
    loreTags: ["shield", "tribal"],
  },

  // ───────────────────
  // Boucliers magiques / rares
  // ───────────────────

  blessed_shield: {
    basePrompt:
      "holy blessed shield glowing faintly with radiant light, engraved runes, divine craftsmanship",
    materialHints: ["consecrated steel", "silver"],
    colorPalette: ["golden light", "white", "silver"],
    cameraHints: ["subtle halo lighting"],
    loreTags: ["shield", "radiant", "holy"],
  },

  obsidian_guard: {
    basePrompt:
      "dark obsidian shield, polished volcanic glass surface, faint internal glow, cursed aura",
    materialHints: ["obsidian", "shadow essence"],
    colorPalette: ["black", "purple", "dark red"],
    cameraHints: ["dramatic low light"],
    loreTags: ["shield", "cursed", "void"],
  },

  celestial_aegis: {
    basePrompt:
      "floating celestial shield, luminous crystalline patterns, divine geometry, soft glowing aura",
    materialHints: ["celestial crystal", "light energy"],
    colorPalette: ["white-gold", "blue light", "radiant shine"],
    cameraHints: ["divine illumination"],
    loreTags: ["shield", "radiant", "celestial"],
  },

  titan_plate_wall: {
    basePrompt:
      "colossal titan-forged wall shield, ancient sacred metal, runes of giants, massive and unbreakable",
    materialHints: ["titan metal", "giant runes"],
    colorPalette: ["ancient bronze", "stone grey"],
    cameraHints: ["orthographic heavy silhouette"],
    loreTags: ["shield", "titan", "mythic"],
  },
};

// ─────────────────────────────────────────────────────────────
// FONCTION GÉNÉRATRICE
// ─────────────────────────────────────────────────────────────

export function generateShieldPrompt(args: {
  key: string;                  // ex: "blessed_shield"
  label?: string;               // ex: "Bouclier Béni"
  rarity?: MQRarity;            // pour meta → UI
  style: MQImageStyle;          // style IA (anime, réaliste…)
  variant?: MQImageVariant;     // front, card, battle_pose, etc.
  extraParts?: string[];        // pour ajouter des détails custom
  tags?: string[];              // pour meta
  loreTags?: string[];          // pour meta (s’ajoutent à la config)
}) : MQGeneratedPrompt {
  const config = MQ_SHIELD_PROMPT_CONFIGS[args.key];

  return buildMQPrompt({
    key: args.key,
    label: args.label,
    style: args.style,
    variant: args.variant ?? "item_card",
    category: "item-shield",
    rarity: args.rarity,
    config,
    extraParts: args.extraParts,
    tags: args.tags,
    loreTags: args.loreTags,
  });
}
