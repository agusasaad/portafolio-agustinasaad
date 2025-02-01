import NavBar from "@/components/NavBar/NavBar";
import "./globals.css";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://portfolio-personal-omega.vercel.app/"),
  title: "Agustín Asaad - Front End Developer",
  description:
    "Soy Agustín Asaad, desarrollador Front End especializado en React y Next.js. Con experiencia en diseño y desarrollo de aplicaciones web, me enfoco en crear experiencias intuitivas y optimizadas. Busco desafíos que impulsen mi crecimiento profesional.",
  keywords:
    "Agustín Asaad, Front End Developer, desarrollador web, React, Next.js, desarrollo de aplicaciones, interfaces de usuario, diseño web, JavaScript, desarrollo web, UI/UX, optimización de rendimiento, integración de APIs, desarrollo responsivo, animaciones web, tecnologías modernas",
  author: "Agustín Asaad",
  openGraph: {
    title: "Agustín Asaad - Front End Developer",
    description:
      "Desarrollador Front End con experiencia en React y Next.js, especializado en la creación de interfaces intuitivas y optimizadas.",
    images: "/image.jpeg",
    url: "https://portfolio-personal-omega.vercel.app/",
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
    images: "/image.jpeg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
