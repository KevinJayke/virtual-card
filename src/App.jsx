import styled, { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./style/Theme";
import { GlobalStyles } from "./style/Global";
import Header from "./containers/Header";
import Main from "./containers/Main";
import { useState } from "react";
import { useEffect } from "react";
import { Container } from "./style/BoxStyle";

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
