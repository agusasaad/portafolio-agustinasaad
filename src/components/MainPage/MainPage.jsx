import TechnologiesCarrucel from "../TechnologiesCarrucel/TechnologiesCarrucel";
import styles from "./MainPage.module.css";

const MainPage = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content_text}>
        <span> Hello I&apos;m Agustin &#128075;</span>
        <div className={styles.content_title}>
          <h1>FrontEnd</h1>
          <h2>Developer.</h2>
        </div>
        <p>
          Web Developer from Córdoba, Argentina. I specialize in Front end
          development, with experience in creating efficient and visually
          attractive user interfaces.
        </p>
      </div>
      <TechnologiesCarrucel />
    </section>
  );
};

export default MainPage;
