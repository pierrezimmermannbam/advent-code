import { formatTrees } from "./formatTrees";
import { getTreeScenicScore } from "./getTreeScenicScore";

export const getHighestScenicScore = (input: string): number => {
  const grid = formatTrees(input);

  let highestScore = 0;

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      const treeScenicScore = getTreeScenicScore(i, j, grid);
      if (treeScenicScore > highestScore) {
        highestScore = treeScenicScore;
      }
    }
  }

  return highestScore;
};
