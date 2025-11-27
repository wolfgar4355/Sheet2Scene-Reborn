// NAHMIRYTH — Nightbag Eldritch Mythique
// Hag du Vide Onirique corrompant rêves, perceptions et réalité mentale.
// ---------------------------------------------------------------------------
// NAHMIRYTH — NIGHTHAG ELDRITCH DU VIDE
// ---------------------------------------------------------------------------
export const NAHMIRYTH = {
    id: "nahmiryth",
    name: "NAHMIRYTH",
    epithet: "Hag du Vide Onirique",
    category: "undead",
    tags: ["mythic", "eldritch", "nightmare", "void-born", "dream-witch"],
    biomes: ["shadowlands", "nightmare-realms", "void-border", "corrupted-forests"],
    encounterDifficulty: "mythic",
    aiProfile: "nightmare-controller",
    summary: "Entité onirique née du croisement entre une Nighthag et un fragment du Vide. Elle déchire les rêves, altère les perceptions, manipule les souvenirs et piège "
    // auto-commented "les PJ dans des réalités mentales fracturées.",
    ,
    // auto-commented "les PJ dans des réalités mentales fracturées.",
    mythicActions: [
    // auto-commented "Vague de Torpeur — chaque round, impose un test de Sagesse ou un PJ perd son action.",
    // auto-commented "Rupture Mentale — inflige 4d6 psychic + désavantage contre illusions.",
    // auto-commented "Déformation Onirique — déplace toutes les créatures de 3 m dans des directions aléatoires.",
    ],
    // -------------------------------------------------------------------------
    // PHASES
    // -------------------------------------------------------------------------
    phases: [
        // -------------------- PHASE 1 -----------------------------------------
        {
            key: "phase-1",
            name: "Hag du Vide Onirique",
            cr: 23,
            hp: 610,
            ac: 23,
            role: "elite-controller",
            description: "Manipulation de rêve, malédictions, illusions et fractures mentales. "
            // auto-commented "Elle isole les esprits, enferme les pensées et terrifie dans le silence nocturne.",
            ,
            // auto-commented "Elle isole les esprits, enferme les pensées et terrifie dans le silence nocturne.",
            tactics: ["Séparer les PJ individuellement par illusions.",
                // auto-commented "Cibler les gens à faible Sagesse.",
                "Créer une pression mentale constante via drains et malédictions."]
            // auto-commented
            ,
            // auto-commented
            abilities: [
            // auto-commented "Ténèbres du Cauchemar — inflige peur + désorientation prolongée.",
            // auto-commented "Étreinte de Sommeil Volé — vole 2d6 heures de sommeil (désavantage cumulatif).",
            // auto-commented "Rires des Visages Oniriques — illusions qui bloquent la vision.",
            // auto-commented "Regard de Néant — réduit les jets magiques.",
            // auto-commented "Mors du Vide — disparaît puis réapparaît derrière une cible.",
            // auto-commented "Hurlement Interstitiel — brise les esprits à 18 m.",
            ],
            phaseTriggers: [
            // auto-commented "À 0 PV → NAHMIRYTH se déchire en une brèche onirique.",
            // auto-commented "Les illusions deviennent incontrôlables.",
            // auto-commented "Transition vers une forme non-euclidienne.",
            ]
        },
        // -------------------- PHASE 2 -----------------------------------------
        {
            key: "phase-2",
            name: "Enfant du Vide Ébranché",
            cr: 25,
            hp: 780,
            ac: 24,
            role: "mythic-controller",
            description: "Sa forme se fracture en plusieurs dimensions mentales. Elle manipule la réalité locale, disperse des illusions fractales et ",
            'consume les souvenirs des PJ pour alimenter le Vide.': ,
            // auto-commented "Manipuler les émotions (désespoir, confusion, terreur).",
            "Altérer la réalité pour isoler ou corrompre un PJ.": 
        }
    ]
};
// -------------------------------------------------------------------------
// LOOT
// -------------------------------------------------------------------------
// auto-commented
loot: [
// auto-commented "Voile des Mille Cauchemars",
// auto-commented "Œil Fendu du Néant",
// auto-commented "Grimoire des Rêves Noirs",
// auto-commented "Nœud d’Ombre Vivante",
// auto-commented "Cœur du Vide Onirique",
// auto-commented "Nœud d’Entropie",
// auto-commented "Fléau de Sommeils Volés",
// auto-commented "Rune du Rêve Brisé",
];
;
export default NAHMIRYTH;
