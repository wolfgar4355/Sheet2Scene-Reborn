# Sheet2Scene — Patch Supabase CRUD + Partage public

## Fichiers inclus
- `app-next/lib/supabaseAdmin.ts` — client Supabase service role (server-side)
- `app-next/lib/getUserId.ts` — helper temporaire (lit `x-user-id` depuis les headers HTTP)
- `app-next/app/api/characters/` — routes GET/POST + GET/PUT/DELETE par id
- `app-next/app/api/portraits/route.ts` — liste des portraits par utilisateur
- `app-next/app/api/share/route.ts` — création de liens publics (table `shares`)
- `app-next/app/api/public/s/[slug]/route.ts` — fetch read-only des fiches partagées
- `app-next/app/s/[slug]/page.tsx` — page publique SSR

## Configuration
Dans `.env.local` :
```
SUPABASE_URL=...
SUPABASE_SERVICE_ROLE=...
NEXT_PUBLIC_BASE_URL=http://localhost:3000
```
> Utilisez le **Service Role** uniquement côté serveur (ce patch le fait).

## Auth (temporaire)
En attendant d’intégrer l’auth Supabase, les routes attendent un header `x-user-id`.
Exemple d’appel côté client :
```ts
fetch('/api/characters', { headers: { 'x-user-id': userId } })
```

## Partage public
- POST `/api/share` avec `{ characterId, expiresAt? }` → renvoie `{ slug }`
- Ouvrir `/s/{slug}` pour voir la fiche (lecture seule)

Remplacez l’usage de `x-user-id` dès que l’auth est branchée (cookies Supabase ou NextAuth).
