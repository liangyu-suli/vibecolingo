# VibeCoLingo SaaS Landing Plan (Phase 1)

## 1. Goal and Deliverable
- Reposition VibeCoLingo from a UI-only investor demo to a professional SaaS learning platform.
- Deliver a Vercel-ready single-page landing experience that communicates full-stack prompt training value.
- Keep this phase focused on docs + landing content architecture + static ranking visualization (no backend implementation).

## 2. Product Positioning
- Core promise: help teams turn architecture intent into high-quality AI execution.
- Learning model: Vibe Coding, where users practice flow, system boundaries, and outcome-oriented prompt language.
- Audience: AI-native builders, product engineers, and cross-functional teams shipping software with assistants.

## 3. Information Architecture (Landing)
- Hero: professional SaaS message around architecture intent and execution quality.
- 5-Track Capability Grid:
  - UI Creation
  - Backend Logic & Services
  - Database Modeling & Query Intent
  - API Design & Integration
  - Networking, Reliability & Performance
- Vibe Coding Method: intent -> architecture prompt -> execution refinement loop.
- Scenario Teaser: show one prompt-quality interaction with framing for cross-track expansion.
- Global Ranking Intelligence: score formula, rank tiers, profile metrics, leaderboard preview.
- CTA: start free lesson / platform preview.

## 4. Ranking and Profile Intelligence (Spec-Level)
- Scoring formula:
  - `global_score = accuracy x complexity_weight x speed_factor x consistency_bonus`
- Rank tiers:
  - Explorer
  - Builder
  - Architect
  - Operator
  - Principal
- Profile metrics:
  - Track radar across UI/Backend/DB/API/Networking
  - Global percentile
  - Streak trend and progression to next tier
- Leaderboard behavior:
  - Global board with trend deltas
  - Seasonal cadence defined as product behavior, not implemented in this phase

## 5. Public Contracts for Next Phase
- `Track = "ui" | "backend" | "db" | "api" | "networking"`
- `ScoreEvent`: captures scoring inputs per training action
- `UserRankProfile`: total score, per-track scores, tier, percentile, streak
- `LeaderboardEntry`: user handle, tier, total score, trend

## 6. Acceptance Criteria
- Landing narrative fully reflects professional SaaS positioning and 5-track scope.
- No bug-diagnosis or bug-fix phrasing remains in docs or landing copy.
- Vibe Coding philosophy is explicit: intent, architecture, and flow over low-level minutiae.
- Ranking model and profile visualization behavior are documented clearly for implementation handoff.
- Mobile width (375px) and desktop remain readable with no horizontal overflow.
- `npm run build` passes.

## 7. Scope and Defaults
- Phase 1 is frontend narrative and spec alignment only.
- No auth, persistence, backend scoring engine, or live leaderboard in this phase.
- Existing visual language is refined rather than replaced with a full rebrand.

## 8. Web-First Implementation Status (Mobile-First)
- UI/data separation implemented:
  - Generic `ExerciseRenderer` drives `choice`, `reorder`, `fill_blank`.
  - Exercise copy/answers/metadata moved into typed content payloads.
- Domain contracts introduced:
  - `Track`, `ExerciseType`, `Exercise`, `ScoreEvent`, `UserRankProfile`, `LeaderboardEntry`.
- Runtime validation introduced:
  - Content feed is validated before entering UI rendering.
- CMS workflow behavior defined in code path:
  - Feed sync service emulates headless CMS ingest and normalization.
  - Intended authoring flow: AI draft -> human approval -> publish.
- Mobile-first app routes implemented:
  - `/lesson`, `/practice/[track]`, `/profile`.
- Anonymous session rank profile:
  - Local session scoring + tier/percentile progression.
