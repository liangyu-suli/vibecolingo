"use client";

import { useMemo, useState } from "react";
import { ExerciseRenderer } from "@/components/exercises/ExerciseRenderer";
import type { Exercise } from "@/domain/contracts";

export function UiPrecisionTeaser({ exercises }: { exercises: Exercise[] }) {
  const [index, setIndex] = useState(0);
  const list = useMemo(() => exercises.slice(0, 3), [exercises]);
  const current = list[index];

  if (!current) return null;

  return (
    <div className="mx-auto max-w-3xl">
      <ExerciseRenderer
        exercise={current}
        index={index}
        total={list.length}
        onSubmit={() => {
          return;
        }}
        onNext={() => {
          setIndex((prev) => (prev + 1 >= list.length ? 0 : prev + 1));
        }}
      />
    </div>
  );
}
