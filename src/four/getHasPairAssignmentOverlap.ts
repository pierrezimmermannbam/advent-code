import { PairAssignment } from "./types";

export const getHasPairAssignmentOverlap = ({
  first,
  second,
}: PairAssignment): boolean => {
  if (first.start <= second.start && first.end >= second.start) {
    return true;
  }

  if (second.start <= first.start && second.end >= first.start) {
    return true;
  }

  return false;
};
