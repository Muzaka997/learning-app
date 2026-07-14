# Learning App (frontend)

React + TypeScript single-page app for **DevCamper** — a learning platform with courses,
e-books, assessments/quizzes, user profiles, and a contact form. It's the frontend for the
[`devcamper_api`](../devcamper_api) backend and is deployed on **Vercel**.

Live: <https://learning-app-inky-tau.vercel.app>

---

## Tech Stack

- **Framework:** React 19 + TypeScript
- **Build tool:** Vite 7
- **Routing:** react-router-dom 7 (`BrowserRouter`)
- **Styling:** MUI (`@mui/material`) + styled-components + Emotion, custom theme with
  light/dark support
- **HTTP:** axios (single shared instance)
- **PDF:** react-pdf (e-book reader)
- **Hosting:** Vercel (static SPA)

---

## Getting Started

### Prerequisites
- Node.js 18+
- The [`devcamper_api`](../devcamper_api) backend running (locally on `:5001`, or a
  deployed URL)

### Install & run

```bash
cd lets-go
npm install        # or: yarn
npm run dev        # Vite dev server (defaults to http://localhost:5173)
```

In development the app talks to `http://localhost:5001/api/v1` automatically — no config
needed. To point at a different backend, set env vars (see below).

### Environment variables

Frontend env vars are **public** (inlined into the bundle). See [cloud.md](cloud.md).

| Variable            | Description                                     | Default (prod) |
|---------------------|-------------------------------------------------|----------------|
| `VITE_API_BASE_URL` | Backend base URL incl. `/api/v1`                | Render default |
| `VITE_API_URL`      | Backend root URL (derived from base if omitted) | Render default |

For local overrides, create `.env.local` (gitignored):

```env
VITE_API_BASE_URL=http://localhost:5001/api/v1
```

---

## Scripts

| Command             | Description                                        |
|---------------------|----------------------------------------------------|
| `npm run dev`       | Start Vite dev server                              |
| `npm run start:prod`| Dev server in production mode                       |
| `npm run build`     | Type-check (`tsc -b`) + production build to `dist` |
| `npm run build:prod`| Production build (`--mode production`)             |
| `npm run preview`   | Preview the built `dist` locally                   |
| `npm run lint`      | Run ESLint                                          |

---

## Project Structure

```
lets-go/
├── index.html                 # HTML entry (loads Google Fonts + main.tsx)
├── vite.config.ts             # Vite + React plugin
├── vercel.json                # SPA rewrite for client-side routing
├── src/
│   ├── main.tsx               # React root
│   ├── App.tsx                # Routes + providers (theme, auth, router)
│   ├── config/index.ts        # Environment/API URL resolution
│   ├── theme/                 # ThemeContext (light/dark), MUI/styled theme
│   ├── global-styles.ts       # Global styled-components styles
│   ├── components/Layout/     # App shell (nav + <Outlet/>)
│   ├── navigation/            # NavBar, header, account menu, index redirect
│   └── pages/
│       ├── auth/              # login/register, AuthContext, token, PrivateRoute
│       ├── main-page/         # home
│       ├── courses/           # course list + detail (CoursePage)
│       ├── assessments/       # quizzes (test list, take test, submit)
│       ├── e-books/           # PDF library + viewer (react-pdf)
│       ├── profile/           # profile + photo upload
│       └── contact/           # contact form
└── my-child/                  # separate CRA scratch project (not part of the app)
```

---

## Routing

Defined in [`src/App.tsx`](src/App.tsx). All app routes are wrapped in `PrivateRoute`;
unauthenticated users are redirected to `/login`.

| Path              | Page              | Access  |
|-------------------|-------------------|---------|
| `/login`          | Login             | Public  |
| `/register`       | Register          | Public  |
| `/` (index)       | Index redirect    | Private |
| `/home`           | Main page         | Private |
| `/courses`        | Courses list      | Private |
| `/courses/:id`    | Course detail     | Private |
| `/assessments`    | Assessments list  | Private |
| `/tests/:id`      | Take a test       | Private |
| `/e-books`        | E-book library    | Private |
| `/profile`        | User profile      | Private |
| `/contactus`      | Contact form      | Private |
| `*`               | Fallback → layout | Private |

---

## Authentication

- Login/register call the backend and receive a JWT.
- The token is saved to `localStorage` and attached to every request as
  `Authorization: Bearer <token>` via a shared axios instance
  ([`authApi.ts`](src/pages/auth/authApi.ts) + [`token.ts`](src/pages/auth/token.ts)).
- On load, [`AuthProvider`](src/pages/auth/authContext.tsx) rehydrates the token and
  fetches `/auth/me` to restore the session.
- [`PrivateRoute`](src/pages/auth/privateRoute.tsx) gates protected pages while auth
  state is loading.

---

## Backend Integration

All data comes from the DevCamper API. Key flows:

- **Courses** — `GET /courses`, `GET /courses/:id`
- **Assessments** — `GET /tests`, `GET /tests/:id`, submit via `POST /users/:testId/submit`
- **E-books** — book list + PDF rendering with react-pdf
- **Profile** — photo upload (multipart → backend → Cloudinary)
- **Contact** — `POST /contact` (authenticated; uses the account email)

See [cloud.md](cloud.md) for how the API URL is configured across environments.

---

## Deployment

Deployed on Vercel as a static build. `vercel.json` rewrites all non-file routes to
`index.html` so React Router handles deep links. Set `VITE_API_BASE_URL` in the Vercel
project so the frontend targets the correct backend (see [cloud.md](cloud.md)).
