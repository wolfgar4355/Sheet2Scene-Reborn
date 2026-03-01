// armor_prompts.ts — Mithril-Quest Armor Prompt Dataset
// Zéro IP, 100% dé-novo, style MQ compatible.

export const MQ_ARMOR_PROMPT_DATASET = [
  // ───────────────────────────────────────────────
  // LIGHT ARMOR
  // ───────────────────────────────────────────────
  {
    category: "light",
    style: "leather-forged",
    palette: "umber",
    prompt:
      "Armure légère en cuir tanné sombre, coutures renforcées, plastron souple, boucles usées, silhouette agile, ambiance parchemin nocturne MQ."
  },
  {
    category: "light",
    style: "scout-woven",
    palette: "moss",
    prompt:
      "Armure d’éclaireur tissée de fibres naturelles, teintes vert mousse, motifs runiques subtils, style grimoire forestier MQ."
  },
  {
    category: "light",
    style: "arcane-threaded",
    palette: "violet-arcane",
    prompt:
      "Cuir léger infusé d’arcanes, filaments violets brillants, couture magique, look mystique mais discret."
  },

  // ───────────────────────────────────────────────
  // MEDIUM ARMOR
  // ───────────────────────────────────────────────
  {
    category: "medium",
    style: "scale-hybrid",
    palette: "steel-gray",
    prompt:
      "Armure d’écailles hybrides métal/cuir, gris acier, reflets doux, géométrie disciplinée, style Royaume-Haut MQ."
  },
  {
    category: "medium",
    style: "ranger-plate",
    palette: "fir-green",
    prompt:
      "Armure intermédiaire de rôdeur, métal léger, plaque thoracique stylisée, accents verts forêt, design fonctionnel MQ."
  },
  {
    category: "medium",
    style: "stormwoven",
    palette: "blue-tempest",
    prompt:
      "Armure de combat infusée d’énergie tempête, teintes bleues électriques, symboles d’orage gravés."
  },

  // ───────────────────────────────────────────────
  // HEAVY ARMOR
  // ───────────────────────────────────────────────
  {
    category: "heavy",
    style: "titan-forged",
    palette: "iron",
    prompt:
      "Armure lourde forgée anciennement, plaques massives, engravures titanesques, aspect monumental, style MQ."
  },
  {
    category: "heavy",
    style: "cathedral-plate",
    palette: "golden-light",
    prompt:
      "Plastron religieux or pâle, lignes architecturales, aura lumineuse subtile, design divin MQ."
  },
  {
    category: "heavy",
    style: "obsidian-bastion",
    palette: "blackstone",
    prompt:
      "Armure noire taillée dans pierre-obsidienne vivante, reflets violets, look sombre et imposant."
  },

  // ───────────────────────────────────────────────
  // MYSTIC ARMOR
  // ───────────────────────────────────────────────
  {
    category: "mystic",
    style: "runelocked",
    palette: "ancient-gold",
    prompt:
      "Armure mystérieuse ornée de runes verrouillées, éclats dorés anciens, énergie contenue sous les plaques."
  },
  {
    category: "mystic",
    style: "ethermail",
    palette: "soft-teal",
    prompt:
      "Cotte de mailles éthérées semi-translucides, teintes bleu-vert, effet spectral, ambiance arcane MQ."
  },
  {
    category: "mystic",
    style: "moonwoven",
    palette: "silver-lunar",
    prompt:
      "Armure mystique imprégnée de lumière lunaire, motifs délicats, emballée d’un halo argenté doux."
  },

  // ───────────────────────────────────────────────
  // MYTHIC ARMOR
  // ───────────────────────────────────────────────
  {
    category: "mythic",
    style: "celestial-aegis",
    palette: "radiant-gold",
    prompt:
      "Armure mythique forgée dans lumière céleste, plaques brillantes, contours divins, esthétique MQ mythique."
  },
  {
    category: "mythic",
    style: "astral-plate",
    palette: "nebula-blue",
    prompt:
      "Armure astrale, reflets nébuleux, motifs cosmiques, énergie pure dans les jointures, halo spatial MQ."
  },
  {
    category: "mythic",
    style: "voidcarved",
    palette: "abyssal-purple",
    prompt:
      "Armure mythique taillée dans matière du Vide, aura sombre vibrante, gravures abyssales, style MQ."
  }
] as const;
