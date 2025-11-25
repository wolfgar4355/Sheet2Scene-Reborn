// src/adapters/habitats.adapter.ts

import * as HABITATS from "../content/fantasy/habitats";

export function getAllHabitats() {
  return Object.values(HABITATS);
}
