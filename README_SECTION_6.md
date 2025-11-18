⚙️ Section 6 — Déploiement & Monitoring (DevOps Stack)

Coordination par : M.L. Godin (Chef de projet & Visionnaire)

Stack : GitHub Actions • Vercel • Supabase • Discord Webhooks • OpenAI

Objectif : Déploiement automatisé (prod + preview), QA avant merge, et notifications d’équipe.


---

🧱 1. Structure des Workflows GitHub

Fichier	Description	Branche concernée

.github/workflows/deploy-vercel.yml	Déploiement production après QA réussie	main
.github/workflows/deploy-preview.yml	Déploiement preview automatique pour test d’équipe	dev, feature/*
.github/workflows/pr-notify.yml	Notifications Discord sur PR ouvertes, mises à jour ou mergées	PR vers main



---

🚀 2. Déploiement Production — deploy-vercel.yml

Déclenchement : push sur main

QA : exécution du script scripts/check-backend.sh

Si échec → message Discord ❌

Si succès → déploiement sur Vercel Production + message Discord ✅


Secrets requis :

VERCEL_TOKEN
VERCEL_ORG_ID
VERCEL_PROJECT_ID
SUPABASE_URL
SUPABASE_SERVICE_KEY
OPENAI_API_KEY
DISCORD_WEBHOOK_URL

Message Discord Exemple :

> ✅ Deployment Successful! — Sheet2Scene déployé sur Vercel 🎉
Timestamp: 2025-11-08 06:15 UTC




---

🧪 3. Déploiement Preview — deploy-preview.yml

Déclenchement : push sur dev ou feature/*

QA : même script que prod, pour validation rapide

Déploiement : Vercel Preview (--previews)

Notification Discord : lien vers la preview


Exemple de lien preview :

https://sheet2scene-godinverse-dev.vercel.app
https://sheet2scene-feature-uiupdate.vercel.app

Message Discord Exemple :

> 🧪 Preview Deploy Successful! — Branch feature/vtt-ui prête pour test 🔮




---

📨 4. Notifications Pull Requests — pr-notify.yml

Déclenchement : pull_request vers main

Actions surveillées : opened, synchronize, closed, merged

Exécution QA rapide (scripts/check-backend.sh)

Message Discord automatique avec résumé QA ✅❌


Exemple :

✅ Pull Request Merged into main!
📄 Update world generator prompts
👤 Author: wolfgar73
🔗 View PR: https://github.com/GodinVerse/Sheet2Scene/pull/51

🧪 QA Summary: ✅ QA passed


---

🔍 5. Monitoring & Logs

Vercel Dashboard

Voir les déploiements récents

Logs (Serverless Functions / API Routes)

Accès : https://vercel.com/dashboard


Supabase Dashboard

Voir l’usage (DB, API, Storage)

Gérer les clés et RLS policies

Accès : https://app.supabase.com/


Discord Notifications

Canal : #dev-deploys

Format : clair, sans embed ni logo

Intégration via DISCORD_WEBHOOK_URL



---

🧩 6. Recommandations Futures

Étape	Suggestion

🔒 Sécurité	Rotation automatique des clés via GitHub Secrets API
📊 QA	Générer un rapport JSON détaillé des tests (export Discord)
🌙 Nightly builds	Planifier un déploiement de test quotidien (Vercel cron)
🧠 Intelligence	Ajouter un agent IA DevOps (pour monitorer logs et anomalies)



---

✅ Résumé Final

3 Workflows → QA + Preview + Prod + Notifications.

Zéro clic manuel : tout est automatisé du commit au déploiement.

Communication instantanée via Discord pour toute l’équipe.


📦 Prochaine étape suggérée :

> Créer /docs/README_SECTION_7.md — Analytics & Feedback (suivi des sessions utilisateurs et performance VTT).




---

🧭 Auteur : M.L. Godin
🛠️ Support technique : GodinVerse DevOps Team
📅 Dernière mise à jour : 2025-11-08
