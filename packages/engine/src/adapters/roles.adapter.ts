// src/adapters/roles.adapter.ts

import * as ROLES from "../content/fantasy/roles";

type Role = (typeof ROLES)[keyof typeof ROLES][number];

export function getAllRoles(): Role[] {
  return Object.values(ROLES).flat();
}
