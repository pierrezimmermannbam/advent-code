import { shapesScores, shapeWinningMatchup } from "./constants";
import { formatInput, formatInputWithNewStrategy, Round } from "./formatter";

export const getTotalScoreForStrategy = (strategy: string): number => {
  const rounds = formatInput(strategy);

  return rounds.reduce(
    (total, round): number => total + getScoreForARound(round),
    0
  );
};

export const getTotalScoreForNewStrategy = (strategy: string): number => {
  const rounds = formatInputWithNewStrategy(strategy);

  return rounds.reduce(
    (total, round): number => total + getScoreForARound(round),
    0
  );
};

const getScoreForRoundResult = ({
  opponentShape,
  playerShape,
}: Round): number => {
  if (shapeWinningMatchup[playerShape] === opponentShape) {
    return 6;
  }

  if (shapeWinningMatchup[opponentShape] === playerShape) {
    return 0;
  }

  return 3;
};

export const getScoreForARound = ({
  opponentShape,
  playerShape,
}: Round): number => {
  return (
    shapesScores[playerShape] +
    getScoreForRoundResult({ opponentShape, playerShape })
  );
};
