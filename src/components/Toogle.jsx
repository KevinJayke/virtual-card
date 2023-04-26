import { useTheme } from "styled-components";
import Icon from "../assets/svg/Icon";
import { ToggleBox } from "../style/BoxStyle";
import { motion } from "framer-motion";
import svgIcons from "../assets/svg/svgIcons";

const rotateMotion = {
  hover: {
    rotate: 60,
  },
  tap: {
    scale: 0.5,
  },
};

const Toogle = ({ onToggleTheme, shape, variant }) => {
  const { type } = useTheme();

  const handleShape = (shapeIcon) => {
    if (shapeIcon === "default")
      return type === "light" ? svgIcons.sun : svgIcons.moon;
    else if (shapeIcon === "heart") return svgIcons.email;
  };

  return (
    <motion.div whileHover="hover" whileTap="tap">
      <ToggleBox variant={variant} onClick={onToggleTheme}>
        <motion.div variants={rotateMotion}>
          <Icon shape={handleShape(shape)} />
        </motion.div>
      </ToggleBox>
    </motion.div>
  );
};

export default Toogle;
