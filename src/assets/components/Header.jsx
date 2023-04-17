import { theme } from "../../style/Theme";
import svgIcons from "../svg/svgIcons";
import Photo from "./Photo";
import SocialIcon from "./SocialIcon";
import myPicture from "../images/myPicture.png";

const Header = () => {
  return (
    <div>
      <Photo
        alt={
          "A man with a smile, a mustache and glasses, standing in front of the camera"
        }
        src={myPicture}
      />
      <SocialIcon
        rounded
        color={theme.colors.primary}
        width={"24px"}
        height={"24px"}
        shape={svgIcons.email}
      />
      <SocialIcon
        color={theme.colors.primary}
        width={"24px"}
        height={"24px"}
        shape={svgIcons.gitHub}
      />
      <SocialIcon
        color={theme.colors.primary}
        width={"24px"}
        height={"24px"}
        shape={svgIcons.linkedIn}
      />
    </div>
  );
};

export default Header;
