// @ts-nocheck
export interface MQMotivation {
  key: string;
  label: string;
  description: string;
}

export const MQ_MOTIVATIONS: MQMotivation[] = [
  { key: "revenge", label: "Vengeance", description: "Un tort passé doit être réparé." },
  { key: "knowledge", label: "Connaissance", description: "Découvrir les secrets du monde." },
  { key: "redemption", label: "Rédemption", description: "Cherche à réparer des erreurs passées." },
  { key: "power", label: "Pouvoir", description: "Désire devenir influent ou puissant." },
  { key: "wanderlust", label: "Aventure", description: "Explore sans fin pour le plaisir." },
  { key: "duty", label: "Devoir", description: "Obéit à un ordre, clan ou divinité." },
];
