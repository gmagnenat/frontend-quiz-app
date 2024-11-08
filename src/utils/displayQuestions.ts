import { Quiz } from "../types/quizTypes";

export function displayQuestions(quiz: Quiz): void {
  for (const question of quiz.questions) {
    console.log(question.question);
    for (const [option, index] of question.options) {
      console.log(`${index + 1}. ${option}`);
    }
  }
}
