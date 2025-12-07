// @ts-nocheck
import type { MQItemArtifact } from "../types";

export const MQ_ARTIFACTS_OCCULTS: MQItemArtifact[] = [
  {
    key: "voidblood_talisman",
    label: "Talisman of Voidblood",
    description:
      "A dark organic crystal carved into a talisman. It pulses like a living heart.",
    type: "artifact",
    category: "occult",
    subtype: "void",
    metadata: {
      rarity: "legendary",
      value: 9000,
      weight: 1,
      attunement: true,
      tags: ["occult", "void", "blood", "forbidden"],
    },
    effects: [
      "Manipulate blood at short range",
      "Brief vision into the Void (30 seconds)",
      "Partial immunity to minor curses",
    ],
  },

  {
    key: "soulchain_links",
    label: "Soulchain Links",
    description:
      "Spectral chain links that jingle even without physical contact.",
    type: "artifact",
    category: "occult",
    subtype: "spirit",
    metadata: {
      rarity: "very-rare",
      value: 5200,
      weight: 0,
      attunement: true,
      tags: ["occult", "spirit", "binding"],
    },
    effects: [
      "Can bind a wandering spirit for 24h",
      "Creates a small spectral whisper barrier",
    ],
  },

  {
    key: "whispering_skull",
    label: "Whispering Skull",
    description:
      "A cracked skull that sometimes whispers your name in an unknown tongue.",
    type: "artifact",
    category: "occult",
    subtype: "necrotic",
    metadata: {
      rarity: "rare",
      value: 3000,
      weight: 1,
      attunement: false,
      tags: ["occult", "necrotic", "spirit"],
    },
    effects: [
      "Detect the presence of undead",
      "Allows one question to a weak soul",
    ],
  },

  {
    key: "eldritch_eye",
    label: "Eldritch Eye",
    description:
      "A floating eyeball trapped inside a fractured glass sphere.",
    type: "artifact",
    category: "occult",
    subtype: "eldritch",
    metadata: {
      rarity: "very-rare",
      value: 7800,
      weight: 1,
      attunement: true,
      tags: ["occult", "eldritch", "insanity"],
    },
    effects: [
      "See in impossible angles",
      "Detect forbidden magic",
      "Glimpse into a foreign dimension",
    ],
  },

  {
    key: "voidharp_strings",
    label: "Voidharp Strings",
    description:
      "Translucent strings vibrating with a sound that shouldn't exist.",
    type: "artifact",
    category: "occult",
    subtype: "sound",
    metadata: {
      rarity: "rare",
      value: 2400,
      weight: 0,
      attunement: false,
      tags: ["occult", "sound", "void"],
    },
    effects: [
      "Inflicts a paralyzing chill on nearby creatures",
      "Amplifies sound-based magic",
    ],
  },

  {
    key: "shadowgrasp_cloak",
    label: "Shadowgrasp Cloak",
    description:
      "A cloak woven from liquid shadows trying to swallow nearby light.",
    type: "artifact",
    category: "occult",
    subtype: "shadow",
    metadata: {
      rarity: "very-rare",
      value: 6800,
      weight: 2,
      attunement: true,
      tags: ["occult", "shadow", "dark"],
    },
    effects: [
      "Perfect camouflage in darkness",
      "Extend a shadow tendril to immobilize a target",
    ],
  },

  {
    key: "nightmare_idol",
    label: "Nightmare Idol",
    description:
      "A screaming stone idol carved with shifting, impossible shapes.",
    type: "artifact",
    category: "occult",
    subtype: "fear",
    metadata: {
      rarity: "legendary",
      value: 12000,
      weight: 5,
      attunement: true,
      tags: ["occult", "fear", "insanity"],
    },
    effects: [
      "Induces paralyzing nightmares in a chosen target",
      "Protection against minor illusions",
    ],
  },

  {
    key: "ashen_tongue",
    label: "Ashen Tongue",
    description:
      "A fossilized organ radiating a sinister, dry heat.",
    type: "artifact",
    category: "occult",
    subtype: "curse",
    metadata: {
      rarity: "rare",
      value: 3500,
      weight: 0,
      attunement: false,
      tags: ["occult", "curse", "fire"],
    },
    effects: [
      "Speak an ancient Void-tongue",
      "Ignite spoken lies within hearing range",
    ],
  },

  {
    key: "voidglass_shard",
    label: "Voidglass Shard",
    description:
      "A glass-like fragment reflecting things that aren't present.",
    type: "artifact",
    category: "occult",
    subtype: "void",
    metadata: {
      rarity: "very-rare",
      value: 7100,
      weight: 0,
      attunement: true,
      tags: ["occult", "void", "mirror"],
    },
    effects: [
      "Shows an alternate version of the wielder",
      "Absorb one low-level spell",
    ],
  },

  {
    key: "abyssal_relic",
    label: "Abyssal Relic",
    description:
      "A heavy stone engraved with writhing abyss glyphs, exuding pressure.",
    type: "artifact",
    category: "occult",
    subtype: "abyss",
    metadata: {
      rarity: "mythic",
      value: 18000,
      weight: 8,
      attunement: true,
      tags: ["occult", "abyss", "mythic"],
    },
    effects: [
      "Open a tiny abyssal rift for 10 seconds",
      "Major resistance to necrotic damage",
      "Permanent risk of mind corruption",
    ],
  },
];
