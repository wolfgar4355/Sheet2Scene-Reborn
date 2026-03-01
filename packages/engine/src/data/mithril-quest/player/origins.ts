// @ts-nocheck
export interface MQMythicOrigin {
  key: string;
  label: string;
  description: string;
}

export const MQ_ORIGINS: MQMythicOrigin[] = [
  { key: "runeborn", label: "Runeborn", description: "Marqué par une rune antique." },
  { key: "voidmarked", label: "Voidmarked", description: "Touché par l’Éther ou le Néant." },
  { key: "astral_child", label: "Enfant Astral", description: "Né durant un alignement stellaire." },
  { key: "blessed", label: "Béni", description: "Protégé par une divinité mineure." },
  { key: "cursed", label: "Maudit", description: "Porte une malédiction ancienne." },
];
