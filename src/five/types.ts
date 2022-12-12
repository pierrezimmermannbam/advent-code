export type Rearrangement = {
  from: number;
  to: number;
  numberOfCrates: number;
};

export type Stacks = Record<number, Array<string>>;

export type StacksAndRearrangements = {
  stacks: Stacks;
  rearrangements: Array<Rearrangement>;
};
