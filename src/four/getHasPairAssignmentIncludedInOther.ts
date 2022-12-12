import { PairAssignment } from "./types";

export const getHasPairAssignmentIncludedInOther = ({
  first,
  second,
}: PairAssignment): boolean => {
  if (first.start >= second.start && first.end <= second.end) {
    return true;
  }

  if (second.start >= first.start && second.end <= first.end) {
    return true;
  }

  return false;
};
