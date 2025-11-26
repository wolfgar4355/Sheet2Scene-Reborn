// src/adapters/habitats.adapter.ts
import HABITATS from "../content/fantasy/habitats";

export type Habitat = (typeof HABITATS)[number];

export function getAllHabitats(): Habitat[] {
  return [...HABITATS];
}
