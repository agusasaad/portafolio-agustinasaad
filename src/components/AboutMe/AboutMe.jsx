import SpiningText from "../SpiningText/SpiningText";
import styles from "./AboutMe.module.css";

const AboutMe = () => {
  return (
    <section className={styles.container}>
      <SpiningText />
      <h2>About Me</h2>
      <div className={styles.paragraph_content}>
        <p>Hi there, I&apos;m Agustin – a Front End developer.</p>
        <p>
          I'm passionate about creating web applications that are easy to use
          and enhance the user experience. Every challenge is an opportunity to
          learn and bring creative solutions.
        </p>
        <p>
          I&apos;m always looking to improve my skills and add value to every
          project. I&apos;m motivated to work in teams, learn, and contribute to
          collective success.
        </p>
      </div>
      <div className={styles.button_container}>
        <button>Curriculum Vitae</button>
      </div>
    </section>
  );
};

export default AboutMe;
