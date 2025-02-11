"use client";
import { useParams } from "next/navigation";
import styles from "./page.module.css";
import { getProjects } from "@/utils/info/Info";
import Image from "next/image";
import GitHub from "@/assets/icons/GitHub";
import Url from "@/assets/icons/Url";
import Link from "next/link";

const DetailPage = () => {
  const { id } = useParams();
  const findProject = getProjects().find((item) => item.id === Number(id));
  console.log(findProject);

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.cargo_and_date}>
          <span>{findProject.cargo}</span>
          <p>{findProject.date}</p>
        </div>
        <h2>{findProject.name}</h2>
        <p>{findProject.paragraph_1}</p>
        <Image
          alt={`Image ${findProject.name}`}
          src={findProject.imageModal}
          width={1200}
          height={500}
        />
        <div className={styles.responsibilities}>
          <span>Responsibilities</span>
          <p>{findProject.paragraph_2}</p>
        </div>
        <div className={styles.technologies}>
          <span>Technologies</span>
          <div className={styles.text_and_buttons}>
            <p>{findProject.technologies}</p>
            <div className={styles.container_button}>
              <Link href={findProject.repository} target="_blank">
                <GitHub color="white" width="20px" height="20px" />
                Repository
              </Link>
              <Link href={findProject.repository} target="_blank">
                <Url color="white" width="20px" height="20px" />
                Web
              </Link>
            </div>
          </div>
        </div>
        <Image
          src={findProject.img}
          alt={`Image ${findProject.name}`}
          width={1200}
          height={500}
        />
      </div>
    </div>
  );
};

export default DetailPage;
