"use client";
import GitHub from "@/assets/icons/GitHub";
import CarrucelProject from "./CarrucelProject/CarrucelProject";
import styles from "./MyProjects.module.css";
import { useEffect, useRef } from "react";
import { projectAnimation } from "@/utils/animationGsap/AnimationGsap";
import { useTranslation } from "@/hooks/useTranslations";
import CarrucelMobile from "./CarrucelMobile/CarrucelMobile";
import { useLanguageStore } from "@/app/store";
import Link from "next/link";

const MyProjects = () => {
  const t = useTranslation();
  const { scaling, setScaling } = useLanguageStore();

  const container = useRef(null);
  const title = useRef(null);
  const cardsRef = useRef([]);
  const cardMobileRef = useRef([]);
  const github = useRef(null);

  useEffect(() => {
    projectAnimation({
      container,
      title,
      cardsRef,
      cardMobileRef,
      github,
    });
  }, []);
  return (
    <section className={styles.container} ref={container}>
      <div className={styles.content_title} ref={title}>
        <span className={styles.subtitle}>
          <div className={styles.circle}></div>
          {t.projects.subtitle}
        </span>
        <h2>{t.projects.title}</h2>
      </div>
      <CarrucelProject ref={cardsRef} />
      <CarrucelMobile ref={cardMobileRef} />
      <div className={styles.visit_git_content} ref={github} id="contactme">
        <p>{t.projects.paragraph_git_hub_1}</p>
        <p>{t.projects.paragraph_git_hub_2}</p>
        <Link
          href={"https://github.com/agusasaad?tab=repositories"}
          target="_blank"
          className={styles.link_git_hub}
          onMouseEnter={() => setScaling(true)}
          onMouseLeave={() => setScaling(false)}
        >
          {t.projects.button}
          <i>
            <GitHub />
          </i>
        </Link>
      </div>
    </section>
  );
};

export default MyProjects;
