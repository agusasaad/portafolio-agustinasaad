"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import styles from "./CursorPoiter.module.css";
import { useLanguageStore } from "@/app/store";
import Copy from "@/assets/icons/Copy";
import ArrowOutward from "@/assets/icons/ArrowOutward";
import { useTranslation } from "@/hooks/useTranslations";

const CursorPoiter = () => {
  const { scaling, viewProject, viewCopy } = useLanguageStore();
  const t = useTranslation();

  const cursorRef = useRef(null);

  useEffect(() => {
    document.body.style.cursor = "none";

    const updateMousePosition = (e) => {
      gsap.to(cursorRef.current, {
        x: e.clientX,
        y: e.clientY,
        duration: 0,
        ease: "power3.out",
      });
    };

    window.addEventListener("mousemove", updateMousePosition);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      document.body.style.cursor = "default";
    };
  }, []);

  useEffect(() => {
    gsap.to(cursorRef.current, {
      scale: scaling ? 4.5 : 1,
      width: viewProject ? 70 : viewCopy ? 55 : 13,
      height: viewProject ? 70 : viewCopy ? 55 : 13,
      background: viewProject || viewCopy ? "rgba(20, 20, 20, 0.577)" : "white",
      backdropFilter: viewProject || viewCopy ? "blur(3px)" : "none",
      border: viewProject || viewCopy ? "1px solid rgb(78, 78, 78)" : "none",
      mixBlendMode: viewProject ? "normal" : scaling ? "difference" : "normal",
      duration: 0.3,
      ease: "power3.out",
    });
  }, [viewProject, viewCopy, scaling]);
  return (
    <div
      ref={cursorRef}
      className={`${styles.mover} ${viewProject ? styles.cardHover : ""} ${
        viewCopy ? styles.copyHover : ""
      }`}
    >
      {viewProject && <ArrowOutward width="25px" height="25px" />}
      {viewCopy && (
        <span>
          <Copy width="13px" height="13px" color="white" />
        </span>
      )}
    </div>
  );
};

export default CursorPoiter;
