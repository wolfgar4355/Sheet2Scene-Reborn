// offense.ts — Sorts offensifs S2S pour Fantasy
import type { Spell } from "../schema";

export const OFFENSE_SPELLS: Spell[] = [

  // ───────────────────────────────────────────────
  // CANTRIPS (Tier 0)
  // ───────────────────────────────────────────────

  {
    key: "spark_bolt",
    name: "Éclair Étincelant",
    world: "fantasy",
    tier: "cantrip",
    school: "stormcalling",
    castingTime: "action",
    range: { type: "line", value: "12m" },
    duration: "instantané",
    concentration: false,
    components: { verbal: true, somatic: true },
    tags: ["damage-lightning", "single-target"],
    availableInEras: ["ancient-age", "age-of-heroes", "high-kingdoms"],
    shortSummary: "Un petit éclair rapide frappe une cible.",
    description:
      "Le lanceur libère une étincelle électrique qui touche une créature dans une ligne directe.",
  },

  {
    key: "ember_dart",
    name: "Dard de Braise",
    world: "fantasy",
    tier: "cantrip",
    school: "pyromancy",
    castingTime: "action",
    range: { type: "sphere", value: "18m" },
    duration: "instantané",
    concentration: false,
    components: { verbal: false, somatic: true },
    tags: ["damage-fire", "single-target"],
    availableInEras: ["ancient-age", "high-kingdoms"],
    shortSummary: "Une braise ardente jaillit en ligne droite.",
    description:
      "Une petite braise chargée de chaleur frappe une créature à portée.",
  },

  {
    key: "shadow_lash",
    name: "Fouet d’Ombre",
    world: "fantasy",
    tier: "cantrip",
    school: "umbramancy",
    castingTime: "action",
    range: { type: "sphere", value: "9m" },
    duration: "instantané",
    concentration: false,
    components: { verbal: true, somatic: true },
    tags: ["damage-necrotic", "single-target"],
    availableInEras: ["dark-age"],
    shortSummary: "Une ombre tranchante lacère la cible.",
    description:
      "Un filament de ténèbres frappe la cible, drainant un fragment d’énergie vitale.",
  },

  // ───────────────────────────────────────────────
  // TIER 1
  // ───────────────────────────────────────────────

  {
    key: "fire_burst",
    name: "Explosion de Flammes",
    world: "fantasy",
    tier: "tier1",
    school: "pyromancy",
    castingTime: "action",
    range: { type: "sphere", value: "6m rayon" },
    duration: "instantané",
    concentration: false,
    components: { verbal: true, somatic: true },
    tags: ["damage-fire", "area-large"],
    availableInEras: ["age-of-heroes"],
    shortSummary: "Petite explosion de flammes autour du lanceur.",
    description:
      "Le mage relâche une onde de flammes qui enflamme l’air dans un rayon de 6 mètres.",
  },

  {
    key: "ice_shard",
    name: "Éclat de Givre",
    world: "fantasy",
    tier: "tier1",
    school: "frostbinding",
    castingTime: "action",
    range: { type: "line", value: "18m" },
    duration: "instantané",
    concentration: false,
    components: { verbal: false, somatic: true },
    tags: ["damage-cold", "single-target"],
    availableInEras: ["ancient-age", "high-kingdoms"],
    shortSummary: "Une flèche de glace transperce une cible.",
    description:
      "Un éclat gelé est projeté rapidement vers une cible, infligeant un froid mordant.",
  },

  {
    key: "stone_spike",
    name: "Pointe de Pierre",
    world: "fantasy",
    tier: "tier1",
    school: "terraforge",
    castingTime: "action",
    range: { type: "line", value: "6m" },
    duration: "instantané",
    concentration: false,
    components: { verbal: false, somatic: true },
    tags: ["damage", "single-target"],
    availableInEras: ["ancient-age"],
    shortSummary: "Une pointe de roche sort du sol et empale une cible.",
    description:
      "Une pierre affûtée surgit soudainement du sol, frappant une créature à proximité.",
  },

  // ───────────────────────────────────────────────
  // TIER 2
  // ───────────────────────────────────────────────

  {
    key: "lightning_arc",
    name: "Arc Électrique",
    world: "fantasy",
    tier: "tier2",
    school: "stormcalling",
    castingTime: "action",
    range: { type: "multi-target", value: "9m, 3 cibles" },
    duration: "instantané",
    concentration: false,
    components: { verbal: true, somatic: true },
    tags: ["damage-lightning", "multi-target"],
    availableInEras: ["high-kingdoms"],
    shortSummary: "Un éclair bondit de cible en cible.",
    description:
      "Un arc électrique frappe une créature, puis saute vers deux autres cibles proches.",
  },

  {
    key: "flame_spear",
    name: "Lanceflamme",
    world: "fantasy",
    tier: "tier2",
    school: "pyromancy",
    castingTime: "action",
    range: { type: "line", value: "12m" },
    duration: "instantané",
    concentration: false,
    components: { verbal: true, somatic: true },
    tags: ["damage-fire", "line"],
    availableInEras: ["age-of-heroes"],
    shortSummary: "Un jet de flammes brûle tout sur son passage.",
    description:
      "Un souffle de feu concentré balaie une ligne droite de 12 mètres.",
  },

  {
    key: "gravity_pulse",
    name: "Impulsion Gravitationnelle",
    world: "fantasy",
    tier: "tier2",
    school: "aethercraft",
    castingTime: "action",
    range: { type: "sphere", value: "6m rayon" },
    duration: "instantané",
    concentration: false,
    components: { verbal: true, somatic: true },
    tags: ["damage", "control", "area-large"],
    availableInEras: ["arcane-renaissance"],
    shortSummary: "Un choc de gravité écrase les ennemis autour.",
    description:
      "Une onde écrasante de force modifie brutalement la gravité dans une zone.",
  },

  // ───────────────────────────────────────────────
  // TIER 3
  // ───────────────────────────────────────────────

  {
    key: "inferno_orb",
    name: "Orbe Infernal",
    world: "fantasy",
    tier: "tier3",
    school: "pyromancy",
    castingTime: "action",
    range: { type: "sphere", value: "18m" },
    duration: "instantané",
    concentration: false,
    components: { verbal: true, somatic: true, material: "poussière de soufre" },
    tags: ["damage-fire", "area-large"],
    availableInEras: ["high-kingdoms"],
    shortSummary: "Un orbe enflammé explose en un cercle incendiaire.",
    description:
      "Une boule de feu condensée explose, embrasant une large zone.",
    scaling: {
      upcastText: "+1d6 feu par tier au-dessus de tier3"
    }
  },

  {
    key: "frost_nova",
    name: "Nova de Givre",
    world: "fantasy",
    tier: "tier3",
    school: "frostbinding",
    castingTime: "action",
    range: { type: "radius", value: "9m" },
    duration: "instantané",
    concentration: false,
    components: { verbal: true, somatic: true },
    tags: ["damage-cold", "control", "area-large"],
    availableInEras: ["age-of-heroes"],
    shortSummary: "Une onde glacée explose du lanceur.",
    description:
      "Un choc glacial gèle l’air et ralentit toutes les créatures dans un rayon de 9 mètres.",
  },

  {
    key: "umbral_scream",
    name: "Hurlement Ombreux",
    world: "fantasy",
    tier: "tier3",
    school: "umbramancy",
    castingTime: "action",
    range: { type: "cone", value: "12m" },
    duration: "instantané",
    concentration: false,
    components: { verbal: true, somatic: true },
    tags: ["damage-necrotic", "fear", "cone"],
    availableInEras: ["dark-age"],
    shortSummary: "Un cri de pure ténèbre fait vaciller la volonté ennemie.",
    description:
      "Une onde vibrante d’ombre hurle dans un cône de 12 mètres, infligeant des dégâts nécrotiques et effrayant les créatures faibles.",
  },

  // ───────────────────────────────────────────────
  // TIER 4
  // ───────────────────────────────────────────────

  {
    key: "thunder_collapse",
    name: "Effondrement Tonitruant",
    world: "fantasy",
    tier: "tier4",
    school: "stormcalling",
    castingTime: "action",
    range: { type: "sphere", value: "18m" },
    duration: "instantané",
    concentration: false,
    components: { verbal: true, somatic: true },
    tags: ["damage-lightning", "area-large", "control"],
    availableInEras: ["high-kingdoms"],
    shortSummary: "Un tonnerre cataclysmique écrase une zone.",
    description:
      "Une colonne d’énergie orageuse s’abat depuis le ciel, brisant pierre, sol et os.",
  },

  {
    key: "molten_rift",
    name: "Faille de Magma",
    world: "fantasy",
    tier: "tier4",
    school: "pyromancy",
    castingTime: "action",
    range: { type: "line", value: "15m x 3m" },
    duration: "instantané",
    concentration: false,
    components: { verbal: true, somatic: true },
    tags: ["damage-fire", "area-large"],
    availableInEras: ["mythic-age"],
    shortSummary: "Une fissure de magma éclate dans le sol.",
    description:
      "Le sol s’ouvre, libérant une coulée de magma brûlant sur plusieurs mètres.",
  },

  // ───────────────────────────────────────────────
  // TIER 5
  // ───────────────────────────────────────────────

  {
    key: "meteor_fall",
    name: "Chute de Météore",
    world: "fantasy",
    tier: "tier5",
    school: "aethercraft",
    castingTime: "action",
    range: { type: "sphere", value: "36m" },
    duration: "instantané",
    concentration: false,
    components: { verbal: true, somatic: true },
    tags: ["damage", "area-large"],
    availableInEras: ["mythic-age"],
    shortSummary: "Un énorme météore arcane tombe du ciel.",
    description:
      "Un rocher incandescent renforcé d’énergie pure s’abat sur la zone ciblée.",
  },

  {
    key: "shadow_cataclysm",
    name: "Cataclysme Ombreux",
    world: "fantasy",
    tier: "tier5",
    school: "umbramancy",
    castingTime: "action",
    range: { type: "radius", value: "18m" },
    duration: "instantané",
    concentration: false,
    components: { verbal: true, somatic: true },
    tags: ["damage-necrotic", "area-large", "debuff"],
    availableInEras: ["dark-age", "mythic-age"],
    shortSummary: "Une explosion de ténèbres consume la zone.",
    description:
      "Un vortex d’ombre dévore l’énergie vitale de toutes les créatures dans la zone.",
  }
];
