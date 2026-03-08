// @ts-nocheck
// rituals/sources/ritual_divine.ts — Rituels divins du système Mithril-Quest
export const RITUAL_DIVINE = [
    {
        id: "sanctify_ground",
        label: "Sanctification d’un Lieu",
        school: "divine",
        level: 4,
        castTime: "2 heures",
        ingredients: ["encens sacré", "eau bénite", "symbole divin"],
        description: `
Purifie une zone sacrée, repousse les morts-vivants et annule les malédictions mineures.
    `,
    },
    {
        id: "blessing_host",
        label: "Bénédiction des Fidèles",
        school: "divine",
        level: 3,
        castTime: "1 heure",
        ingredients: ["huile sacrée", "chapelet", "icône"],
        description: `
Octroie une protection divine temporaire à un groupe de fidèles.
    `,
    },
    {
        id: "seal_evil",
        label: "Sceau Anti-Mal",
        school: "divine",
        level: 3,
        castTime: "3 heures",
        ingredients: ["poudre d’argent", "eau bénite", "symbole gravé"],
        description: `
Empêche les démons et esprits maléfiques d’entrer dans un périmètre choisi.
    `,
    },
    {
        id: "commune_spirit",
        label: "Communion Divine",
        school: "divine",
        level: 7,
        castTime: "6 heures",
        ingredients: ["autel", "offrande", "encens fin"],
        description: `
Permet de poser trois questions directes à une divinité ou avatar.
    `,
    },
    {
        id: "resurrect_soft",
        label: "Retour Paisible",
        school: "divine",
        level: 8,
        castTime: "6 heures",
        ingredients: ["fleur blanche", "anneau d’or", "sang du prêtre"],
        description: `
Ramène une âme récemment décédée dans son corps si la mort n’était pas violente.
    `,
    },
    {
        id: "banish_darkness",
        label: "Radiance Aveuglante",
        school: "divine",
        level: 5,
        castTime: "2 heures",
        ingredients: ["poudre lumineuse", "torche sacrée"],
        description: `
Dissipe les ténèbres surnaturelles et les illusions d’origine démoniaque.
    `,
    },
    {
        id: "vow_binding",
        label: "Vœu Solennel",
        school: "divine",
        level: 4,
        castTime: "1 heure",
        ingredients: ["ruban de chanvre béni"],
        description: `
Scelle une promesse sacrée : rompre le serment entraîne un contrecoup divin.
    `,
    },
    {
        id: "guardian_call",
        label: "Appel du Gardien",
        school: "divine",
        level: 9,
        castTime: "1 nuit",
        ingredients: ["cloche sacrée", "statue de protecteur"],
        description: `
Invoque un esprit protecteur majeur qui patrouille une zone pendant un jour.
    `,
    },
];
