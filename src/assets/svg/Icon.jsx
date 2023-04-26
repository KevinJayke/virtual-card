import { IconSize, Path } from "../../style/BoxStyle";

const Icon = ({ shape }) => {
  return (
    <IconSize>
      <svg
        preserveAspectRatio="xMinYMin meet"
        fill="none"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg">
        <Path d={shape} />
      </svg>
    </IconSize>
  );
};

export default Icon;
