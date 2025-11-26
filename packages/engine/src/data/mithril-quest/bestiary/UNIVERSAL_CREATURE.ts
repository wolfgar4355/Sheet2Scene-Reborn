export interface UniversalCreature {
  // ─────────────────────────────────────────────
  // IDENTITÉ
  // ─────────────────────────────────────────────
  id: string;
  name: string;
  rarity: "common" | "uncommon" | "rare" | "elite" | "legendary" | "mythic";

  // Core identity filters
  type: string;               // ex: "brute", "caster", "controller"
  category: string;           // ex: "undead", "dragon", "construct"
  faction?: string;           // ex: "necromancers", "imperials"
  biome?: string;             // ex: "forest", "mountain"
  habitat?: string;           // ex: "caves", "swamps"

  // AAA TAG SYSTEM
  tags: string[];             // ex: ["fire", "aggressive", "night", "arcane"]

  // ─────────────────────────────────────────────
  // DIFFICULTÉ & MATH DU MOTEUR
  // ─────────────────────────────────────────────
  cr: number;                 // Challenge Rating (0–30)
  threatTier: "minion" | "standard" | "elite" | "solo" | "boss" | "mythic";

  // Calculs dynamiques du moteur
  xpValue?: number;
  aiProfile?: string;         // ex: "berserker", "tactician", "lurker"

  // ─────────────────────────────────────────────
  // STATBLOCK COMPLET
  // ─────────────────────────────────────────────
  stats: {
    hp: number;
    tempHp?: number;
    ac: number;
    speed: number | { walk?: number; fly?: number; swim?: number; burrow?: number };
    abilities: {
      str: number;
      dex: number;
      con: number;
      int: number;
      wis: number;
      cha: number;
    };
    saves?: {
      fortitude?: number;
      reflex?: number;
      will?: number;
    };
    senses?: {
      darkvision?: number;
      tremorsense?: number;
      blindsight?: number;
      truesight?: number;
    };
  };

  // ─────────────────────────────────────────────
  // OFFENSIVE SUITE
  // ─────────────────────────────────────────────
  attacks: AttackAction[];

  // Traits offensifs
  offensiveTraits?: string[];

  // ─────────────────────────────────────────────
  // DEFENSIVE SUITE
  // ─────────────────────────────────────────────
  resistances?: string[];
  immunities?: string[];
  vulnerabilities?: string[];
  defensiveTraits?: string[];

  // ─────────────────────────────────────────────
  // BEHAVIORAL AI SUITE
  // ─────────────────────────────────────────────
  behavior: {
    aggression: "passive" | "defensive" | "aggressive" | "berserk";
    intelligenceLevel: "animal" | "low" | "average" | "tactical" | "genius";
    tactics: {
      prefersAmbush?: boolean;
      fightsToDeath?: boolean;
      retreatsAt?: number;     // % HP
      prioritizesTargets?: "weakest" | "strongest" | "caster" | "random";
    };
  };

  // ─────────────────────────────────────────────
  // LOOT SUITE
  // ─────────────────────────────────────────────
  loot?: {
    currencies?: string[];
    items?: string[];
    tables?: string[];
  };

  // ─────────────────────────────────────────────
  // ACTIONS & TRAITS
  // ─────────────────────────────────────────────
  traits?: string[];
  actions?: ActionEntry[];
  reactions?: ActionEntry[];
  legendaryActions?: ActionEntry[];
  mythicActions?: ActionEntry[];

  // ─────────────────────────────────────────────
  // EVOLUTION / VARIANTS (pour futurs modules)
  // ─────────────────────────────────────────────
  variants?: {
    corrupted?: boolean;
    elemental?: "fire" | "cold" | "acid" | "lightning" | "radiant" | "necrotic" | null;
    ascendedForm?: string;       // ex: "Ancient Frost Wyrm"
  };

  // ─────────────────────────────────────────────
  // FUTURE : 3D MODEL PIPELINE (prêt pour STL)
  // ─────────────────────────────────────────────
  model3D?: {
    seed?: number;
    style?: string;
    pose?: string;
    bodyTemplate?: string;       // "humanoid", "quadruped", "serpent", etc.
    scale?: number;              // 1.0 = standard figurine 28mm
    // Placeholder pour export STL
    meshData?: string;
  };

  // ─────────────────────────────────────────────
  // MÉTADONNÉES
  // ─────────────────────────────────────────────
  source?: string;
  createdAt?: string;
  updatedAt?: string;
}

// ─────────────────────────────────────────────
// SOUS-TYPES
// ─────────────────────────────────────────────

export interface AttackAction {
  name: string;
  type: "melee" | "ranged" | "spell" | "special";
  hitBonus?: number;
  damage?: {
    dice: string;                // ex: "2d6+4"
    type?: string;               // ex: "slashing"
  };
  range?: number | string;
  tags?: string[];
}

export interface ActionEntry {
  name: string;
  description: string;
  tags?: string[];
}
