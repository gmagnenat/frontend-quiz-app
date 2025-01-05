import { renderApp } from "./src/views/renderApp";
import {
  setCurrentTheme,
  setCurrentQuiz,
  setCurrentView,
} from "./src/state/state";
import { selectQuiz } from "./src/utils/selectQuiz";

function loadQuizFromUrl(): void {
  const path = window.location.pathname.toLowerCase();
  const quizName = path.substring(1).replace(/\b\w/g, (c) => c.toUpperCase());

  if (quizName) {
    const quiz = selectQuiz(quizName.toUpperCase());
    if (quiz) {
      setCurrentQuiz(quiz);
      setCurrentView("quiz");
    } else {
      console.error(`Quiz "${quizName}" not found.`);
    }
  }
}

function initApp(): void {
  const savedTheme = localStorage.getItem("theme") || "light";
  document.documentElement.setAttribute("data-theme", savedTheme);

  const lightMode = document.getElementById("light-mode") as HTMLInputElement;
  const darkMode = document.getElementById("dark-mode") as HTMLInputElement;
  lightMode.checked = savedTheme === "light";
  darkMode.checked = savedTheme === "dark";

  loadQuizFromUrl();

  lightMode?.addEventListener("keydown", (e) => {
    if (e.key === "ArrowRight") {
      updateTheme("dark");
    }
  });
  darkMode?.addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft") {
      updateTheme("light");
    }
  });

  lightMode?.addEventListener("click", () => {
    updateTheme("light");
  });
  darkMode?.addEventListener("click", () => {
    updateTheme("dark");
  });

  renderApp();
}

type CurrentTheme = "light" | "dark";

/**
 * Save the selected theme to localStorage and update the theme
 * @param theme
 */
function updateTheme(theme: CurrentTheme): void {
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem("theme", theme);
  setCurrentTheme(theme);
}

document.addEventListener("DOMContentLoaded", initApp);
