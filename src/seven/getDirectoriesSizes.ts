import { Directory } from "./types";

export const getDirectorySize = (directory: Directory): number => {
  const mainDirectoryFilesSize = directory.files.reduce(
    (total, current) => total + current,
    0
  );

  const mainDirectorySubdirectoriesSize = Object.values(
    directory.subdirectories
  ).reduce(
    (totalSize, subdirectory) => totalSize + getDirectorySize(subdirectory),
    0
  );

  return mainDirectoryFilesSize + mainDirectorySubdirectoriesSize;
};

export const getAllDirectoriesSizes = (directory: Directory): Array<number> => {
  return [
    getDirectorySize(directory),
    ...Object.values(directory.subdirectories)
      .map(getAllDirectoriesSizes)
      .flat(),
  ];
};
