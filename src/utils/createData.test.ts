import { createData } from "./createData.util";

describe("create animal object", () => {
  it("should return an object with Data type", () => {
    const animal = createData(100, "foo", "dog", "shepherd", "male", "brown");
    expect(animal).toBeInstanceOf(Object);
  });
});
