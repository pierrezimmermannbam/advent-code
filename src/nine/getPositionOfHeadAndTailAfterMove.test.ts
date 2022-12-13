import {
  arePositionAdjacent,
  getNextHeadPosition,
  getNextTailPosition,
} from "./getPositionOfHeadAndTailAfterMove";

describe("arePositionAdjacent", () => {
  it("should return true if positions are adjacent", () => {
    expect(arePositionAdjacent({ x: 0, y: 0 }, { x: 0, y: 0 })).toBe(true);
    expect(arePositionAdjacent({ x: 1, y: 0 }, { x: 0, y: 0 })).toBe(true);
    expect(arePositionAdjacent({ x: -1, y: 0 }, { x: 0, y: 0 })).toBe(true);
    expect(arePositionAdjacent({ x: 0, y: 1 }, { x: 0, y: 0 })).toBe(true);
    expect(arePositionAdjacent({ x: 0, y: -1 }, { x: 0, y: 0 })).toBe(true);
    expect(arePositionAdjacent({ x: 1, y: 1 }, { x: 0, y: 0 })).toBe(true);
    expect(arePositionAdjacent({ x: 1, y: -1 }, { x: 0, y: 0 })).toBe(true);
    expect(arePositionAdjacent({ x: -1, y: 1 }, { x: 0, y: 0 })).toBe(true);
    expect(arePositionAdjacent({ x: -1, y: -1 }, { x: 0, y: 0 })).toBe(true);
  });

  it("should return false otherwise", () => {
    expect(arePositionAdjacent({ x: 2, y: 0 }, { x: 0, y: 0 })).toBe(false);
    expect(arePositionAdjacent({ x: 0, y: 2 }, { x: 0, y: 0 })).toBe(false);
    expect(arePositionAdjacent({ x: -2, y: 0 }, { x: 0, y: 0 })).toBe(false);
    expect(arePositionAdjacent({ x: 0, y: -2 }, { x: 0, y: 0 })).toBe(false);
  });
});

describe("getNextHeadPosition", () => {
  it("should return correct position for a move down", () => {
    expect(getNextHeadPosition({ x: 0, y: 0 }, "D")).toEqual({ x: 0, y: -1 });
  });

  it("should return correct position for a move to left", () => {
    expect(getNextHeadPosition({ x: 0, y: 0 }, "L")).toEqual({ x: -1, y: 0 });
  });

  it("should return correct position for a move to right", () => {
    expect(getNextHeadPosition({ x: 0, y: 0 }, "R")).toEqual({ x: 1, y: 0 });
  });

  it("should return correct position for a move up", () => {
    expect(getNextHeadPosition({ x: 0, y: 0 }, "U")).toEqual({ x: 0, y: 1 });
  });
});

describe("getNextTailPosition", () => {
  it("should compute right position if direction is down", () => {
    expect(getNextTailPosition("D", { x: 0, y: -1 })).toEqual({
      x: 0,
      y: 0,
    });
    expect(getNextTailPosition("D", { x: 1, y: -1 })).toEqual({
      x: 1,
      y: 0,
    });
    expect(getNextTailPosition("D", { x: -1, y: -1 })).toEqual({
      x: -1,
      y: 0,
    });
  });

  it("should compute right position if direction is up", () => {
    expect(getNextTailPosition("U", { x: 0, y: 1 })).toEqual({
      x: 0,
      y: 0,
    });
    expect(getNextTailPosition("U", { x: 1, y: 1 })).toEqual({
      x: 1,
      y: 0,
    });
    expect(getNextTailPosition("U", { x: -1, y: 1 })).toEqual({
      x: -1,
      y: 0,
    });
  });

  it("should compute right position if direction is left", () => {
    expect(getNextTailPosition("L", { x: -1, y: 0 })).toEqual({
      x: 0,
      y: 0,
    });
    expect(getNextTailPosition("L", { x: -1, y: -1 })).toEqual({
      x: 0,
      y: -1,
    });
    expect(getNextTailPosition("L", { x: -1, y: 1 })).toEqual({
      x: 0,
      y: 1,
    });
  });

  it("should compute right position if direction is right", () => {
    expect(getNextTailPosition("R", { x: 1, y: 0 })).toEqual({
      x: 0,
      y: 0,
    });
    expect(getNextTailPosition("R", { x: 1, y: -1 })).toEqual({
      x: 0,
      y: -1,
    });
    expect(getNextTailPosition("R", { x: 1, y: 1 })).toEqual({
      x: 0,
      y: 1,
    });
  });
});
