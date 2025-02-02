import { services } from "@/utils/Info";
import styles from "./MyServices.module.css";

const MyServices = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content_title}>
        <span>Services</span>
        <h2>How I can help you</h2>
      </div>

      <div className={styles.content_card_services}>
        {services.map((service, index) => (
          <div key={index} className={styles.card_service}>
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
