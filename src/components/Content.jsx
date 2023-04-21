import styled from "styled-components";
import Line from "../assets/svg/Line";
import { theme } from "../style/Theme";
import svgIcons from "../assets/svg/svgIcons";
import { BoxContent } from "../style/BoxStyle";
import { Bold, Italic, SubTitle, Title } from "../style/TextStyle";

const LineBox = styled.div`
  margin-bottom: 4px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Content = () => (
  <BoxContent>
    <Title as={"h1"}>I’m Kévin Jayat</Title>
    <SubTitle as={"h2"}>
      <LineBox>
        <Line shape={svgIcons.lineLeft} color={theme.colors.primary} />
        Magician &<Line shape={svgIcons.lineRight} color="blue" />
      </LineBox>
    </SubTitle>
    <Italic>
      <Bold as={"em"}>front-end</Bold> developer
    </Italic>
  </BoxContent>
);

export default Content;
