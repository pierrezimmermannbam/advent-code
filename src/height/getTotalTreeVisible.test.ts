import { getTotalTreeVisible } from "./getTotalTreeVisible";
import { eigthProblemInput } from "./input";

describe("getTotalTreeVisible", () => {
  it("should return the number of trees that are visible", () => {
    expect(
      getTotalTreeVisible(`30373
        25512
        65332
        33549
        35390`)
    ).toBe(21);
  });
});
