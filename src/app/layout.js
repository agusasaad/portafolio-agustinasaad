import NavBar from "@/components/NavBar/NavBar";
import "./globals.css";
import { Poppins } from "next/font/google";
import ButtonLanguague from "@/components/ButtonLanguague/ButtonLanguague";
import CursorPoiter from "@/components/CursorPoiter/CursorPoiter";
import Footer from "@/components/Footer/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  metadataBase: new URL("https://portafolio-agustinasaad.vercel.app/"),
  title: "Agustín Asaad - Front End Developer",
  description:
    "Desarrollador Front End especializado en React y Next.js, creando aplicaciones web optimizadas y experiencias de usuario intuitivas. ¡Descubre mis proyectos y desafíos profesionales!",
  keywords:
    "Agustín Asaad, Front End Developer, desarrollador web, React, Next.js, desarrollo de aplicaciones, interfaces de usuario, diseño web, JavaScript, desarrollo web, UI/UX, optimización de rendimiento, integración de APIs, desarrollo responsivo, animaciones web, tecnologías modernas",
  author: "Agustín Asaad",
  openGraph: {
    title: "Agustín Asaad - Front End Developer",
    description:
      "Desarrollador Front End con experiencia en React y Next.js, especializado en la creación de interfaces intuitivas y optimizadas.",
    images: "https://portafolio-agustinasaad.vercel.app/image.jpeg",
    url: "https://portafolio-agustinasaad.vercel.app/",
    type: "website",
    site_name: "Agustín Asaad - Portfolio",
  },
  alternates: {
    canonical: "/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Agustín Asaad - Front End Developer",
    description:
      "Soy desarrollador Front End con experiencia en React y Next.js. Diseño y desarrollo aplicaciones web con un enfoque en rendimiento y usabilidad.",
    images: "https://portafolio-agustinasaad.vercel.app/image.jpeg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={poppins.className}>
        <NavBar />
        <CursorPoiter />
        {children}
        <ButtonLanguague />
        <Footer />
      </body>
    </html>
  );
}
