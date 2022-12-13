import { KnotPosition, RopeMoves } from "./types";

export const getPositionOfHeadAndTailAfterMove = (
  headPosition: KnotPosition,
  tailPosition: KnotPosition,
  direction: RopeMoves["direction"]
): [KnotPosition, KnotPosition] => {
  const nextHeadPosition = getNextHeadPosition(headPosition, direction);

  if (arePositionAdjacent(nextHeadPosition, tailPosition)) {
    return [nextHeadPosition, tailPosition];
  }

  return [nextHeadPosition, getNextTailPosition(direction, nextHeadPosition)];
};

export const getNextHeadPosition = (
  { x, y }: KnotPosition,
  direction: RopeMoves["direction"]
): KnotPosition => {
  if (direction === "D") {
    return { x, y: y - 1 };
  }

  if (direction === "L") {
    return { x: x - 1, y };
  }

  if (direction === "U") {
    return { x, y: y + 1 };
  }

  return { x: x + 1, y };
};

export const arePositionAdjacent = (
  headPosition: KnotPosition,
  tailPosition: KnotPosition
): boolean => {
  const xDelta = headPosition.x - tailPosition.x;
  const yDelta = headPosition.y - tailPosition.y;
  return xDelta <= 1 && xDelta >= -1 && yDelta <= 1 && yDelta >= -1;
};

export const getNextTailPosition = (
  direction: RopeMoves["direction"],
  nextHeadPosition: KnotPosition
): KnotPosition => {
  const { x, y } = nextHeadPosition;

  if (direction === "D") {
    return { x, y: y + 1 };
  }

  if (direction === "U") {
    return { x, y: y - 1 };
  }

  if (direction === "L") {
    return { x: x + 1, y };
  }

  return { x: x - 1, y };
};
