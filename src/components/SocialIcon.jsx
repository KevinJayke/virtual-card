import Icon from "../assets/svg/Icon";
import { IconBox } from "../style/BoxStyle";
import { motion } from "framer-motion";

const SocialIcon = ({ url, ...props }) => {
  return (
    <motion.div
      whileHover={{
        x: 10,
      }}
      whileTap={{ scale: 0.9, x: 0 }}>
      <IconBox
        as={"a"}
        target="_blank"
        rel="noopener noreferrer"
        href={url}
        {...props}>
        <Icon {...props} />
      </IconBox>
    </motion.div>
  );
};

export default SocialIcon;
