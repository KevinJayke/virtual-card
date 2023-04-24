import styled from "styled-components";

export const HStack = styled.div`
  display: flex;
`;

export const VStack = styled.div`
  flex-direction: column;
  margin-left: -2px;
`;

// Common style
export const Box = styled.div`
  width: 15.625rem;
  border: 2px solid ${(props) => props.theme.colors.primary};
  background: ${(props) => props.theme.colors.container};
  box-shadow: 0.25rem 0rem 0px 0px ${(props) => props.theme.colors.secondary},
    0.25rem 0.25rem 0px 0px ${(props) => props.theme.colors.secondary};
`;

export const BoxContent = styled(Box)`
  display: flex;
  text-align: center;
  flex-direction: column;
  gap: 0.6rem;
  justify-content: center;
  padding: 1rem;
  margin-top: -2px;
`;

export const BoxPhoto = styled(Box)`
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  width: 11.75rem;
  border-radius: 10px 0px 0px 0px;
`;

export const BoxQuote = styled(Box)`
  text-align: left;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2rem;
  margin-top: -2px;
`;

export const IconBox = styled(Box)`
  width: 4rem;
  border-radius: 0px ${(props) => (props.rounded ? "10px" : "0px")} 0px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: ${(props) => (props.marginTop ? "-2px" : "0px")};
  aspect-ratio: 1;
  box-shadow: 0.25rem 0rem 0px 0px ${(props) => props.theme.colors.secondary};
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

export const ToggleBox = styled(Box)`
  background-color: transparent;
  border: none;
  display: flex;
  position: absolute;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  width: 2.5rem;
  height: 2.5rem;
  box-shadow: none;
`;

export const Path = styled.path`
  fill: ${(props) => props.theme.colors.primary};
`;
