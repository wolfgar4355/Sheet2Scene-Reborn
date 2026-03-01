// @ts-nocheck
// defense.ts – Sorts défensifs, résistances et bénédictions MQ (Mithril-Quest)

import type { Spell } from "./schema";

export const DEFENSE_SPELLS: Spell[] = [
  //
  // TIER 0 — Cantrips utilitaires / défensifs
  //
  {
    key: "ward_spark",
    name: "Étincelle de Protection",
    world: "mithril-quest",
    tier: "cantrip",
    school: "aethercraft",
    castingTime: "action",
    range: { type: "self", value: "rayon 1,5 m" },
    duration: "1 tour",
    concentration: false,
    components: { verbal: true, somatic: true },
    tags: ["buff-defense"],
    availableInEras: ["ancient-age", "high-kingdoms"],
    shortSummary: "Une mini-barrière absorbe une faible attaque.",
    description:
      "Une étincelle de force pure entoure le lanceur, réduisant légèrement "
      + "les dégâts de la prochaine attaque qui le touche avant la fin du tour."
  },
  {
    key: "minor_mending",
    name: "Rétablissement Mineur",
    world: "mithril-quest",
    tier: "cantrip",
    school: "vitae",
    castingTime: "action",
    range: { type: "touch", value: "contact" },
    duration: "instantané",
    concentration: false,
    components: { verbal: true },
    tags: ["heal", "single-target"],
    availableInEras: ["ancient-age", "age-of-heroes"],
    shortSummary:
      "Soigne de très petites blessures et écorchures.",
    description:
      "Une lueur douce referme les petites entailles, écorchures et bleus. "
      + "Ce sort ne peut pas restaurer une créature à plus de la moitié de ses points de vie maximum."
  },

  //
  // TIER 1 — Défense légère & soins basiques
  //
  {
    key: "aegis_shell",
    name: "Coquille d’Égide",
    world: "mithril-quest",
    tier: "tier1",
    school: "aethercraft",
    castingTime: "action",
    range: { type: "self", value: "rayon 3 m" },
    duration: "10 minutes",
    concentration: true,
    components: { verbal: true, somatic: true },
    tags: ["buff-defense"],
    availableInEras: ["age-of-heroes", "high-kingdoms"],
    shortSummary:
      "Un bouclier d’énergie réduit les dégâts physiques.",
    description:
      "Une coquille translucide enveloppe le lanceur. Tant que le sort dure, "
      + "les attaques physiques qui le touchent infligent légèrement moins de dégâts, "
      + "comme si une partie de la force était absorbée par l’aura."
  },
  {
    key: "healing_touch",
    name: "Toucher Guérisseur",
    world: "mithril-quest",
    tier: "tier1",
    school: "vitae",
    castingTime: "action",
    range: { type: "touch", value: "contact" },
    duration: "instantané",
    concentration: false,
    components: { verbal: true, somatic: true },
    tags: ["heal", "single-target"],
    availableInEras: ["ancient-age", "high-kingdoms"],
    shortSummary:
      "Transfère une énergie curative dans la cible.",
    description:
      "Une énergie chaude circule du lanceur vers la créature touchée, refermant plaies simples, "
      + "contusions et fractures légères. Le sort est surtout utilisé entre deux combats ou par "
      + "les novices de la foi."
  },

  //
  // TIER 2 — Boucliers sérieux / soins moyens
  //
  {
    key: "mana_barrier",
    name: "Barrière de Mana",
    world: "mithril-quest",
    tier: "tier2",
    school: "aethercraft",
    castingTime: "action",
    range: { type: "self", value: "rayon 3 m" },
    duration: "10 minutes",
    concentration: true,
    components: { verbal: true },
    tags: ["buff-defense", "area-large"],
    availableInEras: ["high-kingdoms"],
    shortSummary:
      "Une bulle protectrice absorbe plusieurs attaques.",
    description:
      "Le lanceur crée une sphère brillante qui flotte autour de lui. "
      + "La barrière absorbe une partie des dégâts subis par le lanceur et les créatures "
      + "alliées proches avant de se dissiper."
  },
  {
    key: "healing_wave",
    name: "Vague de Guérison",
    world: "mithril-quest",
    tier: "tier2",
    school: "vitae",
    castingTime: "action",
    range: { type: "radius", value: "6 m" },
    duration: "instantané",
    concentration: false,
    components: { verbal: true },
    tags: ["heal", "area-large", "multi-target"],
    availableInEras: ["high-kingdoms"],
    shortSummary:
      "Une vague d’énergie soigne les alliés proches.",
    description:
      "Un anneau de lumière verte se propage autour du lanceur, refermant plusieurs blessures "
      + "légères sur toutes les créatures alliées dans la zone."
  },
  {
    key: "ward_against_dark",
    name: "Protection contre les Ténèbres",
    world: "mithril-quest",
    tier: "tier2",
    school: "spiritbond",
    castingTime: "action",
    range: { type: "touch", value: "contact" },
    duration: "10 minutes",
    concentration: true,
    components: { verbal: true, somatic: true },
    tags: ["buff-defense", "damage-necrotic"],
    availableInEras: ["dark-age", "high-kingdoms"],
    shortSummary:
      "Repousse légèrement les énergies nécrotiques.",
    description:
      "Une aura pâle entoure la cible, réduisant les effets de la magie nécrotique et "
      + "atténuant la terreur inspirée par les morts-vivants mineurs."
  },

  //
  // TIER 3 — Grandes protections / anti-magie légère
  //
  {
    key: "aura_of_sanctity",
    name: "Aura de Sanctité",
    world: "mithril-quest",
    tier: "tier3",
    school: "spiritbond",
    castingTime: "action",
    range: { type: "radius", value: "9 m" },
    duration: "10 minutes",
    concentration: true,
    components: { verbal: true },
    tags: ["buff-defense", "area-large"],
    availableInEras: ["high-kingdoms"],
    shortSummary:
      "Protège les alliés contre malédictions & peur.",
    description:
      "Une aura lumineuse s’étend à partir du lanceur. Les alliés dans la zone voient leur esprit "
      + "renforcé contre les malédictions, les effets de peur et l’influence des entités ténébreuses."
  },
  {
    key: "greater_heal",
    name: "Guérison Supérieure",
    world: "mithril-quest",
    tier: "tier3",
    school: "vitae",
    castingTime: "action",
    range: { type: "touch", value: "contact" },
    duration: "instantané",
    concentration: false,
    components: { verbal: true, somatic: true },
    tags: ["heal", "single-target"],
    availableInEras: ["high-kingdoms", "mythic-age"],
    shortSummary:
      "Restaure une grande quantité de vitalité.",
    description:
      "Une lumière intense enveloppe la cible, refermant immédiatement de nombreuses blessures, "
      + "ressoudant les os brisés et supprimant une fatigue extrême."
  },
  {
    key: "cleanse_affliction",
    name: "Purge d’Affliction",
    world: "mithril-quest",
    tier: "tier3",
    school: "spiritbond",
    castingTime: "action",
    range: { type: "touch", value: "contact" },
    duration: "instantané",
    concentration: false,
    components: { verbal: true },
    tags: ["debuff", "heal", "single-target"],
    availableInEras: ["age-of-heroes", "high-kingdoms"],
    shortSummary:
      "Annule poisons, maladies et malédictions modestes.",
    description:
      "Une onde de lumière pure traverse la cible, dissipant la plupart des venins simples, "
      + "des maladies surnaturelles faibles et des malédictions de bas niveau."
  },

  //
  // TIER 4 — Hautes protections / soins massifs
  //
  {
    key: "diamond_skin",
    name: "Peau de Diamant",
    world: "mithril-quest",
    tier: "tier4",
    school: "terraforge",
    castingTime: "action",
    range: { type: "self", value: "—" },
    duration: "10 minutes",
    concentration: true,
    components: { verbal: true, somatic: true },
    tags: ["buff-defense"],
    availableInEras: ["mythic-age"],
    shortSummary:
      "La peau devient presque indestructible.",
    description:
      "La chair du lanceur se durcit en cristal translucide, lui conférant une résistance "
      + "extraordinaire aux armes physiques et aux projectiles. Les coups critiques "
      + "semblent glisser sur sa surface mi-minérale, mi-vivante."
  },
  {
    key: "mass_healing_aura",
    name: "Aura de Guérison de Masse",
    world: "mithril-quest",
    tier: "tier4",
    school: "vitae",
    castingTime: "action",
    range: { type: "radius", value: "12 m" },
    duration: "1 minute",
    concentration: true,
    components: { verbal: true },
    tags: ["heal", "area-large", "multi-target"],
    availableInEras: ["high-kingdoms", "mythic-age"],
    shortSummary:
      "Répare de lourdes blessures sur une large zone.",
    description:
      "Une pluie de lumière verte tombe autour du lanceur. Tant que le sort dure, "
      + "les alliés dans la zone récupèrent régulièrement une partie de leurs forces, "
      + "leurs plaies profondes se refermant progressivement."
  },
  {
    key: "purge_corruption",
    name: "Purge de la Corruption",
    world: "mithril-quest",
    tier: "tier4",
    school: "spiritbond",
    castingTime: "action",
    range: { type: "radius", value: "9 m" },
    duration: "instantané",
    concentration: false,
    components: { verbal: true },
    tags: ["debuff", "area-large"],
    availableInEras: ["dark-age", "mythic-age"],
    shortSummary:
      "Balaye les malédictions fortes et les énergies corrompues.",
    description:
      "Une onde sacrée se répand, dissipant les possessions mineures, brisant les sceaux impies "
      + "et affaiblissant fortement les malédictions puissantes dans la zone."
  },

  //
  // TIER 5 — Grandes barrières / défenses mythiques / restauration totale
  //
  {
    key: "mythic_barrier",
    name: "Barrière Mythique",
    world: "mithril-quest",
    tier: "tier5",
    school: "aethercraft",
    castingTime: "minute",
    range: { type: "sphere", value: "rayon 18 m" },
    duration: "10 minutes",
    concentration: true,
    components: { verbal: true, somatic: true, material: "fragment de cristal antique" },
    tags: ["buff-defense", "area-large", "ritual"],
    availableInEras: ["mythic-age"],
    shortSummary:
      "Une coupole quasi impénétrable défend toute une zone.",
    description:
      "Une gigantesque sphère de force se manifeste, bloquant la plupart des attaques physiques "
      + "et restreignant sévèrement les effets magiques hostiles traversant sa surface."
  },
  {
    key: "divine_restoration",
    name: "Restauration Divine",
    world: "mithril-quest",
    tier: "tier5",
    school: "vitae",
    castingTime: "minute",
    range: { type: "touch", value: "contact" },
    duration: "instantané",
    concentration: false,
    components: { verbal: true, somatic: true, material: "symbole sacré d’un grand ordre" },
    tags: ["heal", "single-target"],
    availableInEras: ["mythic-age"],
    shortSummary:
      "Rétablit totalement un allié.",
    description:
      "Un torrent de lumière sacrée reconstruit le corps et l’esprit de la créature touchée, "
      + "soignant toutes les blessures, effaçant la plupart des maladies, malédictions et "
      + "épuisements, comme si elle sortait à peine d’un rêve."
  }
];
