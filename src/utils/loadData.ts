import data from "../data/data.json";
import { Quiz } from "../types/quizTypes";

/**
 * Load quiz data from JSON file
 * @returns an array of quiz
 */
export function loadData(): Quiz[] {
  return data.quizzes as Quiz[];
}
