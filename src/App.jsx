import { ThemeProvider } from "styled-components";
import { theme } from "./style/Theme";
import { GlobalStyles } from "./style/Global";
import Header from "./assets/components/Header";
import Title from "./assets/components/Title";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header />
      <Title />
    </ThemeProvider>
  );
}

export default App;
