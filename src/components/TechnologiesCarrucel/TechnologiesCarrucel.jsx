import { icons } from "./Technologies_icon";
import styles from "./TechnologiesCarrucel.module.css";

const TechnologiesCarrucel = () => {
  return (
    <div className={styles.slider}>
      <div className={styles.move}>
        {icons.map((icon, index) => (
          <i className={styles.box} key={index}>
            {icon}
          </i>
        ))}
        {icons.map((icon, index) => (
          <i className={styles.box} key={index}>
            {icon}
          </i>
        ))}
      </div>
    </div>
  );
};

export default TechnologiesCarrucel;
