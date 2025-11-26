import { MythicBoss } from "@engine/content/fantasy/types";

// ---------------------------------------------------------------------------
// VORKALUZ — LEVIATHAN DES ABYSSES (MYTHIQUE)
// Un titan océanique capable de remodeler la mer entière et créer des tsunamis cosmiques.
// ---------------------------------------------------------------------------

export const VORKALUZ: MythicBoss = {
  id: "vorkaluz",
  name: "Vor’Kaluz",
  epithet: "Leviathan des Abysses",

  category: "aberration",
  encounterDifficulty: "mythic",
  aiProfile: "titan-brute",
  tags: [
    "mythic",
    "leviathan",
    "colossus",
    "abyssal",
    "oceanic",
    "tidal"
  ],

  biomes: [
    "ocean",
    "abyss",
    "deep-sea-trenches",
    "storm-sea",
    "flooded-ruins"
  ],

  summary:
    "Un serpent abyssal colossal, maître des pressions océaniques, capable " +
    "d’engloutir un navire entier et de provoquer des typhons gravitationnels.",

  // -------------------------------------------------------------------------
  // PHASES
  // -------------------------------------------------------------------------
  phases: [
    // ---------------------------------------------------------------------
    // PHASE 1 — LEVIATHAN ABYSSAL
    // ---------------------------------------------------------------------
    {
      key: "phase-1",
      name: "Vor’Kaluz — Leviathan Abyssal",
      cr: 21,
      role: "mythic-brute",

      description:
        "Le titan émerge des abysses, créant des vagues monstrueuses. " +
        "Son corps serpentin écrase, engloutit et remodelle les distances.",

      tactics: [
        "Empêche les joueurs de rester à distance.",
        "Utilise la pression abyssale pour neutraliser les tanks.",
        "Crée des tsunamis pour briser la formation du groupe."
      ],

      stats: {
        hp: 750,
        ac: 22,
        atk: "+19",
        dmg: "4d10+12 (bite) + tidal impact",
        speed: "60 ft swim"
      },

      abilities: [
        "Marque d’Écrasement — tsunami de 60 ft, renverse + dégâts massifs.",
        "Morsure Abyssale — dégâts force + ingestion partielle.",
        "Carapace Abyssale — réduction des dégâts physiques.",
        "Jet d’Eaux Pressurisées — tir perforant longue portée.",
        "Brouillard Sélénite — réduit la vision, avantage au Leviathan."
      ],

      loot: [
        "Écaille Abyssale",
        "Glande Hydraulique",
        "Cœur de Marée",
        "Perle Noire Titanic"
      ],

      phaseTriggers: [
        "À 0 HP → les eaux s’illuminent ; le Leviathan révèle sa forme cosmique.",
        "La gravité commence à se distordre."
      ]
    },

    // ---------------------------------------------------------------------
    // PHASE 2 — AVATAR TIDAL COSMIQUE
    // ---------------------------------------------------------------------
    {
      key: "phase-2",
      name: "Vor’Kaluz — Avatar Tidal Cosmique",
      cr: 24,
      role: "mythic-controller",

      biomes: ["ocean", "abyss", "storm-sea", "cosmic-tide"],

      description:
        "Le titan devient luminescent, la mer se soulève. Les marées " +
        "s’inversent et un vortex gravitationnel engloutit tout.",

      tactics: [
        "Contrôle complet du champ de bataille marin.",
        "Manipule la gravité pour attirer/repousser les PJ.",
        "Génère des typhons pour segmenter la zone."
      ],

      stats: {
        hp: 900,
        ac: 24,
        atk: "+21",
        dmg: "5d12+14 (cosmic tidal bite) + gravitational tide",
        speed: "80 ft swim, 20 ft hover (water form)"
      },

      abilities: [
        "Typhon Ancestral — vortex géant, déplace toute la map.",
        "Marée Gravitationnelle — attire toutes les créatures à 30 ft.",
        "Déferlement Stellaire — eau cosmique irradiée, dégâts eau+radiant.",
        "Forme Liquide Cosmique — immunité entraves physiques.",
        "Régénération Abyssale — 25 PV par round."
      ],

      loot: [
        "Cœur Tidal",
        "Anneau de Marée Infinie",
        "Éclat Océanique",
        "Essence du Premier Océan"
      ],

      phaseTriggers: [
        "Sous 200 HP → vortex permanent sur toute la zone.",
        "Chaque typhon détruit → +10% dégâts pendant 2 rounds."
      ]
    }
  ]
};

export default VORKALUZ;
