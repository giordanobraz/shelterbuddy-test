import { render, screen, waitFor } from "@testing-library/react";

import { AnimalsListPage } from "./AnimalsListPage";
import { Provider } from "react-redux";
import store from "../../domain/store";
import userEvent from "@testing-library/user-event";

describe("AnimalListPage", () => {
  it("should render", () => {
    const { container } = getRenderer();
    expect(container).toMatchSnapshot();
  });

  it("should search and find an animal", async () => {
    getRenderer();
    const searchInput = screen.getByPlaceholderText("Search an animal by name");
    userEvent.type(searchInput, "big");
    await waitFor(() => {
      expect(screen.getByText("Big Sean")).toBeInTheDocument();
    });
  });

  it("should show a message if it doesn't find an animal", async () => {
    getRenderer();
    const searchInput = screen.getByPlaceholderText("Search an animal by name");
    userEvent.type(searchInput, "Donald");
    await waitFor(() => {
      expect(screen.getByText("No results found.")).toBeInTheDocument();
    });
  });
});

function getRenderer() {
  return render(
    <Provider store={store}>
      <AnimalsListPage />
    </Provider>
  );
}
