const Icon = ({ width, height, color, shape }) => {
  return (
    <svg
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg">
      <path d={shape} fill={color} />
    </svg>
  );
};

export default Icon;
