import { Quiz } from "../types/quizTypes";
import { loadData } from "./loadData";

/**
 * Select a quiz by title
 * @param title - The title of the quiz
 * @returns a quiz object
 */
export function selectQuiz(title: string): Quiz | undefined {
  const quizzes = loadData();
  return quizzes.find((quiz) => quiz.title === title) as Quiz;
}
