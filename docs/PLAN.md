# VibeCoLingo — Real App Development Plan

## Vision

VibeCoLingo is a learning platform that teaches developers to write precise AI prompts by studying real codebases. Users connect a GitHub repo; the system reads it, generates context-grounded exercises, and lets the community curate which exercises are worth keeping. Good exercises enter a shared pool for spaced-repetition review.

---

## Terminology

| Term | Definition |
|---|---|
| **Exercise** | A single interactive learning unit (multiple-choice, sentence builder, etc.) — the core learning atom |
| **Candidate exercise** | An AI-generated exercise not yet reviewed by a human |
| **Approved exercise** | A candidate that passed human review and entered the active pool |
| **Review** | A user's verdict on a candidate exercise (approve / reject + optional note) |
| **Deck** | A named collection of approved exercises, typically sourced from one repo |
| **Session** | A user's timed practice run through exercises from one or more decks |

---

## Core Features

### Feature 1 — Repo Ingestion & Exercise Generation

**Goal:** Turn any public GitHub repo into a set of VibeCoLingo exercises automatically.

**Flow:**
1. User pastes a GitHub repo URL.
2. Backend fetches the file tree and reads key files (components, hooks, utils, types) via the GitHub REST API.
3. Relevant code chunks are passed to Claude with a structured prompt requesting exercises of each type (UI description, bug diagnosis, sentence builder, style vocabulary).
4. Claude returns structured JSON. Each item is stored as a `candidate` exercise linked to its source file and line range.
5. User sees a confirmation: "Generated N exercises from `owner/repo`. They're in the review queue."

**What makes a good exercise to generate:**
- UI component file → UI description or style vocabulary exercise
- A file with a known bug pattern (e.g., missing key prop, uncaught promise) → bug diagnosis exercise
- A complex prop or function signature → sentence builder exercise

**Scope boundaries for v1:**
- Public repos only (no OAuth for private repos yet)
- Read up to 50 files, max 200KB total per ingestion
- Only TypeScript/JavaScript/React repos in v1

---

### Feature 2 — Human Review Queue

**Goal:** Let users act as curators, deciding which AI-generated exercises are worth keeping.

