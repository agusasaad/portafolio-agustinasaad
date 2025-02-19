"use client";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import styles from "./Footer.module.css";
import Link from "next/link";
import Image from "next/image";
import user_image from "@/assets/images/user_footer.webp";
import { useTranslation } from "@/hooks/useTranslations";
import ArrowOutward from "@/assets/icons/ArrowOutward";
import { useLanguageStore } from "@/app/store";
import { footerAnimation } from "@/utils/animationGsap/AnimationGsap";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

const Footer = () => {
  const pathname = usePathname();
  const t = useTranslation();
  const { setScaling } = useLanguageStore();

  // Refs
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
    if (!pathname.startsWith("/detail")) {
      const ctx = gsap.context(() => {
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
      });

      return () => {
        ctx.revert();
        ScrollTrigger.getAll().forEach((st) => st.kill());
      };
    }
  }, [pathname]);

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
            <li>
              <Link
                href={"/"}
                onMouseEnter={() => setScaling(true)}
                onMouseLeave={() => setScaling(false)}
              >
                {t.navbar.home}
              </Link>
            </li>
            <li>
              <Link
                href={"/detail/1"}
                onMouseEnter={() => setScaling(true)}
                onMouseLeave={() => setScaling(false)}
              >
                {t.navbar.projects}
              </Link>
            </li>
            <li>
              <Link
                href={"#contactme"}
                onMouseEnter={() => setScaling(true)}
                onMouseLeave={() => setScaling(false)}
              >
                {t.navbar.contact}
              </Link>
            </li>
          </ul>
          <ul className={styles.navigate} ref={list_two}>
            <li>
              <Link
                href={"https://www.linkedin.com/in/agustin-asaad/"}
                target="_blank"
                onMouseEnter={() => setScaling(true)}
                onMouseLeave={() => setScaling(false)}
              >
                Linkedin
              </Link>
            </li>
            <li>
              <Link
                href={"https://github.com/agusasaad?tab=repositories"}
                target="_blank"
                onMouseEnter={() => setScaling(true)}
                onMouseLeave={() => setScaling(false)}
              >
                GitHub
              </Link>
            </li>
            <li>
              <Link
                href="mailto:agustinasaad@gmail.com"
                onMouseEnter={() => setScaling(true)}
                onMouseLeave={() => setScaling(false)}
              >
                Gmail
              </Link>
            </li>
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
