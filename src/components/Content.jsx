import { BoxContent, SpanBox } from "../style/BoxStyle";
import { Bold, Italic, SubTitle, Title } from "../style/TextStyle";

const Content = () => (
  <BoxContent>
    <Title as={"h1"}>I’m Kévin Jayat</Title>
    <SubTitle as={"h2"}>
      <SpanBox>magician &</SpanBox>
    </SubTitle>
    <Italic>
      <Bold as={"em"}>front-end</Bold> developer
    </Italic>
  </BoxContent>
);

export default Content;
