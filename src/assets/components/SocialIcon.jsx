import styled from "styled-components";
import Icon from "./Icon";

const Link = styled.a`
  background: "white";
  width: 4rem;
  height: 4rem;
  border: 2px solid ${(props) => props.theme.colors.primary};
  border-radius: 0px ${(props) => (props.rounded ? "10px" : "0px")} 0px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: ${(props) => (props.marginTop ? "-2px" : "0px")};
`;

const SocialIcon = ({ url, ...props }) => {
  return (
    <Link target="_blank" rel="noopener noreferrer" href={url} {...props}>
      <Icon {...props} />
    </Link>
  );
};

export default SocialIcon;
