import { theme } from "../style/Theme";
import svgIcons from "../assets/svg/svgIcons";
import Photo from "../components/Photo";
import SocialIcon from "../components/SocialIcon";
import myPicture from "../assets/images/myPicture.png";
import { HStack, VStack } from "../style/BoxStyle";

const socialIconsData = [
  {
    href: "mailto:kevin.jayat@gmail.com?subject=Hello%20Kevin",
    shape: svgIcons.email,
    rounded: true,
  },
  {
    href: "https://github.com/KevinJayke",
    shape: svgIcons.gitHub,
    marginTop: true,
  },
  {
    href: "https://www.linkedin.com/in/k%C3%A9vin-jayat-952b56207/",
    shape: svgIcons.linkedIn,
    marginTop: true,
  },
];

const Header = () => {
  return (
    <HStack as={"header"}>
      <Photo
        alt={
          "A man with a smile, a mustache and glasses, standing in front of the camera"
        }
        src={myPicture}
      />
      <VStack as={"section"}>
        {socialIconsData.map((icon, index) => (
          <SocialIcon width="24px" height="24px" key={index} {...icon} />
        ))}
      </VStack>
    </HStack>
  );
};

export default Header;
