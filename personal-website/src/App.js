import { createTheme, ThemeProvider } from "@mui/material";
import LandingPage from "./components/LandingPage";

const theme = createTheme({
  typography: {
    fontFamily: ['Rubik'],
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <LandingPage />
    </ThemeProvider>
  );
}

export default App;
