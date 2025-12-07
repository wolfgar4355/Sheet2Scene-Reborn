// @ts-nocheck
// surcoats.ts — Surcots, manteaux héraldiques, tabliers renforcés et versions enchantées (MQ)
export const MQ_SURCOATS = [
    //
    // ─────────────────────────────────────────────
    //  COMMUNS (10)
    // ─────────────────────────────────────────────
    //
    {
        key: "simple_surcoat",
        label: "Surcot Simple",
        rarity: "common",
        armor: 0,
        weight: 1,
        value: 6,
        material: "lin épais",
        properties: [],
        eras: ["age-of-heroes"],
        description: "Un surcot basique porté pour protéger les vêtements ou décorer une armure."
    },
    {
        key: "leather_surcoat",
        label: "Surcot de Cuir Souple",
        rarity: "common",
        armor: 1,
        weight: 2,
        value: 12,
        material: "cuir fin",
        properties: [],
        eras: ["dark-age"],
        description: "Un surcot légèrement renforcé, donnant une protection minimale."
    },
    {
        key: "scout_surcoat",
        label: "Surcot d’Éclaireur",
        rarity: "common",
        armor: 0,
        weight: 1,
        value: 10,
        material: "tissu camouflé",
        properties: ["stealth"],
        eras: ["age-of-heroes"],
        description: "Conçu pour les patrouilles discrètes dans les forêts et les broussailles."
    },
    {
        key: "winter_surcoat",
        label: "Surcot d’Hiver",
        rarity: "common",
        armor: 0,
        weight: 1,
        value: 14,
        material: "laine épaisse",
        properties: ["cold-resistant"],
        eras: ["dark-age"],
        description: "Un surcot chaud, utilisé par les soldats des régions nordiques."
    },
    {
        key: "summer_surcoat",
        label: "Surcot d’Été",
        rarity: "common",
        armor: 0,
        weight: 1,
        value: 7,
        material: "lin léger",
        properties: ["heat-resistant"],
        eras: ["ancient-age"],
        description: "Idéal pour les climats chauds et les longues marches au soleil."
    },
    {
        key: "merchant_surcoat",
        label: "Surcot de Marchand",
        rarity: "common",
        armor: 0,
        weight: 1,
        value: 12,
        material: "tissu brodé",
        properties: [],
        eras: ["high-kingdoms"],
        description: "Arboré par les guildes marchandes de haut rang."
    },
    {
        key: "military_surcoat",
        label: "Surcot Militaire",
        rarity: "common",
        armor: 1,
        weight: 2,
        value: 16,
        material: "tissu + cuir",
        properties: [],
        eras: ["dark-age"],
        description: "Porté par-dessus les plates ou les mailles, absorbe la saleté et les impacts mineurs."
    },
    {
        key: "coastal_surcoat",
        label: "Surcot Côtier",
        rarity: "common",
        armor: 0,
        weight: 1,
        value: 9,
        material: "tissu résistant au sel",
        properties: ["salt-resistant"],
        eras: ["age-of-heroes"],
        description: "Adapté aux régions maritimes et aux embruns corrosifs."
    },
    {
        key: "monastic_surcoat",
        label: "Surcot Monastique",
        rarity: "common",
        armor: 0,
        weight: 1,
        value: 8,
        material: "tissu sacré",
        properties: [],
        eras: ["high-kingdoms"],
        description: "Porté par les moines-guerriers de petits ordres religieux."
    },
    {
        key: "guard_surcoat",
        label: "Surcot de Garde",
        rarity: "common",
        armor: 1,
        weight: 2,
        value: 15,
        material: "coton renforcé",
        properties: [],
        eras: ["dark-age"],
        description: "Uniforme simple des gardes de villes et châteaux."
    },
    //
    // ─────────────────────────────────────────────
    //  RARES (5)
    // ─────────────────────────────────────────────
    //
    {
        key: "runic_surcoat",
        label: "Surcot Runique",
        rarity: "rare",
        armor: 1,
        weight: 1,
        value: 180,
        material: "tissu enchanté",
        properties: ["magic"],
        eras: ["high-kingdoms"],
        description: "Des runes lumineuses renforcent la protection contre les attaques magiques."
    },
    {
        key: "shadow_surcoat",
        label: "Surcot de l’Ombre",
        rarity: "rare",
        armor: 1,
        weight: 0.5,
        value: 240,
        material: "tissu d’ombre",
        properties: ["magic", "stealth"],
        eras: ["dark-age"],
        description: "L’étoffe semble absorber la lumière, renforçant la furtivité du porteur."
    },
    {
        key: "celestial_surcoat",
        label: "Surcot Céleste",
        rarity: "rare",
        armor: 2,
        weight: 1,
        value: 320,
        material: "tissu radiant",
        properties: ["magic", "radiant"],
        eras: ["mythic-age"],
        description: "Bénit par une entité céleste, ce surcot manifeste une faible aura protectrice."
    },
    {
        key: "warden_surcoat",
        label: "Surcot du Gardien",
        rarity: "rare",
        armor: 2,
        weight: 2,
        value: 260,
        material: "tissu cuirassé",
        properties: ["magic", "warding"],
        eras: ["high-kingdoms"],
        description: "Utilisé par les protecteurs des temples et sanctuaires."
    },
    {
        key: "phoenix_surcoat",
        label: "Surcot du Phénix",
        rarity: "rare",
        armor: 2,
        weight: 1,
        value: 350,
        material: "tissu ignifuge",
        properties: ["magic", "fire-resistant"],
        eras: ["mythic-age"],
        description: "Résistant au feu, fréquemment porté par les mages flamboyants."
    }
];
