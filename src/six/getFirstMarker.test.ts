import { getFirstMarker } from "./getFirstMarker";

describe("getFirstMarker", () => {
  it("should return position of first marker", () => {
    expect(getFirstMarker("bvwbjplbgvbhsrlpgdmjqwftvncz")).toBe(5);
    expect(getFirstMarker("nppdvjthqldpwncqszvftbrmjlhg")).toBe(6);
    expect(getFirstMarker("nznrnfrfntjfmvfwmzdfjlvtqnbhcprsg")).toBe(10);
    expect(getFirstMarker("zcfzfwzzqfrljwzlrfnpqdbhtmscgvjw")).toBe(11);
  });
});
