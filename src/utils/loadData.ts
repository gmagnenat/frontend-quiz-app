import data from "../data/data.json";
import { Quiz } from "../types/quizTypes";

export function loadData(): Quiz[] {
  return data.quizzes as Quiz[];
}
