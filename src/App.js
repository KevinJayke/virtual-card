import styled, { ThemeProvider } from "styled-components";
import { theme } from "./style/Theme";
import { GlobalStyles } from "./style/Global";

const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: ${(props) => props.theme.colors.primary};
  font-family: ${(props) => props.theme.fonts.body}, sans-serif;
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Button>Coucou</Button>
    </ThemeProvider>
  );
}

export default App;
