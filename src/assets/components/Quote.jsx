import styled from "styled-components";
import Icon from "./Icon";
import svgIcons from "../svg/svgIcons";
import { theme } from "../../style/Theme";

const Box = styled.section`
  width: 15.625rem;
  height: 14rem;
  border: 2px solid ${(props) => props.theme.colors.primary};
  text-align: left;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2rem;
  margin-top: -2px;
`;

const Text = styled.p`
  color: ${(props) => props.theme.colors.primary};
  font-family: ${(props) => props.theme.fonts.main};
  font-weight: 400;
  font-size: 13px;
`;

const IconWrapper = styled.div`
  position: absolute;
  margin-left: ${(props) => (props.left ? "-1.7rem" : "11.6rem")};
  margin-top: ${(props) => (props.left ? "-12rem" : "12rem")}; ;
`;

const Quote = () => {
  return (
    <Box>
      <IconWrapper left>
        <Icon
          height={"24px"}
          width={"24px"}
          color={theme.colors.primary}
          shape={svgIcons.quoteLeft}
        />
      </IconWrapper>
      <Text>
        Passionate & creative, with a keen interest in the intersection of
        design and the web, I am constantly seeking to enhance my digital
        skills, and enjoy exploring new ways to bring innovative ideas to life.
      </Text>
      <IconWrapper>
        <Icon
          height={"24px"}
          width={"24px"}
          color={theme.colors.primary}
          shape={svgIcons.quoteRight}
        />
      </IconWrapper>
    </Box>
  );
};

export default Quote;
