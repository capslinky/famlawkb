This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Developer Sitemap & Coverage

- Route: `/sitemap-dev` — shows development status, category progress, filesystem cross-checks, and TODO/FIXME findings.
- Verify coverage locally: `npm run verify:dev-sitemap` — fails if routes under `src/app` are missing from `src/data/sitemapData.ts` or vice versa.
- CI: A workflow at `.github/workflows/dev-sitemap-check.yml` runs on every push/PR and enforces the same check.
 
### Pre-commit Hook
- Install locally: `npm run hooks:install` (also runs automatically on `npm install` via the `prepare` script).
- Behavior: Runs three checks before commit:
  - `verify:dev-sitemap` (route coverage must be in sync)
  - `lint` (ESLint; must pass)
  - `type-check` (TypeScript; no type errors)
  Commits are blocked if any check fails.

Update `src/data/sitemapData.ts` when adding or removing routes so the developer sitemap remains accurate.
