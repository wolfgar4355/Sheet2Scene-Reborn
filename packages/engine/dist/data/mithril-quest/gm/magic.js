// lib/s2s/fantasy/gm/magic.ts
export const MAGIC_SCHOOL_LABELS = {
    elemental: "Magie Élémentaire",
    nature: "Magie de la Nature",
    shadow: "Magie de l’Ombre",
    light: "Magie de la Lumière",
    spirit: "Magie des Esprits",
    arcane: "Magie Arcanique",
};
// ======================
// LISTE DE SORTS FANTASY
// ======================
export const FANTASY_SPELLS = [
    // ----- NIVEAU 0 (tricks / cantrips) -----
    {
        key: "flame-touch",
        name: "Toucher de Flamme",
        rank: 0,
        school: "elemental",
        shortDescription: "Petite flamme au bout des doigts.",
        effect: "Inflige 1d4 dégâts de feu à une créature ou un objet inflammable.",
        castingTime: "action",
        duration: "instant",
        range: "contact",
        target: "une créature ou un objet",
        classTags: ["archmage", "druid"],
    },
    {
        key: "spark-light",
        name: "Étincelle de Lumière",
        rank: 0,
        school: "light",
        shortDescription: "Crée une faible source lumineuse.",
        effect: "Éclaire une petite zone et peut servir de signal.",
        castingTime: "action",
        duration: "minutes",
        range: "9m",
        target: "un point visible",
        classTags: ["archmage", "druid", "paladin", "inquisitor"],
    },
    {
        key: "minor-ward",
        name: "Protection Mineure",
        rank: 0,
        school: "arcane",
        shortDescription: "Légère barrière magique.",
        effect: "Donne un léger bonus à la prochaine défense (à définir par le MJ).",
        castingTime: "reaction",
        duration: "rounds",
        range: "contact",
        target: "soi-même ou un allié",
        classTags: ["archmage", "paladin", "inquisitor"],
    },
    // ----- NIVEAU 1 -----
    {
        key: "healing-light",
        name: "Lueur de Soin",
        rank: 1,
        school: "light",
        shortDescription: "Canalise une énergie bienveillante.",
        effect: "Restaure une quantité modérée de points de vie (par ex. 1d8+modificateur).",
        castingTime: "action",
        duration: "instant",
        range: "contact",
        target: "une créature",
        classTags: ["druid", "paladin", "inquisitor"],
    },
    {
        key: "shadow-bind",
        name: "Lien d’Ombre",
        rank: 1,
        school: "shadow",
        shortDescription: "Les ombres entravent la cible.",
        effect: "La cible doit réussir un jet approprié ou être entravée pendant quelques rounds.",
        castingTime: "action",
        duration: "rounds",
        range: "18m",
        target: "une créature",
        classTags: ["archmage", "inquisitor"],
    },
    {
        key: "nature-grasp",
        name: "Prise de la Nature",
        rank: 1,
        school: "nature",
        shortDescription: "Lianes, racines ou herbes se referment.",
        effect: "Crée une zone difficile et peut immobiliser temporairement une cible.",
        castingTime: "action",
        duration: "rounds",
        range: "9m",
        target: "une zone ou une créature",
        classTags: ["druid", "ranger"],
    },
    // ----- NIVEAU 2 -----
    {
        key: "burning-ray",
        name: "Rayon Brûlant",
        rank: 2,
        school: "elemental",
        shortDescription: "Projette un rayon de feu concentré.",
        effect: "Inflige des dégâts de feu à distance (par ex. 2d8 feu).",
        castingTime: "action",
        duration: "instant",
        range: "18m",
        target: "une créature",
        classTags: ["archmage"],
    },
    {
        key: "lesser-ward",
        name: "Protection Renforcée",
        rank: 2,
        school: "light",
        shortDescription: "Renforce les défenses d’un allié.",
        effect: "Donne un bonus temporaire à la défense et aux jets de sauvegarde.",
        castingTime: "action",
        duration: "minutes",
        range: "contact",
        target: "une créature",
        classTags: ["paladin", "inquisitor"],
    },
    {
        key: "spirit-guide",
        name: "Guide Spirituel",
        rank: 2,
        school: "spirit",
        shortDescription: "Un esprit bienveillant conseille le lanceur.",
        effect: "Accorde un avantage narratif sur certaines décisions, recherches ou négociations.",
        castingTime: "minute",
        duration: "minutes",
        range: "soi-même",
        target: "lanceur",
        classTags: ["druid", "archmage"],
    },
    // ----- NIVEAU 3 -----
    {
        key: "spirit-heal",
        name: "Soin Spirituel",
        rank: 3,
        school: "spirit",
        shortDescription: "Les esprits restaurent la vitalité.",
        effect: "Soigne une ou plusieurs cibles de manière plus importante.",
        castingTime: "action",
        duration: "instant",
        range: "9m",
        target: "une ou plusieurs créatures",
        classTags: ["druid", "paladin"],
    },
    {
        key: "shadow-step",
        name: "Pas d’Ombre",
        rank: 3,
        school: "shadow",
        shortDescription: "Téléportation courte via les ombres.",
        effect: "Permet au lanceur de se déplacer instantanément vers une zone sombre.",
        castingTime: "bonus-action",
        duration: "instant",
        range: "9m",
        target: "soi-même",
        classTags: ["archmage", "inquisitor"],
    },
    // ----- NIVEAU 4 -----
    {
        key: "elemental-shield",
        name: "Bouclier Élémentaire",
        rank: 4,
        school: "elemental",
        shortDescription: "Protège contre un type d’élément.",
        effect: "Réduit ou divise par deux les dégâts d’un type élémentaire.",
        castingTime: "action",
        duration: "minutes",
        range: "contact",
        target: "une créature",
        classTags: ["archmage", "druid"],
    },
    // ----- NIVEAU 5 -----
    {
        key: "mass-healing-light",
        name: "Onde de Lumière Guérisseuse",
        rank: 5,
        school: "light",
        shortDescription: "Onde de soin de zone.",
        effect: "Soigne plusieurs alliés dans une large zone.",
        castingTime: "action",
        duration: "instant",
        range: "9m",
        target: "alliés dans la zone",
        classTags: ["paladin", "druid"],
    },
    // ----- NIVEAU 6 -----
    {
        key: "storm-of-embers",
        name: "Tempête de Braises",
        rank: 6,
        school: "elemental",
        shortDescription: "Déluge de feu dans une zone.",
        effect: "Inflige de lourds dégâts de feu à tous dans la zone.",
        castingTime: "action",
        duration: "rounds",
        range: "27m",
        target: "zone circulaire",
        classTags: ["archmage"],
    },
    // ----- NIVEAU 7 -----
    {
        key: "veil-of-shadows",
        name: "Voile des Ombres",
        rank: 7,
        school: "shadow",
        shortDescription: "Camoufle une zone entière.",
        effect: "Crée une zone de ténèbres magiques, très difficile à percer même magiquement.",
        castingTime: "action",
        duration: "minutes",
        range: "27m",
        target: "zone",
        classTags: ["archmage", "inquisitor"],
    },
    // ----- NIVEAU 8 -----
    {
        key: "spirit-ward",
        name: "Rempart Spirituel",
        rank: 8,
        school: "spirit",
        shortDescription: "Grande protection contre attaques physiques et magiques.",
        effect: "Réduit fortement les dégâts, confère bonus majeurs de défense pour un groupe.",
        castingTime: "minute",
        duration: "minutes",
        range: "9m",
        target: "groupe",
        classTags: ["archmage", "druid"],
    },
    // ----- NIVEAU 9 -----
    {
        key: "worldflare",
        name: "Flamboiement Mondial",
        rank: 9,
        school: "elemental",
        shortDescription: "Sort cataclysmique qui marque le monde.",
        effect: "Crée un événement magistral (tempête, explosion, rupture de réalité) avec conséquences durables.",
        castingTime: "minute",
        duration: "permanent",
        range: "ligne de vue",
        target: "vaste zone ou phénomène",
        classTags: ["archmage"],
    },
];
// Pour compat avec l’ancienne version que j’avais donnée
export const BASIC_SPELLS = FANTASY_SPELLS.filter((s) => s.rank <= 1);
// Progression simple v1 (tu pourras l’ajuster à ta sauce)
export const FANTASY_MAGIC_PROGRESSION = [
    {
        classKey: "archmage",
        casterType: "full",
        maxRank: 9,
        manaPerLevel: [0, 6, 10, 14, 18, 24, 30, 36, 42, 50, 58, 66, 74, 82, 90, 98, 110, 120, 130, 140, 150],
    },
    {
        classKey: "druid",
        casterType: "full",
        maxRank: 9,
        manaPerLevel: [0, 5, 8, 12, 16, 20, 26, 32, 38, 45, 52, 60, 68, 76, 84, 92, 100, 110, 120, 130, 140],
    },
    {
        classKey: "paladin",
        casterType: "half",
        maxRank: 5,
        manaPerLevel: [0, 0, 3, 6, 9, 12, 16, 20, 24, 28, 32, 36, 40, 45, 50, 55, 60, 65, 70, 75, 80],
    },
    {
        classKey: "inquisitor",
        casterType: "half",
        maxRank: 5,
        manaPerLevel: [0, 0, 3, 6, 9, 12, 16, 20, 24, 28, 32, 36, 40, 45, 50, 55, 60, 65, 70, 75, 80],
    },
    {
        classKey: "ranger",
        casterType: "half",
        maxRank: 4,
        manaPerLevel: [0, 0, 2, 4, 6, 8, 11, 14, 17, 20, 23, 26, 29, 32, 35, 38, 42, 46, 50, 54, 58],
    },
    {
        classKey: "monk",
        casterType: "martial",
        maxRank: 2,
        manaPerLevel: [0, 1, 2, 3, 4, 6, 8, 10, 12, 15, 18, 21, 24, 27, 30, 34, 38, 42, 46, 50, 55],
    },
    {
        classKey: "berserker",
        casterType: "martial",
        maxRank: 1,
        manaPerLevel: [0, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 20],
    },
];
// ================
// HELPERS PRATIQUES
// ================
export function getSpellsForClass(classKey, maxRank) {
    return FANTASY_SPELLS.filter((s) => {
        if (!s.classTags.includes(classKey))
            return false;
        if (typeof maxRank === "number" && s.rank > maxRank)
            return false;
        return true;
    });
}
export function getMagicProgressionForClass(classKey) {
    return FANTASY_MAGIC_PROGRESSION.find((p) => p.classKey === classKey);
}
export function getManaForLevel(classKey, level) {
    const prog = getMagicProgressionForClass(classKey);
    if (!prog)
        return null;
    if (level < 1 || level >= prog.manaPerLevel.length)
        return null;
    return prog.manaPerLevel[level];
}
