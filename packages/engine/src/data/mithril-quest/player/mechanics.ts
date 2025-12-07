// @ts-nocheck
export interface MQMechanicalTrait {
  key: string;
  label: string;
  description: string;
  effect: string;
}

export const MQ_MECHANICS: MQMechanicalTrait[] = [
  { key: "darkvision", label: "Vision Nocturne", description: "Voit dans le noir.", effect: "+20m vision" },
  { key: "keen_sense", label: "Sens Aiguisés", description: "Perception accrue.", effect: "+2 perception" },
  { key: "iron_body", label: "Corps de Fer", description: "Résistance physique.", effect: "+1 AC" },
];
