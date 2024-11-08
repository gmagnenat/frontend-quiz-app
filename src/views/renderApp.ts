import { renderQuizSelection } from "./renderQuizSelection";
import { renderQuizQuestions } from "./renderQuizQuestions";
import { renderResults } from "./renderResults";
import { getCurrentView } from "../state/state";

export function renderApp() {
  switch (getCurrentView()) {
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
