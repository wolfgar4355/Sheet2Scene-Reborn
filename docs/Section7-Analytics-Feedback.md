📊 Section 7 — Analytics & Feedback (Performance & Engagement)

Coordination par : M.L. Godin (Chef de projet & Visionnaire)

Stack : Vercel Analytics • Supabase Logs • PostHog • Sentry • Discord Feedback Bot

Objectif : Collecter, visualiser et exploiter les données de performance et d’usage du VTT et du site Sheet2Scene.


---

🧩 1. Composants de Suivi et Métriques

Module	Rôle	Source de données

Vercel Analytics	Mesure du temps de chargement, des pages vues et des erreurs de rendu.	Front-end Next.js
Supabase Logs	Suivi des requêtes API, latence et taux d’erreur SQL.	Back-end Supabase
PostHog	Suivi comportemental utilisateur (clics, sessions, scénarios de jeu).	Interface web & VTT
Sentry	Détection automatique des erreurs JS et exceptions API.	Client + Serveur
Discord Feedback Bot	Réception directe des commentaires utilisateurs via commandes /feedback.	Discord officiel GodinVerse



---

📈 2. Métriques Clés à Surveiller

Catégorie	Indicateur	Objectif

Performance	LCP (Largest Contentful Paint) < 2.5s	Temps de chargement optimal
Stabilité	Erreurs JS < 0.5% des sessions	Réduction des crashs front-end
Backend	Latence moyenne < 200ms	Fluidité des appels API
Engagement	Durée moyenne de session > 5 min	Intérêt utilisateur élevé
Conversion	% d’inscriptions (visite → compte) > 20%	Adoption du service
Feedback	Taux de satisfaction > 80%	Qualité de l’expérience globale



---

⚙️ 3. Implémentation Technique

Frontend (Next.js)

Intégrer : @vercel/analytics/react

Ajouter dans _app.tsx :

import { Analytics } from '@vercel/analytics/react';
function MyApp({ Component, pageProps }) {
  return <><Component {...pageProps} /><Analytics /></>;
}

Activer Sentry pour les erreurs client (via sentry.client.config.ts).


Backend (Supabase + API Routes)

Créer table usage_logs :

CREATE TABLE usage_logs (
  id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id uuid,
  route text,
  response_time_ms integer,
  status_code integer,
  created_at timestamptz DEFAULT now()
);

Ajouter un middleware dans /api pour loguer chaque requête (avec latence mesurée).


PostHog (UX tracking)

Ajouter SDK PostHog :

npm install posthog-js

Initialiser :

import posthog from 'posthog-js';
posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY, { api_host: 'https://app.posthog.com' });

Événements personnalisés : scene_created, quest_completed, vtt_session_started.


Discord Feedback Bot

Commande /feedback → envoi vers canal #player-feedback

Exemple payload :

{
  "user": "@Player42",
  "type": "bug",
  "message": "Crash en ouvrant le grimoire dans Galactic Saga"
}



---

🧠 4. Dashboards & Reporting

Outil	Tableau de bord

Vercel Analytics	Page load & erreurs front-end
Supabase SQL Editor	Requêtes de performance et usage par API
PostHog	Funnels (création → jeu → partage)
Sentry	Stack traces et anomalies récurrentes
Discord Bot	Log feedback utilisateurs en temps réel



---

🔍 5. Monitoring Proposé (Roadmap Q1 2026)

🧮 Heatmaps : suivi visuel des zones cliquées sur la page d’accueil.

🕓 Session Replay : relecture des sessions pour identifier les frictions.

🧠 IA Analytique interne : génération automatique d’insights et alertes anomalies.

📤 Weekly Report : résumé envoyé sur Discord #analytics-report.



---

✅ 6. Résumé Final

Données consolidées depuis Vercel + Supabase + PostHog + Discord.

Surveillance des performances réelles et UX du VTT.

Mise en place d’un pipeline clair : collecter → analyser → corriger → informer.


📅 Prochaine étape (Section 8) : Gamification & Player Journey — récompenses, niveaux, points d’expérience et progression visuelle des joueurs.


---

🧭 Auteur : M.L. Godin
🛠️ Support technique : GodinVerse Analytics & DevOps Team
📅 Dernière mise à jour : 2025-11-08
