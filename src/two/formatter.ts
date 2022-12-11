import { shapeLosingMatchup, shapeWinningMatchup } from "./constants";

export type Shape = "Rock" | "Paper" | "Scissors";

export type Round = { opponentShape: Shape; playerShape: Shape };

const opponentShapeCodes = ["A", "B", "C"] as const;

type OpponentShapeCode = typeof opponentShapeCodes[number];

const opponentShapeCodeMatching: Record<OpponentShapeCode, Shape> = {
  A: "Rock",
  B: "Paper",
  C: "Scissors",
};

const playerShapeCodes = ["X", "Y", "Z"] as const;

type PlayerShapeCode = typeof playerShapeCodes[number];

const playerShapeCodeMatching: Record<PlayerShapeCode, Shape> = {
  X: "Rock",
  Y: "Paper",
  Z: "Scissors",
};

const formatCodes = (
  input: string
): Array<[OpponentShapeCode, PlayerShapeCode]> => {
  const lines = input.split("\n");

  return lines.map((line) => {
    const lineWithoutSpace = line.replace(/\s/g, "");
    const opponentShapeCode = lineWithoutSpace[0];
    const playerShapeCode = lineWithoutSpace[1];

    if (
      (opponentShapeCode !== "A" &&
        opponentShapeCode !== "B" &&
        opponentShapeCode !== "C") ||
      (playerShapeCode !== "X" &&
        playerShapeCode !== "Y" &&
        playerShapeCode !== "Z")
    ) {
      throw new Error("unknown code found");
    }

    return [opponentShapeCode, playerShapeCode];
  });
};

export const formatInput = (input: string): Array<Round> => {
  const codes = formatCodes(input);
  const shapes: Array<{ opponentShape: Shape; playerShape: Shape }> = codes.map(
    ([opponnentCode, playerCode]) => ({
      opponentShape: opponentShapeCodeMatching[opponnentCode],
      playerShape: playerShapeCodeMatching[playerCode],
    })
  );

  return shapes;
};

export const formatInputWithNewStrategy = (input: string): Array<Round> => {
  const codes = formatCodes(input);

  return codes.map(([opponnentCode, playerCode]) => {
    const opponentShape = opponentShapeCodeMatching[opponnentCode];
    if (playerCode === "Y") {
      return {
        opponentShape: opponentShape,
        playerShape: opponentShape,
      };
    }

    if (playerCode === "Z") {
      return {
        opponentShape,
        playerShape: shapeLosingMatchup[opponentShape],
      };
    }

    return {
      opponentShape,
      playerShape: shapeWinningMatchup[opponentShape],
    };
  });
};
