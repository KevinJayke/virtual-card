import styled, { ThemeProvider } from "styled-components";
import { theme } from "./style/Theme";
import { GlobalStyles } from "./style/Global";

const HeadingTest = styled.h1`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: ${(props) => props.theme.colors.primary};
  font-family: ${(props) => props.theme.fonts.main}, sans-serif;
`;

const HeadingTest2 = styled.div`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: ${(props) => props.theme.colors.primary};
  font-family: ${(props) => props.theme.fonts.secondary}, sans-serif;
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <HeadingTest>Salut</HeadingTest>
      <HeadingTest2>Salut</HeadingTest2>
    </ThemeProvider>
  );
}

export default App;