**Flow:**
1. Reviewer opens the review queue (any logged-in user can review).
2. Exercises are shown one at a time, rendered exactly as a learner would see them.
3. Reviewer actions:
   - **Approve** — exercise enters the active pool
   - **Reject** — exercise is archived (not shown again unless admin reinstates)
   - **Edit then Approve** — reviewer can fix wording before approving
   - **Skip** — move to next without voting (doesn't count)
4. An exercise needs **2 independent approvals** before it becomes active (prevents a single bad actor from flooding the pool).
5. Reviewer earns XP for each review (gamification hook).

**Review UI notes:**
- Show the source file and line range so the reviewer can judge if the exercise is grounded in real code.
- Show a diff-style preview of what the generated exercise looks like vs the source code.

---

### Feature 3 — Active Learning Pool & Spaced Repetition

**Goal:** Let users practice approved exercises with a simple spaced-repetition algorithm.

**Flow:**
1. User selects one or more decks to study.
2. System picks exercises the user hasn't seen, or exercises due for review (based on interval schedule).
3. User completes each exercise; result (correct/incorrect, time taken) is recorded.
4. Interval algorithm (SM-2 or a simplified variant) adjusts when the exercise surfaces again.
5. After a session, user sees a summary: accuracy, XP earned, streak status.

---

## Data Model (v1)

```
Repo
  id, url, owner, name, branch, ingested_at, status (pending | ingested | failed)

Exercise
  id, repo_id, type (ui_description | bug_diagnosis | sentence_builder | style_vocabulary)
  status (candidate | approved | rejected)
  source_file, source_lines (start..end)
  content (JSON — question, options, correct_index, explanation_en, explanation_zh)
  approval_count, rejection_count
  created_at, updated_at

Review
  id, exercise_id, user_id, verdict (approve | reject | edit_approve)
  note (optional freetext)
  edited_content (JSON, nullable — the reviewer's corrected version)
  created_at

User
  id, email, display_name, xp, streak_count, last_active_at

UserExerciseRecord
  id, user_id, exercise_id
  last_seen_at, next_due_at
  correct_count, incorrect_count, ease_factor (SM-2)

Deck
  id, repo_id, name, description, exercise_count
```

---

## Tech Stack

| Layer | Choice | Reason |
|---|---|---|
| Framework | Next.js 15 (App Router) | Already in use; API routes cover backend needs |
| Language | TypeScript | Already in use |
| Styling | Tailwind CSS v4 | Already in use |
| Database | PostgreSQL via Supabase | Managed, free tier, real-time subscriptions for the review queue |
| ORM | Prisma | Type-safe, good Next.js integration |
| Auth | Clerk | Quick setup, handles GitHub OAuth for repo access later |
| AI | Vercel AI SDK + Google Gemini (`@ai-sdk/google`) | `generateObject()` returns Zod-validated structured output in a single serverless-friendly call; no separate server process; Gemini 2.5 Flash is fast and cost-effective for code-to-exercise generation |
| GitHub data | Octokit REST | Fetch file tree and file contents |
| Spaced repetition | Custom SM-2 impl | Simple enough to own; no external dependency needed |
| Deployment | Vercel | Already target platform |

### AI Integration Notes

Exercise generation is a single `generateObject()` call per file batch — no tool loop, no session state, no agent needed. The Vercel AI SDK runs inside a standard Next.js API route with no extra server.

Default model: **`gemini-2.5-flash`** — good balance of speed, context window (1M tokens, handles large repos), and cost. Swap to `gemini-2.5-pro` for higher quality if needed.

```typescript
// app/api/ingest/route.ts
import { google } from "@ai-sdk/google"
import { generateObject } from "ai"
import { z } from "zod"

const ExerciseSchema = z.object({
  exercises: z.array(z.object({
    type: z.enum(["ui_description", "bug_diagnosis", "sentence_builder", "style_vocabulary"]),
    titleEn: z.string(),
    titleZh: z.string(),
    promptEn: z.string(),
    promptZh: z.string(),
    options: z.array(z.string()).min(2).max(4),
    correctIndex: z.number(),
    explanationEn: z.string(),
    explanationZh: z.string(),
    sourceFile: z.string(),
  }))
})

const { object } = await generateObject({
  model: google("gemini-2.5-flash"),
  schema: ExerciseSchema,
  prompt: generationPrompt,
})

// object.exercises → Exercise[] — fully typed, Zod-validated
```

Environment variable required: `GOOGLE_GENERATIVE_AI_API_KEY`

---

## Build Phases

### Phase 0 — Foundation (current state)
- [x] Investor demo UI complete
- [ ] Set up Supabase project and Prisma schema
- [ ] Set up Clerk auth (email + GitHub)
- [ ] Create basic authenticated layout (header with user avatar, sign-out)

### Phase 1 — Repo Ingestion
- [ ] GitHub URL input page (`/ingest`)
- [ ] Octokit integration: fetch file tree, read files
- [ ] Claude integration: structured exercise generation via `tool_use`
- [ ] Store candidate exercises in DB
- [ ] Ingestion status page (polling or Supabase realtime)

### Phase 2 — Review Queue
- [ ] Review queue page (`/review`)
- [ ] Render each exercise type interactively during review
- [ ] Approve / Reject / Edit+Approve actions
- [ ] 2-approval threshold logic
- [ ] XP award on review

### Phase 3 — Learning Sessions
- [ ] Deck browser (`/decks`)
- [ ] Session flow (`/session/[deckId]`)
- [ ] SM-2 scheduling logic
- [ ] Session summary screen
- [ ] User profile with streak + XP

### Phase 4 — Polish
- [ ] Leaderboard
- [ ] Deck sharing (public URLs)
- [ ] Mobile-optimized review flow
- [ ] Admin tools: reinstate rejected exercises, ban bad reviewers

---

## Open Questions

1. **Approval threshold:** Should 2 approvals be enough, or should the first exercise from a new repo require more scrutiny?
2. **Exercise editing:** How much can a reviewer change before it's a "new" exercise (different source, different answer)?
3. **Repo scope:** Should exercises be scoped per-repo (deck = repo) or can users mix exercises across repos in one session?
4. **Private repos:** Phase 2 could support private repos via GitHub OAuth. Worth planning the data isolation model early.
5. **Explanation language:** English-only explanations, Chinese-only, or bilingual? The demo had both — keep that for v1.
