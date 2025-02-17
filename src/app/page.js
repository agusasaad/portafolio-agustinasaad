"use client";
import dynamic from "next/dynamic";
import MainPage from "@/components/MainPage/MainPage";
import styles from "./page.module.css";
import AboutMe from "@/components/AboutMe/AboutMe";
import MyServices from "@/components/MyServices/MyServices";
import ContactMe from "@/components/ContactMe/ContactMe";

const MyProjects = dynamic(() => import("@/components/MyProjects/MyProjects"), {
  ssr: false,
  loading: () => <p>Cargando proyectos...</p>,
});

export default function Home() {
  return (
    <main className={styles.page}>
      <MainPage />
      <AboutMe />
      <MyServices />
      <MyProjects />
      <ContactMe />
    </main>
  );
}
