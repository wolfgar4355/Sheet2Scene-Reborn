// ---------------------------------------------------------------------------
// VORKALUZ — LEVIATHAN DES ABYSSES (MYTHIQUE)
// Un titan océanique capable de remodeler la mer entière et créer des tsunamis cosmiques.
// ---------------------------------------------------------------------------
export const VORKALUZ = {
    id: "vorkaluz",
    name: "Vor’Kaluz",
    epithet: "Leviathan des Abysses",
    category: "aberration",
    encounterDifficulty: "mythic",
    aiProfile: "titan-brute",
    tags: [
    // NOTE (fix-fantasy v2 auto-commented): "mythic",
    // NOTE (fix-fantasy v2 auto-commented): "leviathan",
    // NOTE (fix-fantasy v2 auto-commented): "colossus",
    // NOTE (fix-fantasy v2 auto-commented): "abyssal",
    // NOTE (fix-fantasy v2 auto-commented): "oceanic",
    // NOTE (fix-fantasy v2 auto-commented): "tidal"
    ],
    biomes: [
    // NOTE (fix-fantasy v2 auto-commented): "ocean",
    // NOTE (fix-fantasy v2 auto-commented): "abyss",
    // NOTE (fix-fantasy v2 auto-commented): "deep-sea-trenches",
    // NOTE (fix-fantasy v2 auto-commented): "storm-sea",
    // NOTE (fix-fantasy v2 auto-commented): "flooded-ruins"
    ],
    summary: "Un serpent abyssal colossal, maître des pressions océaniques, capable " +
        // NOTE (fix-fantasy v2 auto-commented): "d’engloutir un navire entier et de provoquer des typhons gravitationnels.",
        // -------------------------------------------------------------------------
        // PHASES
        // -------------------------------------------------------------------------
        phases, [
    // ---------------------------------------------------------------------
    // PHASE 1 — LEVIATHAN ABYSSAL
    // ---------------------------------------------------------------------
    {
        key: "phase-1",
        name: "Vor’Kaluz — Leviathan Abyssal",
        cr: 21,
        role: "mythic-brute",
        description: "Le titan émerge des abysses, créant des vagues monstrueuses. " +
            // NOTE (fix-fantasy v2 auto-commented): "Son corps serpentin écrase, engloutit et remodelle les distances.",
            tactics
    }]: { prefersAmbush: true }, // NOTE: anciennement tactics: ["Empêche les joueurs de rester à distance.",
    // NOTE (fix-fantasy v2 auto-commented): "Utilise la pression abyssale pour neutraliser les tanks.",
    "Crée des tsunamis pour briser la formation du groupe.": ,
    stats: {
        hp: 750,
        ac: 22,
        atk: "+19",
        dmg: "4d10+12 (bite) + tidal impact",
        speed: "60 ft swim"
    },
    abilities: [
    // NOTE (fix-fantasy v2 auto-commented): "Marque d’Écrasement — tsunami de 60 ft, renverse + dégâts massifs.",
    // NOTE (fix-fantasy v2 auto-commented): "Morsure Abyssale — dégâts force + ingestion partielle.",
    // NOTE (fix-fantasy v2 auto-commented): "Carapace Abyssale — réduction des dégâts physiques.",
    // NOTE (fix-fantasy v2 auto-commented): "Jet d’Eaux Pressurisées — tir perforant longue portée.",
    // NOTE (fix-fantasy v2 auto-commented): "Brouillard Sélénite — réduit la vision, avantage au Leviathan."
    ],
    loot: [
    // NOTE (fix-fantasy v2 auto-commented): "Écaille Abyssale",
    // NOTE (fix-fantasy v2 auto-commented): "Glande Hydraulique",
    // NOTE (fix-fantasy v2 auto-commented): "Cœur de Marée",
    // NOTE (fix-fantasy v2 auto-commented): "Perle Noire Titanic"
    ],
    phaseTriggers: [
    // NOTE (fix-fantasy v2 auto-commented): "À 0 HP → les eaux s’illuminent ; le Leviathan révèle sa forme cosmique.",
    // NOTE (fix-fantasy v2 auto-commented): "La gravité commence à se distordre."
    ]
}, 
// ---------------------------------------------------------------------
// PHASE 2 — AVATAR TIDAL COSMIQUE
// ---------------------------------------------------------------------
{ key: , "phase-2": , name: , "Vor’Kaluz — Avatar Tidal Cosmique": , cr: , 24: , role: , "mythic-controller": , biomes: [], "ocean": , "abyss": , "storm-sea": , "cosmic-tide": , description: , "Le titan devient luminescent, la mer se soulève. Les marées ":  };
+
// NOTE (fix-fantasy v2 auto-commented): "s’inversent et un vortex gravitationnel engloutit tout.",
tactics;
{
    prefersAmbush: true;
}
// NOTE (fix-fantasy v2 auto-commented): "Manipule la gravité pour attirer/repousser les PJ.",
"Génère des typhons pour segmenter la zone.";
stats: {
    hp: 900,
        ac;
    24,
        atk;
    "+21",
        dmg;
    "5d12+14 (cosmic tidal bite) + gravitational tide",
        speed;
    "80 ft swim, 20 ft hover (water form)";
}
abilities: [
// NOTE (fix-fantasy v2 auto-commented): "Typhon Ancestral — vortex géant, déplace toute la map.",
// NOTE (fix-fantasy v2 auto-commented): "Marée Gravitationnelle — attire toutes les créatures à 30 ft.",
// NOTE (fix-fantasy v2 auto-commented): "Déferlement Stellaire — eau cosmique irradiée, dégâts eau+radiant.",
// NOTE (fix-fantasy v2 auto-commented): "Forme Liquide Cosmique — immunité entraves physiques.",
// NOTE (fix-fantasy v2 auto-commented): "Régénération Abyssale — 25 PV par round."
],
    loot;
[
// NOTE (fix-fantasy v2 auto-commented): "Cœur Tidal",
// NOTE (fix-fantasy v2 auto-commented): "Anneau de Marée Infinie",
// NOTE (fix-fantasy v2 auto-commented): "Éclat Océanique",
// NOTE (fix-fantasy v2 auto-commented): "Essence du Premier Océan"
],
    phaseTriggers;
[
// NOTE (fix-fantasy v2 auto-commented): "Sous 200 HP → vortex permanent sur toute la zone.",
// NOTE (fix-fantasy v2 auto-commented): "Chaque typhon détruit → +10% dégâts pendant 2 rounds."
];
;
export default VORKALUZ;
