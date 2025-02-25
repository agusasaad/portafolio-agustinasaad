"use client";
import { useTranslation } from "@/hooks/useTranslations";
import styles from "./page.module.css";

const ContactMePage = () => {
  const t = useTranslation();

  return (
    <div className={styles.container}>
      <div className={styles.content_text}>
        <span className={styles.subtitle}>
          <div className={styles.circle}></div>
          {t.formContact.subtitle}
        </span>
        <h2>{t.formContact.title}</h2>
      </div>
      <form className={styles.form}>
        <div className={styles.form_group}>
          <input
            type="text"
            id="name"
            name="name"
            placeholder={t.formContact.name}
            required
          />
          <input
            type="text"
            id="lastname"
            name="lastname"
            required
            placeholder={t.formContact.lastname}
          />
        </div>
        <div className={styles.form_group}>
          <input
            type="email"
            id="email"
            name="email"
            placeholder={t.formContact.email}
            required
          />
          <input
            type="tel"
            id="telefono"
            name="telefono"
            placeholder={t.formContact.phone}
            required
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
      <div className={styles.end_text}>
        <p>{t.formContact.thanks} &#128075;</p>
      </div>
    </div>
  );
};

export default ContactMePage;
