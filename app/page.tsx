import { InteractiveModules } from "@/components/InteractiveModules";
import { badges } from "@/data/demoContent";

const navItems = [
  { href: "#module-1", label: "UI Design" },
  { href: "#module-2", label: "Bug Report" },
  { href: "#module-3", label: "Sentence" },
  { href: "#module-4", label: "Style" }
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#ffffff] px-4 py-8 md:px-8">
      <div className="mx-auto max-w-5xl">
        {/* Navigation Header */}
        <header className="sticky top-0 z-50 mb-16 bg-white/80 backdrop-blur-md border-b-2 border-[#e5e5e5]">
          <nav className="flex items-center justify-between px-2 py-4 md:px-4">
            <div className="flex items-center gap-3 group cursor-pointer">
              <div className="h-10 w-10 rounded-xl bg-duo-green border-b-4 border-duo-green-dark shadow-sm flex items-center justify-center text-white text-xl font-black">
                V
              </div>
              <span className="text-xl font-black tracking-tighter text-[#58cc02] uppercase group-hover:scale-105 transition-transform">VibeCodingo</span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} className="text-sm font-black text-[#afafaf] hover:text-[#4b4b4b] transition-colors uppercase tracking-wide">
                  {item.label}
                </a>
              ))}
            </div>
            <button className="btn-primary-3d px-6 py-2 text-sm">TRY FREE</button>
          </nav>
        </header>

        {/* Hero Section */}
        <section className="mb-24 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 text-center md:text-left">
            <div className="inline-block px-4 py-1 rounded-full bg-[#f2ffeb] border-2 border-[#58cc02] mb-6 animate-bounce">
              <span className="text-xs font-black text-[#58cc02] uppercase tracking-widest">Master AI technical English</span>
            </div>
            
            <h1 className="text-5xl font-black leading-[1] tracking-tight md:text-7xl mb-8 text-[#3c3c3c]">
              The fun way to <br /> <span className="text-duo-blue">talk to AI.</span>
            </h1>
            
            <p className="text-xl text-[#777] md:max-w-xl mb-10 font-bold leading-relaxed">
              Stop guessing. Start directing. VibeCodingo turns vague prompts into <span className="text-[#3c3c3c] underline decoration-duo-yellow decoration-4 underline-offset-4">technical precision</span>.
            </p>

            <div className="flex flex-col md:flex-row gap-4">
              <button className="btn-secondary-3d px-10 py-5 text-xl">GET STARTED</button>
              <button className="btn-ghost-3d px-10 py-5 text-xl">I ALREADY HAVE AN ACCOUNT</button>
            </div>
          </div>
          
          <div className="hidden md:flex flex-1 justify-center relative">
            <div className="h-64 w-64 rounded-full bg-[#f7f7f7] border-4 border-[#e5e5e5] flex items-center justify-center text-9xl animate-pulse">
              🦉
            </div>
            <div className="absolute top-0 right-0 h-20 w-20 rounded-2xl bg-duo-yellow border-b-4 border-duo-yellow-dark flex items-center justify-center text-3xl shadow-lg rotate-12">
              ✨
            </div>
            <div className="absolute bottom-0 left-0 h-16 w-16 rounded-2xl bg-duo-green border-b-4 border-duo-green-dark flex items-center justify-center text-2xl shadow-lg -rotate-12">
              🚀
            </div>
          </div>
        </section>

        {/* Interactive Modules Section */}
        <section className="mb-32">
          <div className="mb-16 text-center">
            <h2 className="section-title mb-4">Choose your skill</h2>
            <p className="section-subtitle mx-auto max-w-2xl">
              From visual design to deep debugging. 
              <span className="block mt-2 font-bold text-duo-blue">Interactive modules built for the AI era.</span>
            </p>
          </div>
          <InteractiveModules />
        </section>

        {/* Value Props Section */}
        <section className="grid gap-8 md:grid-cols-3 mb-32">
          {[
            { title: "Visual Logic", desc: "Speak in coordinates, radii, and shadows.", color: "bg-[#e0f2fe]", border: "border-duo-blue" },
            { title: "Bug Hunter", desc: "Report crashes and overlaps like a pro.", color: "bg-[#f2ffeb]", border: "border-duo-green" },
            { title: "Prompt Art", desc: "Craft logical commands that never fail.", color: "bg-[#fff9db]", border: "border-duo-yellow" }
          ].map((item) => (
            <div key={item.title} className={`${item.color} border-2 border-b-8 ${item.border} p-8 rounded-3xl transition-transform hover:-translate-y-2`}>
              <h3 className="text-xl font-black text-[#3c3c3c] mb-3">{item.title}</h3>
              <p className="text-[#4b4b4b] font-bold text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </section>

        {/* Engagement Loop */}
        <section className="mb-32">
          <div className="card-white p-10 md:p-16 text-center md:text-left relative overflow-hidden">
            <div className="absolute top-10 right-10 text-9xl opacity-10 rotate-12 hidden md:block">🏆</div>
            <div className="relative z-10">
              <h2 className="text-4xl font-black text-[#3c3c3c] mb-8">Ready to level up?</h2>
              
              <div className="grid gap-8 md:grid-cols-2 mb-12">
                <div className="space-y-6">
                  {[
                    { t: "Daily Streaks", d: "Keep the fire burning by completing one lesson a day." },
                    { t: "XP & Rewards", d: "Earn gems and badges as you master technical terms." },
                    { t: "Real Projects", d: "Use your skills to build actual apps with AI help." }
                  ].map(item => (
                    <div key={item.t} className="flex gap-5">
                      <div className="h-6 w-6 shrink-0 mt-1 rounded-full bg-duo-yellow shadow-[0_3px_0_0_#e5a400]" />
                      <div>
                        <h4 className="text-lg font-black text-[#3c3c3c]">{item.t}</h4>
                        <p className="text-sm font-bold text-[#777]">{item.d}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-3 gap-4">
                  {badges.map((badge) => (
                    <div key={badge.en} className="badge-card group">
                      <div className="h-16 w-16 rounded-3xl bg-[#f7f7f7] border-2 border-b-4 border-[#e5e5e5] flex items-center justify-center text-3xl transition-transform group-hover:scale-110">
                        {badge.en === "Bug Terminator" ? "🚫" : badge.en === "Precision Crafter" ? "🎯" : "💎"}
                      </div>
                      <h4 className="text-[10px] font-black text-[#3c3c3c] mt-2 uppercase tracking-tighter">{badge.en}</h4>
                      <p className="text-[8px] font-black text-duo-green">{badge.zh}</p>
                    </div>
                  ))}
                </div>
              </div>

              <button className="btn-primary-3d w-full md:w-auto px-12 py-5 text-xl">START LEARNING</button>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t-2 border-[#e5e5e5] py-16 text-center">
          <p className="text-sm font-black text-[#afafaf] uppercase tracking-[0.2em] mb-4">Inspired by the world's best way to learn</p>
          <div className="flex justify-center gap-8 mb-8">
            <span className="text-2xl cursor-pointer hover:scale-110 transition-transform">🦉</span>
            <span className="text-2xl cursor-pointer hover:scale-110 transition-transform">🐥</span>
            <span className="text-2xl cursor-pointer hover:scale-110 transition-transform">🦊</span>
            <span className="text-2xl cursor-pointer hover:scale-110 transition-transform">🦆</span>
          </div>
          <p className="text-xs font-bold text-[#afafaf]">© 2026 VibeCodingo. Master the prompt, master the future.</p>
        </footer>
      </div>
    </div>
  );
}
