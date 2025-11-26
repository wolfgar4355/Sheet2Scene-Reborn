// src/adapters/roles.adapter.ts
import * as ROLES from "../content/fantasy/roles";
export function getAllRoles() {
    return Object.values(ROLES).flat();
}
