<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Project: portfolio-cg

Personal portfolio website built with Next.js (App Router), React 19, TypeScript, Tailwind CSS v4, and HeroUI as the primary component library. Bun is the package manager and runtime.

## Stack

- **Runtime / package manager:** Bun (use `bun` / `bunx`, not `npm` / `npx` / `yarn` / `pnpm`).
- **Framework:** Next.js `16.2.4` with the App Router (`src/app/`). React `19.2.4`.
- **Language:** TypeScript (strict). Path alias `@/*` → `./src/*`.
- **Styling:** Tailwind CSS v4 via `@tailwindcss/postcss`. Global tokens in [src/app/globals.css](src/app/globals.css) using `@theme inline` (CSS-first config — no `tailwind.config.*` file).
- **UI library:** HeroUI (latest) — primary component + theming layer. Prefer HeroUI components over hand-rolling primitives. Compose with Tailwind utility classes; do not duplicate HeroUI's own theme tokens in `globals.css`.
- **Fonts:** `next/font/google` (`Geist`, `Geist_Mono`) wired in [src/app/layout.tsx](src/app/layout.tsx) as `--font-geist-sans` / `--font-geist-mono`.
- **Linting:** Flat config in [eslint.config.mjs](eslint.config.mjs) using `eslint-config-next/core-web-vitals` + `/typescript`.

## Commands

Always use Bun:

- `bun install` — install deps (note: `sharp` and `unrs-resolver` are in `ignoreScripts` / `trustedDependencies`).
- `bun run dev` — start dev server.
- `bun run build` — production build.
- `bun run start` — serve production build.
- `bun run lint` — ESLint.
- `bunx --bun <pkg>` — run one-off CLIs (e.g. HeroUI CLI).

Do NOT generate `package-lock.json` / `yarn.lock` / `pnpm-lock.yaml`; only `bun.lock(b)` is canonical.

## HeroUI conventions

- Install via `bun add @heroui/react framer-motion` (peer). Verify the latest install/setup steps from HeroUI docs before adding — APIs evolve.
- Wrap the app in `HeroUIProvider` inside a Client Component (e.g. `src/app/providers.tsx` with `"use client"`), then render it from [src/app/layout.tsx](src/app/layout.tsx) around `{children}`.
- Tailwind v4 + HeroUI: register the HeroUI plugin in CSS (e.g. `@plugin "@heroui/react"` inside `globals.css`) per HeroUI's v4 instructions — there is no JS Tailwind config to edit.
- Use HeroUI's theming for colors/dark mode where possible; keep `globals.css` minimal (font vars + base resets).
- Mark any file using HeroUI interactive components with `"use client"` when needed; keep server components as the default.

## Project structure

```
src/
  app/
    layout.tsx     # Root layout, fonts, (will host HeroUIProvider)
    page.tsx       # Home / portfolio landing
    globals.css    # Tailwind v4 entry + theme tokens
public/            # Static assets (images, svgs)
```

When adding portfolio sections, prefer co-locating route segments under `src/app/<segment>/page.tsx` and shared UI under `src/components/`.

## Agent rules

- Read `node_modules/next/dist/docs/` for any Next.js API you're unsure about — this is Next 16, not 14/15.
- Check HeroUI's installed version (`node_modules/@heroui/react/package.json`) and its README before using a component; do not assume props from older versions.
- Never use `npm`/`npx`/`yarn`/`pnpm` in commands or instructions for this repo.
- Do not introduce a `tailwind.config.{js,ts}` — this project is Tailwind v4 CSS-first.
- Keep `metadata` in [src/app/layout.tsx](src/app/layout.tsx) updated as the portfolio's identity is built (currently still the create-next-app default).
