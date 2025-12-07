// @ts-nocheck
// ============================================================================
// MQ ENGINE — ACCESSORIES
// Anneaux, amulettes, capes, talismans, ceintures, objets légers & artefacts
// ============================================================================
export const MQ_ACCESSORIES = [
    //
    // A — RINGS
    //
    {
        key: "ring_protection",
        label: "Anneau de Protection",
        rarity: "rare",
        value: 300,
        tags: ["magic"],
        effects: ["+1 AC", "+1 jets de sauvegarde"],
        eras: ["high-kingdoms"],
        description: "Un anneau en argent gravé de runes protectrices, renforçant l’aura défensive du porteur.",
    },
    {
        key: "ring_shadowstep",
        label: "Anneau du Pas d’Ombre",
        rarity: "rare",
        value: 500,
        tags: ["magic", "stealth"],
        effects: ["Avantage aux tests de Discrétion", "Téléportation courte (1/jour)"],
        eras: ["dark-age"],
        description: "Un anneau sombre qui permet de traverser brièvement les ombres.",
    },
    {
        key: "ring_mindshield",
        label: "Anneau Parados Mental",
        rarity: "uncommon",
        value: 220,
        tags: ["psionic"],
        effects: ["Immunité à la lecture des pensées"],
        eras: ["arcane-renaissance"],
        description: "Un anneau portant une pierre bleue, protégeant l’esprit des intrusions.",
    },
    {
        key: "ring_stormborn",
        label: "Anneau Né-de-l’Orage",
        rarity: "legendary",
        value: 1500,
        tags: ["magic", "lightning"],
        effects: ["Résistance à la foudre", "Frappe électrique (1d6)"],
        eras: ["mythic-age"],
        description: "Un anneau vibrant d’énergie orageuse contrôlée.",
    },
    //
    // B — AMULETS & TALISMANS
    //
    {
        key: "amulet_health",
        label: "Amulette de Santé",
        rarity: "rare",
        value: 400,
        tags: ["magic"],
        effects: ["Constitution minimum 19"],
        eras: ["high-kingdoms"],
        description: "Une amulette ancienne renforçant la vitalité du porteur.",
    },
    {
        key: "talisman_warding",
        label: "Talisman de Protection",
        rarity: "uncommon",
        value: 150,
        tags: ["magic"],
        effects: ["Avantage contre la peur"],
        eras: ["age-of-heroes"],
        description: "Une branche gravée de symboles anciens repoussent les forces maléfiques.",
    },
    {
        key: "amulet_void",
        label: "Amulette du Vide",
        rarity: "legendary",
        value: 1200,
        tags: ["magic", "necrotic"],
        effects: ["Résistance nécrotique", "Regain 1 PV/tour dans l’ombre"],
        eras: ["dark-age", "mythic-age"],
        description: "Une pierre noire vibrante, aspirant la chaleur autour d’elle.",
    },
    //
    // C — CLOAKS & CAPES
    //
    {
        key: "cloak_elvenkind",
        label: "Cape des Elfes",
        rarity: "uncommon",
        value: 300,
        tags: ["magic", "stealth"],
        effects: ["Avantage discrétion", "Désavantage perception adverse"],
        eras: ["high-kingdoms"],
        description: "Une cape tissée dans des fibres légères, presque invisible dans les bois.",
    },
    {
        key: "cloak_protection",
        label: "Cape de Protection",
        rarity: "rare",
        value: 350,
        tags: ["magic"],
        effects: ["+1 AC", "+1 saves"],
        eras: ["high-kingdoms"],
        description: "Une cape longue et lourde, infusée d’une aura protectrice.",
    },
    {
        key: "cloak_stars",
        label: "Cape des Étoiles",
        rarity: "legendary",
        value: 1600,
        tags: ["magic", "astral"],
        effects: ["Lévitation (1/jour)", "Résistance Force"],
        eras: ["mythic-age"],
        description: "Une cape parsemée de constellations mouvantes.",
    },
    //
    // D — BELTS & SASHES
    //
    {
        key: "belt_giant_str",
        label: "Ceinture de Force du Géant",
        rarity: "rare",
        value: 600,
        tags: ["magic"],
        effects: ["Force = 21"],
        eras: ["high-kingdoms"],
        description: "Une large ceinture tressée dotée de runes de puissance ancienne.",
    },
    {
        key: "monk_sash",
        label: "Ceinture de Moine",
        rarity: "uncommon",
        value: 180,
        tags: ["monk"],
        effects: ["+1 AC si pas d’armure", "+1 dégâts unarmed"],
        eras: ["ancient-age"],
        description: "Une ceinture rituelle portée par les maîtres spirituels.",
    },
    //
    // E — TRINKETS
    //
    {
        key: "lucky_charm",
        label: "Porte-Bonheur",
        rarity: "uncommon",
        value: 100,
        tags: [],
        effects: ["Relance 1 jet par long rest"],
        eras: ["age-of-heroes"],
        description: "Un petit gri-gri porté par les aventuriers superstitieux.",
    },
    {
        key: "gnome_magnet",
        label: "Aimant Gnome",
        rarity: "common",
        value: 15,
        tags: ["tech"],
        effects: ["Attire les objets métalliques légers"],
        eras: ["arcane-renaissance"],
        description: "Un gadget inventé par les gnomes, imprévisible mais amusant.",
    },
    //
    // F — RELICS & MYTHIC ARTIFACTS
    //
    {
        key: "orb_lifebinder",
        label: "Orbe Lieuse-Vie",
        rarity: "mythic",
        value: 5000,
        tags: ["magic", "healing"],
        effects: ["Soins massifs", "Purification (1/jour)"],
        eras: ["mythic-age"],
        description: "Un artefact légendaire utilisé autrefois pour ressusciter des héros.",
    },
    {
        key: "tear_void",
        label: "Larme du Néant",
        rarity: "mythic",
        value: 7000,
        tags: ["magic", "necrotic", "cursed"],
        effects: ["Drain de vie", "Immunité terreur"],
        eras: ["dark-age"],
        description: "Une gemme sombre renfermant une fraction du Vide primordial.",
    },
];
