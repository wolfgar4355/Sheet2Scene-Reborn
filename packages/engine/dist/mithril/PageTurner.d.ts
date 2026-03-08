import type { ReactNode } from "react";
export interface PageTurnerProps {
    /** Numéro de page courant (déclenche l’animation) */
    page: number;
    /** Contenu de la page */
    children: ReactNode;
}
/**
 * 📖 Mithril Engine v2 — PageTurner AAA
 *
 * - Flip 3D naturel façon grimoire
 * - Compatible GrimoireFrame (perspective globale)
 * - Animation déclenchée par `page`
 * - API React standard (children)
 * - Zéro dépendance au contenu interne
 */
export default function PageTurner({ page, children, }: PageTurnerProps): JSX.Element;
