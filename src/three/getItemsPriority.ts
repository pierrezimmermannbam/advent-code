export const getItemPriority = (item: string): number => {
  if (item.toLowerCase() === item) {
    return item.charCodeAt(0) - 96;
  }

  return item.charCodeAt(0) - 38;
};
