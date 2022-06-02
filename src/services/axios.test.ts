import { fetchAnimalsData, fetchAnimalsPhotoData } from "./axios";

describe("Request animals Data", () => {
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
});
