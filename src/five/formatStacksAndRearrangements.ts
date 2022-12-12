import { Rearrangement, Stacks, StacksAndRearrangements } from "./types";

export const formatStacksAndRearrangements = (
  input: string
): StacksAndRearrangements => {
  const stacks: Stacks = {};
  const rearrangements: Array<Rearrangement> = [];
  const lines = input.split("\n");
  lines.forEach((line) => {
    if (line.includes("[")) {
      for (let index = 0; index < line.length / 4; index++) {
        if (line[index * 4] === "[") {
          const stackNumber = index + 1;
          const crate = line[1 + index * 4];
          if (stacks[stackNumber]) {
            stacks[stackNumber].splice(0, 0, crate);
          } else {
            stacks[stackNumber] = [crate];
          }
        }
      }
    }

    if (line.includes("move")) {
      const [firstPart, secondPart] = line.split("from");
      const [from, to] = secondPart
        .split("to")
        .map((part) => part.replace(/\D/g, ""));
      rearrangements.push({
        from: Number(from),
        to: Number(to),
        numberOfCrates: Number(firstPart.replace(/\D/g, "")),
      });
    }
  });

  return { stacks, rearrangements };
};
