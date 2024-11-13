import {
  getCurrentQuiz,
  setCurrentView,
  setCurrentScore,
  getCurrentScore,
} from "../state/state";

export function renderQuizQuestions(currentIndex: number = 0): void {
  const quiz = getCurrentQuiz();
  const currentScore = getCurrentScore();
  const container = document.querySelector(".app-container");

  if (!quiz || currentIndex >= quiz.questions.length) return;

  if (container) {
    container.innerHTML = "";
  }

  const question = quiz.questions[currentIndex];
  const form = document.createElement("form");
  form.classList.add("question__form");

  const questionHeading = document.createElement("h1");
  questionHeading.classList.add("question__heading");
  questionHeading.textContent = question.question;

  const infoColumn = `
    <div class="quiz__info" tabindex="-1">
      <p class="quiz__progress-text">Question ${currentIndex + 1} of ${
    quiz.questions.length
  }</p>
      ${questionHeading.outerHTML}

      <progress class="question__progress" value="${currentIndex + 1}" max="${
    quiz.questions.length
  }"></progress>
    </div>
  `;

  if (container) container.innerHTML += infoColumn;

  const fieldset = document.createElement("fieldset");
  fieldset.className = "question__list";
  fieldset.role = "radiogroup";

  question.options.forEach((option, index) => {
    const formGroup = document.createElement("div");
    formGroup.classList.add("form-group");

    const radio = document.createElement("input");
    const label = document.createElement("label");
    label.classList.add("question__label");

    const labelIndicator = ["A", "B", "C", "D"];
    const labelIndicatorElement = document.createElement("strong");
    labelIndicatorElement.classList.add("question__label-indicator");
    labelIndicatorElement.textContent = labelIndicator[index];

    radio.classList.add("question__item");
    radio.type = "radio";
    radio.id = `option-${index}`;
    radio.name = "option";
    radio.value = option;

    label.htmlFor = `option-${index}`;
    label.textContent = option;
    label.prepend(labelIndicatorElement);

    formGroup.appendChild(label);
    formGroup.appendChild(radio);

    fieldset.appendChild(formGroup);
  });

  form.appendChild(fieldset);

  const submitButton = document.createElement("button");
  submitButton.classList.add("btn", "question__submit");
  submitButton.type = "submit";
  submitButton.textContent = "Submit Answer";
  form.appendChild(submitButton);

  const errorMessage = document.createElement("p");
  errorMessage.className = "error";
  errorMessage.ariaLive = "assertive";
  errorMessage.textContent = "Please select an option";

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const selectedOption = form.option.value;

    if (!selectedOption) {
      form.appendChild(errorMessage);
      return;
    }

    const correctAnswer = question.answer;
    const isCorrect = selectedOption === correctAnswer;

    if (isCorrect) {
      setCurrentScore(currentScore + 1);
    }

    // disable input elements
    const radioButtons = fieldset.querySelectorAll("input");
    radioButtons.forEach((radio) => {
      radio.disabled = true;
    });

    // highlight correct answer in green
    const correctAnswerIndex = question.options.indexOf(correctAnswer);
    const correctAnswerElement = fieldset.children[correctAnswerIndex];
    const correctIcon = document.createElement("img");
    correctIcon.src = "/assets/images/icon-correct.svg";
    correctIcon.alt = "";
    correctAnswerElement.appendChild(correctIcon);
    correctAnswerElement.classList.add("correct");

    // highlight selected answer in red if incorrect
    if (!isCorrect) {
      const selectedAnswerIndex = question.options.indexOf(selectedOption);
      const selectedAnswerElement = fieldset.children[selectedAnswerIndex];
      const incorrectIcon = document.createElement("img");
      incorrectIcon.src = "/assets/images/icon-incorrect.svg";
      incorrectIcon.alt = "";
      selectedAnswerElement.appendChild(incorrectIcon);
      selectedAnswerElement.classList.add("incorrect");
    }

    submitButton.textContent = "Next Question";
    submitButton.classList.add("next-button");
    submitButton.onclick = () => {
      if (currentIndex + 1 < quiz.questions.length) {
        renderQuizQuestions(currentIndex + 1);
      } else {
        setCurrentView("result");
      }
    };
  });

  const titleWrapper = document.querySelector(".app-title");
  const title = document.createElement("h1");
  const titleImg = document.createElement("img");
  titleImg.dataset.theme = quiz.title.toLowerCase();
  title.textContent = quiz.title;
  titleImg.src = quiz.icon;
  titleImg.alt = `${quiz.title} quiz`;
  if (titleWrapper) {
    titleWrapper.innerHTML = "";
  }
  titleWrapper?.appendChild(titleImg);
  titleWrapper?.appendChild(title);

  if (container) {
    container.appendChild(form);
  }
}
