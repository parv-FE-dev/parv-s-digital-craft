# CLAUDE.md

Guidance for Claude Code sessions working in this repo.

## What this is

Personal portfolio site for **Parv Saxena** (Senior Frontend Engineer). Single-page, dark "VS Code / IDE"-styled site
with an "Ask Parv" AI chatbot widget. Target audience: recruiters / hiring managers. Canonical URL in metadata:
`https://parvsaxena.dev`. GitHub: `parv-FE-dev/parv-s-digital-craft`.

## Branch divergence (read first)

As of 2026-10-17, local `main` is **1 commit ahead, 3 behind** `origin/main`:
- Local only: `aa21002 Commit pending local work` (content/copy edits across About, Hero, Skills, Experience, Contact,
  Footer, Navbar; removes `<Projects />` from the page, adds `<Footer />`). Pushed to remote branch **`origin/local-wip`**
  because it conflicts with origin.
- Origin only: `df2a390 Website update`, `69d16c0 Updated chatbot for mobile devices`, `8318109 Updated OG image`.
  origin/main deletes `components/Projects.tsx` and `components/StatusBar.tsx`, adds `components/Section.tsx`,
  `app/twitter-image.tsx`, `public/Parv_Saxena_Resume.pdf`.
- This CLAUDE.md describes the **local** tree. Reconcile (merge/rebase `origin/main` and resolve component conflicts)
  before further feature work; ask the user which version of each section should win.

## History / milestones (from git log)

1. **2025-01-01** - Created from a Lovable template (`new_style_vite_react_shadcn_ts`): Vite + React + shadcn/ui + Tailwind.
   The `README.md` is still the untouched Lovable boilerplate (mentions Vite) and is outdated.
2. **2025-12 to 2026-01** - Many small Lovable-generated commits ("Changes" + merge commits): portfolio components,
   hero with typing effect, dark theme, SPA single-page structure with smooth-scroll nav and active nav highlighting,
   experience timeline (dots, pulse on active milestone, gradient line), skills visuals with icon badges.
3. **2026-04-04** - `5da8772` **Migrated Vite SPA -> Next.js 14 App Router with static export** for SEO (Metadata API
   replaced react-helmet; removed vite, react-router-dom, react-helmet; `src/components` -> `components/`).
4. **2026-04-04** - `10f75ea` Added "Ask Parv" chatbot (FAQ match -> cache -> Claude Haiku fallback). Then `50068b0`
   **removed `app/api/chat/route.ts`** and moved the API to a separate Vercel deployment, because static export cannot
   host API routes.
5. **2026-04** - Projects updated with live ResumeAI and ChatPDF links; experience timeline corrected to match resume
   (added Lifesight, removed Freelance); chat icon replaced with animated waving-boy Lottie + "Ask me anything" label;
   chatbot switched to first-person voice; "open to work" section and all sections synced to latest resume; favicon
   updated; "say hello" button removed.

## Tech stack

- Next.js 14 (App Router, `output: "export"`, `images.unoptimized: true`), React 18, TypeScript 5 (strict)
- Tailwind CSS 3 + `tailwindcss-animate` + `@tailwindcss/typography`; shadcn/ui (Radix) components
- framer-motion (animations), lottie-react (chat button), lucide-react (icons), React Query provider (mostly unused)
- Lockfiles: both `package-lock.json` and `bun.lockb` exist; npm is what recent commits updated.

## Commands

```bash
npm install
npm run dev      # next dev
npm run build    # next build -> static site in out/
npm run start    # next start (not meaningful for static export; serve out/ instead)
npm run lint     # next lint
```

No test suite exists.

## Architecture

```
app/
  layout.tsx        # Root layout, SEO metadata (title, OG, Twitter, canonical), <html className="dark">
  page.tsx          # Single page: Navbar, CommandPalette, Hero, About, Experience, Skills, Contact, Footer, StatusBar, ChatWidget
  not-found.tsx     # 404
  globals.css       # Tailwind + theme CSS variables
components/
  Hero, About, Experience, Skills, Contact, Footer, Navbar, StatusBar   # Page sections ("use client")
  Projects.tsx      # Exists locally but NOT rendered in page.tsx (removed in local commit)
  CommandPalette.tsx# Cmd/Ctrl+P or Cmd/Ctrl+K quick-nav
  ChatWidget.tsx    # Floating "Ask Parv" chat; Lottie button; sessionStorage-persisted messages
  ChatMessage.tsx   # Message bubble rendering
  providers.tsx     # QueryClient, TooltipProvider, Toaster/Sonner
  ui/               # shadcn/ui generated components (~49) - avoid hand-editing
hooks/              # useScrollReveal (section reveal), use-mobile, use-toast
lib/
  utils.ts          # cn() helper
  parv-context.ts   # Structured resume data (experience, skills, projects, contact)
  faq-cache.ts      # Keyword-based FAQ answers built from PARV_CONTEXT
  chat-cache.ts     # In-memory response cache (7-day TTL, 500 entries)
public/             # favicon, waving-boy.json (Lottie), robots.txt
```

- Path alias `@/*` -> repo root (`tsconfig.json`).
- `lib/parv-context.ts`, `faq-cache.ts`, `chat-cache.ts` are **not imported by any frontend component**; they are
  leftovers of the in-repo API route (kept as the source of truth / mirror of the separate chat API).

## Chatbot

`ChatWidget.tsx` POSTs `{ message }` to the hardcoded external endpoint
`https://parv-chat-api.vercel.app/api/chat` and renders `data.response`. On error it shows a fallback message with
Parv's email. The backend (FAQ -> cache -> Claude Haiku) lives in a separate Vercel project, not in this repo.

## Deployment & env

- Static export (`out/`), intended for Vercel/Netlify. No `vercel.json` in the repo.
- `.env.example` lists `ANTHROPIC_API_KEY` - only needed by the (removed) API route / separate chat API; the static
  site itself reads no env vars. Never commit `.env.local`.

## Gotchas / conventions

- When updating resume content (experience, skills, projects), keep section components and `lib/parv-context.ts`
  (and the external chat API's copy) consistent - commits repeatedly synced these to "match latest resume".
- Do not add API routes, server actions, or dynamic server features: `output: "export"` will fail the build.
- `tsconfig.tsbuildinfo` is committed and churns on every build; `dist/` is a stale Vite build output (gitignored).
- `eslint.config.js` is the Vite-era flat config from the template; `next lint` behaviour may not match it.
- Contact details (email, phone, LinkedIn, GitHub) are hardcoded in components and `lib/parv-context.ts`.
