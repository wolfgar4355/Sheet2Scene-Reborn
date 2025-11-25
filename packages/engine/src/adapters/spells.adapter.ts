// src/adapters/spells.adapter.ts

import * as SPELLS from "../content/fantasy/spells";

export function getAllSpells() {
  return Object.values(SPELLS).flat();
}
