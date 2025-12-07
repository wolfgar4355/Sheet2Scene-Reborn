// @ts-nocheck
// ============================================================================
// ⚙️ RACES — CONSTRUCTS (Forgelings, Automatas, Vivicréatures)
// ============================================================================
//
// Les Constructs sont des êtres façonnés par la forge, la magie ou l’alchimie.
// Ils peuvent être forgés de métal, de pierre, d’essence élémentaire ou d’âme
// condensée. Jouables et entièrement compatibles MQ.
//
// ============================================================================
export const MQ_RACES_CONSTRUCTS = [
    {
        key: "forgeborn",
        label: "Forgeborn",
        description: "Créatures forgées dans la braise et le métal. Leur cœur abrite une braise éternelle.",
        traits: [
            "Corps métallique résistant",
            "Vision dans la fumée",
            "Immunité au poison",
            "Bénédiction de la forge"
        ]
    },
    {
        key: "golemkin",
        label: "Golemkin",
        description: "Êtres animés par une magie runique ancienne. Ils sont composés de pierre, d’argile, de cristal ou de métal.",
        traits: [
            "Peau runique",
            "Résistance physique élevée",
            "Pas besoin de respirer",
            "Présence imposante"
        ]
    },
    {
        key: "vivicraft",
        label: "Vivicraft",
        description: "Constructs alchimiques créés à partir de chair régénérée et de magie vitale. À mi-chemin entre vivant et artificiel.",
        traits: [
            "Régénération lente",
            "Immunité aux maladies",
            "Stabilité corporelle",
            "Affinité alchimique"
        ]
    },
    {
        key: "etherframe",
        label: "Etherframe",
        description: "Esprits errants enfermé dans une enveloppe d’âme cristallisée. Semi-intangibles et sensibles aux flux arcaniques.",
        traits: [
            "Corps éthéré partiel",
            "Perception astrale",
            "Lévitation mineure",
            "Vulnérabilité aux décharges magiques"
        ]
    },
    {
        key: "clockwinder",
        label: "Clockwinder",
        description: "Automates conscients animés par un noyau mécanique. Leur esprit est précis, méthodique et logique.",
        traits: [
            "Précision mécanique",
            "Résistance au froid",
            "Mode analyse",
            "Entretien obligatoire"
        ]
    }
];
