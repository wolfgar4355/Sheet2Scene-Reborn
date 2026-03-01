// @ts-nocheck
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
    summary: "Entité onirique née du croisement entre une Nighthag et un fragment du Vide. " +
        "Elle déchire les rêves, altère les perceptions, manipule les souvenirs et piège " +
        "les PJ dans des réalités mentales fracturées.",
    mythicActions: [
        "Vague de Torpeur — chaque round, impose un test de Sagesse ou un PJ perd son action.",
        "Rupture Mentale — inflige 4d6 psychic + désavantage contre illusions.",
        "Déformation Onirique — déplace toutes les créatures de 3 m dans des directions aléatoires."
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
            description: "Manipulation de rêve, malédictions, illusions et fractures mentales. " +
                "Elle isole les esprits, enferme les pensées et terrifie dans le silence nocturne.",
            tactics: [
                "Séparer les PJ individuellement par illusions.",
                "Cibler les gens à faible Sagesse.",
                "Créer une pression mentale constante via drains et malédictions."
            ],
            abilities: [
                "Ténèbres du Cauchemar — inflige peur + désorientation prolongée.",
                "Étreinte de Sommeil Volé — vole 2d6 heures de sommeil (désavantage cumulatif).",
                "Rires des Visages Oniriques — illusions qui bloquent la vision.",
                "Regard de Néant — réduit les jets magiques.",
                "Mors du Vide — disparaît puis réapparaît derrière une cible.",
                "Hurlement Interstitiel — brise les esprits à 18 m."
            ],
            phaseTriggers: [
                "À 0 PV → NAHMIRYTH se déchire en une brèche onirique.",
                "Les illusions deviennent incontrôlables.",
                "Transition vers une forme non-euclidienne."
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
            description: "Sa forme se fracture en plusieurs dimensions mentales. " +
                "Elle manipule la réalité locale, disperse des illusions fractales et " +
                'consume les souvenirs des PJ pour alimenter le Vide.',
            tactics: [
                "Créer des zones d’illusion fractale pour diviser le groupe.",
                "Manipuler les émotions (désespoir, confusion, terreur).",
                "Altérer la réalité pour isoler ou corrompre un PJ."
            ],
            abilities: [
                "Forme Fractale d’Effroi — se sépare en 3 copies imparfaites.",
                "Explosion d’Entropie Mentale — dégâts psychiques + confusion.",
                "Nuit Sans Lune — obscurité totale impossible à dissiper.",
                "Cœur Vide Pulsant — pulsations mentales meurtrières.",
                "Déchirement de Rêve — force un PJ à vivre ses souvenirs en boucle.",
                "Régénération du Vide — +30 PV si une illusion existe.",
                "Forme Paradoxale — 1x/combat nie une attaque qui devait la tuer."
            ],
            phaseTriggers: [
                "Lorsque 3 illusions sont détruites, elle se renforce.",
                "À 100 PV, son essence se multiplie et attaque en simultané."
            ]
        }
    ],
    // -------------------------------------------------------------------------
    // LOOT
    // -------------------------------------------------------------------------
    loot: [
        "Voile des Mille Cauchemars",
        "Œil Fendu du Néant",
        "Grimoire des Rêves Noirs",
        "Nœud d’Ombre Vivante",
        "Cœur du Vide Onirique",
        "Nœud d’Entropie",
        "Fléau de Sommeils Volés",
        "Rune du Rêve Brisé"
    ]
};
export default NAHMIRYTH;
