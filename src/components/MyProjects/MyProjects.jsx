"use client";
import GitHub from "@/assets/icons/GitHub";
import CarrucelProject from "./CarrucelProject/CarrucelProject";
import styles from "./MyProjects.module.css";
import { useEffect, useRef } from "react";
import { projectAnimation } from "@/utils/animationGsap/AnimationGsap";
import { useTranslation } from "@/Hooks/useTranslations";
import CarrucelMobile from "./CarrucelMobile/CarrucelMobile";

const MyProjects = () => {
  const t = useTranslation();

  const container = useRef(null);
  const title = useRef(null);
  const cardsRef = useRef([]);
  const cardMobileRef = useRef([]);
  const circleRef = useRef(null);

  useEffect(() => {
    projectAnimation({
      container,
      title,
      cardsRef,
      cardMobileRef,
      circleRef,
    });
  }, []);
  return (
    <section className={styles.container} ref={container}>
      <div className={styles.content_title} ref={title}>
        <span className={styles.subtitle}>
          <div className={styles.container_circle}>
            <div className={styles.circle_green}></div>
            <div className={styles.circle_green} ref={circleRef}></div>
          </div>
          {t.projects.subtitle}
        </span>
        <h2>{t.projects.title}</h2>
      </div>
      <CarrucelProject ref={cardsRef} />
      <CarrucelMobile ref={cardMobileRef} />
      <div className={styles.visit_git_content}>
        <p>{t.projects.paragraph_git_hub_1}</p>
        <p>{t.projects.paragraph_git_hub_2}</p>
        <button>
          {t.projects.button}
          <i>
            <GitHub />
          </i>
        </button>
      </div>
    </section>
  );
};

export default MyProjects;
