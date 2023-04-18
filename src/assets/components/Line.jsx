const Line = ({ color, shape }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="43"
      height="2"
      fill="none"
      viewBox="0 0 43 2">
      <path stroke={color} strokeWidth="2" d={shape}></path>
    </svg>
  );
};

export default Line;
