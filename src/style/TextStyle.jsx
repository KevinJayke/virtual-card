import styled from "styled-components";

export const BaseText = styled.p`
  color: ${(props) => props.theme.colors.primary};
  font-family: ${(props) => props.theme.fonts.main};
  font-weight: 600;
  font-size: 16px;
`;

export const ButtonText = styled(BaseText)`
  font-family: ${(props) => props.theme.fonts.secondary};
  font-style: italic;
  margin-left: 1rem;
`;

export const Title = styled(BaseText)`
  font-weight: 700;
  font-size: 22px;
`;

export const SubTitle = styled(BaseText)`
  font-style: italic;
  font-weight: 500;
  position: relative;

  ::before,
  ::after {
    content: "";
    position: absolute;
    width: 2px;
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
`;

export const Bold = styled(BaseText)`
  font-family: ${(props) => props.theme.fonts.secondary};
  font-style: normal;
  font-weight: 800;
  text-transform: uppercase;
`;

export const QuoteText = styled(BaseText)`
  font-weight: 400;
  font-size: 13px;
`;
