// src/adapters/items.adapter.ts
// ------------------------------------------------------
// Mithril-Quest Items Adapter
// - Compatible avec toute la structure MQ/items
// - Version clean & stable
// ------------------------------------------------------
import * as ARMORS from "../data/mithril-quest/items/armors";
import * as ARTIFACTS from "../data/mithril-quest/items/artifacts";
import * as CONSUMABLES from "../data/mithril-quest/items/consumables";
import * as GEAR from "../data/mithril-quest/items/gear";
import * as INGREDIENTS from "../data/mithril-quest/items/ingredients";
import * as LOOT_TABLES from "../data/mithril-quest/items/loot-tables";
import * as WEAPONS from "../data/mithril-quest/items/weapons";
// -----------------------------
// Sources (armes + équipements)
// -----------------------------
import * as SRC_ACCESSORIES from "../data/mithril-quest/items/sources/accessories";
import * as SRC_ARMORS from "../data/mithril-quest/items/sources/armors";
import * as SRC_AXES from "../data/mithril-quest/items/sources/axes";
import * as SRC_BLADES from "../data/mithril-quest/items/sources/blades";
import * as SRC_BOWS from "../data/mithril-quest/items/sources/bows";
import * as SRC_CROSSBOWS from "../data/mithril-quest/items/sources/crossbows";
import * as SRC_DAGGERS from "../data/mithril-quest/items/sources/daggers";
import * as SRC_EXOTIC from "../data/mithril-quest/items/sources/exotic";
import * as SRC_FIREARMS from "../data/mithril-quest/items/sources/firearms";
import * as SRC_POLEARMS from "../data/mithril-quest/items/sources/polearms";
import * as SRC_PROFESSIONS from "../data/mithril-quest/items/sources/professions";
import * as SRC_SHIELDS from "../data/mithril-quest/items/sources/shields";
import * as SRC_THROWN from "../data/mithril-quest/items/sources/thrown";
import * as SRC_TOOLS from "../data/mithril-quest/items/sources/tools";
// Convertit n'importe quel module MQ en tableau strictement typé Item[]
function normalize(module) {
    return Object.values(module || {});
}
// ------------------------------------------------------
// API : retourne TOUS les items du monde Mithril-Quest
// ------------------------------------------------------
export function getAllItems() {
    return [
        // Familles principales
        ...normalize(ARMORS),
        ...normalize(ARTIFACTS),
        ...normalize(CONSUMABLES),
        ...normalize(GEAR),
        ...normalize(INGREDIENTS),
        ...normalize(LOOT_TABLES),
        ...normalize(WEAPONS),
        // Sources détaillées
        ...normalize(SRC_ACCESSORIES),
        ...normalize(SRC_ARMORS),
        ...normalize(SRC_AXES),
        ...normalize(SRC_BLADES),
        ...normalize(SRC_BOWS),
        ...normalize(SRC_CROSSBOWS),
        ...normalize(SRC_DAGGERS),
        ...normalize(SRC_EXOTIC),
        ...normalize(SRC_FIREARMS),
        ...normalize(SRC_POLEARMS),
        ...normalize(SRC_PROFESSIONS),
        ...normalize(SRC_SHIELDS),
        ...normalize(SRC_THROWN),
        ...normalize(SRC_TOOLS),
    ];
}
