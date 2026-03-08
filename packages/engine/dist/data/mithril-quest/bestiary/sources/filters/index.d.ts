import * as biomes from "./biomes";
import * as categories from "./categories";
import * as encounters from "./encounters";
import * as factions from "./factions";
import * as habitats from "./habitats";
import * as types from "./types";
export declare const FILTERS: {
    readonly biomes: typeof biomes;
    readonly categories: typeof categories;
    readonly encounters: typeof encounters;
    readonly factions: typeof factions;
    readonly habitats: typeof habitats;
    readonly types: typeof types;
};
export type FilterRegistry = typeof FILTERS;
