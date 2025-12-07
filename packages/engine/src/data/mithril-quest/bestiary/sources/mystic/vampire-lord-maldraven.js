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
        "vampire",
        "undead",
        "mythic",
        "noble",
        "shadow",
        "mist-form"
    ],
    biomes: [
        "gothic-castle",
        "shadowlands",
        "night-forest",
        "ruins"
    ],
    summary: "Un vampire noble qui manipule les ombres, charme ses adversaires et se "
        + "réincarne en une forme de brume immortelle. Sa vitesse et ses drains "
        + "en font un boss extrêmement dangereux dans les combats prolongés.",
    // -------------------------------------------------------------------------
    // PHASES
    // -------------------------------------------------------------------------
    phases: [
        // ---------------------------------------------------------------------
        // PHASE 1 — SEIGNEUR VAMPIRE ARCHI-NOBLE
        // ---------------------------------------------------------------------
        {
            key: "phase-1",
            name: "Maldraven — Seigneur Vampire Archi-Noble",
            cr: 22,
            role: "mythic-controller",
            biomes: [
                "gothic-castle",
                "shadowlands",
                "night-forest",
                "ruins"
            ],
            description: "Un vampire souverain capable de contrôler l’esprit, drainer la vie et "
                + "invoquer des brumes toxiques. Son style de combat repose sur la "
                + "manipulation mentale, la domination et la mobilité rapide.",
            tactics: [
                "Charmer les cibles isolées.",
                "Utiliser la brume pour couper la ligne de vue.",
                "Sauter sur les cibles faibles pour maximiser le drain."
            ],
            stats: {
                hp: 520,
                ac: 22,
                atk: "+18",
                dmg: "3d10+10 (bite/claw) + draining strike",
                speed: "40 ft, climb 40 ft, mist step (bonus)"
            },
            abilities: [
                "Vol de Sang — vole 20 PV, soigne Maldraven du même montant.",
                "Domination Vampirique — contrôle mental sur 1 cible faible.",
                "Voile de Brume — téléportation brumeuse 9 m.",
                "Essaim d’Ombres — invoque un swarm temporaire.",
                "Noble Sombre — réduit les dégâts nécrotiques reçus."
            ],
            loot: [
                "Armure du Sang Éternel",
                "Cape Obsidienne Nocturne",
                "Diamant Sanguin",
                "Clé de la Crypte Perdue"
            ],
            phaseTriggers: [
                "À 0 HP → Maldraven se dissout en brume immortelle.",
                "La zone devient totalement obscure."
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
            description: "Sa forme brumeuse est intouchable par les armes non-magiques, capable "
                + "de se régénérer rapidement et de déchiqueter les esprits par de "
                + "massifs drains d'âme.",
            tactics: [
                "Éviter tout dégât physique grâce à sa forme intangible.",
                "Drainer en continu plusieurs cibles.",
                "Utiliser illusions et brume pour diviser le groupe."
            ],
            stats: {
                hp: 630,
                ac: 24,
                atk: "+20",
                dmg: "4d10+10 (shadow tendrils) + soul drain",
                speed: "hover 50 ft, teleport 20 ft"
            },
            abilities: [
                "Forme de Brume Pure — immunité totale aux armes non-magiques.",
                "Tempête Sanguine — zone 12 m, dégâts nécrotiques massifs.",
                "Drain d’Âme — siphonne 30 PV à 3 cibles.",
                "Illusions Brumeuses — crée 3 clones insubstantiels.",
                "Nuit Éternelle — obscurité totale dans un rayon de 15 m.",
                "Régénération Vampirique — 25 PV par round."
            ],
            loot: [
                "Cœur de Brume du Vampire",
                "Gantelets du Noble Sombre",
                "Sceptre Sanguin",
                "Relique de la Nuit Infinie"
            ]
        }
    ]
};
export default MALDRAVEN;
