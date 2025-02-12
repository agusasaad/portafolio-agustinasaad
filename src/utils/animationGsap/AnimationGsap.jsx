import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
//Animaciones navbar
export const navBarAnimation = ({ navBarContainer, circleRef }) => {
  gsap.fromTo(
    navBarContainer.current,
    {
      y: -50,
      opacity: 0,
      visibility: "hidden",
    },
    {
      opacity: 1,
      y: 0,
      duration: 1.5,
      ease: "back.inOut",
      stagger: 0.5,
      visibility: "visible",
      delay: 0.3,
    }
  );

  gsap.to(circleRef.current, {
    scale: 2.5,
    opacity: 0,
    ease: "power1",
    repeat: -1,
    duration: 1.3,
  });
};
//Animaciones MainPage
export const mainPageAnimation = ({
  subtitleRef,
  titleRef,
  description,
  carrucel,
}) => {
  gsap.fromTo(
    [
      subtitleRef.current,
      titleRef.current,
      description.current,
      carrucel.current,
    ],
    {
      y: 100,
      opacity: 0,
      visibility: "hidden",
    },
    {
      opacity: 1,
      y: 0,
      visibility: "visible",
      ease: "power3.out",
      duration: 1.5,
      stagger: 0.3,
      delay: 0.5,
    }
  );
};
//Animaciones AboutMe
export const aboutMeAnimation = ({
  container,
  imageProfile,
  title,
  paragraph,
  button,
}) => {
  gsap.registerPlugin(ScrollTrigger);
  gsap.from(imageProfile.current, {
    opacity: 0,
    scale: 0.2,
    ease: "power2",
    duration: 1.2,
    delay: 0.2,
    scrollTrigger: {
      trigger: container.current,
      start: "top 80%",
      end: "bottom bottom",
    },
  });

  gsap.from([title.current, paragraph.current, button.current], {
    opacity: 0,
    y: 100,
    ease: "power2",
    duration: 1.2,
    stagger: 0.2,
    delay: 0.5,
    scrollTrigger: {
      trigger: container.current,
      start: "top 80%",
      end: "bottom bottom",
    },
  });
};
//Animaciones MyServices
export const servicesAnimation = ({ container, title, cardsRef }) => {
  gsap.registerPlugin(ScrollTrigger);

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: container.current,
      start: "top 60%",
      end: "bottom top",
    },
  });

  tl.fromTo(
    title.current,
    { y: 100, opacity: 0, visibility: "hidden" },
    {
      y: 0,
      opacity: 1,
      visibility: "visible",
      duration: 0.8,
      ease: "power2",
    }
  ).fromTo(
    cardsRef.current,
    { y: 100, opacity: 0, visibility: "hidden" },
    {
      y: 0,
      opacity: 1,
      visibility: "visible",
      duration: 0.8,
      ease: "power2",
      stagger: 0.2,
    },
    "-=0.5"
  );
};
//Animaciones MyProjects
export const projectAnimation = ({
  container,
  title,
  cardsRef,
  cardMobileRef,
  circleRef,
}) => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: container.current,
      start: "top 60%",
      end: "bottom top",
    },
  });

  tl.fromTo(
    title.current,
    { y: 100, opacity: 0, visibility: "hidden" },
    {
      y: 0,
      opacity: 1,
      visibility: "visible",
      duration: 0.8,
      ease: "power2",
    }
  );

  if (window.matchMedia("(max-width: 768px)").matches) {
    // Animación para móviles
    tl.fromTo(
      cardMobileRef.current,
      { y: 100, opacity: 0, visibility: "hidden" },
      {
        y: 0,
        opacity: 1,
        visibility: "visible",
        duration: 0.8,
        ease: "power2",
        stagger: 0.2,
      },
      "-=0.5"
    );
  } else {
    // Animación para pantallas grandes
    tl.fromTo(
      cardsRef.current,
      { y: 100, opacity: 0, visibility: "hidden" },
      {
        y: 0,
        opacity: 1,
        visibility: "visible",
        duration: 0.8,
        ease: "power2",
        stagger: 0.2,
      },
      "-=0.5"
    );
  }

  gsap.to(circleRef.current, {
    scale: 2.5,
    opacity: 0,
    ease: "power1",
    repeat: -1,
    duration: 1.3,
  });
};
