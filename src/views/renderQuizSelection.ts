import { getCurrentQuiz, setCurrentQuiz, setCurrentView } from "../state/state";
import { quizTitles } from "../utils/quizTitles";
import { selectQuiz } from "../utils/selectQuiz";
import { getCurrentView } from "../state/state";

const quizContainer = document.querySelector(".hero__quiz-container");

/**
 * Display a list of quiz titles as buttons
 */
export function renderQuizSelection(): void {
  if (quizContainer) {
    quizContainer.innerHTML = "";

    const titles = quizTitles();
    const titleList = document.createElement("ul");
    titleList.classList.add("hero__quiz-selection-list");

    let htmlContent = "";
    for (const title of titles) {
      htmlContent += `
      <li>
        <button class="btn hero__btn" data-theme="${title.toLowerCase()}">${title}</button>
      </li>
    `;
    }
    titleList.innerHTML = htmlContent;
    quizContainer.appendChild(titleList);

    // Add event listener to each button
    titleList.querySelectorAll("button").forEach((button) => {
      button.addEventListener("click", () => {
        const title = button.innerHTML;
        const selectedQuiz = selectQuiz(title);
        setCurrentQuiz(selectedQuiz);
        setCurrentView("quiz");
      });
    });
  }
}
