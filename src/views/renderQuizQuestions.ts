import { getCurrentQuiz } from "../state/state";

const quizContainer: HTMLElement | null = document.querySelector(
  ".hero__quiz-container"
);

export function renderQuizQuestions() {
  const currentQuiz = getCurrentQuiz();
  if (quizContainer) {
    quizContainer.innerHTML = `
      <div class="hero__quiz">
        <h1>${currentQuiz?.title}</h1>
      </div>
    `;
  }
}
