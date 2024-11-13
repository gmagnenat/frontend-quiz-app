import { renderQuizSelection } from "./renderQuizSelection";
import { renderQuizQuestions } from "./renderQuizQuestions";
import { renderResults } from "./renderResults";
import { getCurrentView } from "../state/state";

export function renderApp(): void {
  const container = document.getElementById("app-container");

  if (container) {
    container.innerHTML = "";
  }

  switch (getCurrentView()) {
    case "selection":
      renderQuizSelection();
      break;
    case "quiz":
      renderQuizQuestions();
      const toFocus = document.querySelector(
        ".quiz__progress-text"
      ) as HTMLElement;
      if (toFocus) toFocus.focus();
      break;
    case "result":
      renderResults();
      break;
    default:
      renderQuizSelection();
      break;
  }
}
