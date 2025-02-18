"use client";
import { useEffect, useRef } from "react";
import styles from "./CursorPoiter.module.css";
import { useLanguageStore } from "@/app/store";
import { useTranslation } from "@/Hooks/useTranslations";
import Copy from "@/assets/icons/Copy";
import ArrowOutward from "@/assets/icons/ArrowOutward";

const CursorPoiter = () => {
  const { scaling, viewProject, viewCopy } = useLanguageStore();
  const t = useTranslation();

  const cursorRef = useRef(null);
  const position = useRef({ x: 0, y: 0 });
  const targetPosition = useRef({ x: 0, y: 0 });

  useEffect(() => {
    document.body.style.cursor = "none";

    const updateMousePosition = (e) => {
      targetPosition.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener("mousemove", updateMousePosition);

    const moveCursor = () => {
      position.current.x +=
        (targetPosition.current.x - position.current.x) * 0.5;
      position.current.y +=
        (targetPosition.current.y - position.current.y) * 0.5;

      if (cursorRef.current) {
        cursorRef.current.style.left = `${position.current.x}px`;
        cursorRef.current.style.top = `${position.current.y}px`;
      }

      requestAnimationFrame(moveCursor);
    };

    moveCursor();

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      document.body.style.cursor = "default";
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className={`${styles.mover} ${viewProject ? styles.cardHover : ""} ${
        viewCopy ? styles.copyHover : ""
      }`}
      style={{
        transform: `translate(-50%, -50%) scale(${
          viewProject ? 1.09 : viewCopy ? 0.8 : scaling ? 4.5 : 1
        })`,
        mixBlendMode: viewProject
          ? "normal"
          : scaling
          ? "difference"
          : "normal",

        transition: scaling
          ? "all 0.1s ease-out"
          : viewProject
          ? "all 0.1s ease-out"
          : "",
      }}
    >
      {viewProject && <ArrowOutward width="30px" height="30px" />}
      {viewCopy && (
        <span>
          <Copy width="18px" height="18px" color="white" />
        </span>
      )}
    </div>
  );
};

export default CursorPoiter;
