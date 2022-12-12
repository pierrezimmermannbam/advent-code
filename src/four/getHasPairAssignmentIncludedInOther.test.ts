import { getHasPairAssignmentIncludedInOther } from "./getHasPairAssignmentIncludedInOther";

describe("getHasPairAssignmentIncludedInOther", () => {
  it("should return true if first assignment is included in second", () => {
    expect(
      getHasPairAssignmentIncludedInOther({
        first: { start: 1, end: 2 },
        second: { start: 1, end: 3 },
      })
    ).toBe(true);
  });

  it("should return true if second assignment is included in second", () => {
    expect(
      getHasPairAssignmentIncludedInOther({
        first: { start: 1, end: 5 },
        second: { start: 5, end: 5 },
      })
    ).toBe(true);
  });

  it("should return false if neither assignment is included in the other one", () => {
    expect(
      getHasPairAssignmentIncludedInOther({
        first: { start: 4, end: 6 },
        second: { start: 2, end: 5 },
      })
    ).toBe(false);
  });
});
