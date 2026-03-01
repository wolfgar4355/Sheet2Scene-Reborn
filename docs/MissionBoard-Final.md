⚔️ Sheet2Scene — Mission Board v1.0

Coordination : M.L. Godin (Chef de projet & Visionnaire)
Version : 1.0 – Documentation complète (Sections 1 → 6)
Date : 2025-11-08
Stack : Next.js (App Router) + Supabase + RunPod + TailwindCSS + ShadCN/UI + Framer Motion
Style visuel : Grimoire fantasy — parchemin, cuir, dorures, typographie runique
Objectif : MVP Web complet + backend intégré + QA automatisée + conformité RGPD


---

🪶 Section 1 — Vision & Fondations

Responsable : M.L. Godin
État : ✅ Complété
Objectifs :

Définir la vision globale du projet Sheet2Scene.

Structurer les mondes, époques, classes, poses et décors.

Étudier l’architecture MVP + stockage cloud.


Livrables :

docs/Section1-Vision.md

Fichiers de base /data/grimoire.json et /lib/ai.ts



---

🎨 Section 2 — Direction Artistique & UI

Responsable : Joeffry (DA) & Victor (Front-End)
État : ✅ En production stable
Objectifs :

Créer le design “Grimoire interactif” (pages animées, texture parchemin).

Intégrer ShadCN/UI, TailwindCSS, Framer Motion.

Étendre les composants réactifs et responsive.


Livrables :

docs/Section2-Design.md

UI : /app/grimoire, /components/ui/Book.tsx

QA visuelle automatisée via workflow GitHub.



---

💻 Section 3 — Front-End & UX

Responsable : Victor (Dev Front-End)
État : ✅ Validé
Objectifs :

Créer les pages /create, /history, /privacy, /about.

Intégrer Supabase et RunPod via hooks.

Implémenter animations page-turn et transitions.


Livrables :

docs/Section3-FrontEnd.md

Pages principales Next.js complètes.

QA manuelle et visuelle validée.



---

🛡️ Section 4 — Modération, QA & Support

Responsables : Camille Gagnon, Wei-Ming Tan, Lara Santos
État : ✅ Stable (Logs + Discord QA)
Objectifs :

Mettre en place macros de modération Discord/Reddit.

Gérer journal d’incident + rapport hebdo.

Workflow GitHub pour QA Design automatisée.


Livrables :

docs/Section4-Mod-QA.md

.github/workflows/check-design-qa.yml

Discord Webhook intégré.



---

⚙️ Section 5 — Backend & Intégration

Responsables : Victor (API), Maya (Privacy Ops), Eitan (Sécurité), Ava (CI/CD), Andrei (Docs)
État : ✅ En place (connecté Supabase + RunPod)
Objectifs :

Connecter le front-end au backend (Supabase + RunPod).

Structurer les API internes + logs automatiques + sécurité.

Archiver QA reports et audit logs dans Supabase.


Livrables :

docs/Section5-Backend.md

.github/workflows/check-backend.yml

scripts/check-backend.sh

Tables : scenes, qa_reports, audit_logs.



---

🛰️ Section 6 — Déploiement & Monitoring

Responsables : Ava (Release), Eitan (Sécurité), Maya (Logs), Andrei (Docs), Victor (Notif)
État : ✅ Terminé (Prod stable)
Objectifs :

Déployer l’application sur Vercel avec logs centralisés.

Surveiller via Supabase Logs et alertes Discord.

Mettre en place rollback, secrets et audit CI/CD.


Livrables :

docs/Section6-Deploy-Monitor.md

GitHub Actions complet + Monitoring QA Discord.

Intégration multi-environnements (dev / qa / prod).



---

🏁 Bilan & Prochaines étapes (v1.1)

Domaine	Tâche à venir	Responsable

🎧 Audio	Intégration /api/generate/audio.ts pour effets du grimoire	Victor
🧮 Logs RGPD	Export anonymisé des logs pour conformité	Maya
🔔 Alertes	Monitoring RunPod GPU + Discord alertes CPU	Ava
📊 Dashboard	Page /admin/monitor (visualisation QA & CI/CD)	Andrei
⚡ Optimisation	Cache Redis + prévalidation RunPod API	Eitan



---
