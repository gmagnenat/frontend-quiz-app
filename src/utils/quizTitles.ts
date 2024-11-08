import { loadData } from "./loadData";

export function quizTitles(): string[] {
  const quizzes = loadData();
  return quizzes.map((quiz) => quiz.title);
}
