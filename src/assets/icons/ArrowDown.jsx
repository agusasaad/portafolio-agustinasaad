const ArrowDown = ({
  width = "24",
  height = "24",
  color = "white",
  className = "",
}) => (
  <svg
    stroke={color}
    fill={color}
    strokeWidth="0"
    viewBox="0 0 24 24"
    height={height}
    width={width}
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path fill="none" d="M0 0h24v24H0z"></path>
    <path d="m7 10 5 5 5-5z"></path>
  </svg>
);

export default ArrowDown;
