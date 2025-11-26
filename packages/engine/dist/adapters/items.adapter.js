// src/adapters/items.adapter.ts
// ✔ PROD READY
// ✔ 0 alias
// ✔ Compatible avec toute ta structure Fantasy/items/
import * as ARMORS from "../content/fantasy/items/armors";
import * as ARTIFACTS from "../content/fantasy/items/artifacts";
import * as CONSUMABLES from "../content/fantasy/items/consumables";
import * as GEAR from "../content/fantasy/items/gear";
import * as INGREDIENTS from "../content/fantasy/items/ingredients";
import * as LOOT_TABLES from "../content/fantasy/items/loot-tables";
import * as WEAPONS from "../content/fantasy/items/weapons";
// SOURCES
import * as SRC_ACCESSORIES from "../content/fantasy/items/sources/accessories";
import * as SRC_ARMORS from "../content/fantasy/items/sources/armors";
import * as SRC_AXES from "../content/fantasy/items/sources/axes";
import * as SRC_BLADES from "../content/fantasy/items/sources/blades";
import * as SRC_BOWS from "../content/fantasy/items/sources/bows";
import * as SRC_CROSSBOWS from "../content/fantasy/items/sources/crossbows";
import * as SRC_DAGGERS from "../content/fantasy/items/sources/daggers";
import * as SRC_EXOTIC from "../content/fantasy/items/sources/exotic";
import * as SRC_FIREARMS from "../content/fantasy/items/sources/firearms";
import * as SRC_POLEARMS from "../content/fantasy/items/sources/polearms";
import * as SRC_PROFESSIONS from "../content/fantasy/items/sources/professions";
import * as SRC_SHIELDS from "../content/fantasy/items/sources/shields";
import * as SRC_THROWN from "../content/fantasy/items/sources/thrown";
import * as SRC_TOOLS from "../content/fantasy/items/sources/tools";
function normalize(module) {
    return Object.values(module);
}
export function getAllItems() {
    return [
        ...normalize(ARMORS),
        ...normalize(ARTIFACTS),
        ...normalize(CONSUMABLES),
        ...normalize(GEAR),
        ...normalize(INGREDIENTS),
        ...normalize(LOOT_TABLES),
        ...normalize(WEAPONS),
        // Sources
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
