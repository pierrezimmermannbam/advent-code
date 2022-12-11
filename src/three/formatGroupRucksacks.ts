export const formatGroupRucksacks = (input: string): Array<GroupRucksacks> => {
  const lines = input.split("\n").map((line) => line.replace(/\s/g, ""));

  const groupRuckacks: Array<GroupRucksacks> = [];

  for (let index = 0; index < lines.length / 3; index += 1) {
    groupRuckacks.push({
      firstRucksackItems: Array.from(lines[3 * index]),
      secondRucksackItems: Array.from(lines[3 * index + 1]),
      thirdRucksackItems: Array.from(lines[3 * index + 2]),
    });
  }

  return groupRuckacks;
};
