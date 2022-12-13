export type File = number;

export type Directory = {
  files: Array<File>;
  subdirectories: Record<string, Directory>;
};
