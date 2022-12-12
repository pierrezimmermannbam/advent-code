import { getCratesOnTopOfEachStack } from "./getCratesOnTopOfEachStack";

describe("getCratesOnTopOfEachStack", () => {
  it(`should return a a string that is a concatenation of all crates on top of Stacks
      - after having applied all rearrangements`, () => {
    expect(
      getCratesOnTopOfEachStack(`    [D]    
[N] [C]    
[Z] [M] [P]
 1   2   3 
                
move 1 from 2 to 1
move 3 from 1 to 3
move 2 from 2 to 1
move 1 from 1 to 2`)
    ).toBe("CMZ");
  });
});
