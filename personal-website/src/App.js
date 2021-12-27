import { createTheme, ThemeProvider } from "@mui/material";
import LandingPage from "./components/LandingPage";
import CssBaseline from '@mui/material/CssBaseline';

const theme = createTheme({
  typography: {
    fontFamily: ['Rubik'],
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <LandingPage />
    </ThemeProvider>
  );
}

export default App;
