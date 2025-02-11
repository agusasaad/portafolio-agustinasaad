import { useTranslation } from "@/Hooks/useTranslations";
import SymbioNetCard from "@/assets/images/SymbioNet/Symbionet.png";
import SymbionNetFirtBanner from "@/assets/images/SymbioNet/first_banner.png";
import SymbioNet from "@/assets/images/SymbioNet/symbionet_detail.png";
import portfolioModal from "@/assets/images/Portfolio/headerModalPortfolio.png";
import portfolioCard from "@/assets/images/Portfolio/cardPortfolio.png";
import portfolioCapture_1 from "@/assets/images/Portfolio/imageRepresentPortfolio.jpg";
import mawidaCard from "@/assets/images/PosadaMawida/mawidaCard.png";
import posadaModal from "@/assets/images/PosadaMawida/headerModalPosada.jpg";
import PosadaCapture_1 from "@/assets/images/PosadaMawida/capture_1.jpg";
import driverCard from "@/assets/images/Drivers/DriverCard.png";
import driversModal from "@/assets/images/Drivers/headerModalDriver.jpg";
import driversCapture_1 from "@/assets/images/Drivers/Capture_1.jpg";
import weDevelopCard from "@/assets/images/WeDevelop/CardWeDevelop.png";
import weDevelopModal from "@/assets/images/WeDevelop/headerModalWeDevelop.png";
import weCapture_1 from "@/assets/images/WeDevelop/capture_1.png";

export const getProjects = () => {
  const t = useTranslation();

  return [
    {
      id: 1,
      name: t.projects.projectDetails.personalPortfolio.name,
      cargo: t.projects.projectDetails.personalPortfolio.cargo,
      date: t.projects.projectDetails.personalPortfolio.date,
      imageCard: portfolioCard,
      imageModal: portfolioModal,
      paragraph_1: t.projects.projectDetails.personalPortfolio.paragraph_1,
      paragraph_2: t.projects.projectDetails.personalPortfolio.paragraph_2,
      technologies: "Javascript · React · ChakraUi · GSAP",
      repository: "https://github.com/agusasaad/Portafolio",
      img: portfolioCapture_1,
    },
    {
      id: 2,
      name: t.projects.projectDetails.symbioNet.name,
      cargo: t.projects.projectDetails.symbioNet.cargo,
      date: t.projects.projectDetails.symbioNet.date,
      imageCard: SymbioNetCard,
      imageModal: SymbionNetFirtBanner,
      paragraph_1: t.projects.projectDetails.symbioNet.paragraph_1,
      paragraph_2: t.projects.projectDetails.symbioNet.paragraph_2,
      technologies: "Javascript · React · Next.js · CSS Modules · GSAP",
      repository: "https://github.com/agusasaad/teamBoost",
      web: "https://www.symbionet.tech/",
      img: SymbioNet,
    },
    {
      id: 3,
      name: t.projects.projectDetails.weDevelop.name,
      cargo: t.projects.projectDetails.weDevelop.cargo,
      date: t.projects.projectDetails.weDevelop.date,
      imageCard: weDevelopCard,
      imageModal: weDevelopModal,
      paragraph_1: t.projects.projectDetails.weDevelop.paragraph_1,
      paragraph_2: t.projects.projectDetails.weDevelop.paragraph_2,
      technologies:
        "Javascript · ReactJs · Redux · NodeJs · Express · MongoDB · Mercado Pago · Aut0",
      repository: "https://github.com/Freetzen/WeDevelop",
      img: weCapture_1,
    },
    {
      id: 4,
      name: t.projects.projectDetails.posadaMawida.name,
      cargo: t.projects.projectDetails.posadaMawida.cargo,
      date: t.projects.projectDetails.posadaMawida.date,
      imageCard: mawidaCard,
      imageModal: posadaModal,
      paragraph_1: t.projects.projectDetails.posadaMawida.paragraph_1,
      paragraph_2: t.projects.projectDetails.posadaMawida.paragraph_2,
      technologies:
        "Javascript · ReactJs · chakraUi · Redux · Node.js · Express · MongoDB",
      repository: "https://github.com/Freetzen/Menu-Posada-Mawida",
      img: PosadaCapture_1,
    },
    {
      id: 5,
      name: t.projects.projectDetails.drivers.name,
      cargo: t.projects.projectDetails.drivers.cargo,
      date: t.projects.projectDetails.drivers.date,
      imageCard: driverCard,
      imageModal: driversModal,
      paragraph_1: t.projects.projectDetails.drivers.paragraph_1,
      paragraph_2: t.projects.projectDetails.drivers.paragraph_2,
      technologies:
        "Javascript · React · Redux · Node.js · Express · Postgresql · Sequelize",
      repository: "https://github.com/agusasaad/Drivers",
      img: driversCapture_1,
    },
  ];
};
