import MainPage from "@/components/MainPage/MainPage";
import styles from "./page.module.css";
import AboutMe from "@/components/AboutMe/AboutMe";

export default function Home() {
  return (
    <main className={styles.page}>
      <MainPage />
      <AboutMe />
    </main>
  );
}
