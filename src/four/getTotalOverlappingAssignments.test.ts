import { getTotalOverlappingAssignments } from "./getTotalOverlappingAssignments";

describe("getTotalOverlappingAssignments", () => {
  it("should return the total of overlaping assignments", () => {
    expect(
      getTotalOverlappingAssignments(`14-38,14-14
2-10,3-55
36-90,36-46
9-97,8-87
75-92,51-92
6-82,1-83
1-2,4-5`)
    ).toBe(6);
  });
});
