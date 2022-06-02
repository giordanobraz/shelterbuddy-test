import { render, screen } from "@testing-library/react";

import { Header } from "./Header";

describe("Header", () => {
  it("should render the logo", () => {
    render(<Header />);

    expect(screen.getByAltText("Logo")).toBeInTheDocument();
  });
});
