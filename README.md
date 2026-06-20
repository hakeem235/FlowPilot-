# FlowPilot

FlowPilot is a responsive cash-flow planning application for freelancers and small businesses. It combines transparent invoice confidence weighting, daily cash forecasting, tax reserves, and scenario planning in a calm financial workspace.

## Setup

1. Install Node.js 20.9+ and PostgreSQL 15+.
2. Copy `.env.example` to `.env.local` and add a PostgreSQL URL plus Clerk keys.
3. In Clerk, enable Organizations with membership required.
4. Run `pnpm install`, `pnpm db:generate`, and `pnpm db:push`.
5. Run `pnpm dev` and open `http://localhost:3000`.

The public landing page links to an unauthed visual demo at `/dashboard`. In a production deployment, `proxy.ts` protects all application routes; use Clerk test credentials to enter them.

## Quality checks

```sh
pnpm lint
pnpm typecheck
pnpm test
pnpm build
pnpm test:e2e
```

Forecasts and tax reserves are estimates. The calculation rules live in `lib/forecast.ts` and are covered by unit tests.
