import { getMostCaloriesInput, getTotalOfTopThreeCalories } from "./one";
import { input } from "./input";

describe("getMostCaloriesInput", () => {
  it("shoudl return the most the highest number of calories for an elf", () => {
    expect(
      getMostCaloriesInput(`2000
        12013
        
        6693
        2904
        
        5643`)
    ).toBe(14013);
  });

  it("should return correct value for given input", () => {
    expect(getMostCaloriesInput(input)).toBe(69883);
  });
});

describe("getTotalOfTopThreeCalories", () => {
  it("should return the sum of the calories carried by the three elves that carry the most calories", () => {
    expect(
      getTotalOfTopThreeCalories(`500
        200
        
        200

        300
        500
        
        1000
        
        2000`)
    ).toBe(3800);
  });
});
