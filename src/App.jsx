import styled, { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./style/Theme";
import { GlobalStyles } from "./style/Global";
import Header from "./containers/Header";
import Main from "./containers/Main";
import { useState } from "react";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: ${(props) => props.theme.colors.background};
  transition: all 0.5s linear;
`;

function App() {
  const [theme, setTheme] = useState("light");
  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };
  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <Container>
        <button onClick={themeToggler}>Switch Theme</button>
        <Header />
        <Main />
      </Container>
    </ThemeProvider>
  );
}

export default App;
