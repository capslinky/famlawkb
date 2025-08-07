# Repository Guidelines

## Project Structure & Module Organization
- `src/app/`: Next.js App Router routes, layouts, and server components. Folders are route segments (kebab-case), each with `page.tsx` and optional `layout.tsx`.
- `src/components/`: Reusable UI (PascalCase component files, e.g., `CalculatorCard.tsx`).
- `src/lib/`: Utilities, helpers, and shared logic (TypeScript modules).
- `src/data/`: Static content, configuration, and domain data.
- `src/hooks/`: Reusable React hooks.
- `public/`: Static assets served at the site root.

## Build, Test, and Development Commands
- `npm run dev`: Start the local dev server at http://localhost:3000.
- `npm run build`: Create a production build (checks types, compiles app).
- `npm run start`: Run the compiled production server locally.
- `npm run lint`: Run ESLint (use `npm run lint -- --fix` to auto-fix).

## Coding Style & Naming Conventions
- **Language**: TypeScript + React (Next.js 15). Prefer functional components and hooks.
- **Indentation**: 2 spaces; keep lines focused and readable.
- **Naming**: PascalCase for components (`UserCard.tsx`), camelCase for functions/vars, kebab-case for route folders (`case-management`).
- **Styling**: Tailwind CSS v4. Favor utility classes over inline styles; keep class lists purposeful.
- **Linting**: ESLint with `next/core-web-vitals`. Address warnings; do not disable rules without rationale.

## Testing Guidelines
- No test runner is configured yet. If adding tests, co-locate `*.test.ts`/`*.test.tsx` near the code under `src/` and keep them deterministic.
- Prioritize coverage for calculators, data utilities (`src/lib/`), and critical UI flows.
- Ensure tests work in CI-friendly, headless mode.

## Commit & Pull Request Guidelines
- **Commits**: Short, imperative subject lines; optional emoji prefix for context (e.g., `🚀 Launch Ready: ...`). Group related changes.
- **PRs**: Provide a concise summary, linked issues, and screenshots/GIFs for UI changes. List affected routes (e.g., `src/app/calculators/...`).
- **Quality Gate**: Run `npm run lint` and `npm run build` before submitting. Include notes on any config changes.

## Security & Configuration Tips
- Copy `.env.example` to `.env.local` for local development; never commit secrets. Common var: `NEXT_PUBLIC_SITE_URL`.
- Production env vars are managed in Vercel. Avoid reading secrets on the client.
