"use client";
import Translate from "@/assets/icons/Translate";
import styles from "./ButtonLanguague.module.css";
import Modal from "../Modal/Modal";
import { useEffect, useRef, useState } from "react";
import { useLanguageStore } from "@/app/store";
import SwitchToggle from "../SwitchToggle/SwitchToggle";
import { buttonTranslateAnimate } from "@/utils/animationGsap/AnimationGsap";
import { useTranslation } from "@/hooks/useTranslations";

const ButtonLanguague = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { language } = useLanguageStore();
  const t = useTranslation();
  const buttonTranslateRef = useRef(null);
  const modalRef = useRef(null);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  useEffect(() => {
    buttonTranslateAnimate({ buttonTranslateRef });
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isModalOpen &&
        modalRef.current &&
        !modalRef.current.contains(event.target)
      ) {
        closeModal();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isModalOpen]);

  return (
    <>
      <div
        className={styles.container}
        onClick={openModal}
        ref={buttonTranslateRef}
      >
        <button aria-label="button-translate" className={styles.button}>
          <Translate width="15px" height="15px" />
        </button>
      </div>
      {isModalOpen && (
        <Modal isModalOpen={isModalOpen} onClose={closeModal}>
          <div className={styles.modal} ref={modalRef}>
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
      )}
    </>
  );
};

export default ButtonLanguague;
