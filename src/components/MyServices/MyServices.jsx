"use client";
import Zap from "@/assets/icons/Zap";
import Server from "@/assets/icons/Server";
import Paint from "@/assets/icons/Paint";
import styles from "./MyServices.module.css";
import { useEffect, useRef } from "react";
import { servicesAnimation } from "@/utils/animationGsap/AnimationGsap";
import { useTranslation } from "@/hooks/useTranslations";

const MyServices = () => {
  const t = useTranslation();

  const services = [
    {
      icon: <Zap color="var(--subtitle)" width="25px" height="25px" />,
      title: t.services.cards.card_1.title,
      description: t.services.cards.card_1.description,
    },
    {
      icon: <Server color="var(--subtitle)" width="25px" height="25px" />,
      title: t.services.cards.card_2.title,
      description: t.services.cards.card_2.description,
    },
    {
      icon: <Paint color="var(--subtitle)" width="25px" height="25px" />,
      title: t.services.cards.card_3.title,
      description: t.services.cards.card_3.description,
    },
  ];

  const container = useRef(null);
  const title = useRef(null);
  const cardsRef = useRef([]);
  useEffect(() => {
    servicesAnimation({ container, title, cardsRef });
  }, []);

  return (
    <section className={styles.container} ref={container}>
      <div className={styles.content_title} ref={title}>
        <span className={styles.subtitle}>
          <div className={styles.circle}></div>
          {t.services.subtitle}
        </span>
        <h2>{t.services.title}</h2>
      </div>

      <div className={styles.content_card_services}>
        {services.map((service, index) => (
          <div
            key={index}
            ref={(el) => (cardsRef.current[index] = el)}
            className={styles.card_service}
          >
            <i>{service.icon}</i>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MyServices;
