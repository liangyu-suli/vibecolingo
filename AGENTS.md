# AGENTS.md — VibeCoLingo Project Index

This file is the canonical map of the repository for AI agents and contributors.

---

## Project Overview

VibeCoLingo is a learning platform that teaches developers to write precise AI prompts by studying real codebases. Users connect a GitHub repo; Claude reads it and generates context-grounded exercises; the community curates which exercises are worth keeping via a human review queue; approved exercises enter a shared pool for spaced-repetition practice.

The codebase currently contains the investor demo UI (a single-page Next.js app). Active development is expanding it into a full-stack product.

See `docs/PLAN.md` for the complete development plan and build phases.

---

## Project Structure

```
vibecolingo/
├── AGENTS.md                  # This file — project index for AI agents
├── productdesign.md           # Original product design spec (Chinese)
├── dev-plan.en.md             # Original investor demo dev plan (English, superseded)
├── dev-plan.zh.md             # Original investor demo dev plan (Chinese, superseded)
│
├── app/
│   ├── layout.tsx             # Root layout — sets font, metadata, html/body
│   ├── page.tsx               # Landing/demo page: hero, nav, 4 module demos, footer
│   └── globals.css            # Tailwind v4 theme tokens + shared utility classes
│
├── components/
│   └── InteractiveModules.tsx # Four interactive exercise widgets (client components)
│                              #   - ChoiceModule: multiple-choice questions
│                              #   - SentenceBuilder: word-block tap ordering
│                              #   - UIPriorityVisual, BugVisual, StyleVisual: visual aids
│
├── data/
│   └── demoContent.ts         # Hardcoded demo content — question data, answer keys, badges
│                              #   Exports: uiDesignQuestion, bugQuestion, styleQuestion,
│                              #            sentenceBlocks, badges, ChoiceQuestion type
│
├── docs/
│   ├── PLAN.md                # Full app development plan (phases, data model, tech stack)
│   ├── LESSONS.md             # Lesson content definitions (to be populated)
│   └── PROGRESS.md            # Progress tracking schema/data (to be populated)
│
├── next.config.ts             # Next.js config
├── tsconfig.json              # TypeScript config
├── postcss.config.mjs         # PostCSS config (Tailwind v4)
└── package.json               # Dependencies: next, react, react-dom, tailwindcss
```

---

## Core Domain Concepts

| Term | Definition |
|---|---|
| **Exercise** | A single interactive learning unit (multiple-choice, sentence builder, etc.) |
| **Candidate exercise** | AI-generated exercise awaiting human review |
| **Approved exercise** | Candidate that passed review and entered the active pool |
| **Review** | A user's verdict on a candidate (approve / reject / edit+approve) |
| **Deck** | A named collection of approved exercises, typically from one repo |
| **Session** | A user's timed practice run through exercises from one or more decks |

## Exercise Types

| Type | Description |
|---|---|
| `ui_description` | Pick the prompt that best achieves a specific visual change |
| `bug_diagnosis` | Pick the most effective bug report for a given scenario |
| `sentence_builder` | Arrange word blocks into a correct AI instruction |
| `style_vocabulary` | Match a visual style (or code pattern) to its correct term |

---

## Planned Routes (from `docs/PLAN.md`)

| Route | Purpose |
|---|---|
| `/` | Landing page (current demo) |
| `/ingest` | Submit a GitHub repo URL for exercise generation |
| `/review` | Human review queue — approve/reject candidate exercises |
| `/decks` | Browse decks of approved exercises |
| `/session/[deckId]` | Active learning session with spaced repetition |
| `/profile` | User XP, streak, review history |

---

## Planned Tech Stack

| Layer | Choice |
|---|---|
| Framework | Next.js 15 (App Router) |
| Database | PostgreSQL via Supabase |
| ORM | Prisma |
| Auth | Clerk |
| AI | Vercel AI SDK + Google Gemini (`@ai-sdk/google`) — `generateObject()` with Zod schema, `gemini-2.5-flash` by default |
| GitHub data | Octokit REST |
| Deployment | Vercel |

---

## Key Conventions

- **Styling:** Tailwind CSS v4. Custom design tokens in `globals.css` under `@theme`. Shared utility classes: `.btn-primary-3d`, `.card-white`, `.word-chip-3d`.
- **Color palette:** Duolingo-inspired — `#58cc02` green, `#1cb0f6` blue, `#ff4b4b` red, `#ffc800` yellow.
- **Bilingual UI:** Labels appear in both English and Chinese. English is primary; Chinese is subtitle/annotation.
- **Exercise content schema:** Defined by the `ChoiceQuestion` type in `data/demoContent.ts`. The DB `content` column stores this same shape as JSON.
- **No backend yet:** The current codebase is static/client-side. API routes and DB integration are Phase 1+ work.

---

## Docs

| File | Purpose |
|---|---|
| `docs/PLAN.md` | Full development plan — phases, data model, tech stack, open questions |
| `docs/LESSONS.md` | Lesson content definitions (to be populated) |
| `docs/PROGRESS.md` | Progress tracking schema and data structure (to be populated) |
| `productdesign.md` | Original product design document (Chinese) |
| `dev-plan.en.md` | Original investor demo dev plan (English, superseded by PLAN.md) |
| `dev-plan.zh.md` | Original investor demo dev plan (Chinese, superseded by PLAN.md) |
