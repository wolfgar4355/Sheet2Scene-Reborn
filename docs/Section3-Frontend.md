# 💻 Section 3 — Front-End & UI / UX

## 🎯 Objectif principal
Construire l’interface du **Grimoire Sheet2Scene** en respectant la vision artistique de la Section 2.  
Focus : intégration des animations, pages principales, réactivité, et interfaçage avec Supabase / RunPod.

---

## 📂 Pages à implémenter
| Page | Description | Statut |
|------|--------------|--------|
| `/` | Accueil : animation du grimoire fermé + clic utilisateur → login magique | ⏳ En préparation |
| `/create` | Configurateur : étapes Monde → Ère → Classe → Pose → Décor | 🔄 En développement |
| `/history` | Historique des créations (supabase userId) | 🧩 À connecter |
| `/privacy` | Politique et RGPD (contenu Markdown / MDX) | 🧾 En rédaction |
| `/about` | Page d’équipe et crédits | ✅ Pré-contenu prêt |

---

## 🧱 Composants essentiels
| Composant | Rôle | Lien ou dépendance |
|------------|------|--------------------|
| `GrimoireShell.tsx` | Gère l’ouverture/fermeture du grimoire (animation 3D + Framer Motion) | `/public/images/grimoire-*.png` |
| `LecternScene.tsx` | Position et zoom caméra sur le lutrin | `/public/images/lectern-*.png` |
| `FlipLink.tsx` | Navigation interne avec effet de page qui se tourne | `hooks/useFlipSound.ts` |
| `LoginMagic.tsx` | Interface login + animation d’apparition sur la couverture | Supabase Auth |
| `WorldSelector.tsx` | Sélection des mondes (Fantasy, Pathseeker, etc.) | `/api/worlds` |
| `SceneRenderer.tsx` | Affichage de la scène finale (RunPod endpoint) | `/api/generate-scene` |

---

## ✨ Effets & Animations
- **Framer Motion** :  
  - Effet de respiration du halo magique sur l’écran d’accueil.  
  - Transition fluide entre `/` → `/create` : *zoom-in* du lutrin vers le grimoire ouvert.  
  - *Page-turn* au clic sur FlipLink.  

- **Audio (hooks)** :  
  - `useFlipSound.ts` → associer à `page-flip.mp3`.  
  - Ajouter `login-magic.mp3` lors de la validation des identifiants.  
  - `loot-drop.mp3` pour l’ouverture des coffres (bonus : Section Gameplay).  

---

## 🎨 Liaison avec Direction Artistique
- Palette de couleurs : import depuis `docs/style-guide.md`.  
- Fonts définies :  
  - *Uncial Antiqua* / *YU Fell English SC* pour titres.  
  - *Cormorant Garamond* pour le texte.  
  - *Inter* pour interface technique.  
- Textures du fond (parchemin clair, cuir ancien) → `/public/images/`.  
- Halo violacé dynamique : `rgba(120, 60, 255, 0.35)` avec blur + pulse.  

---

## 🧩 Intégrations techniques
- **Backend / API** :
  - Supabase : authentification + stockage des créations (table `scenes`).  
  - RunPod : génération d’image via `/api/generate-image`.  
  - Ajout d’un middleware `verifySession` pour les routes `/create`, `/history`.  

- **Structure Next.js** :
apps/
└── web/
    ├── app/
    │   ├── page.tsx              // accueil
    │   ├── create/page.tsx       // configurateur
    │   ├── history/page.tsx      // historique
    │   └── layout.tsx            // layout global
    └── components/
        ├── GrimoireShell.tsx
        ├── LecternScene.tsx
        ├── FlipLink.tsx
        ├── LoginMagic.tsx
        └── WorldSelector.tsx

---

## 🧪 Tests & QA
- [ ] Vérifié rendu desktop / mobile  
- [ ] Aucune erreur dans la console (`npm run dev`)  
- [ ] Transitions fluides (60 FPS minimum)  
- [ ] Audio sync avec motion  
- [ ] Accessibilité (focus + clavier)  
- [ ] Conforme à la charte visuelle (voir `style-guide.md`)  

---

## 📸 Captures & Validation
*(Joindre screenshots ou GIFs dans `docs/previews/`)*

- DA : Joeffry — cohérence visuelle et textures.  
- UI Dev : Victor — intégration technique.  
- Chef de projet : M.L. Godin — validation artistique finale.  

---

## ⚙️ Commandes GitHub
```bash
git add docs/Section3-Frontend.md
git commit -m "Section 3 : Front-End & UX — intégration visuelle + animations"
git push
