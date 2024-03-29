import { BoxContent, SpanBox } from "../style/BoxStyle";
import { Bold, Italic, SubTitle, Title } from "../style/TextStyle";

const Content = () => (
  <BoxContent>
    <Title as={"h1"}>I’m Kévin Jayat</Title>
    <SubTitle as={"h2"}>
      <SpanBox>creative &</SpanBox>
    </SubTitle>
    <Italic>
      développeur
      <Bold as={"em"}> front</Bold>
    </Italic>
  </BoxContent>
);

export default Content;
