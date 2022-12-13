import { formatMoves } from "./formatMoves";

describe("formatMoves", () => {
  it("shoudl return the formatted moves", () => {
    expect(
      formatMoves(`R 1
D 1
L 1
D 1
R 2`)
    ).toEqual([
      { direction: "R", distance: 1 },
      { direction: "D", distance: 1 },
      { direction: "L", distance: 1 },
      { direction: "D", distance: 1 },
      { direction: "R", distance: 2 },
    ]);
  });
});
