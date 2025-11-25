// packages/engine/src/adapters/spells.adapter.ts
import * as SPELLS from "../content/fantasy/spells";
import type { Spell } from "../types"; // adapte le nom si ton type est différent

export function getAllSpells(): Spell[] {
  return Object.values(SPELLS).flat() as Spell[];
}
