import styled from "styled-components";
import Icon from "./Icon";

const Box = styled.div`
  width: 4rem;
  height: 4rem;
  border: 2px solid ${(props) => props.theme.colors.primary};
  border-radius: 0px ${(props) => (props.rounded ? "10px" : "0px")} 0px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SocialIcon = ({ ...props }) => {
  return (
    <Box {...props}>
      <Icon {...props} />
    </Box>
  );
};

export default SocialIcon;
