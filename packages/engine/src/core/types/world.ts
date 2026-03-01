// packages/engine/src/core/types/world.ts

/**
 * Monde déclaré dans Mithril Engine.
 * Chaque univers (Mithril-Quest, Darknight, Galactic Saga, Pathseeker)
 * est un MithrilWorld.
 */
export interface MithrilWorld {
  /** Identifiant stable utilisé partout (URL, DB, etc.) */
  id: string;          // ex: "mithril-quest", "darknight", "galactic-saga", "pathseeker"

  /** Clé courte pratique */
  key: string;         // ex: "mq", "dn", "gs", "ps"

  /** Nom affiché */
  label: string;

  /** Description courte */
  description?: string;

  /** Tags pour filtrer / UI */
  tags?: string[];

  /** Liste d'époques / périodes principales de ce monde */
  eras?: string[];

  /** Type principal de monde (juste pour filtrage UI/analytics) */
  worldType?: "fantasy" | "gothic" | "sci-fi" | "survival" | "other";

  /** Extensible sans casser le typage */
  [extra: string]: unknown;
}

export type MithrilWorldId = MithrilWorld["id"];
