"use client";

import { useMemo, useState, ReactNode } from "react";
import { bugQuestion, sentenceBlocks, styleQuestion, uiDesignQuestion, type ChoiceQuestion } from "@/data/demoContent";

// --- Visual Aids for the Playful Theme ---

function UIPriorityVisual() {
  return (
    <div className="flex items-center justify-around gap-4 rounded-3xl bg-[#f7f7f7] p-8 border-2 border-[#e5e5e5]">
      <div className="text-center group">
        <div className="mb-3 text-[12px] font-black uppercase tracking-widest text-[#afafaf]">Original</div>
        <div className="h-16 w-32 rounded-none bg-duo-blue border-b-4 border-duo-blue-dark flex items-center justify-center text-white font-black shadow-sm transition-transform group-hover:scale-105">
          BUTTON
        </div>
      </div>
      <div className="text-[#e5e5e5] text-3xl font-black">→</div>
      <div className="text-center group">
        <div className="mb-3 text-[12px] font-black uppercase tracking-widest text-duo-green">Target</div>
        <div className="h-16 w-32 rounded-xl bg-duo-blue border-b-4 border-duo-blue-dark flex items-center justify-center text-white font-black shadow-lg transition-transform group-hover:scale-105">
          BUTTON
        </div>
      </div>
    </div>
  );
}

function BugVisual() {
  return (
    <div className="relative overflow-hidden rounded-3xl bg-[#fff5f5] p-8 border-2 border-[#ffcfcf] h-40 flex items-center justify-center group">
      <div className="absolute top-2 right-4 text-4xl opacity-20 rotate-12">🐛</div>
      <div className="absolute bottom-2 left-4 text-4xl opacity-20 -rotate-12">💥</div>
      <div className="relative z-10 text-center">
        <div className="mx-auto mb-3 h-12 w-12 rounded-full bg-duo-red flex items-center justify-center text-white text-2xl font-black shadow-lg shadow-duo-red/20 animate-bounce">
          !
        </div>
        <div className="text-sm text-duo-red font-black tracking-tight uppercase">Oops! System Error</div>
        <div className="text-[10px] text-[#ff4b4b] opacity-60 font-mono mt-1 italic">Click leads to nowhere...</div>
      </div>
    </div>
  );
}

function StyleVisual() {
  return (
    <div className="relative rounded-3xl bg-gradient-to-br from-[#e0f2fe] to-[#f0f9ff] p-10 flex items-center justify-center border-2 border-[#bae6fd] overflow-hidden">
      <div className="absolute -top-10 -left-10 h-32 w-32 rounded-full bg-duo-blue/10 blur-2xl animate-pulse" />
      <div className="absolute -bottom-10 -right-10 h-32 w-32 rounded-full bg-duo-green/10 blur-2xl animate-pulse delay-700" />
      <div className="relative h-24 w-40 rounded-3xl border-2 border-white/60 bg-white/30 backdrop-blur-xl shadow-xl flex flex-col items-center justify-center gap-2">
        <div className="h-2 w-16 rounded-full bg-white/40" />
        <div className="h-2 w-10 rounded-full bg-white/20" />
      </div>
    </div>
  );
}

// --- Shared Components ---

function ModuleWrapper({ 
  children, 
  titleZh, 
  titleEn, 
  promptZh, 
  promptEn, 
  visualAid,
  color = "blue"
}: { 
  children: ReactNode; 
  titleZh: string; 
  titleEn: string; 
  promptZh: string; 
  promptEn: string;
  visualAid?: ReactNode;
  color?: "blue" | "green" | "orange";
}) {
  const accentColor = color === "green" ? "text-duo-green" : color === "orange" ? "text-duo-orange" : "text-duo-blue";
  
  return (
    <div className="card-white overflow-hidden transition-all hover:border-[#ccc] flex flex-col">
      <div className="p-6 flex-1">
        <div className="flex items-start justify-between mb-6">
          <div>
            <p className={`text-[12px] font-black uppercase tracking-widest ${accentColor} mb-1`}>{titleEn}</p>
            <h3 className="text-xl font-black text-[#3c3c3c]">{titleZh}</h3>
          </div>
          <div className="h-10 w-10 rounded-2xl bg-[#f7f7f7] border-2 border-[#e5e5e5] flex items-center justify-center text-lg shadow-sm">
            💡
          </div>
        </div>

        {visualAid && <div className="mb-6">{visualAid}</div>}

        <div className="mb-8 p-4 rounded-2xl bg-[#f7f7f7] border-2 border-transparent hover:border-[#e5e5e5] transition-colors">
          <p className="text-[#3c3c3c] font-black leading-tight text-lg">{promptEn}</p>
          <p className="text-[#777] font-bold text-sm mt-2">{promptZh}</p>
        </div>

        {children}
      </div>
    </div>
  );
}

