// packages/engine/src/data/pathseeker/worlds.ts

export type PSWorldId = "pathseeker-core";

export interface PSWorld {
  id: PSWorldId;
  slug: string;
  name: string;
  theme: "wanderer";
  description: string;
}

export const PATHSEEKER_WORLDS: PSWorld[] = [
  {
    id: "pathseeker-core",
    slug: "pathseeker-core",
    name: "Pathseeker",
    theme: "wanderer",
    description:
      "Monde d’exploration et de quête intérieure : routes anciennes, sanctuaires oubliés, esprits-guides et brumes mystiques.",
  },
];

export default PATHSEEKER_WORLDS;
