import styled, { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./style/Theme";
import { GlobalStyles } from "./style/Global";
import Header from "./containers/Header";
import Main from "./containers/Main";
import { useState } from "react";
import { useEffect } from "react";

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
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  const themeToggler = () => {
    theme === "dark" ? setTheme("light") : setTheme("dark");
  };

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <ThemeProvider theme={theme === "dark" ? darkTheme : lightTheme}>
      <GlobalStyles />
      <Container>
        <Header onToggleTheme={themeToggler} />
        <Main />
      </Container>
    </ThemeProvider>
  );
}

export default App;
