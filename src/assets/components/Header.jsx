import { theme } from "../../style/Theme";
import svgIcons from "../svg/svgIcons";
import Photo from "./Photo";
import SocialIcon from "./SocialIcon";
import myPicture from "../images/myPicture.png";
import styled from "styled-components";

const Shadow = styled.div`
  width: 4rem;
  height: 4rem;
  background: blue;
  z-index: -10;
  position: absolute;
  transform: translate(6px, 6px);
  border-radius: 0px ${(props) => (props.rounded ? "10px" : "0px")} 0px 0px;
`;

const HStack = styled.header`
  display: flex;
`;

const VStack = styled.section`
  display: flex;
  flex-direction: column;
  margin-left: -2px;
`;

const Header = () => {
  return (
    <HStack>
      <Photo
        alt={
          "A man with a smile, a mustache and glasses, standing in front of the camera"
        }
        src={myPicture}
      />
      <VStack>
        <Shadow rounded />
        <SocialIcon
          href={"mailto:kevin.jayat@gmail.com?subject=Hello%20Kevin"}
          rounded
          color={theme.colors.primary}
          width={"24px"}
          height={"24px"}
          shape={svgIcons.email}
        />
        <SocialIcon
          href={"https://github.com/KevinJayke"}
          marginTop
          color={theme.colors.primary}
          width={"24px"}
          height={"24px"}
          shape={svgIcons.gitHub}
        />
        <SocialIcon
          href={"https://www.linkedin.com/in/k%C3%A9vin-jayat-952b56207/"}
          marginTop
          color={theme.colors.primary}
          width={"24px"}
          height={"24px"}
          shape={svgIcons.linkedIn}
        />
      </VStack>
    </HStack>
  );
};

export default Header;
