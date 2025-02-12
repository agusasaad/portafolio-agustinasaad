"use client";
import { useParams, useRouter } from "next/navigation";
import styles from "./page.module.css";
import { getProjects } from "@/utils/info/Info";
import Image from "next/image";
import GitHub from "@/assets/icons/GitHub";
import Url from "@/assets/icons/Url";
import Link from "next/link";
import { useTranslation } from "@/Hooks/useTranslations";
import Back from "@/assets/icons/Back";
import Next from "@/assets/icons/Next";

const DetailPage = () => {
  const { id } = useParams();
  const findProject = getProjects().find((item) => item.id === Number(id));

  const t = useTranslation();

  const router = useRouter();

  const handleBack = () => {
    Number(id) === 1
      ? router.push("/detail/6")
      : router.push(`/detail/${Number(id) - 1}`);
  };

  const handleNext = () => {
    Number(id) === 6
      ? router.push("/detail/1")
      : router.push(`/detail/${Number(id) + 1}`);
  };

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
          <span>{t.detail_projects.title_1}</span>
          <p>{findProject.paragraph_2}</p>
        </div>
        <div className={styles.technologies}>
          <span>{t.detail_projects.title_2}</span>
          <div className={styles.text_and_buttons}>
            <p>{findProject.technologies}</p>
            <div className={styles.container_button}>
              <Link href={findProject.repository} target="_blank">
                <GitHub color="white" width="20px" height="20px" />
                {t.detail_projects.button_1}
              </Link>
              {findProject?.web && (
                <Link href={findProject.web} target="_blank">
                  <Url color="white" width="20px" height="20px" />
                  Web
                </Link>
              )}
            </div>
          </div>
        </div>
        <Image
          src={findProject.img}
          alt={`Image ${findProject.name}`}
          width={1200}
          height={500}
        />
        <div className={styles.container_button_page}>
          <button aria-label="button-back" onClick={handleBack}>
            <Back />
            {t.detail_projects.back}
          </button>
          <button aria-label="button-next" onClick={handleNext}>
            {t.detail_projects.next}
            <Next />
          </button>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
