// @ts-nocheck
// ============================================================================
// MQ ITEMS — SCROLLS (Parchemins de Sorts) — Ultra MQ Engine
// ============================================================================
// Structure avancée (Option C) :
// - spell (clé du sort MQ)
// - school, rank, castType
// - curse / blessing / mythic
// - metadata (rarity, tags, value…)
// - alchemy-like crafting (inscription runique)
// ============================================================================

export interface MQScroll {
  key: string;
  label: string;
  description: string;
  flavor?: string;

  type: "consumable";
  category: "scroll";

  spell: string;              // clé du sort MQ
  school: string;             // ex: "pyromancy", "healing", "runecraft"
  rank: number;               // 1 à 10 MQ
  castType: "ranged" | "burst" | "touch" | "self";

  curse?: boolean;
  blessing?: boolean;
  mythic?: boolean;

  craft?: {
    ink: string;              // type d'encre magique
    method: string;           // "runic-press", "chant", "blood-ink", etc.
    difficulty: "easy" | "medium" | "hard" | "master";
    reagents?: string[];
  };

  metadata: {
    rarity:
      | "common"
      | "uncommon"
      | "rare"
      | "very-rare"
      | "legendary"
      | "mythic"
      | "cursed";
    value: number;
    weight: number;
    tags?: string[];
  };
}

// ============================================================================
// 🧾 LISTE OFFICIELLE DES SCROLLS MQ
// ============================================================================

export const MQ_SCROLLS: MQScroll[] = [

  // ------------------------------------------------------------
  // BAS NIVEAUX (Rank 1)
  // ------------------------------------------------------------
  {
    key: "scroll_magic_missile",
    label: "Parchemin : Projectiles Magiques",
    description: "Un parchemin contenant un sort offensif automatique.",
    flavor: "Le papier tremble légèrement au toucher.",

    type: "consumable",
    category: "scroll",

    spell: "magic_missile",
    school: "arcane",
    rank: 1,
    castType: "ranged",

    craft: {
      ink: "encre d'arcane",
      method: "runic-press",
      difficulty: "easy",
      reagents: ["poudre d’éclat", "fil runique"]
    },

    metadata: {
      rarity: "common",
      value: 50,
      weight: 0.1,
      tags: ["arcane", "damage"]
    }
  },

  {
    key: "scroll_heal",
    label: "Parchemin : Soin",
    description: "Favori des novices cléricaux.",
    flavor: "Une douce chaleur émane des glyphes dorés.",

    type: "consumable",
    category: "scroll",

    spell: "heal_minor",
    school: "healing",
    rank: 1,
    castType: "touch",

    craft: {
      ink: "encre bénite",
      method: "chant sacré",
      difficulty: "easy",
      reagents: ["eau bénite"]
    },

    metadata: {
      rarity: "common",
      value: 45,
      weight: 0.1,
      tags: ["healing", "support"]
    }
  },

  // ------------------------------------------------------------
  // NIVEAUX MOYENS (Rank 3)
  // ------------------------------------------------------------
  {
    key: "scroll_fireball",
    label: "Parchemin : Boule de Feu",
    description: "Une boule de feu comprimée sous forme d’écriture runique.",
    flavor: "Les glyphes rougissent dès qu'on approche une flamme.",

    type: "consumable",
    category: "scroll",

    spell: "fireball",
    school: "pyromancy",
    rank: 3,
    castType: "burst",

    craft: {
      ink: "encre infernale",
      method: "gravure runique",
      difficulty: "hard",
      reagents: ["cendre vive", "fragment de braise"]
    },

    metadata: {
      rarity: "rare",
      value: 250,
      weight: 0.1,
      tags: ["fire", "damage"]
    }
  },

  {
    key: "scroll_lightning",
    label: "Parchemin : Éclair",
    description: "Un sort rapide libérant un éclair devant le lanceur.",
    flavor: "Des étincelles bleutées courent le long des motifs runiques.",

    type: "consumable",
    category: "scroll",

    spell: "lightning_bolt",
    school: "electromancy",
    rank: 3,
    castType: "ranged",

    craft: {
      ink: "encre d’orage",
      method: "gravure",
      difficulty: "hard",
      reagents: ["poudre d’éclair"]
    },

    metadata: {
      rarity: "rare",
      value: 260,
      weight: 0.1,
      tags: ["lightning", "damage"]
    }
  },

  // ------------------------------------------------------------
  // NIVEAUX ÉLEVÉS (Rank 5+)
  // ------------------------------------------------------------
  {
    key: "scroll_mass_heal",
    label: "Parchemin : Soin de Masse",
    description: "Un parchemin sacré capable de guérir des groupes entiers.",
    flavor: "L’encre scintille comme de l’or liquide.",

    type: "consumable",
    category: "scroll",

    spell: "mass_heal",
    school: "healing",
    rank: 5,
    castType: "burst",

    blessing: true,

    craft: {
      ink: "encre divine",
      method: "chant céleste",
      difficulty: "master",
      reagents: ["essence de vie", "lueur sacrée"]
    },

    metadata: {
      rarity: "legendary",
      value: 1200,
      weight: 0.1,
      tags: ["healing", "support", "holy"]
    }
  },

  {
    key: "scroll_planeshift",
    label: "Parchemin : Changement de Plan",
    description: "Permet de voyager entre les plans d’existence.",
    flavor: "Le parchemin flotte s'il n’est pas maintenu en main.",

    type: "consumable",
    category: "scroll",

    spell: "plane_shift",
    school: "astral",
    rank: 6,
    castType: "self",

    mythic: true,

    craft: {
      ink: "encre astrale",
      method: "projection mentale",
      difficulty: "master",
      reagents: ["poussière astrale", "fragment cosmique"]
    },

    metadata: {
      rarity: "legendary",
      value: 2000,
      weight: 0.1,
      tags: ["astral", "mythic"]
    }
  },

  // ------------------------------------------------------------
  // PARCHEMINS MAUDITS (Cursed)
  // ------------------------------------------------------------
  {
    key: "scroll_curse_mark",
    label: "Parchemin Maudit : Marque de Malédiction",
    description: "Un parchemin sombre gravé de glyphes ruinaux.",
    flavor: "L’encre semble absorber la lumière.",

    type: "consumable",
    category: "scroll",

    spell: "curse_mark",
    school: "hexcraft",
    rank: 3,
    castType: "ranged",

    curse: true,

    craft: {
      ink: "encre de sang",
      method: "rituel nocturne",
      difficulty: "hard",
      reagents: ["sang séché", "cendre noire"]
    },

    metadata: {
      rarity: "cursed",
      value: 0,
      weight: 0.1,
      tags: ["curse", "dark"]
    }
  }
];
