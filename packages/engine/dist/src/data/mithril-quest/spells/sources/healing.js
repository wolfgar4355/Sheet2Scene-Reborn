// @ts-nocheck
// healing.ts – Sorts de soin & restauration MQ (Mithril-Quest)
export const HEALING_SPELLS = [
    //
    // TIER 0 — Soin léger (les cantrips plus sérieux sont dans defense.ts)
    //
    {
        key: "spark_of_vitae",
        name: "Étincelle de Vitaé",
        world: "mithril-quest",
        tier: "cantrip",
        school: "vitae",
        castingTime: "action",
        range: { type: "touch", value: "contact" },
        duration: "instantané",
        concentration: false,
        components: { verbal: true },
        tags: ["heal", "single-target"],
        availableInEras: ["ancient-age"],
        shortSummary: "Rallume faiblement la vitalité d’une créature.",
        description: "Une étincelle verte traverse la peau de la cible, apaisant une douleur et redonnant juste assez "
            + "d’énergie pour qu’elle se relève."
    },
    //
    // TIER 1 — Soins de base
    //
    {
        key: "restoring_prayer",
        name: "Prière Rétablissante",
        world: "mithril-quest",
        tier: "tier1",
        school: "spiritbond",
        castingTime: "action",
        range: { type: "radius", value: "3 m" },
        duration: "instantané",
        concentration: false,
        components: { verbal: true },
        tags: ["heal", "area-large", "multi-target"],
        availableInEras: ["age-of-heroes"],
        shortSummary: "Une courte prière soigne légèrement plusieurs alliés.",
        description: "Le lanceur murmure une invocation aux esprits bienveillants. Ceux-ci répondent par une vague "
            + "de chaleur douce qui traverse les blessures superficielles des compagnons proches."
    },
    //
    // TIER 2 — Restauration moyenne
    //
    {
        key: "renewing_flow",
        name: "Flux Régénérant",
        world: "mithril-quest",
        tier: "tier2",
        school: "vitae",
        castingTime: "ten-minutes",
        range: { type: "radius", value: "6 m" },
        duration: "10 minutes",
        concentration: true,
        components: { verbal: true, somatic: true },
        tags: ["heal", "area-large", "ritual"],
        availableInEras: ["high-kingdoms"],
        shortSummary: "Crée une zone où les blessures se referment lentement.",
        description: "Pendant toute la durée du sort, les créatures alliées qui se reposent dans la zone ressentent "
            + "une douce pulsation dans leurs veines, comme un second cœur qui accélère la convalescence."
    },
    {
        key: "lesser_restoration_mq",
        name: "Restauration Mineure MQ",
        world: "mithril-quest",
        tier: "tier2",
        school: "spiritbond",
        castingTime: "action",
        range: { type: "touch", value: "contact" },
        duration: "instantané",
        concentration: false,
        components: { verbal: true, somatic: true },
        tags: ["heal", "debuff", "single-target"],
        availableInEras: ["age-of-heroes", "high-kingdoms"],
        shortSummary: "Supprime un affaiblissement modéré.",
        description: "Le sort dissipe un poison mineur, une fièvre surnaturelle, une cécité ou une surdité causée par la magie, "
            + "mais laisse les malédictions plus profondes intactes."
    },
    //
    // TIER 3 — Guérison avancée
    //
    {
        key: "reviving_bond",
        name: "Lien Revivifiant",
        world: "mithril-quest",
        tier: "tier3",
        school: "spiritbond",
        castingTime: "minute",
        range: { type: "touch", value: "contact" },
        duration: "instantané",
        concentration: false,
        components: {
            verbal: true,
            somatic: true,
            material: "mèche de cheveux ou souvenir de la cible"
        },
        tags: ["heal", "single-target"],
        availableInEras: ["high-kingdoms"],
        shortSummary: "Ramène une créature mourante à la vie consciente.",
        description: "Le sort arrache l’âme de la cible au bord du gouffre, la rattachant au monde matériel. "
            + "La créature revient à la vie avec une santé fragile mais un esprit pleinement éveillé."
    },
    {
        key: "purifying_rain",
        name: "Pluie Purificatrice",
        world: "mithril-quest",
        tier: "tier3",
        school: "vitae",
        castingTime: "minute",
        range: { type: "radius", value: "9 m" },
        duration: "instantané",
        concentration: false,
        components: { verbal: true, somatic: true },
        tags: ["heal", "debuff", "area-large"],
        availableInEras: ["high-kingdoms", "mythic-age"],
        shortSummary: "Une pluie sacrée soigne et nettoie les alliés.",
        description: "De fines gouttes de lumière tombent sur la zone, soignant des blessures modérées et "
            + "lavant de nombreux effets malsains : fatigue, altérations mineures et certains poisons."
    },
    //
    // TIER 4 — Restauration majeure
    //
    {
        key: "regrowth",
        name: "Renaissance des Chairs",
        world: "mithril-quest",
        tier: "tier4",
        school: "wildgrowth",
        castingTime: "hour",
        range: { type: "touch", value: "contact" },
        duration: "instantané",
        concentration: false,
        components: {
            verbal: true,
            somatic: true,
            material: "semence d’arbre ancien"
        },
        tags: ["heal", "single-target"],
        availableInEras: ["mythic-age"],
        shortSummary: "Fait repousser membres, yeux ou organes perdus.",
        description: "Le sort déclenche une croissance organique rapide, tissant muscles, nerfs et os à partir de "
            + "l’énergie vitale de la cible et du pouvoir de la nature."
    },
    //
    // TIER 5 — Miracles de soin
    //
    {
        key: "worlds_embrace",
        name: "Étreinte des Mondes",
        world: "mithril-quest",
        tier: "tier5",
        school: "vitae",
        castingTime: "hour",
        range: { type: "radius", value: "18 m" },
        duration: "instantané",
        concentration: false,
        components: {
            verbal: true,
            somatic: true,
            material: "relique d’un sanctuaire majeur"
        },
        tags: ["heal", "area-large", "multi-target", "ritual"],
        availableInEras: ["mythic-age"],
        shortSummary: "Un miracle restaure entièrement une troupe entière.",
        description: "Un réseau de lignes de force relie toutes les créatures alliées dans la zone. "
            + "Chacune reçoit une part égale d’une énergie de guérison quasi divine, refermant toutes les blessures, "
            + "brisant la fatigue et insufflant un espoir indestructible."
    }
];
