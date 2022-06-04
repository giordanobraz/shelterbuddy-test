import { render, screen } from "@testing-library/react";

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
    render(
      <Provider store={store}>
        <AnimalsListPage />
      </Provider>
    );

    const searchInput = screen.getByPlaceholderText("Search an animal by name");
    userEvent.type(searchInput, "big");

    expect(await screen.findByText("Big Sean")).toBeInTheDocument();
  });

  it("should show a message if it doesn't find an animal", async () => {
    render(
      <Provider store={store}>
        <AnimalsListPage />
      </Provider>
    );

    const searchInput = screen.getByPlaceholderText("Search an animal by name");
    userEvent.type(searchInput, "Donald");
    expect(await screen.findByText("No results found.")).toBeInTheDocument();
  });
});

function getRenderer() {
  return render(
    <Provider store={store}>
      <AnimalsListPage />
    </Provider>
  );
}
