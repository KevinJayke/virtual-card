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

const Toogle = ({ onToggleTheme }) => {
  const { type } = useTheme();
  return (
    <motion.div whileHover="hover" whileTap="tap">
      <ToggleBox onClick={onToggleTheme}>
        <motion.div variants={rotateMotion}>
          <Icon shape={type === "light" ? svgIcons.sun : svgIcons.moon} />
        </motion.div>
      </ToggleBox>
    </motion.div>
  );
};

export default Toogle;
