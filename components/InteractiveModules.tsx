"use client";

import { useMemo, useState, type ReactNode } from "react";
import { uiDesignQuestion, type ChoiceQuestion } from "@/data/demoContent";

function UIPriorityVisual() {
  return (
    <div className="flex items-center justify-around gap-4 rounded-3xl border-2 border-[#e5e5e5] bg-[#f7f7f7] p-8">
      <div className="group text-center">
        <div className="mb-3 text-[12px] font-black uppercase tracking-widest text-[#afafaf]">Before</div>
        <div className="flex h-16 w-32 items-center justify-center rounded-none border-b-4 border-duo-blue-dark bg-duo-blue font-black text-white shadow-sm transition-transform group-hover:scale-105">
          BUTTON
        </div>
      </div>
      <div className="text-3xl font-black text-[#e5e5e5]">→</div>
      <div className="group text-center">
        <div className="mb-3 text-[12px] font-black uppercase tracking-widest text-duo-green">After</div>
        <div className="flex h-16 w-32 items-center justify-center rounded-xl border-b-4 border-duo-blue-dark bg-duo-blue font-black text-white shadow-lg transition-transform group-hover:scale-105">
          BUTTON
        </div>
      </div>
    </div>
  );
}

function ModuleWrapper({
  children,
  titleZh,
  titleEn,
  promptZh,
  promptEn,
  visualAid
}: {
  children: ReactNode;
  titleZh: string;
  titleEn: string;
  promptZh: string;
  promptEn: string;
  visualAid?: ReactNode;
}) {
  return (
    <div className="card-white mx-auto max-w-3xl overflow-hidden">
      <div className="p-6 md:p-8">
        <div className="mb-6 flex items-start justify-between">
          <div>
            <p className="mb-1 text-[12px] font-black uppercase tracking-widest text-duo-blue">{titleEn}</p>
            <h3 className="text-xl font-black text-[#3c3c3c]">{titleZh}</h3>
          </div>
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl border-2 border-[#e5e5e5] bg-[#f7f7f7] text-lg shadow-sm">💡</div>
        </div>

        {visualAid ? <div className="mb-6">{visualAid}</div> : null}

        <div className="mb-8 rounded-2xl border-2 border-transparent bg-[#f7f7f7] p-4">
          <p className="text-lg font-black leading-tight text-[#3c3c3c]">{promptEn}</p>
          <p className="mt-2 text-sm font-bold text-[#777]">{promptZh}</p>
        </div>

        {children}
      </div>
    </div>
  );
}

function ChoiceModule({ question, visualAid }: { question: ChoiceQuestion; visualAid?: ReactNode }) {
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
              type="button"
              className={`flex w-full items-center gap-4 rounded-2xl border-2 p-4 text-left transition-all duration-100 active:translate-y-[2px] ${borderClass} ${bgClass}`}
              onClick={() => setSelected(index)}
              aria-pressed={isSelected}
            >
              <span
                className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-xl border-2 text-sm font-black ${
                  isSelected ? "border-current" : "border-[#e5e5e5]"
                }`}
              >
                {String.fromCharCode(65 + index)}
              </span>
              <span className={`text-base font-black ${textClass}`}>{option}</span>
            </button>
          );
        })}
      </div>

      {feedback ? (
        <div
          className={`animate-in mt-8 flex gap-4 rounded-2xl border-2 p-5 fade-in zoom-in-95 duration-300 ${
            feedback.ok ? "border-duo-green bg-[#f2ffeb] text-duo-green" : "border-duo-red bg-[#fff5f5] text-duo-red"
          }`}
          aria-live="polite"
        >
          <div className="text-3xl">{feedback.ok ? "🦉" : "🦆"}</div>
          <div>
            <p className="text-lg font-black">{feedback.ok ? "Amazing!" : "Keep trying!"}</p>
            <p className="mt-1 text-sm font-bold leading-relaxed opacity-80">{feedback.text}</p>
          </div>
        </div>
      ) : null}
    </ModuleWrapper>
  );
}

export function UiPrecisionTeaser() {
  return <ChoiceModule question={uiDesignQuestion} visualAid={<UIPriorityVisual />} />;
}
