export const TAGS = {
  // ---------------------------------------------------------
  // 1. Biological & Morphology
  // ---------------------------------------------------------
  BIOLOGY: [
    "humanoid",
    "beast",
    "monstrosity",
    "dragon",
    "aberration",
    "construct",
    "fiend",
    "celestial",
    "giant",
    "elemental",
    "undead",
    "plant",
    "ooze",
    "fey",
    "insect",
    "reptile",
    "amphibian",
    "avian",
    "aquatic",
    "swarm",
  ],

  // ---------------------------------------------------------
  // 2. Morphological Traits
  // ---------------------------------------------------------
  MORPH: [
    "multi-headed",
    "winged",
    "quadruped",
    "serpentine",
    "insectoid",
    "amorphous",
    "skeletal",
    "ethereal-form",
    "crystalline",
    "armored",
    "giant-sized",
    "tiny-sized",
  ],

  // ---------------------------------------------------------
  // 3. Elemental & Energy
  // ---------------------------------------------------------
  ELEMENTAL: [
    "fire",
    "water",
    "earth",
    "air",
    "lightning",
    "cold",
    "poison",
    "acid",
    "necrotic",
    "radiant",
    "psychic",
    "force",
    "shadow",
    "arcane",
    "holy",
    "unholy",
  ],

  // ---------------------------------------------------------
  // 4. Behavioral / AI Patterns
  // ---------------------------------------------------------
  BEHAVIOR: [
    "aggressive",
    "territorial",
    "pack-hunter",
    "ambusher",
    "stalker",
    "guardian",
    "berserker",
    "cowardly",
    "opportunist",
    "strategist",
    "summoner",
    "controller",
    "caster",
    "skirmisher",
    "lurker",
    "siege-beast",
    "alpha",
  ],

  // ---------------------------------------------------------
  // 5. Environmental
  // ---------------------------------------------------------
  ENVIRONMENT: [
    "forest",
    "jungle",
    "desert",
    "tundra",
    "mountain",
    "swamp",
    "plains",
    "hills",
    "ocean",
    "coast",
    "caves",
    "underdark",
    "astral",
    "ethereal",
    "shadowfell",
    "feywild",
    "volcanic",
    "ruins",
    "temple",
    "dungeon",
  ],

  // ---------------------------------------------------------
  // 6. Combat / Role
  // ---------------------------------------------------------
  COMBAT: [
    "brute",
    "soldier",
    "skirmisher",
    "artillery",
    "controller",
    "assassin",
    "tank",
    "support",
    "elite",
    "legendary",
    "solo",
    "boss",
    "mythic",
  ],

  // ---------------------------------------------------------
  // 7. Magical / Arcane Traits
  // ---------------------------------------------------------
  MAGIC: [
    "spellcaster",
    "ritualist",
    "summoned",
    "cursed",
    "hexed",
    "enchanted",
    "time-warped",
    "void-touched",
    "astral-bound",
    "arcane-surge",
    "mana-leech",
    "eldritch",
    "psionic",
  ],

  // ---------------------------------------------------------
  // 8. Physical Qualities
  // ---------------------------------------------------------
  PHYSICAL: [
    "fast",
    "slow",
    "flying",
    "burrowing",
    "climbing",
    "amphibious",
    "stealthy",
    "massive",
    "ferocious",
    "fragile",
    "unyielding",
    "armored-hide",
  ],

  // ---------------------------------------------------------
  // 9. Alignment / Essence
  // ---------------------------------------------------------
  ALIGNMENT: [
    "lawful",
    "chaotic",
    "neutral",
    "good",
    "evil",
    "primordial",
    "corrupted",
    "pure",
  ],

  // ---------------------------------------------------------
  // 10. Visual / Mood (pour Generate Image)
  // ---------------------------------------------------------
  VISUAL: [
    "dark",
    "mystical",
    "glowing",
    "ancient",
    "corrupted",
    "ethereal",
    "primal",
    "ominous",
    "radiant",
    "shadowy",
    "colossal",
    "heroic",
    "mythic",
  ],
} ;

export type TagFamily = keyof typeof TAGS;
export type Tag = (typeof TAGS)[TagFamily][number];
