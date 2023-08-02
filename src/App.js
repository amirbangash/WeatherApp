import { CssBaseline, ThemeProvider } from "@mui/material";
import { defaultTheme } from "./theme/DefaultTheme";
import View from "./View";

function App() {
  const theme = defaultTheme;

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <View />
    </ThemeProvider>
  );
}

export default App;
