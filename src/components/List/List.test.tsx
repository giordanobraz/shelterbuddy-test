import { render, screen } from "@testing-library/react";

import { ComponentProps } from "react";
import { Data } from "../../utils/createData.util";
import { List } from "./List";
import userEvent from "@testing-library/user-event";

describe("List", () => {
  it("should render with data", () => {
    const { container } = getRenderer();
    expect(container).toMatchSnapshot();
  });

  it("should open accordion when clicked", () => {
    getRenderer();
    const accordion = screen.getByRole("button", { name: "Lion Lion" });
    expect(accordion.getAttribute("aria-expanded")).toBe("false");
    userEvent.click(accordion);
    expect(accordion.getAttribute("aria-expanded")).toBe("true");
  });

  it("should close accordion when clicked", () => {
    getRenderer();
    const accordion = screen.getByRole("button", { name: "Lion Lion" });
    userEvent.click(accordion);
    expect(accordion.getAttribute("aria-expanded")).toBe("true");
    userEvent.click(accordion);
    expect(accordion.getAttribute("aria-expanded")).toBe("false");
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
  filteredAnimalList = animals,
}: Partial<ComponentProps<typeof List>> = {}) {
  return render(<List filteredAnimalList={filteredAnimalList} />);
}
