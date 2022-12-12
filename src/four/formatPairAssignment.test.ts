import { formatPairAssignment } from "./formatPairAssignments";

describe("formatPairAssignment", () => {
  it("should return an aray of pair assignments", () => {
    expect(
      formatPairAssignment(`14-38,14-14
2-10,3-55`)
    ).toEqual([
      { first: { start: 14, end: 38 }, second: { start: 14, end: 14 } },
      { first: { start: 2, end: 10 }, second: { start: 3, end: 55 } },
    ]);
  });
});
