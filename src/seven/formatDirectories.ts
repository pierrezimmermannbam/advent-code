import { Directory } from "./types";

export const formatDirectories = (input: string) => {
  const lines = input.split("\n");
  const mainDirectory: Directory = { subdirectories: {}, files: [] };
  const directoryStack: Directory[] = [mainDirectory];

  lines.forEach((line) => {
    if (line.includes("$ cd /")) {
      return;
    }

    if (line.includes("$ cd ..")) {
      directoryStack.pop();
      return;
    }

    if (line.substring(0, 4) === "$ cd") {
      const dirName = line.substring(5).replace(/\s/g, "");
      if (!directoryStack[directoryStack.length - 1].subdirectories[dirName]) {
        console.log("dir name of undefined", dirName, line);
      }
      directoryStack.push(
        directoryStack[directoryStack.length - 1].subdirectories[dirName]
      );
    }

    if (line.substring(0, 3) === "dir") {
      const dirName = line.split(" ")[1].replace(/\s/g, "");
      directoryStack[directoryStack.length - 1].subdirectories[dirName] = {
        subdirectories: {},
        files: [],
      };
    }

    if (/[0-9]/.test(line[0])) {
      directoryStack[directoryStack.length - 1].files.push(
        Number(line.split(" ")[0])
      );
    }
  });

  return mainDirectory;
};
