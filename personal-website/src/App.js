import { createTheme, ThemeProvider } from "@mui/material";
import Popup from "./components/Popup";

const theme = createTheme({
  typography: {
    fontFamily: ['Rubik'],
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Popup />
    </ThemeProvider>
  );
}

export default App;
