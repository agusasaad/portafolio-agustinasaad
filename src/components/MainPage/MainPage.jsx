"use client";
import { useEffect, useRef } from "react";
import TechnologiesCarrucel from "../TechnologiesCarrucel/TechnologiesCarrucel";
import styles from "./MainPage.module.css";
import { mainPageAnimation } from "@/utils/animationGsap/AnimationGsap";
import { useTranslation } from "@/Hooks/useTranslations";
import localFont from "next/font/local";

const AvenirNextBold = localFont({
  src: "../../fonts/AvenirNext-Bold.woff",
  variable: "--AvenirNext-Bold",
});

const MainPage = () => {
  const t = useTranslation();
  const subtitleRef = useRef(null);
  const titleRef = useRef(null);
  const description = useRef(null);
  const carrucel = useRef(null);

  useEffect(() => {
    mainPageAnimation({ subtitleRef, titleRef, description, carrucel });
  }, []);

  return (
    <section className={styles.container}>
      <div className={styles.content_text}>
        <span ref={subtitleRef}> {t.mainPage.subtitle} &#128075;</span>
        <div className={styles.content_title} ref={titleRef}>
          <h1 className={AvenirNextBold.className}>FrontEnd</h1>
          <h2 className={AvenirNextBold.className}>Developer.</h2>
        </div>
        <p ref={description}>{t.mainPage.paragraph}</p>
      </div>
      <TechnologiesCarrucel ref={carrucel} />
    </section>
  );
};

export default MainPage;
