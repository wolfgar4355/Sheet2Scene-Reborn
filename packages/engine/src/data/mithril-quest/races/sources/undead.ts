// @ts-nocheck
// UNDEAD — Morts-vivants jouables MQ

export const MQ_RACES_UNDEAD = [
  {
    key: "revenant",
    label: "Revenant",
    description: "Animés par une volonté inébranlable, ils reviennent pour accomplir un destin.",
    traits: ["Résilience immortelle", "Vision spectrale", "Volonté de fer"]
  },

  {
    key: "dhampir",
    label: "Dhampir",
    description: "Entre deux mondes, ils sont liés à une lignée vampirique.",
    traits: ["Morsure vampirique", "Agilité préternaturelle", "Endurance surnaturelle"]
  },

  {
    key: "spectravel",
    label: "Spectravel",
    description: "Êtres partiellement immatériels, oscillant entre vie et éther.",
    traits: ["Lévitation légère", "Passage éthéré", "Perception astrale"]
  }
] as const;

// Type MQ
export type MQRaceUndead = (typeof MQ_RACES_UNDEAD)[number];
