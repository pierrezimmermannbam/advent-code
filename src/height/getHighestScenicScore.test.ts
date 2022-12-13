import { getHighestScenicScore } from "./getHighestScenicScore";

describe("getHighestScenicScore", () => {
  it("should return the scenic score for the ideal spot", () => {
    expect(
      getHighestScenicScore(`30373
        25512
        65332
        33549
        35390`)
    ).toBe(8);
  });
});
