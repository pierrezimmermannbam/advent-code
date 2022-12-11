export const getItemInBothCompartments = ({
  firstCompartmentItems,
  secondCompartmentItems,
}: RuckSack): string => {
  let commonItem;

  firstCompartmentItems.forEach((item) => {
    if (secondCompartmentItems.includes(item)) {
      commonItem = item;
    }
  });

  if (!commonItem) {
    throw new Error("no item in common for both compartments");
  }

  return commonItem;
};
