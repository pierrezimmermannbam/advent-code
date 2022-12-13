import { formatTrees } from "./formatTrees";
import { isTreeVisible } from "./isTreeVisible";

export const getTotalTreeVisible = (input: string): number => {
  const grid = formatTrees(input);

  let totalTreeVisible = 0;

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (isTreeVisible(i, j, grid)) {
        totalTreeVisible += 1;
      }
    }
  }

  return totalTreeVisible;
};
