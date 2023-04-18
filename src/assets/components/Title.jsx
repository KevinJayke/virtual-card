import styled from "styled-components";
import Line from "./Line";
import { theme } from "../../style/Theme";
import svgIcons from "../svg/svgIcons";

const Box = styled.div`
  width: 15.625rem;
  height: 10rem;
  border: 2px solid ${(props) => props.theme.colors.primary};
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  justify-content: center;
  padding: 1rem;
  margin-top: -2px;
`;

const Text = styled.h1`
  color: ${(props) => props.theme.colors.primary};
  font-family: ${(props) => props.theme.fonts.main};
  font-weight: 700;
  font-size: 22px;
`;

const SecondText = styled.h2`
  color: ${(props) => props.theme.colors.primary};
  font-family: ${(props) => props.theme.fonts.main};
  font-style: italic;
  font-weight: 500;
  font-size: 16px;
  margin-bottom: 4px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const SubText = styled.h2`
  color: ${(props) => props.theme.colors.primary};
  font-family: ${(props) => props.theme.fonts.secondary};
  font-style: italic;
  font-weight: 600;
  font-size: 16px;
`;

const Bold = styled.span`
  color: ${(props) => props.theme.colors.primary};
  font-family: ${(props) => props.theme.fonts.secondary};
  font-style: normal;
  font-weight: 800;
  font-size: 16px;
  text-transform: uppercase;
`;

const Title = () => (
  <Box>
    <Text>I’m Kévin Jayat</Text>
    <SecondText>
      <Line shape={svgIcons.lineLeft} color={theme.colors.primary} />
      Magician &<Line shape={svgIcons.lineRight} color="blue" />
    </SecondText>
    <SubText>
      <Bold>front-end</Bold> developer
    </SubText>
  </Box>
);

export default Title;
