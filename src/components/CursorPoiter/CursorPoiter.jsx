"use client";
import { useEffect, useState } from "react";
import styles from "./CursorPoiter.module.css";

const CursorPoiter = () => {
  const [circle, setCircle] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const mousemove = (e) => {
      setCircle({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", mousemove);
    return () => {
      window.removeEventListener("mousemove", mousemove);
    };
  }, []);

  return (
    <div
      className={styles.mover}
      style={{
        transform: `translate(${circle.x}px, ${circle.y}px)`,
      }}
    ></div>
  );
};

export default CursorPoiter;
