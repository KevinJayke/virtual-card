import Icon from "../assets/svg/Icon";
import { IconBox } from "../style/BoxStyle";

const SocialIcon = ({ url, ...props }) => {
  return (
    <IconBox
      as={"a"}
      target="_blank"
      rel="noopener noreferrer"
      href={url}
      {...props}>
      <Icon {...props} />
    </IconBox>
  );
};

export default SocialIcon;
