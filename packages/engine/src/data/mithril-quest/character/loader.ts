// @ts-nocheck
// character/loader.ts — Version Mithril-Quest

import type { WorldKey } from "../worlds";

import {
  createEmptyMQSheet,
  DEFAULT_MQ_SHEET,
  type MQCharacterSheet,
} from "./types";

import { getMQSheetSchema } from "../mithril-quest/character/schema";

// Tous les types de fiches utilisables dans S2S
export type AnyCharacterSheet = MQCharacterSheet;

// Description du schéma JSON utilisé par l’UI
export interface CharacterSheetSchema {
  sections: {
    key: string;
    label: string;
    description?: string;
    fields: {
      path: string;
      type: "text" | "number" | "textarea" | "select";
      width?: "full" | "half";
      options?: { value: string; label: string }[];
    }[];
  }[];
}

export interface LoadedSheet {
  world: WorldKey;
  sheet: AnyCharacterSheet;
  schema: CharacterSheetSchema;
}

// ============================================================================
// 🧩 LOADER — FICHE VIDE
// ============================================================================

export function loadEmptyCharacterSheet(
  world: WorldKey,
  id: string,
  subworldKey?: string
): LoadedSheet {
  switch (world) {
    case "mithril-quest": {
      const variant = subworldKey ?? "core";
      const sheet = createEmptyMQSheet(id);
      const schema = getMQSheetSchema(variant);
      return { world, sheet, schema };
    }

    default:
      throw new Error(
        `Fiche de personnage non implémentée pour le monde: ${world}`
      );
  }
}

// ============================================================================
// 🧩 LOADER — FICHE EXISTANTE
// ============================================================================

export function loadExistingCharacterSheet(
  world: WorldKey,
  data: AnyCharacterSheet,
  subworldKey?: string
): LoadedSheet {
  switch (world) {
    case "mithril-quest": {
      const variant = subworldKey ?? "core";
      const schema = getMQSheetSchema(variant);
      return { world, sheet: data, schema };
    }

    default:
      throw new Error(
        `Fiche de personnage non implémentée pour le monde: ${world}`
      );
  }
}
