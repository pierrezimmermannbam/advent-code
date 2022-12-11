import { Shape } from "./formatter";

export const shapesScores: Record<Shape, number> = {
  Rock: 1,
  Paper: 2,
  Scissors: 3,
};

export const shapeWinningMatchup: Record<Shape, Shape> = {
  Rock: "Scissors",
  Paper: "Rock",
  Scissors: "Paper",
};

export const shapeLosingMatchup: Record<Shape, Shape> = {
  Rock: "Paper",
  Paper: "Scissors",
  Scissors: "Rock",
};
