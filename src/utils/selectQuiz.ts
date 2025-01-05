import { Quiz, QuizType } from "../types/quizTypes";
import { loadData } from "./loadData";

/**
 * Select a quiz by title
 * @param title - The title of the quiz
 * @returns a quiz object
 */
export function selectQuiz(title: string): Quiz | undefined {
  const normalizedTitle = title.toUpperCase() as keyof typeof QuizType;
  if (!Object.values(QuizType).includes(QuizType[normalizedTitle])) {
    return undefined;
  }
  const quizzes = loadData();
  return quizzes.find((quiz) => quiz.title === QuizType[normalizedTitle]);
}
