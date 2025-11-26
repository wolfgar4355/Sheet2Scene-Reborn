// armors.ts — Armures légères, intermédiaires, lourdes, magiques & mythiques
export const ARMORS = [
    //
    // ──────────────────────────────────────────
    //  A — LIGHT ARMOR (Armures légères)
    // ──────────────────────────────────────────
    //
    {
        key: "padded",
        label: "Armure Matelassée",
        ac_base: 11,
        dex_cap: "max",
        type: "light",
        rarity: "common",
        value: 5,
        weight: 8,
        stealth_disadvantage: true,
        eras: ["ancient-age", "age-of-heroes"],
        description: "Une armure de tissu épais offrant une faible protection mais facilement accessible."
    },
    {
        key: "leather",
        label: "Armure de Cuir",
        ac_base: 11,
        dex_cap: "max",
        type: "light",
        rarity: "common",
        value: 10,
        weight: 10,
        eras: ["ancient-age", "age-of-heroes", "dark-age", "high-kingdoms"],
        description: "Du cuir tanné renforcé protégeant légèrement tout en restant très maniable."
    },
    {
        key: "studded_leather",
        label: "Cuir Clouté",
        ac_base: 12,
        dex_cap: "max",
        type: "light",
        rarity: "uncommon",
        value: 45,
        weight: 13,
        eras: ["high-kingdoms"],
        description: "Une armure en cuir renforcée de clous métalliques pour une meilleure protection."
    },
    {
        key: "shadowweave",
        label: "Tissage d’Ombre",
        ac_base: 12,
        dex_cap: "max",
        type: "light",
        rarity: "rare",
        value: 350,
        weight: 8,
        properties: ["magic"],
        eras: ["dark-age"],
        description: "Une armure malléable faite de fils d’ombre, parfaite pour les assassins et rôdeurs nocturnes."
    },
    {
        key: "celestial_silks",
        label: "Soieries Célestes",
        ac_base: 13,
        dex_cap: "max",
        type: "light",
        rarity: "mythic",
        value: 2500,
        weight: 5,
        properties: ["magic", "radiant"],
        eras: ["mythic-age"],
        description: "Un vêtement magique tissé dans la lumière pure, procurant une défense incroyable sans gêner les mouvements."
    },
    //
    // ──────────────────────────────────────────
    //  B — MEDIUM ARMOR (Armures intermédiaires)
    // ──────────────────────────────────────────
    //
    {
        key: "hide_armor",
        label: "Armure de Peaux",
        ac_base: 12,
        dex_cap: 2,
        type: "medium",
        rarity: "common",
        value: 10,
        weight: 12,
        eras: ["ancient-age"],
        description: "Un assemblage de peaux épaisses fournissant une protection rudimentaire."
    },
    {
        key: "chain_shirt",
        label: "Chemise de Mailles",
        ac_base: 13,
        dex_cap: 2,
        type: "medium",
        rarity: "common",
        value: 50,
        weight: 20,
        eras: ["dark-age", "high-kingdoms"],
        description: "Une chemise métallique offrant une bonne protection contre les coups tranchants."
    },
    {
        key: "scale_mail",
        label: "Armure Écaille",
        ac_base: 14,
        dex_cap: 2,
        type: "medium",
        rarity: "uncommon",
        stealth_disadvantage: true,
        value: 50,
        weight: 45,
        eras: ["high-kingdoms"],
        description: "Des plaques en forme d’écailles superposées, fournissant une solide défense."
    },
    {
        key: "half_plate",
        label: "Demi-Plate",
        ac_base: 15,
        dex_cap: 2,
        type: "medium",
        rarity: "rare",
        value: 750,
        weight: 40,
        stealth_disadvantage: true,
        eras: ["high-kingdoms", "arcane-renaissance"],
        description: "Une armure métallisée partielle, offrant une excellente protection tout en gardant une certaine flexibilité."
    },
    {
        key: "druidic_barkmail",
        label: "Cuirasse Écorce-Druide",
        ac_base: 14,
        dex_cap: 2,
        type: "medium",
        rarity: "rare",
        value: 500,
        weight: 14,
        properties: ["magic"],
        eras: ["age-of-heroes"],
        description: "Une armure vivante faite d’écorce renforcée, vibrante d’énergie naturelle."
    },
    //
    // ──────────────────────────────────────────
    //  C — HEAVY ARMOR (Armures lourdes)
    // ──────────────────────────────────────────
    //
    {
        key: "ring_mail",
        label: "Armure Anneaux",
        ac_base: 14,
        dex_cap: 0,
        type: "heavy",
        rarity: "common",
        value: 30,
        weight: 40,
        stealth_disadvantage: true,
        eras: ["dark-age"],
        description: "Un tissu renforcé d’anneaux métalliques offrant une protection correcte."
    },
    {
        key: "chain_mail",
        label: "Armure de Mailles",
        ac_base: 16,
        dex_cap: 0,
        strength_req: 13,
        type: "heavy",
        rarity: "common",
        value: 75,
        weight: 55,
        stealth_disadvantage: true,
        eras: ["high-kingdoms"],
        description: "Une armure complète en anneaux entrelacés, très résistante."
    },
    {
        key: "splint",
        label: "Éclisses",
        ac_base: 17,
        dex_cap: 0,
        strength_req: 15,
        type: "heavy",
        rarity: "uncommon",
        value: 200,
        weight: 60,
        stealth_disadvantage: true,
        eras: ["high-kingdoms"],
        description: "Des plaques métalliques renforcées montées sur un support en cuir."
    },
    {
        key: "plate",
        label: "Armure de Plates",
        ac_base: 18,
        dex_cap: 0,
        strength_req: 15,
        type: "heavy",
        rarity: "rare",
        value: 1500,
        weight: 65,
        stealth_disadvantage: true,
        eras: ["high-kingdoms"],
        description: "La meilleure protection physique disponible, une armure intégrale sans faille."
    },
    {
        key: "titan_plate",
        label: "Plates des Titans",
        ac_base: 19,
        dex_cap: 0,
        strength_req: 17,
        type: "heavy",
        rarity: "mythic",
        value: 6000,
        weight: 70,
        stealth_disadvantage: true,
        properties: ["magic"],
        eras: ["mythic-age"],
        description: "Une armure colossale forgée dans un métal ancien, offrant une défense quasi impénétrable."
    },
    //
    // ──────────────────────────────────────────
    //  D — MAGICAL / LEGENDARY ARMOR SETS
    // ──────────────────────────────────────────
    //
    {
        key: "dragon_scale_armor",
        label: "Armure en Écailles de Dragon",
        ac_base: 17,
        dex_cap: 2,
        type: "medium",
        rarity: "legendary",
        value: 5000,
        weight: 40,
        properties: ["magic", "element-resist"],
        eras: ["mythic-age"],
        description: "Forgée à partir d’écailles d’un dragon ancien, elle confère protection et résistance élémentaire."
    },
    {
        key: "celestial_armor",
        label: "Armure Céleste",
        ac_base: 18,
        dex_cap: "max",
        type: "light",
        rarity: "mythic",
        value: 8000,
        weight: 20,
        properties: ["magic", "radiant"],
        eras: ["mythic-age"],
        description: "Une armure légère faite de lumière cristallisée, flottant légèrement autour du porteur."
    },
    {
        key: "abyssal_carapace",
        label: "Carapace Abyssale",
        ac_base: 19,
        dex_cap: 0,
        type: "heavy",
        rarity: "mythic",
        value: 9000,
        weight: 70,
        properties: ["magic", "cursed"],
        eras: ["dark-age"],
        description: "Un ensemble maudit provenant des profondeurs du Néant, murmurant à ceux qui l'approchent."
    }
];
