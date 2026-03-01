import type { ReactNode } from "react";
/**
 * WorldAmbientController — Mithril Engine AAA
 * --------------------------------------------------
 * - Teinte globale jour/nuit + météo
 * - Teinte thématique par worldId
 * - Overlays météo (visuel pur)
 * - Ne gère PAS l’audio (AmbientManager)
 */
export default function WorldAmbientController({ children, }: {
    children?: ReactNode;
}): JSX.Element;
