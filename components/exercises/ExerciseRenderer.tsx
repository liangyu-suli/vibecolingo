"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import type { ChoiceExercise, Exercise, FillBlankExercise, ReorderExercise } from "@/domain/contracts";

type SubmitResult = {
  isCorrect: boolean;
  elapsedMs: number;
};

type ExerciseRendererProps = {
  exercise: Exercise;
  index: number;
  total: number;
  onSubmit: (result: SubmitResult) => void;
  onNext: () => void;
};

function ModuleFrame({
  title,
  subtitle,
  promptEn,
  promptZh,
  progress,
  children
}: {
  title: string;
  subtitle: string;
  promptEn: string;
  promptZh: string;
  progress: string;
  children: React.ReactNode;
}) {
  return (
    <section className="card-white w-full overflow-hidden p-4 sm:p-5">
      <div className="mb-3 flex items-center justify-between gap-3">
        <div>
          <p className="text-xs font-black uppercase tracking-widest text-duo-blue">{subtitle}</p>
          <h2 className="text-lg font-black text-[#2f2f2f] sm:text-xl">{title}</h2>
        </div>
        <span className="rounded-full border-2 border-[#e5e5e5] bg-white px-3 py-1 text-xs font-black text-[#727272]">{progress}</span>
      </div>
      <div className="rounded-2xl border-2 border-[#e5e5e5] bg-[#fafafa] p-3">
        <p className="text-sm font-black text-[#333] sm:text-base">{promptEn}</p>
        <p className="mt-1 text-xs font-bold text-[#777] sm:text-sm">{promptZh}</p>
      </div>
      <div className="mt-4">{children}</div>
    </section>
  );
}

function ResultBar({
  done,
  isCorrect,
  success,
  fail,
  onNext
}: {
  done: boolean;
  isCorrect: boolean;
  success: string;
  fail: string;
  onNext: () => void;
}) {
  if (!done) return null;
  return (
    <div className="sticky bottom-0 mt-4 rounded-2xl border-2 border-[#d9ecd5] bg-[#f2ffeb] p-3">
      <p className={`text-sm font-black ${isCorrect ? "text-duo-green-dark" : "text-duo-red"}`}>{isCorrect ? success : fail}</p>
      <button type="button" onClick={onNext} className="btn-primary-3d mt-3 min-h-11 w-full text-sm">
        Next Exercise
      </button>
    </div>
  );
}

function ChoiceView({ exercise, onSubmit, onNext }: { exercise: ChoiceExercise; onSubmit: (result: SubmitResult) => void; onNext: () => void }) {
  const [selected, setSelected] = useState<number | null>(null);
  const [start] = useState(() => Date.now());
  const done = selected !== null;

  const isCorrect = useMemo(() => selected === exercise.payload.correctIndex, [selected, exercise.payload.correctIndex]);

  return (
    <>
      <div className="space-y-3">
        {exercise.payload.options.map((option, index) => {
          const active = selected === index;
          return (
            <button
              key={`${exercise.id}-${option}`}
              type="button"
              className={`min-h-11 w-full rounded-2xl border-2 p-3 text-left text-sm font-black transition active:translate-y-[1px] sm:text-base ${
                active ? (isCorrect ? "border-duo-green bg-[#f2ffeb]" : "border-duo-red bg-[#fff5f5]") : "border-[#e5e5e5] bg-white"
              }`}
              onClick={() => {
                setSelected(index);
                onSubmit({ isCorrect: index === exercise.payload.correctIndex, elapsedMs: Date.now() - start });
              }}
            >
              {option}
            </button>
          );
        })}
      </div>
      <ResultBar done={done} isCorrect={isCorrect} success={exercise.payload.success.en} fail={exercise.payload.fail.en} onNext={onNext} />
    </>
  );
}

