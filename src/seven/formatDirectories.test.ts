import { formatDirectories } from "./formatDirectories";

describe("formatDirectories", () => {
  it("should format directories", () => {
    expect(
      formatDirectories(`$ cd /
$ ls
dir a
14848514 b.txt
8504156 c.dat
dir d
$ cd a
$ ls
dir e
29116 f
2557 g
62596 h.lst
$ cd e
$ ls
584 i
$ cd ..
$ cd ..
$ cd d
$ ls
4060174 j
8033020 d.log
5626152 d.ext
7214296 k`)
    ).toEqual({
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
    });
  });
});
