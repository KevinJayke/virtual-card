import Icon from "../assets/svg/Icon";
import { ToggleBox } from "../style/BoxStyle";
import { motion } from "framer-motion";
import { handleShape } from "../tools/handleShape";
import { rotateMotion } from "../assets/data/motion";

const Toogle = ({ onToggleTheme }) => {
  return (
    <motion.div whileHover="hover" whileTap="tap">
      <ToggleBox onClick={onToggleTheme}>
        <motion.div variants={rotateMotion}>
          <Icon shape={handleShape()} />
        </motion.div>
      </ToggleBox>
    </motion.div>
  );
};

export default Toogle;
