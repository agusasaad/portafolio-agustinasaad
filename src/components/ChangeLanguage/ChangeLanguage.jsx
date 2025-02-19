"use client";
import { useLanguageStore } from "@/app/store";
import { useState, forwardRef } from "react";
import SwitchToggle from "../SwitchToggle/SwitchToggle";
import styles from "./ChangeLanguage.module.css";
import { useTranslation } from "@/hooks/useTranslations";

const ChangeLanguage = forwardRef(({ showMenuLanguague }, ref) => {
  // Zustand
  const { toggleLanguage } = useLanguageStore();
  const { language } = useLanguageStore();
  const t = useTranslation();

  return (
    <div
      ref={ref}
      className={`${styles.modal} ${
        showMenuLanguague ? styles.showMenuLanguague : ""
      }`}
    >
      <span>{t.navbar.title_modal}</span>

      <div className={styles.toggle_container}>
        <p
          style={{
            color: language === "en" ? "white" : "var(--paragraph)",
          }}
        >
          English
        </p>
        <SwitchToggle
          id="toggle-en"
          name="en"
          checked={language === "en"}
          onChange={() => language !== "en" && toggleLanguage()}
        />
      </div>

      <div className={styles.toggle_container}>
        <p
          style={{
            color: language === "es" ? "white" : "var(--paragraph)",
          }}
        >
          Español
        </p>
        <SwitchToggle
          id="toggle-es"
          name="es"
          checked={language === "es"}
          onChange={() => language !== "es" && toggleLanguage()}
        />
      </div>
    </div>
  );
});

export default ChangeLanguage;
