import { exerciseTypes, tracks, type Exercise } from "@/domain/contracts";

const difficultyValues = new Set([1, 2, 3, 4, 5]);

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null;
}

function isLocalizedText(value: unknown): value is { en: string; zh: string } {
  return isRecord(value) && typeof value.en === "string" && typeof value.zh === "string";
}

function hasBaseShape(value: unknown): value is Record<string, unknown> {
  if (!isRecord(value)) return false;
  return (
    typeof value.id === "string" &&
    typeof value.track === "string" &&
    typeof value.type === "string" &&
    typeof value.difficulty === "number" &&
    typeof value.locale === "string" &&
    isLocalizedText(value.prompt) &&
    isLocalizedText(value.learningObjective) &&
    typeof value.contentVersion === "string" &&
    typeof value.updatedAt === "string"
  );
}

export function isExercise(value: unknown): value is Exercise {
  if (!hasBaseShape(value)) return false;
  if (!tracks.includes(value.track as (typeof tracks)[number])) return false;
  if (!exerciseTypes.includes(value.type as (typeof exerciseTypes)[number])) return false;
  if (!difficultyValues.has(value.difficulty as number)) return false;
  if (!["en", "zh", "bilingual"].includes(value.locale as string)) return false;

  if (!isRecord(value.payload)) return false;

  if (value.type === "choice") {
    return (
      Array.isArray(value.payload.options) &&
      value.payload.options.every((opt) => typeof opt === "string") &&
      typeof value.payload.correctIndex === "number" &&
      isLocalizedText(value.payload.success) &&
      isLocalizedText(value.payload.fail)
    );
  }

  if (value.type === "reorder") {
    return (
      Array.isArray(value.payload.scrambled) &&
      value.payload.scrambled.every((token) => typeof token === "string") &&
      Array.isArray(value.payload.answer) &&
      value.payload.answer.every((token) => typeof token === "string") &&
      isLocalizedText(value.payload.success) &&
      isLocalizedText(value.payload.fail)
    );
  }

  if (value.type === "fill_blank") {
    return (
      typeof value.payload.sentenceTemplate === "string" &&
      Array.isArray(value.payload.options) &&
      value.payload.options.every((opt) => typeof opt === "string") &&
      typeof value.payload.answer === "string" &&
      isLocalizedText(value.payload.success) &&
      isLocalizedText(value.payload.fail)
    );
  }

  return false;
}

export function parseExercises(input: unknown): Exercise[] {
  if (!Array.isArray(input)) return [];
  return input.filter(isExercise);
}
