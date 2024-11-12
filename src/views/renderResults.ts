import { getCurrentQuiz, setCurrentQuiz } from "../state/state";
import { quizTitleImages } from "../utils/quizTitlesIcons";
import { getCurrentScore } from "../state/state";
import { setCurrentView } from "../state/state";

const container = document.querySelector(".app-container");

/**
 * Display a list of quiz titles as buttons
 */
export function renderResults(): void {
  if (container) {
    container.innerHTML = "";

    const titleColumn = `
      <div>
        <h1 class="selection__title">Quiz completed<br /> <span>You scored...</span></h1>
      </div>
    `;

    const quiz = getCurrentQuiz();

    const resultsScoreColumn = document.createElement("div");
    resultsScoreColumn.classList.add("results__column");

    const scoreContainer = document.createElement("div");
    scoreContainer.classList.add("results__score");

    const themeWrapper = document.createElement("div");
    themeWrapper.classList.add("results__theme");

    const themeTitle = document.createElement("h2");
    const themeIcon = document.createElement("img");

    themeTitle.classList.add("results__score-title");
    themeIcon.classList.add("results__score-icon");
    themeIcon.dataset.theme = quiz?.title?.toLowerCase() || "accessibility";
    themeIcon.src = quiz?.icon || "./assets/images/icon-accessibility.svg";
    themeIcon.alt = "";

    themeTitle.textContent = quiz?.title || "Accessibility";
    themeWrapper.appendChild(themeIcon);
    themeWrapper.appendChild(themeTitle);

    scoreContainer.appendChild(themeWrapper);

    const scoreNum = document.createElement("p");
    scoreNum.classList.add("results__score-text");
    const currentScore = getCurrentScore() || 8;
    scoreNum.textContent = `${currentScore}`;

    const scoreInfo = document.createElement("p");
    scoreInfo.textContent = `out of ${quiz?.questions.length || 10}`;

    scoreContainer.appendChild(scoreNum);
    scoreContainer.appendChild(scoreInfo);

    const restartButton = document.createElement("button");
    restartButton.classList.add("results__restart");
    restartButton.textContent = "Play Again";

    restartButton.addEventListener("click", () => {
      setCurrentQuiz(undefined);
      setCurrentView("selection");
    });

    resultsScoreColumn.appendChild(scoreContainer);

    container.innerHTML += titleColumn;
    resultsScoreColumn.appendChild(restartButton);
    container.appendChild(resultsScoreColumn);
  }
}
