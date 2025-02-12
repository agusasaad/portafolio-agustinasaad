"use client";
import MainPage from "@/components/MainPage/MainPage";
import styles from "./page.module.css";
import AboutMe from "@/components/AboutMe/AboutMe";
import MyProjects from "@/components/MyProjects/MyProjects";
import MyServices from "@/components/MyServices/MyServices";

export default function Home() {
  return (
    <main className={styles.page}>
      <MainPage />
      <AboutMe />
      <MyProjects />
      <MyServices />
    </main>
  );
}
