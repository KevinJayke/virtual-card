import styled from "styled-components";
import pdf from "../assets/pdf/Dev_Front_KJayat.pdf";
import Icon from "../assets/svg/Icon";
import svgIcons from "../assets/svg/svgIcons";
import { theme } from "../style/Theme";
import { ButtonBox } from "../style/BoxStyle";
import { ButtonText } from "../style/TextStyle";

const Action = () => {
  return (
    <ButtonBox
      as={"a"}
      href={pdf}
      download
      target="_blank"
      rel="noopener noreferrer">
      <Icon
        shape={svgIcons.downLoad}
        width={"24px"}
        height={"24px"}
        color={theme.colors.primary}
      />
      <ButtonText>Download my CV</ButtonText>
    </ButtonBox>
  );
};

export default Action;
