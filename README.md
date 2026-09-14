# TAMP — Truck Asset Matchmaking Platform

Rule-based freight matchmaking for South African loads and available truck capacity. See
[TAMP-SPEC-GUIDE.md](./TAMP-SPEC-GUIDE.md) for the full UI specification.

## Development

```sh
npm install
npm run db:push   # sync the Prisma schema to Postgres
npm run db:seed   # load demo data
npm run dev       # Next.js dev server on http://localhost:3000
```

Requires a PostgreSQL database; set `DATABASE_URL` in `.env` (defaults to
`postgres://tamp:tamp@localhost:5433/tamp`).

## Built with

- TypeScript
- Next.js (App Router)
- tRPC
- Prisma
- Tailwind CSS
- PostgreSQL
