import { render, screen } from "@testing-library/react";

import { ComponentProps } from "react";
import { Search } from "./Search";
import userEvent from "@testing-library/user-event";

describe("Search", () => {
  it("should have an Icon", () => {
    const { container } = getRenderer();
    expect(container).toMatchSnapshot();
  });

  it.each(["first search term", "second search term"])(
    "should display the searchValue %p",
    (expected) => {
      getRenderer({ searchValue: expected });
      expect(screen.getByRole("textbox")).toHaveDisplayValue(expected);
    }
  );

  it("should call setSearchValue callback", () => {
    const searchTerm = "search term";
    const setSearchValue = jest.fn();
    getRenderer({ setSearchValue });
    expect(setSearchValue).not.toBeCalled();

    userEvent.paste(screen.getByRole("textbox"), searchTerm);
    expect(setSearchValue).toBeCalledTimes(1);
    expect(setSearchValue).toBeCalledWith(searchTerm);
  });
});

function getRenderer({
  searchValue = "",
  setSearchValue = jest.fn(),
}: Partial<ComponentProps<typeof Search>> = {}) {
  return render(
    <Search searchValue={searchValue} setSearchValue={setSearchValue} />
  );
}
