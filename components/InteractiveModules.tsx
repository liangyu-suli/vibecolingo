"use client";

import { useMemo, useState } from "react";
import { bugQuestion, sentenceBlocks, styleQuestion, uiDesignQuestion, type ChoiceQuestion } from "@/data/demoContent";

function ChoiceModule({ question }: { question: ChoiceQuestion }) {
  const [selected, setSelected] = useState<number | null>(null);

  const feedback = useMemo(() => {
    if (selected === null) return null;
    const ok = selected === question.correctIndex;
    return {
      ok,
      text: ok ? question.success : question.fail
    };
  }, [question, selected]);

  return (
    <div className="glass-card p-4 md:p-5">
      <p className="text-sm text-[#8fd8ff]">{question.titleEn}</p>
      <h3 className="mt-1 text-lg font-semibold">{question.titleZh}</h3>
      <p className="mt-2 text-sm text-slate-300">{question.promptZh}</p>
      <p className="text-xs text-slate-400">{question.promptEn}</p>

      <div className="mt-4 space-y-2">
        {question.options.map((option, index) => (
          <button key={option} className="option-btn" onClick={() => setSelected(index)}>
            <span className="text-sm">{String.fromCharCode(65 + index)}. {option}</span>
          </button>
        ))}
      </div>

      {feedback && (
        <p
          className={`mt-3 rounded-lg border p-3 text-sm ${feedback.ok
            ? "border-emerald-400/40 bg-emerald-400/10 text-emerald-200"
            : "border-rose-400/40 bg-rose-400/10 text-rose-200"}`}
        >
          {feedback.text}
        </p>
      )}
    </div>
  );
}

function SentenceBuilder() {
  const [pool, setPool] = useState(sentenceBlocks.scrambled);
  const [line, setLine] = useState<string[]>([]);
  const [status, setStatus] = useState<null | boolean>(null);

  const addWord = (word: string) => {
    setLine((prev) => [...prev, word]);
    setPool((prev) => prev.filter((item, idx) => !(item === word && idx === prev.indexOf(word))));
  };

  const undoWord = (index: number) => {
    const word = line[index];
    setLine((prev) => prev.filter((_, i) => i !== index));
    setPool((prev) => [...prev, word]);
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
    <div className="glass-card p-4 md:p-5">
      <p className="text-sm text-[#8fd8ff]">Module 3: Prompt Sentence Builder</p>
      <h3 className="mt-1 text-lg font-semibold">模块三：需求拼句挑战</h3>
      <p className="mt-2 text-sm text-slate-300">把词块拼成最有效的 AI 指令句。</p>

      <div className="mt-4 rounded-xl border border-slate-500/40 bg-slate-950/40 p-3 min-h-20">
        <div className="flex flex-wrap gap-2">
          {line.length === 0 && <span className="text-sm text-slate-500">Tap words to build your sentence...</span>}
          {line.map((word, index) => (
            <button key={`${word}-${index}`} className="word-chip border-emerald-300/40 bg-emerald-900/20" onClick={() => undoWord(index)}>
              {word}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-3 flex flex-wrap gap-2">
        {pool.map((word, index) => (
          <button key={`${word}-${index}`} className="word-chip" onClick={() => addWord(word)}>
            {word}
          </button>
        ))}
      </div>

      <div className="mt-4 flex gap-2">
        <button className="option-btn text-center" onClick={check}>Check</button>
        <button className="option-btn text-center" onClick={reset}>Reset</button>
      </div>

      {status !== null && (
        <p className={`mt-3 rounded-lg border p-3 text-sm ${status
          ? "border-emerald-400/40 bg-emerald-400/10 text-emerald-200"
          : "border-rose-400/40 bg-rose-400/10 text-rose-200"}`}>
          {status
            ? "Perfect. Imperative sentence + precise terms = AI outputs become predictable."
            : "Close. Reorder the chunks to match a clear imperative sentence."}
        </p>
      )}
    </div>
  );
}

export function InteractiveModules() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      <section id="module-1"><ChoiceModule question={uiDesignQuestion} /></section>
      <section id="module-2"><ChoiceModule question={bugQuestion} /></section>
      <section id="module-3"><SentenceBuilder /></section>
      <section id="module-4"><ChoiceModule question={styleQuestion} /></section>
    </div>
  );
}
