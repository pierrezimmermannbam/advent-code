import { RopeMoves } from "./types";

export const formatMoves = (ropeMoves: string): Array<RopeMoves> => {
  const lines = ropeMoves.split("\n");

  return lines.map((line) => {
    const [direction, distance] = line.split(" ");

    if (
      direction !== "U" &&
      direction !== "D" &&
      direction !== "L" &&
      direction !== "R"
    ) {
      throw new Error("unrecognized direction");
    }

    return { direction, distance: Number(distance) };
  });
};
