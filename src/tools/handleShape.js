import { useTheme } from "styled-components";
import svgIcons from "../assets/svg/svgIcons";

export const handleShape = () => {
  const { type } = useTheme();
  if (type === "konami") {
    return svgIcons.fire;
  } else if (type === "light") {
    return svgIcons.sun;
  } else {
    return svgIcons.moon;
  }
};
