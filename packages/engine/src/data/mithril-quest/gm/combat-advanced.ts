// @ts-nocheck
// lib/s2s/fantasy/gm/combat-advanced.ts

/**
 * COMBAT AVANCÉ — Sheet2Scene v1.5
 * Système compatible VTT & génération automatique
 */

// Position sur le champ de bataille (grille)
export interface GridPosition {
  x: number; // coordonnée X
  y: number; // coordonnée Y
}

// États possibles sur une créature
export type CombatStatus =
  | "stunned"
  | "prone"
  | "burning"
  | "frozen"
  | "bleeding"
  | "poisoned"
  | "charmed"
  | "frightened"
  | "restrained"
  | "blinded"
  | "invisible"
  | "concentrating";

// Une créature sur la carte
export interface AdvancedCombatant {
  id: string;
  name: string;
  hp: number;
  ac: number;
  speed: number;
  initiative: number;
  statuses: CombatStatus[];
  position: GridPosition;
  isPlayer: boolean;
  conditions?: string[];
  reach?: number; // portée en mètres (2 cases = 3m)
}

// Couverture
export type CoverType = "none" | "half" | "three-quarters" | "full";

export const COVER_BONUS: Record<CoverType, number> = {
  none: 0,
  half: 2,
  "three-quarters": 5,
  full: 100, // impossible à toucher à distance
};

// Calcul du bonus de couverture
export function getCoverBonus(cover: CoverType): number {
  return COVER_BONUS[cover];
}

// Ligne de vue (VTT ready)
export interface LineOfSightCheck {
  source: GridPosition;
  target: GridPosition;
  obstacles: GridPosition[];
}

// Algo simple pour la ligne de vue
export function hasLineOfSight(check: LineOfSightCheck): boolean {
  const { source, target, obstacles } = check;

  return !obstacles.some((o) => {
    // règles simples : si obstacle aligné entre A et B
    return (
      (o.x >= Math.min(source.x, target.x) &&
       o.x <= Math.max(source.x, target.x)) &&
      (o.y >= Math.min(source.y, target.y) &&
       o.y <= Math.max(source.y, target.y))
    );
  });
}

// Mouvement sur une grille
export function canMove(
  combatant: AdvancedCombatant,
  target: GridPosition
): boolean {
  const dx = Math.abs(combatant.position.x - target.x);
  const dy = Math.abs(combatant.position.y - target.y);

  // distance = cases parcourues
  const distance = dx + dy;

  // 1 case = 1.5m (comme D&D mais version S2S)
  return distance * 1.5 <= combatant.speed;
}

// Calcul de l'initiative avancée
export function rollInitiative(dexterityMod: number): number {
  const roll = Math.floor(Math.random() * 20) + 1;
  return roll + dexterityMod;
}

// Attaque avancée avec prise en compte de la couverture
export interface AdvancedAttackRoll {
  bonus: number;
  targetAC: number;
  cover: CoverType;
  damageFormula: string;
}

export interface AdvancedAttackResult {
  hit: boolean;
  critical: boolean;
  damage: number;
  effectiveAC: number;
}

import { parseDiceFormula } from "./combat";

export function rollAdvancedAttack({
  bonus,
  targetAC,
  cover,
  damageFormula,
}: AdvancedAttackRoll): AdvancedAttackResult {
  const coverBonus = getCoverBonus(cover);

  const effectiveAC = targetAC + coverBonus;

  const roll = Math.floor(Math.random() * 20) + 1;
  const critical = roll === 20;
  const hit = critical || roll + bonus >= effectiveAC;

  let damage = 0;
  if (hit) {
    damage = parseDiceFormula(damageFormula);
    if (critical) damage *= 2;
  }

  return {
    hit,
    critical,
    damage,
    effectiveAC,
  };
}
