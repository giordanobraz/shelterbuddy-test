import { render, screen } from "@testing-library/react";

import { Pagination } from "./Pagination";

describe("PaginationComponent", () => {
  it("should return an array with 10 buttons", async () => {
    render(
      <Pagination
        totalRegisters={100}
        rowsPerPage={10}
        currentPage={1}
        setCurrentPage={() => {}}
      />
    );

    const buttons = screen.getAllByRole("button");

    expect(buttons.length).toBe(10);
  });
});
