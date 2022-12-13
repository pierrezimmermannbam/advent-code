import { formatDirectories } from "./formatDirectories";
import { getAllDirectoriesSizes } from "./getDirectoriesSizes";

const TOTAL_SPACE_ON_DISK = 70000000;
const NEEDED_SPACE_DISK = 30000000;

export const getSmallerDirectoryToDelete = (input: string): number => {
  const mainDirectory = formatDirectories(input);

  const directoriesSizes = getAllDirectoriesSizes(mainDirectory);

  const freeSpaceOnDisk = TOTAL_SPACE_ON_DISK - directoriesSizes[0];

  const sortedDirectorySizes = directoriesSizes.sort((a, b) => a - b);

  for (let index = 0; index < sortedDirectorySizes.length; index++) {
    if (sortedDirectorySizes[index] + freeSpaceOnDisk >= NEEDED_SPACE_DISK) {
      return sortedDirectorySizes[index];
    }
  }

  throw new Error("not enough space on disk");
};
