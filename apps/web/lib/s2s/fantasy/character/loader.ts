import type { WorldKey } from "../worlds";
import {
  createEmptyFantasySheet,
  DEFAULT_FANTASY_SHEET,
  type FantasyCharacterSheet,
} from "../fantasy/character/types";
import { getFantasySheetSchema } from "../fantasy/character/schema";

export type AnyCharacterSheet = FantasyCharacterSheet;

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

// ----- LOADER -----

export function loadEmptyCharacterSheet(
  world: WorldKey,
  id: string,
  subworldKey?: string
): LoadedSheet {
  switch (world) {
    case "fantasy": {
      const variant = subworldKey ?? "core";
      const sheet = createEmptyFantasySheet(id);
      const schema = getFantasySheetSchema(variant);
      return { world, sheet, schema };
    }

    default:
      throw new Error(`Fiche de personnage non implémentée pour le monde: ${world}`);
  }
}

export function loadExistingCharacterSheet(
  world: WorldKey,
  data: AnyCharacterSheet,
  subworldKey?: string
): LoadedSheet {
  switch (world) {
    case "fantasy": {
      const variant = subworldKey ?? "core";
      const schema = getFantasySheetSchema(variant);
      return { world, sheet: data, schema };
    }

    default:
      throw new Error(`Fiche de personnage non implémentée pour le monde: ${world}`);
  }
}
