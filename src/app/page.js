"use client";
import dynamic from "next/dynamic";
import styles from "./page.module.css";
import MainPage from "@/components/MainPage/MainPage";

const AboutMe = dynamic(() => import("@/components/AboutMe/AboutMe"));
const MyProjects = dynamic(() => import("@/components/MyProjects/MyProjects"));
const MyServices = dynamic(() => import("@/components/MyServices/MyServices"));
const ContactMe = dynamic(() => import("@/components/ContactMe/ContactMe"));

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
