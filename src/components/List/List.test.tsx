import { render, screen } from "@testing-library/react";

import { List } from "./List";
import userEvent from "@testing-library/user-event";

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

describe("ListComponent", () => {
  it("should return an item from the list", () => {
    render(<List filteredAnimalList={data} />);

    expect(screen.getByRole("list-item")).toBeInTheDocument();
  });

  it("should open the accordion and show details", () => {
    const { container } = render(<List filteredAnimalList={data} />);

    expect(screen.queryByRole("list-item-details")).not.toBeInTheDocument();

    // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
    const accordionButton = container.getElementsByClassName(
      "MuiAccordionSummary-expandIconWrapper"
    );

    userEvent.click(accordionButton[0]);

    expect(screen.getByRole("list-item-details")).toBeInTheDocument();
  });
});
