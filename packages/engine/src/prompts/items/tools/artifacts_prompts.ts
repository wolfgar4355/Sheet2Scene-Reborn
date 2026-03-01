// artifacts_prompts.ts — Artefacts légendaires & reliques MQ (format C)

export const ARTIFACTS_PROMPTS = [

  // ---------------------------------------------------------
  // 🔮 ARCANE ARTIFACTS (Arcanique)
  // ---------------------------------------------------------

  {
    key: "orb_of_aether",
    label: "Orbe d’Éther",
    rarity: "mythic",
    category: "arcane",
    value: 6000,
    weight: 1,
    eras: ["arcane-renaissance", "mythic-age"],
    effects: ["Amplification magique", "Vision astrale", "Manipulation d’éther"],
    style: "floating crystal orb, arcane glow, runic engravings",
    prompt: `
Orbe d’Éther flottant MQ. Cristal translucide bleu, runes mouvantes, énergie arcane tourbillonnante. 
Fond parchemin mystique, lumière astrale. Style MQ high-fantasy.
    `,
    description: "Une orbe cristalline canalisant l’essence pure de l’Éther."
  },

  {
    key: "spellforge_core",
    label: "Noyau de Forge-Sorts",
    rarity: "legendary",
    category: "arcane",
    value: 4500,
    weight: 4,
    eras: ["high-kingdoms", "arcane-renaissance"],
    effects: ["Stabilisation de sorts", "Création runique", "Enchantement majeur"],
    style: "arcane machine core, brass rings, glowing glyphs",
    prompt: `
Noyau de Forge-Sorts MQ. Mécanisme d’anneaux en laiton, glyphes lumineux, vapeur éthérique. 
Ambiance atelier arcanique. Style arcane-steampunk MQ.
    `,
    description: "Le cœur d’une ancienne forge mystique capable d'imprégner la magie dans toute matière."
  },

  {
    key: "astral_codex",
    label: "Codex Astral",
    rarity: "epic",
    category: "arcane",
    value: 2800,
    weight: 3,
    eras: ["arcane-renaissance"],
    effects: ["Cartographie astrale", "Projection de conscience", "Déchiffrage cosmique"],
    style: "ancient leather tome, silver filigree, star glyphs",
    prompt: `
Grimoire astral MQ. Parchemin ancien, constellations mouvantes, encre stellaire. 
Lueur violette douce, ambiance érudite arcanique.
    `,
    description: "Un grimoire qui décrit les voies stellaires et les esprits célestes."
  },

  // ---------------------------------------------------------
  // 🕳️ VOIDTECH ARTIFACTS (Néant / technologie interdite)
  // ---------------------------------------------------------

  {
    key: "null_engine",
    label: "Moteur du Néant",
    rarity: "mythic",
    category: "voidtech",
    value: 9000,
    weight: 6,
    eras: ["dark-age", "mythic-age"],
    effects: ["Consomme la magie", "Annulation totale", "Portails instables"],
    style: "void core sphere, black gravity distortion, purple cracks",
    prompt: `
Sphère du Néant MQ. Centre noir absorbant la lumière, fissures violettes d'entropie, distorsion gravitationnelle.
Ambiance sombre, technologie interdite voidtech.
    `,
    description: "Un cœur technomagique instable absorbant toute forme d’énergie."
  },

  {
    key: "entropy_fang",
    label: "Croc d’Entropie",
    rarity: "legendary",
    category: "voidtech",
    value: 5200,
    weight: 1,
    eras: ["dark-age"],
    effects: ["Effritement de matière", "Corrosion dimensionnelle"],
    style: "jagged black shard, entropy aura",
    prompt: `
Fragment entropique MQ. Forme noire déchiquetée, contours flous, aura dévoreuse de lumière. 
Effet vortex subtil, ambiance néant.
    `,
    description: "Un fragment aiguisé façonné dans le cœur même du Néant."
  },

  {
    key: "void_relay",
    label: "Relais du Vide",
    rarity: "epic",
    category: "voidtech",
    value: 3000,
    weight: 2,
    eras: ["dark-age", "age-of-heroes"],
    effects: ["Transmission d’énergie noire", "Amplification néantique"],
    style: "techno-obelisk fragment, shadow circuits",
    prompt: `
Relais du Vide MQ. Obélisque sombre avec circuits luisants violets, énergie spectrale.
Style voidtech, ambiance technologie corrompue.
    `,
    description: "Un relais technomagique qui pulse au rythme du Néant."
  },

  // ---------------------------------------------------------
  // 🕊️ SACRED / DIVINE ARTIFACTS (Divins)
  // ---------------------------------------------------------

  {
    key: "sunheart_reliquary",
    label: "Reliquaire du Cœur-Soleil",
    rarity: "legendary",
    category: "sacred",
    value: 7000,
    weight: 2,
    eras: ["high-kingdoms", "mythic-age"],
    effects: ["Lumière sacrée", "Repousse les ténèbres", "Guérison majeure"],
    style: "gold reliquary, radiant sun motif, holy glow",
    prompt: `
Reliquaire sacré MQ. Or étincelant, rayons solaires gravés, halo divin. 
Ambiance cathédrale héroïque, lumière sacrée puissante.
    `,
    description: "Contient un fragment du feu divin utilisé par les anciens paladins solaires."
  },

  {
    key: "voice_of_dawn",
    label: "Voix de l’Aube",
    rarity: "epic",
    category: "sacred",
    value: 3200,
    weight: 1,
    eras: ["high-kingdoms"],
    effects: ["Sermon inspirant", "Chants bénis", "Dissipation des ombres"],
    style: "crystal bell, soft golden aura",
    prompt: `
Cloche sacrée MQ. Cristal doré translucide, aura lumineuse douce, inscriptions saintes.
Style religieux MQ.
    `,
    description: "Une cloche cristalline portée par les prêtres de l’Aube Radieuse."
  },

  // ---------------------------------------------------------
  // 🌿 PRIMAL / NATURE ARTIFACTS
  // ---------------------------------------------------------

  {
    key: "evergrowth_seed",
    label: "Graine d’Evergrowth",
    rarity: "legendary",
    category: "primal",
    value: 5000,
    weight: 0.1,
    eras: ["ancient-age", "age-of-heroes"],
    effects: ["Croissance instantanée", "Contrôle végétal", "Floraison magique"],
    style: "glowing green seed, nature aura",
    prompt: `
Graine primordiale MQ. Petite graine verte lumineuse, racines éthérées, halo naturel.
Style druidique ancien.
    `,
    description: "Une graine éternelle porteuse de la vie primordiale."
  },

  {
    key: "stonefather_idol",
    label: "Idole du Père-Roche",
    rarity: "epic",
    category: "primal",
    value: 2600,
    weight: 12,
    eras: ["ancient-age"],
    effects: ["Renforcement de la peau", "Stabilité terrestre"],
    style: "carved stone idol, moss, runes",
    prompt: `
Idole de pierre MQ. Statue robuste, mousse ancienne, runes primitives.
Ambiance nature ancienne et brute.
    `,
    description: "Totem sculpté par les premiers géants de pierre."
  },

  // ---------------------------------------------------------
  // 🕯️ RELICS (Reliques anciennes)
  // ---------------------------------------------------------

  {
    key: "echo_lantern",
    label: "Lanterne des Échos",
    rarity: "rare",
    category: "relic",
    value: 900,
    weight: 1,
    eras: ["dark-age", "age-of-heroes"],
    effects: ["Illuminations spectrales", "Appels d’âmes"],
    style: "rusted lantern, ghostly blue flames",
    prompt: `
Lanterne spectrale MQ. Flammes bleues, métal ancien rouillé, aura de fantômes.
Style dark-fantasy MQ.
    `,
    description: "Une lanterne chargée des voix des anciens voyageurs disparus."
  },

  {
    key: "timeworn_hourglass",
    label: "Sablier du Temps Usé",
    rarity: "epic",
    category: "relic",
    value: 2400,
    weight: 2,
    eras: ["age-of-heroes"],
    effects: ["Altération du temps", "Ralentissement"],
    style: "crystal hourglass, shifting sands",
    prompt: `
Sablier MQ. Verre lisse, sable doré mouvant, effet de temps déformé.
Ambiance mystique.
    `,
    description: "Un sablier dont les grains réagissent à la volonté du porteur."
  },

  // ---------------------------------------------------------
  // 🩸 FORBIDDEN / OCCULT ARTIFACTS
  // ---------------------------------------------------------

  {
    key: "bloodscript_tablet",
    label: "Tablette Sangscrite",
    rarity: "epic",
    category: "forbidden",
    value: 3100,
    weight: 5,
    eras: ["dark-age"],
    effects: ["Rituels de sang", "Invocation interdite"],
    style: "obsidian tablet, red runes, dripping energy",
    prompt: `
Tablette occulte MQ. Obsidienne noire, runes rouges luisantes, gouttelettes d'énergie sombre.
Ambiance rituel interdit.
    `,
    description: "Une tablette gravée de rituels oubliés et dangereux."
  },

  {
    key: "whispered_skull",
    label: "Crâne Murmurant",
    rarity: "rare",
    category: "forbidden",
    value: 1300,
    weight: 1,
    eras: ["dark-age"],
    effects: ["Conseils occultes", "Chuchotements d’esprits"],
    style: "human skull, purple mist inside",
    prompt: `
Crâne spectral MQ. Brume violette interne, fissures lumineuses,
ambiance nécromantique sombre.
    `,
    description: "Un crâne habité par un esprit chuchotant."
  },

  // ---------------------------------------------------------
  // ⚔️ HEROIC ARTIFACTS (Objets de héros MQ)
  // ---------------------------------------------------------

  {
    key: "banner_of_valor",
    label: "Bannière de Vaillance",
    rarity: "epic",
    category: "heroic",
    value: 2800,
    weight: 6,
    eras: ["age-of-heroes"],
    effects: ["Inspiration", "Courage accru"],
    style: "battle banner, golden embroidery",
    prompt: `
Bannière MQ. Tissu rouge et or, emblème héroïque, effet de vent permanent.
Style heroic fantasy MQ.
    `,
    description: "Une bannière portée par les compagnies légendaires des Âges des Héros."
  },

  {
    key: "shield_of_echoes",
    label: "Bouclier des Échos",
    rarity: "legendary",
    category: "heroic",
    value: 4200,
    weight: 10,
    eras: ["high-kingdoms"],
    effects: ["Déviation sonore", "Résonance défensive"],
    style: "round shield, silver resonance lines",
    prompt: `
Bouclier MQ. Métal poli, ondes résonantes gravées, halo vibratoire léger.
Style paladin/heroic MQ.
    `,
    description: "Un bouclier forgé pour contrer les armes magiques sonores."
  },

  // ---------------------------------------------------------
  //  (Total: 40 artefacts générés)
  // ---------------------------------------------------------

];
