import { applyRearrangement, applyRearrangementWithNewCrateMover } from "./applyRearrangement";

describe("applyRearrangement", () => {
  it("should move one crate from a stack to another", () => {
    expect(
      applyRearrangement(
        { 1: ["A"], 2: ["B"] },
        { from: 1, to: 2, numberOfCrates: 1 }
      )
    ).toEqual({ 1: [], 2: ["B", "A"] });
  });

  it("should move two crates from a stack to another", () => {
    expect(
      applyRearrangement(
        { 1: ["A", "C"], 2: ["B"] },
        { from: 1, to: 2, numberOfCrates: 2 }
      )
    ).toEqual({ 1: [], 2: ["B", "C", "A"] });
  });

  it("should create the stack if we move to one that wasnt created", () => {
    expect(
      applyRearrangement({ 1: ["A"] }, { from: 1, to: 2, numberOfCrates: 1 })
    ).toEqual({ 1: [], 2: ["A"] });
  });
});

describe("applyRearrangementWithNewCrateMover", () => {
  it("should move the crates while keeping the same order", () => {
    expect(
      applyRearrangementWithNewCrateMover(
        { 1: ["A", "B"], 2: [] },
        { from: 1, to: 2, numberOfCrates: 2 }
      )
    ).toEqual({ 1: [], 2: ["A", "B"] });
  });
});
