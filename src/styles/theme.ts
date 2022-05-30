import { createTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Theme {
    palette: {
      background: {
        default: string;
      };
      mode: string;
      text: {
        primary: string;
        secondary: string;
      };
      action: {
        hover: string;
      };
    };
    typography: {
      fontFamily: string;
    };
  }
}

const theme = createTheme({
  palette: {
    background: {
      default: "#f6f7fa",
    },
    action: {
      hover: "#e6e6e6",
    },
  },
  typography: {
    fontFamily: "Inter, sans-serif",
  },
});

export { theme };
