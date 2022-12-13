import { getTreeScenicScore } from "./getTreeScenicScore";
import { Grid } from "./types";

const grid: Grid = [
  [3, 0, 3, 7, 3],
  [2, 5, 5, 1, 2],
  [6, 5, 3, 3, 2],
  [3, 3, 5, 4, 9],
  [3, 5, 3, 9, 0],
];

describe("getTreeScenicScore", () => {
  it("should return the scenic score for the tree", () => {
    expect(getTreeScenicScore(1, 2, grid)).toBe(4);
    expect(getTreeScenicScore(3, 2, grid)).toBe(8);
  });
});
