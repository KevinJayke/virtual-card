import { BoxContent } from "../style/BoxStyle";
import { Bold, Italic, SubTitle, Title } from "../style/TextStyle";

const Content = () => (
  <BoxContent>
    <Title as={"h1"}>I’m Kévin Jayat</Title>
    <SubTitle as={"h2"}>magician &</SubTitle>
    <Italic>
      <Bold as={"em"}>front-end</Bold> developer
    </Italic>
  </BoxContent>
);

export default Content;
