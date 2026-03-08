// @ts-nocheck
// gear.ts — Équipement général MQ (survie, vêtements, outils, utilitaires)
export const GEAR = [
    // ---------------------------------------------------------------------
    // 🌧️ VÊTEMENTS / HABITS ADVENTURERS
    // ---------------------------------------------------------------------
    {
        key: "traveler_cloak",
        label: "Cape de Voyageur",
        type: "gear",
        subType: "clothing",
        rarity: "common",
        value: 2,
        weight: 2,
        properties: ["weather-resist"],
        eras: ["ancient-age", "age-of-heroes", "high-kingdoms"],
        description: "Une cape robuste protégeant de la pluie et du vent, portée par la plupart des voyageurs."
    },
    {
        key: "padded_boots",
        label: "Bottes Matelassées",
        type: "gear",
        subType: "clothing",
        rarity: "common",
        value: 1,
        weight: 1,
        properties: ["comfort"],
        eras: ["age-of-heroes"],
        description: "Des bottes simples mais confortables pour de longues marches."
    },
    {
        key: "weathered_hat",
        label: "Chapeau Battu par les Vents",
        type: "gear",
        subType: "clothing",
        rarity: "common",
        value: 1,
        weight: 1,
        properties: ["sun-shield"],
        eras: ["age-of-heroes", "high-kingdoms"],
        description: "Large et déformé, idéal pour les climats ensoleillés ou pluvieux."
    },
    // ---------------------------------------------------------------------
    // 🧭 AVENTURIERS — Packs & utilitaires
    // ---------------------------------------------------------------------
    {
        key: "adventurer_pack",
        label: "Pack de l’Aventurier",
        type: "gear",
        subType: "adventurer",
        rarity: "common",
        value: 10,
        weight: 18,
        properties: ["all-in-one"],
        eras: ["high-kingdoms"],
        description: "Un ensemble comprenant des rations, une corde, une lanterne, une couverture et une gourde."
    },
    {
        key: "scout_pack",
        label: "Pack d’Éclaireur",
        type: "gear",
        subType: "adventurer",
        rarity: "common",
        value: 12,
        weight: 12,
        properties: ["lightweight"],
        eras: ["age-of-heroes"],
        description: "Contient du matériel léger : jumelles, cartes, craie et rations sèches."
    },
    {
        key: "survival_kit",
        label: "Trousse de Survie",
        type: "gear",
        subType: "adventurer",
        rarity: "common",
        value: 15,
        weight: 4,
        properties: ["firestarter", "medic-basic"],
        eras: ["ancient-age", "high-kingdoms"],
        description: "Comprend silex, aiguilles, fil, herbes simples et outils de base."
    },
    // ---------------------------------------------------------------------
    // 🔧 OUTILS / UTILITAIRES
    // ---------------------------------------------------------------------
    {
        key: "rope_50ft",
        label: "Corde 50 pieds",
        type: "gear",
        subType: "utility",
        rarity: "common",
        value: 1,
        weight: 10,
        properties: ["climb", "tie"],
        eras: ["ancient-age", "age-of-heroes"],
        description: "Une corde solide de 50 pieds, utile dans presque toutes les situations."
    },
    {
        key: "iron_spikes",
        label: "Pointes de Fer (10)",
        type: "gear",
        subType: "utility",
        rarity: "common",
        value: 1,
        weight: 5,
        properties: ["terrain-anchor"],
        eras: ["dark-age"],
        description: "Utilisées pour stabiliser des cordes, bloquer des portes ou escalader."
    },
    {
        key: "toolbox_basic",
        label: "Boîte à Outils Basique",
        type: "gear",
        subType: "utility",
        rarity: "common",
        value: 5,
        weight: 8,
        properties: ["repair-basic"],
        eras: ["arcane-renaissance"],
        description: "Contient clés, marteau, clous, limes et outils de réparation simples."
    },
    {
        key: "healer_tools",
        label: "Trousse de Guérisseur",
        type: "gear",
        subType: "utility",
        rarity: "common",
        value: 8,
        weight: 3,
        properties: ["medic"],
        eras: ["age-of-heroes"],
        description: "Bandages, aiguilles, herbes coagulantes et compresses."
    },
    // ---------------------------------------------------------------------
    // 📜 MYSTIC GEAR (Utilitaires magiques low-tier)
    // ---------------------------------------------------------------------
    {
        key: "minor_focus_orb",
        label: "Orbe de Focalisation Mineur",
        type: "gear",
        subType: "mystic",
        rarity: "uncommon",
        value: 25,
        weight: 1,
        properties: ["spell-focus"],
        eras: ["arcane-renaissance"],
        description: "Un petit cristal amplifiant légèrement les sorts mineurs."
    },
    {
        key: "ether_lantern",
        label: "Lanterne Éthérique",
        type: "gear",
        subType: "mystic",
        rarity: "uncommon",
        value: 40,
        weight: 3,
        properties: ["magic", "ghost-vision"],
        eras: ["dark-age"],
        description: "Une lanterne révélant la présence d’esprits et d’énergies arcaniques."
    },
    {
        key: "ritual_chalk",
        label: "Craie Rituelle",
        type: "gear",
        subType: "mystic",
        rarity: "uncommon",
        value: 10,
        weight: 1,
        properties: ["ritual"],
        eras: ["ancient-age"],
        description: "Utilisée pour tracer cercles runiques et glyphes d’invocation."
    },
    // ---------------------------------------------------------------------
    // 🎭 CÉRÉMONIAL / CULTUREL
    // ---------------------------------------------------------------------
    {
        key: "ceremonial_robes",
        label: "Robe Cérémoniale",
        type: "gear",
        subType: "ceremonial",
        rarity: "common",
        value: 6,
        weight: 3,
        properties: ["cleanse"],
        eras: ["high-kingdoms"],
        description: "Des robes portées lors de rites religieux ou spirituels."
    },
    {
        key: "ancestor_mask",
        label: "Masque Ancêtre",
        type: "gear",
        subType: "ceremonial",
        rarity: "uncommon",
        value: 30,
        weight: 2,
        properties: ["spirit-link"],
        eras: ["ancient-age"],
        description: "Un masque sacré utilisé lors de danses ancestrales."
    },
    {
        key: "war_drums",
        label: "Tambours de Guerre",
        type: "gear",
        subType: "ceremonial",
        rarity: "rare",
        value: 120,
        weight: 8,
        properties: ["battle-boost"],
        eras: ["age-of-heroes"],
        description: "Des tambours puissants utilisés pour galvaniser les troupes."
    },
];
