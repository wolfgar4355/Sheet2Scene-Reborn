// lib/worlds/options.ts
// Petites données locales (on pourra migrer vers Supabase plus tard)

export type WorldKey = "galactic" | "fantasy" | "pathseeker" | "darknight" | "custom";

export type Era = { key: string; label: string };
export type Cls = { key: string; label: string };

export type SubWorld = {
  key: string;
  label: string;
  eras: Era[];
};

export type WorldDef = {
  label: string;
  eras: Era[];
  classes: Cls[];
  subWorlds?: SubWorld[];
};

export const WORLDS: Record<WorldKey, WorldDef> = {
  galactic: {
    label: "Galactic Saga",
    eras: [
      { key: "new-republic", label: "New Republic" },
      { key: "massive-commonwealth", label: "Massive Commonwealth" },
      { key: "synthetic-uprising", label: "Synthetic Uprising" },
      { key: "outer-colony", label: "Outer Colony" },
      { key: "star-pilot", label: "Star Pilot Era" },
    ],
    classes: [
      { key: "scout", label: "Scout" },
      { key: "engineer", label: "Engineer" },
      { key: "adept", label: "Order Adept" },
      { key: "legionnaire", label: "Sovereign Legionnaire" },
      { key: "pilot", label: "Star Pilot" },
    ],
    subWorlds: [
      // clones Star Wars 100% safe
      {
        key: "core-saga",
        label: "Core Saga Sectors",
        eras: [
          { key: "reform-era", label: "Reform Era" },
          { key: "crimson-war", label: "Crimson War" },
          { key: "glass-armistice", label: "Glass Armistice" },
        ],
      },
      {
        key: "outer-rim",
        label: "Outer Rim Frontiers",
        eras: [
          { key: "smuggler-age", label: "Smuggler Age" },
          { key: "pirate-kings", label: "Pirate Kings" },
          { key: "void-routes", label: "Void Routes" },
        ],
      },
      {
        key: "order-temples",
        label: "Order of the Shards",
        eras: [
          { key: "crystal-dynasty", label: "Crystal Dynasty" },
          { key: "monolith-night", label: "Monolith Night" },
        ],
      },
    ],
  },

  fantasy: {
    label: "High Realms (Fantasy)",
    eras: [
      { key: "medieval-high", label: "Médiéval (High Fantasy)" },
      { key: "dark-ages", label: "Âges Sombres" },
      { key: "arcane-renaissance", label: "Renaissance Arcanique" },
    ],
    classes: [
      { key: "fighter", label: "Guerrier" },
      { key: "rogue", label: "Roublard" },
      { key: "cleric", label: "Clerc" },
      { key: "wizard", label: "Magicien" },
      { key: "ranger", label: "Rôdeur" },
    ],
    subWorlds: [
      {
        // équivalent Ravenloft
        key: "shadow-domains",
        label: "Shadow Domains",
        eras: [
          { key: "gothic-age", label: "Gothic Age" },
          { key: "industrial-mist", label: "Industrial Mists" },
        ],
      },
      {
        // équivalent Eberron
        key: "skyshard-empires",
        label: "Skyshard Empires",
        eras: [
          { key: "lightning-age", label: "Lightning Age" },
          { key: "airship-dynasty", label: "Airship Dynasty" },
        ],
      },
      {
        key: "elder-wildlands",
        label: "Elder Wildlands",
        eras: [
          { key: "tribal-dawn", label: "Tribal Dawn" },
          { key: "druid-ascendancy", label: "Druid Ascendancy" },
        ],
      },
    ],
  },

  pathseeker: {
    label: "Pathseeker",
    eras: [
      { key: "prime-era", label: "Ère Prime" },
      { key: "runes-age", label: "Âge des Runes" },
    ],
    classes: [
      { key: "warden", label: "Warden" },
      { key: "spellblade", label: "Spellblade" },
      { key: "oracle", label: "Oracle" },
      { key: "vanguard", label: "Vanguard" },
    ],
    subWorlds: [
      {
        key: "shattered-kingdoms",
        label: "Shattered Kingdoms",
        eras: [
          { key: "crusade-age", label: "Crusade Age" },
          { key: "dragonfall", label: "Dragonfall" },
        ],
      },
      {
        key: "clockwork-dominions",
        label: "Clockwork Dominions",
        eras: [
          { key: "gearfall", label: "Gearfall" },
          { key: "smoke-revolt", label: "Smoke Revolt" },
        ],
      },
    ],
  },

  darknight: {
    label: "The Darknight Chronicles",
    eras: [
      { key: "nocturne", label: "Nocturne" },
      { key: "fall", label: "La Chute" },
      { key: "modern-night", label: "Modern Night" },
    ],
    classes: [
      { key: "vigil", label: "Vigilant" },
      { key: "occultist", label: "Occultiste" },
      { key: "haunt", label: "Haunt" },
    ],
    subWorlds: [
      {
        key: "crimson-masquerade", // Vampire-like
        label: "Crimson Masquerade",
        eras: [
          { key: "blood-medieval", label: "Blood Medieval" },
          { key: "blood-renaissance", label: "Blood Renaissance" },
          { key: "prohibition-night", label: "Prohibition Night" },
          { key: "neon-veil", label: "Neon Veil (90-2000)" },
          { key: "glass-city-2025", label: "Glass City (2025)" },
        ],
      },
      {
        key: "moonlit-hunt", // Werewolf-like
        label: "Moonlit Hunt",
        eras: [
          { key: "totem-age", label: "Totem Age" },
          { key: "frontier-moons", label: "Frontier Moons" },
          { key: "urban-pack", label: "Urban Pack" },
        ],
      },
      {
        key: "arcane-echoes", // Mage-like
        label: "Arcane Echoes",
        eras: [
          { key: "inquisition-flames", label: "Inquisition Flames" },
          { key: "cold-war-rituals", label: "Cold War Rituals" },
          { key: "quantum-gnosis", label: "Quantum Gnosis" },
        ],
      },
    ],
  },

  custom: {
    label: "Custom World",
    eras: [],
    classes: [],
    subWorlds: [],
  },
};

export const POSES = [
  { key: "fight", label: "Combat" },
  { key: "rest", label: "Détente" },
  { key: "cast", label: "Incantation" },
  { key: "explore", label: "Exploration" },
] as const;
