import { formatRucksacks } from "./formatRucksacks";
import { getItemInBothCompartments } from "./getItemInBothCompartments";
import { getItemPriority } from "./getItemsPriority";

export const getSumOfCommonItemsPriority = (input: string): number => {
  const rucksacks = formatRucksacks(input);

  const commonItems = rucksacks.map((rucksack) =>
    getItemInBothCompartments(rucksack)
  );

  return commonItems.reduce((total, item) => total + getItemPriority(item), 0);
};
