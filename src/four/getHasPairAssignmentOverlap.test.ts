import { getHasPairAssignmentOverlap } from "./getHasPairAssignmentOverlap";

describe("getHasPairAssignmentOverlap", () => {
  it("should return true if pairs overlap", () => {
    expect(
      getHasPairAssignmentOverlap({
        first: { start: 1, end: 3 },
        second: { start: 2, end: 4 },
      })
    ).toBe(true);

    expect(
      getHasPairAssignmentOverlap({
        first: { start: 4, end: 5 },
        second: { start: 2, end: 4 },
      })
    ).toBe(true);
  });

  it("should return false otherwise", () => {
    expect(
      getHasPairAssignmentOverlap({
        first: { start: 1, end: 2 },
        second: { start: 3, end: 4 },
      })
    );

    expect(
      getHasPairAssignmentOverlap({
        first: { start: 9, end: 10 },
        second: { start: 1, end: 2 },
      })
    ).toBe(false);
  });
});
