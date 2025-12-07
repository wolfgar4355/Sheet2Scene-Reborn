// @ts-nocheck
// offense.ts – Sorts offensifs & de contrôle MQ (Mithril-Quest)
export const OFFENSE_SPELLS = [
    //
    // TIER 0 — Cantrips offensifs
    //
    {
        key: "ember_dart",
        name: "Dard de Braise",
        world: "mithril-quest",
        tier: "cantrip",
        school: "pyromancy",
        castingTime: "action",
        range: { type: "line", value: "9 m" },
        duration: "instantané",
        concentration: false,
        components: { verbal: true, somatic: true },
        tags: ["damage", "damage-fire", "single-target"],
        availableInEras: ["ancient-age", "age-of-heroes"],
        shortSummary: "Un petit projectile de feu brûle légèrement une cible.",
        description: "Le lanceur expédie une étincelle brûlante qui frappe une créature à portée, "
            + "infligeant de modestes brûlures et éclairant brièvement la zone."
    },
    {
        key: "shadow_lash",
        name: "Fouet d’Ombre",
        world: "mithril-quest",
        tier: "cantrip",
        school: "umbramancy",
        castingTime: "action",
        range: { type: "line", value: "3 m" },
        duration: "instantané",
        concentration: false,
        components: { verbal: true },
        tags: ["damage", "damage-necrotic", "single-target"],
        availableInEras: ["dark-age"],
        shortSummary: "Un éclat d’ombre lacère l’âme d’un adversaire.",
        description: "Une lanière de ténèbres jaillit de la main du lanceur, frappant la cible d’une morsure glaciale "
            + "qui entame légèrement sa vitalité."
    },
    //
    // TIER 1 — Attaques de base
    //
    {
        key: "flame_burst",
        name: "Explosion de Flammes",
        world: "mithril-quest",
        tier: "tier1",
        school: "pyromancy",
        castingTime: "action",
        range: { type: "sphere", value: "rayon 3 m" },
        duration: "instantané",
        concentration: false,
        components: { verbal: true, somatic: true },
        tags: ["damage", "damage-fire", "area-large", "multi-target"],
        availableInEras: ["age-of-heroes", "high-kingdoms"],
        shortSummary: "Une petite déflagration embrase une zone proche.",
        description: "Le lanceur fait éclater une boule de feu compacte qui embrase brièvement un petit secteur, "
            + "provoquant brûlures et flammes vacillantes sur les surfaces inflammables."
    },
    {
        key: "frost_grasp",
        name: "Poigne de Givre",
        world: "mithril-quest",
        tier: "tier1",
        school: "frostbinding",
        castingTime: "action",
        range: { type: "touch", value: "contact" },
        duration: "instantané",
        concentration: false,
        components: { verbal: true, somatic: true },
        tags: ["damage", "damage-cold", "control", "single-target"],
        availableInEras: ["ancient-age", "age-of-heroes"],
        shortSummary: "Gèle partiellement la cible et ralentit ses mouvements.",
        description: "La main du lanceur se couvre de glace et transmet un froid mordant à la cible, "
            + "engourdissant ses membres et freinant ses mouvements pour un court instant."
    },
    //
    // TIER 2 — Offensifs intermédiaires & contrôle de zone
    //
    {
        key: "storm_lance",
        name: "Lance de Tempête",
        world: "mithril-quest",
        tier: "tier2",
        school: "stormcalling",
        castingTime: "action",
        range: { type: "line", value: "18 m" },
        duration: "instantané",
        concentration: false,
        components: { verbal: true, somatic: true },
        tags: ["damage", "damage-lightning", "single-target"],
        availableInEras: ["age-of-heroes", "high-kingdoms"],
        shortSummary: "Un trait d’éclair transperce un ennemi.",
        description: "Une lance de foudre pure jaillit de la main du lanceur et traverse l’air en un instant, "
            + "électrifiant violemment la créature visée et laissant une odeur d’ozone."
    },
    {
        key: "grasping_roots",
        name: "Racines Enserrantes",
        world: "mithril-quest",
        tier: "tier2",
        school: "wildgrowth",
        castingTime: "action",
        range: { type: "radius", value: "6 m" },
        duration: "1 minute",
        concentration: true,
        components: { verbal: true, somatic: true },
        tags: ["control", "area-large"],
        availableInEras: ["ancient-age", "dark-age"],
        shortSummary: "Des racines sortent du sol et immobilisent les ennemis.",
        description: "Le sol se fissure et laisse jaillir des racines, lianes et herbes épaisses qui saisissent "
            + "les jambes des créatures ennemies, rendant leur progression difficile voire impossible."
    },
    //
    // TIER 3 — Puissants blasts & contrôle sévère
    //
    {
        key: "sunlance",
        name: "Lance Solaire",
        world: "mithril-quest",
        tier: "tier3",
        school: "vitae",
        castingTime: "action",
        range: { type: "line", value: "18 m" },
        duration: "instantané",
        concentration: false,
        components: { verbal: true, somatic: true, material: "symbole sacré" },
        tags: ["damage", "damage-radiant", "single-target"],
        availableInEras: ["high-kingdoms"],
        shortSummary: "Un rayon sacré transperce un ennemi, terrible pour les morts-vivants.",
        description: "Un faisceau d’une blancheur brûlante frappe la cible choisie. Les morts-vivants, démons "
            + "et créatures de l’ombre subissent des dégâts terribles de cette lumière sanctifiée."
    },
    {
        key: "shadow_prison",
        name: "Prison d’Ombre",
        world: "mithril-quest",
        tier: "tier3",
        school: "umbramancy",
        castingTime: "action",
        range: { type: "sphere", value: "rayon 6 m" },
        duration: "1 minute",
        concentration: true,
        components: { verbal: true, somatic: true },
        tags: ["control", "fear", "area-large"],
        availableInEras: ["dark-age", "mythic-age"],
        shortSummary: "Une cage d’ombre immobilise et terrifie les ennemis.",
        description: "Des barreaux d’ombre se forment autour d’une zone, obscurcissant la lumière et remplissant "
            + "l’air de murmures malveillants. Les créatures piégées se sentent enfermées et oppressées."
    },
    //
    // TIER 4 — Destructions majeures
    //
    {
        key: "meteor_shower",
        name: "Pluie de Météores",
        world: "mithril-quest",
        tier: "tier4",
        school: "pyromancy",
        castingTime: "minute",
        range: { type: "radius", value: "12 m" },
        duration: "instantané",
        concentration: false,
        components: { verbal: true, somatic: true, material: "poussière de météorite" },
        tags: ["damage", "damage-fire", "area-large", "multi-target", "ritual"],
        availableInEras: ["mythic-age"],
        shortSummary: "Une pluie de roches enflammées ravage un vaste secteur.",
        description: "Le ciel s’ouvre brièvement et laisse tomber plusieurs fragments ardents qui s’écrasent "
            + "sur le champ de bataille, incendiant le terrain et pulvérisant les défenses."
    },
    {
        key: "tempest_maelstrom",
        name: "Maelström de Tempête",
        world: "mithril-quest",
        tier: "tier4",
        school: "stormcalling",
        castingTime: "action",
        range: { type: "radius", value: "9 m" },
        duration: "1 minute",
        concentration: true,
        components: { verbal: true, somatic: true },
        tags: ["damage", "damage-lightning", "area-large", "control"],
        availableInEras: ["mythic-age"],
        shortSummary: "Un vortex de vents et d’éclairs déchire toute une zone.",
        description: "Des bourrasques hurlantes et des éclairs chaotiques tourbillonnent autour d’un point choisi, "
            + "bousculant violemment les créatures et frappant au hasard de décharges électriques."
    },
    //
    // TIER 5 — Pouvoirs mythiques
    //
    {
        key: "starfall_cataclysm",
        name: "Cataclysme d’Étoiles",
        world: "mithril-quest",
        tier: "tier5",
        school: "aethercraft",
        castingTime: "hour",
        range: { type: "radius", value: "24 m" },
        duration: "instantané",
        concentration: false,
        components: {
            verbal: true,
            somatic: true,
            material: "fragment d’astrolabe antique"
        },
        tags: ["damage", "area-large", "multi-target", "ritual"],
        availableInEras: ["mythic-age"],
        shortSummary: "Un appel cosmique fait tomber plusieurs astres sur le champ de bataille.",
        description: "Le mage se synchronise avec les cieux et détourne la course de plusieurs fragments stellaires. "
            + "Ils s’écrasent dans un fracas apocalyptique, remodelant le terrain et laissant derrière eux "
            + "des cratères encore fumants."
    }
];
