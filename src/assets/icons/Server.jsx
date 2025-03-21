const Server = ({
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
    <path d="M20 3H4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zM4 9V5h16v4zm16 4H4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2zM4 19v-4h16v4z"></path>
    <path d="M17 6h2v2h-2zm-3 0h2v2h-2zm3 10h2v2h-2zm-3 0h2v2h-2z"></path>
  </svg>
);

export default Server;
