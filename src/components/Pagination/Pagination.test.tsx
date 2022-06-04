import { render, screen } from "@testing-library/react";

import { ComponentProps } from "react";
import { Pagination } from "./Pagination";
import userEvent from "@testing-library/user-event";

describe("Pagination", () => {
  it("should render", () => {
    const { container } = getRenderer();
    expect(container).toMatchSnapshot();
  });

  it("should return an array with 10 buttons", () => {
    getRenderer();
    expect(screen.getAllByRole("button")).toHaveLength(10);
  });

  it("should click on button and call setCurrentPage callback", () => {
    const setCurrentPage = jest.fn();
    getRenderer({ setCurrentPage });
    expect(setCurrentPage).not.toBeCalled();
    userEvent.click(screen.getByRole("button", { name: "2" }));
    expect(setCurrentPage).toBeCalledTimes(1);
  });
});

function getRenderer({
  currentPage = 0,
  setCurrentPage = jest.fn(),
  rowsPerPage = 10,
  totalRegisters = 100,
}: Partial<ComponentProps<typeof Pagination>> = {}) {
  return render(
    <Pagination
      currentPage={currentPage}
      setCurrentPage={setCurrentPage}
      rowsPerPage={rowsPerPage}
      totalRegisters={totalRegisters}
    />
  );
}
