"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { ExerciseRenderer } from "@/components/exercises/ExerciseRenderer";
import type { Exercise, ScoreEvent, UserRankProfile } from "@/domain/contracts";
import { applyEvent, createEmptyProfile, loadProfile } from "@/services/sessionService";

type LessonClientProps = {
  exercises: Exercise[];
  title: string;
};

function complexityFromDifficulty(difficulty: number): number {
  return 1 + difficulty * 0.18;
}

function speedFromElapsed(elapsedMs: number): number {
  if (elapsedMs < 6000) return 1.2;
  if (elapsedMs < 12000) return 1.05;
  return 0.9;
}

export function LessonClient({ exercises, title }: LessonClientProps) {
  const [index, setIndex] = useState(0);
  const [profile, setProfile] = useState<UserRankProfile>(() => loadProfile());
  const [lastSubmittedId, setLastSubmittedId] = useState<string | null>(null);

  const current = exercises[index];

  const summary = useMemo(() => {
    if (exercises.length === 0) return "No exercise content is available.";
    return `${title} • ${index + 1}/${exercises.length}`;
  }, [exercises.length, index, title]);

  if (!current) {
    return (
      <div className="card-white p-5">
        <h2 className="text-xl font-black text-[#333]">Session Complete</h2>
        <p className="mt-2 text-sm font-bold text-[#666]">You completed all exercises in this stream.</p>
        <div className="mt-5 grid gap-2">
          <Link href="/profile" className="btn-primary-3d min-h-11 w-full text-sm">
            View Profile Rank
          </Link>
          <Link href="/lesson" className="btn-ghost-3d min-h-11 w-full text-sm">
            Restart Lesson
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto w-full max-w-2xl px-4 py-5 md:px-6">
      <header className="mb-4">
        <p className="text-xs font-black uppercase tracking-widest text-duo-green">Mobile-First Lesson</p>
        <h1 className="text-2xl font-black text-[#2f2f2f]">{title}</h1>
        <p className="mt-1 text-sm font-bold text-[#666]">{summary}</p>
      </header>

      <ExerciseRenderer
        exercise={current}
        index={index}
        total={exercises.length}
        onSubmit={({ isCorrect, elapsedMs }) => {
          if (lastSubmittedId === current.id) return;

          const event: ScoreEvent = {
            exerciseId: current.id,
            track: current.track,
            accuracy: isCorrect ? 1 : 0.45,
            complexityWeight: complexityFromDifficulty(current.difficulty),
            speedFactor: speedFromElapsed(elapsedMs),
            consistencyBonus: isCorrect ? 1.1 : 0.9,
            elapsedMs,
            timestamp: new Date().toISOString()
          };

          const next = applyEvent(event);
          setProfile(next);
          setLastSubmittedId(current.id);
        }}
        onNext={() => {
          setIndex((prev) => prev + 1);
          setLastSubmittedId(null);
        }}
      />

      <footer className="mt-4 rounded-2xl border-2 border-[#e5e5e5] bg-white p-4">
        <p className="text-sm font-black text-[#444]">
          Tier: <span className="text-duo-blue">{profile.tier}</span> • Score: {profile.totalScore} • Percentile: P{profile.percentile}
        </p>
        <div className="mt-3 grid grid-cols-2 gap-2">
          <Link href="/profile" className="btn-ghost-3d min-h-11 w-full text-center text-sm">
            Profile
          </Link>
          <Link href="/" className="btn-ghost-3d min-h-11 w-full text-center text-sm">
            Landing
          </Link>
        </div>
      </footer>
    </div>
  );
}

export function EmptyLesson() {
  const profile = createEmptyProfile();
  return (
    <div className="mx-auto max-w-xl px-4 py-8">
      <div className="card-white p-5">
        <h2 className="text-xl font-black text-[#333]">No Exercises Published</h2>
        <p className="mt-2 text-sm font-bold text-[#666]">
          Content sync is empty. Check CMS publish state and schema validation pipeline.
        </p>
        <p className="mt-2 text-sm font-bold text-[#666]">Current baseline tier: {profile.tier}</p>
      </div>
    </div>
  );
}
