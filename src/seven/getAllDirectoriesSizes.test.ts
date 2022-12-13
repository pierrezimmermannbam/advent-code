import { getAllDirectoriesSizes } from "./getDirectoriesSizes";

describe("getAllDirectoriesSizes", () => {
  it("should return the total size of each directory", () => {
    expect(
      getAllDirectoriesSizes({
        subdirectories: {
          a: {
            subdirectories: {
              e: {
                subdirectories: {},
                files: [584],
              },
            },
            files: [29116, 2557, 62596],
          },
          d: {
            subdirectories: {},
            files: [4060174, 8033020, 5626152, 7214296],
          },
        },
        files: [14848514, 8504156],
      })
    ).toEqual([48381165, 94853, 584, 24933642]);
  });
});
