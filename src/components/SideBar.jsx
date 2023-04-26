import { socialIconsData } from "../assets/data/data";
import { VStack } from "../style/BoxStyle";
import SocialIcon from "./SocialIcon";

const SideBar = () => {
  return (
    <VStack as={"section"}>
      {socialIconsData.map((icon, index) => (
        <SocialIcon width="24px" height="24px" key={index} {...icon} />
      ))}
    </VStack>
  );
};

export default SideBar;
