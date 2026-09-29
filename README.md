# Atelier Store

A modern eCommerce platform built with Next.js, TypeScript, Tailwind CSS, Better Auth, and Drizzle ORM.

## Tech Stack

- **Framework**: Next.js 15 with TypeScript
- **Styling**: Tailwind CSS
- **Database**: PostgreSQL (Neon)
- **ORM**: Drizzle ORM
- **Authentication**: Better Auth
- **Validation**: Zod

## Project Structure

```
src/
├── app/                 # Next.js App Router
│   ├── api/            # API routes
│   ├── layout.tsx      # Root layout
│   ├── page.tsx        # Home page
│   └── globals.css     # Global styles
├── db/                 # Database
│   ├── schema.ts       # Drizzle schema
│   └── migrations/     # Auto-generated migrations
├── lib/                # Utilities
│   ├── auth.config.ts  # Better Auth configuration
│   └── db.ts          # Database client
└── components/         # Reusable components (to be added)
```

## Getting Started

### 1. Install Dependencies

```bash
npm install
```

### 2. Set Up Environment Variables

Copy `.env.example` to `.env.local` and fill in your values:

```bash
cp .env.example .env.local
```

For Neon PostgreSQL:
- Visit [Neon Console](https://console.neon.tech/)
- Create a new project and get your `DATABASE_URL`
- Generate a random secret for `BETTER_AUTH_SECRET` (min 32 chars)

### 3. Run Database Migrations

```bash
npm run db:generate
npm run db:migrate
```

### 4. Start Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Commands

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint
- `npm run db:generate` - Generate migrations from schema
- `npm run db:migrate` - Run pending migrations
- `npm run db:studio` - Open Drizzle Studio

## Next Steps

To build out the eCommerce features:

1. **Define Database Schema**: Extend `src/db/schema.ts` with products, orders, carts, etc.
2. **Set Up Authentication Flows**: Configure email/password or OAuth providers in Better Auth
3. **Create Components**: Add reusable UI components in `src/components/`
4. **Build API Routes**: Create endpoints in `src/app/api/`
5. **Implement Pages**: Add product, checkout, and account pages
6. **Add Payments**: Integrate payment processor (Stripe, PayPal, etc.)
