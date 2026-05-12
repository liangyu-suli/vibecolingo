import type { RankTier, ScoreEvent, UserRankProfile } from "@/domain/contracts";

export function calculateScore(event: ScoreEvent): number {
  const value = event.accuracy * event.complexityWeight * event.speedFactor * event.consistencyBonus;
  return Math.max(0, Math.round(value * 100));
}

export function scoreToTier(totalScore: number): RankTier {
  if (totalScore >= 9000) return "Principal";
  if (totalScore >= 6500) return "Operator";
  if (totalScore >= 4200) return "Architect";
  if (totalScore >= 2200) return "Builder";
  return "Explorer";
}

export function estimatePercentile(totalScore: number): number {
  const percentile = Math.round(Math.min(99, Math.max(5, totalScore / 100)));
  return percentile;
}

export function withEventApplied(profile: UserRankProfile, event: ScoreEvent): UserRankProfile {
  const delta = calculateScore(event);
  const trackScores = {
    ...profile.trackScores,
    [event.track]: profile.trackScores[event.track] + delta
  };
  const totalScore = profile.totalScore + delta;

  return {
    ...profile,
    totalScore,
    trackScores,
    completedExercises: profile.completedExercises + 1,
    streakDays: profile.streakDays + 1,
    percentile: estimatePercentile(totalScore),
    tier: scoreToTier(totalScore)
  };
}
