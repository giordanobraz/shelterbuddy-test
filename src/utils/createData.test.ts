import { Data, createData } from "./createData.util";

const object: Data = {
  id: 100,
  name: "foo",
  type: "dog",
  breed: "shepherd",
  gender: "male",
  color: "brown",
};

describe("create animal object", () => {
  it("should return an object with Data type", () => {
    const animal = createData(100, "foo", "dog", "shepherd", "male", "brown");
    expect(animal).toStrictEqual(object);
  });
});
