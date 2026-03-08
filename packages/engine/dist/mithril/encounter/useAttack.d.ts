import type { Vec2 } from "../iso/isoMath";
export declare function useAttack(): {
    attack: (targetId: string, from: Vec2, to: Vec2, opts?: {
        range?: number;
        actionCost?: number;
        bonusDamage?: number;
    }) => void;
};
