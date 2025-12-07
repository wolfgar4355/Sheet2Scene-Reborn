// @ts-nocheck
// lib/s2s/fantasy/gm/combat.ts

/**
 * SYSTÈME DE COMBAT — S2S Fantasy
 */

export interface CombatState {
  round: number;
  participants: Combatant[];
}

export interface Combatant {
  id: string;
  name: string;
  initiative: number;
  hp: number;
  ac: number;
  speed: number;
  status?: string[];
  isPlayer: boolean;
}

export interface AttackResult {
  hit: boolean;
  critical: boolean;
  damage: number;
}

export interface AttackRoll {
  bonus: number;
  targetAC: number;
  damageFormula: string; // ex: "1d8+2"
}

export function rollAttack({ bonus, targetAC, damageFormula }: AttackRoll): AttackResult {
  const roll = Math.floor(Math.random() * 20) + 1;
  const critical = roll === 20;
  const hit = critical || roll + bonus >= targetAC;

  let damage = 0;
  if (hit) {
    damage = parseDiceFormula(damageFormula);
    if (critical) damage *= 2;
  }

  return { hit, critical, damage };
}

// Simple parseur de dés
export function parseDiceFormula(formula: string): number {
  const match = formula.match(/(\d+)d(\d+)([+-]\d+)?/);
  if (!match) return 0;
  const [, nStr, dStr, modStr] = match;
  const n = parseInt(nStr, 10);
  const d = parseInt(dStr, 10);
  const mod = modStr ? parseInt(modStr, 10) : 0;

  let total = 0;
  for (let i = 0; i < n; i++) {
    total += Math.floor(Math.random() * d) + 1;
  }

  return total + mod;
}

export const COMBAT_ACTIONS = [
  "Attaquer",
  "Lancer un sort",
  "Se déplacer",
  "Se défendre",
  "Aider",
  "Désengager",
  "Esquiver",
  "Utiliser un objet",
] as const;

export type CombatAction = typeof COMBAT_ACTIONS[number];
