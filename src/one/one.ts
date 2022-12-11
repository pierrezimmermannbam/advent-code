import { formatToArray } from "./formatter";

const getTotalCaloriesSorted = (input: string): Array<number> => {
  const formattedInput = formatToArray(input);

  const totalCalories = formattedInput.map((elfcalories) =>
    elfcalories.reduce((total, currentValue) => total + currentValue)
  );

  return totalCalories.sort((a, b) => b - a);
};

export const getMostCaloriesInput = (input: string): number => {
  return getTotalCaloriesSorted(input)[0];
};

export const getTotalOfTopThreeCalories = (input: string): number => {
  const totalCaloriesSorted = getTotalCaloriesSorted(input);

  return (
    totalCaloriesSorted[0] + totalCaloriesSorted[1] + totalCaloriesSorted[2]
  );
};
