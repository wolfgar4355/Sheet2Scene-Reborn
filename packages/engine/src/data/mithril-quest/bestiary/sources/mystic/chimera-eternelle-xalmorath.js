// @ts-nocheck
// ---------------------------------------------------------------------------
// XAL’MORATH — CHIMÈRE ÉTERNELLE
// ---------------------------------------------------------------------------
export const XALMORATH = {
    id: "xalmorath",
    name: "XAL'MORATH",
    epithet: "Chimère Éternelle",
    category: "monstrosity",
    tags: ["mythic", "chimera", "beast-fusion", "aberrant"],
    biomes: [
        "badlands",
        "desert",
        "ancient-labs",
        "forbidden-ruins",
        "chaos-zones",
        "unstable-lands"
    ],
    summary: "Créature expérimentale née d’une fusion bestiale impossible, Xal’morath mute " +
        "continuellement et change de forme selon les lois du chaos organique. " +
        "Il passe d’un état primitif brutal à une forme instable imprévisible capable " +
        "de déformer la réalité autour d’elle.",
    encounterDifficulty: "mythic",
    aiProfile: "feral-chaos-behemoth",
    mythicActions: [
        "Mutation Instable (début de round) : gagne une mutation aléatoire parmi 8 options.",
        "Déferlement Chaotique : rallonge de 3 m toutes ses zones organiques ce round.",
        "Détonation Viscérale : en mourant dans une phase, explose en 6d10 nécrotique + infection."
    ],
    // -----------------------------------------------------------------------
    // PHASES
    // -----------------------------------------------------------------------
    phases: [
        // PHASE 1 — Chimère Primordiale Indomptée
        {
            key: "phase-1",
            name: "Chimère Primordiale Indomptée",
            cr: 21,
            hp: 640,
            ac: 23,
            role: "mythic-brute",
            description: "Xal’morath bondit, mord, frappe, percute et souffle des toxines primordiales. " +
                "Il fonce sur la proie la plus faible et déchaîne un chaos bestial incontrôlé.",
            tactics: [
                "Bondit sur la cible la plus faible.",
                "Alterne morsure + souffle pour maintenir pression.",
                "Utilise les mutations pour combler les distances."
            ],
            abilities: [
                "Rugissement du Lion Primordial — étourdit 1 round.",
                "Croc Abo-Sphinx — poison mythique + venin aléatoire.",
                "Souffle Tri-Élémentaire — feu/éclair/acide aléatoire, recharge 5–6.",
                "Ailes d'Aigle Titanique — rafale de vent, repousse 12 m.",
                "Mutation Spontanée — gagne un effet aléatoire chaque round."
            ],
            phaseTriggers: [
                "À 0 PV pour la première fois, son corps implose et libère une vague mutagène.",
                "Le sol devient instable : zones organiques mouvantes.",
                "La Forme Instable Suprême émerge."
            ]
        },
        // PHASE 2 — Forme Instable Suprême
        {
            key: "phase-2",
            name: "Forme Instable Suprême",
            cr: 24,
            hp: 780,
            ac: 24,
            role: "mythic-brute-controller",
            description: "La mutation chaotique s’emballe : Xal’morath devient une abomination instable " +
                "capable de corrompre la réalité, altérer le terrain et projeter des éclats de chair mutante.",
            tactics: [
                "Contrôle de zone par altérations chaotiques.",
                "Mutations continues pour modifier ses résistances.",
                "Projette des éclats et piège les PJ dans les zones infectées."
            ],
            abilities: [
                "Corruption Chaotique — zone 6 m, inflige effets aléatoires.",
                "Explosion Mutagène — éclats organiques explosifs.",
                "Cyclone Chimérique — éjecte 3 cibles (jet de force).",
                "Régénération Abominable — 30 PV/round.",
                "Mutation Ultime — change son type d’attaque (feu, foudre, acide, nécrotique, radiant)."
            ],
            phaseTriggers: [
                "Si un PJ détruit une zone organique, une nouvelle mutation majeure apparaît.",
                "À 100 PV restants : instabilité totale → mutation en chaîne."
            ]
        }
    ],
    // -----------------------------------------------------------------------
    // LOOT
    // -----------------------------------------------------------------------
    loot: [
        "Échine de Chimère",
        "Œil Mutagène",
        "Crocs Primordiaux",
        "Peau d’Essence Bestiale",
        "Fragment d’Abomination",
        "Rune de Fusion Primordiale",
        "Essence Chimérique Pure"
    ]
};
export default XALMORATH;
