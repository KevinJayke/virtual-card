import { ThemeProvider } from "styled-components";
import { theme } from "./style/Theme";
import { GlobalStyles } from "./style/Global";
import Header from "./assets/components/Header";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header />
    </ThemeProvider>
  );
}

export default App;
