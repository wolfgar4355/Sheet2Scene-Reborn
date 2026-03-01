export * from "./defense";
export * from "./healing";
export * from "./offense";
export * from "./utility";
import type { Spell } from "../schema";
export declare const ALL_SPELLS: Spell[];
export type AnySpell = (typeof ALL_SPELLS)[number];
