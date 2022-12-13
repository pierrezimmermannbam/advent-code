import { formatMoves } from "./formatMoves";
import { getPositionOfHeadAndTailAfterMove } from "./getPositionOfHeadAndTailAfterMove";

export const getNumberOdVisitedPlacesByTail = (ropeMoves: string): number => {
  const moves = formatMoves(ropeMoves);
  let headPosition = { x: 0, y: 0 };
  let tailPosition = { x: 0, y: 0 };
  const tailPositions = [tailPosition];

  for (let i = 0; i < moves.length; i++) {
    const { direction, distance } = moves[i];
    for (let j = 0; j < distance; j++) {
      const [nextHeadPosition, nextTailPosition] =
        getPositionOfHeadAndTailAfterMove(
          headPosition,
          tailPosition,
          direction
        );
      headPosition = nextHeadPosition;
      tailPosition = nextTailPosition;

      if (
        !tailPositions.find(
          ({ x, y }) => tailPosition.x === x && tailPosition.y === y
        )
      ) {
        tailPositions.push({ x: tailPosition.x, y: tailPosition.y });
      }
    }
  }

  return tailPositions.length;
};
