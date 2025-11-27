// SERAPHIEL — Archon Céleste Déchu (Mythic Boss)
// Boss céleste en 2 phases : Lumière Sacrée → Lumière Brisée
// ---------------------------------------------------------------------------
// SERAPHIEL — ARCHON DÉCHU DU PREMIER CANTIQUE
// ---------------------------------------------------------------------------
export const SERAPHIEL = {
    id: "seraphiel",
    name: "SERAPHIEL",
    epithet: "Archon Céleste Déchu",
    category: "celestial",
    tags: ["mythic", "celestial", "fallen", "archon"],
    biomes: [
    // auto-commented "celestial-planes",
    // auto-commented "holy-temples",
    // auto-commented "sky-fortresses",
    // auto-commented "fractured-light",
    // auto-commented "sanctums-of-light",
    ],
    summary: "Ancien Archon du Premier Cantique, Seraphiel était jadis un parangon de lumière pure. Sa chute a fragmenté son essence en deux aspects : la lumière sacrée punitive et la lumière brisée chaotique. "
    // auto-commented "Il alterne entre bénédictions, illusions lumineuses et déchaînements radiants.",
    ,
    // auto-commented "Il alterne entre bénédictions, illusions lumineuses et déchaînements radiants.",
    encounterDifficulty: "mythic",
    aiProfile: "mythic-celestial-executioner",
    mythicActions: [
        "Tempête de Lumière : début de round — inflige 4d8 radiant à toutes les créatures non-célestes dans un rayon de 12 m.",
        "Regard du Cantique : annule un sort de niveau 5 ou moins lancé dans sa ligne de vue (1/round).",
        "Chœur Brisé : les illusions de lumière gagnent 10 PV temporaires chaque round et se multiplient en cas d’attaque ratée.",
    ],
    // -----------------------------------------------------------------------
    // PHASES
    // -----------------------------------------------------------------------
    // PHASE 1 — Archon du Premier Cantique
};
// -----------------------------------------------------------------------
// PHASES
// -----------------------------------------------------------------------
// PHASE 1 — Archon du Premier Cantique
{
    key: "phase-1",
        name;
    "Archon du Premier Cantique",
        cr;
    22,
        hp;
    600,
        ac;
    24,
        role;
    "mythic-elite-controller",
        description;
    "Seraphiel irradie une lumière sacrée écrasante. Il punit les mages et soigneurs, ";
    // auto-commented "frappe de rayons convergents et déchaîne des vagues d’énergie céleste.",
    // auto-commented "Empêche le regroupement des PJ via des rayons en ligne.",
    "Utilise sa mobilité aérienne pour punir les cibles exposées.";
    phaseTriggers: [
        // auto-commented "À 0 PV pour la première fois, son corps se brise en éclats prismatiques.",
        // auto-commented "Lumière fracturée se répand dans l’arène, modifiant le terrain.",
        "Transition immédiate vers la Phase 2 : illusions actives + distorsions lumineuses.",
    ];
}
// PHASE 2 — Lumière Brisée
{
    key: "phase-2",
        name;
    "Lumière Brisée",
        cr;
    25,
        hp;
    770,
        ac;
    26,
        role;
    "mythic-controller",
        description;
    "L’essence brisée de Seraphiel explose en un torrent de lumière chaotique. ";
    // auto-commented "Il déchaîne des illusions vivantes, des fractures lumineuses et des ondes photométriques.",
    // auto-commented "Illusions pour détourner l’attention et piéger les PJ.",
    "Attire les PJ dans les zones dangereuses fracturées.";
}
;
export default SERAPHIEL;
