"use client";
import styles from "./Footer.module.css";
import Link from "next/link";
import Image from "next/image";
import user_image from "@/assets/images/user_footer.png";
import { useTranslation } from "@/Hooks/useTranslations";
import ArrowOutward from "@/assets/icons/ArrowOutward";
import { useLanguageStore } from "@/app/store";
import { useEffect, useRef } from "react";
import { footerAnimation } from "@/utils/animationGsap/AnimationGsap";

const Footer = () => {
  //Zustand
  const t = useTranslation();
  const { setScaling } = useLanguageStore();

  //Ref
  const container = useRef(null);
  const user = useRef(null);
  const paragraph = useRef(null);
  const list_one = useRef(null);
  const list_two = useRef(null);
  const line = useRef(null);
  const copyrigth_one = useRef(null);
  const copyrigth_two = useRef(null);
  const copyrigth_three = useRef(null);

  useEffect(() => {
    footerAnimation({
      container,
      user,
      paragraph,
      list_one,
      list_two,
      line,
      copyrigth_one,
      copyrigth_two,
      copyrigth_three,
    });
  }, []);

  return (
    <footer className={styles.container} ref={container}>
      <div className={styles.content}>
        <div className={styles.info_me}>
          <div className={styles.avatar} ref={user}>
            <Image
              src={user_image}
              width={30}
              height={30}
              alt="image_user"
              quality={100}
            />
            <span>Agustín Asaad</span>
          </div>
          <div className={styles.paragraph_container} ref={paragraph}>
            <p>{t.footer.paragraph}</p>
            <Link
              href="mailto:agusasaad1099@hotmail.com"
              className={styles.link_mail}
              onMouseEnter={() => setScaling(true)}
              onMouseLeave={() => setScaling(false)}
            >
              agusasaad1099@hotmail.com{" "}
              <ArrowOutward color="#999999" width="18px" height="18px" />
            </Link>
          </div>
        </div>
        <div className={styles.content_list}>
          <ul className={styles.navigate} ref={list_one}>
            <Link
              href={"/home"}
              onMouseEnter={() => setScaling(true)}
              onMouseLeave={() => setScaling(false)}
            >
              <li>{t.navbar.home}</li>
            </Link>
            <Link
              href={"/detail/1"}
              onMouseEnter={() => setScaling(true)}
              onMouseLeave={() => setScaling(false)}
            >
              <li>{t.navbar.projects}</li>
            </Link>
            <Link
              href={"/contactme"}
              onMouseEnter={() => setScaling(true)}
              onMouseLeave={() => setScaling(false)}
            >
              <li>{t.navbar.contact}</li>
            </Link>
          </ul>
          <ul className={styles.navigate} ref={list_two}>
            <Link
              href={"https://www.linkedin.com/in/agustin-asaad/"}
              target="_blank"
              onMouseEnter={() => setScaling(true)}
              onMouseLeave={() => setScaling(false)}
            >
              <li>Linkedin</li>
            </Link>
            <Link
              href={"https://github.com/agusasaad?tab=repositories"}
              target="_blank"
              onMouseEnter={() => setScaling(true)}
              onMouseLeave={() => setScaling(false)}
            >
              <li>GitHub</li>
            </Link>
            <Link
              href="mailto:agustinasaad@gmail.com"
              onMouseEnter={() => setScaling(true)}
              onMouseLeave={() => setScaling(false)}
            >
              <li>Gmail</li>
            </Link>
          </ul>
        </div>
      </div>
      <div className={styles.line} ref={line}></div>
      <div className={styles.copyright}>
        <p ref={copyrigth_one}>
          © {new Date().getFullYear() || 2025} {t.footer.copyrigth_1}
        </p>
        <div className={styles.other_texts}>
          <p ref={copyrigth_two}>
            {t.footer.copyrigth_2} <strong>Agustín</strong>
          </p>
          <p ref={copyrigth_three}>
            {t.footer.copyrigth_3} <strong>Next.js</strong>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
