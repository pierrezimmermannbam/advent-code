import {
  getScoreForARound,
  getTotalScoreForNewStrategy,
  getTotalScoreForStrategy,
} from "./two";

describe("getScoreForARound", () => {
  it("should return correct score for a round for rock against rock", () => {
    expect(
      getScoreForARound({ opponentShape: "Rock", playerShape: "Rock" })
    ).toBe(4);
  });

  it("should return correct score for a round for rock against paper", () => {
    expect(
      getScoreForARound({ opponentShape: "Rock", playerShape: "Paper" })
    ).toBe(8);
  });
  it("should return correct score for a round for rock against scissors", () => {
    expect(
      getScoreForARound({ opponentShape: "Rock", playerShape: "Scissors" })
    ).toBe(3);
  });

  it("should return correct score for a round for paper against rock", () => {
    expect(
      getScoreForARound({ opponentShape: "Paper", playerShape: "Rock" })
    ).toBe(1);
  });

  it("should return correct score for a round for paper against paper", () => {
    expect(
      getScoreForARound({ opponentShape: "Paper", playerShape: "Paper" })
    ).toBe(5);
  });

  it("should return correct score for a round for rock against scissors", () => {
    expect(
      getScoreForARound({ opponentShape: "Paper", playerShape: "Scissors" })
    ).toBe(9);
  });

  it("should return correct score for a round for Scissors against rock", () => {
    expect(
      getScoreForARound({ opponentShape: "Scissors", playerShape: "Rock" })
    ).toBe(7);
  });

  it("should return correct score for a round for Scissors against paper", () => {
    expect(
      getScoreForARound({ opponentShape: "Scissors", playerShape: "Paper" })
    ).toBe(2);
  });

  it("should return correct score for a round for Scissors against Scissors", () => {
    expect(
      getScoreForARound({ opponentShape: "Scissors", playerShape: "Scissors" })
    ).toBe(6);
  });
});

describe("getTotalScoreForStrategy", () => {
  it("should return the total score for the given strategy", () => {
    expect(
      getTotalScoreForStrategy(`C Z
        C X
        B X`)
    ).toBe(14);
  });
});

describe("getTotalScoreForNewStrategy", () => {
  it("should return the total score for the new strategy", () => {
    expect(
      getTotalScoreForNewStrategy(`C Z
        C X
        B X`)
    ).toBe(10);
  });
});
