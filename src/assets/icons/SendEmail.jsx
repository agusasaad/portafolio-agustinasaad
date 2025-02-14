import styles from "@/components/ContactMe/ContactMe.module.css";
const SendEmail = ({
  width = "18px",
  height = "18px",
  color = "var(--paragraph)",
}) => (
  <svg
    stroke={color}
    fill={color}
    strokeWidth="0"
    role="img"
    viewBox="0 0 24 24"
    height={height}
    width={width}
    xmlns="http://www.w3.org/2000/svg"
    className={styles.icon}
  >
    <path d="M17.187 19.181L24 4.755 0 12.386l9.196 1.963.043 4.896 2.759-2.617-2.147-2.076 7.336 4.63z"></path>
  </svg>
);

export default SendEmail;
