# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Quick Start Commands

```bash
# Development
npm run dev              # Start dev server (localhost:3000)
npm run build           # Production build
npm start               # Run production server

# Database
npm run db:generate     # Generate migration from schema.ts changes
npm run db:migrate      # Apply pending migrations
npm run db:studio       # Open Drizzle Studio (interactive DB browser)

# Code quality
npm lint                # Run ESLint
```

## Project Architecture

**Atelier Store** is a full-stack eCommerce platform built as a Next.js 15 monolith with the following architecture:

### Tech Stack
- **Framework**: Next.js 15 with App Router, TypeScript 5.3, React 19
- **Styling**: Tailwind CSS with PostCSS
- **Database**: PostgreSQL (hosted on Neon) with Drizzle ORM for type-safe queries
- **Authentication**: Better Auth with Drizzle adapter (manages sessions/users)
- **Validation**: Zod for runtime schema validation + React Hook Form for client forms

### Core Layers

1. **Frontend** (`src/app/`)
   - App Router pages use server components by default
   - API routes at `src/app/api/*`
   - Middleware at `src/middleware.ts` (currently pass-through; extend here for auth guards, logging)

2. **Backend** (`src/lib/`)
   - `db.ts`: Singleton Drizzle client instance; imported by any code needing DB access
   - `auth.config.ts`: Better Auth configuration; exposes GET/POST handlers for auth endpoints
   - Better Auth manages all session/user tables automatically via Drizzle adapter

3. **Database** (`src/db/`)
   - `schema.ts`: Drizzle table definitions (single source of truth)
   - `migrations/`: Auto-generated migration files (never edit directly)
   - To modify schema: edit `schema.ts`, run `npm run db:generate`, review migration, run `npm run db:migrate`

4. **Shared** (`src/types/`, `src/lib/constants.ts`)
   - TypeScript types and app-wide constants
   - Use `@/*` path aliases (configured in `tsconfig.json`)

### Key Integration Points

- **Environment Variables**: `DATABASE_URL` and `BETTER_AUTH_SECRET` required; see `.env.example`
- **Auth API**: Better Auth exposes routes at `/api/auth/*` automatically via `[...all]/route.ts`
- **Health Check**: `/api/health` returns `{status: 'ok', timestamp: ISO8601}`
- **Type Safety**: Drizzle provides TypeScript inference from schema; use `db.select().from(users)` for autocomplete

## Development Workflow

### Adding a New Feature

1. **Database Changes**: Modify `src/db/schema.ts` → `npm run db:generate` → review migration → `npm run db:migrate`
2. **API Endpoints**: Add handler files to `src/app/api/[feature]/route.ts`
3. **Frontend**: Create pages at `src/app/[route]/page.tsx` and components in `src/components/`
4. **Validation**: Use Zod schemas in API routes, React Hook Form on client

### Common Patterns

- **Database Queries**: Import `db` from `@/lib/db` and Drizzle functions; queries run at build time (server components) or request time (API routes)
- **Authentication**: Check session server-side via Better Auth; client-side auth state is cookie-based
- **Forms**: Use React Hook Form + Zod for validation; submit to API routes
- **Styling**: Tailwind classes directly in JSX; PostCSS processes `@apply` and other directives

## Next Steps for Feature Development

The schema currently contains only a `users` table (managed by Better Auth). To build eCommerce features:

1. **Extend Schema**: Add `products`, `orders`, `carts`, `categories` tables to `schema.ts`
2. **Build APIs**: Create endpoints in `src/app/api/` for CRUD operations
3. **Create Pages**: Add product listing, product detail, checkout flows
4. **Add Components**: Reusable UI components in `src/components/` (currently empty)
5. **Payment Integration**: Integrate Stripe or PayPal in checkout flow

## Important Notes

- Next.js **App Router** (not Pages Router); all routes defined in `src/app/`
- Server components are the default; use `'use client'` directive only where needed (forms, hooks, interactivity)
- Drizzle migrations are **immutable**; never edit generated migration files
- Better Auth automatically creates and manages `user` and `session` tables via the Drizzle adapter
- Zod schemas can be generated from Drizzle tables using `drizzle-zod` (already installed)