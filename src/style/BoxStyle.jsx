import styled from "styled-components";

// Common style
export const Box = styled.div`
  width: 15.625rem;
  border: 2px solid ${(props) => props.theme.colors.primary};
  background: ${(props) => props.theme.colors.container};
  box-shadow: 0.25rem 0.25rem 0px 0px ${(props) => props.theme.colors.secondary};
`;

export const BoxContent = styled(Box)`
  height: 10rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  justify-content: center;
  padding: 1rem;
  margin-top: -2px;
`;

export const BoxPhoto = styled(Box)`
  height: 11.75rem;
  width: 11.75rem;
  border-radius: 10px 0px 0px 0px;
`;

export const BoxQuote = styled(Box)`
  height: 14rem;
  text-align: left;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2rem;
  margin-top: -2px;
`;

export const IconBox = styled(Box)`
  width: 4rem;
  height: 4rem;
  border-radius: 0px ${(props) => (props.rounded ? "10px" : "0px")} 0px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: ${(props) => (props.marginTop ? "-2px" : "0px")};
`;

export const ButtonBox = styled(Box)`
  position: relative;
  z-index: 1;
  text-align: center;
  display: flex;
  justify-content: center;
  padding: 1rem;
  margin-top: -2px;
  text-decoration: none;
  border-radius: 0px 0px 10px 10px;
`;
