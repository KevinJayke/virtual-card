import { ThemeProvider } from "styled-components";
import { theme } from "./style/Theme";
import { GlobalStyles } from "./style/Global";
import Header from "./assets/components/Header";
import Title from "./assets/components/Title";
import Quote from "./assets/components/Quote";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header />
      <Title />
      <Quote />
    </ThemeProvider>
  );
}

export default App;
