import { render, screen } from "@testing-library/react";

import { AnimalsListPage } from "./pages/AnimalsListPage";
import { Provider } from "react-redux";
import store from "./domain/store";

test("renders table header", () => {
  render(
    <Provider store={store}>
      <AnimalsListPage />
    </Provider>
  );
  const linkElement = screen.getByText(/Your Animals/i);
  expect(linkElement).toBeInTheDocument();
});
