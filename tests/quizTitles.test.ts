import { describe, it, expect } from "vitest";
import { quizTitles } from "../src/utils/quizTitles";

describe("quizTitles", () => {
  it("should return an array of strings", () => {
    const titles = quizTitles();
    expect(Array.isArray(titles)).toBe(true);
  });
});
