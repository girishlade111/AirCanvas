# AirCanvas

A modern, full-stack Next.js application template built with cutting-edge technologies for building scalable web applications — React 19, TypeScript, Tailwind CSS 4, shadcn/ui, Prisma, and NextAuth.js.

## Features

- **Next.js 16 App Router** — React Server Components, route groups, and API routes
- **Authentication** — NextAuth.js with protected dashboard routes
- **Database layer** — Prisma ORM (SQLite for local dev, PostgreSQL-ready for production)
- **Internationalization** — next-intl for multi-locale support
- **Modern UI kit** — shadcn/ui components on Radix UI primitives, Tailwind CSS 4, Framer Motion animations, Lucide icons
- **State & forms** — TanStack Query for server state, Zustand for client state, React Hook Form + Zod validation
- **Rich content tools** — MDX editor, markdown rendering, syntax highlighting, data tables (TanStack Table), charts (Recharts)
- **Standalone build** — `next build` produces a self-contained `.next/standalone` server (see `Caddyfile` for reverse-proxy setup)

## Tech Stack

| Area | Technology |
|---|---|
| Framework | Next.js 16, React 19, TypeScript 5 |
| Styling | Tailwind CSS 4, shadcn/ui, Radix UI, Framer Motion |
| Data | Prisma 6 (SQLite / PostgreSQL), TanStack Query, Zustand |
| Auth | NextAuth.js 4 |
| Forms | React Hook Form, Zod |
| i18n | next-intl |
| Runtime | Bun (or Node.js 20+) |

## Project Structure

```
AirCanvas/
├── prisma/                 # Prisma schema (schema.prisma)
├── db/                     # Local SQLite database (custom.db)
├── public/                 # Static assets
├── src/
│   ├── app/                # Next.js App Router (pages + API routes)
│   │   └── api/            # API routes
│   ├── components/         # Reusable components
│   │   └── ui/             # shadcn/ui base components
│   ├── lib/                # Utilities and configs
│   └── ...                 # Hooks, types, styles
├── mini-services/          # Helper micro-services (see .zscripts/)
├── examples/websocket/     # WebSocket example
├── Caddyfile               # Reverse-proxy config for production
├── next.config.ts          # Next.js config
├── tailwind.config.ts      # Tailwind config
└── components.json         # shadcn/ui config
```

## Quick Start

### Prerequisites

- **Bun** (recommended) or Node.js 20+
- **PostgreSQL** for production (SQLite works for local dev)

### Installation

```bash
git clone https://github.com/girishlade111/AirCanvas.git
cd AirCanvas
bun install        # or: npm install --legacy-peer-deps
```

### Environment variables

Create a `.env` file (see `.env*` patterns in `.gitignore`):

```bash
DATABASE_URL="file:./db/custom.db"      # local SQLite
# DATABASE_URL="postgresql://user:pass@host:5432/db"  # production
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="<random-secret>"
```

### Database

```bash
bunx prisma db push      # sync schema to the database
bunx prisma generate     # generate the Prisma client
```

### Run

```bash
bun run dev      # dev server on http://localhost:3000
bun run build    # production build (standalone output)
bun run start    # serve the standalone build
```

## Deploy Notes

This is a **dynamic full-stack app** (API routes, database, auth) — it needs a server runtime and real secrets:

1. Set `DATABASE_URL` (PostgreSQL) and `NEXTAUTH_SECRET` on the host.
2. Run `prisma db push` against the production database.
3. Deploy to a Node host (VPS / Netlify / Cloudflare Workers) — the standalone build in `.next/standalone` can be served directly, with `Caddyfile` as a reverse-proxy example.

---

Built by Girish Lade — https://ladestack.in
