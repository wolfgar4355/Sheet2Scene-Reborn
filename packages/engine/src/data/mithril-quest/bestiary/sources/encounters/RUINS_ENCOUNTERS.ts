import { EncounterTableEntry } from "./types";

export const DESERT_RUINS_ENCOUNTERS: EncounterTableEntry[] = [
  {
    roll: [1, 2],
    monsters: ["sand-wraith-scout"],
    description: "Éclaireurs spectraux du désert, nés des tempêtes de sable hantant les colonnes effondrées."
  },
  {
    roll: [3, 4],
    monsters: ["scarab-guardian"],
    description: "Gardiens scarabées géants, imprégnés de magie solaire et liés aux anciennes dynasties."
  },
  {
    roll: [5, 6],
    monsters: ["cultist-sunblade"],
    description: "Cultistes du Soleil Noir cherchant à ranimer les reliques enfouies sous la cité perdue."
  },
  {
    roll: [7, 8],
    monsters: ["ancient-obelisk-construct"],
    description: "Automates d’obsidienne protecteurs, éveillés lorsque des intrus s’approchent des stèles runiques."
  },
  {
    roll: [9, 9],
    monsters: ["dust-mummy-ascendant"],
    description: "Momies desséchées investies d’un pouvoir solaire déchu — malédictions et feu sacré."
  },
  {
    roll: [10, 10],
    monsters: ["pharaoh-shade-lord"],
    description: "Seigneur-Ombre du Pharaon Déchu : souverain spectral gardien des tombeaux scellés."
  },
];

export default DESERT_RUINS_ENCOUNTERS;
