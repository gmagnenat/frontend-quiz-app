import { loadData } from "./loadData";

/**
 * Get a map including quiz titles and their respective icon path
 * @returns a map of quiz titles and their respective images
 */
export function quizTitleImages(): Map<string, string> {
  const quizzes = loadData();
  return new Map(quizzes.map((quiz) => [quiz.icon, quiz.title]));
}
