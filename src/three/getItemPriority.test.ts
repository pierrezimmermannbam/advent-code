import { getItemPriority } from "./getItemsPriority";

describe("get item priority", () => {
  it("should give correct priority for lowercase a", () => {
    expect(getItemPriority("a")).toBe(1);
  });

  it("should give correct priority for lowercase z", () => {
    expect(getItemPriority("z")).toBe(26);
  });
  it("should give correct priority for uppercase A", () => {
    expect(getItemPriority("A")).toBe(27);
  });
  it("should give correct priority for uppercase Z", () => {
    expect(getItemPriority("Z")).toBe(52);
  });
});
