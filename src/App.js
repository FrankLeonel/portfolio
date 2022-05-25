import Home from "pages/Home";
import { ThemeProvider } from "styled-components";
import theme from "theme/theme";
import { GlobalStyles } from "styles/GlobalStyles";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Home />
      <GlobalStyles />
    </ThemeProvider>
  );
}

export default App;
