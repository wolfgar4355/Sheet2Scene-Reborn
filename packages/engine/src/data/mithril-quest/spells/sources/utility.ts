// @ts-nocheck
// utility.ts – Sorts utilitaires & exploration MQ (Mithril-Quest)

import type { Spell } from "./schema";

export const UTILITY_SPELLS: Spell[] = [
  //
  // TIER 0 — Utilitaires simples
  //
  {
    key: "mage_light",
    name: "Lumière du Mage",
    world: "mithril-quest",
    tier: "cantrip",
    school: "aethercraft",
    castingTime: "action",
    range: { type: "touch", value: "objet touché" },
    duration: "1 heure",
    concentration: false,
    components: { verbal: true, somatic: true },
    tags: ["vision"],
    availableInEras: ["ancient-age", "age-of-heroes"],
    shortSummary:
      "Fait briller un objet comme une torche douce.",
    description:
      "Le sort imprègne un objet d’une lueur stable, permettant d’explorer les cavernes ou de lire "
      + "dans l’obscurité sans fumée ni chaleur."
  },
  {
    key: "minor_telekinesis",
    name: "Télékinésie Mineure",
    world: "mithril-quest",
    tier: "cantrip",
    school: "aethercraft",
    castingTime: "action",
    range: { type: "line", value: "9 m" },
    duration: "1 round",
    concentration: true,
    components: { verbal: true, somatic: true },
    tags: ["movement"],
    availableInEras: ["high-kingdoms"],
    shortSummary:
      "Déplace brièvement de petits objets à distance.",
    description:
      "Le lanceur peut soulever ou tirer un objet léger à portée, ouvrir une porte déverrouillée "
      + "ou renverser un petit récipient sans le toucher."
  },

  //
  // TIER 1 — Exploration
  //
  {
    key: "detect_magic_mq",
    name: "Détection de Magie MQ",
    world: "mithril-quest",
    tier: "tier1",
    school: "aethercraft",
    castingTime: "action",
    range: { type: "radius", value: "9 m" },
    duration: "10 minutes",
    concentration: true,
    components: { verbal: true, somatic: true },
    tags: ["vision"],
    availableInEras: ["age-of-heroes", "high-kingdoms"],
    shortSummary:
      "Révèle les auras magiques autour du lanceur.",
    description:
      "Les flux arcaniques deviennent visibles sous la forme de filaments colorés, indiquant la présence "
      + "d’objets magiques, de glyphes ou de créatures imprégnées de pouvoir."
  },
  {
    key: "whispering_step",
    name: "Pas Murmurant",
    world: "mithril-quest",
    tier: "tier1",
    school: "mindweave",
    castingTime: "bonus-action",
    range: { type: "self", value: "—" },
    duration: "1 minute",
    concentration: true,
    components: { verbal: false, somatic: true },
    tags: ["movement", "buff-utility"],
    availableInEras: ["dark-age", "high-kingdoms"],
    shortSummary:
      "Assourdit les pas et rend la démarche plus discrète.",
    description:
      "Une fine pellicule psychique amortit les sons produits par le lanceur, facilitant les déplacements "
      + "furtifs, surtout dans les couloirs ou les ruelles calmes."
  },

  //
  // TIER 2 — Transport & support
  //
  {
    key: "veil_of_silence",
    name: "Voile de Silence",
    world: "mithril-quest",
    tier: "tier2",
    school: "mindweave",
    castingTime: "action",
    range: { type: "radius", value: "6 m" },
    duration: "10 minutes",
    concentration: true,
    components: { verbal: true, somatic: true },
    tags: ["control", "buff-utility", "area-large"],
    availableInEras: ["dark-age"],
    shortSummary:
      "Crée une bulle où aucun son ne franchit les limites.",
    description:
      "Les conversations à l’intérieur du voile ne peuvent pas être entendues depuis l’extérieur, "
      + "et les bruits entrants sont également étouffés, offrant une excellente discrétion… ou un piège silencieux."
  },
  {
    key: "wind_step",
    name: "Foulée du Vent",
    world: "mithril-quest",
    tier: "tier2",
    school: "stormcalling",
    castingTime: "bonus-action",
    range: { type: "self", value: "—" },
    duration: "1 minute",
    concentration: true,
    components: { verbal: true, somatic: true },
    tags: ["movement", "buff-utility"],
    availableInEras: ["age-of-heroes", "high-kingdoms"],
    shortSummary:
      "Augmente considérablement la vitesse de déplacement.",
    description:
      "Des bourrasques invisibles poussent le lanceur vers l’avant, lui permettant de couvrir rapidement "
      + "une grande distance, de bondir par-dessus des obstacles ou de se replier en sécurité."
  },

  //
  // TIER 3 — Téléportation & grands déplacements
  //
  {
    key: "blink_stride",
    name: "Foulée Scintillante",
    world: "mithril-quest",
    tier: "tier3",
    school: "aethercraft",
    castingTime: "bonus-action",
    range: { type: "self", value: "—" },
    duration: "1 round",
    concentration: false,
    components: { verbal: true, somatic: true },
    tags: ["teleport", "movement"],
    availableInEras: ["high-kingdoms"],
    shortSummary:
      "Le lanceur se téléporte sur une courte distance.",
    description:
      "En un clignement d’œil, le mage disparaît dans une étincelle bleutée et réapparaît quelques mètres "
      + "plus loin, évitant parfois une attaque ou traversant un obstacle léger."
  },
  {
    key: "group_pathway",
    name: "Passage de Groupe",
    world: "mithril-quest",
    tier: "tier3",
    school: "terraforge",
    castingTime: "minute",
    range: { type: "radius", value: "9 m" },
    duration: "10 minutes",
    concentration: true,
    components: { verbal: true, somatic: true },
    tags: ["movement", "buff-utility", "area-large"],
    availableInEras: ["high-kingdoms", "mythic-age"],
    shortSummary:
      "Aplanit le terrain et crée un chemin sûr pour un groupe.",
    description:
      "Le sol se nivelle, les pierres se rangent sur le côté et les épines reculent, traçant un couloir "
      + "de marche claire qui suit les pas du groupe pendant toute la durée du sort."
  },

  //
  // TIER 4 — Rituels utilitaires puissants
  //
  {
    key: "sanctum_sigil",
    name: "Sigil de Sanctuaire",
    world: "mithril-quest",
    tier: "tier4",
    school: "spiritbond",
    castingTime: "hour",
    range: { type: "radius", value: "18 m" },
    duration: "24 heures",
    concentration: false,
    components: {
      verbal: true,
      somatic: true,
      material: "encens rare et craie consacrée"
    },
    tags: ["buff-defense", "ritual", "area-large"],
    availableInEras: ["mythic-age"],
    shortSummary:
      "Consacre un lieu, rendant plus difficile toute intrusion hostile.",
    description:
      "Le sol est marqué de glyphes lumineux. Les créatures hostiles ressentent un malaise en entrant, "
      + "tandis que les alliés bénéficient d’un léger sentiment de sécurité et de clarté d’esprit."
  }
];
