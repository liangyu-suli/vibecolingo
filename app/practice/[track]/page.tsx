import { notFound } from "next/navigation";
import { EmptyLesson, LessonClient } from "@/components/lesson/LessonClient";
import { tracks, type Track } from "@/domain/contracts";
import { getExercisesByTrack } from "@/services/contentService";

export default async function PracticeByTrackPage({ params }: { params: Promise<{ track: string }> }) {
  const { track } = await params;

  if (!tracks.includes(track as Track)) {
    notFound();
  }

  const exercises = getExercisesByTrack(track as Track);

  if (exercises.length === 0) {
    return <EmptyLesson />;
  }

  return <LessonClient exercises={exercises} title={`${track.toUpperCase()} Focus Practice`} />;
}
