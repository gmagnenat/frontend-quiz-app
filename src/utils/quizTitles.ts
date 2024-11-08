import { loadData } from "./loadData";

/**
 * Get an array of quiz titles
 * @returns an array of quiz titles
 */
export function quizTitles(): string[] {
  const quizzes = loadData();
  return quizzes.map((quiz) => quiz.title);
}
