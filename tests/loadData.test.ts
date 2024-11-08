import { describe, it, expect } from "vitest";
import { loadData } from "../src/utils/loadData";

describe("loadData", () => {
  it("should load data as an array", () => {
    const data = loadData();
    expect(Array.isArray(data)).toBe(true);
  });

  it("should return an array of quizz with length 4", () => {
    const data = loadData();
    expect(data.length).toEqual(4);
  });

  it("should contain objects with the correct properties", () => {
    const data = loadData();
    const firstQuiz = data[0];

    // Check that the first quiz has the expected properties
    expect(firstQuiz).toHaveProperty("title");
    expect(firstQuiz).toHaveProperty("icon");
    expect(firstQuiz).toHaveProperty("questions");

    // Check that questions is an array and has the correct structure
    expect(Array.isArray(firstQuiz.questions)).toBe(true);
    expect(firstQuiz.questions.length).toBeGreaterThan(0);

    // Check the structure of the first question
    const firstQuestion = firstQuiz.questions[0];
    expect(firstQuestion).toHaveProperty("question");
    expect(firstQuestion).toHaveProperty("options");
    expect(firstQuestion).toHaveProperty("answer");
    expect(Array.isArray(firstQuestion.options)).toBe(true);
  });
});
