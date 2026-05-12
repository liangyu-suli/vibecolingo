import { cmsExerciseFeed } from "@/data/exercises";
import type { Exercise, Track } from "@/domain/contracts";
import { parseExercises } from "@/domain/validation";

export type CmsSyncResult = {
  exercises: Exercise[];
  contentVersion: string;
  syncedAt: string;
};

function latestContentVersion(exercises: Exercise[]): string {
  if (exercises.length === 0) return "0.0.0";
  return exercises.map((item) => item.contentVersion).sort().at(-1) ?? "0.0.0";
}

export function syncFromCms(): CmsSyncResult {
  const exercises = parseExercises(cmsExerciseFeed);
  return {
    exercises,
    contentVersion: latestContentVersion(exercises),
    syncedAt: new Date().toISOString()
  };
}

export function getExercisesByTrack(track: Track): Exercise[] {
  return syncFromCms().exercises.filter((exercise) => exercise.track === track);
}

export function getLessonFeed(): Exercise[] {
  return syncFromCms().exercises;
}
