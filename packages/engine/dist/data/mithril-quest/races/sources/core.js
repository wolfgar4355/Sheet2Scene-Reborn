// @ts-nocheck
// ============================================================================
// 🧬 RACES "CORE" — Mithril-Quest (Humanoïdes + Hybrides Élite)
// ============================================================================
export const MQ_RACES_CORE = [
    // --------------------------------------------------------------------------
    // 👤 HUMAIN
    // --------------------------------------------------------------------------
    {
        key: "human",
        label: "Humain",
        description: "Polyvalents et adaptables, les humains prospèrent dans toutes les époques.",
        traits: [
            "Adaptabilité",
            "Apprentissage accéléré",
            "Bonus de compétence au choix"
        ],
    },
    // --------------------------------------------------------------------------
    // 🧝‍♂️ ELFES (hauts & sylvestres)
    // --------------------------------------------------------------------------
    {
        key: "high-elf",
        label: "Elfe Haut-Né",
        description: "Élégants et érudits, ils maîtrisent la magie et les arts anciens.",
        traits: ["Vision nocturne", "Affinité magique", "Perception accrue"],
    },
    {
        key: "wood-elf",
        label: "Elfe Sylvestre",
        description: "Rapides et agiles, les elfes sylvestres vivent en harmonie avec la nature.",
        traits: ["Camouflage naturel", "Discrétion améliorée", "Vision nocturne"],
    },
    // --------------------------------------------------------------------------
    // 🛠️ NAINS
    // --------------------------------------------------------------------------
    {
        key: "dwarf",
        label: "Nain",
        description: "Robustes, endurants et fiers, les nains excellent dans les métiers et les combats.",
        traits: ["Résistance physique", "Connaissance de la pierre", "Résistance au poison"],
    },
    // --------------------------------------------------------------------------
    // 🧍‍♂️ PETITES GENS
    // --------------------------------------------------------------------------
    {
        key: "halfling",
        label: "Semi-homme",
        description: "Curieux et chanceux, ils voyagent souvent pour vivre des aventures inattendues.",
        traits: ["Chance surnaturelle", "Discrétion naturelle", "Grande agilité"],
    },
    // --------------------------------------------------------------------------
    // 🐗 ORCS
    // --------------------------------------------------------------------------
    {
        key: "orc",
        label: "Orc",
        description: "Puissants et agressifs, les orcs sont des guerriers redoutables.",
        traits: ["Force brute", "Intimidation naturelle", "Endurance élevée"],
    },
    // ========================================================================
    // 🧬 HYBRIDES ÉLITE MQ (12 Variantes)
    // ========================================================================
    // ---------------------------- ELFES x HUMAIN -----------------------------
    {
        key: "half-elf-forest",
        label: "Demi-Elfe des Forêts",
        description: "Hybride sylvestre agile, réceptif aux flux de la nature et de la magie.",
        traits: ["Vision nocturne", "Sens sylvestres", "Empathie naturelle"],
    },
    {
        key: "half-elf-high",
        label: "Demi-Elfe Haut-Né",
        description: "Nés entre érudition elfique et ingéniosité humaine.",
        traits: ["Affinité magique", "Adaptabilité", "Perception fine"],
    },
    {
        key: "half-elf-shadow",
        label: "Demi-Elfe des Ombres",
        description: "Issus de lignées secrètes, ils manipulent ombres et illusions.",
        traits: ["Vision nocturne", "Voile des ombres", "Silence instincif"],
    },
    // ---------------------------- ORCS x HUMAIN ------------------------------
    {
        key: "half-orc-noble",
        label: "Demi-Orc Noble",
        description: "Hybrides disciplinés dont la force orque est tempérée par une volonté humaine.",
        traits: ["Force accrue", "Contrôle émotionnel", "Présence impressionnante"],
    },
    {
        key: "half-orc-wild",
        label: "Demi-Orc Sauvage",
        description: "Instinctifs et redoutables, ils combinent puissance brute et rapidité humaine.",
        traits: ["Fureur contrôlée", "Instinct de survie", "Résilience physique"],
    },
    // --------------------------- DRACONIQUES MQ ------------------------------
    {
        key: "dragonkin-fire",
        label: "Sang-Draconique (Feu)",
        description: "Descendant d’ancêtres draconiques de feu.",
        traits: ["Souffle brûlant", "Résistance au feu", "Présence intimidante"],
    },
    {
        key: "dragonkin-storm",
        label: "Sang-Draconique (Foudre)",
        description: "Porteurs d’énergie orageuse, rapides et instables.",
        traits: ["Souffle électrique", "Réflexes amplifiés", "Aura statique"],
    },
    {
        key: "dragonkin-frost",
        label: "Sang-Draconique (Givre)",
        description: "Leur sang glacé ralentit la douleur et aiguise les sens.",
        traits: ["Souffle glacé", "Résistance au givre", "Calme surnaturel"],
    },
    {
        key: "dragonkin-mist",
        label: "Sang-Draconique (Brume)",
        description: "Éthérés et mystérieux, maîtres de l’illusion draconique.",
        traits: ["Souffle brumeux", "Voile éthéré", "Perception astrale"],
    },
    // --------------------------- FÉRIQUES MQ --------------------------------
    {
        key: "faeborn-light",
        label: "Sang-Férique (Lueur)",
        description: "Hybrides imprégnés de lumière féerique.",
        traits: ["Lueur magique", "Immunité au charme", "Légèreté féerique"],
    },
    {
        key: "faeborn-thorn",
        label: "Sang-Férique (Ronce)",
        description: "Leur essence est liée à la nature sauvage et épineuse.",
        traits: ["Peau dure", "Ronces vivantes", "Empathie végétale"],
    },
    {
        key: "faeborn-mirage",
        label: "Sang-Férique (Mirage)",
        description: "Nés des illusions féeriques, rapides et fuyants.",
        traits: ["Voile illusoire", "Esprit vaporeux", "Chance féerique"],
    },
    // --------------------------- INFERNAUX MQ -------------------------------
    {
        key: "hellborn-ember",
        label: "Sang-Infernal (Braise)",
        description: "Ancêtres infernaux mineurs, spécialisés dans les flammes furtives.",
        traits: ["Résistance au feu", "Langue infernale", "Flamme vive"],
    },
    {
        key: "hellborn-ash",
        label: "Sang-Infernal (Cendre)",
        description: "Hybrides austères dont la présence rappelle la désolation.",
        traits: ["Immunité à la fumée", "Aura grisâtre", "Persistance"],
    },
    {
        key: "hellborn-ruin",
        label: "Sang-Infernal (Ruine)",
        description: "Leurs ancêtres ont pactisé avec des seigneurs de la destruction.",
        traits: ["Résistance infernale", "Regard brûlant", "Volonté indomptable"],
    },
];
