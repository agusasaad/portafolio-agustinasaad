"use client";
import { useTranslation } from "@/hooks/useTranslations";
import styles from "./page.module.css";
import { useEffect, useRef } from "react";
import { animateFormContact } from "@/utils/animationGsap/AnimationGsap";

const ContactMePage = () => {
  const t = useTranslation();
  const subtitleRef = useRef(null);
  const titleRef = useRef(null);
  const formRef = useRef(null);
  const endTextRef = useRef(null);

  useEffect(() => {
    animateFormContact({ subtitleRef, titleRef, formRef, endTextRef });
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.content_text}>
        <span className={styles.subtitle} ref={subtitleRef}>
          <div className={styles.circle}></div>
          {t.formContact.subtitle}
        </span>
        <h2 ref={titleRef}>{t.formContact.title}</h2>
      </div>
      <form className={styles.form} ref={formRef}>
        <div className={styles.form_group}>
          <input
            type="text"
            id="name"
            name="name"
            placeholder={t.formContact.name}
            required
            autoComplete="off"
          />
          <input
            type="text"
            id="lastname"
            name="lastname"
            required
            placeholder={t.formContact.lastname}
            autoComplete="off"
          />
        </div>
        <div className={styles.form_group}>
          <input
            type="email"
            id="email"
            name="email"
            placeholder={t.formContact.email}
            required
            autoComplete="off"
          />
          <input
            type="tel"
            id="telefono"
            name="telefono"
            placeholder={t.formContact.phone}
            required
            autoComplete="off"
          />
        </div>
        <div className={styles.form_group}>
          <textarea
            id="message"
            name="message"
            placeholder={t.formContact.message}
            required
          ></textarea>
        </div>
        <button type="submit">{t.formContact.button}</button>
      </form>
      <div className={styles.end_text} ref={endTextRef}>
        <p>{t.formContact.thanks} &#128075;</p>
      </div>
    </div>
  );
};

export default ContactMePage;
