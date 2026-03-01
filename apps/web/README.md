🧙 Sheet2Scene — apps/web

Interface Grimoire interactive pour la création de scènes, personnages, portraits et récits TTRPG/AI.
Basé sur Next.js App Router, design grimoire animé, et moteur Mithril-Quest Engine.


---

🚀 Stack technique

Front-End

Next.js 14 — App Router

React 18

TailwindCSS

ShadCN/UI

Framer Motion (animations 2D/3D du grimoire)

CSS Modules (effets de pages, transitions)

Audio API (sons de pages, grimoire, lecture)


Back-End / API

Supabase (auth, DB, storage, RLS)

RunPod AI (génération d’images)

Mithril-Quest Engine (générateurs narratifs & assets)


Dev Tools

TypeScript

ESLint / Prettier

Node 18+

Compatibilité Android/Termux (swcMinify: false)



---

📁 Structure du dossier apps/web/

> ⚡ Totalement basée sur ton arbo réelle montrée plus haut.
Pas de théorie : c’est EXACTEMENT ton projet.



apps/web
│
├── README.md
├── app
│   ├── (auth)/
│   ├── (public)/
│   ├── admin/
│   ├── agents/
│   ├── api/
│   │   ├── characters/
│   │   ├── grimoire/
│   │   ├── portraits/
│   │   ├── public/
│   │   ├── seed/
│   │   └── share/
│   ├── create/
│   │   ├── options.ts
│   │   └── page.tsx
│   ├── grimoire/
│   ├── toc/
│   ├── worlds/
│   │   ├── [id]/
│   │   │   └── new/
│   │   └── page.tsx
│   ├── layout.tsx
│   ├── not-found.tsx
│   └── page.tsx
│
├── components/
│   ├── BookAnimation.tsx
│   ├── BookShell.tsx
│   ├── Card.tsx
│   ├── Container.tsx
│   ├── FieldInput.tsx
│   ├── FlipLink.tsx
│   ├── Footer.tsx
│   ├── Grimoire.tsx
│   ├── Grimoire3D.tsx
│   ├── GrimoireFrame.tsx
│   ├── GrimoireShell.tsx
│   ├── GrimoireStudy.tsx
│   ├── Header.tsx
│   ├── Lectern.tsx
│   ├── PlanCard.tsx
│   ├── SceneController.tsx
│   ├── TopChrome.tsx
│   └── TransitionLayer.tsx
│
├── config/
│   └── worlds.ts     ← Définition des mondes UI (Fantasy, Galactic Saga, etc.)
│
├── hooks/
│   ├── useBookNav.ts
│   └── useFlipSound.ts
│
├── lib/
│   ├── env.ts
│   ├── getUserId.ts
│   ├── grimoire/
│   │   └── index.ts
│   └── supabase/
│       ├── admin.ts
│       ├── server.ts
│       ├── supabase.ts
│       └── supabaseService.ts
│
├── public/
│   ├── assets/
│   ├── images/
│   ├── icons/
│   └── sounds/
│
├── scripts/
│   ├── apply-patch.ts
│   └── tailwind.config.js
│
├── types/
│   ├── database.ts
│   └── worlds.ts
│
├── next.config.mjs
├── tsconfig.json
├── postcss.config.js
└── package.json


---

🧠 Architecture globale

🎮 Mithril-Quest Engine

Le moteur narratif et d’assets :

packages/engine/src/data/mithril-quest/
├── worlds/
├── eras/
├── bestiary/
├── items/
└── spells/

Utilisé via alias :

@engine
@mithril
@mq-worlds
@mq-eras
@mq-items
@mq-bestiary


---

🔧 Alias (résumé utilisé dans next.config.mjs)

"@": "./"
"@app": "./app"
"@components": "./components"
"@hooks": "./hooks"
"@lib": "./lib"
"@config": "./config"
"@utils": "./utils"
"@public": "./public"

"@engine": "../../packages/engine/src"
"@mithril": "../../packages/engine/src/data/mithril-quest"
"@mq-worlds": "../../packages/engine/src/data/mithril-quest/worlds"


---

▶️ Lancer en développement (Android / Termux)

cd apps/web
HOST=0.0.0.0 npm run dev

Puis visiter :

http://127.0.0.1:3000

> 🔥 Compatible termux (pas de SWC, pas de Vercel CLI).




---

🧪 Tests API

GET /api/characters
POST /api/portraits
POST /api/grimoire/[id]/generate


---

🔮 Roadmap interne (résumé)

[ ] Refonte UI Grimoire pages-turn 2.0

[ ] Intégration complète Mithril-Quest (poses, races, items)

[ ] Génération multi-images / galerie

[ ] Mode “Campagne / Scénario”

[ ] Historique scènes + partage public

[ ] Version mobile 100% tactile

