import { fetchAnimalsData, fetchAnimalsPhotoData } from "./axios";

import { Data } from "../utils/createData.util";

const mockAnimal: Data[] = [
  {
    id: 557943,
    name: "dog",
    breed: "labrador",
    color: "black",
    gender: "male",
    type: "Dog",
  },
  {
    id: 2,
    name: "dog",
    breed: "labrador",
    color: "black",
    gender: "male",
    type: "Dog",
  },
];

describe("RequestAnimalsData", () => {
  it("should return an array of animals", async () => {
    const animals = await fetchAnimalsData();
    expect(animals?.Data).toBeInstanceOf(Array);
  });

  it("should return an array of animals with length 100", async () => {
    const animals = await fetchAnimalsData();
    expect(animals?.Data).toHaveLength(100);
  });

  it("should return an array of animal photo data", async () => {
    const photos = await fetchAnimalsPhotoData();
    expect(photos?.Data).toBeInstanceOf(Array);
  });

  it("should return an image url to existent animal", async () => {
    const photos = await fetchAnimalsPhotoData();
    const photoURL = photos?.Data.find(
      (photo: any) => photo.Animal.Id === mockAnimal[0].id
    );

    expect(photoURL).toBeTruthy();
  });

  it("shouldn't return an image url", async () => {
    const photos = await fetchAnimalsPhotoData();
    const photoURL = photos?.Data.find(
      (photo: any) => photo.Animal.Id === mockAnimal[1].id
    );

    expect(photoURL).toBeFalsy();
  });
});
