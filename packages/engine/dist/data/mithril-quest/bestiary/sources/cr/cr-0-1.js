export const MONSTERS = [
    // 🐺 BÊTES & PETITE FAUNE
    {
        id: "wolf-hill",
        name: "Loup des Collines",
        world: "Fantasy",
        cr: 0.25,
        category: "beast",
        biomeTags: ["plains", "hills"],
        habitatTags: ["wilderness"],
        ref: { source: "custom" }
    },
    {
        id: "spiked-boar",
        name: "Sanglier Épineux",
        world: "Fantasy",
        cr: 0.25,
        category: "beast",
        biomeTags: ["forest", "hills"],
        habitatTags: ["wilderness"],
        ref: { source: "custom" }
    },
    {
        id: "lunar-fox",
        name: "Renard Spectral",
        world: "Fantasy",
        cr: 0.125,
        category: "beast",
        biomeTags: ["forest", "mystic"],
        habitatTags: ["wilderness"],
        ref: { source: "custom" }
    },
    {
        id: "mist-serpent",
        name: "Vipère de Brume",
        world: "Fantasy",
        cr: 0.125,
        category: "beast",
        biomeTags: ["swamp", "marsh"],
        habitatTags: ["wetlands"],
        ref: { source: "custom" }
    },
    {
        id: "brown-crow",
        name: "Corbeau Brunis",
        world: "Fantasy",
        cr: 0.25,
        category: "beast",
        biomeTags: ["forest", "hills"],
        habitatTags: ["wilderness"],
        ref: { source: "custom" }
    },
    {
        id: "rune-cat",
        name: "Chat des Runes",
        world: "Fantasy",
        cr: 0.125,
        category: "beast",
        biomeTags: ["ruins", "arcane"],
        habitatTags: ["urban-wild"],
        ref: { source: "custom" }
    },
    {
        id: "bat-ghost",
        name: "Chauve-souris Phante des Grottes",
        world: "Fantasy",
        cr: 0.125,
        category: "beast",
        biomeTags: ["caves"],
        habitatTags: ["underground"],
        ref: { source: "custom" }
    },
    {
        id: "young-bear",
        name: "Ours-Jeune",
        world: "Fantasy",
        cr: 1,
        category: "beast",
        biomeTags: ["forest"],
        habitatTags: ["wilderness"],
        ref: { source: "custom" }
    },
    // 🧝‍♂️ HUMANOÏDES
    {
        id: "goblin-slasher",
        name: "Gobelin Éclaireur",
        world: "Fantasy",
        cr: 0.25,
        category: "humanoid",
        biomeTags: ["forest", "hills"],
        habitatTags: ["tribal"],
        ref: { source: "custom" }
    },
    {
        id: "goblin-raider",
        name: "Gobelin Pillard",
        world: "Fantasy",
        cr: 0.5,
        category: "humanoid",
        biomeTags: ["forest", "hills"],
        habitatTags: ["tribal"],
        ref: { source: "custom" }
    },
    {
        id: "kobold-trapper",
        name: "Kobold Immobilier",
        world: "Fantasy",
        cr: 0.25,
        category: "humanoid",
        biomeTags: ["caves", "mountain"],
        habitatTags: ["underground"],
        ref: { source: "custom" }
    },
    {
        id: "kobold-bomb-slinger",
        name: "Kobold Lanceur d’Huiles",
        world: "Fantasy",
        cr: 0.25,
        category: "humanoid",
        biomeTags: ["caves"],
        habitatTags: ["underground"],
        ref: { source: "custom" }
    },
    {
        id: "road-bandit",
        name: "Bandit de Route",
        world: "Fantasy",
        cr: 0.25,
        category: "humanoid",
        biomeTags: ["roads", "forest"],
        habitatTags: ["urban-wild"],
        ref: { source: "custom" }
    },
    {
        id: "tavern-thug",
        name: "Vaurien de Taverne",
        world: "Fantasy",
        cr: 0.125,
        category: "humanoid",
        biomeTags: ["urban"],
        habitatTags: ["settlement"],
        ref: { source: "custom" }
    },
    {
        id: "cult-acolyte",
        name: "Culte Initié",
        world: "Fantasy",
        cr: 0.5,
        category: "humanoid",
        biomeTags: ["temple", "underground"],
        habitatTags: ["cult"],
        ref: { source: "custom" }
    },
    {
        id: "tribal-archer",
        name: "Archer Tribal",
        world: "Fantasy",
        cr: 0.25,
        category: "humanoid",
        biomeTags: ["forest"],
        habitatTags: ["tribal"],
        ref: { source: "custom" }
    },
    // 💀 MORTS-VIVANTS
    {
        id: "fragile-skeleton",
        name: "Squelette Fragile",
        world: "Fantasy",
        cr: 0.25,
        category: "undead",
        biomeTags: ["ruins", "graveyard"],
        habitatTags: ["undead"],
        ref: { source: "custom" }
    },
    {
        id: "shambling-zombie",
        name: "Zombie Titubant",
        world: "Fantasy",
        cr: 0.5,
        category: "undead",
        biomeTags: ["graveyard"],
        habitatTags: ["undead"],
        ref: { source: "custom" }
    },
    {
        id: "rampant-ghoul",
        name: "Ulam Rampante",
        world: "Fantasy",
        cr: 0.25,
        category: "undead",
        biomeTags: ["graveyard"],
        habitatTags: ["undead"],
        ref: { source: "custom" }
    },
    {
        id: "shadow-whisper",
        name: "Ombre Murmure",
        world: "Fantasy",
        cr: 1,
        category: "undead",
        biomeTags: ["ruins", "shadowlands"],
        habitatTags: ["undead"],
        ref: { source: "custom" }
    },
    // ✨ FÉE & SYLVAIN
    {
        id: "sylvan-sprite",
        name: "Sprite Sylvestre",
        world: "Fantasy",
        cr: 0.25,
        category: "fey",
        biomeTags: ["forest"],
        habitatTags: ["feywild"],
        ref: { source: "custom" }
    },
    {
        id: "glimmer-pixie",
        name: "Pixie Lumineuse",
        world: "Fantasy",
        cr: 0.125,
        category: "fey",
        biomeTags: ["forest", "glimmer"],
        habitatTags: ["feywild"],
        ref: { source: "custom" }
    },
    {
        id: "mushroom-sprite",
        name: "Lutin des Champignons",
        world: "Fantasy",
        cr: 0.25,
        category: "fey",
        biomeTags: ["forest"],
        habitatTags: ["feywild"],
        ref: { source: "custom" }
    },
    {
        id: "tiny-tree",
        name: "Petit Arbrin",
        world: "Fantasy",
        cr: 0.25,
        category: "fey",
        biomeTags: ["forest"],
        habitatTags: ["feywild"],
        ref: { source: "custom" }
    },
    // 🔥 ÉLÉMENTAIRES & MAGIQUES
    {
        id: "ember-spark",
        name: "Étincelle de Feu",
        world: "Fantasy",
        cr: 0.25,
        category: "elemental",
        biomeTags: ["volcano", "forge"],
        habitatTags: ["elemental"],
        ref: { source: "custom" }
    },
    {
        id: "water-sprite",
        name: "Goutte Aquafique",
        world: "Fantasy",
        cr: 0.125,
        category: "elemental",
        biomeTags: ["river", "lake"],
        habitatTags: ["water"],
        ref: { source: "custom" }
    },
    {
        id: "wind-burst",
        name: "Bourrasque Vireuse",
        world: "Fantasy",
        cr: 0.25,
        category: "elemental",
        biomeTags: ["mountain", "storm"],
        habitatTags: ["air"],
        ref: { source: "custom" }
    },
    {
        id: "earth-granite",
        name: "Grain de Terrestre",
        world: "Fantasy",
        cr: 0.25,
        category: "elemental",
        biomeTags: ["caves", "mountain"],
        habitatTags: ["earth"],
        ref: { source: "custom" }
    },
    // 🧱 ABERRATIONS & CONSTRUCTS
    {
        id: "wandering-eye",
        name: "Œil Errant Mineur",
        world: "Fantasy",
        cr: 0.5,
        category: "aberration",
        biomeTags: ["ruins", "underground"],
        habitatTags: ["arcane"],
        ref: { source: "custom" }
    },
    {
        id: "leaf-lance",
        name: "Lance de Feuille",
        world: "Fantasy",
        cr: 0.25,
        category: "construct",
        biomeTags: ["forest", "druidic"],
        habitatTags: ["magic-wild"],
        ref: { source: "custom" }
    },
    {
        id: "myssa-fragment",
        name: "Fragment d’Myssae",
        world: "Fantasy",
        cr: 1,
        category: "construct",
        biomeTags: ["arcane"],
        habitatTags: ["magic"],
        ref: { source: "custom" }
    },
    {
        id: "small-animated-statue",
        name: "Statue Animée Petite",
        world: "Fantasy",
        cr: 1,
        category: "construct",
        biomeTags: ["temple", "ruins"],
        habitatTags: ["arcane"],
        ref: { source: "custom" }
    }
];
