import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./style/Global";
import Header from "./containers/Header";
import Main from "./containers/Main";
import { Container } from "./style/BoxStyle";
import { useThemeManager } from "./tools/useThemeManager";
import KeyPatternDetector from "./tools/KeyPatternDetector";
import { cheat } from "./assets/data/data";

function App() {
  const { theme, toggleTheme, handleTheme, cheatTheme } = useThemeManager();

  return (
    <ThemeProvider theme={handleTheme(theme)}>
      <KeyPatternDetector
        pattern={cheat.konamicode}
        onPatternMatch={cheatTheme}
      />
      <GlobalStyles />
      <Container>
        <Header onToggleTheme={toggleTheme} />
        <Main />
      </Container>
    </ThemeProvider>
  );
}

export default App;
