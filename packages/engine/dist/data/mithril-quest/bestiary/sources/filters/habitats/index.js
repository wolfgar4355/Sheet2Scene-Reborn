// @ts-nocheck
// ===============================
// Sheet2Scene — Habitat Index
// ===============================
export * from "./abyss";
export * from "./arcane";
export * from "./artic";
export * from "./astral";
export * from "./blight";
export * from "./caves";
export * from "./civilized";
export * from "./coast";
export * from "./crypt";
export * from "./desert";
export * from "./dungeon";
export * from "./elemental";
export * from "./ethereal";
export * from "./feywild";
export * from "./forest";
export * from "./graveyard";
export * from "./hills";
export * from "./infernal";
export * from "./jungle";
export * from "./mountains";
export * from "./necrotic-wastes";
export * from "./ocean";
export * from "./plains";
export * from "./ruins";
export * from "./shadowlands";
export * from "./swamps";
export * from "./underdark";
// ===============================
// Import all habitat arrays
// ===============================
import { ABYSS_HABITATS } from "./abyss";
import { ARCANE_HABITATS } from "./arcane";
import { ARTIC_HABITATS } from "./artic";
import { ASTRAL_HABITATS } from "./astral";
import { BLIGHT_HABITATS } from "./blight";
import { CAVES_HABITATS } from "./caves";
import { CIVILIZED_HABITATS } from "./civilized";
import { COAST_HABITATS } from "./coast";
import { CRYPT_HABITATS } from "./crypt";
import { DESERT_HABITATS } from "./desert";
import { DUNGEON_HABITATS } from "./dungeon";
import { ELEMENTAL_HABITATS } from "./elemental";
import { ETHEREAL_HABITATS } from "./ethereal";
import { FEYWILD_HABITATS } from "./feywild";
import { FOREST_HABITATS } from "./forest";
import { GRAVEYARD_HABITATS } from "./graveyard";
import { HILLS_HABITATS } from "./hills";
import { INFERNAL_HABITATS } from "./infernal";
import { JUNGLE_HABITATS } from "./jungle";
import { MOUNTAIN_HABITATS } from "./mountains";
import { NECROTIC_WASTES_HABITATS } from "./necrotic-wastes";
import { OCEAN_HABITATS } from "./ocean";
import { PLAINS_HABITATS } from "./plains";
import { RUINS_HABITATS } from "./ruins";
import { SHADOWLANDS_HABITATS } from "./shadowlands";
import { SWAMP_HABITATS } from "./swamps";
import { UNDERDARK_HABITATS } from "./underdark";
// ===============================
// Grouping for engines
// ===============================
export const HABITAT_GROUPS = {
    abyss: ABYSS_HABITATS,
    arcane: ARCANE_HABITATS,
    artic: ARTIC_HABITATS,
    astral: ASTRAL_HABITATS,
    blight: BLIGHT_HABITATS,
    caves: CAVES_HABITATS,
    civilized: CIVILIZED_HABITATS,
    coast: COAST_HABITATS,
    crypt: CRYPT_HABITATS,
    desert: DESERT_HABITATS,
    dungeon: DUNGEON_HABITATS,
    elemental: ELEMENTAL_HABITATS,
    ethereal: ETHEREAL_HABITATS,
    feywild: FEYWILD_HABITATS,
    forest: FOREST_HABITATS,
    graveyard: GRAVEYARD_HABITATS,
    hills: HILLS_HABITATS,
    infernal: INFERNAL_HABITATS,
    jungle: JUNGLE_HABITATS,
    mountains: MOUNTAIN_HABITATS,
    "necrotic-wastes": NECROTIC_WASTES_HABITATS,
    ocean: OCEAN_HABITATS,
    plains: PLAINS_HABITATS,
    ruins: RUINS_HABITATS,
    shadowlands: SHADOWLANDS_HABITATS,
    swamps: SWAMP_HABITATS,
    underdark: UNDERDARK_HABITATS,
};
// ===============================
// All habitats merged
// ===============================
export const ALL_HABITATS = [
    ...ABYSS_HABITATS,
    ...ARCANE_HABITATS,
    ...ARTIC_HABITATS,
    ...ASTRAL_HABITATS,
    ...BLIGHT_HABITATS,
    ...CAVES_HABITATS,
    ...CIVILIZED_HABITATS,
    ...COAST_HABITATS,
    ...CRYPT_HABITATS,
    ...DESERT_HABITATS,
    ...DUNGEON_HABITATS,
    ...ELEMENTAL_HABITATS,
    ...ETHEREAL_HABITATS,
    ...FEYWILD_HABITATS,
    ...FOREST_HABITATS,
    ...GRAVEYARD_HABITATS,
    ...HILLS_HABITATS,
    ...INFERNAL_HABITATS,
    ...JUNGLE_HABITATS,
    ...MOUNTAIN_HABITATS,
    ...NECROTIC_WASTES_HABITATS,
    ...OCEAN_HABITATS,
    ...PLAINS_HABITATS,
    ...RUINS_HABITATS,
    ...SHADOWLANDS_HABITATS,
    ...SWAMP_HABITATS,
    ...UNDERDARK_HABITATS,
];
