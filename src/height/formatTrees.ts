import { Grid } from "./types";

export const formatTrees = (input: string): Grid => {
  const lines = input.split("\n").map((line) => line.replace(/\s/g, ""));
  const grid: Grid = [];

  lines.forEach((line) => {
    grid.push(Array.from(line).map(Number));
  });

  return grid;
};
