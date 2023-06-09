import pdf from "../assets/pdf/Dev_Front_KJayat.pdf";
import Icon from "../assets/svg/Icon";
import svgIcons from "../assets/svg/svgIcons";
import { ButtonBox } from "../style/BoxStyle";
import { ButtonText } from "../style/TextStyle";
import { motion } from "framer-motion";

const Button = () => {
  return (
    <motion.div whileHover={{ marginTop: "1rem" }} whileTap={{ scale: 0.9 }}>
      <ButtonBox
        as={"a"}
        href={pdf}
        download
        target="_blank"
        rel="noopener noreferrer">
        <Icon shape={svgIcons.downLoad} />
        <ButtonText>Téléchargez mon CV</ButtonText>
      </ButtonBox>
    </motion.div>
  );
};

export default Button;
