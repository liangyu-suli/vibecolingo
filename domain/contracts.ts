export const tracks = ["ui", "backend", "db", "api", "networking"] as const;
export type Track = (typeof tracks)[number];

export const exerciseTypes = ["choice", "reorder", "fill_blank"] as const;
export type ExerciseType = (typeof exerciseTypes)[number];

export type LocalizedText = {
  en: string;
  zh: string;
};

export type ExerciseBase = {
  id: string;
  track: Track;
  type: ExerciseType;
  difficulty: 1 | 2 | 3 | 4 | 5;
  locale: "en" | "zh" | "bilingual";
  prompt: LocalizedText;
  learningObjective: LocalizedText;
  contentVersion: string;
  updatedAt: string;
};

export type ChoicePayload = {
  options: string[];
  correctIndex: number;
  success: LocalizedText;
  fail: LocalizedText;
};

export type ReorderPayload = {
  scrambled: string[];
  answer: string[];
  success: LocalizedText;
  fail: LocalizedText;
};

export type FillBlankPayload = {
  sentenceTemplate: string;
  options: string[];
  answer: string;
  success: LocalizedText;
  fail: LocalizedText;
};

export type ChoiceExercise = ExerciseBase & {
  type: "choice";
  payload: ChoicePayload;
};

export type ReorderExercise = ExerciseBase & {
  type: "reorder";
  payload: ReorderPayload;
};

export type FillBlankExercise = ExerciseBase & {
  type: "fill_blank";
  payload: FillBlankPayload;
};

export type Exercise = ChoiceExercise | ReorderExercise | FillBlankExercise;

export type ScoreEvent = {
  exerciseId: string;
  track: Track;
  accuracy: number;
  complexityWeight: number;
  speedFactor: number;
  consistencyBonus: number;
  elapsedMs: number;
  timestamp: string;
};

export type RankTier = "Explorer" | "Builder" | "Architect" | "Operator" | "Principal";

export type UserRankProfile = {
  totalScore: number;
  trackScores: Record<Track, number>;
  tier: RankTier;
  percentile: number;
  streakDays: number;
  completedExercises: number;
};

export type LeaderboardEntry = {
  handle: string;
  tier: RankTier;
  totalScore: number;
  trend: string;
};
