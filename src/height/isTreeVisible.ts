import { Grid } from "./types";

export const isTreeVisible = (i: number, j: number, grid: Grid): boolean => {
  const gridHeight = grid.length;
  const gridWidth = grid[0].length;

  if (i === 0 || i === gridHeight - 1) {
    return true;
  }

  if (j === 0 || j === gridWidth - 1) {
    return true;
  }

  return (
    isTreeVisibleFromLeft(i, j, grid) ||
    isTreeVisibleFromRight(i, j, grid) ||
    isTreeVisibleFromTop(i, j, grid) ||
    isTreeVisibleFromBottom(i, j, grid)
  );
};

const isTreeVisibleFromLeft = (i: number, j: number, grid: Grid) => {
  for (let k = 0; k < j; k++) {
    if (grid[i][k] >= grid[i][j]) {
      return false;
    }
  }

  return true;
};

const isTreeVisibleFromRight = (i: number, j: number, grid: Grid) => {
  for (let k = j + 1; k < grid[0].length; k++) {
    if (grid[i][k] >= grid[i][j]) {
      return false;
    }
  }

  return true;
};

const isTreeVisibleFromTop = (i: number, j: number, grid: Grid) => {
  for (let k = 0; k < i; k++) {
    if (grid[k][j] >= grid[i][j]) {
      return false;
    }
  }

  return true;
};

const isTreeVisibleFromBottom = (i: number, j: number, grid: Grid) => {
  for (let k = i + 1; k < grid.length; k++) {
    if (grid[k][j] >= grid[i][j]) {
      return false;
    }
  }

  return true;
};
