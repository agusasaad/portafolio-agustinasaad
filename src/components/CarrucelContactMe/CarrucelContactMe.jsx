import Prisma from "@/assets/icons/Prisma";
import styles from "./CarrucelContactMe.module.css";

const CarrucelContactMe = () => {
  const text = [
    "Contact Me",
    "Contact Me",
    "Contact Me",
    "Contact Me",
    "Contact Me",
  ];
  return (
    <section className={styles.slider}>
      <div className={styles.move}>
        {text.map((word, index) => (
          <div key={index} className={styles.box}>
            <span>{word}</span>
            <Prisma />
          </div>
        ))}
        {text.map((word, index) => (
          <div key={index} className={styles.box}>
            <span>{word}</span>
            <Prisma />
          </div>
        ))}
      </div>
    </section>
  );
};

export default CarrucelContactMe;
