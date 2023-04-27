import Photo from "../components/Photo";
import myPicture from "../assets/images/myPicture.png";
import { HStack } from "../style/BoxStyle";
import Toogle from "../components/Toogle";
import SideBar from "../components/SideBar";
import { altData } from "../assets/data/data";

const Header = ({ onToggleTheme }) => {
  return (
    <HStack as={"header"}>
      <Toogle shape={"default"} onToggleTheme={onToggleTheme} />
      <Photo alt={altData.photo} src={myPicture} />
      <SideBar />
    </HStack>
  );
};

export default Header;
