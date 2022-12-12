import { PairAssignment } from "./types";

export const formatPairAssignment = (input: string): Array<PairAssignment> => {
  const lines = input.split("\n").map((line) => line.replace(/\s/g, ""));

  return lines.map((line) => {
    const [firstAssignment, secondAssignment] = line.split(",");
    return {
      first: {
        start: Number(firstAssignment.split("-")[0]),
        end: Number(firstAssignment.split("-")[1]),
      },
      second: {
        start: Number(secondAssignment.split("-")[0]),
        end: Number(secondAssignment.split("-")[1]),
      },
    };
  });
};
