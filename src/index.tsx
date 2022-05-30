import { CssBaseline, ThemeProvider } from "@mui/material";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";
import store from "./domain/store";
import { theme } from "./styles/theme";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <CssBaseline />
      <App />
    </Provider>
  </ThemeProvider>
);
