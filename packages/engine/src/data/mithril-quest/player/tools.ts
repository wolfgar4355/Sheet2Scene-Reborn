// @ts-nocheck
// ============================================================================
// 🛠️ MQ TOOLS — Outils, Instruments, Kits
// ============================================================================
//
// Liste des outils utilisables par Backgrounds, Classes ou Races.
// Inspiré D&D mais 100% MQ-compatible.
//
// ============================================================================

export interface MQTool {
  key: string;
  label: string;
  category: "artisan" | "instrument" | "kit" | "utility" | "alchemy" | "other";
  description: string;
}

export const MQ_TOOLS: MQTool[] = [
  // ------------------------ Artisanat ------------------------
  { key: "smithing-tools", label: "Outils de Forgeron", category: "artisan",
    description: "Travail du métal, réparation d’armes et armures." },

  { key: "woodcarver-tools", label: "Outils de Sculpteur", category: "artisan",
    description: "Sculpture du bois, fabrication d’arcs et ornements." },

  { key: "leatherworker-tools", label: "Outils de Tanneur", category: "artisan",
    description: "Fabrication d’armures légères, sacs, étuis et décorations." },

  { key: "artisan-kit", label: "Kit d’Artisan polyvalent", category: "artisan",
    description: "Outils variés de fabrication et petites réparations." },

  // ------------------------ Instruments ------------------------
  { key: "lyre", label: "Lyre", category: "instrument",
    description: "Instrument féerique favori des bardes sylvestres." },

  { key: "drum", label: "Tambour", category: "instrument",
    description: "Percussions tribales, rythmes de guerre ou cérémonies." },

  { key: "flute", label: "Flûte", category: "instrument",
    description: "Musique douce, sons sylvestres ou mélodies enchanteresses." },

  { key: "horn", label: "Cor de Guerre", category: "instrument",
    description: "Appels au combat, signaux de troupe, cris héroïques." },

  // ------------------------ Kits spécialisés ------------------------
  { key: "thieves-tools", label: "Outils de Voleur", category: "kit",
    description: "Crochetage, désamorçage, manipulation précise." },

  { key: "herbalism-kit", label: "Kit d’Herboristerie", category: "kit",
    description: "Fabrication de remèdes, poisons faibles et potions simples." },

  { key: "alchemist-kit", label: "Trousse d’Alchimie", category: "alchemy",
    description: "Distillation, composants arcaniques, mélanges instables." },

  { key: "healer-kit", label: "Trousse de Soins", category: "kit",
    description: "Bandages, antiseptiques, matériel médical basique." },

  // ------------------------ Utilitaires ------------------------
  { key: "navigator-tools", label: "Outils de Navigation", category: "utility",
    description: "Cartes, compas, outils de navigation maritime et astrale." },

  { key: "cartographer-tools", label: "Outils de Cartographe", category: "utility",
    description: "Création de cartes, analyse de terrains, orientation." },

  { key: "disguise-kit", label: "Kit de Déguisement", category: "kit",
    description: "Maquillage, perruques, vêtements pour changer d'identité." },

  { key: "musician-set", label: "Set de Musicien", category: "other",
    description: "Ensemble d’instruments variés pour représentations." }
];
