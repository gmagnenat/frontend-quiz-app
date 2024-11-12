import { Quiz } from "../types/quizTypes";
import { renderApp } from "../views/renderApp";

type CurrentView = "selection" | "quiz" | "result";
type CurrentQuiz = Quiz | undefined;
type CurrentScore = number;
type CurrentTheme = "light" | "dark";

let currentView: CurrentView = "selection";
let currentQuiz: CurrentQuiz = undefined;
let currentScore: CurrentScore = 0;
let currentTheme: CurrentTheme = "light";

export function getCurrentTheme(): CurrentTheme {
  return currentTheme;
}

export function setCurrentTheme(theme: CurrentTheme): void {
  currentTheme = theme;
}

export function getCurrentScore(): CurrentScore {
  return currentScore;
}

export function getCurrentView(): CurrentView {
  return currentView;
}

export function getCurrentQuiz(): CurrentQuiz {
  return currentQuiz;
}

export function setCurrentScore(score: CurrentScore): void {
  currentScore = score;
}

export function setCurrentView(view: CurrentView): void {
  currentView = view;
  renderApp();
}

export function setCurrentQuiz(quiz: CurrentQuiz): void {
  currentQuiz = quiz;
  renderApp();
}
