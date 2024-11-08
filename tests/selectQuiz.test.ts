import { describe, it, expect } from "vitest";
import { selectQuiz } from "../src/utils/selectQuiz";

describe("selectQuiz", () => {
  it("should return a quiz object", () => {
    const quiz = selectQuiz("HTML");
    expect(quiz).toHaveProperty("title");
    expect(quiz?.title).toEqual("HTML");
  });

  it("should return undefined if the quiz is not found", () => {
    const quiz = selectQuiz("Not a quiz");
    expect(quiz).toBeUndefined();
  });
});
