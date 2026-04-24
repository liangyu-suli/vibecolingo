# vibecolingo Investor Demo Web Plan (English)

## Is an English Product Doc Better for Implementation?
Short answer: helpful, but not required.
- The Chinese doc is already sufficient for implementation.
- An English version improves wording consistency for a bilingual UI.
- It is also easier to reuse in investor-facing and global pitch materials.
- Recommended approach: keep Chinese as source-of-truth, add a concise investor-style English brief.

## 1. Goal and Deliverable
- Build a Vercel-deployable single-page website for investors to quickly understand the product concept.
- Visualize all 4 core learning modules as interactive front-end UI blocks (not static mockups).
- Prioritize responsive experience so investors can review on mobile.

## 2. Technical Stack
- Framework: Next.js (App Router)
- Styling: Tailwind CSS
- Structure: Narrative single-page landing with anchor navigation
- Deployment: Vercel (deployment operation by you)

## 3. Page Information Architecture
- Hero: one-line definition + core value
- Pain Points: vague wording / terminology gaps / sentence structure issues
- Four Modules Demo: interactive showcase of all modules
- Gamification Loop: daily challenge, XP/levels, badges, instant feedback, review loop
- CTA: final positioning statement ("professional dialect" for AI communication)

## 4. UI Implementation for the Four Modules
- Module 1 (UI Design Precision)
  - Side-by-side visual comparison + 3-option question
  - Instant feedback: correct/incorrect + concise explanation
- Module 2 (Bug Diagnosis)
  - Bug scenario card (GIF placeholder or short animation) + 3-option question
  - Highlight complaint-style vs diagnostic-style reporting
- Module 3 (Prompt Sentence Builder)
  - Word-block reorder interaction
  - Check answer + reset actions
- Module 4 (Style Vocabulary)
  - Style recognition + term matching
  - Show assembled prompt prefix examples

## 5. Responsive and Mobile-First Strategy (Critical)
- Use a mobile-first layout system.
- Stack content vertically on phones to avoid compressed two-column layouts.
- Ensure touch targets are at least 44px.
- Keep media containers adaptive and prevent horizontal overflow.
- Use Chinese-primary with concise English parallel text for readability on small screens.

## 6. Data and Component Organization
- Render exercises from structured config data (prompt/options/answer/explanation).
- Build a shared module container component and reuse it across all four modules.
- Keep content and interaction decoupled to support quick expansion and copy updates.

## 7. Acceptance Criteria
- All 4 modules are fully interactive with immediate feedback.
- Mobile width (375px): no clipping, no horizontal scrolling, clear and tappable UI.
- Tablet/desktop layouts remain readable with clear hierarchy.
- `npm run build` passes and project is ready for Vercel import/deploy.

## 8. Scope and Defaults
- Demo-only front-end for this phase; no auth, no persistence, no backend integration.
- Bug media can start with placeholders and be replaced later.
- Priority is investor communication clarity and visual storytelling efficiency.
