import styled from "styled-components";
import pdf from "../assets/pdf/Dev_Front_KJayat.pdf";
import Icon from "../assets/svg/Icon";
import svgIcons from "../assets/svg/svgIcons";
import { theme } from "../style/Theme";

const Link = styled.a`
  position: relative;
  z-index: 1;
  width: 15.625rem;
  border: 2px solid ${(props) => props.theme.colors.primary};
  text-align: center;
  display: flex;
  justify-content: center;
  padding: 1rem;
  margin-top: -2px;
  text-decoration: none;
  border-radius: 0px 0px 10px 10px;
  background: ${(props) => props.theme.colors.container};
  box-shadow: 0.25rem 0.25rem 0px 0px ${(props) => props.theme.colors.secondary};
`;

const SubText = styled.h2`
  color: ${(props) => props.theme.colors.primary};
  font-family: ${(props) => props.theme.fonts.secondary};
  font-style: italic;
  font-weight: 600;
  font-size: 16px;
  margin-left: 1rem;
`;

const Action = () => {
  return (
    <>
      <Link href={pdf} download target="_blank" rel="noopener noreferrer">
        <Icon
          shape={svgIcons.downLoad}
          width={"24px"}
          height={"24px"}
          color={theme.colors.primary}
        />
        <SubText>Download my CV</SubText>
      </Link>
    </>
  );
};

export default Action;
