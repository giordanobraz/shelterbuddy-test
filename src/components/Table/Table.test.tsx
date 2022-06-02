import { render, screen } from "@testing-library/react";

import { Table } from ".";

const data = [
  {
    id: 1,
    name: "test",
    type: "dog",
    breed: "pinscher",
    gender: "male",
    color: "black",
  },
];

describe("TableComponent", () => {
  it("should render without crashing", () => {
    render(<Table filteredAnimalList={data} />);
  });

  it("should load all data values into the table", async () => {
    render(<Table filteredAnimalList={data} />);

    const detailsButton = await screen.findByText("Details");

    expect(await screen.findByText("test")).toBeInTheDocument();
    expect(await screen.findByText("dog")).toBeInTheDocument();
    expect(await screen.findByText("pinscher")).toBeInTheDocument();
    expect(await screen.findByText("male")).toBeInTheDocument();
    expect(await screen.findByText("black")).toBeInTheDocument();
    expect(detailsButton).toBeInTheDocument();
  });
});
