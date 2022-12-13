import { getSmallerDirectoryToDelete } from "./getSmallerDirectoryToDelete";
import { seventhInput } from "./seventhInput";

describe("getSmallerDirectoryToDelete", () => {
  it("should return size of smaller directory to delete to have enough space", () => {
    expect(
      getSmallerDirectoryToDelete(`$ cd /
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
    ).toBe(24933642);
  });
});
