import { formatGroupRucksacks } from "./formatGroupRucksacks";

describe("formatGroupRucksacks", () => {
  it("should return the list of items of each group of three elves", () => {
    expect(
      formatGroupRucksacks(`ab
bc
db
fg
gy
kg`)
    ).toEqual([
      {
        firstRucksackItems: ["a", "b"],
        secondRucksackItems: ["b", "c"],
        thirdRucksackItems: ["d", "b"],
      },
      {
        firstRucksackItems: ["f", "g"],
        secondRucksackItems: ["g", "y"],
        thirdRucksackItems: ["k", "g"],
      },
    ]);
  });
});
