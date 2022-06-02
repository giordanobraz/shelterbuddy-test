import { getComparator } from "./comparator.util";

const a = { id: 1, name: "jacoby", breed: "shepherd" };
const b = { id: 2, name: "anthony", breed: "weiner" };

describe("Comparator", () => {
  it("should sort by name in descending order", () => {
    const comparator = getComparator("desc", "name");
    // b < a returns -1
    expect(comparator(a, b)).toBe(-1);
  });

  it("should sort by name in ascending order", () => {
    const comparator = getComparator("asc", "name");
    // b > a returns 1
    expect(comparator(a, b)).toBe(1);
  });

  it("should sort by breed in descending order", () => {
    const comparator = getComparator("desc", "breed");
    // b < a returns -1
    expect(comparator(b, a)).toBe(-1);
  });

  it("should sort by breed in ascending order", () => {
    const comparator = getComparator("asc", "breed");
    // b > a returns 1
    expect(comparator(b, a)).toBe(1);
  });

  it("should sort by id in descending order", () => {
    const comparator = getComparator("desc", "id");
    // b > a returns 1
    expect(comparator(a, b)).toBe(1);
  });

  it("should sort by id in ascending order", () => {
    const comparator = getComparator("asc", "id");
    expect(comparator(a, b)).toBe(-1);
  });
});
