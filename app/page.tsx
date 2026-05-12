import Link from "next/link";
import { UiPrecisionTeaser } from "@/components/InteractiveModules";
import { getLessonFeed } from "@/services/contentService";

const navItems = [
  { href: "#how-it-works", label: "How It Works" },
  { href: "#ranking", label: "Ranking" },
  { href: "#faq", label: "FAQ" }
];

const trustItems = [
  "Think in AI-native language",
  "Architecture-first coaching",
  "Built for AI product teams"
];

const rankTiers = ["Explorer", "Builder", "Architect", "Operator", "Principal"];

const leaderboardPreview = [
  { handle: "@flow_maker", tier: "Principal", score: "9,420", trend: "+2.8%" },
  { handle: "@api_weaver", tier: "Operator", score: "8,770", trend: "+1.4%" },
  { handle: "@schema_crafter", tier: "Architect", score: "8,210", trend: "+3.1%" }
];

export default function HomePage() {
  const exercises = getLessonFeed();

  return (
    <div className="landing-shell">
      <div className="mx-auto max-w-6xl px-4 py-6 md:px-8 md:py-8">
        <header className="sticky top-0 z-50 mb-10 border-b-2 border-[#e5e5e5] bg-white/85 backdrop-blur-md">
          <nav className="flex items-center justify-between px-2 py-4 md:px-4">
            <Link href="/" className="text-xl font-black tracking-tight text-duo-green">
              VibeCoLingo
            </Link>
            <div className="hidden items-center gap-7 md:flex">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} className="landing-nav-link">
                  {item.label}
                </a>
              ))}
            </div>
            <Link href="/lesson" className="btn-primary-3d px-4 py-2 text-sm">
              Start Platform Preview
            </Link>
          </nav>
        </header>

        <section className="landing-section">
          <div>
            <p className="landing-kicker">Vibe Coding for SaaS Teams</p>
            <h1 className="mt-3 text-4xl font-black leading-tight text-[#2f2f2f] md:text-6xl">
              Think and express in AI-native language.
            </h1>
            <p className="mt-4 text-lg font-bold text-[#5f5f5f]">
              Train your team to express goals, architecture flow, and constraints in the language AI executes best.
            </p>
            <p className="mt-2 text-base font-bold text-[#7a7a7a]">
              通过 AI 原生表达训练，让你的产品意图、系统流程和优化目标一次说清楚。
            </p>
            <div className="landing-cta-group mt-8">
              <Link href="/lesson" className="btn-primary-3d px-7 py-4 text-lg">
                Start Free Lesson
              </Link>
              <a href="#how-it-works" className="btn-ghost-3d px-7 py-4 text-lg">
                See How It Works
              </a>
            </div>
          </div>
        </section>

        <section className="landing-section">
          <div className="landing-trust-row">
            {trustItems.map((item) => (
              <span key={item} className="landing-chip">
                {item}
              </span>
            ))}
          </div>
        </section>

        <section className="landing-section">
          <h2 className="section-title">Why product teams use VibeCoLingo</h2>
          <p className="section-subtitle">Build AI-native communication habits that improve quality, speed, and cross-team alignment.</p>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {[
              {
                en: "Architecture Clarity",
                zh: "架构表达更清晰",
                desc: "Communicate outcomes and boundaries before implementation details."
              },
              {
                en: "Faster Delivery",
                zh: "交付更高效",
                desc: "Reduce iteration waste by issuing high-signal prompts from the first draft."
              },
              {
                en: "Scale Readiness",
                zh: "更具可扩展性",
                desc: "Practice optimization language for reliability, data flow, and performance goals."
              }
            ].map((item) => (
              <div key={item.en} className="card-white p-6">
                <h3 className="text-lg font-black text-[#333]">{item.en}</h3>
                <p className="mt-1 text-sm font-black text-duo-blue">{item.zh}</p>
                <p className="mt-3 text-sm font-bold leading-relaxed text-[#666]">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="how-it-works" className="landing-section">
          <h2 className="section-title">How It Works</h2>
          <p className="section-subtitle">Vibe Coding loop: intent to architecture prompt to execution refinement.</p>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {[
              { step: "01", en: "Intent", zh: "意图", desc: "Define product objective, user impact, and success metric." },
              { step: "02", en: "Architect", zh: "架构", desc: "Translate goals into system-level prompts with clear constraints." },
              { step: "03", en: "Execute", zh: "执行", desc: "Evaluate output quality and optimize with targeted constraints." }
            ].map((item) => (
              <div key={item.step} className="landing-step-card">
                <p className="text-sm font-black tracking-widest text-duo-green">STEP {item.step}</p>
                <h3 className="mt-2 text-2xl font-black text-[#333]">{item.en}</h3>
                <p className="text-sm font-black text-duo-blue">{item.zh}</p>
                <p className="mt-3 text-sm font-bold text-[#666]">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="teaser" className="landing-section">
          <div className="mb-6 text-center">
            <h2 className="section-title">Try a Real Product Scenario</h2>
            <p className="section-subtitle">Low-effort drills: tap to choose, tap to reorder, and fill blanks with instant feedback for AI-native expression.</p>
          </div>
          <UiPrecisionTeaser exercises={exercises} />
          <div className="mt-8 text-center">
            <Link href="/lesson" className="btn-primary-3d px-7 py-4 text-lg">
              Continue to Full Track Lesson
            </Link>
          </div>
        </section>

        <section id="ranking" className="landing-section">
          <h2 className="section-title">Global Ranking Intelligence</h2>
          <p className="section-subtitle">Visualize skill growth with a unified score and transparent rank progression.</p>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="card-white p-6">
              <h3 className="text-lg font-black text-[#333]">Scoring Formula</h3>
              <p className="mt-3 text-sm font-bold text-[#666]">
                Global Score = accuracy x complexity weight x speed factor x consistency bonus
              </p>
              <p className="mt-3 text-sm font-bold text-[#666]">
                评分综合正确率、任务难度、完成效率和稳定表现，反映真实跨栈能力。
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {rankTiers.map((tier) => (
                  <span key={tier} className="landing-chip">
                    {tier}
                  </span>
                ))}
              </div>
            </div>
            <div className="card-white p-6">
              <h3 className="text-lg font-black text-[#333]">Profile Signals</h3>
              <ul className="mt-4 space-y-2 text-sm font-bold text-[#666]">
                <li>Skill radar across core product capabilities</li>
                <li>Global percentile and streak trend</li>
                <li>Weekly progression toward next tier</li>
              </ul>
            </div>
          </div>
          <div className="card-white mt-6 p-6">
            <h3 className="text-lg font-black text-[#333]">Leaderboard Preview</h3>
            <div className="mt-4 overflow-x-auto">
              <table className="w-full min-w-[420px] text-left text-sm font-bold text-[#555]">
                <thead>
                  <tr className="border-b-2 border-[#e5e5e5] text-[#8a8a8a]">
                    <th className="py-2">User</th>
                    <th className="py-2">Tier</th>
                    <th className="py-2">Score</th>
                    <th className="py-2">Trend</th>
                  </tr>
                </thead>
                <tbody>
                  {leaderboardPreview.map((entry) => (
                    <tr key={entry.handle} className="border-b border-[#efefef]">
                      <td className="py-3">{entry.handle}</td>
                      <td className="py-3">{entry.tier}</td>
                      <td className="py-3">{entry.score}</td>
                      <td className="py-3 text-duo-green">{entry.trend}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section id="faq" className="landing-section">
          <h2 className="section-title">FAQ</h2>
          <div className="mt-8 grid gap-4">
            {[
              {
                q: "Is this only for frontend developers?",
                a: "No. The platform is built for product teams working across modern software delivery workflows.",
                zh: "不是。平台面向在现代软件交付流程中协作的产品与工程团队。"
              },
              {
                q: "Do I need advanced English grammar?",
                a: "No. We focus on high-signal technical intent and architecture language, not traditional grammar drills.",
                zh: "不需要。重点是技术意图和架构表达，而不是传统语法训练。"
              },
              {
                q: "How is rank calculated?",
                a: "Your global score combines accuracy, complexity, speed, and consistency across learning scenarios.",
                zh: "总分由不同学习场景下的正确率、复杂度、速度和稳定性综合计算。"
              }
            ].map((item) => (
              <div key={item.q} className="card-white p-6">
                <h3 className="text-lg font-black text-[#333]">{item.q}</h3>
                <p className="mt-2 text-sm font-bold text-[#666]">{item.a}</p>
                <p className="mt-1 text-sm font-bold text-[#7a7a7a]">{item.zh}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="landing-section pb-12">
          <div className="rounded-3xl border-2 border-b-8 border-duo-green bg-[#f2ffeb] p-8 text-center md:p-12">
            <h2 className="text-3xl font-black text-[#2f2f2f] md:text-4xl">Think in AI-native language. Ship with less friction.</h2>
            <p className="mx-auto mt-4 max-w-2xl text-base font-bold text-[#5f5f5f]">
              Build professional AI communication habits and turn architecture intent into shippable outcomes.
            </p>
            <div className="mt-8">
              <Link href="/lesson" className="btn-primary-3d px-8 py-4 text-lg">
                Start Free Lesson
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
