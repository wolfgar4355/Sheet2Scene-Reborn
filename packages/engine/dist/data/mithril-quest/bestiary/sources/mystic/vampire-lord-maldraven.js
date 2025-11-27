// ---------------------------------------------------------------------------
// MALDRAVEN — SEIGNEUR VAMPIRE MYTHIQUE
// Maître des ombres brumeuses, insaisissable et immortel dans sa seconde forme.
// ---------------------------------------------------------------------------
export const MALDRAVEN = {
    id: "maldraven",
    name: "Maldraven",
    epithet: "Seigneur Vampire Éternel",
    category: "undead",
    encounterDifficulty: "mythic",
    aiProfile: "vampire-lord",
    tags: [
    // auto-commented "vampire",
    // auto-commented "undead",
    // auto-commented "mythic",
    // auto-commented "noble",
    // auto-commented "shadow",
    // auto-commented "mist-form",
    ],
    biomes: [
    // auto-commented "gothic-castle",
    // auto-commented "shadowlands",
    // auto-commented "night-forest",
    // auto-commented "ruins",
    ],
    summary: 
    // auto-commented "Un vampire noble qui manipule les ombres, charme ses adversaires et se réincarne en une forme de brume immortelle. Sa vitesse et ses drains en font un boss extrêmement dangereux dans les combats prolongés.",
    // -------------------------------------------------------------------------
    // PHASES
    // -------------------------------------------------------------------------
    phases, [
    // ---------------------------------------------------------------------
    // PHASE 1 — SEIGNEUR VAMPIRE ARCHI-NOBLE
    // ---------------------------------------------------------------------
    {
        key: "phase-1",
        name: "Maldraven — Seigneur Vampire Archi-Noble",
        cr: 22,
        role: "mythic-controller",
        biomes: [
        // auto-commented "gothic-castle",
        // auto-commented "shadowlands",
        // auto-commented "night-forest",
        // auto-commented "ruins",
        ],
        description: 
        // auto-commented "Un vampire souverain capable de contrôler l’esprit, drainer la vie et invoquer des brumes toxiques. Son style de combat repose sur la manipulation mentale, la domination et la mobilité rapide.",
        tactics, ["Charmer les cibles isolées.",
            // auto-commented "Utiliser la brume pour couper la ligne de vue.",
            "Sauter sur les cibles faibles pour maximiser le drain."]: ,
        stats: {
            hp: 520,
            ac: 22,
            atk: "+18",
            dmg: "3d10+10 (bite/claw) + draining strike",
            speed: "40 ft, climb 40 ft, mist step (bonus)",
        },
        // auto-commented
        abilities: [
        // auto-commented "Vol de Sang — vole 20 PV, soigne Maldraven du même montant.",
        // auto-commented "Domination Vampirique — contrôle mental sur 1 cible faible.",
        // auto-commented "Voile de Brume — téléportation brumeuse 9 m.",
        // auto-commented "Essaim d’Ombres — invoque un swarm temporaire.",
        // auto-commented "Noble Sombre — réduit les dégâts nécrotiques reçus.",
        ],
        // auto-commented
        loot: [
        // auto-commented "Armure du Sang Éternel",
        // auto-commented "Cape Obsidienne Nocturne",
        // auto-commented "Diamant Sanguin",
        // auto-commented "Clé de la Crypte Perdue",
        ],
        phaseTriggers: [
        // auto-commented "À 0 HP → Maldraven se dissout en brume immortelle.",
        // auto-commented "La zone devient totalement obscure.",
        ]
    },
        // ---------------------------------------------------------------------
        // PHASE 2 — ESSENCE DE BRUME IMMORTELLE
        // ---------------------------------------------------------------------
        {
            key: "phase-2",
            name: "Maldraven — Essence de Brume Immortelle",
            cr: 24,
            role: "mythic-controller",
            biomes: ["gothic-castle", "shadowlands"],
            description: 
            // auto-commented "Sa forme brumeuse est intouchable par les armes non-magiques, capable de se régénérer rapidement et de déchiqueter les esprits par de massifs drains d'âme.",
            // auto-commented "Drainer en continu plusieurs cibles.",
            "Utiliser illusions et brume pour diviser le groupe.",
            hp: 630,
            ac: 24,
            atk: "+20",
            dmg: "4d10+10 (shadow tendrils) + soul drain",
            speed: "hover 50 ft, teleport 20 ft",
        },
    ]: ,
    // auto-commented
    // auto-commented "Cœur de Brume du Vampire",
    // auto-commented "Gantelets du Noble Sombre",
    // auto-commented "Sceptre Sanguin",
    // auto-commented "Relique de la Nuit Infinie",
};
;
export default MALDRAVEN;
