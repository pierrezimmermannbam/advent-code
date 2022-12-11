export const formatRucksacks = (input: string): Array<RuckSack> => {
  const lines = input.split("\n").map((line) => line.replace(/\s/g, ""));

  return lines.map((line) => {
    const items = Array.from(line);

    return {
      firstCompartmentItems: items.slice(0, items.length / 2),
      secondCompartmentItems: items.slice(items.length / 2),
    };
  });
};
