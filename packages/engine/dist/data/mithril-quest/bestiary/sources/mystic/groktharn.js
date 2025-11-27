// ---------------------------------------------------------------------------
// GROTH’KARN — TITAN DU MONDE-RACINE (MYTHIQUE)
// Colosse tellurique, fusion de pierre, racines, cristal et pression tectonique.
// ---------------------------------------------------------------------------
export const GROTHKARN = {
    id: "grothkarn",
    name: "Groth'Karn",
    epithet: "Titan du Monde-Racine",
    category: "elemental",
    aiProfile: "titan-brute-controller",
    encounterDifficulty: "mythic",
    tags: [
    // auto-commented "mythic",
    // auto-commented "titan",
    // auto-commented "colossus",
    // auto-commented "earthborn",
    // auto-commented "primordial",
    // auto-commented "crystal",
    // auto-commented "root-god",
    ],
    biomes: [
    // auto-commented "mountains",
    // auto-commented "ancient-forest",
    // auto-commented "jungle",
    // auto-commented "earth-core",
    // auto-commented "underdark",
    ],
    summary: "Un titan pré-continental, fusion de pierre vivante, de racines primordiales et de cristaux telluriques. Chaque pas provoque un séisme. "
    // auto-commented "Groth’Karn est un bulldozer mythique, une force tectonique vivante.",
    ,
    // auto-commented "Groth’Karn est un bulldozer mythique, une force tectonique vivante.",
    phases: [
        // ---------------------------------------------------------------------
        // PHASE 1 — FORMATION TITANIQUE
        // ---------------------------------------------------------------------
        {
            key: "phase-1",
            name: "Groth'Karn — Titan du Monde-Racine",
            cr: 22,
            hp: 760,
            ac: 23,
            role: "mythic-brute",
            description: "Une masse colossale de roches et de racines se lève du sol. "
            // auto-commented "Le titan déclenche des séismes et projette des épines massives en jaillissant du sol.",
            ,
            // auto-commented "Le titan déclenche des séismes et projette des épines massives en jaillissant du sol.",
            tactics: ["Secouer constamment le terrain pour désavantager les lanceurs de sorts.",
                // auto-commented "Uproot Spines pour frapper les cibles à distance.",
                "Empêcher les joueurs de rester regroupés."]
            // auto-commented
            ,
            // auto-commented
            abilities: [
            // auto-commented "Séisme Titanesque — 60 ft autour, renverse, étourdit 1 round.",
            // auto-commented "Peau de Granit-Vivant — résistance aux dégâts non-magiques.",
            // auto-commented "Épines de Racines — jaillissent en ligne, ciblent 3 joueurs.",
            // auto-commented "Hurlement Tellurique — brise les protections magiques.",
            ],
            phaseTriggers: [
            // auto-commented "À 0 HP → le titan se fissure, révélant un noyau vivant magnétique.",
            // auto-commented "Transition vers sa forme élémentaire supérieure.",
            ],
            // auto-commented
            loot: [
            // auto-commented "Fragment de Cœur Tellurique",
            // auto-commented "Racines Primordiales",
            // auto-commented "Poussière de Titan",
            ]
        },
        // ---------------------------------------------------------------------
        // PHASE 2 — AVATAR ÉLÉMENTAIRE
        // ---------------------------------------------------------------------
        {
            key: "phase-2",
            name: "Groth'Karn — Avatar de Terre Vivante",
            cr: 24,
            hp: 820,
            ac: 25,
            role: "mythic-controller",
            biomes: ["mountains", "crystal-caves", "ancient-forest"],
            description: "Le noyau cristallin se réveille. Le titan se transforme en un avatar tellurique "
            // auto-commented "magnétique, contrôlant les cristaux, la terre et les champs gravitationnels.",
            // auto-commented "Créer des explosions cristallines pour contrôler les zones.",
            ,
            // auto-commented "magnétique, contrôlant les cristaux, la terre et les champs gravitationnels.",
            // auto-commented "Créer des explosions cristallines pour contrôler les zones.",
            "Mode enragé sous 200 HP.": 
        }
    ]
};
;
export default GROTHKARN;
