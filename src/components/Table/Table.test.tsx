import { render, screen } from "@testing-library/react";

import { ComponentProps } from "react";
import { Data } from "../../utils/createData.util";
import { Table } from ".";

describe("Table", () => {
  it("should render with data", () => {
    getRenderer({
      filteredAnimalList: animals,
    });

    expect(screen.getByText("Lion")).toBeInTheDocument();
    expect(screen.getByText("Brad")).toBeInTheDocument();
  });

  it("should render with no data", () => {
    getRenderer({
      filteredAnimalList: [],
    });

    expect(screen.getByText("No results found.")).toBeInTheDocument();
  });
});

const animals: Data[] = [
  {
    id: 1,
    name: "Lion",
    breed: "Poodle",
    color: "Black",
    gender: "Male",
    type: "Dog",
  },
  {
    id: 2,
    name: "Brad",
    breed: "Husky",
    color: "White",
    gender: "Male",
    type: "Dog",
  },
];

function getRenderer({
  filteredAnimalList = [],
}: Partial<ComponentProps<typeof Table>> = {}) {
  return render(<Table filteredAnimalList={filteredAnimalList} />);
}
