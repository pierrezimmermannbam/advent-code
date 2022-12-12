import { getTotalOfIncludedInOtherAssignments } from "./getTotalOfIncludedInOtherAssignments";

describe("getTotalOfIncludedInOtherAssignments", () => {
  it("should return the number of assignments with overlap", () => {
    expect(
      getTotalOfIncludedInOtherAssignments(`14-38,14-14
2-10,3-55
36-90,36-46
9-97,8-87
75-92,51-92
6-82,1-83`)
    ).toBe(4);
  });
});
