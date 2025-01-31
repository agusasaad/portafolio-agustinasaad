"use client";
import Image from "next/image";
import styles from "./NavBar.module.css";
import user_profile from "@/assets/images/image_profile.jpg";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import Link from "next/link";
import Hamburguer from "@/assets/icons/Hamburguer";

const NavBar = () => {
  const circleRef = useRef(null);
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    gsap.to(circleRef.current, {
      scale: 2.5,
      opacity: 0,
      ease: "power1",
      repeat: -1,
      duration: 1.3,
    });
  }, []);

  return (
    <header className={`${styles.container} ${showMenu ? styles.show : ""}`}>
      <nav className={styles.nav_bar}>
        <div className={styles.avar_user}>
          <Link href={"/"} className={styles.container_image}>
            <Image
              src={user_profile}
              width={50}
              height={50}
              alt="image-profile"
            />
          </Link>
          <div className={styles.text_info}>
            <span>Agustin Asaad</span>
            <div className={styles.content_p}>
              <div className={styles.container_circle}>
                <div className={styles.circle_green}></div>
                <div className={styles.circle_green} ref={circleRef}></div>
              </div>
              <Link
                href={"https://www.linkedin.com/in/agustin-asaad/"}
                target="_blank"
              >
                Available for Work
              </Link>
            </div>
          </div>
        </div>

        <ul className={styles.list}>
          <Link href={"/"}>
            <li>Home</li>
            <li>Home</li>
          </Link>
          <Link href={"/projects"}>
            <li>Projects</li>
            <li>Projects</li>
          </Link>
          <Link href={"/contactme"}>
            <li>Contact Me</li>
            <li>Contact Me</li>
          </Link>
        </ul>

        <div className={styles.hamburguer_menu}>
          <button aria-label="menu" onClick={() => setShowMenu(!showMenu)}>
            <Hamburguer showMenu={showMenu} />
          </button>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
