import { formatGroupRucksacks } from "./formatGroupRucksacks";
import { getItemPriority } from "./getItemsPriority";

export const getSumOfBadgesPriority = (input: string): number => {
  const groupRucksacks = formatGroupRucksacks(input);

  const badges = groupRucksacks.map(getGroupBadge);

  return badges.reduce((total, badge) => total + getItemPriority(badge), 0);
};

const getGroupBadge = ({
  firstRucksackItems,
  secondRucksackItems,
  thirdRucksackItems,
}: GroupRucksacks) => {
  let badge;

  for (let index = 0; index < firstRucksackItems.length; index++) {
    if (
      secondRucksackItems.includes(firstRucksackItems[index]) &&
      thirdRucksackItems.includes(firstRucksackItems[index])
    ) {
      badge = firstRucksackItems[index];
    }
  }

  if (!badge) {
    throw new Error("no common item in group");
  }

  return badge;
};
