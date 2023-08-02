import { createTheme } from "@mui/material/styles";

export const defaultTheme = createTheme({
  palette: {
    primary: {
      main: "#5596f6",
      light: "#eef4fe",
      contrastText: "#fff",
    },
    background: {
      main: "#f3f6fa",
    },
  },
  typography: {
    fontFamily: ["Poppins", "sans-serif"].join(","),
  },
});
