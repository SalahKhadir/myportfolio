# Agent Instructions & Project Guidelines

## Tech Stack & Architecture

- Next.js (App Router), React, TypeScript, Tailwind CSS.
- Strictly adhere to Server Components by default; only add `'use client'` when state or browser APIs are needed.

## Code Standards

- Keep components modular and reusable inside `components/`.
- Maintain strict typing: avoid `any` or broad type overrides.
- All copy/text must respect i18n localization via `resources/content.en.ts` and `resources/content.fr.ts`. Do not hardcode strings inside UI components.

## Anti-Slop Directives

- **Concise Implementations**: Do not write obvious comments (`// handle state`, `// return JSX`).
- **No Unused Wrappers**: Avoid unnecessary abstractions, boilerplate helpers, or speculative logic.
- **Direct Output**: Minimize conversational setup ("Sure thing!", "Here's what I did:"); provide the solution and concise summary directly.

## Testing & Quality

- Write Jest unit tests in `__tests__/` for new UI logic and components.
- Run type checks and linters before marking tasks complete.
- Do not bypass verification or tests (`--no-verify`).
