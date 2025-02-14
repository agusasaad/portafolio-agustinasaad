const ArrowOutward = ({
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
    <path d="M16.0037 9.41421L7.39712 18.0208L5.98291 16.6066L14.5895 8H7.00373V6H18.0037V17H16.0037V9.41421Z"></path>
  </svg>
);

export default ArrowOutward;
