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
    // auto-commented "mythic",
    // auto-commented "leviathan",
    // auto-commented "colossus",
    // auto-commented "abyssal",
    // auto-commented "oceanic",
    // auto-commented "tidal",
    ],
    biomes: [
    // auto-commented "ocean",
    // auto-commented "abyss",
    // auto-commented "deep-sea-trenches",
    // auto-commented "storm-sea",
    // auto-commented "flooded-ruins",
    ],
    summary: "Un serpent abyssal colossal, maître des pressions océaniques, capable "
    // auto-commented "d’engloutir un navire entier et de provoquer des typhons gravitationnels.",
    // -------------------------------------------------------------------------
    // PHASES
    // -------------------------------------------------------------------------
    ,
    // auto-commented "d’engloutir un navire entier et de provoquer des typhons gravitationnels.",
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
            description: "Le titan émerge des abysses, créant des vagues monstrueuses. "
            // auto-commented "Son corps serpentin écrase, engloutit et remodelle les distances.",
            ,
            // auto-commented "Son corps serpentin écrase, engloutit et remodelle les distances.",
            tactics: ["Empêche les joueurs de rester à distance.",
                // auto-commented "Utilise la pression abyssale pour neutraliser les tanks.",
                "Crée des tsunamis pour briser la formation du groupe."],
            stats: {
                hp: 750,
                ac: 22,
                atk: "+19",
                dmg: "4d10+12 (bite) + tidal impact",
                speed: "60 ft swim",
            },
            // auto-commented
            abilities: [
            // auto-commented "Marque d’Écrasement — tsunami de 60 ft, renverse + dégâts massifs.",
            // auto-commented "Morsure Abyssale — dégâts force + ingestion partielle.",
            // auto-commented "Carapace Abyssale — réduction des dégâts physiques.",
            // auto-commented "Jet d’Eaux Pressurisées — tir perforant longue portée.",
            // auto-commented "Brouillard Sélénite — réduit la vision, avantage au Leviathan.",
            ],
            // auto-commented
            loot: [
            // auto-commented "Écaille Abyssale",
            // auto-commented "Glande Hydraulique",
            // auto-commented "Cœur de Marée",
            // auto-commented "Perle Noire Titanic",
            ],
            phaseTriggers: [
            // auto-commented "À 0 HP → les eaux s’illuminent ; le Leviathan révèle sa forme cosmique.",
            // auto-commented "La gravité commence à se distordre.",
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
            description: "Le titan devient luminescent, la mer se soulève. Les marées "
            // auto-commented "s’inversent et un vortex gravitationnel engloutit tout.",
            // auto-commented "Manipule la gravité pour attirer/repousser les PJ.",
            ,
            // auto-commented "s’inversent et un vortex gravitationnel engloutit tout.",
            // auto-commented "Manipule la gravité pour attirer/repousser les PJ.",
            "Génère des typhons pour segmenter la zone.": 
        }
    ],
    hp: 900,
    ac: 24,
    atk: "+21",
    dmg: "5d12+14 (cosmic tidal bite) + gravitational tide",
    speed: "80 ft swim, 20 ft hover (water form)",
};
;
export default VORKALUZ;
