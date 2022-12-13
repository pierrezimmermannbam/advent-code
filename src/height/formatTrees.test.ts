import { formatTrees } from "./formatTrees";

describe("formatTrees", () => {
  it("should return a matrix with the height of trees", () => {
    expect(
      formatTrees(`30373
25512
65332`)
    ).toEqual([
      [3, 0, 3, 7, 3],
      [2, 5, 5, 1, 2],
      [6, 5, 3, 3, 2],
    ]);
  });
});
