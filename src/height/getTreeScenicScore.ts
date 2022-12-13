import { Grid } from "./types";

export const getTreeScenicScore = (
  i: number,
  j: number,
  grid: Grid
): number => {
  return (
    getTreeVisibleAbove(i, j, grid) *
    getTreeVisibleBellow(i, j, grid) *
    getTreeVisibleLeft(i, j, grid) *
    getTreeVisibleRight(i, j, grid)
  );
};

const getTreeVisibleAbove = (i: number, j: number, grid: Grid) => {
  if (i === 0) {
    return 0;
  }

  let numberOfTreeVisibleAbove = 0;

  for (let k = i - 1; k >= 0; k--) {
    if (grid[k][j] < grid[i][j]) {
      numberOfTreeVisibleAbove += 1;
    } else {
      numberOfTreeVisibleAbove += 1;
      return numberOfTreeVisibleAbove;
    }
  }

  return numberOfTreeVisibleAbove;
};

const getTreeVisibleBellow = (i: number, j: number, grid: Grid) => {
  if (i === grid.length - 1) {
    return 0;
  }

  let numberOfTreeVisibleBellow = 0;
  for (let k = i + 1; k < grid.length; k++) {
    if (grid[k][j] < grid[i][j]) {
      numberOfTreeVisibleBellow += 1;
    } else {
      numberOfTreeVisibleBellow += 1;
      return numberOfTreeVisibleBellow;
    }
  }

  return numberOfTreeVisibleBellow;
};

const getTreeVisibleLeft = (i: number, j: number, grid: Grid) => {
  if (j === 0) {
    return 0;
  }

  let numberOfTreeVisibleLeft = 0;
  for (let k = j - 1; k >= 0; k--) {
    if (grid[i][k] < grid[i][j]) {
      numberOfTreeVisibleLeft += 1;
    } else {
      numberOfTreeVisibleLeft += 1;
      return numberOfTreeVisibleLeft;
    }
  }

  return numberOfTreeVisibleLeft;
};

const getTreeVisibleRight = (i: number, j: number, grid: Grid) => {
  if (j === grid[0].length - 1) {
    return 0;
  }

  let numberOfTreeVisibleRight = 0;
  for (let k = j + 1; k < grid[0].length; k++) {
    if (grid[i][k] < grid[i][j]) {
      numberOfTreeVisibleRight += 1;
    } else {
      numberOfTreeVisibleRight += 1;
      return numberOfTreeVisibleRight;
    }
  }

  return numberOfTreeVisibleRight;
};
