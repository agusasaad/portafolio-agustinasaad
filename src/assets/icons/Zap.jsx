const Zap = ({
  width = "24",
  height = "24",
  color = "white",
  className = "",
}) => (
  <svg
    stroke={color}
    fill={color}
    strokeWidth="0"
    viewBox="0 0 16 16"
    height={height}
    width={width}
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path d="M11.251.068a.5.5 0 0 1 .227.58L9.677 6.5H13a.5.5 0 0 1 .364.843l-8 8.5a.5.5 0 0 1-.842-.49L6.323 9.5H3a.5.5 0 0 1-.364-.843l8-8.5a.5.5 0 0 1 .615-.09z"></path>
  </svg>
);

export default Zap;
