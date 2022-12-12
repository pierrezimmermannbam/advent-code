import { Rearrangement, Stacks } from "./types";

export const applyRearrangement = (
  stacks: Stacks,
  { from, to, numberOfCrates }: Rearrangement
): Stacks => {
  if (!stacks[to]) {
    stacks[to] = [];
  }

  for (let index = 0; index < numberOfCrates; index++) {
    const crateToMove = stacks[from].pop();
    if (!crateToMove) {
      throw new Error("no more crates to move");
    }

    stacks[to].push(crateToMove);
  }

  return stacks;
};

export const applyRearrangementWithNewCrateMover = (
  stacks: Stacks,
  { from, to, numberOfCrates }: Rearrangement
): Stacks => {
  if (!stacks[to]) {
    stacks[to] = [];
  }

  for (let index = numberOfCrates; index > 0; index--) {
    stacks[to].push(stacks[from][stacks[from].length - index]);
  }
  stacks[from] = stacks[from].slice(0, -numberOfCrates);

  return stacks;
};
