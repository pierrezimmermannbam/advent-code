import { getItemInBothCompartments } from "./getItemInBothCompartments";

describe("getItemInBothCompartments", () => {
  it("should return the item present in both compartments", () => {
    expect(
      getItemInBothCompartments({
        firstCompartmentItems: ["a", "b", "d"],
        secondCompartmentItems: ["c", "n", "b"],
      })
    ).toBe("b");
  });
});
