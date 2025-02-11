"use client";
import { useEffect, useRef } from "react";
import SpiningText from "../SpiningText/SpiningText";
import styles from "./AboutMe.module.css";
import { aboutMeAnimation } from "@/utils/animationGsap/AnimationGsap";
import { useTranslation } from "@/Hooks/useTranslations";

const AboutMe = () => {
  const container = useRef(null);
  const imageProfile = useRef(null);
  const title = useRef(null);
  const paragraph = useRef(null);
  const button = useRef(null);

  //Zustand
  const t = useTranslation();

  useEffect(() => {
    aboutMeAnimation({ container, imageProfile, title, paragraph, button });
  }, []);

  return (
    <section className={styles.container} ref={container}>
      <SpiningText ref={imageProfile} />
      <h2 ref={title}>{t.aboutMe.title}</h2>
      <div className={styles.paragraph_content} ref={paragraph}>
        <p>{t.aboutMe.paragraph_1}</p>
        <p>{t.aboutMe.paragraph_2}</p>
        <p>{t.aboutMe.paragraph_3}</p>
      </div>
      <div className={styles.button_container} ref={button}>
        <button>Curriculum Vitae</button>
      </div>
    </section>
  );
};

export default AboutMe;
