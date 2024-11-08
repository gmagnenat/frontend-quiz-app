import { quizTitles } from "./src/utils/quizTitles";
const quizContainer = document.querySelector(".hero__quiz-selection");

/**
 * Display a list of quiz titles as radio buttons
 */
if (quizContainer) {
  const titles = quizTitles();
  const titleList = document.createElement("ul");
  titleList.classList.add("hero__quiz-selection-list");
  for (const title of titles) {
    const html = `
      <li>
        <button class="btn hero__btn" data-theme="${title.toLowerCase()}">${title}</button>
      </li>
    `;
    titleList.innerHTML += html;
  }
  quizContainer.appendChild(titleList);
}
