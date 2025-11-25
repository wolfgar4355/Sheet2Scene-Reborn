import * as MQ_SPELLS from "./content/fantasy/spells/index";

export function getAllSpells() {
  return Object.values(MQ_SPELLS).flat();
}
