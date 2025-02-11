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
import SwitchToggle from "../SwitchToggle/SwitchToggle";
import { useLanguageStore } from "@/app/store";
import { useTranslation } from "@/Hooks/useTranslations";
import ChangeLanguage from "../ChangeLanguage/ChangeLanguage";

const NavBar = () => {
  const navBarContainer = useRef(null);
  const circleRef = useRef(null);
  const [showMenu, setShowMenu] = useState(false);
  const [showMenuLanguague, setShowMenuLanguague] = useState(false);

  const t = useTranslation();

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
              >
                {t.navbar.user}
              </Link>
            </div>
          </div>
        </div>

        <ul className={styles.list}>
          <Link href={"/"}>
            <li>{t.navbar.home}</li>
            <li>{t.navbar.home}</li>
          </Link>
          <Link href={"/projects"}>
            <li>{t.navbar.projects}</li>
            <li>{t.navbar.projects}</li>
          </Link>
          <Link href={"/contactme"}>
            <li>{t.navbar.contact}</li>
            <li>{t.navbar.contact}</li>
          </Link>
          <li className={styles.li_button}>
            <button
              aria-label="translate"
              onClick={() => setShowMenuLanguague(!showMenuLanguague)}
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
