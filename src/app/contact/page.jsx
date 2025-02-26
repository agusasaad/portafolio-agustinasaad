"use client";
import { useTranslation } from "@/hooks/useTranslations";
import styles from "./page.module.css";
import { useEffect, useRef, useState } from "react";
import { animateFormContact } from "@/utils/animationGsap/AnimationGsap";
import emailjs from "@emailjs/browser";
import Spinner from "@/assets/icons/Spinner";
import ToastMessage from "@/components/ToastMessage/ToastMessage";

const ContactMePage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const t = useTranslation();
  const subtitleRef = useRef(null);
  const titleRef = useRef(null);
  const formRef = useRef(null);
  const endTextRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    emailjs
      .sendForm("default_service", "template_4luuyes", formRef.current, {
        publicKey: "AvKV6TnFtizcS_CD1",
      })
      .then(() => {
        console.log("SUCCESS!");
        formRef.current.reset();
        setShowToast(true);
      })
      .catch((error) => {
        console.log("FAILED...", error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

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
      <form onSubmit={handleSubmit} className={styles.form} ref={formRef}>
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
        <button type="submit">
          {isLoading ? <Spinner /> : t.formContact.button}
        </button>
      </form>
      <div className={styles.end_text} ref={endTextRef}>
        <p>{t.formContact.thanks} &#128075;</p>
      </div>
      {showToast && (
        <ToastMessage
          message={t.formContact.toast}
          onClose={() => setShowToast(false)}
        />
      )}
    </div>
  );
};

export default ContactMePage;
