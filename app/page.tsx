import Link from "next/link";
import { UiPrecisionTeaser } from "@/components/InteractiveModules";

const navItems = [
  { href: "#how-it-works", label: "How It Works" },
  { href: "#teaser", label: "Try" },
  { href: "#faq", label: "FAQ" }
];

const trustItems = ["Bilingual learning", "30-second drills", "Built for AI-native creators"];

export default function HomePage() {
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
              Start Free Lesson
            </Link>
          </nav>
        </header>

        <section className="landing-section grid items-center gap-10 md:grid-cols-2">
          <div>
            <p className="landing-kicker">Speak AI Clearly</p>
            <h1 className="mt-3 text-4xl font-black leading-tight text-[#2f2f2f] md:text-6xl">
              Learn prompt English that ships better code.
            </h1>
            <p className="mt-4 text-lg font-bold text-[#5f5f5f]">
              Train practical technical phrasing so AI assistants understand your intent on the first try.
            </p>
            <p className="mt-2 text-base font-bold text-[#7a7a7a]">
              通过高频场景练习技术指令表达，让你更快写出清晰提示词，减少来回修改。
            </p>
            <div className="landing-cta-group mt-8">
              <Link href="/lesson" className="btn-primary-3d px-7 py-4 text-lg">
                Start Free Lesson
              </Link>
              <a href="#teaser" className="btn-ghost-3d px-7 py-4 text-lg">
                See Sample Lesson
              </a>
            </div>
          </div>
          <div className="rounded-3xl border-2 border-[#d8f3c4] bg-gradient-to-br from-[#f2ffeb] via-[#fcfff9] to-[#e8f6ff] p-8 shadow-sm">
            <h2 className="text-xl font-black text-[#3c3c3c]">From vague to precise</h2>
            <div className="mt-5 space-y-3">
              <div className="rounded-2xl border-2 border-[#ffdede] bg-[#fff5f5] p-4 text-sm font-bold text-[#9f4f4f]">"make it pretty"</div>
              <div className="rounded-2xl border-2 border-[#d5f4bf] bg-[#f2ffeb] p-4 text-sm font-bold text-[#3d7d14]">
                "Use a 12px border radius and fixed top navbar with blur background."
              </div>
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
          <h2 className="section-title">Why learners use VibeCoLingo</h2>
          <p className="section-subtitle">Stop guessing words. Start giving AI exact technical intent.</p>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {[
              {
                en: "Prompt Clarity",
                zh: "表达更准确",
                desc: "Learn actionable phrasing patterns instead of vague commands."
              },
              {
                en: "Faster Iteration",
                zh: "迭代更高效",
                desc: "Reduce rewrite loops by giving AI structured instructions first."
              },
              {
                en: "Real Task Context",
                zh: "贴近真实任务",
                desc: "Practice with UI, bug, and style scenarios you actually face."
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
          <p className="section-subtitle">Three short steps to reliable AI communication.</p>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {[
              { step: "01", en: "See", zh: "观察", desc: "Inspect a visual goal or bug scene." },
              { step: "02", en: "Describe", zh: "描述", desc: "Build a precise technical instruction." },
              { step: "03", en: "Apply", zh: "应用", desc: "Use it directly with your coding assistant." }
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
            <h2 className="section-title">Try a 30-Second Challenge</h2>
            <p className="section-subtitle">Pick the most precise prompt and feel the difference.</p>
          </div>
          <UiPrecisionTeaser />
          <div className="mt-8 text-center">
            <Link href="/lesson" className="btn-primary-3d px-7 py-4 text-lg">
              Continue to Full Lesson
            </Link>
          </div>
        </section>

        <section id="faq" className="landing-section">
          <h2 className="section-title">FAQ</h2>
          <div className="mt-8 grid gap-4">
            {[
              {
                q: "Do I need to be fluent in English?",
                a: "No. We focus on practical technical instruction patterns, not traditional grammar classes.",
                zh: "不需要。课程重点是技术表达模板，不是传统语法课。"
              },
              {
                q: "How long is each lesson?",
                a: "Most drills are 30-90 seconds and designed for daily repetition.",
                zh: "大多数练习为 30-90 秒，适合每日快速练习。"
              },
              {
                q: "Who is this for?",
                a: "Learners who build with AI tools and want clearer, more reliable outputs.",
                zh: "面向使用 AI 工具创作并希望获得更稳定结果的学习者。"
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
            <h2 className="text-3xl font-black text-[#2f2f2f] md:text-4xl">Write prompts that AI can execute.</h2>
            <p className="mx-auto mt-4 max-w-2xl text-base font-bold text-[#5f5f5f]">
              Build confidence with short bilingual drills and start shipping clearer requests today.
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
