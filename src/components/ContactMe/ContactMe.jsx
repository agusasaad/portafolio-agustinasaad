"use client";
import Link from "next/link";
import styles from "./ContactMe.module.css";
import Copy from "@/assets/icons/Copy";
import { useEffect, useRef } from "react";
import { contactMeAnimation } from "@/utils/animationGsap/AnimationGsap";
import { useTranslation } from "@/Hooks/useTranslations";

const ContactMe = () => {
  const container = useRef(null);
  const subtitleRef = useRef(null);
  const title_paragraph = useRef(null);
  const inputRef = useRef(null);

  //Zustand
  const t = useTranslation();

  useEffect(() => {
    contactMeAnimation({ container, subtitleRef, title_paragraph, inputRef });
  }, []);
  return (
    <div className={styles.container_banner_contact} ref={container}>
      <div className={styles.content}>
        <span className={styles.subtitle} ref={subtitleRef}>
          <div className={styles.circle}></div>
          {t.contactMe.subtitle}
        </span>
        <div className={styles.title_paragraph} ref={title_paragraph}>
          <h2>{t.contactMe.title}</h2>
          <p>{t.contactMe.paragraph}</p>
        </div>
        <div className={styles.input_email} ref={inputRef}>
          <input
            type="text"
            defaultValue={"agusasaad1099@hotmail.com"}
            id="email"
            name="email"
          />
          <button aria-label="copy-paste">
            <Copy />
          </button>
        </div>
      </div>
    </div>
  );
};
export default ContactMe;
