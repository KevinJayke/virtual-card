import svgIcons from "../assets/svg/svgIcons";
import Photo from "../components/Photo";
import SocialIcon from "../components/SocialIcon";
import myPicture from "../assets/images/myPicture.png";
import { HStack, ToggleBox, VStack } from "../style/BoxStyle";
import Icon from "../assets/svg/Icon";
import { useTheme } from "styled-components";
import { motion } from "framer-motion";

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

const rotateMotion = {
  hover: {
    rotate: 60,
  },
  tap: {
    scale: 0.5,
  },
};

const Header = ({ onToggleTheme }) => {
  const { type } = useTheme();
  return (
    <HStack as={"header"}>
      <motion.div whileHover="hover" whileTap="tap">
        <ToggleBox onClick={onToggleTheme}>
          <motion.div variants={rotateMotion}>
            <Icon
              shape={type === "light" ? svgIcons.sun : svgIcons.moon}
              width={"24px"}
              height={"24px"}
            />
          </motion.div>
        </ToggleBox>
      </motion.div>
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
