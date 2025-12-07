// @ts-nocheck
import type { MQItemArtifact } from "../types";

export const MQ_ARTIFACTS_FORBIDDEN: MQItemArtifact[] = [
  {
    key: "heart_of_the_unmaker",
    label: "Heart of the Unmaker",
    description:
      "A warped crystalline organ that beats backwards in time. Each pulse distorts the air.",
    type: "artifact",
    category: "forbidden",
    subtype: "entropy",
    metadata: {
      rarity: "mythic",
      value: 22000,
      weight: 1,
      attunement: true,
      tags: ["forbidden", "entropy", "void", "time"],
    },
    effects: [
      "Rewind a single action (once per long rest)",
      "Weakens dimensional boundaries around the user",
      "Slowly erodes living essence (corruption risk)",
    ],
  },

  {
    key: "book_of_shattered_truths",
    label: "Book of Shattered Truths",
    description:
      "A tome written in a language that rearranges itself every time it is read.",
    type: "artifact",
    category: "forbidden",
    subtype: "eldritch",
    metadata: {
      rarity: "legendary",
      value: 15000,
      weight: 5,
      attunement: true,
      tags: ["forbidden", "eldritch", "insanity", "knowledge"],
    },
    effects: [
      "Gain hidden knowledge at the cost of sanity",
      "Cast an eldritch spell once per day (random effect)",
      "Reading too long causes psychic fractures",
    ],
  },

  {
    key: "crown_of_the_devourer",
    label: "Crown of the Devourer",
    description:
      "A crown made of bone and metal, humming with the hunger of something ancient.",
    type: "artifact",
    category: "forbidden",
    subtype: "hunger",
    metadata: {
      rarity: "mythic",
      value: 28000,
      weight: 3,
      attunement: true,
      tags: ["forbidden", "cursed", "devourer"],
    },
    effects: [
      "Absorb life from a creature on touch",
      "Double damage for one attack per day",
      "Wearer becomes increasingly ravenous for souls",
    ],
  },

  {
    key: "ashen_phylactery",
    label: "Ashen Phylactery",
    description:
      "A shattered soul vessel leaking grey embers that burn without heat.",
    type: "artifact",
    category: "forbidden",
    subtype: "necrotic",
    metadata: {
      rarity: "very-rare",
      value: 9500,
      weight: 1,
      attunement: false,
      tags: ["forbidden", "necrotic", "soul"],
    },
    effects: [
      "Store the soul of a dying creature for 24h",
      "Resurrect the stored soul at a cost",
      "Phylactery whispers to nearby undead",
    ],
  },

  {
    key: "seal_of_the_black_star",
    label: "Seal of the Black Star",
    description:
      "A metallic sigil engraved with a star that should not exist. It absorbs starlight.",
    type: "artifact",
    category: "forbidden",
    subtype: "stellar",
    metadata: {
      rarity: "legendary",
      value: 17000,
      weight: 0,
      attunement: true,
      tags: ["forbidden", "cosmic", "void"],
    },
    effects: [
      "Nullify a spell by collapsing its energy",
      "Grant brief cosmic awareness (dangerous)",
      "Slowly drains magical energy from surroundings",
    ],
  },

  {
    key: "mask_of_the_nameless",
    label: "Mask of the Nameless",
    description:
      "A faceless mask that erases reflections, memories and even voices.",
    type: "artifact",
    category: "forbidden",
    subtype: "identity",
    metadata: {
      rarity: "rare",
      value: 6000,
      weight: 1,
      attunement: true,
      tags: ["forbidden", "identity", "stealth"],
    },
    effects: [
      "Become unnoticeable by non-magical senses",
      "Hide your identity from divination",
      "Risk slowly losing your own identity",
    ],
  },

  {
    key: "sorrow_engine",
    label: "Sorrow Engine",
    description:
      "A mechanical heart pulsating with compressed grief. Its ticking echoes like a sob.",
    type: "artifact",
    category: "forbidden",
    subtype: "emotion",
    metadata: {
      rarity: "very-rare",
      value: 8000,
      weight: 4,
      attunement: false,
      tags: ["forbidden", "emotion", "psychic"],
    },
    effects: [
      "Unleash a wave of despair (20ft radius)",
      "Weaken enemy morale drastically",
      "Extended use causes deep melancholy",
    ],
  },

  {
    key: "serpent_scripture",
    label: "Serpent Scripture",
    description:
      "A long scroll made from an unknown scale-like material, coiling on its own.",
    type: "artifact",
    category: "forbidden",
    subtype: "curse",
    metadata: {
      rarity: "rare",
      value: 5400,
      weight: 1,
      attunement: true,
      tags: ["forbidden", "curse", "venom"],
    },
    effects: [
      "Enhance poison spells and attacks",
      "Summon a spectral serpent (1/day)",
      "Reading too far applies a venomous curse",
    ],
  },

  {
    key: "black_vessel",
    label: "Black Vessel",
    description:
      "A voidlike urn that contains swirling shadows and faint screams.",
    type: "artifact",
    category: "forbidden",
    subtype: "void",
    metadata: {
      rarity: "legendary",
      value: 16000,
      weight: 3,
      attunement: true,
      tags: ["forbidden", "void", "soul"],
    },
    effects: [
      "Absorb a dying creature’s soul",
      "Release a soul blast dealing heavy necrotic damage",
      "Risk opening a small uncontrolled rift",
    ],
  },

  {
    key: "crimson_contract",
    label: "Crimson Contract",
    description:
      "A blood-written parchment that cannot be destroyed by conventional means.",
    type: "artifact",
    category: "forbidden",
    subtype: "pact",
    metadata: {
      rarity: "mythic",
      value: 24000,
      weight: 0,
      attunement: true,
      tags: ["forbidden", "pact", "blood"],
    },
    effects: [
      "Bind a target to an unbreakable pact",
      "Gain immense temporary power at a cost",
      "Breaking the pact invites catastrophic consequences",
    ],
  },
];
