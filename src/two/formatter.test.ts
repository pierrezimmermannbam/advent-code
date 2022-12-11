import { formatInput, formatInputWithNewStrategy } from "./formatter";

describe("formatter", () => {
  it("should return an array with the shapes played by both players for each round", () => {
    expect(
      formatInput(`C Z
        B Y
        A X`)
    ).toEqual([
      { opponentShape: "Scissors", playerShape: "Scissors" },
      { opponentShape: "Paper", playerShape: "Paper" },
      { opponentShape: "Rock", playerShape: "Rock" },
    ]);
  });
});

describe("formatInputWithNewStrategy", () => {
  it("should return an array with the shapes played by both players for each round", () => {
    expect(
      formatInputWithNewStrategy(`C Z
        B Y
        A X`)
    ).toEqual([
      { opponentShape: "Scissors", playerShape: "Rock" },
      { opponentShape: "Paper", playerShape: "Paper" },
      { opponentShape: "Rock", playerShape: "Scissors" },
    ]);
  });
});
