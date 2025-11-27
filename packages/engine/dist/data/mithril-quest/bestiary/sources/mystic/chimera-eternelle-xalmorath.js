// XAL’MORATH — Chimère Éternelle (Mythic Boss)
// Fusion instable de bêtes primordiales, mutation continue, chaos organique.
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
    // NOTE (fix-fantasy v2 auto-commented): "badlands",
    // NOTE (fix-fantasy v2 auto-commented): "desert",
    // NOTE (fix-fantasy v2 auto-commented): "ancient-labs",
    // NOTE (fix-fantasy v2 auto-commented): "forbidden-ruins",
    // NOTE (fix-fantasy v2 auto-commented): "chaos-zones",
    // NOTE (fix-fantasy v2 auto-commented): "unstable-lands"
    ],
    summary: "Créature expérimentale née d’une fusion bestiale impossible, Xal’morath mute " +
        "continuellement et change de forme selon les lois du chaos organique. " +
        "Il passe d’un état primitif brutal à une forme instable imprévisible capable " +
        // NOTE (fix-fantasy v2 auto-commented): "de déformer la réalité autour d’elle.",
        encounterDifficulty, "mythic": ,
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
                // NOTE (fix-fantasy v2 auto-commented): "Il fonce sur la proie la plus faible et déchaîne un chaos bestial incontrôlé.",
                tactics
        }, { prefersAmbush: true }, // NOTE: anciennement tactics: ["Bondit sur la cible la plus faible.",
        // NOTE (fix-fantasy v2 auto-commented): "Alterne morsure + souffle pour maintenir pression.",
        "Utilise les mutations pour combler les distances."
    ],
    abilities: [
    // NOTE (fix-fantasy v2 auto-commented): "Rugissement du Lion Primordial — étourdit 1 round.",
    // NOTE (fix-fantasy v2 auto-commented): "Croc Abo-Sphinx — poison mythique + venin aléatoire.",
    // NOTE (fix-fantasy v2 auto-commented): "Souffle Tri-Élémentaire — feu/éclair/acide aléatoire, recharge 5–6.",
    // NOTE (fix-fantasy v2 auto-commented): "Ailes d'Aigle Titanique — rafale de vent, repousse 12 m.",
    // NOTE (fix-fantasy v2 auto-commented): "Mutation Spontanée — gagne un effet aléatoire chaque round."
    ],
    phaseTriggers: [
        // NOTE (fix-fantasy v2 auto-commented): "À 0 PV pour la première fois, son corps implose et libère une vague mutagène.",
        "Le sol devient instable : zones organiques mouvantes.",
        // NOTE (fix-fantasy v2 auto-commented): "La Forme Instable Suprême émerge."
    ]
}, 
// PHASE 2 — Forme Instable Suprême
{ key: , "phase-2": , name: , "Forme Instable Suprême": , cr: , 24: , hp: , 780: , ac: , 24: , role: , "mythic-brute-controller": , description: , "La mutation chaotique s’emballe : Xal’morath devient une abomination instable ":  };
+
// NOTE (fix-fantasy v2 auto-commented): "capable de corrompre la réalité, altérer le terrain et projeter des éclats de chair mutante.",
tactics;
{
    prefersAmbush: true;
}
// NOTE (fix-fantasy v2 auto-commented): "Mutations continues pour modifier ses résistances.",
"Projette des éclats et piège les PJ dans les zones infectées.";
abilities: [
// NOTE (fix-fantasy v2 auto-commented): "Corruption Chaotique — zone 6 m, inflige effets aléatoires.",
// NOTE (fix-fantasy v2 auto-commented): "Explosion Mutagène — éclats organiques explosifs.",
// NOTE (fix-fantasy v2 auto-commented): "Cyclone Chimérique — éjecte 3 cibles (jet de force).",
// NOTE (fix-fantasy v2 auto-commented): "Régénération Abominable — 30 PV/round.",
// NOTE (fix-fantasy v2 auto-commented): "Mutation Ultime — change son type d’attaque (feu, foudre, acide, nécrotique, radiant)."
],
    phaseTriggers;
[
    // NOTE (fix-fantasy v2 auto-commented): "Si un PJ détruit une zone organique, une nouvelle mutation majeure apparaît.",
    "À 100 PV restants : instabilité totale → mutation en chaîne."
];
// -----------------------------------------------------------------------
// LOOT
// -----------------------------------------------------------------------
loot: [
// NOTE (fix-fantasy v2 auto-commented): "Échine de Chimère",
// NOTE (fix-fantasy v2 auto-commented): "Œil Mutagène",
// NOTE (fix-fantasy v2 auto-commented): "Crocs Primordiaux",
// NOTE (fix-fantasy v2 auto-commented): "Peau d’Essence Bestiale",
// NOTE (fix-fantasy v2 auto-commented): "Fragment d’Abomination",
// NOTE (fix-fantasy v2 auto-commented): "Rune de Fusion Primordiale",
// NOTE (fix-fantasy v2 auto-commented): "Essence Chimérique Pure"
];
;
export default XALMORATH;
