"use client";
import styles from "./Footer.module.css";
import Link from "next/link";
import Image from "next/image";
import user_image from "@/assets/images/user_footer.png";
import { useTranslation } from "@/Hooks/useTranslations";
import ArrowOutward from "@/assets/icons/ArrowOutward";
import { useLanguageStore } from "@/app/store";

const Footer = () => {
  //Zustand
  const t = useTranslation();
  const { setScaling } = useLanguageStore();

  return (
    <footer className={styles.container}>
      <div className={styles.content}>
        <div className={styles.info_me}>
          <div className={styles.avatar}>
            <Image
              src={user_image}
              width={30}
              height={30}
              alt="image_user"
              quality={100}
            />
            <span>Agustín Asaad</span>
          </div>
          <p>{t.footer.paragraph}</p>
          <Link
            href="mailto:agusasaad1099@hotmail.com"
            className={styles.link_mail}
            onMouseEnter={() => setScaling(true)}
            onMouseLeave={() => setScaling(false)}
          >
            agusasaad1099@hotmail.com{" "}
            <ArrowOutward color="#999999" width="16px" height="16px" />
          </Link>
        </div>
        <div className={styles.content_list}>
          <ul className={styles.navigate}>
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
          <ul className={styles.navigate}>
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
      <div className={styles.line}></div>
      <div className={styles.copyright}>
        <p>
          {" "}
          © {new Date().getFullYear() || 2025} {t.footer.copyrigth_1}
        </p>
        <div className={styles.other_texts}>
          <p>
            {t.footer.copyrigth_2} <strong>Agustín</strong>
          </p>
          <p>
            {t.footer.copyrigth_3} <strong>Next.js</strong>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
