import { getComparator } from "./comparator.util";

describe("Comparator", () => {
  it("should sort in descending order", () => {
    const comparator = getComparator("asc", "id");
    expect(comparator({ id: 1 }, { id: 2 })).toBe(-1);
  });

  it("should sort in ascending order", () => {
    const comparator = getComparator("desc", "id");
    expect(comparator({ id: 1 }, { id: 2 })).toBe(1);
  });

  it("should sort by string", () => {
    const comparator = getComparator("asc", "name");
    expect(comparator({ name: "a" }, { name: "b" })).toBe(-1);
  });

  it("should sort by number", () => {
    const comparator = getComparator("asc", "id");
    expect(comparator({ id: 1 }, { id: 2 })).toBe(-1);
  });
});
