import { formatDirectories } from "./formatDirectories";
import { getAllDirectoriesSizes } from "./getDirectoriesSizes";

export const getTotalSizeOfDirectoriesBellowSize100000 = (input: string) => {
  const directory = formatDirectories(input);

  const directoriesSizes = getAllDirectoriesSizes(directory);

  return directoriesSizes
    .filter((size) => size <= 100000)
    .reduce((total, current) => total + current);
};
