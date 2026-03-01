// @ts-nocheck
export interface MQPlayerFaction {
  key: string;
  label: string;
  reputationStart: number; // 0-100
}

export const MQ_PLAYER_FACTIONS: MQPlayerFaction[] = [
  { key: "guild", label: "Guilde des Aventuriers", reputationStart: 10 },
  { key: "order", label: "Ordre Runique", reputationStart: 0 },
  { key: "shadow_clan", label: "Clan de l’Ombre", reputationStart: -5 },
];
