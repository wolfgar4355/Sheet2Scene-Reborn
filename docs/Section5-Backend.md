⚙️ Section 5 — Backend & Intégration

🎯 Objectif global :
Connecter le front-end (Grimoire UI) au backend (Supabase + RunPod) et structurer les API internes avec logs automatiques, cache et sécurité.


---

🧩 Stack principale

Élément	Technologie	Description

Base de données	Supabase (PostgreSQL)	Authentification, stockage des scènes, logs QA
Compute IA	RunPod	Génération d’images, poses et sons (GPU)
API	Next.js (App Router + route handlers)	Endpoints REST sécurisés
Cache	Redis (optionnel V2)	Pour les prompts déjà générés
Logs	Supabase Logs + Discord webhook	Notifications d’erreurs & succès backend



---

🧠 Modules à créer

1. api/generate/scene.ts

Reçoit un payload JSON { world, era, class, pose, decor }

Valide les entrées via zod

Lance un job RunPod avec fetch()

Enregistre le résultat dans supabase.from('scenes').insert()

Envoie un résumé sur Discord (embed bleu 🌀)


2. api/user/profile.ts

Récupère les infos utilisateur depuis Supabase Auth

Ajoute un hook d’audit : logge la dernière connexion et le nombre de créations

Permet à Maya (P.Ops) d’extraire les journaux anonymisés pour conformité RGPD


3. api/qa/report.ts

Récupère les résultats des workflows GitHub Actions

Archive dans supabase.from('qa_reports') avec timestamp

Intégré dans la page /admin/qa avec résumé par commit



---

📦 Tables Supabase à définir

Table	Champs principaux	Description

scenes	id, user_id, world, era, class, pose, image_url, status, created_at	Générations d’images
qa_reports	id, commit_sha, status, summary, created_at	Logs automatiques des workflows
audit_logs	id, user_id, action, metadata, timestamp	Actions utilisateurs pour conformité
settings	key, value, updated_at	Configuration centralisée (webhooks, quotas, etc.)



---

🔒 Sécurité et conformité

Tous les endpoints /api/* protégés par middleware.ts (JWT Supabase)

Logs QA non exposés côté client (lecture uniquement via Admin Dashboard)

Rétention : 90 jours → purge automatique (géré par Maya P.)

Support multi-environnement (.env.local, .env.production)



---

🧪 Tests & QA

Créer scripts/check-backend.sh :

Vérifie les schémas Supabase

Teste la latence RunPod

Valide les secrets d’environnement

Notifie via Discord (#builds) en cas d’échec ou succès



---

🧭 Prochaines étapes

1. Victor — Implémenter /api/generate/scene.ts avec validation Zod et retour JSON


2. Maya — Définir les tables qa_reports et audit_logs dans Supabase


3. Eitan — Auditer sécurité (JWT, rate limit, log IP)


4. Ava — Créer le workflow GitHub Actions check-backend.yml


5. Andrei — Documenter l’API (/docs/Section5-Backend.md) et créer le schéma de données




---

💡 Notes complémentaires

Prévoir endpoint futur /api/generate/audio.ts pour l’intégration musicale du grimoire (FX de pages, runes, etc.)

Considérer un namespace s2s_api_v1 pour versionner les endpoints et éviter les conflits futurs

Intégrer la métrique response_time dans Supabase Logs pour optimiser les appels RunPod
