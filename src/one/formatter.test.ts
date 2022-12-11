import { formatToArray } from "./formatter";

describe("formatToArray", () => {
  it("should return an array of elves calories array", () => {
    expect(
      formatToArray(`2000
        12013
        
        6693
        2904
        
        5643`)
    ).toEqual([[2000, 12013], [6693, 2904], [5643]]);
  });
});
