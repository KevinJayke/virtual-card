import { Path } from "../../style/BoxStyle";

const Icon = ({ width, height, shape }) => {
  return (
    <svg
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg">
      <Path d={shape} />
    </svg>
  );
};

export default Icon;
