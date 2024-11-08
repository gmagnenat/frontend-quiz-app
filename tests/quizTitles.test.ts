import { describe, it, expect } from "vitest";
import { quizTitles } from "../src/utils/quizTitles";

describe("quizTitles", () => {
  it("should return an array of strings", () => {
    const titles = quizTitles();
    expect(Array.isArray(titles)).toBe(true);
  });

  it("should return an array of length 4", () => {
    const titles = quizTitles();
    expect(titles.length).toEqual(4);
  });

  it("should return an array of strings matching 'HTML, CSS, JavaScript, Accessibility'", () => {
    const titles = quizTitles();
    expect(titles).toEqual(["HTML", "CSS", "JavaScript", "Accessibility"]);
  });
});
