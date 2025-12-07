// ingredients_prompts.ts — Ingrédients MQ (Format C)

export const INGREDIENTS_PROMPTS = [

  // ---------------------------------------------------------
  // 🌱 COMMON INGREDIENTS (15)
  // ---------------------------------------------------------

  {
    key: "sunleaf",
    label: "Feuille-Soleil",
    rarity: "common",
    value: 2,
    weight: 0,
    category: "herb",
    eras: ["ancient-age", "age-of-heroes"],
    style: "golden leaf, soft glow",
    prompt: `
Feuille jaune-or lumineuse MQ. Texture végétale fine, halo solaire doux.
Fond parchemin botanique.
    `,
    description: "Une feuille chaude au toucher, souvent utilisée pour les baumes."
  },

  {
    key: "ironroot",
    label: "Racine de Fer",
    rarity: "common",
    value: 3,
    weight: 1,
    category: "root",
    eras: ["ancient-age"],
    style: "gnarled dark root, metallic veins",
    prompt: `
Racine sombre MQ avec veines métalliques, style druide ancien.
Ambiance forêt primitive.
    `,
    description: "Une racine dure comme du métal brut."
  },

  {
    key: "mistral_mint",
    label: "Menthe de Mistral",
    rarity: "common",
    value: 2,
    weight: 0,
    category: "herb",
    eras: ["age-of-heroes"],
    style: "blue-tinted mint leaves, frost sparkle",
    prompt: `
Feuilles bleutées MQ, fines étincelles givrées.
Style herboristerie magique légère.
    `,
    description: "Une menthe froide, utilisée dans les potions de souffle glacé."
  },

  {
    key: "ash_petals",
    label: "Pétales de Cendre",
    rarity: "common",
    value: 1,
    weight: 0,
    category: "flower",
    eras: ["dark-age"],
    style: "grey flower, burnt edges, ember glow",
    prompt: `
Fleur gris-cendre MQ, pétales brûlés avec points incandescents.
Ambiance sombre.
    `,
    description: "Une fleur qui pousse dans les champs récemment touchés par la guerre."
  },

  {
    key: "serpent_scale",
    label: "Écaille de Serpent",
    rarity: "common",
    value: 1,
    weight: 0,
    category: "scale",
    eras: ["ancient-age", "age-of-heroes"],
    style: "small reptile scale, green shimmer",
    prompt: `
Écaille reptilienne MQ, reflet vert discret.
Fond parchemin zoologique.
    `,
    description: "Une petite écaille reptilienne appréciée des apprentis alchimistes."
  },

  {
    key: "ember_dust",
    label: "Poussière de Braise",
    rarity: "common",
    value: 1,
    weight: 0,
    category: "powder",
    eras: ["dark-age"],
    style: "red ember dust, tiny sparks",
    prompt: `
Poudre rouge MQ, petites étincelles visibles.
Ambiance forge ou volcan.
    `,
    description: "Résidus d’un charbon magique encore tiède."
  },

  {
    key: "glowcap_spore",
    label: "Spore de Lumignon",
    rarity: "common",
    value: 1,
    weight: 0,
    category: "fungus",
    eras: ["ancient-age"],
    style: "bioluminescent spores, soft blue glow",
    prompt: `
Spores bioluminescentes MQ, halo bleu doux.
Style cavern botanique.
    `,
    description: "Des spores utilisées pour créer des potions de lumière."
  },

  {
    key: "salt_crystal",
    label: "Cristal de Sel",
    rarity: "common",
    value: 1,
    weight: 1,
    category: "mineral",
    eras: ["high-kingdoms"],
    style: "white salt crystal, facets shining",
    prompt: `
Cristal de sel MQ taillé naturellement, brillance douce.
Style minéral propre.
    `,
    description: "Un ingrédient essentiel aux conservations magiques simples."
  },

  {
    key: "bog_moss",
    label: "Mousse des Marais",
    rarity: "common",
    value: 1,
    weight: 0,
    category: "plant",
    eras: ["dark-age"],
    style: "wet green moss, swamp humidity",
    prompt: `
Mousse verte humide MQ, ambiance marécage.
Texture spongieuse détaillée.
    `,
    description: "Utilisée pour filtrer les toxines dans les premiers soins."
  },

  {
    key: "spear_thorn",
    label: "Épine-Lance",
    rarity: "common",
    value: 1,
    weight: 0,
    category: "thorn",
    eras: ["ancient-age"],
    style: "long sharp thorn, brown-red",
    prompt: `
Longue épine MQ acérée, coloration brun-rouge.
Style botanique sauvage.
    `,
    description: "Une épine rigide utilisée pour les poisons basiques."
  },

  {
    key: "crimson_stem",
    label: "Tige Cramoisie",
    rarity: "common",
    value: 2,
    weight: 0,
    category: "plant",
    eras: ["age-of-heroes"],
    style: "red flexible plant stem, subtle glow",
    prompt: `
Tige rouge souple MQ, lueur discrète.
Fond parchemin de botaniste.
    `,
    description: "Un ingrédient utilisé pour stimuler la circulation magique."
  },

  {
    key: "storm_salt",
    label: "Sel d’Orage",
    rarity: "common",
    value: 3,
    weight: 0,
    category: "mineral",
    eras: ["arcane-renaissance"],
    style: "rock salt with blue lightning veins",
    prompt: `
Cristaux MQ avec fines veines électriques bleues.
Style alchimie de tempête.
    `,
    description: "Du sel chargé d’une faible énergie électrique."
  },

  {
    key: "pine_resin",
    label: "Résine de Pin",
    rarity: "common",
    value: 1,
    weight: 0,
    category: "resin",
    eras: ["ancient-age"],
    style: "amber resin drop, sticky texture",
    prompt: `
Goutte de résine ambrée MQ, texture collante visible.
Ambiance forêt.
    `,
    description: "Une résine collante utilisée dans les solvants naturels."
  },

  {
    key: "hollow_bone",
    label: "Os Creux",
    rarity: "common",
    value: 1,
    weight: 1,
    category: "bone",
    eras: ["dark-age"],
    style: "light hollow bone, dusty white",
    prompt: `
Os creux MQ, blanc poussiéreux, fissures légères.
Style sombre, naturaliste.
    `,
    description: "Un os animal utilisé pour les sifflets et canaux rituels."
  },

  {
    key: "grave_dirt",
    label: "Terre de Sépulture",
    rarity: "common",
    value: 1,
    weight: 1,
    category: "soil",
    eras: ["dark-age"],
    style: "dark soil, faint purple motes",
    prompt: `
Poignée de terre sombre MQ, petites particules violettes.
Ambiance nécromantique.
    `,
    description: "Un ingrédient basique pour les charmes occultes."
  },

  // ---------------------------------------------------------
  // 🌿 RARE INGREDIENTS (12)
  // ---------------------------------------------------------

  {
    key: "moondew",
    label: "Rosée Lunaire",
    rarity: "rare",
    value: 25,
    weight: 0,
    category: "liquid",
    eras: ["age-of-heroes", "high-kingdoms"],
    style: "silver droplets, moonlight shimmer",
    prompt: `
Gouttes argentées MQ, reflet lunaire sur fond sombre.
Ambiance nocturne sacrée.
    `,
    description: "Liquide sacré récolté à la surface des pétales lunaires."
  },

  {
    key: "wyrmscale_flake",
    label: "Flocon d’Écaille de Wyrm",
    rarity: "rare",
    value: 40,
    weight: 0,
    category: "scale",
    eras: ["ancient-age"],
    style: "iridescent scale shard, strong shine",
    prompt: `
Éclat d'écaille MQ iridescent, reflet arc-en-ciel.
Style dragon ancien.
    `,
    description: "Un fragment légendaire venant d’un wyrm ancien."
  },

  {
    key: "stardust",
    label: "Poussière d’Étoile",
    rarity: "rare",
    value: 60,
    weight: 0,
    category: "powder",
    eras: ["arcane-renaissance"],
    style: "bright cosmic dust, tiny star motes",
    prompt: `
Poussière cosmique MQ, particules brillantes, effet galaxie.
Style arcane astral.
    `,
    description: "Poussière utilisée dans les enchantements stellaires."
  },

  {
    key: "venom_sac",
    label: "Glande à Venin",
    rarity: "rare",
    value: 30,
    weight: 0,
    category: "organ",
    eras: ["dark-age"],
    style: "translucent gland, green poison inside",
    prompt: `
Glande organique MQ, liquide toxique vert visible.
Ambiance poison/assassin.
    `,
    description: "Prélevée sur des créatures venimeuses rares."
  },

  {
    key: "rime_bloom",
    label: "Fleur de Givre",
    rarity: "rare",
    value: 45,
    weight: 0,
    category: "flower",
    eras: ["high-kingdoms"],
    style: "frozen petal flower, frost particle aura",
    prompt: `
Fleur givrée MQ, cristaux de glace sur pétales bleus.
Style magique glacé.
    `,
    description: "Une fleur qui ne fond jamais, même en plein soleil."
  },

  {
    key: "sunshard",
    label: "Éclat Solaire",
    rarity: "rare",
    value: 50,
    weight: 0,
    category: "crystal",
    eras: ["high-kingdoms"],
    style: "tiny golden crystal shard, bright glow",
    prompt: `
Crystal doré MQ, lumière intense, rayonnement pur.
Ambiance sacrée solaire.
    `,
    description: "Fragment de lumière solidifiée."
  },

  {
    key: "blood_amber",
    label: "Ambre Sanglant",
    rarity: "rare",
    value: 35,
    weight: 1,
    category: "resin",
    eras: ["dark-age"],
    style: "red resin gem, trapped shapes inside",
    prompt: `
Ambre rouge MQ, formes sombres emprisonnées.
Style occult/nécromantique.
    `,
    description: "Ambre imprégné de rituels anciens."
  },

  {
    key: "storm_pearl",
    label: "Perle d’Orage",
    rarity: "rare",
    value: 70,
    weight: 0,
    category: "pearl",
    eras: ["arcane-renaissance"],
    style: "blue pearl with lightning arcs",
    prompt: `
Perle bleue MQ avec arcs électriques internes.
Ambiance tempête magique.
    `,
    description: "Une perle née de la mer pendant un orage arcanique."
  },

  {
    key: "spirit_icor",
    label: "Icor Spirituel",
    rarity: "rare",
    value: 40,
    weight: 0,
    category: "liquid",
    eras: ["age-of-heroes"],
    style: "white glowing liquid, floating droplets",
    prompt: `
Liquide blanc MQ, gouttes flottantes en lévitation.
Ambiance spirituelle pure.
    `,
    description: "Essence immatérielle d’esprits anciens."
  },

  {
    key: "shadow_lotus",
    label: "Lotus des Ombres",
    rarity: "rare",
    value: 55,
    weight: 0,
    category: "flower",
    eras: ["dark-age"],
    style: "black lotus, purple inner glow",
    prompt: `
Lotus noir MQ avec lueur interne violette.
Style occult/dark fantasy.
    `,
    description: "Une fleur rare poussant sous le voile du Néant."
  },

  {
    key: "arcane_thread",
    label: "Fil Arcanique",
    rarity: "rare",
    value: 20,
    weight: 0,
    category: "fiber",
    eras: ["arcane-renaissance"],
    style: "thin glowing thread spool",
    prompt: `
Fil fluorescent MQ, bobine flottante, lumière bleue magique.
Ambiance atelier arcanique.
    `,
    description: "Un fil utilisé pour coudre des enchantements."
  },

  {
    key: "earthheart_shard",
    label: "Éclat de Cœur-Terre",
    rarity: "rare",
    value: 45,
    weight: 1,
    category: "stone",
    eras: ["ancient-age"],
    style: "brown stone shard with inner rumble",
    prompt: `
Fragment rocheux MQ, vibrations internes.
Style primal/terre.
    `,
    description: "Un fragment vibrant lié aux esprits de la terre."
  },

  // ---------------------------------------------------------
  // 🌟 EPIC / MYTHIC INGREDIENTS (8)
  // ---------------------------------------------------------

  {
    key: "phoenix_ash",
    label: "Cendre de Phénix",
    rarity: "epic",
    value: 150,
    weight: 0,
    category: "powder",
    eras: ["mythic-age"],
    style: "glowing orange ash, spark trails",
    prompt: `
Cendres incandescentes MQ, traînées d’étincelles, effet renaissance.
Style légendaire feu sacré.
    `,
    description: "Les résidus du cycle de renaissance d’un phénix."
  },

  {
    key: "aether_blood",
    label: "Sang d’Éther",
    rarity: "epic",
    value: 180,
    weight: 0,
    category: "liquid",
    eras: ["mythic-age"],
    style: "liquid starlight, swirling constellations",
    prompt: `
Liquide astral MQ, mini constellations internes.
Style cosmique mythique.
    `,
    description: "Un fluide céleste rare issu d’une créature stellaire."
  },

  {
    key: "titans_bark",
    label: "Écorce de Titan",
    rarity: "epic",
    value: 200,
    weight: 2,
    category: "wood",
    eras: ["ancient-age"],
    style: "massive bark with giant runes",
    prompt: `
Écorce massive MQ avec runes colossales.
Style géant ancien.
    `,
    description: "Un morceau d’écorce provenant d’un arbre-titan."
  },

  {
    key: "void_silk",
    label: "Soie du Néant",
    rarity: "epic",
    value: 220,
    weight: 0,
    category: "fiber",
    eras: ["dark-age", "mythic-age"],
    style: "black silk strand, gravity distortions",
    prompt: `
Fil de soie noire MQ, distorsion légère autour.
Style voidtech mystique.
    `,
    description: "Une fibre produite par des créatures du Néant."
  },

  {
    key: "dragonbone_fragment",
    label: "Fragment d’Os de Dragon",
    rarity: "mythic",
    value: 500,
    weight: 3,
    category: "bone",
    eras: ["mythic-age"],
    style: "massive bone shard, ancient carvings",
    prompt: `
Fragment d’os MQ, motifs anciens, aura draconique.
Style mythique massif.
    `,
    description: "Un morceau d’os d’un dragon légendaire."
  },

  {
    key: "ancient_ichor",
    label: "Ichor Ancien",
    rarity: "mythic",
    value: 650,
    weight: 0,
    category: "liquid",
    eras: ["mythic-age"],
    style: "viscous golden blood, immense aura",
    prompt: `
Liquide doré MQ avec pulsations puissantes.
Ambiance divine antique.
    `,
    description: "Le fluide sacré circulant dans les créatures mythiques."
  },

  {
    key: "echo_crystal",
    label: "Cristal d’Écho",
    rarity: "epic",
    value: 300,
    weight: 1,
    category: "crystal",
    eras: ["high-kingdoms"],
    style: "crystal with sound ripples inside",
    prompt: `
Cristal MQ avec ondes sonores internes.
Style magique acoustique.
    `,
    description: "Un cristal capable d’amplifier les résonances magiques."
  },

  {
    key: "dream_flower",
    label: "Fleur de Rêve",
    rarity: "epic",
    value: 280,
    weight: 0,
    category: "flower",
    eras: ["age-of-heroes"],
    style: "pastel petals, dreamlike shimmer",
    prompt: `
Fleur pastel MQ, brume onirique légère autour.
Style rêve / illusion.
    `,
    description: "Une fleur qui permet de marcher dans les rêves."
  }

];
