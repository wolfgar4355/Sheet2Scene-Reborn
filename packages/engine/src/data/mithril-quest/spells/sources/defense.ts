// defense.ts — Sorts défensifs, de soins, résistances et bénédictions S2S Fantasy

import type { Spell } from "../schema";

export const DEFENSE_SPELLS: Spell[] = [

  // ───────────────────────────────────────────────
  // TIER 0 — Cantrips utilitaires/défensifs
  // ───────────────────────────────────────────────

  {
    key: "ward_spark",
    name: "Étincelle de Protection",
    world: "fantasy",
    tier: "cantrip",
    school: "aethercraft",
    castingTime: "action",
    range: { type: "self", value: "—" },
    duration: "1 tour",
    concentration: false,
    components: { verbal: false, somatic: true },
    tags: ["buff-defense"],
    availableInEras: ["ancient-age", "high-kingdoms"],
    shortSummary: "Une mini-barrière absorbe une faible attaque.",
    description:
      "Une étincelle de force entoure le lanceur, réduisant légèrement les dégâts du prochain coup.",
  },

  {
    key: "minor_mending",
    name: "Rétablissement Mineur",
    world: "fantasy",
    tier: "cantrip",
    school: "vitae",
    castingTime: "action",
    range: { type: "touch", value: "touch" },
    duration: "instantané",
    concentration: false,
    components: { verbal: true, somatic: true },
    tags: ["heal"],
    availableInEras: ["ancient-age", "age-of-heroes"],
    shortSummary: "Soigne de très petites blessures.",
    description:
      "Ferme une coupure légère, apaise une contusion ou stabilise un saignement faible.",
  },

  // ───────────────────────────────────────────────
  // TIER 1 — Défense légère & soins basiques
  // ───────────────────────────────────────────────

  {
    key: "aegis_shell",
    name: "Coquille d'Égide",
    world: "fantasy",
    tier: "tier1",
    school: "aethercraft",
    castingTime: "action",
    range: { type: "self", value: "—" },
    duration: "10 minutes",
    concentration: true,
    components: { verbal: true, somatic: true },
    tags: ["buff-defense"],
    availableInEras: ["age-of-heroes"],
    shortSummary: "Bouclier d’énergie réduisant les dégâts physiques.",
    description:
      "Une coquille translucide entoure le lanceur, diminuant l’impact des attaques directes.",
  },

  {
    key: "healing_touch",
    name: "Toucher Guérisseur",
    world: "fantasy",
    tier: "tier1",
    school: "vitae",
    castingTime: "action",
    range: { type: "touch", value: "touch" },
    duration: "instantané",
    concentration: false,
    components: { verbal: true, somatic: true },
    tags: ["heal", "single-target"],
    availableInEras: ["ancient-age", "high-kingdoms"],
    shortSummary: "Un soin faible à modéré.",
    description:
      "Le lanceur transfère une énergie curative dans la cible, réparant brièvement tissus et os.",
  },

  {
    key: "resist_fire_minor",
    name: "Résistance Mineure au Feu",
    world: "fantasy",
    tier: "tier1",
    school: "pyromancy",
    castingTime: "action",
    range: { type: "touch", value: "touch" },
    duration: "1h",
    concentration: true,
    components: { verbal: true, somatic: true },
    tags: ["buff-defense", "damage-fire"],
    availableInEras: ["age-of-heroes"],
    shortSummary: "Protection limitée contre la chaleur.",
    description:
      "Une couche d’énergie rougeâtre protège légèrement la cible du feu.",
  },

  // ───────────────────────────────────────────────
  // TIER 2 — Boucliers sérieux / soins moyens
  // ───────────────────────────────────────────────

  {
    key: "mana_barrier",
    name: "Barrière de Mana",
    world: "fantasy",
    tier: "tier2",
    school: "aethercraft",
    castingTime: "action",
    range: { type: "self", value: "—" },
    duration: "10 minutes",
    concentration: true,
    components: { verbal: true, somatic: true },
    tags: ["buff-defense"],
    availableInEras: ["high-kingdoms"],
    shortSummary: "Un dôme de force absorbe plusieurs attaques.",
    description:
      "Le lanceur crée une bulle protectrice absorbant une quantité notable de dégâts.",
  },

  {
    key: "healing_wave",
    name: "Vague de Guérison",
    world: "fantasy",
    tier: "tier2",
    school: "vitae",
    castingTime: "action",
    range: { type: "radius", value: "6m" },
    duration: "instantané",
    concentration: false,
    components: { verbal: true, somatic: true },
    tags: ["heal", "multi-target"],
    availableInEras: ["high-kingdoms"],
    shortSummary: "Soigne tous les alliés proches.",
    description:
      "Une vague d’énergie vitale émane du lanceur et soigne les créatures amies dans la zone.",
  },

  {
    key: "ward_against_dark",
    name: "Protection contre les Ténèbres",
    world: "fantasy",
    tier: "tier2",
    school: "spiritbond",
    castingTime: "action",
    range: { type: "touch", value: "touch" },
    duration: "10 minutes",
    concentration: true,
    components: { verbal: true, somatic: true },
    tags: ["buff-defense", "damage-necrotic"],
    availableInEras: ["dark-age"],
    shortSummary: "Protection contre nécrotique/ombre.",
    description:
      "Une lumière sacrée repousse les énergies d’Ombremonde autour de la cible.",
  },

  {
    key: "resist_cold",
    name: "Résistance au Froid",
    world: "fantasy",
    tier: "tier2",
    school: "frostbinding",
    castingTime: "action",
    range: { type: "touch", value: "touch" },
    duration: "1h",
    concentration: true,
    components: { verbal: true, somatic: true },
    tags: ["buff-defense", "damage-cold"],
    availableInEras: ["age-of-heroes"],
    shortSummary: "Protection contre le froid sévère.",
    description:
      "Une aura glaciale protège la cible des températures extrêmes.",
  },

  // ───────────────────────────────────────────────
  // TIER 3 — Grandes protections / soins majeurs / anti-magie léger
  // ───────────────────────────────────────────────

  {
    key: "aura_of_sanctity",
    name: "Aura de Sanctité",
    world: "fantasy",
    tier: "tier3",
    school: "spiritbond",
    castingTime: "action",
    range: { type: "radius", value: "9m" },
    duration: "10 minutes",
    concentration: true,
    components: { verbal: true, somatic: true },
    tags: ["buff-defense", "area-large"],
    availableInEras: ["high-kingdoms"],
    shortSummary: "Protège tous les alliés contre malédictions & peur.",
    description:
      "Une aura lumineuse renforce la volonté et protège contre les effets sombres.",
  },

  {
    key: "greater_heal",
    name: "Guérison Supérieure",
    world: "fantasy",
    tier: "tier3",
    school: "vitae",
    castingTime: "action",
    range: { type: "touch", value: "touch" },
    duration: "instantané",
    concentration: false,
    components: { verbal: true, somatic: true },
    tags: ["heal", "single-target"],
    availableInEras: ["high-kingdoms"],
    shortSummary: "Un soin puissant qui referme toutes les plaies importantes.",
    description:
      "Une énergie pure revitalise la cible, guérissant rapidement blessures graves et fractures.",
  },

  {
    key: "cleanse_affliction",
    name: "Purge d’Affliction",
    world: "fantasy",
    tier: "tier3",
    school: "spiritbond",
    castingTime: "action",
    range: { type: "touch", value: "touch" },
    duration: "instantané",
    concentration: false,
    components: { verbal: true, somatic: true },
    tags: ["heal", "debuff"],
    availableInEras: ["age-of-heroes"],
    shortSummary: "Annule poisons, maladies et malédictions faibles.",
    description:
      "Une énergie sacrée disperse les toxines, fièvres et petites malédictions.",
  },

  {
    key: "resist_lightning",
    name: "Résistance à la Foudre",
    world: "fantasy",
    tier: "tier3",
    school: "stormcalling",
    castingTime: "action",
    range: { type: "touch", value: "touch" },
    duration: "1h",
    concentration: true,
    components: { verbal: true, somatic: true },
    tags: ["buff-defense", "damage-lightning"],
    availableInEras: ["high-kingdoms"],
    shortSummary: "Protection contre l’électricité.",
    description:
      "Une couche d’énergie tempétueuse absorbe une partie des décharges électriques.",
  },

  // ───────────────────────────────────────────────
  // TIER 4 — Hautes protections / boucliers renforcés / soins massifs
  // ───────────────────────────────────────────────

  {
    key: "diamond_skin",
    name: "Peau de Diamant",
    world: "fantasy",
    tier: "tier4",
    school: "terraforge",
    castingTime: "action",
    range: { type: "self", value: "—" },
    duration: "10 minutes",
    concentration: true,
    components: { verbal: true, somatic: true },
    tags: ["buff-defense"],
    availableInEras: ["mythic-age"],
    shortSummary: "Transforme la peau en matériau quasi indestructible.",
    description:
      "La peau du lanceur se durcit en un cristal translucide résistant à presque toutes les attaques.",
  },

  {
    key: "mass_healing_aura",
    name: "Aura de Guérison de Masse",
    world: "fantasy",
    tier: "tier4",
    school: "vitae",
    castingTime: "action",
    range: { type: "radius", value: "12m" },
    duration: "instantané",
    concentration: false,
    components: { verbal: true, somatic: true },
    tags: ["heal", "multi-target"],
    availableInEras: ["high-kingdoms", "mythic-age"],
    shortSummary: "Puissant soin de zone.",
    description:
      "Une vague de lumière pure répare les blessures des alliés dans un large rayon.",
  },

  {
    key: "purge_corruption",
    name: "Purge de la Corruption",
    world: "fantasy",
    tier: "tier4",
    school: "spiritbond",
    castingTime: "action",
    range: { type: "radius", value: "9m" },
    duration: "instantané",
    concentration: false,
    components: { verbal: true, somatic: true },
    tags: ["debuff", "area-large"],
    availableInEras: ["dark-age"],
    shortSummary: "Efface toutes les corruptions et malédictions fortes.",
    description:
      "Une lumière purificatrice disperse les énergies corrompues et libère les esprits touchés.",
  },

  // ───────────────────────────────────────────────
  // TIER 5 — Grandes barrières / défenses mythiques / restore complet
  // ───────────────────────────────────────────────

  {
    key: "mythic_barrier",
    name: "Barrière Mythique",
    world: "fantasy",
    tier: "tier5",
    school: "aethercraft",
    castingTime: "action",
    range: { type: "sphere", value: "18m" },
    duration: "10 minutes",
    concentration: true,
    components: { verbal: true, somatic: true },
    tags: ["buff-defense", "area-large"],
    availableInEras: ["mythic-age"],
    shortSummary: "Un dôme presque impénétrable.",
    description:
      "Une barrière colossale de force pure protège une zone entière contre attaques physiques et magiques.",
  },

  {
    key: "divine_restoration",
    name: "Restauration Divine",
    world: "fantasy",
    tier: "tier5",
    school: "vitae",
    castingTime: "action",
    range: { type: "touch", value: "touch" },
    duration: "instantané",
    concentration: false,
    components: { verbal: true, somatic: true },
    tags: ["heal"],
    availableInEras: ["mythic-age"],
    shortSummary: "Rétablit totalement un allié.",
    description:
      "Une énergie sacrée restaure la vitalité, purge toutes les altérations et revitalise complètement un allié.",
  }
];