function ChoiceModule({ question, visualAid, color }: { question: ChoiceQuestion; visualAid?: ReactNode; color?: any }) {
  const [selected, setSelected] = useState<number | null>(null);

  const feedback = useMemo(() => {
    if (selected === null) return null;
    const ok = selected === question.correctIndex;
    return { ok, text: ok ? question.success : question.fail };
  }, [question, selected]);

  return (
    <ModuleWrapper 
      titleZh={question.titleZh} 
      titleEn={question.titleEn} 
      promptZh={question.promptZh} 
      promptEn={question.promptEn}
      visualAid={visualAid}
      color={color}
    >
      <div className="space-y-4">
        {question.options.map((option, index) => {
          const isSelected = selected === index;
          const isCorrect = index === question.correctIndex;
          
          let borderClass = "border-[#e5e5e5]";
          let textClass = "text-[#4b4b4b]";
          let bgClass = "bg-white";

          if (isSelected) {
            if (isCorrect) {
              borderClass = "border-duo-green border-b-4";
              textClass = "text-duo-green";
              bgClass = "bg-[#f2ffeb]";
            } else {
              borderClass = "border-duo-red border-b-4";
              textClass = "text-duo-red";
              bgClass = "bg-[#fff5f5]";
            }
          }

          return (
            <button 
              key={option} 
              className={`w-full text-left p-4 rounded-2xl border-2 transition-all duration-100 flex items-center gap-4 active:translate-y-[2px] ${borderClass} ${bgClass}`} 
              onClick={() => setSelected(index)}
            >
              <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-xl border-2 text-sm font-black ${isSelected ? 'border-current' : 'border-[#e5e5e5]'}`}>
                {String.fromCharCode(65 + index)}
              </span>
              <span className={`text-base font-black ${textClass}`}>{option}</span>
            </button>
          );
        })}
      </div>

      {feedback && (
        <div className={`mt-8 flex gap-4 rounded-2xl border-2 p-5 animate-in fade-in zoom-in-95 duration-300 ${
          feedback.ok ? "border-duo-green bg-[#f2ffeb] text-duo-green" : "border-duo-red bg-[#fff5f5] text-duo-red"
        }`}>
          <div className="text-3xl">{feedback.ok ? "🦉" : "🦆"}</div>
          <div>
            <p className="font-black text-lg">{feedback.ok ? "Amazing!" : "Keep trying!"}</p>
            <p className="font-bold text-sm opacity-80 leading-relaxed mt-1">{feedback.text}</p>
          </div>
        </div>
      )}
    </ModuleWrapper>
  );
}

function SentenceBuilder() {
  const [pool, setPool] = useState(sentenceBlocks.scrambled);
  const [line, setLine] = useState<string[]>([]);
  const [status, setStatus] = useState<null | boolean>(null);

  const addWord = (word: string, index: number) => {
    setLine((prev) => [...prev, word]);
    setPool((prev) => prev.filter((_, i) => i !== index));
    setStatus(null);
  };

  const undoWord = (index: number) => {
    const word = line[index];
    setLine((prev) => prev.filter((_, i) => i !== index));
    setPool((prev) => [...prev, word]);
    setStatus(null);
  };

  const check = () => {
    const ok = line.join(" ") === sentenceBlocks.answer.join(" ");
    setStatus(ok);
  };

  const reset = () => {
    setPool(sentenceBlocks.scrambled);
    setLine([]);
    setStatus(null);
  };

  return (
    <ModuleWrapper 
      titleZh="模块三：需求拼句挑战" 
      titleEn="Module 3: Prompt Sentence Builder" 
      promptZh="把词块拼成最有效的 AI 指令句。" 
      promptEn="Assemble word blocks into the most effective AI prompt."
      color="orange"
    >
      <div className="rounded-3xl border-2 border-b-4 border-[#e5e5e5] bg-[#f7f7f7] p-5 min-h-[140px] mb-6 flex flex-wrap gap-3 items-start content-start">
        {line.length === 0 && <p className="text-[#afafaf] font-bold mt-2 ml-1 text-sm italic">Tap words below...</p>}
        {line.map((word, index) => (
          <button key={`${word}-${index}`} className="word-chip-3d text-duo-blue border-duo-blue/30" onClick={() => undoWord(index)}>
            {word}
          </button>
        ))}
      </div>

      <div className="flex flex-wrap gap-3 mb-8">
        {pool.map((word, index) => (
          <button key={`${word}-${index}`} className="word-chip-3d" onClick={() => addWord(word, index)}>
            {word}
          </button>
        ))}
      </div>

      <div className="flex gap-4">
        <button className="btn-primary-3d flex-1 py-4 text-lg" onClick={check} disabled={line.length === 0}>Check Answer</button>
        <button className="btn-ghost-3d px-8 py-4 text-lg" onClick={reset}>Reset</button>
      </div>

      {status !== null && (
        <div className={`mt-8 flex gap-4 rounded-2xl border-2 p-5 animate-in fade-in zoom-in-95 duration-300 ${
          status ? "border-duo-green bg-[#f2ffeb] text-duo-green" : "border-duo-red bg-[#fff5f5] text-duo-red"
        }`}>
          <div className="text-3xl">{status ? "🏆" : "🤔"}</div>
          <div>
            <p className="font-black text-lg">{status ? "Perfect Build!" : "Not quite right"}</p>
            <p className="font-bold text-sm opacity-80 leading-relaxed mt-1">
              {status 
                ? "Imperative sentence + precise terms = predictable AI outputs." 
                : "Try to match a clear [Action][Object][Condition] structure."}
            </p>
          </div>
        </div>
      )}
    </ModuleWrapper>
  );
}

export function InteractiveModules() {
  return (
    <div className="grid gap-8 md:grid-cols-2">
      <section id="module-1"><ChoiceModule question={uiDesignQuestion} visualAid={<UIPriorityVisual />} color="blue" /></section>
      <section id="module-2"><ChoiceModule question={bugQuestion} visualAid={<BugVisual />} color="green" /></section>
      <section id="module-3"><SentenceBuilder /></section>
      <section id="module-4"><ChoiceModule question={styleQuestion} visualAid={<StyleVisual />} color="blue" /></section>
    </div>
  );
}
