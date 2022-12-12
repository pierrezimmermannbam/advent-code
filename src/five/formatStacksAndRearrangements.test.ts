import { formatStacksAndRearrangements } from "./formatStacksAndRearrangements";

describe("formatStacksAndRearrangements", () => {
  it("should return the stacks and the list of rearrangements", () => {
    expect(
      formatStacksAndRearrangements(`    [D]    
[N] [C]    
[Z] [M] [P]
 1   2   3 
        
move 1 from 2 to 1
move 3 from 1 to 3
move 2 from 2 to 1
move 1 from 1 to 2`)
    ).toEqual({
      stacks: { 1: ["Z", "N"], 2: ["M", "C", "D"], 3: ["P"] },
      rearrangements: [
        { from: 2, to: 1, numberOfCrates: 1 },
        { from: 1, to: 3, numberOfCrates: 3 },
        { from: 2, to: 1, numberOfCrates: 2 },
        { from: 1, to: 2, numberOfCrates: 1 },
      ],
    });
  });
});
