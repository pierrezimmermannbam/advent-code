import {
  applyRearrangement,
  applyRearrangementWithNewCrateMover,
} from "./applyRearrangement";
import { formatStacksAndRearrangements } from "./formatStacksAndRearrangements";
import { Rearrangement, Stacks } from "./types";

export const getCratesOnTopOfEachStack = (input: string): string => {
  return getCratesOnTopOfEachStackWithGivenCrateMover(
    input,
    applyRearrangement
  );
};

export const getCratesOnTopOfEachStackWithNewCrateMover = (
  input: string
): string => {
  return getCratesOnTopOfEachStackWithGivenCrateMover(
    input,
    applyRearrangementWithNewCrateMover
  );
};

const getCratesOnTopOfEachStackWithGivenCrateMover = (
  input: string,
  rearrange: (stacks: Stacks, rearrangement: Rearrangement) => Stacks
) => {
  const { stacks, rearrangements } = formatStacksAndRearrangements(input);

  rearrangements.forEach((rearrangement) => {
    rearrange(stacks, rearrangement);
  });

  const topCrates = Object.values(stacks)
    .map((stack) => stack[stack.length - 1])
    .filter(Boolean);

  return topCrates.reduce((message, crate) => message + crate);
};
