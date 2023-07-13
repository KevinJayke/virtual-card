import styled from "styled-components";
import { device } from "./BreakPoints";
import { motion } from "framer-motion";

export const HStack = styled.div`
  display: flex;
`;

export const VStack = styled.div`
  flex-direction: column;
  ${(props) => (props.marginLeft ? "margin-left: -2.4px" : "margin-left: 0px")};
  @media ${device.xl} {
    ${(props) => (props.marginLeft ? "margin-left: -2px" : "margin-left: 0px")};
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 100vh;
  padding: 1.3rem 0.4rem 1.3rem 0rem;

  @media ${device.xl} {
    padding: 1.3rem 0.25rem 1.3rem 0rem;
  }
}
`;

// Common style

export const Box = styled.div`
  width: 18.75rem;
  border: 2.4px solid ${(props) => props.theme.colors.primary};
  background: ${(props) => props.theme.colors.container};
  box-shadow: 0.4rem 0rem 0px 0px ${(props) => props.theme.colors.secondary},
    0.4rem 0.4rem 0px 0px ${(props) => props.theme.colors.secondary};
  box-shadow: ${(props) => props.theme.boxShadow};

  @media ${device.xl} {
    width: 15.625rem;
    border: 2px solid ${(props) => props.theme.colors.primary};
    box-shadow: 0.25rem 0rem 0px 0px ${(props) => props.theme.colors.secondary},
      0.25rem 0.25rem 0px 0px ${(props) => props.theme.colors.secondary};
    box-shadow: ${(props) => props.theme.boxShadow};
  }
`;

export const BoxContent = styled(Box)`
  display: flex;
  text-align: center;
  flex-direction: column;
  gap: 0.6rem;
  justify-content: center;
  padding: 1.5rem;
  margin-top: -2px;

  @media ${device.xl} {
    padding: 1rem;
  }
`;

export const BoxPhoto = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 14.1rem;
  border-radius: 10px 0px 0px 0px;

  @media ${device.xl} {
    width: 11.75rem;
  }
`;

export const Circle = styled.span`
  height: 10rem;
  width: 10rem;
  background-color: ${(props) => props.theme.colors.primary};
  border-radius: 50%;
  position: relative;

  @media ${device.xl} {
    height: 8rem;
    width: 8rem;
  }
`;

export const ImgMotion = styled(motion.img)`
  max-width: 10rem;
  opacity: 1;
  position: absolute;
  padding-bottom: 0.9375rem;

  @media ${device.xl} {
    max-width: 8rem;
  }
`;

export const BoxQuote = styled(Box)`
  text-align: left;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2.4rem;
  margin-top: -2px;

  @media ${device.xl} {
    padding: 2rem;
  }
`;

export const SpanBox = styled.span`
  background-color: ${(props) => props.theme.colors.container};
  color: ${(props) => props.theme.colors.primary};
  padding-left: 1.4rem;
  padding-right: 1.4rem;
  z-index: 2;
  position: relative;
`;

export const IconBox = styled(Box)`
  width: 4.8rem;
  border-radius: 0px ${(props) => (props.rounded ? "10px" : "0px")} 0px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: ${(props) => (props.marginTop ? "-2px" : "0px")};
  aspect-ratio: 1;
  box-shadow: 0.4rem 0rem 0px 0px ${(props) => props.theme.colors.secondary};
  box-shadow: ${(props) => props.theme.boxShadow};

  @media ${device.xl} {
    width: 4rem;
    box-shadow: 0.25rem 0rem 0px 0px ${(props) => props.theme.colors.secondary};
    box-shadow: ${(props) => props.theme.boxShadow};
  }

  &:active {
    background: ${(props) => props.theme.colors.secondary};
    transition: 0.2s linear;
  }
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

  &:active {
    background: ${(props) => props.theme.colors.secondary};
    transition: 0.2s linear;
  }
`;

export const ToggleBox = styled(Box)`
  background-color: transparent;
  border: none;
  display: flex;
  position: absolute;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  width: 3rem;
  height: 3rem;
  box-shadow: none;
  z-index: 1;

  @media ${device.xl} {
    width: 2.5rem;
    height: 2.5rem;
  }
`;

// Icon Style

export const IconSize = styled.div`
  height: 30px;
  width: 30px;

  @media ${device.xl} {
    height: 24px;
    width: 24px;
  }
`;

export const Path = styled.path`
  fill: ${(props) => props.theme.colors.primary};
`;
