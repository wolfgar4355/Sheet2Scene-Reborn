// packages/engine/src/mithril-quest/agents.ts

import { MITHRIL_QUEST_WORLD_ID } from "./worlds";
import { registry as BaseRegistry } from "../agents/registry"; // ou l’export réel

export const MQ_AGENTS = BaseRegistry.map((agent: any) => ({
  ...agent,
  worlds: agent.worlds ?? [MITHRIL_QUEST_WORLD_ID],
}));

export function getMithrilQuestAgents() {
  return MQ_AGENTS;
}
