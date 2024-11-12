import { renderApp } from "./src/views/renderApp";
import { renderQuizQuestions } from "./src/views/renderQuizQuestions";
import { selectQuiz } from "./src/utils/selectQuiz";
import {
  setCurrentQuiz,
  setCurrentView,
  setCurrentTheme,
  getCurrentTheme,
} from "./src/state/state";
import { renderResults } from "./src/views/renderResults";

renderApp();
