🛰️ Section 6 — Déploiement & Monitoring

🎯 Objectif global

Déployer Sheet2Scene sur un environnement stable et automatisé (Vercel + Supabase + RunPod) avec monitoring des logs, alertes Discord et plan de rollback.


---

⚙️ Stack de déploiement

Élément	Technologie	Description

Frontend	Vercel (Next.js App Router)	Build continu à chaque commit sur main.
Backend	Supabase (Postgres + Edge Functions)	Hébergement de la base et des API sécurisées.
Compute IA	RunPod	Génération d’images et SFX via GPU.
CI/CD	GitHub Actions	Build → Test → Déploiement automatisé.
Logs	Supabase Logs + Discord Webhooks	Journalisation centralisée et alertes temps réel.



---

🚀 Pipeline CI/CD

1. Commit sur main

Lancement automatique du workflow s2s-agent.yml.

Exécution des tests backend (check-backend.sh).

Génération du rapport QA et insertion dans Supabase.



2. Déploiement Vercel

Trigger automatique via GitHub Integration.

Variables d’environnement injectées (SUPABASE_URL, RUNPOD_API_KEY, etc.).



3. Notification Discord

Résumé : ✅ succès / ❌ échec, durée, auteur du commit.





---

📊 Monitoring & Logs

Type	Emplacement	Description

App Logs	Vercel → Observability	Build, erreurs front, requêtes.
Backend Logs	Supabase → Table audit_logs	Actions utilisateur, connexions, erreurs.
QA Reports	Table qa_reports	Résultats automatisés de workflows.
Discord QA Channel	Webhook : DISCORD_WEBHOOK_URL	Alerte automatique à chaque test CI/CD.



---

🛡️ Sécurité & Rollback

🔐 Variables gérées via GitHub Secrets et Vercel Environment Variables.

⏪ Rollback : rebuild Vercel ↔ commit précédent (ou tag stable).

🧩 Environnement multi-niveaux :

dev → branche feature/*

main → production

qa → staging / tests




---

📦 Commandes utiles

# Build local
npm run build

# Lancer en mode production
npm start

# Forcer un redeploy sur Vercel
vercel --prod --force


---

🧭 Étapes suivantes

1. Ava J. — Configurer alertes Vercel + Supabase Logs.


2. Eitan L. — Vérifier sécurité des Secrets GitHub.


3. Andrei V. — Documenter le pipeline complet (docs/CI-CD.md).


4. Maya P. — Tester le rapport QA et purger les logs de + 90 jours.


5. Victor — Automatiser envoi Discord « Déploiement réussi » avec lien build.




---

📝 Notes complémentaires

Ajouter plus tard un ping RunPod pour valider la dispo GPU avant génération.

Intégrer Grafana Cloud ou Logflare pour visualisation longue durée.

Activer Supabase Performance Insights pour suivi des requêtes SQL.

Option future : page /admin/monitor pour visualiser les états des pipelines.
