// @ts-nocheck
// legs.ts — Armures des jambes : pantalons, leggings, battle-wear MQ
export const MQ_LEGS = [
    //
    // ───────────────────────────────────────────
    //  COMMUNS (10)
    // ───────────────────────────────────────────
    //
    {
        key: "linen_trousers",
        label: "Pantalon de Lin",
        rarity: "common",
        armor: 1,
        weight: 1,
        value: 3,
        material: "lin",
        properties: ["light", "comfortable"],
        eras: ["ancient-age", "age-of-heroes"],
        description: "Un pantalon simple en tissu léger, porté par les voyageurs et les artisans."
    },
    {
        key: "leather_leggings",
        label: "Jambières de Cuir Souple",
        rarity: "common",
        armor: 2,
        weight: 2,
        value: 10,
        material: "cuir",
        properties: ["flexible"],
        eras: ["age-of-heroes", "dark-age"],
        description: "Des jambières en cuir tanné, offrant une protection légère sans gêner les mouvements."
    },
    {
        key: "wool_travel_pants",
        label: "Pantalon de Voyage en Laine",
        rarity: "common",
        armor: 1,
        weight: 2,
        value: 8,
        material: "laine",
        properties: ["warm"],
        eras: ["ancient-age", "dark-age"],
        description: "Un pantalon chaud pour les expéditions dans les régions froides."
    },
    {
        key: "scout_legwraps",
        label: "Bandelettes de Scout",
        rarity: "common",
        armor: 1,
        weight: 1,
        value: 5,
        material: "tissu",
        properties: ["light", "quiet"],
        eras: ["age-of-heroes"],
        description: "Des bandes de tissu serrées pour faciliter les déplacements silencieux."
    },
    {
        key: "rider_pants",
        label: "Pantalon de Cavalier",
        rarity: "common",
        armor: 2,
        weight: 2,
        value: 12,
        material: "cuir",
        properties: ["reinforced"],
        eras: ["high-kingdoms"],
        description: "Conçus pour les longues montées, ces pantalons renforcés sont appréciés des cavaliers."
    },
    {
        key: "worker_legguards",
        label: "Jambières d’Ouvrier",
        rarity: "common",
        armor: 2,
        weight: 3,
        value: 7,
        material: "cuir épais",
        properties: ["durable"],
        eras: ["dark-age"],
        description: "Des protections solides utilisées dans les mines et les forges."
    },
    {
        key: "cloth_battle_skirt",
        label: "Jupette de Combat en Tissu",
        rarity: "common",
        armor: 1,
        weight: 1,
        value: 6,
        material: "tissu renforcé",
        properties: ["light"],
        eras: ["age-of-heroes"],
        description: "Une jupe de combat légère conçue pour favoriser la mobilité."
    },
    {
        key: "hunter_legwraps",
        label: "Bandelettes de Chasseur",
        rarity: "common",
        armor: 1,
        weight: 1,
        value: 6,
        material: "tissu et corde",
        properties: ["quiet", "light"],
        eras: ["ancient-age", "age-of-heroes"],
        description: "Les chasseurs les portent pour réduire le bruit en forêt."
    },
    {
        key: "militia_padded_legs",
        label: "Jambières Matelassées de Milice",
        rarity: "common",
        armor: 2,
        weight: 3,
        value: 9,
        material: "tissu matelassé",
        properties: ["padded"],
        eras: ["dark-age"],
        description: "Une protection basique distribuée aux soldats de milice."
    },
    {
        key: "nomad_sand_leggings",
        label: "Jambières de Nomade du Désert",
        rarity: "common",
        armor: 1,
        weight: 1,
        value: 11,
        material: "tissu sec et enroulé",
        properties: ["heat-resistant"],
        eras: ["age-of-heroes"],
        description: "Des vêtements légers conçus pour éviter la brûlure du sable."
    },
    //
    // ───────────────────────────────────────────
    //  RARES (5)
    // ───────────────────────────────────────────
    //
    {
        key: "shadowstep_leggings",
        label: "Jambières du Pas-Ombre",
        rarity: "rare",
        armor: 3,
        weight: 1,
        value: 150,
        material: "tissu nocturne",
        properties: ["silent-step", "light"],
        eras: ["dark-age", "arcane-renaissance"],
        description: "Imprégnées de magie d’ombre, elles étouffent presque totalement les bruits de pas."
    },
    {
        key: "stormforged_legplates",
        label: "Plaatines Forge-Tempête",
        rarity: "rare",
        armor: 4,
        weight: 5,
        value: 220,
        material: "acier tempête",
        properties: ["thunder-resist", "reinforced"],
        eras: ["arcane-renaissance"],
        description: "Des plaques chargées d’énergie orageuse, résistantes aux chocs électriques."
    },
    {
        key: "druid_rootguards",
        label: "Garde-Racines du Druide",
        rarity: "rare",
        armor: 3,
        weight: 2,
        value: 180,
        material: "bois vivant",
        properties: ["nature-tuned", "regeneration-lite"],
        eras: ["age-of-heroes", "mythic-age"],
        description: "Des jambières faites d’écorce vivante, favorisant une légère régénération."
    },
    {
        key: "sandstrider_pants",
        label: "Pantalon Marche-Sable",
        rarity: "rare",
        armor: 3,
        weight: 1,
        value: 160,
        material: "fibre d'arène",
        properties: ["heat-resistant", "sand-walker"],
        eras: ["ancient-age", "age-of-heroes"],
        description: "Créés par les nomades mystiques, permettant de marcher plus aisément sur le sable mouvant."
    },
    {
        key: "astral_weave_pants",
        label: "Pantalon en Tissage Astral",
        rarity: "rare",
        armor: 4,
        weight: 1,
        value: 260,
        material: "étoffe astrale",
        properties: ["magic-resist", "light"],
        eras: ["mythic-age"],
        description: "Tissés dans la lueur des constellations, offrant une protection étonnante pour leur poids."
    }
];
