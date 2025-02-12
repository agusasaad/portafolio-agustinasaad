"use client";
import { useEffect, useRef } from "react";
import styles from "./CursorPoiter.module.css";
import { useLanguageStore } from "@/app/store";

const CursorPoiter = () => {
  const { scaling, setScaling } = useLanguageStore();
  const cursorRef = useRef(null);
  const position = useRef({ x: 0, y: 0 });
  const targetPosition = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (e) => {
      targetPosition.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener("mousemove", updateMousePosition);

    const moveCursor = () => {
      position.current.x +=
        (targetPosition.current.x - position.current.x) * 0.1;
      position.current.y +=
        (targetPosition.current.y - position.current.y) * 0.1;

      if (cursorRef.current) {
        cursorRef.current.style.left = `${position.current.x}px`;
        cursorRef.current.style.top = `${position.current.y}px`;
      }

      requestAnimationFrame(moveCursor);
    };

    moveCursor();

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className={styles.mover}
      style={{
        transform: `translate(-50%, -50%) scale(${scaling ? 4 : 1})`,
        mixBlendMode: scaling ? "difference" : "normal", // Aquí cambiamos el color solo si scaling es verdadero
      }}
    ></div>
  );
};

export default CursorPoiter;
