import styled from "styled-components";
import { device } from "./BreakPoints";

const baseFontSize = 16;
const titleFontSize = 23;
const lineHeight = (1.5 * titleFontSize) / baseFontSize;

export const BaseText = styled.p`
  color: ${(props) => props.theme.colors.primary};
  font-family: ${(props) => props.theme.fonts.main};
  font-weight: 600;
  font-size: ${`${baseFontSize + 4}px`};

  @media ${device.xl} {
    font-size: ${`${baseFontSize}px`};
  }
`;

export const ButtonText = styled(BaseText)`
  font-family: ${(props) => props.theme.fonts.secondary};
  font-style: italic;
  margin-left: 1rem;
`;

export const Title = styled(BaseText)`
  font-weight: 700;
  font-size: ${`${titleFontSize + 4}px`};

  @media ${device.xl} {
    font-size: ${`${titleFontSize}px`};
  }
`;

export const SubTitle = styled(BaseText)`
  font-style: italic;
  font-weight: 500;
  position: relative;
  line-height: ${lineHeight};

  ::before,
  ::after {
    content: "";
    position: absolute;
    width: 2.5px;
    height: 100%;
    transform: rotate(90deg);
    background-color: ${(props) =>
      props.theme.colors.primary}; /* the two lines on the side */
  }

  ::before {
    left: 2rem;
  }

  ::after {
    right: 2rem;
  }
`;

export const Italic = styled(BaseText)`
  font-family: ${(props) => props.theme.fonts.secondary};
  font-style: italic;
  line-height: ${lineHeight};
`;

export const Bold = styled(BaseText)`
  font-family: ${(props) => props.theme.fonts.secondary};
  font-style: normal;
  font-weight: 800;
  text-transform: uppercase;
`;

export const QuoteText = styled(BaseText)`
  font-weight: 400;
  font-size: 15.5px;

  @media ${device.xl} {
    font-size: ${"13px"};
  }
`;
