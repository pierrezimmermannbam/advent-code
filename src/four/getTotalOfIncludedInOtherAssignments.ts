import { formatPairAssignment } from "./formatPairAssignments";
import { getHasPairAssignmentIncludedInOther } from "./getHasPairAssignmentIncludedInOther";

export const getTotalOfIncludedInOtherAssignments = (input: string): number => {
  const pairAssignments = formatPairAssignment(input);

  return pairAssignments.filter(getHasPairAssignmentIncludedInOther).length;
};
