import { EmptyLesson, LessonClient } from "@/components/lesson/LessonClient";
import { getLessonFeed } from "@/services/contentService";

export default function LessonPage() {
  const exercises = getLessonFeed();

  if (exercises.length === 0) {
    return <EmptyLesson />;
  }

  return <LessonClient exercises={exercises} title="Core Product Scenarios" />;
}
