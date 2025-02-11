"use client";
import Translate from "@/assets/icons/Translate";
import styles from "./ButtonLanguague.module.css";
import Modal from "../Modal/Modal";
import ChangeLanguage from "../ChangeLanguage/ChangeLanguage";
import { useState } from "react";
import { useLanguageStore } from "@/app/store";
import { useTranslation } from "@/Hooks/useTranslations";
import SwitchToggle from "../SwitchToggle/SwitchToggle";

const ButtonLanguague = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { language } = useLanguageStore();
  const t = useTranslation();
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  return (
    <>
      <div className={styles.container} onClick={openModal}>
        <button aria-label="button-translate" className={styles.button}>
          <Translate width="15px" height="15px" />
        </button>
      </div>
      <Modal isModalOpen={isModalOpen} onClose={closeModal}>
        <div className={styles.modal}>
          <span>
            {t.navbar.title_modal}{" "}
            <button className={styles.closeButton} onClick={closeModal}>
              &times;
            </button>
          </span>

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
      </Modal>
    </>
  );
};

export default ButtonLanguague;
