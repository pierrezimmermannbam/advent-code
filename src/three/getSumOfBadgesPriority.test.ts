import { getSumOfBadgesPriority } from "./getSumOfBadgesPriority";

describe("getSumOfBadgesPriority", () => {
  it("should return the sum of priorities of each elf group badge", () => {
    expect(
      getSumOfBadgesPriority(`ab
       bc
       db
       fg
       gy
       kg`)
    ).toBe(9);
  });
});
