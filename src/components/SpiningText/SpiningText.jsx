import Image from "next/image";
import styles from "./SpiningText.module.css";
import image_about_me from "@/assets/images/image_profile.png";

const SpiningText = () => {
  const text = "FRONTEND DEVELOPER - FRONTEND DEVELOPER - ";
  const length = text.length;
  const deg = 360 / length;

  return (
    <div className={styles.container}>
      <div className={styles.spinning_text}>
        <div className={styles.text_content}>
          {text.split("").map((letter, index) => (
            <span
              key={index}
              style={{
                transform: `rotate(${deg * index}deg)`,
              }}
            >
              {letter}
            </span>
          ))}
        </div>
      </div>
      <div className={styles.container_image}>
        <Image
          src={image_about_me}
          width={145}
          height={145}
          alt="image_about_me"
          quality={100}
        />
      </div>
    </div>
  );
};

export default SpiningText;
