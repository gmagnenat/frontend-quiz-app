import { Quiz } from "../types/quizTypes";
import { renderApp } from "../views/renderApp";

type CurrentView = "selection" | "quiz" | "result";
type CurrentQuiz = Quiz | null;

let currentView: CurrentView = "selection";
let currentQuiz: CurrentQuiz = null;

export function getCurrentView(): CurrentView {
  return currentView;
}

export function getCurrentQuiz(): CurrentQuiz {
  return currentQuiz;
}

export function setCurrentView(view: CurrentView): void {
  currentView = view;
  renderApp();
}

export function setCurrentQuiz(quiz: CurrentQuiz): void {
  currentQuiz = quiz;
  renderApp();
}
