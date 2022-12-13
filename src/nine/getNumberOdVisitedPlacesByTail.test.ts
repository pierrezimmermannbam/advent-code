import { getNumberOdVisitedPlacesByTail } from "./getNumberOdVisitedPlacesByTail";

describe("getNumberOdVisitedPlacesByTail", () => {
  it("should return the number of places visited by the tail", () => {
    expect(
      getNumberOdVisitedPlacesByTail(`R 4
U 4
L 3
D 1
R 4
D 1
L 5
R 2`)
    ).toBe(13);
  });
});
