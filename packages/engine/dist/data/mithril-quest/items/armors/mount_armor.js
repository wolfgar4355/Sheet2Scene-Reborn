// @ts-nocheck
// mount_armor.ts — Armures de montures (chevaux, loups géants, sangliers, félins, wyverns)
export const MQ_MOUNT_ARMORS = [
    //
    // ─────────────────────────────────────────────
    //  COMMUNS (10)
    // ─────────────────────────────────────────────
    //
    {
        key: "simple_horse_barding",
        label: "Barde Simple de Cheval",
        rarity: "common",
        armor: 1,
        weight: 40,
        value: 50,
        material: "cuir",
        mount_type: "cheval",
        properties: [],
        eras: ["age-of-heroes"],
        description: "Une armorure de cuir basique offrant une protection minimale."
    },
    {
        key: "reinforced_horse_barding",
        label: "Barde Renforcée de Cheval",
        rarity: "common",
        armor: 2,
        weight: 55,
        value: 90,
        material: "cuir renforcé",
        mount_type: "cheval",
        properties: [],
        eras: ["dark-age"],
        description: "Plus solide, souvent utilisée par les patrouilles montées."
    },
    {
        key: "boar_leather_plate",
        label: "Plaque de Cuir de Sanglier",
        rarity: "common",
        armor: 2,
        weight: 30,
        value: 60,
        material: "cuir épais",
        mount_type: "sanglier",
        properties: [],
        eras: ["ancient-age"],
        description: "Protection de cuir pour les sangliers de guerre."
    },
    {
        key: "wolf_hide_guard",
        label: "Garde de Loup Géant",
        rarity: "common",
        armor: 1,
        weight: 25,
        value: 55,
        material: "peau épaisse",
        mount_type: "loup-géant",
        properties: [],
        eras: ["dark-age"],
        description: "Une protection légère adaptée aux montures rapides."
    },
    {
        key: "feline_padded_armor",
        label: "Armure Matelassée Féline",
        rarity: "common",
        armor: 1,
        weight: 20,
        value: 50,
        material: "coton matelassé",
        mount_type: "grand-félin",
        properties: ["silent-step"],
        eras: ["age-of-heroes"],
        description: "Armure légère conçue pour ne pas gêner les mouvements félins."
    },
    {
        key: "camel_desert_barding",
        label: "Barde Désertique de Chameau",
        rarity: "common",
        armor: 1,
        weight: 30,
        value: 70,
        material: "cuir respirant",
        mount_type: "chameau",
        properties: ["heat-resistant"],
        eras: ["ancient-age"],
        description: "Adaptée aux longues traversées dans les régions arides."
    },
    {
        key: "light_horse_chain",
        label: "Chaîne Légère de Cheval",
        rarity: "common",
        armor: 3,
        weight: 65,
        value: 110,
        material: "mailles",
        mount_type: "cheval",
        properties: [],
        eras: ["high-kingdoms"],
        description: "Une armure de mailles légère protégeant les zones vitales."
    },
    {
        key: "ram_wool_plate",
        label: "Plaque de Laine de Bélier",
        rarity: "common",
        armor: 1,
        weight: 35,
        value: 40,
        material: "laine renforcée",
        mount_type: "bélier",
        properties: ["cold-resistant"],
        eras: ["dark-age"],
        description: "Une armure chaude conçue pour les régions montagneuses."
    },
    {
        key: "yak_mountain_guard",
        label: "Garde de Yak Montagnard",
        rarity: "common",
        armor: 2,
        weight: 50,
        value: 70,
        material: "cuir + poils épais",
        mount_type: "yak",
        properties: ["cold-resistant"],
        eras: ["ancient-age"],
        description: "Idéale pour les climats extrêmes et les terrains escarpés."
    },
    {
        key: "elephant_hide_armor",
        label: "Armure de Peau d'Éléphant",
        rarity: "common",
        armor: 3,
        weight: 120,
        value: 150,
        material: "peau massive",
        mount_type: "éléphant",
        properties: [],
        eras: ["age-of-heroes"],
        description: "Peau épaissie offrant une excellente protection naturelle."
    },
    //
    // ─────────────────────────────────────────────
    //  RARES (5)
    // ─────────────────────────────────────────────
    //
    {
        key: "wyvern_scale_barding",
        label: "Barde d’Écailles de Wyverne",
        rarity: "rare",
        armor: 4,
        weight: 80,
        value: 600,
        material: "écailles de wyverne",
        mount_type: "wyverne",
        properties: ["magic", "poison-resistant"],
        eras: ["mythic-age"],
        description: "Forgée avec des écailles de wyverne offrant une protection exceptionnelle."
    },
    {
        key: "griffon_plume_harness",
        label: "Harnais à Plumes de Griffon",
        rarity: "rare",
        armor: 2,
        weight: 25,
        value: 450,
        material: "plumes enchantées",
        mount_type: "griffon",
        properties: ["magic", "featherlight"],
        eras: ["mythic-age"],
        description: "Léger, aérodynamique et imprégné de magie céleste."
    },
    {
        key: "spirit_elk_wardplate",
        label: "Cuirasse du Wapiti Spirituel",
        rarity: "rare",
        armor: 3,
        weight: 35,
        value: 500,
        material: "bois vivant + fibres spirituelles",
        mount_type: "wapiti spirituel",
        properties: ["magic", "warding"],
        eras: ["arcane-renaissance"],
        description: "Un équipement vivant qui renforce les barrières magiques du porteur."
    },
    {
        key: "shadow_fang_barding",
        label: "Barde du Croc-Ombre",
        rarity: "rare",
        armor: 3,
        weight: 30,
        value: 520,
        material: "ombre solidifiée",
        mount_type: "loup-ombre",
        properties: ["magic", "stealth"],
        eras: ["dark-age"],
        description: "Une protection surnaturelle qui se fond dans l'obscurité."
    },
    {
        key: "celestial_steed_armor",
        label: "Armure du Destrier Céleste",
        rarity: "rare",
        armor: 5,
        weight: 60,
        value: 800,
        material: "métal céleste",
        mount_type: "destrier céleste",
        properties: ["magic", "radiant"],
        eras: ["mythic-age"],
        description: "Forgée dans un métal sacré, brillamment radiant."
    }
];
