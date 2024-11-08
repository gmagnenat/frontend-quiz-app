export let currentView: string = "selection";
export let currentQuiz: string | null = null;
import { renderQuizSelection } from "./renderQuizSelection";
import { renderQuizQuestions } from "./renderQuizQuestions";
import { renderResults } from "./renderResults";

export function renderApp() {
  switch (currentView) {
    case "selection":
      renderQuizSelection();
      break;
    case "quiz":
      renderQuizQuestions();
      break;
    case "result":
      renderResults();
      break;
    default:
      renderQuizSelection();
      break;
  }
}
