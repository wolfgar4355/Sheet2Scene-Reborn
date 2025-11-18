Sheet2Scene — Style Guide (v1)

🎨 Identité visuelle

Univers : Fantasy / grimoire médiéval
Ambiance : chaleureuse, artisanale, magique, légèrement poussiéreuse mais noble.
Référence visuelle : mélange entre un vieux tome enluminé et une interface élégante de jeu narratif.


---

🎨 Palette de couleurs (base Tailwind + custom)

| Élément | Couleur | Code HEX | Variable Tailwind | |----------|----------|-----------| | Parchemin clair | #f5edd9 | bg-parchment | | Cuir ancien | #5a3e2b | bg-leather | | Dorure | #d4af37 | text-gold | | Ombre interne | #2a1b0d | shadow-inner-dark | | Accent runique (bleu) | #4fa8c7 | text-rune | | Éclat magique (turquoise) | #9ee6e3 | glow-magic | | Encre noire | #1c1a18 | text-ink | | Encre brune | #4a3721 | text-ink-alt |


---

🖋️ Typographie

Usage	Police suggérée	Fallback	Poids

Titres et rubans	"Uncial Antiqua" ou "IM Fell English SC"	serif	400–700
Boutons / menus	"Cinzel"	serif	500
Texte courant	"Cormorant Garamond"	serif	400
Interface moderne (petits labels)	"Inter"	sans-serif	400–600



---

🧱 Layout & structure

Largeur max du grimoire : 1024px desktop / 90vw mobile

Marges intérieures pages : 2.5rem

Espacement entre reliure : 1.5rem

Ombre subtile intérieure : shadow-[inset_0_0_12px_rgba(0,0,0,0.3)]

Coins arrondis : rounded-2xl

Transitions globales : transition-all duration-300 ease-in-out



---

✨ Animations (Framer Motion)

Élément	Type	Durée	Easing	Détails

Flip de page	rotationY	0.8s	easeInOut	synchronisé avec son page-flip.mp3
Apparition du grimoire	fade + scale	0.6s	easeOut	entrée douce depuis le centre
Hover boutons rubans	scale + glow	0.3s	easeOut	légère lueur dorée
Sceau magique	pulse + blur	2s loop	easeInOut	effet de flux magique intermittent



---

📐 Composants à styliser

Composant	Style dominant	Effets

Grimoire.tsx	Fond cuir + dorures	lumière rasante, texture HD, coins usés
FlipLink.tsx	Ruban animé doré	hover lumineux + son page-flip
BookShell.tsx	Structure parchemin	bordures irrégulières + relief
FieldInput.tsx	Encadré plume/parchemin	focus = halo bleu runique
Footer.tsx	Bandeau de cuir vieilli	gravure dorée du logo



---

🔊 Audio (ambiance & feedback)

Page flip : page-flip.mp3 (volume 0.35 par défaut)

Ambiance de fond (optionnelle) : faible souffle ou feu de cheminée

Effet hover : tintement léger ou froissement papier

Effet validation : son de plume sur parchemin



---

🧩 Icônes & éléments décoratifs

Icônes SVG personnalisées (plume, sceau, ruban, rune)

Accentuation des transitions avec runes lumineuses (alpha 20–40%)

Curseur personnalisé : cursor: url('/assets/cursors/quill.cur'), auto;



---

📱 Responsive design

Écran	Adaptations

Mobile (<640px)	Livre en mode page unique + scroll vertical
Tablette (641–1024px)	Double page avec effets allégés
Desktop (>1024px)	Double page complète + effets lumière/ombre



---

🧪 À tester

[ ] Vérifier la cohérence entre audio et flip (mobile/desktop)

[ ] Performance Framer Motion sur bas/moyen GPU

[ ] Textures en WebP avec compression lossless

[ ] Contraste et lisibilité (WCAG AA)

[ ] Accessibilité clavier et focus visible



---

🤝 Contribution Design (Workflow Collaboratif)

Pour garder une direction artistique claire et des itérations rapides :

1️⃣ Nommage des fichiers

Utiliser le format type_nom-version.ext (ex: texture_leather-v2.webp ou icon_rune.svg).

Regrouper les fichiers par catégorie (images, sounds, textures, ui).


2️⃣ Propositions de mise à jour

Les designers peuvent :

Créer une branche : feature/ui-update-[nom]

Ajouter leurs assets dans public/ avec une note dans docs/style-guide.md si besoin de nouvelle référence.

Faire une pull request avec une courte description du changement visuel.



3️⃣ Validation visuelle

DA (Joeffry) valide cohérence esthétique et textures.

UI Dev (Victor) valide intégration technique et performance.

M.L. Godin valide cohérence produit et direction fantasy.


4️⃣ Intégration finale

Une fois la PR approuvée : merge vers main puis test en staging (npm run dev-staging).


---

Auteur : M.L. Godin
DA : Joeffry
UI Dev : Victor
Version : 1.1 (ajout du workflow de contribution design)
