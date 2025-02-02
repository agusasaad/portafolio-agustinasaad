import GitHub from "@/assets/icons/GitHub";
import CarrucelProject from "./CarrucelProject/CarrucelProject";
import styles from "./MyProjects.module.css";

const MyProjects = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content_title}>
        <span>Projects</span>
        <h2>Select work</h2>
      </div>
      <CarrucelProject />
      <div className={styles.visit_git_content}>
        <p>Thanks for exploring my works!</p>
        <p>Check out more on my GitHub.</p>
        <button>
          Visit Github
          <i>
            <GitHub />
          </i>
        </button>
      </div>
    </section>
  );
};

export default MyProjects;
