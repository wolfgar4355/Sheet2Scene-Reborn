// ---------------------------------------------------------------------------
// KRON’THAL — SORCIER PRIMORDIAL DU TEMPS (MYTHIQUE)
// Maître absolu des paradoxes, capable de réécrire l’initiative et de figer le temps.
// ---------------------------------------------------------------------------
export const KRONTHAL = {
    id: "kronthal",
    name: "Kron’Thal",
    epithet: "Sorcier Primordial du Temps",
    category: "arcane",
    encounterDifficulty: "mythic",
    aiProfile: "chronomancer",
    tags: [
    // auto-commented "mythic",
    // auto-commented "time",
    // auto-commented "arcane",
    // auto-commented "chronomancer",
    // auto-commented "paradox",
    // auto-commented "time-lord",
    ],
    biomes: [
    // auto-commented "time-rifts",
    // auto-commented "ancient-labs",
    // auto-commented "crystal-spires",
    // auto-commented "arcane-ruins",
    // auto-commented "temporal-storms",
    ],
    summary: "Un mage qui manipule initiative, actions, clones temporels et paradoxes. "
    // auto-commented "Ses pouvoirs peuvent effacer des événements entiers ou rejouer un round complet.",
    // -------------------------------------------------------------------------
    // PHASES
    // -------------------------------------------------------------------------
    ,
    // auto-commented "Ses pouvoirs peuvent effacer des événements entiers ou rejouer un round complet.",
    // -------------------------------------------------------------------------
    // PHASES
    // -------------------------------------------------------------------------
    phases: [
        // ---------------------------------------------------------------------
        // PHASE 1 — ARCHIMAGE CHRONOMANCIEN
        // ---------------------------------------------------------------------
        {
            key: "phase-1",
            name: "Kron’Thal — Archimage Chronomancien",
            cr: 22,
            role: "mythic-controller",
            description: "Un maître du temps qui inverse initiative, réécrit les actions et "
            // auto-commented "manipule les points faibles temporels du champ de bataille.",
            ,
            // auto-commented "manipule les points faibles temporels du champ de bataille.",
            tactics: ["Cibler les joueurs trop rapides.",
                // auto-commented "Annuler les actions clés.",
                "Désorganiser le combat avec du déplacement temporel."],
            stats: {
                hp: 520,
                ac: 22,
                atk: "+17",
                dmg: "4d8+9 (arcane bolt) + time ripple",
                speed: "30 ft, blink 15 ft (bonus)",
            },
            // auto-commented
            abilities: [
            // auto-commented "Rebond du Temps — renvoie 1 attaque vers l’attaquant (1/round).",
            // auto-commented "Vieillir d’Âge — affaiblit ou fait vieillir une cible.",
            // auto-commented "Double Incantation — lance 2 sorts moyens.",
            // auto-commented "Boucle Temporelle Mineure — répète la dernière action d’un joueur.",
            // auto-commented "Aurore Chronique — ralentit toutes les créatures proches.",
            ],
            // auto-commented
            loot: [
            // auto-commented "Sablier de Kron’Thal",
            // auto-commented "Fragment d’Âge Perdu",
            // auto-commented "Tome des Paradoxes",
            // auto-commented "Gemme des Millénaires",
            ],
            phaseTriggers: [
            // auto-commented "À 0 HP → fracturation temporelle massive.",
            // auto-commented "Les clones instables apparaissent autour de lui.",
            ]
        },
        // ---------------------------------------------------------------------
        // PHASE 2 — KRON'THAL FRACTURÉ, SEIGNEUR DES PARADOXES
        // ---------------------------------------------------------------------
        {
            key: "phase-2",
            name: "Kron’Thal Fracturé — Seigneur des Paradoxes",
            cr: 25,
            role: "mythic-controller",
            biomes: [
            // auto-commented "time-rifts",
            // auto-commented "temporal-storms",
            // auto-commented "non-places",
            // auto-commented "fractured-time",
            ],
            description: "Le sorcier devient instable, existant en plusieurs états temporels. "
            // auto-commented "Il contrôle les clones, efface des tours, et manipule des tempêtes chrono-fractales.",
            // auto-commented "Effacer les rounds des joueurs.",
            ,
            // auto-commented "Il contrôle les clones, efface des tours, et manipule des tempêtes chrono-fractales.",
            // auto-commented "Effacer les rounds des joueurs.",
            "Créer un chaos temporel constant.": 
        }
    ],
    hp: 700,
    ac: 25,
    atk: "+20",
    dmg: "5d10+12 (temporal distortion)",
    speed: "40 ft, hover 20 ft",
};
;
export default KRONTHAL;
