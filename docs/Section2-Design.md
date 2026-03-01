Sheet2Scene — Section 2: Design & Direction Artistique

🎨 Objectif

Le projet Sheet2Scene entre dans sa phase de design et direction artistique. L'infrastructure technique est stable et prête à recevoir les visuels finaux : textures, animations et identité graphique. L'objectif est de créer une interface immersive, magique et tactile, où chaque interaction donne l'impression de feuilleter un grimoire vivant.


---

🔧 Base technique déjà en place

Framework : Next.js 15.5.6 (App Router)

Stack UI : TailwindCSS + shadcn/ui + Framer Motion

Audio : Hook useFlipSound (avec page-flip.mp3) intégré et testé

Composants réutilisables : Grimoire.tsx, BookShell.tsx, FlipLink.tsx, FieldInput.tsx

Hooks personnalisés : useFlipSound, useBookNav

Chemins TypeScript configurés : @components, @hooks, @config, etc.

Scripts : clean-dev.sh, cache et build automatisés

Audio & interactions : son et animation de flip de page prêts à être synchronisés


L'ensemble est opérationnel et éprouvé en local. Aucun blocage technique n'empêche la phase visuelle.


---

🖌️ Direction artistique

Thème visuel

Univers : grimoire médiéval/fantasy avec textures naturelles (cuir, parchemin, dorures)

Tonalité : authentique, mystique et noble, sans surcharge

Style : équilibre entre artisanat magique et interface moderne


Objectif UX/UI

Offrir une immersion sensorielle : son, mouvement, matière

Rendre la navigation fluide et théâtrale (comme feuilleter un tome ancien)

Garder une cohérence entre les pages : /create, /history, /about, /docs



---

📝 Checklist visuelle et UI

🪐 Textures & matières

[ ] Créer les textures HD : cuir, parchemin, dorures, rubans, sceaux

[ ] Ajouter un ombrage interne entre les pages

[ ] Appliquer un grain naturel au papier (vieilli, imperf.)

[ ] Marges et reliure visibles pour le réalisme


✨ Animations & transitions

[ ] Synchroniser le flip visuel (Framer Motion) avec useFlipSound

