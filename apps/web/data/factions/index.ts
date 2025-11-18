export const FACTIONS = {
  draconic: "Dragons, drakéides et cultistes draconiques",
  frostborn: "Tribus glacées, morts gelés, bêtes nordiques",
  infernal: "Diables, démons, corruption du feu",
  conclave: "Mages, golems, arcanes supérieures",
  sylvan: "Esprits, dryades, créatures forestières",
  empire: "Armées, chevaliers, machines de guerre",
  sandborn: "Déserts, scorpions géants, momies",
  necroshade: "Nécromants, morts-vivants, ombres",
  eldritch: "Abominations, horreurs cosmiques",
  covenant: "Ordres sacrés, paladins, protecteurs",
  wildhunt: "Cerfs géants, lycans, chasseurs primordiaux",
  clockwork: "Automates, golems mécaniques",
};

export type Faction = keyof typeof FACTIONS;
