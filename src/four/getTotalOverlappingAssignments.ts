import { formatPairAssignment } from "./formatPairAssignments";
import { getHasPairAssignmentOverlap } from "./getHasPairAssignmentOverlap";

export const getTotalOverlappingAssignments = (input: string): number => {
  const pairAssignments = formatPairAssignment(input);

  return pairAssignments.filter(getHasPairAssignmentOverlap).length;
};
