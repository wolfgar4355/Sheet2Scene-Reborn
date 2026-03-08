// apps/web/app/create/options.ts

export type WorldKey = "galactic" | "fantasy" | "pathseeker" | "darknight";

export type Era = { key: string; label: string };
export type Cls = { key: string; label: string };

export const WORLDS: Record<
  WorldKey,
  { label: string; eras: Era[]; classes: Cls[] }
> = {
  galactic: {
    label: "Galactic Saga",
    eras: [
      { key: "nova-republic", label: "Nova Republic" },
      { key: "ancient-commonwealth", label: "Ancient Commonwealth" },
      { key: "meridian-epoch", label: "Meridian Epoch" },
      { key: "synthetic-uprising", label: "Synthetic Uprising" },
    ],
    classes: [
      { key: "smuggler", label: "Contrebandier (Smuggler)" },
      { key: "light-order-adept", label: "Adepte de l'Ordre Lumineux" },
      { key: "void-mystic", label: "Mystique du Vide" },
      { key: "sovereign-legionnaire", label: "Légionnaire Souverain" },
      { key: "star-pilot", label: "Pilote Stellaire" },
    ],
  },
  fantasy: {
    label: "Mithril Quest (Fantasy)",
    eras: [
      { key: "medieval-high", label: "Fantasy Médiévale Classique" },
      { key: "dark-ages", label: "Âges Sombres (Grimdark)" },
      { key: "renaissance", label: "Renaissance Arcanique" },
    ],
    classes: [
      { key: "druid", label: "Druide" },
      { key: "ranger", label: "Rôdeur" },
      { key: "monk", label: "Moine" },
      { key: "archmage", label: "Archimage" },
    ],
  },
  pathseeker: {
    label: "Pathseeker",
    eras: [
      { key: "prime-era", label: "Ère Prime" },
      { key: "ruins-age", label: "Âge des Ruines" },
    ],
    classes: [
      { key: "warden", label: "Warden (Gardien)" },
      { key: "spellblade", label: "Spellblade (Lame-sort)" },
    ],
  },
  darknight: {
    label: "Darknight Chronicles",
    eras: [
      { key: "nocturne", label: "L'Âge Nocturne" },
      { key: "fall", label: "La Chute" },
    ],
    classes: [
      { key: "vigil", label: "Vigilant" },
      { key: "occultist", label: "Occultiste" },
    ],
  },
};

export const POSES = [
  { key: "fight", label: "Combat Épique" },
  { key: "rest", label: "Halte / Auberge" },
  { key: "cast", label: "Incantation Magique" },
  { key: "explore", label: "Exploration Profonde" },
] as const;