function ReorderView({
  exercise,
  onSubmit,
  onNext
}: {
  exercise: ReorderExercise;
  onSubmit: (result: SubmitResult) => void;
  onNext: () => void;
}) {
  const [available, setAvailable] = useState<string[]>(exercise.payload.scrambled);
  const [picked, setPicked] = useState<string[]>([]);
  const [start] = useState(() => Date.now());
  const submittedRef = useRef(false);
  const done = picked.length === exercise.payload.answer.length;
  const isCorrect = done && picked.every((token, idx) => token === exercise.payload.answer[idx]);

  useEffect(() => {
    if (done && !submittedRef.current) {
      submittedRef.current = true;
      onSubmit({ isCorrect, elapsedMs: Date.now() - start });
    }
  }, [done, isCorrect, onSubmit, start]);

  const pick = (index: number) => {
    const token = available[index];
    setPicked((prev) => [...prev, token]);
    setAvailable((prev) => prev.filter((_, idx) => idx !== index));
  };

  const undo = (index: number) => {
    const token = picked[index];
    setAvailable((prev) => [...prev, token]);
    setPicked((prev) => prev.filter((_, idx) => idx !== index));
  };

  return (
    <>
      <div className="rounded-2xl border-2 border-[#e5e5e5] bg-white p-3">
        <p className="text-xs font-black uppercase tracking-widest text-[#989898]">Your sentence</p>
        <p className="mt-2 min-h-14 text-sm font-black text-[#343434] sm:text-base">{picked.length ? picked.join(" ") : "Tap tokens below."}</p>
      </div>

      <div className="mt-3 flex flex-wrap gap-2">
        {available.map((token, index) => (
          <button
            key={`${token}-${index}`}
            type="button"
            className="min-h-11 rounded-xl border-2 border-[#d8ebd0] bg-[#f2ffeb] px-3 text-sm font-black text-[#35631b]"
            onClick={() => pick(index)}
          >
            {token}
          </button>
        ))}
      </div>

      {picked.length > 0 ? (
        <div className="mt-3">
          <p className="mb-2 text-xs font-black uppercase tracking-widest text-[#989898]">Tap to undo</p>
          <div className="flex flex-wrap gap-2">
            {picked.map((token, index) => (
              <button
                key={`picked-${token}-${index}`}
                type="button"
                className="min-h-11 rounded-xl border-2 border-[#e5e5e5] bg-white px-3 text-sm font-black text-[#666]"
                onClick={() => undo(index)}
              >
                {token}
              </button>
            ))}
          </div>
        </div>
      ) : null}

      {done ? <ResultBar done={done} isCorrect={isCorrect} success={exercise.payload.success.en} fail={exercise.payload.fail.en} onNext={onNext} /> : null}
    </>
  );
}

function FillBlankView({
  exercise,
  onSubmit,
  onNext
}: {
  exercise: FillBlankExercise;
  onSubmit: (result: SubmitResult) => void;
  onNext: () => void;
}) {
  const [selected, setSelected] = useState<string | null>(null);
  const [start] = useState(() => Date.now());
  const done = selected !== null;
  const isCorrect = selected === exercise.payload.answer;

  return (
    <>
      <div className="rounded-2xl border-2 border-[#e5e5e5] bg-white p-4">
        <p className="text-sm font-black text-[#333] sm:text-base">{exercise.payload.sentenceTemplate.replace("____", "_____")}</p>
      </div>
      <div className="mt-3 grid gap-2 sm:grid-cols-2">
        {exercise.payload.options.map((option) => (
          <button
            key={`${exercise.id}-${option}`}
            type="button"
            className={`min-h-11 rounded-2xl border-2 p-3 text-left text-sm font-black ${
              selected === option ? (option === exercise.payload.answer ? "border-duo-green bg-[#f2ffeb]" : "border-duo-red bg-[#fff5f5]") : "border-[#e5e5e5] bg-white"
            }`}
            onClick={() => {
              setSelected(option);
              onSubmit({ isCorrect: option === exercise.payload.answer, elapsedMs: Date.now() - start });
            }}
          >
            {option}
          </button>
        ))}
      </div>
      <ResultBar done={done} isCorrect={isCorrect} success={exercise.payload.success.en} fail={exercise.payload.fail.en} onNext={onNext} />
    </>
  );
}

export function ExerciseRenderer({ exercise, index, total, onSubmit, onNext }: ExerciseRendererProps) {
  const title = `${exercise.track.toUpperCase()} Track`;
  const subtitle = exercise.learningObjective.en;
  const progress = `${index + 1}/${total}`;

  return (
    <ModuleFrame title={title} subtitle={subtitle} promptEn={exercise.prompt.en} promptZh={exercise.prompt.zh} progress={progress}>
      {exercise.type === "choice" ? <ChoiceView exercise={exercise} onSubmit={onSubmit} onNext={onNext} /> : null}
      {exercise.type === "reorder" ? <ReorderView exercise={exercise} onSubmit={onSubmit} onNext={onNext} /> : null}
      {exercise.type === "fill_blank" ? <FillBlankView exercise={exercise} onSubmit={onSubmit} onNext={onNext} /> : null}
    </ModuleFrame>
  );
}
