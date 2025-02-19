"use client";
import { useEffect, useRef } from "react";
import styles from "./ToastMessage.module.css";
import { createPortal } from "react-dom";
import gsap from "gsap";
import Check from "@/assets/icons/Check";

const ToastMessage = ({ onClose, message }) => {
  const toastRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      toastRef.current,
      { opacity: 0, y: "100%" },
      {
        opacity: 1,
        y: "0%",
        duration: 0.5,
        ease: "power3.out",
      }
    );

    const timer = setTimeout(() => {
      gsap.to(toastRef.current, {
        opacity: 0,
        y: "100%",
        duration: 0.5,
        ease: "power3.in",
        onComplete: onClose,
      });
    }, 1000);

    return () => clearTimeout(timer);
  }, [onClose]);

  return createPortal(
    <div className={styles.toast} ref={toastRef}>
      <Check width="20px" height="20px" color="#10b981" />
      {message}
    </div>,
    document.body
  );
};

export default ToastMessage;
