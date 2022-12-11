import { getSumOfCommonItemsPriority } from "./getSumOfCommonItemsPriority";

describe("getSumOfCommonItemsPriority", () => {
  it("should return the sum of priorities of items present in both compartments", () => {
    expect(
      getSumOfCommonItemsPriority(`abcdea
sdZZgh`)
    ).toBe(53);
  });
});
