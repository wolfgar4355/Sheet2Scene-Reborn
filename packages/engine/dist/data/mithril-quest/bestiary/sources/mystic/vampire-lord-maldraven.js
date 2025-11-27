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
    // NOTE (fix-fantasy v2 auto-commented): "vampire",
    // NOTE (fix-fantasy v2 auto-commented): "undead",
    // NOTE (fix-fantasy v2 auto-commented): "mythic",
    // NOTE (fix-fantasy v2 auto-commented): "noble",
    // NOTE (fix-fantasy v2 auto-commented): "shadow",
    // NOTE (fix-fantasy v2 auto-commented): "mist-form"
    ],
    biomes: [
    // NOTE (fix-fantasy v2 auto-commented): "gothic-castle",
    // NOTE (fix-fantasy v2 auto-commented): "shadowlands",
    // NOTE (fix-fantasy v2 auto-commented): "night-forest",
    // NOTE (fix-fantasy v2 auto-commented): "ruins"
    ],
    summary: 
    // NOTE (fix-fantasy v2 auto-commented): "Un vampire noble qui manipule les ombres, charme ses adversaires et se "
    +"réincarne en une forme de brume immortelle. Sa vitesse et ses drains "
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
            // NOTE (fix-fantasy v2 auto-commented): "gothic-castle",
            // NOTE (fix-fantasy v2 auto-commented): "shadowlands",
            // NOTE (fix-fantasy v2 auto-commented): "night-forest",
            // NOTE (fix-fantasy v2 auto-commented): "ruins"
            ],
            description: 
            // NOTE (fix-fantasy v2 auto-commented): "Un vampire souverain capable de contrôler l’esprit, drainer la vie et "
            +"invoquer des brumes toxiques. Son style de combat repose sur la "
                + "manipulation mentale, la domination et la mobilité rapide.",
            tactics: { prefersAmbush: true }, // NOTE: anciennement tactics: ["Charmer les cibles isolées.",
            // NOTE (fix-fantasy v2 auto-commented): "Utiliser la brume pour couper la ligne de vue.",
            "Sauter sur les cibles faibles pour maximiser le drain.": 
        }
    ],
    stats: {
        hp: 520,
        ac: 22,
        atk: "+18",
        dmg: "3d10+10 (bite/claw) + draining strike",
        speed: "40 ft, climb 40 ft, mist step (bonus)"
    },
    abilities: [
    // NOTE (fix-fantasy v2 auto-commented): "Vol de Sang — vole 20 PV, soigne Maldraven du même montant.",
    // NOTE (fix-fantasy v2 auto-commented): "Domination Vampirique — contrôle mental sur 1 cible faible.",
    // NOTE (fix-fantasy v2 auto-commented): "Voile de Brume — téléportation brumeuse 9 m.",
    // NOTE (fix-fantasy v2 auto-commented): "Essaim d’Ombres — invoque un swarm temporaire.",
    // NOTE (fix-fantasy v2 auto-commented): "Noble Sombre — réduit les dégâts nécrotiques reçus."
    ],
    loot: [
    // NOTE (fix-fantasy v2 auto-commented): "Armure du Sang Éternel",
    // NOTE (fix-fantasy v2 auto-commented): "Cape Obsidienne Nocturne",
    // NOTE (fix-fantasy v2 auto-commented): "Diamant Sanguin",
    // NOTE (fix-fantasy v2 auto-commented): "Clé de la Crypte Perdue"
    ],
    phaseTriggers: [
    // NOTE (fix-fantasy v2 auto-commented): "À 0 HP → Maldraven se dissout en brume immortelle.",
    // NOTE (fix-fantasy v2 auto-commented): "La zone devient totalement obscure."
    ]
}, 
// ---------------------------------------------------------------------
// PHASE 2 — ESSENCE DE BRUME IMMORTELLE
// ---------------------------------------------------------------------
{ key: , "phase-2": , name: , "Maldraven — Essence de Brume Immortelle": , cr: , 24: , role: , "mythic-controller": , biomes: [], "gothic-castle": , "shadowlands": , description:  };
// NOTE (fix-fantasy v2 auto-commented): "Sa forme brumeuse est intouchable par les armes non-magiques, capable "
+"de se régénérer rapidement et de déchiqueter les esprits par de "
    + "massifs drains d'âme.",
    tactics;
{
    prefersAmbush: true;
}
// NOTE (fix-fantasy v2 auto-commented): "Drainer en continu plusieurs cibles.",
"Utiliser illusions et brume pour diviser le groupe.";
stats: {
    hp: 630,
        ac;
    24,
        atk;
    "+20",
        dmg;
    "4d10+10 (shadow tendrils) + soul drain",
        speed;
    "hover 50 ft, teleport 20 ft";
}
abilities: [
// NOTE (fix-fantasy v2 auto-commented): "Forme de Brume Pure — immunité totale aux armes non-magiques.",
// NOTE (fix-fantasy v2 auto-commented): "Tempête Sanguine — zone 12 m, dégâts nécrotiques massifs.",
// NOTE (fix-fantasy v2 auto-commented): "Drain d’Âme — siphonne 30 PV à 3 cibles.",
// NOTE (fix-fantasy v2 auto-commented): "Illusions Brumeuses — crée 3 clones insubstantiels.",
// NOTE (fix-fantasy v2 auto-commented): "Nuit Éternelle — obscurité totale dans un rayon de 15 m.",
// NOTE (fix-fantasy v2 auto-commented): "Régénération Vampirique — 25 PV par round."
],
    loot;
[
// NOTE (fix-fantasy v2 auto-commented): "Cœur de Brume du Vampire",
// NOTE (fix-fantasy v2 auto-commented): "Gantelets du Noble Sombre",
// NOTE (fix-fantasy v2 auto-commented): "Sceptre Sanguin",
// NOTE (fix-fantasy v2 auto-commented): "Relique de la Nuit Infinie"
];
;
export default MALDRAVEN;
