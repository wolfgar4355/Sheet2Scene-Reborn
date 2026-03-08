/**********************************************************************
 * Script MQ — Génération automatique de TOUTES les races MQ
 * Version robuste : plus de regex, plus de eval()
 **********************************************************************/
export type RawRace = {
    key: string;
    label: string;
    description: string;
    traits: string[];
};
