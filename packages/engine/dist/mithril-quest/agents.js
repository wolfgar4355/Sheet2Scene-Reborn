// packages/engine/src/mithril-quest/agents.ts
import { MITHRIL_QUEST_WORLD_ID } from "./worlds";
import { registry as BaseRegistry } from "../agents/registry";
// BaseRegistry.AGENTS = Record<string, Agent>
// Donc il faut extraire les valeurs !
export const MQ_AGENTS = Object.values(BaseRegistry.AGENTS).map((agent) => ({
    ...agent,
    worlds: agent.worlds ?? [MITHRIL_QUEST_WORLD_ID],
}));
export function getMithrilQuestAgents() {
    return MQ_AGENTS;
}
