import { forwardRef } from "react";
import { getProjects } from "@/utils/info/Info"; // Importa la función getProjects
import styles from "./CarrucelProject.module.css";
import Image from "next/image";
import Link from "next/link";

const CarrucelProject = forwardRef((props, ref) => {
  const projects = getProjects();
  const copyProject = [...projects, ...projects];

  return (
    <div className={styles.slider}>
      <div className={styles.move}>
        {copyProject.map((project, index) => (
          <Link
            href={`/detail/${project.id}`}
            key={index}
            className={styles.card}
            ref={(el) => (ref.current[index] = el)}
          >
            <div className={styles.content_image}>
              <Image
                src={project.imageCard}
                width={700}
                height={700}
                alt={project.name}
                quality={100}
                priority={true}
              />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
});

export default CarrucelProject;
