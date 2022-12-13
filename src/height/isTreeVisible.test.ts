import { isTreeVisible } from "./isTreeVisible";
import { Grid } from "./types";

const grid: Grid = [
  [3, 0, 3, 7, 3],
  [2, 5, 5, 1, 6],
  [6, 5, 3, 3, 2],
  [1, 3, 5, 4, 9],
  [3, 5, 3, 3, 0],
];

describe("isTreeVisible", () => {
  it("should return true if tree is on the border", () => {
    expect(isTreeVisible(0, 1, grid)).toBe(true);
    expect(isTreeVisible(1, 0, grid)).toBe(true);
    expect(isTreeVisible(4, 2, grid)).toBe(true);
    expect(isTreeVisible(2, 4, grid)).toBe(true);
  });

  it("should return false if it is not visible", () => {
    expect(isTreeVisible(1, 3, grid)).toBe(false);

    expect(
      isTreeVisible(1, 1, [
        [5, 5, 5],
        [5, 1, 5],
        [5, 5, 5],
      ])
    ).toBe(false);
  });

  it("should be true if tree is visible from left", () => {
    expect(isTreeVisible(3, 1, grid)).toBe(true);
  });

  it("should be true if tree is visible from right", () => {
    expect(isTreeVisible(2, 3, grid)).toBe(true);
  });

  it("should be true if tree is visible from top", () => {
    expect(isTreeVisible(1, 2, grid)).toBe(true);
  });

  it("should be true if tree is visible from bottom", () => {
    expect(isTreeVisible(3, 3, grid)).toBe(true);
  });
});
