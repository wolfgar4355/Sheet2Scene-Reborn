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
    // auto-commented "badlands",
    // auto-commented "desert",
    // auto-commented "ancient-labs",
    // auto-commented "forbidden-ruins",
    // auto-commented "chaos-zones",
    // auto-commented "unstable-lands",
    ],
    summary: "Créature expérimentale née d’une fusion bestiale impossible, Xal’morath mute continuellement et change de forme selon les lois du chaos organique. Il passe d’un état primitif brutal à une forme instable imprévisible capable "
    // auto-commented "de déformer la réalité autour d’elle.",
    ,
    // auto-commented "de déformer la réalité autour d’elle.",
    encounterDifficulty: "mythic",
    aiProfile: "feral-chaos-behemoth",
    mythicActions: [
        "Mutation Instable (début de round) : gagne une mutation aléatoire parmi 8 options.",
        "Déferlement Chaotique : rallonge de 3 m toutes ses zones organiques ce round.",
        "Détonation Viscérale : en mourant dans une phase, explose en 6d10 nécrotique + infection.",
    ],
    // -----------------------------------------------------------------------
    // PHASES
    // -----------------------------------------------------------------------
    // PHASE 1 — Chimère Primordiale Indomptée
};
// -----------------------------------------------------------------------
// PHASES
// -----------------------------------------------------------------------
// PHASE 1 — Chimère Primordiale Indomptée
{
    key: "phase-1",
        name;
    "Chimère Primordiale Indomptée",
        cr;
    21,
        hp;
    640,
        ac;
    23,
        role;
    "mythic-brute",
        description;
    "Xal’morath bondit, mord, frappe, percute et souffle des toxines primordiales. ";
    // auto-commented "Il fonce sur la proie la plus faible et déchaîne un chaos bestial incontrôlé.",
    // auto-commented "Alterne morsure + souffle pour maintenir pression.",
    "Utilise les mutations pour combler les distances.";
    phaseTriggers: [
        // auto-commented "À 0 PV pour la première fois, son corps implose et libère une vague mutagène.",
        "Le sol devient instable : zones organiques mouvantes.",
        // auto-commented "La Forme Instable Suprême émerge.",
    ];
}
// PHASE 2 — Forme Instable Suprême
{
    key: "phase-2",
        name;
    "Forme Instable Suprême",
        cr;
    24,
        hp;
    780,
        ac;
    24,
        role;
    "mythic-brute-controller",
        description;
    "La mutation chaotique s’emballe : Xal’morath devient une abomination instable ";
    // auto-commented "capable de corrompre la réalité, altérer le terrain et projeter des éclats de chair mutante.",
    // auto-commented "Mutations continues pour modifier ses résistances.",
    "Projette des éclats et piège les PJ dans les zones infectées.";
    // auto-commented "Si un PJ détruit une zone organique, une nouvelle mutation majeure apparaît.",
    "À 100 PV restants : instabilité totale → mutation en chaîne.",
    ;
}
;
export default XALMORATH;
