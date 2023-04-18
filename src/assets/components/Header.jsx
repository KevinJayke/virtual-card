import { theme } from "../../style/Theme";
import svgIcons from "../svg/svgIcons";
import Photo from "./Photo";
import SocialIcon from "./SocialIcon";
import myPicture from "../images/myPicture.png";
import styled from "styled-components";

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
        <SocialIcon
          rounded
          color={theme.colors.primary}
          width={"24px"}
          height={"24px"}
          shape={svgIcons.email}
        />
        <SocialIcon
          marginTop
          color={theme.colors.primary}
          width={"24px"}
          height={"24px"}
          shape={svgIcons.gitHub}
        />
        <SocialIcon
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
