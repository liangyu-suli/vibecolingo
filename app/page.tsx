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
            <div className="rounded-full bg-[#f7f7f7] border-2 border-[#e5e5e5] px-4 py-1">
              <span className="text-[10px] font-black text-[#afafaf] uppercase tracking-widest">Pitch Deck Preview</span>
            </div>
          </nav>
        </header>

        {/* Hero Section */}
        <section className="mb-24 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 text-center md:text-left">
            <div className="inline-block px-4 py-1 rounded-full bg-[#f2ffeb] border-2 border-[#58cc02] mb-6">
              <span className="text-xs font-black text-[#58cc02] uppercase tracking-widest text-center">Investor Demo · Product Vision 2026</span>
            </div>
            
            <h1 className="text-5xl font-black leading-[1] tracking-tight md:text-7xl mb-8 text-[#3c3c3c]">
              Bridging the <br /> <span className="text-duo-blue">Prompting Gap.</span>
            </h1>
            
            <p className="text-xl text-[#777] md:max-w-xl mb-10 font-bold leading-relaxed">
              Helping 30M+ non-native developers master <span className="text-[#3c3c3c] underline decoration-duo-yellow decoration-4 underline-offset-4">Technical Prompt English</span> to direct AI with 100% precision.
            </p>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {[
                { label: "Precision Gap", val: "Converting 'vague vibes' into executable code instructions." },
                { label: "Market Fit", val: "Targeting the rapidly growing AI-native developer population." },
                { label: "Context First", val: "Visual-driven learning vs. traditional grammar rote-memorization." },
                { label: "Efficiency", val: "Reducing AI hallucination by 40% through high-quality input." }
              ].map(point => (
                <div key={point.label} className="p-4 rounded-2xl bg-[#f7f7f7] border-2 border-transparent hover:border-[#e5e5e5] transition-all">
                  <p className="text-[10px] font-black uppercase text-duo-blue mb-1">{point.label}</p>
                  <p className="text-xs font-bold text-[#4b4b4b] leading-tight">{point.val}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="hidden md:flex flex-1 justify-center relative">
            <div className="h-64 w-64 rounded-full bg-[#f7f7f7] border-4 border-[#e5e5e5] flex items-center justify-center text-9xl animate-pulse">
              🦉
            </div>
            <div className="absolute top-0 right-0 h-20 w-20 rounded-2xl bg-duo-yellow border-b-4 border-duo-yellow-dark flex items-center justify-center text-3xl shadow-lg rotate-12">
              💰
            </div>
            <div className="absolute bottom-0 left-0 h-16 w-16 rounded-2xl bg-duo-green border-b-4 border-duo-green-dark flex items-center justify-center text-2xl shadow-lg -rotate-12">
              📈
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

              <div className="mt-12 p-6 rounded-3xl bg-[#f2ffeb] border-2 border-[#58cc02] border-dashed">
                <p className="text-[#58cc02] font-black text-center text-sm uppercase tracking-widest">Scalable Content Architecture · Ready for Global Expansion</p>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t-2 border-[#e5e5e5] py-16 text-center">
          <h2 className="text-3xl font-black mb-4 text-[#3c3c3c]">Not English classes. Prompt fluency.</h2>
          <p className="text-[#777] font-bold max-w-lg mx-auto mb-10 leading-relaxed">
            VibeCodingo is the "professional dialect" layer between human vision and AI execution. We're building the infrastructure for the next generation of AI-native developers.
          </p>
          <div className="flex justify-center gap-8 mb-8">
            <span className="text-2xl cursor-pointer hover:scale-110 transition-transform">🦉</span>
            <span className="text-2xl cursor-pointer hover:scale-110 transition-transform">💰</span>
            <span className="text-2xl cursor-pointer hover:scale-110 transition-transform">📈</span>
            <span className="text-2xl cursor-pointer hover:scale-110 transition-transform">🚀</span>
          </div>
          <p className="text-xs font-black text-[#afafaf] uppercase tracking-[0.2em]">Contact: investor-relations@vibecolingo.io</p>
        </footer>
      </div>
    </div>
  );
}
