import { InteractiveModules } from "@/components/InteractiveModules";
import { badges } from "@/data/demoContent";

const navItems = [
  { href: "#module-1", label: "UI" },
  { href: "#module-2", label: "Bug" },
  { href: "#module-3", label: "Prompt" },
  { href: "#module-4", label: "Style" }
];

export default function HomePage() {
  return (
    <main className="page-shell pb-12">
      <header className="sticky top-3 z-20 mb-4 rounded-full border border-slate-500/40 bg-slate-900/70 px-3 py-2 backdrop-blur md:px-5">
        <nav className="flex items-center justify-between gap-2">
          <p className="text-sm font-semibold tracking-wide">VibeCodingo</p>
          <div className="flex flex-wrap justify-end gap-2 text-xs md:text-sm">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="rounded-full border border-slate-500/35 px-3 py-1.5 min-h-11 flex items-center">
                {item.label}
              </a>
            ))}
          </div>
        </nav>
      </header>

      <section className="glass-card p-5 md:p-8">
        <p className="text-sm uppercase tracking-widest text-[#8fd8ff]">Investor Demo</p>
        <h1 className="mt-2 text-3xl font-bold leading-tight md:text-5xl">
          VibeCodingo: Teach users to speak fluent AI-building language.
        </h1>
        <p className="mt-3 text-base text-slate-200 md:max-w-3xl">
          通过微学习，帮助非英语母语者掌握技术指令英语，让他们更精准地与 AI 编程助手沟通。
        </p>
        <p className="mt-1 text-sm text-slate-400 md:max-w-3xl">
          A micro-learning app that upgrades vague prompts into precise, production-ready instructions.
        </p>

        <div className="mt-5 grid gap-3 text-sm md:grid-cols-3">
          <div className="rounded-xl border border-slate-500/35 bg-slate-950/30 p-3">
            <p className="font-semibold">词不达意 / Vague prompts</p>
            <p className="mt-1 text-slate-300">"Make it pretty" leads to unpredictable outputs.</p>
          </div>
          <div className="rounded-xl border border-slate-500/35 bg-slate-950/30 p-3">
            <p className="font-semibold">术语卡壳 / Missing terms</p>
            <p className="mt-1 text-slate-300">Users know intent but lack words like overflow or radius.</p>
          </div>
          <div className="rounded-xl border border-slate-500/35 bg-slate-950/30 p-3">
            <p className="font-semibold">句式混乱 / Broken structure</p>
            <p className="mt-1 text-slate-300">Ideas are fragmented and hard for AI to execute cleanly.</p>
          </div>
        </div>
      </section>

      <section className="mt-8">
        <h2 className="section-title">四大核心模块 / Four Interactive Modules</h2>
        <p className="section-subtitle">Each module trains one critical capability: visual precision, bug diagnosis, sentence structure, and style vocabulary.</p>
        <div className="mt-4">
          <InteractiveModules />
        </div>
      </section>

      <section className="mt-8 grid gap-4 md:grid-cols-[1.3fr_1fr]">
        <article className="glass-card p-5 md:p-6">
          <h2 className="section-title">学习上瘾循环 / Engagement Loop</h2>
          <p className="section-subtitle">Daily challenge + instant feedback + mistake resurfacing = compounding prompt quality.</p>
          <ul className="mt-4 space-y-2 text-sm text-slate-200">
            <li>Daily Vibe Challenge: mixed questions from all four modules.</li>
            <li>XP + Levels: from Junior Coder to Senior Prompt Engineer.</li>
            <li>Review Engine: previously missed terms return in new contexts.</li>
          </ul>
        </article>

        <aside className="glass-card p-5 md:p-6">
          <h3 className="text-lg font-semibold">成就徽章 / Badges</h3>
          <div className="mt-3 space-y-2">
            {badges.map((badge) => (
              <div key={badge.en} className="rounded-xl border border-slate-500/35 bg-slate-950/35 p-3">
                <p className="font-semibold">{badge.zh} · {badge.en}</p>
                <p className="text-xs text-slate-300">{badge.rule}</p>
              </div>
            ))}
          </div>
        </aside>
      </section>

      <section className="mt-8 glass-card p-6 text-center md:p-8">
        <h2 className="text-2xl font-bold md:text-3xl">Not English classes. Prompt fluency for builders.</h2>
        <p className="mt-2 text-slate-300">VibeCodingo 不教语法，它教的是“与 AI 沟通的专业方言”。</p>
      </section>
    </main>
  );
}
