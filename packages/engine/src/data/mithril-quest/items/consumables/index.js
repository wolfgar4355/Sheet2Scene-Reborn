// @ts-nocheck
// ============================================================================
// MQ ENGINE — ITEMS / CONSUMABLES — INDEX
// ============================================================================
// Ce fichier centralise tous les consommables MQ :
// - Potions
// - Parchemins (scrolls)
// - Future extensions : bombes, huiles, encens, fioles magiques…
// ============================================================================
import { MQ_POTIONS } from "./potions";
import { MQ_SCROLLS } from "./scrolls";
// ============================================================================
// TABLEAU GLOBAL
// ============================================================================
export const MQ_CONSUMABLES = [
    ...MQ_POTIONS,
    ...MQ_SCROLLS,
];
// ============================================================================
// EXPORT STRUCTURÉ
// ============================================================================
export const MQ_CONSUMABLES_BY_TYPE = {
    potions: MQ_POTIONS,
    scrolls: MQ_SCROLLS,
};
// ============================================================================
// UTILITAIRES (optionnel mais utile partout)
// ============================================================================
export const findConsumable = (key) => MQ_CONSUMABLES.find((c) => c.key === key);
export const filterConsumablesByTag = (tag) => MQ_CONSUMABLES.filter((c) => c.metadata?.tags?.includes(tag));
// ============================================================================
export default MQ_CONSUMABLES;
