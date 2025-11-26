import path from "path";
import { loadJSONFiles } from "../utils/loaders";

/**
 * GM DATA LOADER
 * Charge tout le contenu du dossier GM du monde Fantasy.
 *
 * Exemple de structure :
 * content/fantasy/gm/*.ts
 */
export const getAllGMData = () => {
  const gmDir = path.join(process.cwd(), "content/fantasy/gm");

  // Charge tous les fichiers GM et combine dans un seul objet
  return loadJSONFiles(gmDir);
};

export type GMData = ReturnType<typeof getAllGMData>;
