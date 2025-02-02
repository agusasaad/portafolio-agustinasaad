import { projects } from "@/utils/Info";
import styles from "./CarrucelProject.module.css";
import Image from "next/image";

const CarrucelProject = () => {
  return (
    <div className={styles.slider}>
      <div className={styles.move}>
        {projects.map((project, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.content_image}>
              <Image
                src={project.imageCard}
                width={500}
                height={500}
                style={{ objectFit: "cover", objectPosition: "center" }}
                alt={project.name}
              />
            </div>
          </div>
        ))}
        {projects.map((project, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.content_image}>
              <Image
                src={project.imageCard}
                width={500}
                height={500}
                style={{ objectFit: "cover", objectPosition: "center" }}
                alt={project.name}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CarrucelProject;