[ ] Ajouter un effet de lumière magique sur les pages (runes qui s'allument)

[ ] Créer un rebond doux à l'ouverture du livre

[ ] Fluidité mobile à vérifier (lag minimal)


👩‍🎓 Identité visuelle

[ ] Palette : doré vieilli, brun cuir, beige parchemin, accents bleus runiques

[ ] Typo : calligraphique / runique (lisible sur mobile)

[ ] Icônes : plume, parchemin, encrier, sceau de cire

[ ] Logo Sheet2Scene à dorures ou gravure runique


🔄 Navigation & UX

[ ] Indicateurs d'étapes : Monde → Ère → Classe → Pose

[ ] Boutons intégrés au design (rubans ou signets)

[ ] Animation d'ouverture du grimoire (intro cinématique)

[ ] Réactivité mobile : tap, pinch, scroll sans bug


🔊 Audio & feedback

[ ] Volume adaptatif selon le contexte (page / scène)

[ ] Effets légers de clic (plume, froissement)

[ ] Synchronisation audio + animation dans Framer Motion



---

📚 Livrables

/assets/textures/ : PNG/WebP (fond transparent)

/assets/sounds/ : effets validés et optimisés

Grimoire.tsx / FlipLink.tsx : versions finales animées

style-guide.md : couleurs, polices, effets, ambiance



---

📦 Prochaine étape

1. Intégration des visuels dans Grimoire.tsx


2. Test du flip synchronisé (audio + motion)


3. Export du style guide à intégrer dans /docs/




---

🔗 Commande GitHub (prête à exécuter)

git add docs/Section2-Design.md
git commit -m "Add Section 2 Design & Direction Artistique brief"
git push


---

Coordination : M.L. Godin (Chef de projet & Visionnaire)

Design : Joeffry (Direction artistique)
Front-end : Victor (UI Grimoire & intégration visuelle)
QA/Support : Camille & Wei-Ming (tests de fluidité & accessibilité)

---

# 🎬 Nouvelle section : Vision & Direction Artistique

# 🎨 Section 2 — Design & Direction Artistique

## 🧱 Page d’accueil — Vision principale

> Référence visuelle basée sur les images fournies : bibliothèque gothique, bois sculpté, lumière dorée.

- Décor : salle d’étude médiévale (fond inchangé, léger effet 3D/parallaxe)
- Élément central : lutrin en bois sculpté, grimoire **Sheet2Scene** fermé, reliure centrée sur le plateau du bas
- Lueur : halo **violacé magique** émanant du grimoire
- Caméra : légère oscillation (respiration visuelle)

---

## ✨ Animations et interactions

### Accueil
- Grimoire fermé au centre
- Reflets violets et dorés discrets
- Ambiance sonore : feuillage, souffle, chandelles

### Clic utilisateur
- Zoom avant sur le lutrin
- Transition douce vers la couverture du grimoire
- Apparition magique des champs **Login** et **Password**

### Connexion
- Saisie sur la couverture du grimoire
- À la validation :
  - Les inscriptions disparaissent dans une brume magique
  - Son mystique d’activation
  - Le grimoire **s’ouvre en animation** (page-turn Framer Motion)
  - Double page visible en plein écran (TOC à gauche)

## 📸 Références visuelles
- bg-hall.png — décor principal (salle d’étude médiévale)
- lectern.png — lutrin central
- grimoire-closed-clear.png — couverture Sheet2Scene (login)
- grimoire-open.png — double page du grimoire (TOC + scènes)
- parchment.png — texture de fond interne

---

💾 Commandes GitHub
```bash
git add docs/Section2-Design.md public/images/*
git commit -m "Ajout des références visuelles pour la DA du grimoire"
git push
---

## 🌍 Générateurs par Monde

Monde : Modules et Détails
--------------------------
**Fantasy** — Cartes, Personnages, NPC, Quêtes, Loot, Monstres, BBEG, Minions, sous-mondes : Ravenloft, Dragonlance, Éberron  
**Pathseeker** — Cartes, Personnages, Quêtes, Loot, NPC ; compatible Pathfinder 1e / 3.5  
**The Darknight Chronicles** — Personnages, Époques, Quêtes, Monstres ; thèmes : Dark Ages, horreur gothique  
**Galactic Saga** — Cartes stellaires, Quêtes, Loot, Ennemis ; ères : Old / New Republic, Before Yavin  
**Desert & Dunes** — Artefacts, Trésors, Monstres mythiques ; inspiration : Égypte / Arabo-fantastique  
**Arctic Realms** — Monstres, Artefacts, Tributs ; ambiance : givre, brume et neige magique  

---

## 🧩 Sorties et compatibilité

Formats : PNG, JPEG, Token (VTT), STL (3D print), JSON (export de données)  
Compatibilité : FoundryVTT, Roll20, Owlbear Rodeo (phase 2 prévue)  
Exports : PNG | JPEG | Token | STL 3D | VTT  
Générateurs dynamiques selon :  
- Nombre de joueurs  
- Niveau moyen  
- Monde choisi  

---

## 🛠️ Préparation structurelle

- [ ] Créer `<GrimoireShell />` (ouverture et rendu 3D)
- [ ] Créer `src/components/LecternScene.tsx` (zoom caméra)
- [ ] Définir assets `/public/images/grimoire`, `/public/sounds/ui`
- [ ] Routes `/create/:world/:module`
- [ ] Lier base Supabase (`world`, `quests`, `npc`, `loot`)
- [ ] Liaison audio : `useFlipSound`, `usePageTurnSound`
- [ ] Préparer `src/modules/worlds/{monde}/`

---

## 📁 Structure de fichiers visuels (enrichie)

/public/images/  
→ textures HD, dorures, parchemins, icônes  
→ optimiser en WebP (qualité 85 %)  
→ sous-dossiers suggérés : `/ui/`, `/backgrounds/`, `/items/`, `/worlds/`

/public/sounds/  
→ sons du grimoire (flip, ambiance, magie, effets UI)  
→ formats recommandés : `.mp3` (léger) et `.ogg` (fallback)  
→ sous-dossiers suggérés : `/ui/`, `/ambience/`, `/fx/`

/public/videos/  
→ cinématiques (intro, transitions, effets spéciaux)  
→ encoder en `.webm` avec transparence pour effet de survol  
→ max 10 Mo par clip pour performance mobile

/public/fonts/  
→ typographies magiques et runiques  
→ fichiers `.woff2` + licence à documenter dans `/docs/fonts.md`

/docs/style-guide.md  
→ charte visuelle complète : palettes, marges, contrastes, logo usage  
→ inclure captures de référence (via `/public/images/ui-preview/`)

---

## 📦 Nomenclature d’assets

> Convention de nommage pour tous les fichiers visuels et audio du projet Sheet2Scene.

### 🖼️ Images et textures
| Type | Exemple | Règle |
|------|----------|-------|
| Background principal | `bg-hall.webp` | `bg-` + nom du décor |
| Élément d’UI | `ui-button-runic.webp` | `ui-` + fonction + style |
| Icône | `icon-rune.svg` | `icon-` + nom court |
| Texture décorative | `tex-parchment.webp` | `tex-` + matériau |
| Monde / univers | `world-fantasy-banner.webp` | `world-` + nom du monde |

### 🔊 Sons & ambiance
| Type | Exemple | Règle |
|------|----------|-------|
| Flip de page | `sound-flip.mp3` | `sound-` + action |
| Ambiance | `ambience-library.ogg` | `ambience-` + lieu ou thème |
| UI click | `ui-tap.mp3` | `ui-` + action |
| Effet magique | `fx-rune-burst.mp3` | `fx-` + effet visuel associé |

### 🎬 Vidéos & animations
| Type | Exemple | Règle |
|------|----------|-------|
| Intro | `video-intro.webm` | `video-` + type |
| Transition | `transition-scroll.webm` | `transition-` + effet |
| Animation spécifique | `anim-rune-glow.webm` | `anim-` + effet ou élément |

### 🔠 Polices
| Type | Exemple | Règle |
|------|----------|-------|
| Titre principal | `font-antiqua.woff2` | `font-` + nom |
| Interface | `font-inter.woff2` | `font-` + nom |
| Spéciale (runes, décor) | `font-runic.woff2` | `font-` + usage |

---

## 💡 Améliorations visuelles à venir

- [ ] FX de particules violettes (autour du grimoire)
- [ ] Reflets dorés dynamiques sur “Sheet2Scene”
- [ ] Animation de pages réalistes (Framer Motion)
- [ ] Charte visuelle complète (`/docs/style-guide.md`)
- [ ] Icônes spécifiques pour chaque monde
- [ ] Test complet mobile/tablette

---

## 🧭 Prochaines étapes

1. Finaliser les textures (grimoire, lutrin, fond)
2. Intégrer transitions et sons
3. Lier le système de connexion au backend Supabase
4. Prototyper la TOC du grimoire
5. Débuter intégration du générateur Fantasy (alpha)

---

## ✅ Validation

- DA (Joeffry) : visuel et cohérence artistique  
- UI Dev (Victor) : intégration responsive et animations  
- Chef de projet (M.L. Godin) : validation finale

---

> **Version interne :** `v0.8 – Design Phase`  
> **Objectif :** atteindre le rendu visuel “grimoire magique” complet avant version `v1.0`.

---

## 🧭 Idée future : Notifications automatisées (Discord & QA Team)

- [ ] Intégrer les **alertes Discord** directement au workflow `check-design-qa.yml`
- [ ] Personnaliser le message selon le résultat (🟢 Succès / 🔴 Échec)
- [ ] Ajouter un **ping automatique** à `@DesignTeam` ou `@QA`
- [ ] Inclure le résumé des **assets modifiés** (images, sons, styles)
- [ ] Option : fusionner les messages multi-jobs (Design + Frontend + Release) en un seul résumé clair

📌 *But : simplifier la communication entre développeurs et designers lors des pushs GitHub.*
