import styled, { ThemeProvider } from "styled-components";
import { theme } from "./style/Theme";
import { GlobalStyles } from "./style/Global";
import Header from "./assets/components/Header";
import Title from "./assets/components/Title";
import Quote from "./assets/components/Quote";
import Download from "./assets/components/Download";

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Card>
        <GlobalStyles />
        <Header />
        <Title />
        <Quote />
        <Download />
      </Card>
    </ThemeProvider>
  );
}

export default App;
