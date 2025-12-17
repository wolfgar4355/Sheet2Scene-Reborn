"use client";

import { useCallback } from "react";
import type { Vec2 } from "../iso/isoMath";
import { tileDistance } from "../iso/isoMath";
import { useTurns } from "./TurnController";
import { useCombatLog } from "./useCombatLog";
import { useXP } from "./useXP";

function rollD20() {
  return Math.floor(Math.random() * 20) + 1; // 1..20
}

function rollDamage(dice: number, sides: number, bonus = 0) {
  let total = 0;
  for (let i = 0; i < dice; i++) total += Math.floor(Math.random() * sides) + 1;
  return total + bonus;
}

export function useAttack() {
  const turns = useTurns();
  const log = useCombatLog();
  const xp = useXP();

  const attack = useCallback(
    (targetId: string, from: Vec2, to: Vec2, opts?: { range?: number; actionCost?: number; bonusDamage?: number }) => {
      const attacker = turns.currentActor();
      if (!turns.state.active || !attacker) return;
      if (attacker.kind !== "player") return;

      const range = opts?.range ?? 1;
      const actionCost = opts?.actionCost ?? 1;

      const target = turns.state.actors.find((a) => a.id === targetId);
      if (!target) return;

      const targetHp = target.hp ?? 0;
      if (targetHp <= 0) {
        log.push(`💀 ${target.name} est déjà à terre.`);
        return;
      }

      if (tileDistance(from, to) > range) {
        log.push(`❌ Hors de portée (${range}).`);
        return;
      }

      if (!turns.spendAction(actionCost)) {
        log.push(`⛔ Plus d’action ce tour.`);
        return;
      }

      const d20 = rollD20();
      const atkBonus = attacker.attackBonus ?? 3;
      const total = d20 + atkBonus;
      const ac =
       (target.ac ?? 12) +
       (target.buffs ?? [])
       .filter((b) => b.stat === "ac")
       .reduce((s, b) => s + b.value, 0);

      // Nat 1 = miss auto
      if (d20 === 1) {
        log.push(`🎲 ${attacker.name} attaque ${target.name}: NAT 1 → ❌ ÉCHEC !`);
        return;
      }

      // Nat 20 = crit auto
      const isCrit = d20 === 20;
      const hit = isCrit || total >= ac;

      if (!hit) {
        log.push(`🎲 ${attacker.name} attaque ${target.name}: ${d20}+${atkBonus}=${total} vs AC ${ac} → ❌ Miss`);
        return;
      }

      const dmgSpec = attacker.dmg ?? { dice: 1, sides: 6, bonus: 0 };
      const critMult = attacker.critMult ?? 2;

      const dice = isCrit ? dmgSpec.dice * critMult : dmgSpec.dice;
      const dmg = rollDamage(dice, dmgSpec.sides, (dmgSpec.bonus ?? 0) + (opts?.bonusDamage ?? 0));

      const newHp = Math.max(0, targetHp - dmg);
      turns.patchActor(target.id, { hp: newHp });

      if (isCrit) {
        log.push(`💥 CRIT ! ${attacker.name} touche ${target.name} (AC ${ac}) → ${dmg} dmg`);
      } else {
        log.push(`✅ ${attacker.name} touche ${target.name} (${d20}+${atkBonus}=${total} vs AC ${ac}) → ${dmg} dmg`);
      }

      if (newHp <= 0) {
        log.push(`☠️ ${target.name} est KO !`);

        // XP (si défini)
        const value = target.xpValue ?? 0;
        if (value > 0) {
          xp.addXP(value);
          log.push(`✨ +${value} XP`);
        }
      }
    },
    [turns, log, xp]
  );

  return { attack };
}
