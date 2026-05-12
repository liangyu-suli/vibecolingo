import { tracks, type ScoreEvent, type Track, type UserRankProfile } from "@/domain/contracts";
import { withEventApplied } from "@/services/scoreService";

const STORAGE_KEY = "vibecolingo.anonymous-profile.v1";

function baseTrackScores(): Record<Track, number> {
  return tracks.reduce(
    (acc, track) => {
      acc[track] = 0;
      return acc;
    },
    {} as Record<Track, number>
  );
}

export function createEmptyProfile(): UserRankProfile {
  return {
    totalScore: 0,
    trackScores: baseTrackScores(),
    tier: "Explorer",
    percentile: 5,
    streakDays: 0,
    completedExercises: 0
  };
}

export function loadProfile(): UserRankProfile {
  if (typeof window === "undefined") return createEmptyProfile();

  const raw = window.localStorage.getItem(STORAGE_KEY);
  if (!raw) return createEmptyProfile();

  try {
    const parsed = JSON.parse(raw) as UserRankProfile;
    if (!parsed.trackScores) return createEmptyProfile();
    return parsed;
  } catch {
    return createEmptyProfile();
  }
}

export function saveProfile(profile: UserRankProfile): void {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(profile));
}

export function applyEvent(event: ScoreEvent): UserRankProfile {
  const current = loadProfile();
  const next = withEventApplied(current, event);
  saveProfile(next);
  return next;
}
