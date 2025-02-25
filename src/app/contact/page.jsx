import Link from "next/link";
import styles from "./page.module.css";
import ArrowOutward from "@/assets/icons/ArrowOutward";

const ContactMePage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content_text}>
        <span className={styles.subtitle}>
          <div className={styles.circle}></div>
          Contact Me
        </span>
        <h2>Let's work together</h2>
        <p>
          I'd love to learn more about your project and how I can assist you.
          Feel free to share your project details using the form below. If you
          prefer to email instead, you can reach out to me at.{" "}
          <Link href={"mailto:agusasaad1099@hotmail.com"}>
            agusasaad1099@hotmail.com{" "}
            <ArrowOutward color="white" width="18px" height="18px" />
          </Link>
        </p>
      </div>
      <form className={styles.form}>
        <div className={styles.form_group}>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="First name"
            required
          />
          <input
            type="text"
            id="lastname"
            name="lastname"
            required
            placeholder="Last name"
          />
        </div>
        <div className={styles.form_group}>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            required
          />
          <input
            type="tel"
            id="telefono"
            name="telefono"
            placeholder="Phone"
            required
          />
        </div>
        <div className={styles.form_group}>
          <textarea
            id="message"
            name="message"
            placeholder="Write a message"
            required
          ></textarea>
        </div>
        <button type="submit">Send Message</button>
      </form>
      <div className={styles.end_text}>
        <p>Thank you for your visit, have a great day. &#128075;</p>
      </div>
    </div>
  );
};

export default ContactMePage;
