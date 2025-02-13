"use client";
import Image from "next/image";
import styles from "./NavBar.module.css";
import user_profile from "@/assets/images/image_profile.jpg";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Hamburguer from "@/assets/icons/Hamburguer";
import Translate from "@/assets/icons/Translate";
import ArrowDown from "@/assets/icons/ArrowDown";
import { navBarAnimation } from "@/utils/animationGsap/AnimationGsap";
import { useTranslation } from "@/Hooks/useTranslations";
import ChangeLanguage from "../ChangeLanguage/ChangeLanguage";
import { useLanguageStore } from "@/app/store";

const NavBar = () => {
  const navBarContainer = useRef(null);
  const circleRef = useRef(null);
  const [showMenu, setShowMenu] = useState(false);
  const [showMenuLanguague, setShowMenuLanguague] = useState(false);

  //Zustand
  const t = useTranslation();
  const { setScaling } = useLanguageStore();

  useEffect(() => {
    navBarAnimation({ navBarContainer, circleRef });
  }, []);

  return (
    <header
      className={`${styles.container} ${showMenu ? styles.show : ""}`}
      ref={navBarContainer}
    >
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
                onMouseEnter={() => setScaling(true)}
                onMouseLeave={() => setScaling(false)}
              >
                {t.navbar.user}
              </Link>
            </div>
          </div>
        </div>

        <ul className={styles.list}>
          <Link
            href={"/"}
            onClick={() => setShowMenu(false)}
            onMouseEnter={() => setScaling(true)}
            onMouseLeave={() => setScaling(false)}
          >
            <li>{t.navbar.home}</li>
          </Link>
          <Link
            href={"/detail/1"}
            onClick={() => setShowMenu(false)}
            onMouseEnter={() => setScaling(true)}
            onMouseLeave={() => setScaling(false)}
          >
            <li>{t.navbar.projects}</li>
          </Link>
          <Link
            href={"/contactme"}
            onClick={() => setShowMenu(false)}
            onMouseEnter={() => setScaling(true)}
            onMouseLeave={() => setScaling(false)}
          >
            <li>{t.navbar.contact}</li>
          </Link>
          <li className={styles.li_button}>
            <button
              aria-label="translate"
              onClick={() => setShowMenuLanguague(!showMenuLanguague)}
              onMouseEnter={() => setScaling(true)}
              onMouseLeave={() => setScaling(false)}
            >
              <Translate />
              <ArrowDown />
            </button>
            <ChangeLanguage
              showMenuLanguague={showMenuLanguague}
              setShowMenuLanguague={setShowMenuLanguague}
            />
          </li>
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
