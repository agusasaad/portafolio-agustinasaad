import { getProjects } from "@/utils/info/Info";
import styles from "./CarrucelMobile.module.css";
import Link from "next/link";
import Image from "next/image";
import { forwardRef } from "react";

const CarrucelMobile = forwardRef((props, ref) => {
  const projects = getProjects();

  return (
    <div className={styles.slider}>
      <div className={styles.move}>
        {projects.map((project, index) => (
          <Link
            href={`/detail/${project.id}`}
            key={index}
            className={styles.card}
            ref={(el) => (ref.current[index] = el)}
          >
            <div className={styles.content_image}>
              <Image
                src={project.imageCard}
                width={500}
                height={500}
                alt={project.name}
              />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
});

export default CarrucelMobile;
