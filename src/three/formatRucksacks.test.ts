import { formatRucksacks } from "./formatRucksacks";

describe("formatRucksacks", () => {
  it("shoudl return an array of rucksacks from input", () => {
    expect(
      formatRucksacks(`abcdef
        fgij`)
    ).toEqual([
      {
        firstCompartmentItems: ["a", "b", "c"],
        secondCompartmentItems: ["d", "e", "f"],
      },
      {
        firstCompartmentItems: ["f", "g"],
        secondCompartmentItems: ["i", "j"],
      },
    ]);
  });
});
