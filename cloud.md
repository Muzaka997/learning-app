# Cloud Configuration — `learning-app` (frontend)

Reference for every cloud/external dependency of the React frontend: what it does,
where it's configured, and which environment variables drive it.

This is the SPA that talks to the [`devcamper_api`](../devcamper_api) backend.

> **Secrets note:** a Vite frontend has **no server-side secrets** — every `VITE_*`
> variable is inlined into the public bundle at build time and is visible to anyone.
> Never put API keys or passwords here; those belong on the backend.

---

## Overview

| Service      | Purpose                             | Configured in                | Key env vars |
|--------------|-------------------------------------|------------------------------|--------------|
| Vercel       | Static hosting (SPA)                | `vercel.json`                | `VITE_API_BASE_URL`, `VITE_API_URL` |
| Backend API  | All data (auth, courses, tests…)    | `src/config/index.ts`        | `VITE_API_BASE_URL`, `VITE_API_URL` |
| Google Fonts | Web fonts (Instrument Sans, Newsreader) | `index.html`             | — (CDN) |

---

## 1. Vercel (hosting)

Deployed as a static Vite build. [`vercel.json`](vercel.json) is a minimal **SPA rewrite**:

```json
{
  "routes": [
    { "handle": "filesystem" },
    { "src": "/.*", "dest": "/index.html" }
  ]
}
```

- `filesystem` serves real static assets (JS/CSS/images) directly.
- Everything else falls through to `index.html` so client-side React Router
  (`BrowserRouter`) can handle deep links like `/courses/:id` without 404s.

**Build settings (Vercel project):**
- Build command: `npm run build` (`tsc -b && vite build`) or `npm run build:prod`
  (`tsc && vite build --mode production`).
- Output directory: `dist`.
- Install: `npm install` / `yarn`.

**Live URL:** <https://learning-app-inky-tau.vercel.app> (this is the origin the backend's
CORS allow-list expects).

---

## 2. Backend API endpoint

The single most important cloud config. Defined in
[`src/config/index.ts`](src/config/index.ts), selected by Vite's `import.meta.env.MODE`:

| Mode          | `apiBaseURL` (with `/api/v1`)        | `apiURL` (root)                        |
|---------------|--------------------------------------|----------------------------------------|
| `development` | `http://localhost:5001/api/v1`       | `http://localhost:5001`                |
| `production`  | env override, else Render default    | env override, else Render default      |

**Env overrides (set in Vercel → Environment Variables):**
- `VITE_API_BASE_URL` — full base incl. `/api/v1` (e.g. `https://your-api.com/api/v1`)
- `VITE_API_URL` — API root without `/api/v1`

The config is forgiving: supply either one and it derives the other (adds/strips
`/api/v1`), and it trims whitespace + trailing slashes.

**Production default (when no env var is set):**
`https://devcamper-api-i20h.onrender.com` (a Render deployment).

> ⚠️ **Inconsistency to be aware of:** the backend docs describe the API as deployed on
> **Vercel**, but this frontend's hard-coded production default points at **Render**
> (`devcamper-api-i20h.onrender.com`). Whichever backend is authoritative, set
> `VITE_API_BASE_URL` explicitly in the Vercel project so you're not relying on the
> baked-in default.

### How the API client uses it
- [`src/pages/auth/authApi.ts`](src/pages/auth/authApi.ts) creates one shared axios
  instance with `baseURL: config.apiBaseURL`. Every feature hook imports this instance
  (auth, courses, tests, e-books, contact, profile upload).
- **Auth token:** on login/register the JWT is stored in `localStorage` and attached as
  `Authorization: Bearer <token>` via [`src/pages/auth/token.ts`](src/pages/auth/token.ts).
  On app load, [`authContext.tsx`](src/pages/auth/authContext.tsx) rehydrates the token
  and calls `/auth/me`. (Token in a header rather than the cookie, so cross-site cookie
  restrictions don't block auth.)

---

## 3. Google Fonts (CDN)

[`index.html`](index.html) preconnects to and loads **Instrument Sans** and **Newsreader**
from `fonts.googleapis.com` / `fonts.gstatic.com`. External network dependency at
runtime; no config needed. Self-host if you want to remove the third-party request.

---

## Environment variables summary

| Variable             | Where              | Required? | Notes |
|----------------------|--------------------|-----------|-------|
| `VITE_API_BASE_URL`  | Vercel env         | Recommended | API base incl. `/api/v1`; overrides prod default |
| `VITE_API_URL`       | Vercel env         | Optional  | API root; derived from base if omitted |

There is **no** `.env` file committed (and none needed for local dev — it defaults to
`localhost:5001`). For local overrides create `.env.local` (gitignored via `*.local`).

---

## Notes / TODOs (surfaced, not applied)

1. **Pin the production API URL** via `VITE_API_BASE_URL` in Vercel to resolve the
   Render-vs-Vercel backend ambiguity noted above.
2. **`my-child/`** is a separate Create-React-App scratch project nested in this repo,
   unrelated to the deployed app — exclude it from the Vercel build root.
