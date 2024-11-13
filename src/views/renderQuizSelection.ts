import {
  getCurrentQuiz,
  getCurrentView,
  setCurrentQuiz,
  setCurrentView,
} from "../state/state";
import { quizTitleImages } from "../utils/quizTitlesIcons";
import { selectQuiz } from "../utils/selectQuiz";

const container = document.querySelector(".app-container");

/**
 * Display a list of quiz titles as buttons
 */
export function renderQuizSelection(): void {
  if (container) {
    container.innerHTML = "";

    const topTitle = document.querySelector(".app-title h1");
    topTitle?.remove();

    const pageTitle = document.createElement("h1");
    pageTitle.classList.add("hero__title");
    pageTitle.innerHTML = "Select a Quiz";

    const titleColumn = `
      <div>
        <h1 class="selection__title">Welcome to the<br /><span>Frontend Quiz!</span></h1>
        <p class="quiz-selection__description">Pick a subject to get started.</p>
      </div>
    `;

    const themes = quizTitleImages();

    const selectionColumn = document.createElement("div");
    const quizList = document.createElement("ul");
    quizList.classList.add("selection__links");

    selectionColumn.classList.add("selection__column");

    themes.forEach((title, icon) => {
      const listItem = document.createElement("li");
      listItem.classList.add("selection__links-item");
      const link = document.createElement("a");
      link.classList.add("selection__link");
      link.textContent = title;
      link.href = `/${title}`;
      link.dataset.theme = title;

      const linkImg = document.createElement("img");
      linkImg.alt = "";
      linkImg.classList.add("selection__link-img");
      linkImg.dataset.theme = title.toLowerCase();
      linkImg.src = icon;

      listItem.prepend(linkImg);

      link.addEventListener("click", (event: Event) => {
        event.preventDefault();
        const quiz = selectQuiz(title);
        setCurrentQuiz(quiz);
        setCurrentView("quiz");
      });

      listItem.appendChild(link);

      quizList.appendChild(listItem);
    });

    selectionColumn.appendChild(quizList);
    container.innerHTML += titleColumn;
    container.appendChild(selectionColumn);
  }
}
