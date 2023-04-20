import styled from "styled-components";
import Line from "../assets/svg/Line";
import { theme } from "../style/Theme";
import svgIcons from "../assets/svg/svgIcons";

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
  background: ${(props) => props.theme.colors.container};
  box-shadow: 0.25rem 0.25rem 0px 0px ${(props) => props.theme.colors.secondary};
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

const Bold = styled.em`
  color: ${(props) => props.theme.colors.primary};
  font-family: ${(props) => props.theme.fonts.secondary};
  font-style: normal;
  font-weight: 800;
  font-size: 16px;
  text-transform: uppercase;
`;

const Content = () => (
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

export default Content;
