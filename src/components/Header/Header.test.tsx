import { render, screen } from "@testing-library/react";

import { Header } from "./Header";

describe("Header", () => {
  it("should render banner", () => {
    getRenderer();
    expect(screen.getByRole("banner")).toBeInTheDocument();
  });

  it("should render logo", () => {
    getRenderer();
    expect(screen.getByRole("img")).toBeInTheDocument();
  });
});

function getRenderer() {
  return render(<Header />);
}
