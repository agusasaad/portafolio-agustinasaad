"use client";
import Link from "next/link";
import styles from "./ContactMe.module.css";
import SendEmail from "@/assets/icons/SendEmail";
import { useEffect, useRef, useState } from "react";
import { contactMeAnimation } from "@/utils/animationGsap/AnimationGsap";
import { useTranslation } from "@/Hooks/useTranslations";
import ToastMessage from "../ToastMessage/ToastMessage";
import { useLanguageStore } from "@/app/store";

const ContactMe = () => {
  const container = useRef(null);
  const subtitleRef = useRef(null);
  const title_paragraph = useRef(null);
  const inputRef = useRef(null);

  const [showToast, setShowToast] = useState(false);
  //Zustand
  const t = useTranslation();
  const { setViewCopy } = useLanguageStore();
  console.log(showToast);

  const email = "agusasaad1099@hotmail.com";

  useEffect(() => {
    contactMeAnimation({ container, subtitleRef, title_paragraph, inputRef });
  }, []);

  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText(email).then(() => {
      setShowToast(true);
    });
  };

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
            value={email}
            id="email"
            name="email"
            readOnly
            onMouseEnter={() => setViewCopy(true)}
            onMouseLeave={() => setViewCopy(false)}
            onClick={handleCopyToClipboard}
          />
          <Link href={`mailto:${email}`} target="_blank">
            <SendEmail />
          </Link>
        </div>
      </div>
      {showToast && <ToastMessage onClose={() => setShowToast(false)} />}
    </div>
  );
};

export default ContactMe;
